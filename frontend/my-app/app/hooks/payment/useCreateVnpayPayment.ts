"use client";

import { useMutation } from "@tanstack/react-query";
import { PaymentApi } from "@/app/Api/Payment.api";

export const useCreateVnpayPayment = () => {
  return useMutation({
    mutationFn: PaymentApi.createVnpayPayment,
  });
};
