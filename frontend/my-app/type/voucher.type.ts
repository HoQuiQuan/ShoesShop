export type VoucherType = "DISCOUNT" | "FREESHIP";

export interface Voucher {
  id: number;
  code: string;
  voucherType: VoucherType;
  discountType: "PERCENT" | "FIXED_AMOUNT";
  discountValue: number;
  maxDiscount?: number | null;
  minOrderValue?: number | null;
  endAt: string;
  description?: string;
}
