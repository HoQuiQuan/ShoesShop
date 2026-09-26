"use client";

import { XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  orderCode: string;
}

export default function PaymentFailed({ orderCode }: Props) {
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
          <XCircle size={48} className="text-red-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900">
          Thanh toán chưa thành công
        </h1>

        <p className="mt-2 text-gray-500">
          Giao dịch chưa được xác nhận thành công.
        </p>

        <div className="mt-6 rounded-xl bg-gray-50 p-4">
          <span className="text-sm text-gray-500">Mã đơn hàng</span>

          <p className="mt-1 font-semibold">{orderCode}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            onClick={() => router.push(`/orders/${orderCode}`)}
            className="rounded-xl bg-black px-5 py-3 font-medium text-white hover:bg-gray-800"
          >
            Xem đơn hàng
          </button>

          <button
            onClick={() => router.push("/")}
            className="rounded-xl border border-gray-200 px-5 py-3 font-medium text-gray-700 hover:bg-gray-50"
          >
            Về trang chủ
          </button>
        </div>
      </div>
    </div>
  );
}
