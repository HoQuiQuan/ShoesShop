import { IsString, MinLength } from 'class-validator';

export class RejectReturnDto {
  @IsString()
  @MinLength(3)
  reason: string;
}
