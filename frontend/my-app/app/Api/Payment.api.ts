import { api } from "@/lib/axios";
import {
  CreateVnpayPaymentRequest,
  CreateVnpayPaymentResponse,
} from "@/type/payment.type";

export const PaymentApi = {
  createVnpayPayment: async (
    data: CreateVnpayPaymentRequest,
  ): Promise<CreateVnpayPaymentResponse> => {
    const response = await api.post("/payment/vnpay", data);

    return response.data.data;
  },
};
