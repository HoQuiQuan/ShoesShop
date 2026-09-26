import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { RolesGuard } from 'src/common/guards/role.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorator/role.decorator';

import { FilesInterceptor } from '@nestjs/platform-express';
import { UpdateProductDetailDto } from './dto/update-productDetail.dto';
import { ProductDetailService } from './product-detail.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly productDetailService: ProductDetailService,
  ) {}

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Post()
  @UseInterceptors(FilesInterceptor('files', 10))
  async createProduct(
    @Body() dto: CreateProductDto,

    @UploadedFiles()
    files: Express.Multer.File[],
  ) {
    return this.productService.createProduct(
      dto,
      files ?? [],
      // dto.imageColors ?? [],
    );
  }
  @Get()
  async findMany(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('categoryId') categoryId: number,
  ) {
    return this.productService.findAll(page, limit, categoryId);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.productService.removeProduct(id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Get('ADMIN')
  async getProductAdmin() {
    return this.productService.findAllAdmin();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Get('admin/:id')
  async findOneAdmin(@Param('id') id: number) {
    return this.productService.findOneAdmin(id);
  }

  @Get('colors/getAll')
  async getColors() {
    return this.productService.getColor();
  }

  @Get('sizes/getAll')
  async getSizes() {
    return this.productService.getSize();
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('ADMIN')
  @Patch('productDetail/:id')
  async updateProductDetail(
    @Body() dto: UpdateProductDetailDto,
    @Param('id') id: number,
  ) {
    return this.productDetailService.updateProductDetail(id, dto);
  }
}
