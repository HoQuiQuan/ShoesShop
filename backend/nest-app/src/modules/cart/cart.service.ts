import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prisma: PrismaService) {}
  async create(userId: number, createCartDto: CreateCartDto) {
    const { productDetailId, quantity: addQuantity } = createCartDto;

    if (addQuantity <= 0) {
      throw new BadRequestException('Số lượng sản phẩm phải lớn hơn 0');
    }

    try {
      const productDetail = await this.prisma.productDetails.findUnique({
        where: {
          id: productDetailId,
        },
        select: {
          id: true,
          colorId: true,

          stock: {
            select: {
              quantity: true,
              reserved: true,
            },
          },
        },
      });

      if (!productDetail) {
        throw new NotFoundException('Không có sản phẩm để thêm vào giỏ hàng');
      }

      const stockQuantity = productDetail.stock?.quantity ?? 0;
      const reservedQuantity = productDetail.stock?.reserved ?? 0;

      const availableQuantity = stockQuantity - reservedQuantity;

      if (availableQuantity <= 0) {
        throw new BadRequestException('Sản phẩm hiện đã hết hàng');
      }

      // =========================
      // Tìm hoặc tạo Cart
      // =========================

      let cart = await this.prisma.cart.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });

      if (!cart) {
        cart = await this.prisma.cart.create({
          data: {
            userId,
          },
          select: {
            id: true,
          },
        });
      }

      // =========================
      // Kiểm tra CartItem hiện tại
      // =========================

      const cartItem = await this.prisma.cartItems.findUnique({
        where: {
          cartId_productDetailId: {
            cartId: cart.id,
            productDetailId,
          },
        },
        select: {
          id: true,
          quantity: true,
        },
      });

      const currentQuantity = cartItem?.quantity ?? 0;

      const newQuantity = currentQuantity + addQuantity;

      if (newQuantity > availableQuantity) {
        throw new BadRequestException(
          `Bạn chỉ có thể mua tối đa ${availableQuantity} sản phẩm`,
        );
      }

      // =========================
      // Tạo hoặc cập nhật CartItem
      // =========================

      let savedCartItem;

      if (cartItem) {
        savedCartItem = await this.prisma.cartItems.update({
          where: {
            id: cartItem.id,
          },
          data: {
            quantity: newQuantity,
          },
          select: {
            id: true,
            quantity: true,

            productDetail: {
              select: {
                id: true,
                price: true,
                colorId: true,

                product: {
                  select: {
                    id: true,
                    name: true,

                    images: {
                      select: {
                        id: true,
                        url: true,
                        colorId: true,
                      },
                    },
                  },
                },

                color: {
                  select: {
                    id: true,
                    name: true,
                    colorCode: true,
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
        });
      } else {
        savedCartItem = await this.prisma.cartItems.create({
          data: {
            cartId: cart.id,
            productDetailId,
            quantity: addQuantity,
          },
          select: {
            id: true,
            quantity: true,

            productDetail: {
              select: {
                id: true,
                price: true,
                colorId: true,

                product: {
                  select: {
                    id: true,
                    name: true,

                    images: {
                      select: {
                        id: true,
                        url: true,
                        colorId: true,
                      },
                    },
                  },
                },

                color: {
                  select: {
                    id: true,
                    name: true,
                    colorCode: true,
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
        });
      }

      // =========================
      // Xử lý Image
      // =========================

      const productDetailData = savedCartItem.productDetail;

      // Ưu tiên image cùng màu
      let image = productDetailData.product.images.find(
        (img) => img.colorId === productDetailData.colorId,
      );

      // Nếu không có → lấy image chung
      if (!image) {
        image = productDetailData.product.images.find(
          (img) => img.colorId === null,
        );
      }

      // =========================
      // Response
      // =========================

      return {
        id: savedCartItem.id,
        quantity: savedCartItem.quantity,

        productDetail: {
          id: productDetailData.id,
          price: productDetailData.price,

          product: {
            id: productDetailData.product.id,
            name: productDetailData.product.name,

            image: image
              ? {
                  id: image.id,
                  url: image.url,
                }
              : null,
          },

          color: productDetailData.color,

          size: productDetailData.size,
        },
      };
    } catch (error) {
      if (
        error instanceof BadRequestException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      console.error('Create cart error:', error);

      throw new InternalServerErrorException(
        'Không thể thêm sản phẩm vào giỏ hàng',
      );
    }
  }

  async findAll(userId: number) {
    try {
      const cart = await this.prisma.cart.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,

          items: {
            select: {
              id: true,
              quantity: true,

              productDetail: {
                select: {
                  id: true,
                  price: true,
                  colorId: true,

                  product: {
                    select: {
                      id: true,
                      name: true,

                      images: {
                        select: {
                          id: true,
                          url: true,
                          colorId: true,
                        },
                      },
                    },
                  },

                  color: {
                    select: {
                      id: true,
                      name: true,
                      colorCode: true,
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
      });

      if (!cart) {
        return {
          id: null,
          items: [],
        };
      }

      const items = cart.items.map((item) => {
        const productDetail = item.productDetail;

        // 1. Tìm image đúng với color của ProductDetail
        let image = productDetail.product.images.find(
          (img) => img.colorId === productDetail.colorId,
        );

        // 2. Nếu không có image theo color -> lấy image chung
        if (!image) {
          image = productDetail.product.images.find(
            (img) => img.colorId === null,
          );
        }

        return {
          id: item.id,
          quantity: item.quantity,

          productDetail: {
            id: productDetail.id,
            price: productDetail.price,

            product: {
              id: productDetail.product.id,
              name: productDetail.product.name,

              image: image
                ? {
                    id: image.id,
                    url: image.url,
                  }
                : null,
            },

            color: productDetail.color,

            size: productDetail.size,
          },
        };
      });

      return {
        id: cart.id,
        items,
      };
    } catch (error) {
      console.error('Find cart error:', error);

      throw new InternalServerErrorException(
        'Không thể lấy thông tin giỏ hàng',
      );
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  async checkUserAndCart(userId: number, id: number) {
    try {
      const cart = await this.prisma.cart.findUnique({
        where: {
          userId,
        },
        select: {
          items: {
            select: {
              id: true,
            },
          },
        },
      });

      if (!cart) {
        throw new BadRequestException('Không có giỏ hàng của userId này');
      }

      let check = false;

      for (const item of cart.items) {
        if (item.id == id) {
          check = true;
          break;
        }
      }

      if (!check) {
        return false;
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  async update(userId: number, id: number, updateCartDto: UpdateCartDto) {
    const check = await this.checkUserAndCart(userId, id);
    if (!check) {
      throw new BadRequestException();
    }
    try {
      const cartItem = await this.prisma.cartItems.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
        },
      });
      if (!cartItem) {
        throw new NotFoundException('Sản phẩm này không có trong giỏ hàng');
      }

      const cartItemUpdate = await this.prisma.cartItems.update({
        where: {
          id: cartItem.id,
        },
        data: {
          quantity: updateCartDto.quantity,
        },
        select: {
          id: true,
          quantity: true,
        },
      });

      return cartItemUpdate;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async remove(userId: number, id: number) {
    const check = await this.checkUserAndCart(userId, id);
    if (!check) {
      throw new BadRequestException();
    }
    try {
      const cartItem = await this.prisma.cartItems.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
        },
      });

      if (!cartItem) {
        throw new NotFoundException('Sản phẩm không có trong giỏ hàng để xóa');
      }

      await this.prisma.cartItems.delete({
        where: {
          id: cartItem.id,
        },
      });

      return {
        message: 'success',
      };
    } catch (error) {
      throw new InternalServerErrorException('Lỗi database');
    }
  }
}
