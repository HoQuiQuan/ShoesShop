export interface CreateVnpayPaymentRequest {
  orderCode: string;
}

export interface CreateVnpayPaymentResponse {
  paymentUrl: string;
  orderCode: string;
  amount: number;
}

export type PaymentStatus = "UNPAID" | "PAID";
