"use client";

import { CalendarDays, Check, Gift, ShoppingBag, Ticket } from "lucide-react";

export interface Voucher {
  id: number;
  code: string;
  voucherType: "DISCOUNT" | "FREESHIP";
  discountType?: "PERCENT" | "FIXED_AMOUNT";
  discountValue?: number;
  maxDiscount?: number | null;
  minOrderValue?: number | null;
  endAt: string;
  brand?: string;
  claimed?: boolean;
}

interface VoucherCardProps {
  voucher: Voucher;
  onClaim: (voucher: Voucher) => void;
  loading?: boolean;
}

const formatPrice = (price?: number | null) => {
  if (!price) return "0đ";

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
};

export default function VoucherCard({
  voucher,
  onClaim,
  loading,
}: VoucherCardProps) {
  const isFreeShip = voucher.voucherType === "FREESHIP";

  const getDiscountText = () => {
    if (isFreeShip) {
      return "Miễn phí vận chuyển";
    }

    if (voucher.discountType === "PERCENT") {
      return `Giảm ${voucher.discountValue}%`;
    }

    return `Giảm ${formatPrice(voucher.discountValue)}`;
  };

  const getSubText = () => {
    if (isFreeShip) {
      return voucher.minOrderValue
        ? `Cho đơn từ ${formatPrice(voucher.minOrderValue)}`
        : "Áp dụng cho đơn hàng";
    }

    if (voucher.discountType === "PERCENT" && voucher.maxDiscount) {
      return `Tối đa ${formatPrice(voucher.maxDiscount)}`;
    }

    return "Ưu đãi hấp dẫn";
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl">
      {/* Background decoration */}

      <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-orange-50 transition-transform duration-500 group-hover:scale-125" />

      <div className="relative">
        <div className="flex items-start gap-3">
          {/* Icon */}

          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm ${
              isFreeShip
                ? "bg-green-100 text-green-600"
                : "bg-orange-100 text-orange-600"
            }`}
          >
            {isFreeShip ? <ShoppingBag size={26} /> : <Ticket size={26} />}
          </div>

          {/* Content */}

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center justify-between gap-2">
              <span className="truncate text-sm font-semibold text-gray-500">
                {voucher.brand || "ShoeShop"}
              </span>

              <span
                className={`rounded-full px-2 py-1 text-[10px] font-bold ${
                  isFreeShip
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                {isFreeShip ? "FREESHIP" : "GIẢM GIÁ"}
              </span>
            </div>

            <h3 className="text-lg font-bold text-gray-900">
              {getDiscountText()}
            </h3>

            <p className="mt-1 text-sm font-medium text-orange-600">
              {getSubText()}
            </p>
          </div>
        </div>

        {/* Divider */}

        <div className="my-4 border-t border-dashed border-gray-200" />

        {/* Conditions */}

        <div className="space-y-2 text-sm text-gray-500">
          {voucher.minOrderValue && (
            <div className="flex items-center gap-2">
              <ShoppingBag size={15} />

              <span>
                Đơn tối thiểu{" "}
                <strong className="font-semibold text-gray-700">
                  {formatPrice(voucher.minOrderValue)}
                </strong>
              </span>
            </div>
          )}

          <div className="flex items-center gap-2">
            <CalendarDays size={15} />

            <span>
              HSD: {new Date(voucher.endAt).toLocaleDateString("vi-VN")}
            </span>
          </div>
        </div>

        {/* Button */}

        <button
          disabled={voucher.claimed || loading}
          onClick={() => onClaim(voucher)}
          className={`mt-5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-all duration-300 ${
            voucher.claimed
              ? "cursor-default bg-gray-100 text-gray-500"
              : isFreeShip
                ? "bg-green-600 text-white hover:bg-green-700 active:scale-[0.98]"
                : "bg-orange-500 text-white hover:bg-orange-600 active:scale-[0.98]"
          } disabled:opacity-70`}
        >
          {voucher.claimed ? (
            <>
              <Check size={17} />
              Đã nhận
            </>
          ) : loading ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Đang nhận...
            </>
          ) : (
            <>
              <Gift size={17} />
              Nhận voucher
            </>
          )}
        </button>
      </div>
    </div>
  );
}
