import { getFirebaseApp } from 'src/firebase.config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  LoginGoogleFormDto,
  LoginLocalFormDto,
  RegisterCustomerDto,
  TokenDto,
} from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { DecodedIdToken } from 'firebase-admin/auth';
import { ProviderCustomer } from 'src/enums/providerCustomer.enum';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwtPayload.interface';
import { Role } from '../../common/enums/role.enum';
import { StatusUser } from 'src/common/enums/status_user.enum';

// hash 1 chieu de bao mat
async function hashPassword(plainTextPassword: string): Promise<string> {
  const saltRounds = 10;
  return bcrypt.hash(plainTextPassword, saltRounds);
}

// Kiem tra password co dung khong
async function comparePassword(
  plainTextPassword: string,
  hashedPassword: string,
): Promise<boolean> {
  return bcrypt.compare(plainTextPassword, hashedPassword);
}

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  // ✅ FIX: có return type rõ ràng
  async verifyFirebaseToken(token: string): Promise<DecodedIdToken> {
    try {
      const firebaseApp = getFirebaseApp();

      return await firebaseApp.auth().verifyIdToken(token);
    } catch {
      throw new UnauthorizedException('Invalid or expired Firebase token');
    }
  }

  // Đăng ký theo LOCAL
  async registerCustomer(registerCustomer: RegisterCustomerDto) {
    const isCustomerExisted = await this.prismaService.users.findFirst({
      where: {
        email: registerCustomer.email,
      },
    });

    if (isCustomerExisted) {
      throw new UnauthorizedException('User đã tồn tại');
    }

    const hashedPassword = await hashPassword(registerCustomer.password);
    const newCustomer = await this.prismaService.users.create({
      data: {
        email: registerCustomer.email,
        password: hashedPassword,
        name: registerCustomer.username,
        provider: ProviderCustomer.LOCAL,
        role: Role.CUSTOMER,
        status: StatusUser.INACTIVE,
      },
    });
    await this.prismaService.cart.create({
      data: {
        customerId: newCustomer.id,
      },
    });
    return {
      message: 'success',
    };
  }

  // ✅ FIX: ép kiểu env
  generateAccessToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET as string,
      expiresIn: '1h',
    });
  }

  generateRefreshToken(payload: JwtPayload): string {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET as string,
      expiresIn: '7d',
    });
  }

  // ✅ Login Firebase → JWT
  async loginWithFirebase(loginForm: LoginGoogleFormDto) {
    const firebaseUser = await this.verifyFirebaseToken(loginForm.token);
    const name = 'user_' + Math.random().toString(36).substring(2, 10);
    const emailUser: string = firebaseUser.email as string;

    const findUser = await this.prismaService.users.findFirst({
      where: {
        email: emailUser,
      },
    });
    if (!findUser) {
      const newCustomer = await this.prismaService.users.create({
        data: {
          name: name,
          email: emailUser,
          provider: ProviderCustomer.GOOGLE,
          role: Role.CUSTOMER,
          status: StatusUser.ACTIVE,
        },
      });
      await this.prismaService.cart.create({
        data: {
          customerId: newCustomer.id,
        },
      });
    }

    // ✅ FIX: tránh undefined
    if (!firebaseUser.email) {
      throw new UnauthorizedException('Email not found in Firebase token');
    }
    const customer = await this.prismaService.users.findFirst({
      where: {
        email: firebaseUser.email,
      },
    });
    const payload: JwtPayload = {
      customerId: customer?.id as number,
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
        accessToken: this.generateAccessToken({
          customerId: payload.customerId,
          email: payload.email,
        }),
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async veryfyJwt(token: TokenDto) {
    try {
      const payload = await this.jwtService.verify<JwtPayload>(token.token, {
        secret: process.env.JWT_SECRET,
      });
      const customer = await this.prismaService.users.findFirst({
        where: {
          email: payload.email,
        },
      });
      return {
        ...customer,
        exp: payload.exp,
      };
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async loginLocal(loginForm: LoginLocalFormDto) {
    const findCustomer = await this.prismaService.users.findFirst({
      where: {
        email: loginForm.email,
      },
    });

    if (findCustomer == null) {
      throw new UnauthorizedException('Account existed');
    }

    const checkPasswordCustomer = await comparePassword(
      loginForm.password,
      findCustomer?.password as string,
    );

    if (!checkPasswordCustomer) {
      throw new UnauthorizedException('password invalided');
    }

    const payload: JwtPayload = {
      customerId: findCustomer.id,
      email: findCustomer.email,
    };

    await this.prismaService.users.update({
      where: {
        id: findCustomer.id,
      },
      data: {
        status: StatusUser.ACTIVE,
      },
    });

    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }
}
