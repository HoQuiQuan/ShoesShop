import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class StockAdjustDto {
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  productDetailId: number;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  actualQuantity: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  reason: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  note?: string;
}
