import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { CheckoutService } from './checkout.service';
import { JwtAuthGuard } from '../auth/guards/accessToken.guard';
import { CheckOutDto } from './dto/checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getCheckOut(@Req() req) {
    const checkoutSession = req.session.checkout;
    return this.checkoutService.getCheckout(req.user.userId, checkoutSession);
  }

  @Post('session')
  async setSession(@Req() req, @Body() dto: CheckOutDto) {
    req.session.checkout = {
      productDetail: dto.productDetail,
    };
    return req.session.checkout;
  }

  @Get('getSession')
  async getSession(@Req() req) {
    return req.session.checkout;
  }

  // checkout.controller.ts

  @UseGuards(JwtAuthGuard)
  @Post('session/clear')
  clearCheckoutSession(@Req() req) {
    req.session.checkout = null;

    return {
      message: 'Đã xóa checkout session',
    };
  }
}
