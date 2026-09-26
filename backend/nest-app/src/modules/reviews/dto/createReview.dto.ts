import { IsInt, IsOptional, IsString } from 'class-validator';

export class createReviewDto {
  @IsInt()
  orderDetailId: number;

  @IsInt()
  rating: number;

  @IsOptional()
  @IsString()
  content?: string;
}
