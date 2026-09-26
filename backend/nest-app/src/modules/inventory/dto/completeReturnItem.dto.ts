import { IsInt, Min } from 'class-validator';

export class CompleteReturnItemDto {
  @IsInt()
  @Min(0)
  normalQuantity: number;

  @IsInt()
  @Min(0)
  damagedQuantity: number;
}
