import { VoucherType } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsEnum, IsNumber } from 'class-validator';

export class ApplicableVoucherDto {
  @IsNumber()
  orderPrice: number;

  @IsEnum(VoucherType)
  voucherType: VoucherType;
}
