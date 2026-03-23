import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // bỏ field không có trong DTO
      forbidNonWhitelisted: true, // báo lỗi nếu có field lạ
    }),
  );
  await app.listen(5000);
}

bootstrap();
