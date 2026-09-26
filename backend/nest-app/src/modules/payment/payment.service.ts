import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma.service';
import { CreateVnpayPaymentDto } from './dto/create-vnpay-payment.dto';
import { VnpayUtil } from './utils/vnpay.util';

@Injectable()
export class PaymentService {
  private readonly tmnCode: string;
  private readonly hashSecret: string;
  private readonly paymentUrl: string;
  private readonly returnUrl: string;
  private readonly frontendUrl: string;
  private readonly ipnUrl: string;

  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {
    this.tmnCode = this.config.get<string>('VNPAY_TMN_CODE') ?? '';

    this.hashSecret = this.config.get<string>('VNPAY_HASH_SECRET') ?? '';

    this.paymentUrl = this.config.get<string>('VNPAY_PAYMENT_URL') ?? '';

    this.returnUrl = this.config.get<string>('VNPAY_RETURN_URL') ?? '';

    this.ipnUrl = this.config.get<string>('VNPAY_IPN_URL') ?? '';

    this.frontendUrl = 'http://localhost:3000';

    if (
      !this.tmnCode ||
      !this.hashSecret ||
      !this.paymentUrl ||
      !this.returnUrl ||
      !this.ipnUrl
    ) {
      throw new Error('Missing VNPAY environment variables');
    }

    console.log({
      paymentUrl: this.paymentUrl,
      returnUrl: this.returnUrl,
      ipnUrl: this.ipnUrl,
    });
  }

  // =====================================================
  // CREATE VNPAY PAYMENT URL
  // =====================================================

  async createVnpayPayment(
    dto: CreateVnpayPaymentDto,
    userId: number,
    ipAddress: string,
  ) {
    const order = await this.prisma.orders.findFirst({
      where: {
        orderCode: dto.orderCode,
        userId,
      },
      select: {
        id: true,
        orderCode: true,
        totalPrice: true,
        status: true,
        paymentStatus: true,
      },
    });

    if (!order) {
      throw new NotFoundException('Không tìm thấy đơn hàng');
    }

    if (order.paymentStatus === 'PAID') {
      throw new BadRequestException('Đơn hàng đã được thanh toán');
    }

    if (order.status === 'CANCELLED') {
      throw new BadRequestException('Đơn hàng đã bị hủy');
    }

    const amount = Number(order.totalPrice);

    if (!Number.isFinite(amount) || amount <= 0) {
      throw new BadRequestException('Số tiền đơn hàng không hợp lệ');
    }

    /**
     * VNPAY yêu cầu amount * 100.
     *
     * Ví dụ:
     * 500000 VND
     * =>
     * 50000000
     */
    const vnpAmount = Math.round(amount * 100);

    const createDate = VnpayUtil.formatVnpayDate();

    /**
     * IP có thể là:
     * ::1
     * 127.0.0.1
     * hoặc IP thật.
     *
     * VNPAY cho phép 7-45 ký tự.
     */
    let vnpIpAddr = ipAddress || '127.0.0.1';

    if (vnpIpAddr.startsWith('::ffff:')) {
      vnpIpAddr = vnpIpAddr.replace('::ffff:', '');
    }

    if (vnpIpAddr === '::1') {
      vnpIpAddr = '127.0.0.1';
    }

    const params: Record<string, string | number> = {
      vnp_Version: '2.1.0',
      vnp_Command: 'pay',
      vnp_TmnCode: this.tmnCode,

      vnp_Amount: vnpAmount,

      vnp_CurrCode: 'VND',

      /**
       * Phải unique.
       * orderCode của bạn đã unique nên
       * có thể dùng trực tiếp.
       */
      vnp_TxnRef: order.orderCode,

      vnp_OrderInfo: `Thanh toan don hang ${order.orderCode}`,

      vnp_OrderType: 'other',

      vnp_Locale: 'vn',

      vnp_ReturnUrl: this.ipnUrl,

      // vnp_IpnUrl: this.ipnUrl,

      vnp_IpAddr: vnpIpAddr,

      vnp_CreateDate: createDate,
    };

    /**
     * SecureHash
     */
    const secureHash = VnpayUtil.createSecureHash(params, this.hashSecret);

    /**
     * Payment URL
     */
    const paymentUrl = VnpayUtil.buildPaymentUrl(
      this.paymentUrl,
      params,
      secureHash,
    );

    /**
     * Nếu paymentMethod của Prisma có VNPAY
     * thì có thể lưu lại.
     *
     * Nếu enum của bạn chưa có VNPAY,
     * bỏ đoạn này.
     */
    // await this.prisma.orders.update({
    //   where: {
    //     orderCode: order.orderCode,
    //   },
    //   data: {
    //     paymentMethod: 'VNPAY',
    //   },
    // });

    return {
      paymentUrl,
      orderCode: order.orderCode,
      amount,
    };
  }

  // =====================================================
  // IPN
  // =====================================================

