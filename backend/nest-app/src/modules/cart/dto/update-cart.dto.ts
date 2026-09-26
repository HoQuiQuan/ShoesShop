import { IsInt, IsNumber } from 'class-validator';

export class UpdateCartDto {
  @IsInt()
  quantity: number;
}
