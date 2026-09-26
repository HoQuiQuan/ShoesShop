"use client";

import { CreditCard, ReceiptText } from "lucide-react";

interface Props {
  subtotal: string | number;
  shippingFee: string | number;
  discountAmount: string | number;
  totalPrice: string | number;
  paymentMethod: string;
  paymentStatus: string;
  note?: string | null;
}

const formatPrice = (value: string | number) => {
  return Number(value).toLocaleString("vi-VN") + "₫";
};

const paymentMethodLabel: Record<string, string> = {
  COD: "Thanh toán khi nhận hàng",
  VNPAY: "Thanh toán VNPay",
  MOMO: "Thanh toán MoMo",
};

const paymentStatusLabel: Record<string, string> = {
  PAID: "Đã thanh toán",
  UNPAID: "Chưa thanh toán",
  FAILED: "Thanh toán thất bại",
  REFUNDED: "Đã hoàn tiền",
};

export default function OrderPaymentCard({
  subtotal,
  shippingFee,
  discountAmount,
  totalPrice,
  paymentMethod,
  paymentStatus,
  note,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <ReceiptText size={19} />
        </div>

        <div>
          <h2 className="font-bold">Chi tiết thanh toán</h2>

          <p className="text-sm text-gray-500">Tổng kết giá trị đơn hàng</p>
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Tạm tính</span>

          <span className="font-medium">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Phí vận chuyển</span>

          <span className="font-medium">{formatPrice(shippingFee)}</span>
        </div>

        <div className="flex justify-between gap-4">
          <span className="text-gray-500">Giảm giá</span>

          <span className="font-medium text-green-600">
            -{formatPrice(discountAmount)}
          </span>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-end justify-between gap-4">
            <span className="font-semibold">Tổng thanh toán</span>

            <span className="text-xl font-bold text-gray-900">
              {formatPrice(totalPrice)}
            </span>
          </div>
        </div>
      </div>

      {/* Payment method */}
      <div className="mt-6 rounded-xl bg-gray-50 p-4">
        <div className="flex items-center gap-3">
          <CreditCard size={19} />

          <div>
            <p className="text-xs text-gray-500">Phương thức thanh toán</p>

            <p className="mt-1 font-medium">
              {paymentMethodLabel[paymentMethod] || paymentMethod}
            </p>
          </div>
        </div>

        <div className="mt-3 border-t border-gray-200 pt-3">
          <p className="text-xs text-gray-500">Trạng thái thanh toán</p>

          <p
            className={`mt-1 font-medium ${
              paymentStatus === "PAID"
                ? "text-green-600"
                : paymentStatus === "FAILED"
                  ? "text-red-600"
                  : "text-orange-600"
            }`}
          >
            {paymentStatusLabel[paymentStatus] || paymentStatus}
          </p>
        </div>
      </div>

      {/* Note */}
      {note && (
        <div className="mt-5 rounded-xl border border-dashed border-gray-300 p-4">
          <p className="text-xs font-medium text-gray-500">Ghi chú</p>

          <p className="mt-1 text-sm text-gray-700">{note}</p>
        </div>
      )}
    </div>
  );
}
