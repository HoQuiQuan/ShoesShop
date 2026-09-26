import { PartialType } from '@nestjs/swagger';
import { CreateProductVariantDto } from './create-productDetaildto';
import { IsEnum, IsInt, IsNumber, IsOptional } from 'class-validator';
import { ProductDetailStatus } from '@prisma/client';

export class UpdateProductDetailDto extends PartialType(
  CreateProductVariantDto,
) {
  @IsOptional()
  @IsEnum(ProductDetailStatus)
  status: ProductDetailStatus;
}

export class UpdateStockProductDetail {
  @IsOptional()
  @IsNumber()
  quantity: number;
}
