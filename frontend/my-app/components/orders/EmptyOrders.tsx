"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function EmptyOrders() {
  return (
    <div
      className="
        flex
        min-h-[420px]
        flex-col
        items-center
        justify-center
        rounded-2xl
        border
        border-dashed
        border-gray-300
        bg-white
        px-6
        text-center
        animate-[fadeIn_0.4s_ease-out]
      "
    >
      <div
        className="
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-full
          bg-gray-100
          text-gray-400
        "
      >
        <ShoppingBag size={34} />
      </div>

      <h2 className="mt-5 text-lg font-bold text-gray-900">
        Bạn chưa có đơn hàng
      </h2>

      <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
        Những sản phẩm bạn đặt mua sẽ xuất hiện tại đây. Hãy bắt đầu khám phá
        sản phẩm của chúng tôi.
      </p>

      <Link
        href="/products"
        className="
          mt-6
          rounded-xl
          bg-black
          px-5
          py-2.5
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-gray-800
          active:scale-95
        "
      >
        Mua sắm ngay
      </Link>
    </div>
  );
}
