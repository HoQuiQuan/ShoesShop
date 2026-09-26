import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { InventoryQueryDto, InventoryStatus } from './dto/inventory-query.dto';
import { StockInDto } from './dto/stock-in.dto';
import { Prisma, ReturnItemStatus, ReturnRequestStatus } from '@prisma/client';
import { StockOutDto } from './dto/stock-out.dto';
import { ApproveReturnDto } from './dto/approveReturn.dto';
import { RejectReturnDto } from './dto/rejectReturn.dto';
import { ReceiveReturnDto } from './dto/receiveReturn.dto';
import { InspectReturnDto } from './dto/inspectReturn.dto';
import { CompleteReturnItemDto } from './dto/completeReturnItem.dto';
import { FindReturnRequestDto } from './dto/find-return-request.dto';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  private async lockStock(
    tx: Prisma.TransactionClient,
    productDetailId: number,
  ) {
    const stocks = await tx.$queryRaw<
      {
        id: number;
        productDetailId: number;
        quantity: number;
        reserved: number;
      }[]
    >`
      SELECT
        id,
        productDetailId,
        quantity,
        reserved
      FROM ProductStock
      WHERE productDetailId = ${productDetailId}
      FOR UPDATE
    `;

    if (stocks.length === 0) {
      throw new NotFoundException('Không tìm thấy tồn kho của sản phẩm');
    }

    return stocks[0];
  }

  // QUẢN LÝ KHO HÀNG

  async findAllInventory(query: InventoryQueryDto) {
    try {
      /**
       * ============================================================
       * 1. PAGINATION
       * ============================================================
       */

      const page = Math.max(1, query.page ?? 1);

      const limit = Math.min(100, Math.max(1, query.limit ?? 10));

      const skip = (page - 1) * limit;

      /**
       * ============================================================
       * 2. SEARCH
       * ============================================================
       */

      const search = query.search?.trim() || undefined;

      const where: Prisma.ProductStockWhereInput = {};

      if (search) {
        where.productDetail = {
          OR: [
            /**
             * Tìm theo tên sản phẩm
             */
            {
              product: {
                name: {
                  contains: search,
                },
              },
            },

            /**
             * Tìm theo tên màu
             */
            {
              color: {
                name: {
                  contains: search,
                },
              },
            },

            /**
             * Tìm theo size
             */
            {
              size: {
                value: {
                  contains: search,
                },
              },
            },

            /**
             * Tìm theo SKU
             */
            {
              sku: {
                contains: search,
              },
            },
          ],
        };
      }

      /**
       * ============================================================
       * 3. QUERY INVENTORY
       * ============================================================
       *
       * Lưu ý:
       *
       * KHÔNG lấy:
       *
       * productDetail.color.productImgs
       *
       * vì Color là quan hệ dùng chung cho nhiều Product.
       *
       * Thay vào đó:
       *
       * productDetail.product.images
       *
       * sau đó filter:
       *
       * image.colorId === productDetail.colorId
       *
       * ============================================================
       */

      const [stocks, total] = await this.prisma.$transaction([
        this.prisma.productStock.findMany({
          where,

          skip,
          take: limit,

          orderBy: {
            productDetailId: 'desc',
          },

          select: {
            productDetailId: true,

            quantity: true,

            reserved: true,

            productDetail: {
              select: {
                id: true,

                price: true,

                sku: true,

                status: true,

                /**
                 * ==================================================
                 * PRODUCT
                 * ==================================================
                 */

                product: {
                  select: {
                    id: true,

                    name: true,

                    /**
                     * Lấy ảnh thuộc PRODUCT này.
                     *
                     * Sau đó ở tầng service sẽ lọc tiếp
                     * theo colorId.
                     */

                    images: {
                      select: {
                        id: true,

                        productId: true,

                        colorId: true,

                        url: true,

                        isPrimary: true,

                        sortOrder: true,
                      },

                      orderBy: [
                        {
                          isPrimary: 'desc',
                        },
                        {
                          sortOrder: 'asc',
                        },
                        {
                          id: 'asc',
                        },
                      ],
                    },
                  },
                },

                /**
                 * ==================================================
                 * COLOR
                 * ==================================================
                 */

                color: {
                  select: {
                    id: true,

                    name: true,

                    colorCode: true,
                  },
                },

                /**
                 * ==================================================
                 * SIZE
                 * ==================================================
                 */

                size: {
                  select: {
                    id: true,

                    value: true,
                  },
                },
              },
            },
          },
        }),

        this.prisma.productStock.count({
          where,
        }),
      ]);

      /**
       * ============================================================
       * 4. MAPPING
       * ============================================================
       */

      let data = stocks.map((stock) => {
        const quantity = stock.quantity;

        const reserved = stock.reserved;

        /**
         * Số lượng thực tế có thể bán
         */
        const available = Math.max(0, quantity - reserved);

        /**
         * ==========================================================
         * TÌM ẢNH ĐÚNG PRODUCT + COLOR
         * ==========================================================
         */

        const productId = stock.productDetail.product.id;

        const colorId = stock.productDetail.color.id;

        const image = stock.productDetail.product.images.find(
          (img) => img.productId === productId && img.colorId === colorId,
        );

        /**
         * ==========================================================
         * INVENTORY STATUS
         * ==========================================================
         */

        let status: InventoryStatus;

        if (available <= 0) {
          status = InventoryStatus.OUT_OF_STOCK;
        } else if (available <= 5) {
          status = InventoryStatus.LOW_STOCK;
        } else {
          status = InventoryStatus.IN_STOCK;
        }

        return {
          productDetailId: stock.productDetailId,

          productId,

          productName: stock.productDetail.product.name,

          sku: stock.productDetail.sku,

          productDetailStatus: stock.productDetail.status,

          colorId,

          colorName: stock.productDetail.color.name,

          colorCode: stock.productDetail.color.colorCode,

          sizeId: stock.productDetail.size.id,

          sizeValue: stock.productDetail.size.value,

          price: stock.productDetail.price,

          /**
           * Ảnh đúng PRODUCT + COLOR
           */
          img: image?.url ?? null,

          quantity,

          reserved,

          available,

          status,
        };
      });

      /**
       * ============================================================
       * 5. FILTER INVENTORY STATUS
       * ============================================================
       *
       * status được tính:
       *
       * available = quantity - reserved
       *
       * nên Prisma không thể filter trực tiếp bằng
       * ProductStockWhereInput thông thường.
       *
       * ============================================================
       */

      if (query.status) {
        data = data.filter((item) => item.status === query.status);
      }

      /**
       * ============================================================
       * 6. RESPONSE
       * ============================================================
       */

      return {
        data: {
          data,

          pagination: {
            page,

            limit,

            total,

            totalPages: Math.ceil(total / limit),
          },
        },
      };
    } catch (error) {
      console.error('findAllInventory error:', error);

      throw new InternalServerErrorException('Không thể lấy danh sách tồn kho');
    }
  }

  async findAllAdmin(dto: FindReturnRequestDto) {
    const { page = 1, limit = 10, search, status } = dto;

    const skip = (page - 1) * limit;

    const where: Prisma.ReturnRequestsWhereInput = {};

    // =========================
    // FILTER STATUS
    // =========================
    if (status) {
      where.status = status;
    }

    // =========================
    // SEARCH
    // =========================
    if (search?.trim()) {
      const keyword = search.trim();

      const orConditions: Prisma.ReturnRequestsWhereInput[] = [
        // Tìm theo mã đơn hàng
        {
          order: {
            orderCode: {
              contains: keyword,
            },
          },
        },

        // Tìm theo tên khách hàng
        {
          user: {
            name: {
              contains: keyword,
            },
          },
        },

        // Tìm theo số điện thoại
        {
          user: {
            phone: {
              contains: keyword,
            },
          },
        },
      ];

      // Nếu keyword là số thì tìm thêm theo ID return request
      const numericKeyword = Number(keyword);

      if (Number.isInteger(numericKeyword)) {
        orConditions.push({
          id: numericKeyword,
        });
      }

      where.OR = orConditions;
    }

    // =========================
    // QUERY
    // =========================
    const [items, total] = await this.prisma.$transaction([
      this.prisma.returnRequests.findMany({
        where,
        skip,
        take: limit,

        orderBy: {
          createdAt: 'desc',
        },

        select: {
          id: true,
          orderId: true,

          order: {
            select: {
              orderCode: true,
            },
          },

          user: {
            select: {
              id: true,
              name: true,
              phone: true,
            },
          },

          reason: true,
          note: true,
          status: true,

          items: {
            select: {
              id: true,
              returnedQuantity: true,
              normalQuantity: true,
              damagedQuantity: true,
              status: true,

              orderDetail: {
                select: {
                  productName: true,
                  colorName: true,
                  sizeValue: true,

                  productDetail: {
                    select: {
                      id: true,

                      // Nếu ProductDetail có image trực tiếp
                      // image: true,

                      product: {
                        select: {
                          id: true,
                        },
                      },
                    },
                  },
                },
              },
            },
          },

          createdAt: true,
          updatedAt: true,
        },
      }),

      this.prisma.returnRequests.count({
        where,
      }),
    ]);

    const result = items.map((item) => ({
      id: item.id,

      orderId: item.orderId,

      orderCode: item.order.orderCode,

      customer: {
        id: item.user.id,
        name: item.user.name,
        phone: item.user.phone,
      },

      reason: item.reason,

      ...(item.note
        ? {
            note: item.note,
          }
        : {}),

      status: item.status,

      items: item.items.map((returnItem) => ({
        id: returnItem.id,

        productName: returnItem.orderDetail.productName,

        colorName: returnItem.orderDetail.colorName ?? undefined,

        sizeValue: returnItem.orderDetail.sizeValue ?? undefined,

        returnedQuantity: returnItem.returnedQuantity,

        normalQuantity: returnItem.normalQuantity ?? undefined,

        damagedQuantity: returnItem.damagedQuantity ?? undefined,

        status: returnItem.status ?? undefined,

        // Tạm thời chưa có image
        // image: ...
      })),

      createdAt: item.createdAt.toISOString(),

      updatedAt: item.updatedAt.toISOString(),
    }));

    // =========================
    // PAGINATION
    // =========================

    const totalPages = Math.ceil(total / limit);

    return {
      success: true,
      message: 'Lấy danh sách đơn hàng trả về thành công',

      data: {
        items: result,

        pagination: {
          page,
          limit,
          total,
          totalPages,

          hasNextPage: page < totalPages,

          hasPreviousPage: page > 1,
        },
      },
    };
  }

  /**
   * ADMIN STOCK
   */

  async stockIn(stockInDto: StockInDto) {
    const productDetail = await this.prisma.productDetails.findUnique({
      where: {
        id: stockInDto.productDetailId,
      },
      select: {
        id: true,
      },
    });

    if (!productDetail) {
      throw new BadRequestException('Không có sản phẩm chi tiết');
    }

    try {
      const updatedStock = await this.prisma.$transaction(async (tx) => {
        const oldQuantityStock = await tx.productStock.findUnique({
          where: {
            productDetailId: stockInDto.productDetailId,
          },
          select: {
            quantity: true,
          },
        });

        if (!oldQuantityStock) {
          throw new BadRequestException('Không có tồn kho của sản phẩm này');
        }
        const stock = await tx.productStock.update({
          where: {
            productDetailId: stockInDto.productDetailId,
          },
          data: {
            quantity: {
              increment: stockInDto.quantity,
            },
          },
          select: {
            id: true,
            quantity: true,
          },
        });

        const inventoryTransaction = await tx.inventoryTransactions.create({
          data: {
            productDetailId: stockInDto.productDetailId,
            type: 'STOCK_IN',
            quantity: stockInDto.quantity,
            note: stockInDto.note,
            beforeQuantity: oldQuantityStock.quantity,
            afterQuantity: stock.quantity,
          },
        });

        return {
          stock,
          inventoryTransaction,
        };
      });

      return updatedStock;
    } catch (err) {
      throw new InternalServerErrorException('loi database');
    }
  }

  /**
   * ADMIN STOCK OUT
   */
  async stockOut(dto: StockOutDto) {
    return this.prisma.$transaction(async (tx) => {
      // =====================================================
      // 1. LOCK PRODUCT STOCK
      // =====================================================

      const stock = await this.lockStock(tx, dto.productDetailId);

      // =====================================================
      // 2. KIỂM TRA PRODUCT DETAIL
      // =====================================================

      const productDetail = await tx.productDetails.findUnique({
        where: {
          id: dto.productDetailId,
        },
        include: {
          product: true,
          size: true,
          color: true,
        },
      });

      if (!productDetail) {
        throw new NotFoundException('Không tìm thấy biến thể sản phẩm');
      }

      // =====================================================
      // 3. TÍNH AVAILABLE
      // =====================================================

      const available = stock.quantity - stock.reserved;

      // =====================================================
      // 4. KIỂM TRA CÓ ĐỦ HÀNG KHẢ DỤNG KHÔNG
      // =====================================================

      if (dto.quantity > available) {
        throw new BadRequestException(
          `Không thể xuất ${dto.quantity} sản phẩm. ` +
            `Tồn kho khả dụng chỉ còn ${available}.`,
        );
      }

      // =====================================================
      // 5. SNAPSHOT TRƯỚC KHI UPDATE
      // =====================================================

      const beforeQuantity = stock.quantity;

      const beforeReserved = stock.reserved;

      const beforeAvailable = beforeQuantity - beforeReserved;

      // =====================================================
      // 6. TÍNH GIÁ TRỊ SAU UPDATE
      // =====================================================

      const afterQuantity = beforeQuantity - dto.quantity;

      const afterReserved = beforeReserved;

      const afterAvailable = afterQuantity - afterReserved;

      // =====================================================
      // 7. UPDATE PRODUCT STOCK
      // =====================================================

      const updatedStock = await tx.productStock.update({
        where: {
          id: stock.id,
        },
        data: {
          quantity: afterQuantity,
        },
      });

      // =====================================================
      // 8. CREATE INVENTORY TRANSACTION
      // =====================================================

      const inventoryTransaction = await tx.inventoryTransactions.create({
        data: {
          productDetailId: dto.productDetailId,

          type: 'STOCK_OUT',

          quantity: dto.quantity,

          beforeQuantity,

          afterQuantity: updatedStock.quantity,

          reason: dto.reason,

          note: dto.note,
        },
      });

      // =====================================================
      // 9. RETURN RESULT
      // =====================================================

      return {
        productDetailId: dto.productDetailId,

        quantityOut: dto.quantity,

        beforeQuantity,

        afterQuantity: updatedStock.quantity,

        reserved: updatedStock.reserved,

        beforeAvailable,

        afterAvailable,

        transactionId: inventoryTransaction.id,

        reason: inventoryTransaction.reason,

        note: inventoryTransaction.note,

        createdAt: inventoryTransaction.createdAt,

        product: {
          id: productDetail.product.id,

          name: productDetail.product.name,
        },

        size: productDetail.size
          ? {
              id: productDetail.size.id,

              value: productDetail.size.value,
            }
          : null,

        color: productDetail.color
          ? {
              id: productDetail.color.id,

              name: productDetail.color.name,
            }
          : null,
      };
    });
  }
  //
  // HÀNG TRẢ VỀ
  //

  // Tìm các yêu cầu trả hàng
  async findAllReturnRequest(page: number = 1, limit: number = 10) {
    try {
      page = Math.max(1, page);
      limit = Math.max(1, Math.min(limit, 100));

      const skip = (page - 1) * limit;

      const [returnRequests, total] = await this.prisma.$transaction([
        this.prisma.returnRequests.findMany({
          skip,
          take: limit,

          orderBy: {
            createdAt: 'desc',
          },

          select: {
            id: true,
            note: true,
            reason: true,
            userId: true,
            orderId: true,
            status: true,
            createdAt: true,
            updatedAt: true,

            items: {
              select: {
                id: true,
                orderDetailId: true,
                returnedQuantity: true,

                orderDetail: {
                  select: {
                    id: true,
                    img: true,
                    productName: true,
                    colorName: true,
                    sizeValue: true,
                  },
                },
              },
            },
          },
        }),

        // Tổng số yêu cầu trả hàng
        this.prisma.returnRequests.count(),
      ]);

      return {
        returnRequests,

        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      console.error('findAllReturnRequest error:', error);

      throw new InternalServerErrorException(
        'Không thể lấy danh sách yêu cầu trả hàng',
      );
    }
  }

  // =====================================================
  // APPROVE
  // =====================================================

  async approveReturn(id: number) {
    const returnRequest = await this.prisma.returnRequests.findUnique({
      where: { id },
    });

    if (!returnRequest) {
      throw new NotFoundException('Không tìm thấy yêu cầu trả hàng');
    }

    if (returnRequest.status !== 'PENDING') {
      throw new BadRequestException(
        `Không thể duyệt yêu cầu đang ở trạng thái ${returnRequest.status}`,
      );
    }

    return this.prisma.returnRequests.update({
      where: { id },

      data: {
        status: 'APPROVED',
      },
    });
  }

  async shippingReturn(id: number) {
    const returnRequest = await this.prisma.returnRequests.findUnique({
      where: { id },
    });

    if (!returnRequest) {
      throw new NotFoundException('Không tìm thấy yêu cầu trả hàng');
    }

    if (returnRequest.status !== 'APPROVED') {
      throw new BadRequestException(
        `Không thể chuyển trạng thái vận chuyển theo yêu cầu đang ở trạng thái ${returnRequest.status}`,
      );
    }

    return this.prisma.returnRequests.update({
      where: { id },

      data: {
        status: 'SHIPPING',
      },
    });
  }

  // =====================================================
  // REJECT
  // =====================================================

  async rejectReturn(id: number) {
    const returnRequest = await this.prisma.returnRequests.findUnique({
      where: { id },
    });

    if (!returnRequest) {
      throw new NotFoundException('Không tìm thấy yêu cầu trả hàng');
    }

    if (returnRequest.status !== 'INSPECTING') {
      throw new BadRequestException(
        `Không thể từ chối yêu cầu ở trạng thái ${returnRequest.status}`,
      );
    }

    return this.prisma.returnRequests.update({
      where: { id },

      data: {
        status: 'REJECTED',
      },
    });
  }

  // =====================================================
  // RECEIVE
  // =====================================================

  async receiveReturn(id: number) {
    const returnRequest = await this.prisma.returnRequests.findUnique({
      where: { id },
    });

    if (!returnRequest) {
      throw new NotFoundException('Không tìm thấy yêu cầu trả hàng');
    }

    if (returnRequest.status !== 'SHIPPING') {
      throw new BadRequestException(
        `Không thể chuyển sang đã nhận ở trạng thái ${returnRequest.status}`,
      );
    }

    return this.prisma.returnRequests.update({
      where: { id },

      data: {
        status: 'RECEIVED',
      },
    });
  }

  async inspectReturn(id: number) {
    const returnRequest = await this.prisma.returnRequests.findUnique({
      where: { id },
    });

    if (!returnRequest) {
      throw new NotFoundException('Không tìm thấy yêu cầu trả hàng');
    }

    if (returnRequest.status !== 'RECEIVED') {
      throw new BadRequestException('Chỉ có hàng đã nhận mới được kiểm tra');
    }

    return this.prisma.returnRequests.update({
      where: { id },

      data: {
        status: 'INSPECTING',
      },
    });
  }

  async completeReturnItem(returnItemId: number, dto: CompleteReturnItemDto) {
    const returnItem = await this.prisma.returnItems.findUnique({
      where: {
        id: returnItemId,
        status: 'PENDING',
      },
      select: {
        id: true,
        returnRequestId: true,
        orderDetailId: true,
        returnedQuantity: true,
        status: true,
      },
    });

    if (!returnItem) {
      throw new NotFoundException('Hàng trả về không tồn tại');
    }

    if (returnItem.status === ReturnItemStatus.COMPLETED) {
      throw new BadRequestException('Hàng trả về này đã được xử lý');
    }

    if (returnItem.status === ReturnItemStatus.CANCELLED) {
      throw new BadRequestException('Hàng trả về này đã bị hủy');
    }

    const normalQuantity = dto.normalQuantity ?? 0;
    const damagedQuantity = dto.damagedQuantity ?? 0;

    if (normalQuantity < 0 || damagedQuantity < 0) {
      throw new BadRequestException('Số lượng không được nhỏ hơn 0');
    }

    if (normalQuantity + damagedQuantity !== returnItem.returnedQuantity) {
      throw new BadRequestException(
        `Tổng số lượng hàng thường và hàng hư phải bằng ${returnItem.returnedQuantity}`,
      );
    }

    return this.prisma.$transaction(async (tx) => {
      const orderDetail = await tx.orderDetails.findUnique({
        where: {
          id: returnItem.orderDetailId,
        },
        select: {
          productDetailId: true,
        },
      });

      if (!orderDetail) {
        throw new NotFoundException('Đơn hàng chi tiết không tồn tại');
      }

      const productDetailId = orderDetail.productDetailId;

      if (normalQuantity > 0) {
        const stock = await tx.productStock.findUnique({
          where: {
            productDetailId,
          },
        });

        if (!stock) {
          throw new NotFoundException('Không tìm thấy tồn kho của sản phẩm');
        }

        await tx.productStock.update({
          where: {
            productDetailId,
          },
          data: {
            quantity: {
              increment: normalQuantity,
            },
          },
        });
      }

      if (damagedQuantity > 0) {
        const damageStock = await tx.damageStock.findUnique({
          where: {
            productDetailId,
          },
        });

        if (!damageStock) {
          await tx.damageStock.create({
            data: {
              productDetailId,
              quantity: damagedQuantity,
            },
          });
        } else {
          await tx.damageStock.update({
            where: {
              productDetailId,
            },
            data: {
              quantity: {
                increment: damagedQuantity,
              },
            },
          });
        }
      }

      await tx.returnItems.update({
        where: {
          id: returnItemId,
        },
        data: {
          normalQuantity,
          damagedQuantity,
          status: ReturnItemStatus.COMPLETED,
        },
      });

      const remainingItems = await tx.returnItems.count({
        where: {
          returnRequestId: returnItem.returnRequestId,

          status: {
            not: ReturnItemStatus.COMPLETED,
          },
        },
      });

      if (remainingItems > 0) {
        return {
          completedItem: true,
          completedReturnRequest: false,
          remainingItems,
        };
      }

      const returnRequest = await tx.returnRequests.update({
        where: {
          id: returnItem.returnRequestId,
        },
        data: {
          status: ReturnRequestStatus.COMPLETED,
        },
      });

      return {
        completedItem: true,
        completedReturnRequest: true,
        remainingItems: 0,
        returnRequest,
      };
    });
  }
}
