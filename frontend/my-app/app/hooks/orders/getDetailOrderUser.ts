import { OrderApi } from "@/app/Api/Order.api";
import { OrderDetail } from "@/type/orderDetail.type";
import { useQuery } from "@tanstack/react-query";

export function useOrderDetail(orderCode: string) {
  return useQuery<OrderDetail | null>({
    queryKey: ["orders", orderCode],

    queryFn: async () => {
      const response = await OrderApi.getDetailOrderUser(orderCode);

      return response.data?.data ?? null;
    },

    enabled: !!orderCode,

    staleTime: 1000 * 60,

    retry: 1,
  });
}
