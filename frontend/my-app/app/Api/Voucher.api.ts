import { api } from "@/lib/axios";
import { VoucherType } from "@/type/voucher.type";

export default class Vouchers {
  public static async getApplicableVouchers(
    orderPrice: number,
    voucherType: VoucherType,
  ) {
    return await api.post(
      "/vouchers/applicable",
      {
        orderPrice,
        voucherType,
      },
      { withCredentials: true },
    );
  }

  public static async findAllVoucher() {
    return await api.get("vouchers/findUser/all", { withCredentials: true });
  }

  public static async findAllVoucherAdmin() {
    return await api.get("vouchers/find/all", { withCredentials: true });
  }

  public static async getMyVouchers() {
    return await api.get("vouchers/my-vouchers", {
      withCredentials: true,
    });
  }

  public static async claimVoucher(voucherId: number) {
    return await api.get(`vouchers/user/${voucherId}`, {
      withCredentials: true,
    });
  }

  public static async activateVoucher(id: number) {
    return await api.patch(
      `vouchers/${id}`,
      { isActive: true },
      { withCredentials: true },
    );
  }
}
