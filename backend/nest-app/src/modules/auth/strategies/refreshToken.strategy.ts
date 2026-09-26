import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

import { PrismaService } from 'src/prisma.service';
import { JwtPayload } from '../interfaces/jwtPayload.interface';
import { compare } from 'src/common/utils/compare.util';

const cookieExtractor = (req: Request): string | null => {
  if (req?.cookies?.refreshToken) {
    return req.cookies.refreshToken;
  }

  return null;
};

@Injectable()
export class refreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private readonly prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),

      secretOrKey: process.env.JWT_REFRESH_SECRET as string,

      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: JwtPayload) {
    // =========================
    // 1. Lấy refresh token từ cookie
    // =========================

    const refreshToken = req?.cookies?.refreshToken;

    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token không tồn tại');
    }

    // =========================
    // 2. Kiểm tra payload
    // =========================

    if (!payload.userId || !payload.jti) {
      throw new UnauthorizedException('Refresh token không hợp lệ');
    }

    // =========================
    // 3. Tìm đúng refresh token
    // =========================

    const refreshTokenRecord = await this.prismaService.refreshToken.findUnique(
      {
        where: {
          jti: payload.jti,
        },
      },
    );

    if (!refreshTokenRecord) {
      throw new UnauthorizedException('Refresh token không tồn tại');
    }

    // =========================
    // 4. Kiểm tra token có thuộc user không
    // =========================

    if (refreshTokenRecord.userId !== payload.userId) {
      throw new UnauthorizedException('Refresh token không hợp lệ');
    }

    // =========================
    // 5. Kiểm tra revoked
    // =========================

    if (refreshTokenRecord.revoked) {
      throw new UnauthorizedException('Refresh token đã bị thu hồi');
    }

    // =========================
    // 6. Kiểm tra hết hạn
    // =========================

    if (refreshTokenRecord.expiresAt < new Date()) {
      throw new UnauthorizedException('Refresh token đã hết hạn');
    }

    // =========================
    // 7. So sánh token
    // =========================

    const isValid = await compare(refreshToken, refreshTokenRecord.token);

    if (!isValid) {
      throw new UnauthorizedException('Refresh token không hợp lệ');
    }

    // =========================
    // 8. Trả payload cho request.user
    // =========================

    return payload;
  }
}
