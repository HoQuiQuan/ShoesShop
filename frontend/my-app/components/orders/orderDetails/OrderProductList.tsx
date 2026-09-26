"use client";

import Image from "next/image";
import { Fragment } from "react";
import { ShoppingBag } from "lucide-react";

import type { OrderDetailItem } from "@/type/orderDetail.type";
import ProductReviews from "@/components/product/productReview";

interface Props {
  items: OrderDetailItem[];
}

const formatPrice = (value: string | number) => {
  return Number(value).toLocaleString("vi-VN") + "₫";
};

export default function OrderProductList({ items }: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-5 md:px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <ShoppingBag size={19} />
        </div>

        <div>
          <h2 className="font-bold text-gray-900">Sản phẩm</h2>

          <p className="text-sm text-gray-500">{items.length} sản phẩm</p>
        </div>
      </div>

      {/* Products */}
      <div className="divide-y divide-gray-100">
        {items.map((item, index) => {
          const total = Number(item.price) * item.quantity;

          return (
            <Fragment key={item.id}>
              {/* Product */}
              <div
                className="
                  animate-in
                  fade-in
                  slide-in-from-bottom-2
                  flex
                  gap-4
                  p-5
                  duration-500
                  md:p-6
                "
                style={{
                  animationDelay: `${index * 80}ms`,
                  animationFillMode: "both",
                }}
              >
                {/* Image */}
                <div
                  className="
                    relative
                    h-24
                    w-24
                    shrink-0
                    overflow-hidden
                    rounded-xl
                    bg-gray-100
                    md:h-28
                    md:w-28
                  "
                >
                  <Image
                    src={item.img || "/default.webp"}
                    alt={item.productName}
                    fill
                    sizes="112px"
                    className="
                      object-cover
                      transition-transform
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-2 font-semibold text-gray-900">
                    {item.productName}
                  </h3>

                  {/* Variant */}
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.colorName && (
                      <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                        Màu: {item.colorName}
                      </span>
                    )}

                    {item.sizeValue && (
                      <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-gray-600">
                        Size: {item.sizeValue}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="mt-3 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-sm text-gray-500">
                        {formatPrice(item.price)}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        Số lượng: {item.quantity}
                      </p>
                    </div>

                    <p className="font-bold text-gray-900">
                      {formatPrice(total)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Review */}
              <ProductReviews orderDetailId={item.id} />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
