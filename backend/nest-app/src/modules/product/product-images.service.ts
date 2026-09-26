import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { CloudinaryService } from 'src/common/cloudinary/cloudinary.service';

type TxClient = Prisma.TransactionClient;

interface ImageColorMapping {
  fileIndex: number;
  colorId: number | null;
}

@Injectable()
export class ProductImagesSerVice {
  private readonly logger = new Logger(ProductImagesSerVice.name);

  constructor(private readonly cloudinaryService: CloudinaryService) {}

  async createProductImages(
    tx: TxClient,
    productId: number,
    files: Express.Multer.File[],
    imageColors: ImageColorMapping[] = [],
  ) {
    // =====================================================
    // 1. Kiểm tra product
    // =====================================================

    const product = await tx.products.findUnique({
      where: {
        id: productId,
      },
      select: {
        id: true,
        slug: true,
      },
    });

    if (!product) {
      throw new NotFoundException('Không tìm thấy sản phẩm để thêm ảnh');
    }

    // =====================================================
    // 2. Kiểm tra files
    // =====================================================

    if (!files || files.length === 0) {
      throw new BadRequestException('Vui lòng upload ít nhất một ảnh');
    }

    // =====================================================
    // 3. Kiểm tra imageColors
    // =====================================================

    for (const mapping of imageColors) {
      // Kiểm tra index
      if (mapping.fileIndex < 0 || mapping.fileIndex >= files.length) {
        throw new BadRequestException(
          `fileIndex ${mapping.fileIndex} không hợp lệ`,
        );
      }

      // Nếu ảnh có màu thì kiểm tra color
      if (mapping.colorId !== null) {
        const color = await tx.colors.findUnique({
          where: {
            id: mapping.colorId,
          },
          select: {
            id: true,
          },
        });

        if (!color) {
          throw new NotFoundException(
            `Không tìm thấy màu với ID ${mapping.colorId}`,
          );
        }
      }
    }

    // =====================================================
    // 4. Upload Cloudinary
    // =====================================================

    let uploadedImages: {
      secure_url: string;
      public_id: string;
    }[] = [];

    try {
      uploadedImages = await this.cloudinaryService.uploadFiles(
        files,
        `product/${product.slug}/`,
      );

      // =====================================================
      // 5. Tạo dữ liệu ProductImgs
      // =====================================================

      const imageData = uploadedImages.map((image, index) => {
        const mapping = imageColors.find((item) => item.fileIndex === index);

        return {
          productId: product.id,

          // Không tìm thấy mapping
          // => ảnh chung
          colorId: mapping?.colorId ?? null,

          url: image.secure_url,
        };
      });

      // =====================================================
      // 6. Lưu database
      // =====================================================

      await tx.productImgs.createMany({
        data: imageData,
      });

      return imageData;
    } catch (error) {
      // =====================================================
      // 7. Nếu DB lỗi => xóa ảnh Cloudinary
      // =====================================================

      if (uploadedImages.length > 0) {
        await this.cloudinaryService
          .deleteFiles(uploadedImages.map((image) => image.public_id))
          .catch((cleanupError) => {
            this.logger.error(`Không thể xóa ảnh Cloudinary: ${cleanupError}`);
          });
      }

      this.logger.error(`Tạo ảnh sản phẩm thất bại: ${error}`);

      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      throw new InternalServerErrorException('Lỗi khi thêm ảnh sản phẩm');
    }
  }
}