  async handleVnpayIpn(query: Record<string, unknown>) {
    try {
      /**
       * 1. Lấy SecureHash
       */
      const secureHash = String(query.vnp_SecureHash ?? '');

      if (!secureHash) {
        return {
          RspCode: '97',
          Message: 'Invalid signature',
        };
      }

      /**
       * 2. Lấy các tham số vnp_
       *    và loại bỏ hash.
       */
      const params = VnpayUtil.extractVnpayParams(query);

      /**
       * 3. Verify SecureHash
       *
       * PHẢI làm trước database.
       */
      const isValid = VnpayUtil.verifySecureHash(
        params,
        secureHash,
        this.hashSecret,
      );

      if (!isValid) {
        return {
          RspCode: '97',
          Message: 'Invalid signature',
        };
      }

      /**
       * 4. Verify TmnCode
       */
      if (params.vnp_TmnCode !== this.tmnCode) {
        return {
          RspCode: '97',
          Message: 'Invalid merchant',
        };
      }

      /**
       * 5. Lấy Order
       */
      const order = await this.prisma.orders.findUnique({
        where: {
          orderCode: params.vnp_TxnRef,
        },
        select: {
          id: true,
          orderCode: true,
          totalPrice: true,
          paymentStatus: true,
        },
      });

      if (!order) {
        return {
          RspCode: '01',
          Message: 'Order not found',
        };
      }

      /**
       * 6. Verify amount
       */
      const orderAmount = Math.round(Number(order.totalPrice) * 100);

      const vnpAmount = Number(params.vnp_Amount);

      if (!Number.isFinite(vnpAmount) || vnpAmount !== orderAmount) {
        return {
          RspCode: '04',
          Message: 'Invalid amount',
        };
      }

      /**
       * 7. Idempotency
       *
       * Nếu đã PAID rồi thì không xử lý lại.
       */
      if (order.paymentStatus === 'PAID') {
        return {
          RspCode: '02',
          Message: 'Order already confirmed',
        };
      }

      /**
       * 8. Kiểm tra kết quả VNPAY
       *
       * Cả ResponseCode và
       * TransactionStatus đều nên là 00.
       */
      const isSuccess =
        params.vnp_ResponseCode === '00' &&
        params.vnp_TransactionStatus === '00';

      /**
       * 9. Thanh toán thành công
       */
      if (isSuccess) {
        /**
         * updateMany với điều kiện
         * paymentStatus = UNPAID giúp chống
         * race condition khi IPN được gọi
         * đồng thời.
         */

        console.log('Thanh toan thanh cong');
        const updated = await this.prisma.orders.updateMany({
          where: {
            orderCode: order.orderCode,
            paymentStatus: 'UNPAID',
          },
          data: {
            paymentStatus: 'PAID',

            transactionId: params.vnp_TransactionNo ?? null,
          },
        });

        /**
         * Một request khác đã update trước.
         */
        if (updated.count === 0) {
          return {
            RspCode: '02',
            Message: 'Order already confirmed',
          };
        }

        return {
          RspCode: '00',
          Message: 'Confirm Success',
        };
      }

      /**
       * 10. Thanh toán thất bại
       *
       * Nếu PaymentStatus chỉ có
       * UNPAID/PAID thì giữ UNPAID.
       */
      return {
        RspCode: '00',
        Message: 'Confirm Success',
      };
    } catch (error) {
      console.error('VNPAY IPN ERROR:', error);

      return {
        RspCode: '99',
        Message: 'Unknown error',
      };
    }
  }

  // =====================================================
  // RETURN URL
  // =====================================================

  async handleVnpayReturn(query: Record<string, unknown>) {
    const secureHash = String(query.vnp_SecureHash ?? '');

    const params = VnpayUtil.extractVnpayParams(query);

    const isValid = VnpayUtil.verifySecureHash(
      params,
      secureHash,
      this.hashSecret,
    );

    if (!isValid) {
      return {
        success: false,
        message: 'Invalid signature',
        orderCode: String(query.vnp_TxnRef ?? ''),
      };
    }

    const responseCode = String(query.vnp_ResponseCode ?? '');

    const transactionStatus = String(query.vnp_TransactionStatus ?? '');

    const success = responseCode === '00' && transactionStatus === '00';

    return {
      success,
      orderCode: String(query.vnp_TxnRef ?? ''),
      transactionNo: String(query.vnp_TransactionNo ?? ''),
      responseCode,
      transactionStatus,
      bankCode: String(query.vnp_BankCode ?? ''),
      amount: Number(query.vnp_Amount ?? 0) / 100,
    };
  }

  // =====================================================
  // PARSE VNPAY DATE
  // =====================================================

  private parseVnpayDate(value?: string): Date | null {
    if (!value || value.length !== 14) {
      return null;
    }

    const year = Number(value.substring(0, 4));

    const month = Number(value.substring(4, 6));

    const day = Number(value.substring(6, 8));

    const hour = Number(value.substring(8, 10));

    const minute = Number(value.substring(10, 12));

    const second = Number(value.substring(12, 14));

    /**
     * VNPAY date là GMT+7.
     *
     * Tạo Date bằng UTC tương ứng GMT+7.
     */
    return new Date(Date.UTC(year, month - 1, day, hour - 7, minute, second));
  }
}
