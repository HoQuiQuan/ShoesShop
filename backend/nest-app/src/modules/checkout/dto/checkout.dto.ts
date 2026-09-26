import { IsArray, IsInt, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class ProductDetailCheckOutDto {
  @IsInt()
  @Min(1)
  productDetailId: number;

  @IsInt()
  @Min(1)
  quantity: number;
}

export class CheckOutDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDetailCheckOutDto)
  productDetail: ProductDetailCheckOutDto[];
}
