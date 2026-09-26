"use client";

import { Voucher } from "@/type/voucher.type";

interface VoucherTypeRowProps {
  title: string;
  selectedVoucher: Voucher | null;
  onClick: () => void;
}

export default function VoucherTypeRow({
  title,
  selectedVoucher,
  onClick,
}: VoucherTypeRowProps) {
  const formatMoney = (value: number) => {
    return new Intl.NumberFormat("vi-VN").format(value) + "đ";
  };

  const getText = () => {
    if (!selectedVoucher) {
      return "Chọn voucher";
    }

    if (selectedVoucher.discountType === "FIXED_AMOUNT") {
      return `Giảm ${formatMoney(selectedVoucher.discountValue)}`;
    }

    if (selectedVoucher.discountType === "PERCENT") {
      return `Giảm ${selectedVoucher.discountValue}%`;
    }

    return `Freeship ${formatMoney(selectedVoucher.discountValue)}`;
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center justify-between px-4 py-4 transition hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        <span className="text-lg">{title === "Freeship" ? "🚚" : "🏷️"}</span>

        <span className="text-sm text-gray-700">{title}</span>
      </div>

      <div className="flex items-center gap-2">
        <span
          className={
            selectedVoucher
              ? "text-sm font-medium text-red-500"
              : "text-sm text-gray-400"
          }
        >
          {getText()}
        </span>

        <span className="text-lg text-gray-400">›</span>
      </div>
    </button>
  );
}
