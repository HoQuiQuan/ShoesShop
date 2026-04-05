import { IsNotEmpty, IsString } from 'class-validator';

export class TokenDto {
  @IsString()
  @IsNotEmpty()
  token: string;
}

// Đăng ký bằng google
export class LoginGoogleFormDto {
  @IsString()
  @IsNotEmpty()
  token: string;
}

// Đăng ký bằng Local
export class RegisterCustomerDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

// Login trên local
export class LoginLocalFormDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
