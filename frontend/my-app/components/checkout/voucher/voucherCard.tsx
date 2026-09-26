"use client";

import { Voucher } from "@/type/voucher.type";

interface VoucherCardProps {
  voucher: Voucher;
  selected?: boolean;
  onSelect: (voucher: Voucher) => void;
}

export default function VoucherCard({
  voucher,
  selected = false,
  onSelect,
}: VoucherCardProps) {
  const formatMoney = (value?: number | null) => {
    if (!value) return "0đ";

    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };

  const getDiscountText = () => {
    if (voucher.discountType === "PERCENT") {
      return `Giảm ${voucher.discountValue}%`;
    }

    if (voucher.voucherType === "FREESHIP") {
      return `Freeship tối đa ${formatMoney(voucher.discountValue)}`;
    }

    return `Giảm ${formatMoney(voucher.discountValue)}`;
  };

  return (
    <div
      className={`
        relative flex overflow-hidden rounded-lg border
        bg-white transition
        ${selected ? "border-red-500 bg-red-50/30" : "border-gray-200"}
      `}
    >
      {/* Voucher icon */}
      <div className="flex w-[90px] shrink-0 items-center justify-center bg-red-500 text-white">
        <div className="text-center">
          <div className="text-2xl font-bold">
            {voucher.voucherType === "FREESHIP" ? "🚚" : "🏷"}
          </div>

          <div className="mt-1 text-xs font-medium">
            {voucher.voucherType === "FREESHIP" ? "FREESHIP" : "VOUCHER"}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1 p-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">
              {getDiscountText()}
            </h3>

            {voucher.minOrderValue ? (
              <p className="mt-1 text-xs text-gray-500">
                Đơn tối thiểu {formatMoney(voucher.minOrderValue)}
              </p>
            ) : (
              <p className="mt-1 text-xs text-gray-500">
                Không yêu cầu đơn tối thiểu
              </p>
            )}
          </div>

          {/* Select button */}
          <button
            type="button"
            onClick={() => onSelect(voucher)}
            className={`
              shrink-0 rounded-full px-4 py-1.5 text-xs font-medium
              transition
              ${
                selected
                  ? "bg-red-500 text-white"
                  : "border border-red-500 text-red-500 hover:bg-red-50"
              }
            `}
          >
            {selected ? "Đã chọn" : "Chọn"}
          </button>
        </div>

        {/* Max discount */}
        {voucher.maxDiscount && (
          <p className="mt-2 text-xs text-gray-500">
            Giảm tối đa {formatMoney(voucher.maxDiscount)}
          </p>
        )}

        {/* Expiry */}
        <p className="mt-2 text-[11px] text-gray-400">
          HSD: {new Date(voucher.endAt).toLocaleDateString("vi-VN")}
        </p>
      </div>

      {/* Selected indicator */}
      {selected && (
        <div className="absolute bottom-0 right-0">
          <div className="flex h-5 w-5 items-center justify-center rounded-tl-lg bg-red-500 text-[10px] text-white">
            ✓
          </div>
        </div>
      )}
    </div>
  );
}
