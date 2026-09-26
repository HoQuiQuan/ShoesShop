import { PartialType } from '@nestjs/swagger';
import { CreateOrderDto } from './create-order.dto';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderStatus } from '@prisma/client';

export class UpdateOrderDto {
  @IsString()
  @IsNotEmpty()
  orderCode: string;

  @IsEnum(OrderStatus)
  orderStatus: OrderStatus;
}
