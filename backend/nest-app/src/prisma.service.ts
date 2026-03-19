import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect(); // connect DB khi app start
  }

  async onModuleDestroy() {
    await this.$disconnect(); // ngắt kết nối khi app tắt
  }
}
