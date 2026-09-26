"use client";

import PaymentFailed from "./PaymentFailed";
import PaymentPending from "./PaymentPending";
import PaymentSuccess from "./PaymentSuccess";
import { usePaymentOrder } from "@/app/hooks/orders/usePaymentOrder";

interface Props {
  orderCode: string;
}

export default function PaymentResult({ orderCode }: Props) {
  const { data: order, isLoading, isError } = usePaymentOrder(orderCode);

  if (isLoading) {
    return <PaymentPending />;
  }

  if (isError || !order) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Không tìm thấy đơn hàng</h1>

          <p className="mt-2 text-gray-500">Vui lòng thử lại sau.</p>
        </div>
      </div>
    );
  }

  if (order.paymentStatus === "PAID") {
    return (
      <PaymentSuccess
        orderCode={order.orderCode}
        totalPrice={Number(order.totalPrice)}
      />
    );
  }

  return <PaymentFailed orderCode={order.orderCode} />;
}
