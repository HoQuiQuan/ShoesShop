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
import {
  ChangePasswordDto,
  LoginGoogleFormDto,
  LoginLocalFormDto,
  RegisterCustomerDto,
} from './dto/auth.dto';
import type { Response, Request } from 'express';
import { JwtAuthGuard } from './guards/accessToken.guard';
import { RefreshTokenAuthGuard } from './guards/refreshToken.guard';
import { PrismaService } from 'src/prisma.service';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private prisma: PrismaService,
  ) {}

  @Post('register')
  register(@Body() dto: RegisterCustomerDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(
    @Body() dto: LoginLocalFormDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tokens = await this.authService.loginLocal(dto);
    this.authService.setCookies(res, tokens);
    return { message: 'success' };
  }

  @Post('login-admin')
  async loginAdmin(
    @Body() dto: LoginLocalFormDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tokens = await this.authService.loginAdmin(dto);
    this.authService.setCookies(res, tokens);
    return { message: 'success' };
  }

  @Post('login-google')
  async loginGoogle(
    @Body() dto: LoginGoogleFormDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const tokens = await this.authService.loginGoogle(dto);
    this.authService.setCookies(res, tokens);
    return { message: 'success' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getMe(@Req() req: Request & { user: any }) {
    const user = await this.prisma.users.findUnique({
      where: {
        id: req.user.userId,
      },
    });
    return user;
  }

  @UseGuards(RefreshTokenAuthGuard)
  @Get('refresh')
  async refresh(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const refreshToken = req.cookies.refreshToken;

    const tokens = await this.authService.refresh(refreshToken);
    this.authService.setCookies(res, tokens);

    return { message: 'refreshed' };
  }

  @Get('logout')
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
      await this.authService.logout(refreshToken);
    }

    this.authService.clearCookies(res);

    return { message: 'logout success' };
  }

  @UseGuards(JwtAuthGuard)
  @Post('change-password')
  async chanegPassword(
    @Body() dto: ChangePasswordDto,
    @Req() req: Request & { user: any },
  ) {
    return this.authService.changePassword(req.user.userId, dto);
  }
}
