import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class CreateProductImgsDto {
  @IsInt()
  productId: number;

  @IsOptional()
  @IsInt()
  colorId: number;
}

export class DeleteProductImgsDto {
  @IsNumber()
  productImgId: number;
}
