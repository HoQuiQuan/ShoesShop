"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";

import type { OrderItem as OrderItemType } from "@/type/order.type";

interface Props {
  item: OrderItemType;
}

function formatPrice(price: number | string) {
  return `${Number(price).toLocaleString("vi-VN")} ₫`;
}

export default function OrderItem({ item }: Props) {
  const product = item.productDetail.product;
  const color = item.productDetail.color;
  const size = item.productDetail.size;
  const price = item.price;

  return (
    <div
      className="
        group
        flex
        gap-3
        border-b
        border-gray-100
        py-4
        last:border-b-0
        sm:gap-4
      "
    >
      {/* IMAGE */}
      <div
        className="
          relative
          h-[76px]
          w-[76px]
          shrink-0
          overflow-hidden
          rounded-xl
          bg-gray-100
          sm:h-[92px]
          sm:w-[92px]
        "
      >
        {item.img ? (
          <Image
            src={item.img}
            alt={product.name}
            fill
            sizes="92px"
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            <ImageOff size={24} />
          </div>
        )}
      </div>

      {/* INFO */}
      <div className="min-w-0 flex-1">
        <h3
          className="
            line-clamp-2
            text-sm
            font-semibold
            leading-5
            text-gray-900
            sm:text-[15px]
          "
        >
          {product.name}
        </h3>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
          <span>
            Màu: <span className="font-medium text-gray-700">{color.name}</span>
          </span>

          <span className="text-gray-300">|</span>

          <span>
            Size:{" "}
            <span className="font-medium text-gray-700">{size.value}</span>
          </span>
        </div>

        <div className="mt-1 text-xs text-gray-500">
          Số lượng:{" "}
          <span className="font-medium text-gray-700">x{item.quantity}</span>
        </div>
      </div>

      {/* PRICE */}
      <div className="shrink-0 text-right">
        <p className="text-sm font-semibold text-gray-900">
          {formatPrice(price)}
        </p>

        <p className="mt-1 text-xs text-gray-400">/ sản phẩm</p>
      </div>
    </div>
  );
}
