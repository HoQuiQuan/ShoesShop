import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsInt()
  productId: number;

  @IsString()
  @IsNotEmpty()
  content: string;
}
