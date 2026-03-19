import { Module, Global } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // 👈 dùng toàn app không cần import lại
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
