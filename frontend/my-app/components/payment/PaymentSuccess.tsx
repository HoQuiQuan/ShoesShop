"use client";

import { CheckCircle2, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  orderCode: string;
  totalPrice?: number;
}

export default function PaymentSuccess({ orderCode, totalPrice }: Props) {
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 size={48} className="text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Thanh toán thành công
        </h1>

        <p className="mt-2 text-gray-500">
          Đơn hàng của bạn đã được thanh toán thành công.
        </p>

        <div className="mt-6 rounded-xl bg-gray-50 p-4 text-left">
          <div className="flex justify-between">
            <span className="text-gray-500">Mã đơn hàng</span>

            <span className="font-semibold text-gray-900">{orderCode}</span>
          </div>

          {totalPrice !== undefined && (
            <div className="mt-3 flex justify-between">
              <span className="text-gray-500">Tổng tiền</span>

              <span className="font-semibold text-red-600">
                {totalPrice.toLocaleString("vi-VN")}đ
              </span>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => router.push(`/orders/${orderCode}`)}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800"
          >
            <ShoppingBag size={18} />
            Xem đơn hàng
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex-1 rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Tiếp tục mua hàng
          </button>
        </div>
      </div>
    </div>
  );
}
