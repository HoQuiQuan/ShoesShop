"use client";

import { useQuery } from "@tanstack/react-query";
import { OrderApi } from "@/app/Api/Order.api";

export const usePaymentOrder = (orderCode: string | null) => {
  return useQuery({
    queryKey: ["payment-order", orderCode],

    queryFn: () => OrderApi.getDetailOrderUser(orderCode!),

    enabled: !!orderCode,

    retry: 1,

    refetchOnWindowFocus: false,

    refetchInterval: (query) => {
      const paymentStatus = query.state.data?.paymentStatus;

      if (paymentStatus === "PAID") {
        return false;
      }

      return 2000;
    },
  });
};
