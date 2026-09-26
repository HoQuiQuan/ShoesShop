import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
} from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  receiverName: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(0|\+84)[0-9]{9,10}$/, {
    message: 'Số điện thoại không hợp lệ',
  })
  receiverPhone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  city: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  ward: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  street: string;

  @IsOptional()
  @IsBoolean()
  isDefault?: boolean;
}
