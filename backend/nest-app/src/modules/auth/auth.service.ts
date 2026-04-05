import { getFirebaseApp } from 'src/firebase.config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  LoginGoogleFormDto,
  LoginLocalFormDto,
  RegisterCustomerDto,
  TokenDto,
} from 'src/dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { DecodedIdToken } from 'firebase-admin/auth';
import { ProviderCustomer } from 'src/enums/providerCustomer.enum';
import * as bcrypt from 'bcrypt';

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

type JwtPayload = {
  customerId: number;
  email: string;
  iat?: number;
  exp?: number;
};

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
    const isCustomerExisted = await this.prismaService.customers.findFirst({
      where: {
        email: registerCustomer.email,
      },
    });

    if (isCustomerExisted) {
      throw new UnauthorizedException('User đã tồn tại');
    }

    const hashedPassword = await hashPassword(registerCustomer.password);
    await this.prismaService.customers.create({
      data: {
        email: registerCustomer.email,
        password: hashedPassword,
        name: registerCustomer.username,
        provider: ProviderCustomer.LOCAL,
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
      expiresIn: '1m',
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
    // console.log('secret: ', process.env.JWT_SECRET);
    const firebaseUser = await this.verifyFirebaseToken(loginForm.token);
    const name = 'user_' + Math.random().toString(36).substring(2, 10);
    const emailUser: string = firebaseUser.email as string;

    const findUser = await this.prismaService.customers.findFirst({
      where: {
        email: emailUser,
      },
    });
    const provider: string = ProviderCustomer.GOOGLE as string;
    if (!findUser && provider == (ProviderCustomer.GOOGLE as string)) {
      await this.prismaService.customers.create({
        data: {
          name: name,
          email: emailUser,
          provider: provider,
        },
      });
    } else if (!findUser && provider == (ProviderCustomer.LOCAL as string)) {
      return {
        message: 'Bạn chưa đăng ký tài khoản',
        provider: 'Local',
      };
    } else {
      if (provider == (ProviderCustomer.LOCAL as string)) {
        if (!findUser?.password) {
          throw new UnauthorizedException('Password not set');
        }
      }
    }

    console.log(name);
    // ✅ FIX: tránh undefined
    if (!firebaseUser.email) {
      throw new UnauthorizedException('Email not found in Firebase token');
    }
    const customer = await this.prismaService.customers.findFirst({
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
      console.log(payload);
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
      const customer = await this.prismaService.customers.findFirst({
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
    const findCustomer = await this.prismaService.customers.findFirst({
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

    return {
      accessToken: this.generateAccessToken(payload),
      refreshToken: this.generateRefreshToken(payload),
    };
  }
}
