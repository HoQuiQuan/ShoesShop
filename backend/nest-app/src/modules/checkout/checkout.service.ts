import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CheckOutDto } from './dto/checkout.dto';

@Injectable()
export class CheckoutService {
  constructor(private readonly prisma: PrismaService) {}

  async getCheckout(userId: number, dto: CheckOutDto) {
    try {
      // 1. Kiểm tra user
      const user = await this.prisma.users.findUnique({
        where: {
          id: userId,
        },
        select: {
          id: true,
        },
      });

      if (!user) {
        throw new UnauthorizedException('Người dùng không tồn tại');
      }

      // 2. Kiểm tra checkout có sản phẩm hay không
      if (!dto.productDetail || dto.productDetail.length === 0) {
        throw new BadRequestException(
          'Danh sách sản phẩm checkout không được rỗng',
        );
      }

      // 3. Lấy danh sách productDetailId
      const productDetailIds = dto.productDetail.map(
        (item) => item.productDetailId,
      );

      // 4. Kiểm tra duplicate
      const uniqueIds = new Set(productDetailIds);

      if (uniqueIds.size !== productDetailIds.length) {
        throw new BadRequestException('Không được có sản phẩm bị trùng');
      }

      // 5. Lấy ProductDetails + Images
      const products = await this.prisma.productDetails.findMany({
        where: {
          id: {
            in: productDetailIds,
          },
        },
        include: {
          product: {
            include: {
              images: {
                select: {
                  id: true,
                  url: true,
                  colorId: true,
                },
              },
            },
          },
          stock: true,
          color: true,
          size: true,
        },
      });

      // 6. Kiểm tra ProductDetail không tồn tại
      if (products.length !== productDetailIds.length) {
        const foundIds = new Set(products.map((item) => item.id));

        const missingIds = productDetailIds.filter((id) => !foundIds.has(id));

        throw new BadRequestException(
          `Sản phẩm không tồn tại: ${missingIds.join(', ')}`,
        );
      }

      // 7. Map ProductDetail
      const productMap = new Map(
        products.map((product) => [product.id, product]),
      );

      // 8. Xử lý từng sản phẩm checkout
      const items = dto.productDetail.map((checkoutItem) => {
        const product = productMap.get(checkoutItem.productDetailId);

        if (!product) {
          throw new BadRequestException(
            `Sản phẩm ${checkoutItem.productDetailId} không tồn tại`,
          );
        }

        // 9. Kiểm tra trạng thái ProductDetail
        if (product.status !== 'ACTIVE') {
          throw new BadRequestException(
            `Sản phẩm "${product.product.name}" hiện không thể mua`,
          );
        }

        // 10. Kiểm tra stock
        if (!product.stock) {
          throw new BadRequestException(
            `Sản phẩm "${product.product.name}" chưa có thông tin tồn kho`,
          );
        }

        // available = quantity - reserved
        const availableQuantity =
          product.stock.quantity - product.stock.reserved;

        if (availableQuantity < checkoutItem.quantity) {
          throw new BadRequestException(
            `Sản phẩm "${product.product.name}" chỉ còn ${availableQuantity} sản phẩm`,
          );
        }

        // 11. Tìm image
        let image = product.product.images.find(
          (img) => img.colorId === product.colorId,
        );

        // Nếu không có image theo màu -> lấy image mặc định
        if (!image) {
          image = product.product.images.find((img) => img.colorId === null);
        }

        // 12. Giá
        const price = Number(product.price);

        return {
          id: product.id,

          productId: product.product.id,

          name: product.product.name,

          image: image
            ? {
                id: image.id,
                url: image.url,
              }
            : null,

          color: product.color?.name ?? '',

          colorCode: product.color?.colorCode ?? undefined,

          size: product.size?.value ?? '',

          price,

          quantity: checkoutItem.quantity,
        };
      });

      return items;
    } catch (error) {
      if (
        error instanceof UnauthorizedException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }

      console.error('Checkout error:', error);

      throw new InternalServerErrorException(
        'Không thể lấy thông tin checkout',
      );
    }
  }
}
