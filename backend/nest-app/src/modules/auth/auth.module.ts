import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma.module';
import { JwtModule } from '@nestjs/jwt';
// import { AuthGuard } from './auth.guard';
import { PassportModule } from '@nestjs/passport';
import { AccessTokenStrategy } from './strategies/accessToken.strategy';

@Module({
  imports: [PrismaModule, JwtModule.register({}), PassportModule],
  controllers: [AuthController],
  providers: [AuthService, AccessTokenStrategy],
  exports: [JwtModule, AccessTokenStrategy],
})
export class AuthModule {}
