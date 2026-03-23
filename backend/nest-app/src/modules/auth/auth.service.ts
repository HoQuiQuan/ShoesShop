import admin from '../../../firebase.config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TokenDto } from 'src/dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { DecodedIdToken } from 'firebase-admin/auth';

type JwtPayload = {
  userId: string;
  email: string;
};

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  // ✅ FIX: có return type rõ ràng
  async verifyFirebaseToken(token: TokenDto): Promise<DecodedIdToken> {
    try {
      const decoded: DecodedIdToken = await admin
        .auth()
        .verifyIdToken(token.token);

      return decoded;
    } catch {
      throw new UnauthorizedException('Invalid or expired Firebase token');
    }
  }

  // ✅ FIX: ép kiểu env
  generateAccessToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET as string,
      expiresIn: '15m',
    });
  }

  generateRefreshToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET as string,
      expiresIn: '7d',
    });
  }

  // ✅ Login Firebase → JWT
  async loginWithFirebase(token: TokenDto) {
    const firebaseUser = await this.verifyFirebaseToken(token);

    // ✅ FIX: tránh undefined
    if (!firebaseUser.email) {
      throw new UnauthorizedException('Email not found in Firebase token');
    }

    const payload: JwtPayload = {
      userId: firebaseUser.uid,
      email: firebaseUser.email,
    };

    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = await this.jwtService.verify<JwtPayload>(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET as string,
      });

      return {
        accessToken: this.generateAccessToken(payload),
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }
}
