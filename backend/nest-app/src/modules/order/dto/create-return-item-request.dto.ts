import {
  IsPositive,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';

export class CreateReturnItemDto {
  @IsInt()
  @IsPositive()
  orderDetailId: number;

  @IsInt()
  @IsPositive()
  returnedQuantity: number;
}

import { Type } from 'class-transformer';

export class CreateReturnRequestDto {
  @IsInt()
  orderId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  reason: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  note?: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateReturnItemDto)
  items: CreateReturnItemDto[];
}
