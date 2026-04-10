import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { JwtPayload } from '../interfaces/jwtPayload.interface';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';
import { Request } from 'express';

const cookieExtractor = (req: Request): string | null => {
  if (req && req.cookies) {
    return req.cookies['refreshToken'];
  }
  return null;
};

@Injectable()
export class refreshTokenStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh',
) {
  constructor(private prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      secretOrKey: process.env.JWT_REFRESH_SECRET as string,
    });
  }
  async validate(req: Request, payload: JwtPayload) {
    const refresh_token = req?.cookies?.refreshToken;
    if (!refresh_token) {
      throw new UnauthorizedException('refresh token không tồn tại');
    }
  }
}
