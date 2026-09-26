import * as crypto from 'crypto';

export class VnpayUtil {
  /**
   * Encode theo format VNPAY.
   *
   * VNPAY yêu cầu:
   * - sort key tăng dần
   * - encode value
   * - space => +
   */
  static encodeValue(value: unknown): string {
    return encodeURIComponent(String(value ?? '')).replace(/%20/g, '+');
  }

  /**
   * Sort object theo key.
   */
  static sortObject(
    params: Record<string, string | number>,
  ): Record<string, string> {
    const sorted: Record<string, string> = {};

    Object.keys(params)
      .sort()
      .forEach((key) => {
        sorted[key] = String(params[key]);
      });

    return sorted;
  }

  /**
   * Tạo signData theo format VNPAY.
   */
  static buildSignData(params: Record<string, string | number>): string {
    const sorted = this.sortObject(params);

    return Object.keys(sorted)
      .map((key) => `${key}=${this.encodeValue(sorted[key])}`)
      .join('&');
  }

  /**
   * HMAC SHA512.
   */
  static createSecureHash(
    params: Record<string, string | number>,
    secretKey: string,
  ): string {
    const signData = this.buildSignData(params);

    return crypto
      .createHmac('sha512', secretKey)
      .update(signData, 'utf-8')
      .digest('hex');
  }

  /**
   * So sánh hash an toàn.
   */
  static verifySecureHash(
    params: Record<string, string | number>,
    secureHash: string,
    secretKey: string,
  ): boolean {
    if (!secureHash) {
      return false;
    }

    const calculatedHash = this.createSecureHash(params, secretKey);

    const a = Buffer.from(calculatedHash.toLowerCase(), 'utf8');
    const b = Buffer.from(secureHash.toLowerCase(), 'utf8');

    if (a.length !== b.length) {
      return false;
    }

    return crypto.timingSafeEqual(a, b);
  }

  /**
   * Build URL cuối cùng gửi khách sang VNPAY.
   */
  static buildPaymentUrl(
    paymentUrl: string,
    params: Record<string, string | number>,
    secureHash: string,
  ): string {
    const sorted = this.sortObject(params);

    const query = Object.keys(sorted)
      .map((key) => `${key}=${this.encodeValue(sorted[key])}`)
      .join('&');

    return `${paymentUrl}?${query}&vnp_SecureHash=${secureHash}`;
  }

  /**
   * Lấy các field vnp_ từ query.
   */
  static extractVnpayParams(
    query: Record<string, unknown>,
  ): Record<string, string> {
    const result: Record<string, string> = {};

    for (const [key, value] of Object.entries(query)) {
      if (
        key.startsWith('vnp_') &&
        key !== 'vnp_SecureHash' &&
        key !== 'vnp_SecureHashType'
      ) {
        result[key] = String(value ?? '');
      }
    }

    return result;
  }

  /**
   * Format DateTime GMT+7.
   */
  static formatVnpayDate(date = new Date()): string {
    const formatter = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Ho_Chi_Minh',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const parts = formatter.formatToParts(date);

    const map: Record<string, string> = {};

    for (const part of parts) {
      if (part.type !== 'literal') {
        map[part.type] = part.value;
      }
    }

    return map.year + map.month + map.day + map.hour + map.minute + map.second;
  }
}
