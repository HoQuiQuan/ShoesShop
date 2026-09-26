import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductImgsDto } from './dto/productImgs.dto';

import { ProductDetailService } from './product-detail.service';
import { SlugService } from '../slug/slug';
import { ProductImagesSerVice } from './product-images.service';
import { round } from 'firebase/firestore/pipelines';

type TxClient = Prisma.TransactionClient;

@Injectable()
export class ProductService {
  private readonly logger = new Logger(ProductService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly productDetailService: ProductDetailService,
    private readonly productImages: ProductImagesSerVice,
    private readonly slugService: SlugService,
  ) {}

  // ==========================================
  // CREATE
  // ==========================================
  async createProduct(dto: CreateProductDto, files?: Express.Multer.File[]) {
    // ==========================================
    // 1. Kiểm tra Category tồn tại
    // ==========================================

    const category = await this.prisma.categories.findUnique({
      where: {
        id: dto.categoryId,
      },
      select: {
        id: true,
      },
    });

    if (!category) {
      throw new NotFoundException('Không tìm thấy danh mục');
    }

    const slug = await this.slugService.generateUniqueSlug(dto.name, 'product');

    // ==========================================
    // 2. Transaction
    // ==========================================

    try {
      return await this.prisma.$transaction(async (tx: TxClient) => {
        // ========================================
        // CREATE PRODUCT
        // ========================================

        const product = await tx.products.create({
          data: {
            name: dto.name,
            slug,
            description: dto.description,
            categoryId: dto.categoryId,
          },
        });

        // ========================================
        // CREATE SPECS
        // ========================================

        if (dto.specs?.length) {
          await tx.productSpec.createMany({
            data: dto.specs.map((spec, index) => ({
              productId: product.id,
              label: spec.label,
              value: spec.value,
              sortOrder: spec.sortOrder ?? index + 1,
            })),
          });
        }

        // ========================================
        // CREATE VARIANTS
        // ========================================

        if (dto.variants?.length) {
          for (const variant of dto.variants) {
            await this.productDetailService.createProductDetail(tx, {
              ...variant,
              productId: product.id,
            });
          }
        }

        // ========================================
        // CREATE PRODUCT IMAGES
        // ========================================

        let images;

        if (files?.length) {
          images = await this.productImages.createProductImages(
            tx,
            product.id,
            files,
            dto.imageColors,
          );
        }

        // ========================================
        // RETURN
        // ========================================

        return {
          product,
          images,
        };
      });
    } catch (error) {
      this.logger.error(error);

      // Giữ nguyên lỗi nghiệp vụ
      if (
        error instanceof NotFoundException ||
        error?.status === 404 ||
        error?.status === 409
      ) {
        throw error;
      }

      throw new InternalServerErrorException('Lỗi khi tạo sản phẩm');
    }
  }
  // ==========================================
  // READ - danh sách
  // ==========================================
  async findAll(page = 1, limit = 20, categoryId?: number) {
    try {
      const where = categoryId ? { categoryId } : {};

      const [items, total] = await this.prisma.$transaction([
        this.prisma.products.findMany({
          where: {
            ...where,
            status: 'ACTIVE',
          },
          skip: (page - 1) * limit,
          take: limit,
          select: {
            id: true,
            name: true,
            slug: true,
            status: true,
            category: {
              select: { name: true },
            },
            variants: {
              select: {
                id: true,
                price: true,
                color: {
                  select: {
                    name: true,
                    colorCode: true,
                  },
                },
              },
            },
            images: {
              select: {
                url: true,
                color: {
                  select: {
                    name: true,
                    colorCode: true,
                  },
                },
              },
              orderBy: { sortOrder: 'asc' },
              take: 1, // ✅ chỉ lấy 1 ảnh đại diện, không cần lấy hết/
            },
          },
          orderBy: { createdAt: 'desc' },
        }),
        this.prisma.products.count({ where }),
      ]);

      // ✅ Transform dữ liệu về đúng shape ProductCardProps
      const mappedItems = items.map((item) => this.mapToProductCard(item));
      // console.log(items);

      return {
        items: mappedItems,
        total,
        page,
        totalPages: Math.ceil(total / limit),
      };
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Lỗi khi lấy danh sách sản phẩm');
    }
  }

  // Hàm transform riêng, tái sử dụng được cho findOne() nếu cần
  private mapToProductCard(item: any) {
    // Lấy danh sách màu, loại bỏ trùng lặp theo colorCode
    const uniqueColors = Array.from(
      new Map(
        item.variants
          .filter((v) => v.color) // phòng trường hợp color null
          .map((v) => [v.color.colorCode, v.color.colorCode]),
      ).values(),
    );

    let minPrice = 20000000000;
    for (const variant of item.variants) {
      if (minPrice > variant.price) {
        minPrice = variant.price;
      }
    }

    console.log(minPrice);

    return {
      id: item.id,
      name: item.name,
      slug: item.slug,
      category: item.category?.name,
      image: item.images[0]?.url ?? null, // lấy ảnh đầu tiên, phòng trường hợp chưa có ảnh
      price: Number(minPrice), // Prisma Decimal -> number
      oldPrice: item.oldPrice ? Number(item.oldPrice) : undefined,
      colors: uniqueColors.length > 0 ? uniqueColors : undefined,
    };
  }

