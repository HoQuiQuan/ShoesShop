"use client";

import { ChevronRight, Package } from "lucide-react";
import Link from "next/link";

import type { Order } from "@/type/order.type";
import OrderItem from "./OrderItem";
import OrderStatusBadge from "./OrderStatusBadge";

interface Props {
  order: Order;
  index: number;
}

function formatPrice(price: number | string) {
  return `${Number(price).toLocaleString("vi-VN")} ₫`;
}

export default function OrderCard({ order, index }: Props) {
  const totalQuantity = order.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <article
      className="
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-sm
        animate-[orderAppear_0.45s_ease-out_forwards]
        transition-all
        duration-300
        hover:shadow-md
      "
      style={{
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* ================= HEADER ================= */}
      <div
        className="
          flex
          flex-col
          gap-3
          border-b
          border-gray-100
          px-4
          py-4
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:px-6
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-gray-100
              text-gray-700
            "
          >
            <Package size={19} />
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
              Mã đơn hàng
            </p>

            <p className="mt-0.5 text-sm font-bold text-gray-900">
              {order.orderCode}
            </p>
          </div>
        </div>

        <OrderStatusBadge status={order.status} />
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="px-4 sm:px-6">
        {order.items.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>

      {/* ================= FOOTER ================= */}
      <div
        className="
          border-t
          border-gray-100
          bg-gray-50/60
          px-4
          py-4
          sm:px-6
        "
      >
        <div
          className="
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          {/* quantity */}
          <p className="text-sm text-gray-500">{totalQuantity} sản phẩm</p>

          {/* total + button */}
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
              sm:justify-end
            "
          >
            <div className="text-right">
              <p className="text-xs text-gray-500">Thành tiền</p>

              <p className="mt-0.5 text-lg font-bold text-gray-900">
                {formatPrice(order.subtotal)}
              </p>
            </div>

            <Link
              href={`/orders/${order.orderCode}`}
              className="
                inline-flex
                h-10
                items-center
                gap-1
                rounded-xl
                border
                border-gray-200
                bg-white
                px-3
                text-sm
                font-semibold
                text-gray-700
                transition-all
                duration-200
                hover:border-gray-900
                hover:text-gray-900
                active:scale-95
              "
            >
              Chi tiết
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
