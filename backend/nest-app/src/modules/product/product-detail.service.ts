import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { Prisma } from '@prisma/client';

import { CreateProductVariantDto } from './dto/create-productDetaildto';
import {
  UpdateProductDetailDto,
  UpdateStockProductDetail,
} from './dto/update-productDetail.dto';
import { PrismaService } from 'src/prisma.service';

type TxClient = Prisma.TransactionClient;

@Injectable()
export class ProductDetailService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly logger = new Logger(ProductDetailService.name);

  async createProductDetail(tx: TxClient, dto: CreateProductVariantDto) {
    const product = await tx.products.findUnique({
      where: {
        id: dto.productId,
      },
      select: {
        id: true,
      },
    });

    if (!product) {
      throw new NotFoundException(`Không tìm thấy sản phẩm với ID`);
    }

    const size = await tx.sizes.findUnique({
      where: {
        id: dto.sizeId,
      },
      select: {
        id: true,
      },
    });

    if (!size) {
      throw new NotFoundException(`Không tìm thấy size với ID ${dto.sizeId}`);
    }

    const color = await tx.colors.findUnique({
      where: {
        id: dto.colorId,
      },
      select: {
        id: true,
      },
    });

    if (!color) {
      throw new NotFoundException(`Không tìm thấy màu với ID`);
    }

    const existingVariant = await tx.productDetails.findUnique({
      where: {
        productId_sizeId_colorId: {
          productId: dto.productId || -1,
          sizeId: dto.sizeId,
          colorId: dto.colorId,
        },
      },
      select: {
        id: true,
      },
    });

    if (existingVariant) {
      throw new ConflictException(
        'Biến thể với sản phẩm, size và màu này đã tồn tại',
      );
    }

    if (dto.sku) {
      const existingSku = await tx.productDetails.findUnique({
        where: {
          sku: dto.sku,
        },
        select: {
          id: true,
        },
      });

      if (existingSku) {
        throw new ConflictException(`SKU "${dto.sku}" đã tồn tại`);
      }
    }

    try {
      const productDetail = await tx.productDetails.create({
        data: {
          productId: dto.productId || -1,
          sizeId: dto.sizeId,
          price: dto.price,
          colorId: dto.colorId,
          sku: dto.sku,
        },
      });

      const productStock = await tx.productStock.create({
        data: {
          productDetailId: productDetail.id,
          quantity: dto.quantity,
        },
      });

      return {
        productDetail,
        productStock,
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('SKU hoặc biến thể sản phẩm đã tồn tại');
      }

      this.logger.error(error);
      throw new InternalServerErrorException('Lỗi khi tạo biến thể sản phẩm');
    }
  }

  async updateProductDetail(
    id: number,
    updateProductDetailDto: UpdateProductDetailDto,
    // tx: TxClient,
  ) {
    const productDetail = await this.prisma.productDetails.findFirst({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    if (!productDetail) {
      throw new BadRequestException('Không có productDetail để update');
    }
    try {
      const updatedProductDetail = await this.prisma.productDetails.update({
        where: {
          id: productDetail.id,
        },
        data: {
          ...updateProductDetailDto,
        },
      });

      return {
        data: {
          updatedProductDetail,
        },
      };
    } catch (error) {
      throw new InternalServerErrorException('Lỗi database');
    }
  }
}
