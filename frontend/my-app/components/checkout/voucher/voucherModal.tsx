"use client";

import { useEffect } from "react";
import VoucherCard from "./voucherCard";
import { Voucher } from "@/type/voucher.type";

interface VoucherModalProps {
  open: boolean;
  title: string;

  vouchers: Voucher[];

  selectedVoucher: Voucher | null;

  onSelect: (voucher: Voucher | null) => void;

  onClose: () => void;
}

export default function VoucherModal({
  open,
  title,
  vouchers,
  selectedVoucher,
  onSelect,
  onClose,
}: VoucherModalProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSelect = (voucher: Voucher) => {
    onSelect(voucher);
  };

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Bottom sheet */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          mx-auto
          flex max-h-[85vh]
          max-w-[600px]
          flex-col
          rounded-t-2xl
          bg-white
        "
      >
        {/* Header */}
        <div className="relative flex h-14 items-center justify-center border-b">
          <h2 className="text-base font-semibold">{title}</h2>

          <button
            onClick={onClose}
            className="
              absolute right-4
              text-2xl
              text-gray-500
            "
          >
            ×
          </button>
        </div>

        {/* List */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-3">
          {vouchers.length === 0 ? (
            <div className="flex h-60 items-center justify-center">
              <div className="text-center">
                <div className="text-4xl">🎟️</div>

                <p className="mt-3 text-sm text-gray-500">Không có voucher</p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {vouchers.map((voucher) => (
                <VoucherCard
                  key={voucher.id}
                  voucher={voucher}
                  selected={selectedVoucher?.id === voucher.id}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          )}
        </div>

        {/* Bottom button */}
        <div className="border-t bg-white p-3">
          <button
            onClick={onClose}
            className="
              w-full
              rounded-lg
              bg-red-500
              py-3
              text-sm
              font-semibold
              text-white
            "
          >
            Xong
          </button>
        </div>
      </div>
    </div>
  );
}
