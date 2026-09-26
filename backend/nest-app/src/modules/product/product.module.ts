import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaModule } from 'src/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { SlugService } from '../slug/slug';
import { AccessTokenStrategy } from '../auth/strategies/accessToken.strategy';
import { CloudinaryModule } from 'src/common/cloudinary/cloudinary.module';
import { ProductDetailService } from './product-detail.service';
import { ProductImagesSerVice } from './product-images.service';

@Module({
  imports: [PrismaModule, PassportModule, CloudinaryModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    SlugService,
    AccessTokenStrategy,
    ProductDetailService,
    ProductImagesSerVice,
  ],
})
export class ProductModule {}
