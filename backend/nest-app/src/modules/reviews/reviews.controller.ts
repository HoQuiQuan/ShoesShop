import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { JwtAuthGuard } from '../auth/guards/accessToken.guard';
import { CreateCommentDto } from './dto/createComment.dto';
import { createReviewDto } from './dto/createReview.dto';
import { FindProductReviewsDto } from './dto/findReview.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('comment')
  createComment(
    @Req() req: Request & { user: any },
    @Body() dto: CreateCommentDto,
  ) {
    return this.reviewsService.createComment(req.user.userId, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('review')
  createReview(
    @Req() req: Request & { user: any },
    @Body() dto: createReviewDto,
  ) {
    return this.reviewsService.createRating(req.user.userId, dto);
  }

  @Get('product/:productId')
  async findProductReviews(
    @Param('productId', ParseIntPipe) productId: number,
    @Query() query: FindProductReviewsDto,
  ) {
    return this.reviewsService.findProductReviews(productId, query);
  }
}
