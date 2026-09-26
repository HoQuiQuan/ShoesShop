"use client";

import { useEffect, useState } from "react";
import { PackageSearch, RefreshCw } from "lucide-react";

import OrderList from "@/components/orders/OrderList";
import OrderSkeleton from "@/components/orders/OrderSkeleton";

import type { Order } from "@/type/order.type";
import { OrderApi } from "@/app/Api/Order.api";

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  console.log(orders);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await OrderApi.findOrderUser();

      setOrders(response.data.data);
    } catch (error) {
      console.error("Fetch orders error:", error);

      setError("Không thể tải danh sách đơn hàng.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  console.log("order", orders);

  return (
    <main className="min-h-screen bg-gray-50">
      <div
        className="
          mx-auto
          w-full
          max-w-5xl
          px-4
          py-8
          sm:px-6
          sm:py-10
          lg:px-8
        "
      >
        {/* ================= PAGE HEADER ================= */}
        <header className="mb-7">
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-black
                text-white
              "
            >
              <PackageSearch size={21} />
            </div>

            <div>
              <h1
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  sm:text-3xl
                "
              >
                Đơn hàng của tôi
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Theo dõi và quản lý các đơn hàng của bạn
              </p>
            </div>
          </div>
        </header>

        {/* ================= ERROR ================= */}
        {error && (
          <div
            className="
              mb-6
              flex
              flex-col
              gap-3
              rounded-2xl
              border
              border-red-200
              bg-red-50
              p-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <p className="text-sm font-semibold text-red-700">
                Có lỗi xảy ra
              </p>

              <p className="mt-1 text-xs text-red-600">{error}</p>
            </div>

            <button
              onClick={fetchOrders}
              className="
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-xl
                bg-white
                px-4
                py-2
                text-sm
                font-semibold
                text-red-600
                shadow-sm
                transition
                hover:bg-red-100
                active:scale-95
              "
            >
              <RefreshCw size={15} />
              Thử lại
            </button>
          </div>
        )}

        {/* ================= CONTENT ================= */}
        {loading ? <OrderSkeleton /> : <OrderList orders={orders} />}
      </div>
    </main>
  );
}
