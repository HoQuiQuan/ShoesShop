import { IsInt, IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsInt()
  productDetailId: number;

  @IsInt()
  quantity: number;
}
