import { Transform, Type, plainToInstance } from 'class-transformer';

import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from 'class-validator';

import { BadRequestException } from '@nestjs/common';

import { CreateProductVariantDto } from './create-productDetaildto';

class CreateProductSpecDto {
  @IsString()
  @IsNotEmpty()
  label: string;

  @IsString()
  @IsNotEmpty()
  value: string;

  @IsInt()
  @IsOptional()
  @Min(0)
  sortOrder?: number;
}

class ImageColorDto {
  @IsInt()
  fileIndex: number;

  @IsOptional()
  @IsInt()
  colorId: number | null;
}

export class CreateProductDto {
  // =========================
  // PRODUCT
  // =========================

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  categoryId: number;

  // =========================
  // SPECS
  // =========================

  @Transform(({ value }) => {
    let raw = value;

    if (typeof raw === 'string') {
      try {
        raw = JSON.parse(raw);
      } catch (err) {
        throw new BadRequestException(`specs không phải JSON hợp lệ`);
      }
    }

    if (!Array.isArray(raw)) {
      return raw;
    }

    return raw.map((item) =>
      plainToInstance(
        CreateProductSpecDto,
        typeof item === 'string' ? JSON.parse(item) : item,
      ),
    );
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductSpecDto)
  specs?: CreateProductSpecDto[];

  // =========================
  // VARIANTS
  // =========================

  @Transform(({ value }) => {
    let raw = value;

    if (typeof raw === 'string') {
      try {
        raw = JSON.parse(raw);
      } catch (err) {
        throw new BadRequestException(`variants không phải JSON hợp lệ`);
      }
    }

    if (!Array.isArray(raw)) {
      return raw;
    }

    return raw.map((item) =>
      plainToInstance(
        CreateProductVariantDto,
        typeof item === 'string' ? JSON.parse(item) : item,
      ),
    );
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductVariantDto)
  variants?: CreateProductVariantDto[];

  // =========================
  // IMAGE COLORS
  // =========================

  @Transform(({ value }) => {
    let raw = value;

    if (typeof raw === 'string') {
      try {
        raw = JSON.parse(raw);
      } catch (err) {
        throw new BadRequestException(`imageColors không phải JSON hợp lệ`);
      }
    }

    if (!Array.isArray(raw)) {
      return raw;
    }

    return raw.map((item) =>
      plainToInstance(
        ImageColorDto,
        typeof item === 'string' ? JSON.parse(item) : item,
      ),
    );
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ImageColorDto)
  imageColors?: ImageColorDto[];
}
