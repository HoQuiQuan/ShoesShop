import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TokenDto } from 'src/dto/token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  loginWithFirebaseController(@Body() token: TokenDto) {
    return this.authService.loginWithFirebase(token);
  }

  @Post('refreshToken')
  refreshTokenController(@Body() refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }
}
