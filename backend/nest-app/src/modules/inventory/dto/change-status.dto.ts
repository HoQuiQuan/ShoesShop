import { ReturnRequestStatus } from '@prisma/client';
import { IsEnum, IsInt, Min } from 'class-validator';

export class ChangeStatus {
  @IsInt()
  @Min(0)
  returnRequestStatusId: number;

  @IsEnum(ReturnRequestStatus)
  status: ReturnRequestStatus;
}
