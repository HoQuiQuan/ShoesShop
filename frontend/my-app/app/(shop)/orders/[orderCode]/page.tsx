"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Copy, CheckCircle2, Star } from "lucide-react";
import { useState } from "react";

import { useOrderDetail } from "@/app/hooks/orders/getDetailOrderUser";

import OrderStatusTimeline from "@/components/orders/orderDetails/OrderStatusTimeline";
import OrderProductList from "@/components/orders/orderDetails/OrderProductList";
import OrderReceiverCard from "@/components/orders/orderDetails/OrderReceiverCard";
import OrderPaymentCard from "@/components/orders/orderDetails/OrderPaymentCard";
import OrderDetailSkeleton from "@/components/orders/orderDetails/OrderDetailSkeleton";
import ProductReviews from "@/components/product/productReview";

const statusLabel: Record<string, string> = {
  PENDING: "Chờ xác nhận",
  CONFIRMED: "Đã xác nhận",
  SHIPPING: "Đang giao hàng",
  DELIVERED: "Đã giao hàng",
  CANCELLED: "Đã hủy",
};

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();

  const orderCode = params.orderCode as string;

  const [copied, setCopied] = useState(false);

  const { data: order, isLoading, isError } = useOrderDetail(orderCode);

  const handleCopyOrderCode = async () => {
    try {
      await navigator.clipboard.writeText(orderCode);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <OrderDetailSkeleton />;
  }

  if (isError || !order) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="animate-in fade-in zoom-in-95 text-center duration-500">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
            <CheckCircle2 size={30} className="text-gray-400" />
          </div>

          <h1 className="mt-5 text-xl font-bold">Không tìm thấy đơn hàng</h1>

          <p className="mt-2 text-sm text-gray-500">
            Đơn hàng không tồn tại hoặc bạn không có quyền xem đơn hàng này.
          </p>

          <button
            onClick={() => router.push("/orders")}
            className="
              mt-6 rounded-xl bg-gray-900 px-5 py-3
              text-sm font-medium text-white
              transition-all duration-300
              hover:-translate-y-0.5 hover:bg-gray-700
              active:scale-95
            "
          >
            Quay lại đơn hàng
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-10">
        {/* ================= HEADER ================= */}
        <div className="mb-6 animate-in fade-in slide-in-from-top-3 duration-500">
          <button
            onClick={() => router.push("/orders")}
            className="
              group mb-5 flex items-center gap-2
              text-sm text-gray-500
              transition-colors hover:text-gray-900
            "
          >
            <ArrowLeft
              size={18}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>Quay lại đơn hàng</span>
          </button>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Chi tiết đơn hàng
              </p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                  {order.orderCode}
                </h1>

                <button
                  onClick={handleCopyOrderCode}
                  className="
                    flex items-center gap-1.5 rounded-lg
                    border border-gray-200 bg-white
                    px-3 py-1.5 text-xs font-medium
                    text-gray-600
                    transition-all duration-300
                    hover:border-gray-300 hover:bg-gray-100
                    active:scale-95
                  "
                >
                  {copied ? (
                    <>
                      <CheckCircle2 size={14} className="text-green-600" />
                      Đã sao chép
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Sao chép
                    </>
                  )}
                </button>
              </div>
            </div>

            <div
              className="
                w-fit rounded-full border border-gray-200
                bg-white px-4 py-2
                text-sm font-semibold
                shadow-sm
              "
            >
              {statusLabel[order.status] || order.status}
            </div>
          </div>
        </div>

        {/* ================= STATUS ================= */}
        <div className="mb-6">
          <OrderStatusTimeline status={order.status} />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* LEFT */}
          <div className="space-y-6">
            <OrderProductList items={order.items} />

            <OrderReceiverCard
              name={order.receiverName}
              phone={order.receiverPhone}
              address={order.receiverAddress}
            />
          </div>

          {/* RIGHT */}
          <div className="lg:sticky lg:top-6 lg:h-fit">
            <OrderPaymentCard
              subtotal={order.subtotal}
              shippingFee={order.shippingFee}
              discountAmount={order.discountAmount}
              totalPrice={order.totalPrice}
              paymentMethod={order.paymentMethod}
              paymentStatus={order.paymentStatus}
              note={order.note}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
