import { useQuery } from "@tanstack/react-query";
import Vouchers from "@/app/Api/Voucher.api";

export function useAllVouchers() {
  return useQuery({
    queryKey: ["vouchers", "all"],
    queryFn: async () => {
      const response = await Vouchers.findAllVoucher();

      return response.data?.data ?? [];
    },
  });
}
