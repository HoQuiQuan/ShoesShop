import { getFirebaseApp } from 'src/firebase.config';
import { randomUUID } from 'crypto';
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  ChangePasswordDto,
  LoginGoogleFormDto,
  LoginLocalFormDto,
  RegisterCustomerDto,
  TokenDto,
} from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwtPayload.interface';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  // ================= TOKEN =================
  generateAccessToken(payload: JwtPayload) {
    return this.jwt.sign(payload, {
      secret: process.env.JWT_SECRET!,
      expiresIn: '15m',
    });
  }

  generateRefreshToken(payload: JwtPayload) {
    return this.jwt.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET!,
      expiresIn: '7d',
    });
  }

  // ================= REGISTER =================
  async register(dto: RegisterCustomerDto) {
    const existed = await this.prisma.users.findUnique({
      where: { email: dto.email },
    });

    if (existed) {
      throw new UnauthorizedException('User already exists');
    }

    const hashed = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.users.create({
      data: {
        email: dto.email,
        password: hashed,
        name: dto.username,
      },
    });

    await this.prisma.cart.create({
      data: { userId: user.id },
    });

    return { message: 'success' };
  }

  // ================= LOGIN LOCAL =================
  async loginLocal(dto: LoginLocalFormDto) {
    const user = await this.prisma.users.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedException('User not active');
    }

    const isMatch = await bcrypt.compare(dto.password, user.password!);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return this.issueTokens(user.id, user.email);
  }

  // ================= LOGIN GOOGLE =================
  async loginGoogle(dto: LoginGoogleFormDto) {
    const firebaseUser = await this.verifyFirebaseToken(dto.token);

    if (!firebaseUser.email) {
      throw new UnauthorizedException('No email');
    }

    let user = await this.prisma.users.findUnique({
      where: { email: firebaseUser.email },
    });

    if (!user) {
      user = await this.prisma.users.create({
        data: {
          email: firebaseUser.email,
          name: 'user_' + Math.random().toString(36).slice(2, 8),
        },
      });

      await this.prisma.cart.create({
        data: { userId: user.id },
      });
    }

    return this.issueTokens(user.id, user.email);
  }

  async loginAdmin(dto: LoginLocalFormDto) {
    const user = await this.prisma.users.findUnique({
      where: { email: dto.email },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');

    if (user.status !== 'ACTIVE') {
      throw new UnauthorizedException('User not active');
    }

    if (user.role !== 'ADMIN') {
      throw new UnauthorizedException('Không phải ADMIN');
    }

    const isMatch = await bcrypt.compare(dto.password, user.password!);
    if (!isMatch) throw new UnauthorizedException('Invalid credentials');

    return this.issueTokens(user.id, user.email);
  }

  // ================= CORE TOKEN LOGIC =================
  async issueTokens(userId: number, email: string) {
    const jti = randomUUID();
    const payload: JwtPayload = { userId: userId, email, jti };
    const accessToken = this.generateAccessToken(payload);
    const refreshToken = this.generateRefreshToken(payload);

    // hash refresh token
    const hashed = await bcrypt.hash(refreshToken, 10);

    await this.prisma.refreshToken.create({
      data: {
        userId,
        jti,
        token: hashed,
        revoked: false,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });

    return { accessToken, refreshToken };
  }

  // ================= REFRESH =================
  async refresh(oldRefreshToken: string) {
    const payload = await this.jwt.verify<JwtPayload>(oldRefreshToken, {
      secret: process.env.JWT_REFRESH_SECRET!,
    });

    const token = await this.prisma.refreshToken.findUnique({
      where: {
        jti: payload.jti,
      },
    });

    if (!token) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if (token.revoked) {
      throw new UnauthorizedException('Refresh token revoked');
    }

    if (token.expiresAt < new Date()) {
      throw new UnauthorizedException('Refresh token expired');
    }

    await this.prisma.refreshToken.update({
      where: {
        id: token.id,
      },
      data: {
        revoked: true,
      },
    });

    return this.issueTokens(payload.userId, payload.email);
  }

  // ================= LOGOUT =================
  async logout(refreshToken: string) {
    const payload = await this.jwt.verify<JwtPayload>(refreshToken, {
      secret: process.env.JWT_REFRESH_SECRET!,
    });

    await this.prisma.refreshToken.updateMany({
      where: {
        userId: payload.userId,
        revoked: false,
      },
      data: { revoked: true },
    });
  }

  // =================CHANGE PASSWORD ===============
  async changePassword(userId: number, changePasswordDto: ChangePasswordDto) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('Không tìm thấy người dùng');
    }

    const isMatch = await bcrypt.compare(
      changePasswordDto.oldPassword,
      user.password as string,
    );

    if (!isMatch) {
      throw new BadRequestException('Mật khẩu cũ không đúng');
    }

    if (changePasswordDto.newPassword !== changePasswordDto.confirmPassword) {
      throw new BadRequestException('Mật khẩu không trùng khớp');
    }

    const newPasswordHashed = await bcrypt.hash(
      changePasswordDto.newPassword,
      10,
    );

    await this.prisma.users.update({
      where: {
        id: userId,
      },
      data: {
        password: newPasswordHashed,
      },
    });

    return {
      message: 'Đổi mật khẩu thành công',
    };
  }

  // ================= FIREBASE =================
  async verifyFirebaseToken(token: string) {
    try {
      const app = getFirebaseApp();
      return await app.auth().verifyIdToken(token);
    } catch {
      throw new UnauthorizedException('Firebase token invalid');
    }
  }

  // ================= COOKIE =================
  setCookies(res: any, tokens: TokenDto) {
    res.cookie('accessToken', tokens.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
    });

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
    });
  }

  clearCookies(res: any) {
    res.clearCookie('accessToken');
    res.clearCookie('refreshToken');
  }
}
