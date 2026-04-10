import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import {
  LoginGoogleFormDto,
  LoginLocalFormDto,
  RegisterCustomerDto,
  TokenDto,
} from './dto/auth.dto';
import type { Response, Request } from 'express';
import { JwtAuthGuard } from './guards/accessToken.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async registerCustomerController(
    @Body() registerCustomer: RegisterCustomerDto,
  ) {
    return this.authService.registerCustomer(registerCustomer);
  }

  @Post('loginWithGoogle')
  async loginWithFirebaseController(
    @Body() loginForm: LoginGoogleFormDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const accessAndRefreshtoken =
      await this.authService.loginWithFirebase(loginForm);

    res.cookie('refreshToken', accessAndRefreshtoken.refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
    });
    return {
      message: 'success',
    };
  }

  @Post('loginLocal')
  async loginLocalController(
    @Body() loginForm: LoginLocalFormDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const accessAndRefreshtoken = await this.authService.loginLocal(loginForm);

    res.cookie('refreshToken', accessAndRefreshtoken.refreshToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
    });
    res.cookie('accessToken', accessAndRefreshtoken.accessToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: true,
    });
    return {
      message: 'success',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req: Request) {
    try {
      const user = req.user;
      console.log(user);

      return {
        ...user,
      };
    } catch (error) {
      throw new UnauthorizedException('AccessToken hết hạn hoặc không tồn tại');
    }
  }

  @Get('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');
    return { message: 'logout success' };
  }
}
