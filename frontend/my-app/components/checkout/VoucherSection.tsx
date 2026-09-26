"use client";

import { useState } from "react";
import VoucherModal from "./voucher/voucherModal";
import VoucherTypeRow from "./voucher/voucherTypeRow";
import { Voucher } from "@/type/voucher.type";

interface VoucherSectionProps {
  discountVouchers: Voucher[];
  shippingVouchers: Voucher[];

  selectedDiscountVoucher: Voucher | null;
  selectedShippingVoucher: Voucher | null;

  onSelectDiscount: (voucher: Voucher | null) => void;
  onSelectShipping: (voucher: Voucher | null) => void;
}

export default function VoucherSection({
  discountVouchers,
  shippingVouchers,
  selectedDiscountVoucher,
  selectedShippingVoucher,
  onSelectDiscount,
  onSelectShipping,
}: VoucherSectionProps) {
  const [modalType, setModalType] = useState<"DISCOUNT" | "FREESHIP" | null>(
    null,
  );

  return (
    <>
      <section className="overflow-hidden rounded-lg bg-white">
        {/* Header */}
        <div className="border-b px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-red-500">🎟</span>

            <h2 className="text-sm font-semibold text-gray-900">Voucher</h2>
          </div>
        </div>

        {/* Voucher giảm giá */}
        <VoucherTypeRow
          title="Voucher giảm giá"
          selectedVoucher={selectedDiscountVoucher}
          onClick={() => setModalType("DISCOUNT")}
        />

        <div className="mx-4 border-t" />

        {/* Freeship */}
        <VoucherTypeRow
          title="Freeship"
          selectedVoucher={selectedShippingVoucher}
          onClick={() => setModalType("FREESHIP")}
        />
      </section>

      {/* Discount modal */}
      <VoucherModal
        open={modalType === "DISCOUNT"}
        title="Chọn voucher giảm giá"
        vouchers={discountVouchers}
        selectedVoucher={selectedDiscountVoucher}
        onSelect={onSelectDiscount}
        onClose={() => setModalType(null)}
      />

      {/* Freeship modal */}
      <VoucherModal
        open={modalType === "FREESHIP"}
        title="Chọn voucher Freeship"
        vouchers={shippingVouchers}
        selectedVoucher={selectedShippingVoucher}
        onSelect={onSelectShipping}
        onClose={() => setModalType(null)}
      />
    </>
  );
}
