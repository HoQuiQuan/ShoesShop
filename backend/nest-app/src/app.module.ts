import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { CustomerModule } from './modules/customer/customer.module';

@Module({
  imports: [PrismaModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// nest generate controller modules/customer
