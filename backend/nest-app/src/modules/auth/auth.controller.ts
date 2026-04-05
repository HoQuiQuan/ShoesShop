import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import {
  LoginGoogleFormDto,
  LoginLocalFormDto,
  RegisterCustomerDto,
  TokenDto,
} from 'src/dto/auth.dto';
import type { Response, Request } from 'express';
import { PassThrough } from 'node:stream';

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

  @Get('me')
  async getMe(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    try {
      const token = req.cookies.accessToken;
      // console.log(token);
      if (!token) {
        throw new UnauthorizedException('Not logged in');
      }

      const TokenDto: TokenDto = {
        token: token as string,
      };
      const user = await this.authService.veryfyJwt(TokenDto);
      console.log(user);
      return {
        ...user,
      };
    } catch (error) {
      console.log('access token het han');

      try {
        console.log('da chay vao logic');
        const refreshToken = req.cookies.refreshToken as string;
        const newAccessToken =
          await this.authService.refreshToken(refreshToken);
        res.cookie('accessToken', newAccessToken, {
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
        });
        const tokenDto: TokenDto = {
          token: newAccessToken.accessToken,
        };
        const user = await this.authService.veryfyJwt(tokenDto);
        return {
          ...user,
        };
      } catch (error) {
        console.log('access token va refresh token het han');
      }
    }
  }

  @Get('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('refreshToken');
    res.clearCookie('accessToken');
    return { message: 'logout success' };
  }

  @Get('accessToken')
  async accessToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const access_token = req.cookies.accessToken;
    const refresh_token = req.cookies.refreshToken;
    if (!access_token || !refresh_token) {
      throw new UnauthorizedException('Không có token');
    }
    const dataAccessToken = await this.authService.veryfyJwt({
      token: access_token,
    });
    console.log(dataAccessToken);
    return {
      message: 'success',
    };
  }
}
