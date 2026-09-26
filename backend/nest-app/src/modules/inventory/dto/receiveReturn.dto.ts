import { IsOptional, IsString } from 'class-validator';

export class ReceiveReturnDto {
  @IsOptional()
  @IsString()
  note?: string;
}
