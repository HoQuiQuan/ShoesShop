import { useQuery } from "@tanstack/react-query";
import Vouchers from "@/app/Api/Voucher.api";

export function useMyVouchers() {
  return useQuery({
    queryKey: ["vouchers", "my"],
    queryFn: async () => {
      const response = await Vouchers.getMyVouchers();

      return response.data?.data ?? response.data ?? [];
    },

    retry: false,
  });
}
