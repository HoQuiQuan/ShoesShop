import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductVariantDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  productId?: number;

  @IsString()
  @IsNotEmpty()
  sku: string;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @IsInt()
  @Min(0)
  quantity: number;

  @IsInt()
  @Min(1)
  sizeId: number;

  @IsInt()
  @Min(1)
  colorId: number;
}
