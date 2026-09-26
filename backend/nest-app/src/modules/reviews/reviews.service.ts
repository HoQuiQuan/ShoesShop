import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCommentDto } from './dto/createComment.dto';
import { createReviewDto } from './dto/createReview.dto';
import { FindProductReviewsDto } from './dto/findReview.dto';

@Injectable()
export class ReviewsService {
  constructor(private readonly prisma: PrismaService) {}

  async createComment(userId: number, createCommentDto: CreateCommentDto) {
    const product = await this.prisma.products.findUnique({
      where: {
        id: createCommentDto.productId,
      },
      select: {
        id: true,
      },
    });

    if (!product) {
      throw new BadRequestException('Không có product để comment');
    }

    try {
      const newComment = await this.prisma.comments.create({
        data: {
          userId,
          productId: createCommentDto.productId,
          content: createCommentDto.content,
        },
      });

      const user = await this.prisma.users.findUnique({
        where: {
          id: userId,
        },
        select: {
          name: true,
          avatar: true,
        },
      });

      return {
        user,
        newComment,
      };
    } catch (error) {
      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async createRating(userId: number, createReviewDto: createReviewDto) {
    try {
      const result = await this.prisma.$transaction(async (tx) => {
        // 1. Kiểm tra orderDetail thuộc user và lấy productId
        const orderDetail = await tx.orderDetails.findFirst({
          where: {
            id: createReviewDto.orderDetailId,
            order: {
              userId,
            },
          },
          select: {
            id: true,
            productDetail: {
              select: {
                id: true,
                productId: true,
              },
            },
            order: {
              select: {
                status: true,
              },
            },
          },
        });

        if (!orderDetail) {
          throw new BadRequestException(
            'Không tìm thấy sản phẩm trong đơn hàng',
          );
        }

        // 2. Chỉ được đánh giá khi đơn hàng đã giao
        if (orderDetail.order.status !== 'DELIVERED') {
          throw new BadRequestException(
            'Chỉ có thể đánh giá khi đơn hàng đã giao',
          );
        }

        const productId = orderDetail.productDetail.productId;

        // 3. Kiểm tra đã đánh giá orderDetail này chưa
        const existingReview = await tx.reviews.findUnique({
          where: {
            orderDetailId: createReviewDto.orderDetailId,
          },
          select: {
            id: true,
          },
        });

        if (existingReview) {
          throw new BadRequestException('Bạn đã đánh giá sản phẩm này');
        }

        // 4. Lấy product trong transaction
        const product = await tx.products.findUnique({
          where: {
            id: productId,
          },
          select: {
            id: true,
            ratingSum: true,
            countRate: true,
          },
        });

        if (!product) {
          throw new BadRequestException('Không tìm thấy sản phẩm');
        }

        // 5. Tạo review
        const newReview = await tx.reviews.create({
          data: {
            userId,
            productId,
            orderDetailId: createReviewDto.orderDetailId,
            rating: createReviewDto.rating,
            content: createReviewDto.content,
          },
        });

        // 7. Update product
        await tx.products.update({
          where: {
            id: productId,
          },
          data: {
            ratingSum: {
              increment: createReviewDto.rating,
            },
            countRate: {
              increment: 1,
            },
          },
        });

        return newReview;
      });

      return {
        message: 'Đánh giá sản phẩm thành công',
        data: result,
      };
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }

      console.error('Create rating error:', error);

      throw new InternalServerErrorException('Lỗi database');
    }
  }

  async findProductReviews(
    productId: number,
    findProductReviewsDto: FindProductReviewsDto,
  ) {
    const { page = 1, limit = 5, rating } = findProductReviewsDto;

    if (page < 1) {
      throw new BadRequestException('Page không hợp lệ');
    }

    if (limit < 1 || limit > 50) {
      throw new BadRequestException('Limit phải nằm trong khoảng từ 1 đến 50');
    }

    if (rating !== undefined && (rating < 1 || rating > 5)) {
      throw new BadRequestException('Rating phải nằm trong khoảng từ 1 đến 5');
    }

    const skip = (page - 1) * limit;

    const where = {
      orderDetail: {
        productDetail: {
          productId,
        },
      },

      ...(rating !== undefined && {
        rating,
      }),
    };

    const [reviews, total, ratingStatistics] = await Promise.all([
      // Danh sách review
      this.prisma.reviews.findMany({
        where,

        skip,
        take: limit,

        orderBy: {
          createdAt: 'desc',
        },

        select: {
          id: true,
          rating: true,
          content: true,
          createdAt: true,

          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      }),

      // Tổng số review theo filter hiện tại
      this.prisma.reviews.count({
        where,
      }),

      // Tổng hợp rating
      this.prisma.reviews.groupBy({
        by: ['rating'],

        where,

        _count: {
          rating: true,
        },

        _avg: {
          rating: true,
        },
      }),
    ]);

    const totalPages = Math.ceil(total / limit);

    const ratingCounts = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    };

    let totalRatingCount = 0;
    let ratingSum = 0;

    for (const item of ratingStatistics) {
      const ratingValue = item.rating as 1 | 2 | 3 | 4 | 5;

      const count = item._count.rating;

      ratingCounts[ratingValue] = count;

      totalRatingCount += count;

      ratingSum += ratingValue * count;
    }

    const averageRating =
      totalRatingCount > 0
        ? Number((ratingSum / totalRatingCount).toFixed(1))
        : 0;

    return {
      reviews,
      summary: {
        averageRating,
        totalReviews: totalRatingCount,
        ratingCounts,
      },
      total,
      page,
      limit,
      totalPages,
    };
  }
}