  // ==========================================
  // READ - chi tiết
  // ==========================================
  async findOne(id: number) {
    try {
      const product = await this.prisma.products.findUnique({
        where: {
          id,
          status: 'ACTIVE',
        },
        select: {
          id: true,
          name: true,
          description: true,
          slug: true,
          specs: {
            select: {
              label: true,
              value: true,
            },
          },
          ratingSum: true,
          countRate: true,
          purchases: true,
          variants: {
            select: {
              id: true,
              price: true,
              color: {
                select: {
                  name: true,
                  colorCode: true,
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
          },

          images: {
            select: {
              url: true,
              color: {
                select: {
                  name: true,
                  colorCode: true,
                },
              },
            },
          },
        },
      });

      let rate = 0;
      if (product && product.countRate > 0) {
        rate = Math.round((product.ratingSum / product.countRate) * 10) / 10;
      }

      return {
        ...product,
        rate,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Lỗi');
    }
  }

  // ==========================================
  // READ - chi tiết - ADMIN
  // ==========================================

  async findOneAdmin(id: number) {
    try {
      const product = await this.prisma.products.findUnique({
        where: {
          id,
        },
        select: {
          name: true,
          description: true,
          slug: true,
          specs: {
            select: {
              label: true,
              value: true,
            },
          },
          ratingSum: true,
          countRate: true,
          purchases: true,
          variants: {
            select: {
              id: true,
              price: true,
              status: true,
              color: {
                select: {
                  name: true,
                  colorCode: true,
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
          },

          images: {
            select: {
              url: true,
              color: {
                select: {
                  name: true,
                  colorCode: true,
                },
              },
            },
          },
        },
      });

      let rate = 0;
      if (product) {
        rate = product.ratingSum / product.countRate;
      }

      return {
        ...product,
        rate,
      };
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Lỗi');
    }
  }

  // ==========================================
  // UPDATE
  // ==========================================
  async updateProduct(id: number, dto: UpdateProductDto) {
    const product = await this.prisma.products.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!product) {
      throw new NotFoundException('Không tìm thấy sản phẩm để cập nhật');
    }

    const data: Prisma.ProductsUpdateInput = {
      name: dto.name,
      description: dto.description,
    };

    if (dto.name) {
      data.slug = await this.slugService.generateUniqueSlug(
        dto.name,
        'product',
      );
    }

    try {
      return await this.prisma.products.update({
        where: { id },
        data,
      });
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Lỗi khi cập nhật sản phẩm');
    }
  }

  // ==========================================
  // DELETE
  // ==========================================
  async removeProduct(id: number) {
    const product = await this.prisma.products.findUnique({
      where: { id },
      select: { id: true },
    });

    console.log(product);

    if (!product) {
      throw new NotFoundException('Không tìm thấy sản phẩm để xóa');
    }

    try {
      // Nếu schema đã cấu hình onDelete: Cascade cho productDetails/productImgs
      // thì chỉ cần xóa product. Nếu chưa, xóa thủ công theo thứ tự bên dưới.
      return await this.prisma.$transaction(async (tx: TxClient) => {
        await tx.productStock.deleteMany({
          where: { productDetail: { productId: id } },
        });
        await tx.productDetails.deleteMany({ where: { productId: id } });
        await tx.productImgs.deleteMany({ where: { productId: id } });
        await tx.products.delete({ where: { id } });

        return { message: 'Xóa sản phẩm thành công' };
      });
    } catch (error) {
      this.logger.error(error);
      throw new InternalServerErrorException('Lỗi khi xóa sản phẩm');
    }
  }

  // ==========================================
  // ADMIN - danh sách sản phẩm
  // ==========================================
  async findAllAdmin() {
    try {
      const products = await this.prisma.products.findMany({
        select: {
          id: true,
          name: true,
          slug: true,

          category: {
            select: {
              id: true,
              name: true,
            },
          },

          status: true,

          createdAt: true,

          images: {
            select: {
              url: true,
            },
            orderBy: {
              sortOrder: 'asc',
            },
            take: 1,
          },

          variants: {
            select: {
              id: true,
              price: true,
              status: true,

              stock: {
                select: {
                  quantity: true,
                  reserved: true,
                },
              },
            },

            orderBy: {
              id: 'asc',
            },
          },
        },

        orderBy: {
          createdAt: 'desc',
        },
      });

      return products.map((product) => {
        // =========================
        // Giá thấp nhất
        // =========================

        let minPrice: number | null = null;

        for (const variant of product.variants) {
          const price = Number(variant.price);

          if (minPrice === null || price < minPrice) {
            minPrice = price;
          }
        }

        // =========================
        // Map productDetails
        // =========================

        const productDetails = product.variants.map((variant) => ({
          id: variant.id,

          price: Number(variant.price),

          status: variant.status,

          stock: variant.stock
            ? {
                quantity: variant.stock.quantity,
                reserved: variant.stock.reserved,
              }
            : undefined,
        }));

        // =========================
        // Return đúng interface
        // =========================

        return {
          id: product.id,

          name: product.name,

          slug: product.slug,

          category: product.category
            ? {
                id: product.category.id,
                name: product.category.name,
              }
            : undefined,

          image: product.images[0]?.url ?? null,

          price: minPrice,

          status: product.status,

          createdAt: product.createdAt.toISOString(),

          productDetails,
        };
      });
    } catch (error) {
      this.logger.error(error);

      throw new InternalServerErrorException(
        'Lỗi khi lấy danh sách sản phẩm admin',
      );
    }
  }

  async getColor() {
    try {
      const colors = await this.prisma.colors.findMany();
      return colors;
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException(error);
    }
  }

  async getSize() {
    try {
      const sizes = await this.prisma.sizes.findMany();
      return sizes;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }
}
