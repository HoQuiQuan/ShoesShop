import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { PrismaModule } from 'src/prisma.module';
import { CartService } from './cart.service';

@Module({})
export class CartModule {
  imports: [PrismaModule];
  controllers: [CartController];
  providers: [CartService];
}
