import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { AdminOrdersQueryDto, CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { PrismaService } from 'src/prisma.service';
import { PaymentStatus, Prisma, VoucherType } from '@prisma/client';
import { CreateReturnRequestDto } from './dto/create-return-item-request.dto';

type TxClient = Prisma.TransactionClient;

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  // ============================================================
  // CREATE ORDER
  // ============================================================

  async create(userId: number, createOrderDto: CreateOrderDto) {
    try {
      // ============================================================
      // 0. KIỂM TRA ĐƠN THANH TOÁN QUÁ HẠN
      // ============================================================

      const expiredUnpaidOrders = await this.prisma.orders.count({
        where: {
          userId,
          paymentStatus: PaymentStatus.UNPAID,
          paymentMethod: {
            in: ['MOMO', 'VNPAY'],
          },
          expiresAt: {
            lte: new Date(),
          },
        },
      });

      if (expiredUnpaidOrders > 5) {
        throw new BadRequestException('Có nhiều đơn hàng cần xử lý thanh toán');
      }

      // ============================================================
      // 1. VALIDATE PRODUCTS
      // ============================================================

      if (!createOrderDto.products?.length) {
        throw new BadRequestException('Đơn hàng phải có ít nhất một sản phẩm');
      }

      // Kiểm tra quantity
      for (const item of createOrderDto.products) {
        if (!Number.isInteger(item.quantity) || item.quantity <= 0) {
          throw new BadRequestException(
            'Số lượng sản phẩm phải là số nguyên lớn hơn 0',
          );
        }
      }

      // ============================================================
      // 2. LẤY PRODUCT DETAIL IDS
      // ============================================================

      const productDetailIds = createOrderDto.products.map(
        (item) => item.productDetailId,
      );

      // Không cho trùng productDetailId
      if (new Set(productDetailIds).size !== productDetailIds.length) {
        throw new BadRequestException(
          'Không được có sản phẩm trùng nhau trong đơn hàng',
        );
      }

      // ============================================================
      // 3. LẤY PRODUCT DETAILS
      // ============================================================

      const productDetails = await this.prisma.productDetails.findMany({
        where: {
          id: {
            in: productDetailIds,
          },
        },

        select: {
          id: true,
          price: true,
          status: true,

          product: {
            select: {
              id: true,
              name: true,
            },
          },

          color: {
            select: {
              name: true,
            },
          },

          size: {
            select: {
              value: true,
            },
          },

          stock: {
            select: {
              quantity: true,
              reserved: true,
            },
          },
        },
      });

      // ============================================================
      // 4. KIỂM TRA PRODUCT DETAIL
      // ============================================================

      if (productDetails.length !== createOrderDto.products.length) {
        throw new BadRequestException(
          'Có một hoặc nhiều sản phẩm không tồn tại',
        );
      }

      // ============================================================
      // 5. KIỂM TRA PRODUCT + TÍNH SUBTOTAL
      // ============================================================

      let subtotal = new Prisma.Decimal(0);

      for (const orderProduct of createOrderDto.products) {
        const productDetail = productDetails.find(
          (item) => item.id === orderProduct.productDetailId,
        );

        if (!productDetail) {
          throw new BadRequestException('Không tìm thấy sản phẩm');
        }

        // ----------------------------------------------------------
        // Kiểm tra status
        // ----------------------------------------------------------

        if (productDetail.status !== 'ACTIVE') {
          throw new BadRequestException(
            `Sản phẩm ${productDetail.product.name} hiện không thể mua`,
          );
        }

        // ----------------------------------------------------------
        // Kiểm tra stock sơ bộ
        //
        // Chỉ dùng để trả lỗi sớm.
        //
        // KHÔNG dùng kết quả này để reserve.
        // Reserve thật sự sẽ thực hiện bên trong transaction
        // với SELECT ... FOR UPDATE.
        // ----------------------------------------------------------

        const available =
          (productDetail.stock?.quantity ?? 0) -
          (productDetail.stock?.reserved ?? 0);

        if (available <= 0) {
          throw new BadRequestException(
            `Sản phẩm ${productDetail.product.name} đã hết hàng`,
          );
        }

        if (orderProduct.quantity > available) {
          throw new BadRequestException(
            `Sản phẩm ${productDetail.product.name} chỉ còn ${available} sản phẩm`,
          );
        }

        // ----------------------------------------------------------
        // Tính subtotal
        // ----------------------------------------------------------

        subtotal = subtotal.add(productDetail.price.mul(orderProduct.quantity));
      }

      // ============================================================
      // 6. KIỂM TRA ADDRESS
      // ============================================================

      const address = await this.prisma.address.findFirst({
        where: {
          id: createOrderDto.addressId,
          userId,
        },
      });

      if (!address) {
        throw new BadRequestException('Địa chỉ giao hàng không tồn tại');
      }

      // ============================================================
      // 7. SHIPPING FEE
      // ============================================================

      const shippingFee = new Prisma.Decimal(30000);

      // ============================================================
      // 8. DISCOUNT VOUCHER
      // ============================================================

      let discountAmount = new Prisma.Decimal(0);

      let discountVoucherUser: {
        id: number;

        voucher: {
          id: number;
          code: string;
          voucherType: VoucherType;
          discountType: 'PERCENT' | 'FIXED_AMOUNT';
          discountValue: Prisma.Decimal;
          maxDiscount: Prisma.Decimal | null;
          minOrderValue: Prisma.Decimal | null;
          usageLimit: number | null;
          usedCount: number;
          startAt: Date;
          endAt: Date;
          isActive: boolean;
        };
      } | null = null;

      if (createOrderDto.discountVoucherId) {
        console.log('voucherId: ', createOrderDto.discountVoucherId);
        console.log('userId', userId);
        discountVoucherUser = await this.prisma.vouchers_User.findFirst({
          where: {
            voucherId: createOrderDto.discountVoucherId,

            userId,

            isUsed: false,
          },

          select: {
            id: true,

            voucher: {
              select: {
                id: true,
                code: true,
                voucherType: true,
                discountType: true,
                discountValue: true,
                maxDiscount: true,
                minOrderValue: true,
                usageLimit: true,
                usedCount: true,
                startAt: true,
                endAt: true,
                isActive: true,
              },
            },
          },
        });

        console.log(discountVoucherUser);

        if (!discountVoucherUser) {
          throw new BadRequestException(
            'Voucher giảm giá không thuộc tài khoản hoặc đã được sử dụng',
          );
        }

        const voucher = discountVoucherUser.voucher;

        if (voucher.voucherType !== VoucherType.DISCOUNT) {
          throw new BadRequestException(
            'Voucher này không phải voucher giảm giá',
          );
        }

        this.validateVoucher(voucher, subtotal);

        discountAmount = this.calculateDiscount(voucher, subtotal);

        if (discountAmount.gt(subtotal)) {
          discountAmount = subtotal;
        }
      }

      // ============================================================
      // 9. FREESHIP VOUCHER
      // ============================================================

      let shippingDiscount = new Prisma.Decimal(0);

      let shippingVoucherUser: {
        id: number;

        voucher: {
          id: number;
          code: string;
          voucherType: VoucherType;
          discountType: 'PERCENT' | 'FIXED_AMOUNT';
          discountValue: Prisma.Decimal;
          maxDiscount: Prisma.Decimal | null;
          minOrderValue: Prisma.Decimal | null;
          usageLimit: number | null;
          usedCount: number;
          startAt: Date;
          endAt: Date;
          isActive: boolean;
        };
      } | null = null;

      if (createOrderDto.shippingVoucherId) {
        shippingVoucherUser = await this.prisma.vouchers_User.findFirst({
          where: {
            voucherId: createOrderDto.shippingVoucherId,

            userId,

            isUsed: false,
          },

          select: {
            id: true,

            voucher: {
              select: {
                id: true,
                code: true,
                voucherType: true,
                discountType: true,
                discountValue: true,
                maxDiscount: true,
                minOrderValue: true,
                usageLimit: true,
                usedCount: true,
                startAt: true,
                endAt: true,
                isActive: true,
              },
            },
          },
        });

        if (!shippingVoucherUser) {
          throw new BadRequestException(
            'Voucher freeship không thuộc tài khoản hoặc đã được sử dụng',
          );
        }

        const voucher = shippingVoucherUser.voucher;

        if (voucher.voucherType !== VoucherType.FREESHIP) {
          throw new BadRequestException(
            'Voucher này không phải voucher freeship',
          );
        }

        this.validateVoucher(voucher, subtotal);

        shippingDiscount = this.calculateDiscount(voucher, shippingFee);

        if (shippingDiscount.gt(shippingFee)) {
          shippingDiscount = shippingFee;
        }
      }

      // ============================================================
      // 10. TOTAL
      // ============================================================

      const totalPrice = subtotal
        .add(shippingFee)
        .sub(discountAmount)
        .sub(shippingDiscount);

      // ============================================================
      // 11. ORDER CODE
      // ============================================================

      const orderCode = this.generateOrderCode();

      // ============================================================
      // 12. TRANSACTION
      // ============================================================

      const order = await this.prisma.$transaction(async (tx: TxClient) => {
        // ======================================================
        // 12.1 LOCK TOÀN BỘ STOCK CỦA ORDER
        // ======================================================

        /*
         * Ví dụ:
         *
         * products:
         *
         * [
         *   { productDetailId: 10, quantity: 2 },
         *   { productDetailId: 20, quantity: 1 },
         *   { productDetailId: 30, quantity: 3 }
         * ]
         *
         * Ta sẽ lock:
         *
         * ProductStock 10
         * ProductStock 20
         * ProductStock 30
         *
         * trong cùng một transaction.
         */

        const sortedProductDetailIds = [...productDetailIds].sort(
          (a, b) => a - b,
        );

        const stockRows = await tx.$queryRaw<
          Array<{
            id: number;
            productDetailId: number;
            quantity: number;
            reserved: number;
          }>
        >`
              SELECT
                id,
                productDetailId,
                quantity,
                reserved
              FROM ProductStock
              WHERE productDetailId IN (
                ${Prisma.join(sortedProductDetailIds)}
              )
              ORDER BY productDetailId
              FOR UPDATE
            `;

        // ======================================================
        // 12.2 KIỂM TRA STOCK RECORD
        // ======================================================

        /*
         * Mỗi ProductDetail phải có đúng 1 ProductStock.
         *
         * Ví dụ:
         *
         * productDetailIds = [10,20,30]
         *
         * stockRows phải có:
         *
         * [10,20,30]
         */

        if (stockRows.length !== productDetailIds.length) {
          throw new BadRequestException(
            'Một hoặc nhiều sản phẩm chưa có thông tin tồn kho',
          );
        }

        // ======================================================
        // 12.3 MAP STOCK THEO PRODUCT DETAIL ID
        // ======================================================

        /*
         * Chuyển:
         *
         * [
         *   {
         *     productDetailId: 10,
         *     quantity: 10,
         *     reserved: 2
         *   },
         *
         *   {
         *     productDetailId: 20,
         *     quantity: 5,
         *     reserved: 1
         *   }
         * ]
         *
         * thành:
         *
         * Map(
         *   10 -> stock 10,
         *   20 -> stock 20
         * )
         */

        const stockMap = new Map<
          number,
          {
            id: number;
            productDetailId: number;
            quantity: number;
            reserved: number;
          }
        >(stockRows.map((stock) => [stock.productDetailId, stock]));

        // ======================================================
        // 12.4 CHECK TẤT CẢ STOCK
        // ======================================================

        /*
         * QUAN TRỌNG:
         *
         * Phải kiểm tra TẤT CẢ sản phẩm trước.
         *
         * Nếu chỉ cần 1 sản phẩm không đủ:
         *
         * → throw
         * → transaction rollback
         * → không reserve sản phẩm nào.
         */

        for (const orderProduct of createOrderDto.products) {
          const stock = stockMap.get(orderProduct.productDetailId);

          if (!stock) {
            throw new BadRequestException(
              `Không tìm thấy tồn kho cho productDetailId ${orderProduct.productDetailId}`,
            );
          }

          // available = quantity - reserved
          const available = stock.quantity - stock.reserved;

          if (available < orderProduct.quantity) {
            const productDetail = productDetails.find(
              (item) => item.id === orderProduct.productDetailId,
            );

            throw new BadRequestException(
              `Sản phẩm ${
                productDetail?.product.name ?? orderProduct.productDetailId
              } không đủ tồn kho. Còn lại: ${Math.max(available, 0)}`,
            );
          }
        }

        // ======================================================
        // 12.5 RESERVE TẤT CẢ STOCK
        // ======================================================

        /*
         * Đến đây mới bắt đầu reserved.
         *
         * Vì tất cả stock đã được lock và kiểm tra.
         */

        for (const orderProduct of createOrderDto.products) {
          const stock = stockMap.get(orderProduct.productDetailId);

          if (!stock) {
            throw new BadRequestException('Không tìm thấy tồn kho sản phẩm');
          }

          await tx.productStock.update({
            where: {
              id: stock.id,
            },

            data: {
              reserved: {
                increment: orderProduct.quantity,
              },
            },
          });
        }

        // ======================================================
        // 12.6 TĂNG USED COUNT DISCOUNT VOUCHER
        // ======================================================

        if (discountVoucherUser) {
          const voucher = discountVoucherUser.voucher;

          if (voucher.usageLimit !== null) {
            const updated = await tx.vouchers.updateMany({
              where: {
                id: voucher.id,

                usedCount: {
                  lt: voucher.usageLimit,
                },
              },

              data: {
                usedCount: {
                  increment: 1,
                },
              },
            });

            if (updated.count !== 1) {
              throw new BadRequestException(
                'Voucher giảm giá đã hết lượt sử dụng',
              );
            }
          } else {
            await tx.vouchers.update({
              where: {
                id: voucher.id,
              },

              data: {
                usedCount: {
                  increment: 1,
                },
              },
            });
          }
        }

        // ======================================================
        // 12.7 TĂNG USED COUNT FREESHIP
        // ======================================================

        if (shippingVoucherUser) {
          const voucher = shippingVoucherUser.voucher;

          if (voucher.usageLimit !== null) {
            const updated = await tx.vouchers.updateMany({
              where: {
                id: voucher.id,

                usedCount: {
                  lt: voucher.usageLimit,
                },
              },

              data: {
                usedCount: {
                  increment: 1,
                },
              },
            });

            if (updated.count !== 1) {
              throw new BadRequestException(
                'Voucher freeship đã hết lượt sử dụng',
              );
            }
          } else {
            await tx.vouchers.update({
              where: {
                id: voucher.id,
              },

              data: {
                usedCount: {
                  increment: 1,
                },
              },
            });
          }
        }

        // ======================================================
        // 12.8 TẠO ORDER
        // ======================================================

        const expiresAt =
          createOrderDto.paymentMethod !== 'COD'
            ? new Date(Date.now() + 15 * 60 * 1000)
            : null;

        const newOrder = await tx.orders.create({
          data: {
            orderCode,

            userId,

            status: 'PENDING',

            paymentMethod: createOrderDto.paymentMethod,

            paymentStatus: 'UNPAID',

            subtotal,

            shippingFee,

            discountAmount,

            shippingDiscount,

            totalPrice,

            discountVoucherId: discountVoucherUser?.id ?? null,

            shippingVoucherId: shippingVoucherUser?.id ?? null,

            receiverName: address.receiverName,

            receiverPhone: address.receiverPhone,

            receiverAddress: `${address.street}, ${address.ward}, ${address.city}`,

            note: createOrderDto.note ?? null,

            expiresAt,
          },
        });

        // ======================================================
        // 12.9 TẠO ORDER DETAILS
        // ======================================================

        await tx.orderDetails.createMany({
          data: createOrderDto.products.map((orderProduct) => {
            const productDetail = productDetails.find(
              (item) => item.id === orderProduct.productDetailId,
            );

            if (!productDetail) {
              throw new BadRequestException('Không tìm thấy product detail');
            }

            return {
              orderId: newOrder.id,

              productDetailId: productDetail.id,

              quantity: orderProduct.quantity,

              // Snapshot price
              price: productDetail.price,

              // Snapshot product
              productName: productDetail.product.name,

              // Snapshot color
              colorName: productDetail.color.name,

              // Snapshot size
              sizeValue: productDetail.size.value,

              // Snapshot image
              img: orderProduct.img,
            };
          }),
        });

        for (const orderProduct of createOrderDto.products) {
          const stock = stockMap.get(orderProduct.productDetailId);

          if (!stock) {
            throw new BadRequestException('Không tìm thấy tồn kho sản phẩm');
          }

          await tx.productStock.update({
            where: {
              id: stock.id,
            },

            data: {
              reserved: {
                decrement: orderProduct.quantity,
              },
              quantity: {
                decrement: orderProduct.quantity,
              }
            },
          });
        }

        // ======================================================
        // 12.10 XÓA CART CỦA USER
        // ======================================================

        await tx.cartItems.deleteMany({
          where: {
            productDetailId: {
              in: productDetailIds,
            },

            cart: {
              userId,
            },
          },
        });

        // ======================================================
        // 12.11 ĐÁNH DẤU DISCOUNT VOUCHER ĐÃ DÙNG
        // ======================================================

        if (createOrderDto.discountVoucherId) {
          await tx.vouchers_User.update({
            where: {
              userId_voucherId: {
                userId,

                voucherId: createOrderDto.discountVoucherId,
              },
            },

            data: {
              isUsed: true,
            },
          });
        }

        // ======================================================
        // 12.12 ĐÁNH DẤU FREESHIP VOUCHER ĐÃ DÙNG
        // ======================================================

        if (createOrderDto.shippingVoucherId) {
          await tx.vouchers_User.update({
            where: {
              userId_voucherId: {
                userId,

                voucherId: createOrderDto.shippingVoucherId,
              },
            },

            data: {
              isUsed: true,
            },
          });
        }

        // ======================================================
        // 12.13 TRẢ ORDER
        // ======================================================

        return tx.orders.findUnique({
          where: {
            id: newOrder.id,
          },

          select: {
            id: true,

            orderCode: true,

            totalPrice: true,

            paymentMethod: true,

            paymentStatus: true,

            expiresAt: true,
          },
        });
      });

      // ============================================================
      // 13. RESPONSE
      // ============================================================

      return {
        message: 'Tạo đơn hàng thành công',

        data: {
          ...order,

          totalPrice: order?.totalPrice ? Number(order.totalPrice) : null,
        },
      };
    } catch (error) {
      // ============================================================
      // BAD REQUEST
      // ============================================================

      if (error instanceof BadRequestException) {
        throw error;
      }

      // ============================================================
      // LOG
      // ============================================================

      console.error('CREATE ORDER ERROR:', error);

      // ============================================================
      // INTERNAL ERROR
      // ============================================================

      throw new InternalServerErrorException('Đã xảy ra lỗi khi tạo đơn hàng');
    }
  }

  // ============================================================
  // VALIDATE VOUCHER
  // ============================================================

  private validateVoucher(
    voucher: {
      isActive: boolean;
      startAt: Date;
      endAt: Date;
      usageLimit: number | null;
      usedCount: number;
      minOrderValue: Prisma.Decimal | null;
    },
    subtotal: Prisma.Decimal,
  ) {
    const now = new Date();

    if (!voucher.isActive) {
      throw new BadRequestException('Voucher hiện không hoạt động');
    }

    if (now < voucher.startAt || now > voucher.endAt) {
      throw new BadRequestException('Voucher đã hết hạn hoặc chưa bắt đầu');
    }

    if (
      voucher.usageLimit !== null &&
      voucher.usedCount >= voucher.usageLimit
    ) {
      throw new BadRequestException('Voucher đã hết lượt sử dụng');
    }

    if (voucher.minOrderValue !== null && subtotal.lt(voucher.minOrderValue)) {
      throw new BadRequestException(
        `Đơn hàng chưa đạt giá trị tối thiểu để sử dụng voucher`,
      );
    }
  }

  // ============================================================
  // CALCULATE DISCOUNT
  // ============================================================

  private calculateDiscount(
    voucher: {
      discountType: 'PERCENT' | 'FIXED_AMOUNT';
      discountValue: Prisma.Decimal;
      maxDiscount: Prisma.Decimal | null;
    },
    amount: Prisma.Decimal,
  ) {
    let discount = new Prisma.Decimal(0);

    if (voucher.discountType === 'PERCENT') {
      discount = amount.mul(voucher.discountValue).div(100);

      if (voucher.maxDiscount !== null && discount.gt(voucher.maxDiscount)) {
        discount = voucher.maxDiscount;
      }
    }

    if (voucher.discountType === 'FIXED_AMOUNT') {
      discount = voucher.discountValue;
    }

    return discount;
  }

  // ============================================================
  // ORDER CODE
  // ============================================================

  private generateOrderCode() {
    const timestamp = Date.now();

    const random = Math.floor(1000 + Math.random() * 9000);

    return `ORD-${timestamp}-${random}`;
  }

  async findAll(userId: number) {
    try {
      const order = await this.prisma.orders.findMany({
        where: {
          userId,
        },

        orderBy: {
          createdAt: 'desc',
        },

        select: {
          orderCode: true,
          status: true,
          items: {
            select: {
              id: true,
              productDetail: {
                select: {
                  id: true,
                  product: {
                    select: {
                      id: true,
                      name: true,
                    },
                  },
                  color: {
                    select: {
                      id: true,
                      name: true,
                    },
                  },
                  size: {
                    select: {
                      value: true,
                    },
                  },

                  // price: true,
                },
              },
              img: true,
              price: true,
              quantity: true,
            },
          },
          subtotal: true,
        },
      });
      if (!order) {
        throw new BadRequestException('Chưa có order');
      }
      return order;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async getAdminOrders(query: AdminOrdersQueryDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;

    const skip = (page - 1) * limit;

    try {
      const [orders, total] = await this.prisma.$transaction([
        this.prisma.orders.findMany({
          where: {
            OR: [
              {
                paymentMethod: 'COD',
              },
              {
                paymentMethod: {
                  in: ['MOMO', 'VNPAY'],
                },
                paymentStatus: 'PAID',
              },
            ],
          },
          skip,
          take: limit,

          orderBy: {
            createdAt: 'desc',
          },

          select: {
            id: true,
            orderCode: true,
            status: true,
            totalPrice: true,
            createdAt: true,

            user: {
              select: {
                id: true,
                name: true,
                email: true,
                phone: true,
              },
            },

            items: {
              select: {
                id: true,
                quantity: true,
                price: true,
                img: true,

                productDetail: {
                  select: {
                    id: true,
                    price: true,

                    product: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },

                    color: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },

                    size: {
                      select: {
                        id: true,
                        value: true,
                      },
                    },
                  },
                },
              },
            },
          },
        }),

        this.prisma.orders.count({
          where: {
            OR: [
              {
                paymentMethod: 'COD',
              },
              {
                paymentMethod: {
                  in: ['MOMO', 'VNPAY'],
                },
                paymentStatus: 'PAID',
              },
            ],
          },
        }),
      ]);

      const totalPages = Math.ceil(total / limit);

      return {
        items: orders.map((order) => ({
          id: order.id,

          orderCode: order.orderCode,

          status: order.status,

          totalAmount: Number(order.totalPrice),

          createdAt: order.createdAt.toISOString(),

          user: order.user
            ? {
                id: order.user.id,
                name: order.user.name,
                email: order.user.email,
                phone: order.user.phone ?? undefined,
              }
            : undefined,

          items: order.items.map((item) => ({
            id: item.id,

            quantity: item.quantity,

            /*
             * Giá trong OrderDetails là giá tại thời điểm mua.
             * Không nên dùng ProductDetails.price ở đây để tính
             * lịch sử đơn hàng.
             */
            subtotal: Number(item.price) * item.quantity,

            img: item.img ?? undefined,

            productDetail: {
              id: item.productDetail.id,

              price: Number(item.price),

              product: {
                id: item.productDetail.product.id,
                name: item.productDetail.product.name,
              },

              color: item.productDetail.color
                ? {
                    id: item.productDetail.color.id,
                    name: item.productDetail.color.name,
                  }
                : undefined,

              size: item.productDetail.size
                ? {
                    id: item.productDetail.size.id,
                    value: item.productDetail.size.value,
                  }
                : undefined,
            },
          })),
        })),

        pagination: {
          page,
          limit,
          total,
          totalPages,

          hasNextPage: page < totalPages,

          hasPreviousPage: page > 1,
        },
      };
    } catch (error) {
      console.error('Get admin orders error:', error);

      throw new InternalServerErrorException(
        'Không thể lấy danh sách đơn hàng',
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  async update(updateOrderDto: UpdateOrderDto) {
    try {
      await this.prisma.$transaction(async (tx) => {
        const order = await tx.orders.findUnique({
          where: {
            orderCode: updateOrderDto.orderCode,
          },

          select: {
            status: true,

            items: {
              select: {
                quantity: true,

                productDetail: {
                  select: {
                    productId: true,

                    stock: {
                      select: {
                        id: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });

        if (!order) {
          throw new NotFoundException('Không tìm thấy đơn hàng');
        }

        const currentStatus = order.status;
        const newStatus = updateOrderDto.orderStatus;

        // Không cho update cùng một trạng thái
        if (currentStatus === newStatus) {
          throw new BadRequestException('Đơn hàng đang ở trạng thái này');
        }

        // if (newStatus === 'SHIPPING' && currentStatus === 'CONFIRMED') {
        //   for (const item of order.items) {
        //     const stockId = item.productDetail.stock?.id;

        //     if (!stockId) {
        //       throw new BadRequestException(
        //         'Sản phẩm không có thông tin tồn kho',
        //       );
        //     }

        //     await tx.productStock.update({
        //       where: {
        //         id: stockId,
        //       },

        //       data: {
        //         quantity: {
        //           decrement: item.quantity,
        //         },

        //         reserved: {
        //           decrement: item.quantity,
        //         },
        //       },
        //     });
        //   }
        // }

        /**
         * ==========================================
         * DELIVERED
         * ==========================================
         *
         * Khi giao hàng thành công:
         *
         * purchases += quantity
         *
         * purchases là tổng số lượng đã bán
         */
        if (newStatus === 'DELIVERED' && currentStatus === 'SHIPPING') {
          /**
           * Gom quantity theo productId
           *
           * Ví dụ:
           *
           * item 1:
           * productId = 1
           * quantity = 2
           *
           * item 2:
           * productId = 1
           * quantity = 3
           *
           * item 3:
           * productId = 2
           * quantity = 1
           *
           * => product 1 += 5
           * => product 2 += 1
           */
          const purchaseMap = new Map<number, number>();

          for (const item of order.items) {
            const productId = item.productDetail.productId;

            const currentQuantity = purchaseMap.get(productId) ?? 0;

            purchaseMap.set(productId, currentQuantity + item.quantity);
          }

          /**
           * Update từng product
           */
          for (const [productId, quantity] of purchaseMap.entries()) {
            await tx.products.update({
              where: {
                id: productId,
              },

              data: {
                purchases: {
                  increment: quantity,
                },
              },
            });
          }
        }

        /**
         * ==========================================
         * CANCELLED
         * ==========================================
         *
         * Nếu hủy khi hàng đang được reserve
         * thì phải trả reserved lại.
         */
        if (
          newStatus === 'CANCELLED' &&
          (currentStatus === 'PENDING' || currentStatus === 'CONFIRMED')
        ) {
          for (const item of order.items) {
            const stockId = item.productDetail.stock?.id;

            if (!stockId) {
              throw new BadRequestException(
                'Sản phẩm không có thông tin tồn kho',
              );
            }

            await tx.productStock.update({
              where: {
                id: stockId,
              },

              data: {
                reserved: {
                  decrement: item.quantity,
                },
              },
            });
          }
        }

        /**
         * ==========================================
         * UPDATE ORDER STATUS
         * ==========================================
         */
        await tx.orders.update({
          where: {
            orderCode: updateOrderDto.orderCode,
          },

          data: {
            status: newStatus,
          },
        });
      });

      return {
        success: true,
        message: 'Cập nhật trạng thái đơn hàng thành công',
      };
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      console.error(error);

      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async findOrderUser(userId: number, orderCode: string) {
    const order = await this.prisma.orders.findUnique({
      where: {
        userId,
        orderCode,
      },

      select: {
        orderCode: true,

        receiverName: true,
        receiverPhone: true,
        receiverAddress: true,

        paymentMethod: true,
        paymentStatus: true,
        status: true,

        note: true,

        subtotal: true,
        shippingFee: true,
        discountAmount: true,
        totalPrice: true,

        createdAt: true,

        items: {
          select: {
            id: true,

            productDetailId: true,
            productName: true,

            colorName: true,
            sizeValue: true,

            price: true,
            quantity: true,

            img: true,
          },
        },
      },
    });

    if (!order) {
      throw new NotFoundException('Không tìm thấy đơn hàng');
    }

    return order;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }

  async returnItemRequest(
    userId: number,
    createReturnRequestDto: CreateReturnRequestDto,
  ) {
    const { orderId, reason, note, items } = createReturnRequestDto;

    // ============================================================
    // 1. Validate DTO
    // ============================================================

    if (!items || items.length === 0) {
      throw new BadRequestException('Phải có ít nhất một sản phẩm để trả hàng');
    }

    // Không cho phép cùng một orderDetail xuất hiện nhiều lần
    const orderDetailIds = items.map((item) => item.orderDetailId);

    const uniqueOrderDetailIds = new Set(orderDetailIds);

    if (uniqueOrderDetailIds.size !== orderDetailIds.length) {
      throw new BadRequestException(
        'Không được trả cùng một sản phẩm nhiều lần trong cùng một yêu cầu',
      );
    }

    // ============================================================
    // 2. Transaction
    // ============================================================

    try {
      return await this.prisma.$transaction(async (tx) => {
        // ========================================================
        // 3. Kiểm tra Order
        // ========================================================

        const order = await tx.orders.findFirst({
          where: {
            id: orderId,
            userId,
          },
          select: {
            id: true,
            userId: true,
            status: true,
            paymentStatus: true,
            items: {
              where: {
                id: {
                  in: orderDetailIds,
                },
              },
              select: {
                id: true,
                productDetailId: true,
                quantity: true,
                price: true,

                productDetail: {
                  select: {
                    id: true,
                    productId: true,

                    product: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },

                    size: {
                      select: {
                        id: true,
                        value: true,
                      },
                    },

                    color: {
                      select: {
                        id: true,
                        name: true,
                      },
                    },
                  },
                },
              },
            },
          },
        });

        if (!order) {
          throw new NotFoundException('Không tìm thấy đơn hàng');
        }

        // ========================================================
        // 4. Kiểm tra trạng thái Order
        // ========================================================

        if (order.status !== 'DELIVERED') {
          throw new BadRequestException(
            'Chỉ có thể trả hàng khi đơn hàng đã giao thành công',
          );
        }

        // Nếu hệ thống của bạn bắt buộc thanh toán thành công
        if (order.paymentStatus !== 'PAID') {
          throw new BadRequestException(
            'Đơn hàng chưa được thanh toán thành công',
          );
        }

        // ========================================================
        // 5. Kiểm tra tất cả OrderDetail có tồn tại
        // ========================================================

        if (order.items.length !== orderDetailIds.length) {
          throw new BadRequestException(
            'Một hoặc nhiều sản phẩm không thuộc đơn hàng này',
          );
        }

        // ========================================================
        // 6. Lấy toàn bộ số lượng đã yêu cầu trả trước đó
        // ========================================================

        const previousReturnedItems = await tx.returnItems.findMany({
          where: {
            orderDetailId: {
              in: orderDetailIds,
            },

            returnRequest: {
              status: {
                notIn: ['REJECTED', 'CANCELLED'],
              },
            },
          },

          select: {
            orderDetailId: true,
            returnedQuantity: true,
          },
        });

        // ========================================================
        // 7. Tính tổng số lượng đã yêu cầu trả
        // ========================================================

        const alreadyReturnedMap = new Map<number, number>();

        for (const item of previousReturnedItems) {
          const current = alreadyReturnedMap.get(item.orderDetailId) ?? 0;

          alreadyReturnedMap.set(
            item.orderDetailId,
            current + item.returnedQuantity,
          );
        }

        // ========================================================
        // 8. Validate từng sản phẩm
        // ========================================================

        for (const item of items) {
          const orderDetail = order.items.find(
            (detail) => detail.id === item.orderDetailId,
          );

          if (!orderDetail) {
            throw new BadRequestException(
              `Không tìm thấy sản phẩm trong đơn hàng`,
            );
          }

          const alreadyReturned = alreadyReturnedMap.get(orderDetail.id) ?? 0;

          const returnableQuantity = orderDetail.quantity - alreadyReturned;

          if (returnableQuantity <= 0) {
            throw new BadRequestException(
              `Sản phẩm "${orderDetail.productDetail.product.name}" đã được trả hết số lượng có thể trả`,
            );
          }

          if (item.returnedQuantity > returnableQuantity) {
            throw new BadRequestException(
              `Sản phẩm "${orderDetail.productDetail.product.name}" chỉ có thể trả tối đa ${returnableQuantity} sản phẩm`,
            );
          }

          if (item.returnedQuantity <= 0) {
            throw new BadRequestException('Số lượng trả phải lớn hơn 0');
          }
        }

        // ========================================================
        // 9. Tạo ReturnRequest
        // ========================================================

        const returnRequest = await tx.returnRequests.create({
          data: {
            orderId: order.id,
            userId,
            reason,
            note,
            status: 'PENDING',

            items: {
              create: items.map((item) => ({
                orderDetailId: item.orderDetailId,
                returnedQuantity: item.returnedQuantity,

                normalQuantity: 0,
                damagedQuantity: 0,
              })),
            },
          },

          include: {
            items: {
              include: {
                orderDetail: {
                  select: {
                    id: true,
                    productDetailId: true,
                    quantity: true,
                    price: true,

                    productDetail: {
                      select: {
                        id: true,

                        product: {
                          select: {
                            id: true,
                            name: true,
                          },
                        },

                        size: {
                          select: {
                            id: true,
                            value: true,
                          },
                        },

                        color: {
                          select: {
                            id: true,
                            name: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        });

        // ========================================================
        // 10. Return response
        // ========================================================

        return returnRequest;
      });
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      throw new InternalServerErrorException('Không thể tạo yêu cầu trả hàng');
    }
  }
}
