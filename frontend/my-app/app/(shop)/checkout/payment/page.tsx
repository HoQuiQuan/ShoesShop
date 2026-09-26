"use client";

import { useSearchParams } from "next/navigation";
import PaymentResult from "@/components/payment/PaymentResult";

export default function PaymentResultPage() {
  const searchParams = useSearchParams();

  const orderCode = searchParams.get("orderCode");

  if (!orderCode) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Không tìm thấy mã đơn hàng</h1>

          <p className="mt-2 text-gray-500">Không thể xác định giao dịch.</p>
        </div>
      </div>
    );
  }

  return <PaymentResult orderCode={orderCode} />;
}
