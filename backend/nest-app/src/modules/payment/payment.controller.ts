import {
  Controller,
  Get,
  Post,
  Body,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';

import type { Request, Response } from 'express';

import { PaymentService } from './payment.service';
import { CreateVnpayPaymentDto } from './dto/create-vnpay-payment.dto';

import { JwtAuthGuard } from '../auth/guards/accessToken.guard';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // =====================================================
  // CREATE VNPAY PAYMENT
  // =====================================================

  @UseGuards(JwtAuthGuard)
  @Post('vnpay')
  async createVnpayPayment(
    @Body() dto: CreateVnpayPaymentDto,
    @Req() req: Request,
  ) {
    const user = req.user as {
      userId: number;
    };

    const ipAddress = this.getClientIp(req);

    const data = await this.paymentService.createVnpayPayment(
      dto,
      user.userId,
      ipAddress,
    );

    return {
      success: true,
      message: 'Tạo URL thanh toán VNPAY thành công',
      data,
      date: new Date(),
      path: req.originalUrl,
    };
  }

  // =====================================================
  // VNPAY IPN
  // =====================================================

  @Get('vnpay-ipn')
  async vnpayIpn(@Query() query: Record<string, unknown>) {
    console.log('da goi controller vnpay-ipn');
    return this.paymentService.handleVnpayIpn(query);
  }

  // =====================================================
  // VNPAY RETURN
  // =====================================================

  @Get('vnpay-return')
  async vnpayReturn(
    @Query() query: Record<string, unknown>,
    @Res() res: Response,
  ) {
    const result = await this.paymentService.handleVnpayReturn(query);

    const orderCode = encodeURIComponent(result.orderCode);

    const responseCode = encodeURIComponent(result.responseCode ?? '');

    const success = result.success ? '1' : '0';

    const frontendUrl = process.env.FRONTEND_URL ?? 'http://localhost:3000';

    const redirectUrl =
      `${frontendUrl}/payment/result` +
      `?orderCode=${orderCode}` +
      `&success=${success}` +
      `&responseCode=${responseCode}`;

    return res.redirect(redirectUrl);
  }

  // =====================================================
  // GET CLIENT IP
  // =====================================================

  private getClientIp(req: Request): string {
    const forwarded = req.headers['x-forwarded-for'];

    if (typeof forwarded === 'string') {
      return forwarded.split(',')[0].trim();
    }

    if (Array.isArray(forwarded)) {
      return forwarded[0];
    }

    return req.socket.remoteAddress ?? '127.0.0.1';
  }
}
