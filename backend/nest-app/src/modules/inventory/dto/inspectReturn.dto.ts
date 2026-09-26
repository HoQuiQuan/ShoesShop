import { IsOptional, IsString } from 'class-validator';

export class InspectReturnDto {
  @IsOptional()
  @IsString()
  note?: string;
}
