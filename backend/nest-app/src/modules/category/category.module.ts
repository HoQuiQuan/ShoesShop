import { Module, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { PrismaModule } from 'src/prisma.module';
import { AccessTokenStrategy } from '../auth/strategies/accessToken.strategy';
import { PassportModule } from '@nestjs/passport';
import { SlugService } from '../slug/slug';

@Module({
  imports: [PrismaModule, PassportModule],
  controllers: [CategoryController],
  providers: [CategoryService, AccessTokenStrategy, SlugService],
})
export class CategoryModule {}
