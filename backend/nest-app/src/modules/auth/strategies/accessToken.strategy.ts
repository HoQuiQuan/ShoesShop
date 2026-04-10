import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { JwtPayload } from '../interfaces/jwtPayload.interface';
import { PrismaService } from 'src/prisma.service';

const cookieExtractor = (req: Request): string | null => {
  if (req && req.cookies) {
    return req.cookies['accessToken'];
  }
  return null;
};

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
      secretOrKey: process.env.JWT_SECRET as string,
    });
  }

  async validate(payload: JwtPayload) {
    const checkIdUser = await this.prismaService.users.findFirst({
      where: {
        id: payload.customerId,
      },
    });
    if (!checkIdUser) {
      throw new UnauthorizedException('User không tồn tại');
    }
    return payload;
  }
}
