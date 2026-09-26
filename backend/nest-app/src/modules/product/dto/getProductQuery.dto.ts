import { Type } from 'class-transformer';
import { IsNumber, IsOptional, Max, Min } from 'class-validator';

export class GetProductsQueryDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(50)
  limit: number = 10;

  @IsOptional()
  search?: string;

  @IsOptional()
  sort?: 'price_asc' | 'price_desc' | 'newest';

  @Type(() => Number)
  @IsNumber()
  categoryId?: number;
}
