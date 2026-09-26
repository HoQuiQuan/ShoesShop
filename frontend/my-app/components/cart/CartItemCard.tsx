"use client";

import { Check, Minus, Plus, Trash2 } from "lucide-react";

import type { CartItem } from "@/type/cart.type";

interface Props {
  item: CartItem;
  index: number;
  selected: boolean;
  quantity: number;

  onToggle: () => void;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

const formatPrice = (price: string | number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(Number(price));
};

export default function CartItemCard({
  item,
  selected,
  quantity,
  onToggle,
  onIncrease,
  onDecrease,
  onRemove,
}: Props) {
  const product = item.productDetail.product;
  const color = item.productDetail.color;
  const size = item.productDetail.size;

  return (
    <article
      className={`rounded-2xl border bg-white p-4 transition sm:p-5 ${
        selected ? "border-neutral-300" : "border-neutral-200 opacity-80"
      }`}
    >
      <div className="flex gap-3 sm:gap-5">
        {/* Checkbox */}
        <button
          onClick={onToggle}
          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
            selected ? "border-black bg-black text-white" : "border-neutral-300"
          }`}
        >
          {selected && <Check size={13} strokeWidth={3} />}
        </button>

        {/* Product image */}
        <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-neutral-100 sm:h-32 sm:w-32">
          {product.image ? (
            <img
              src={product?.image.url}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-neutral-400">
              No image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="min-w-0 flex-1">
          {/* Top */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h2 className="line-clamp-2 text-sm font-semibold leading-5 text-neutral-900 sm:text-base sm:leading-6">
                {product.name}
              </h2>

              {/* Variant */}
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-500">
                <span className="flex items-center gap-1.5">
                  Màu:
                  <span
                    className="h-3 w-3 rounded-full border border-neutral-300"
                    style={{
                      backgroundColor: color.colorCode,
                    }}
                  />
                  <span className="text-neutral-700">{color.name}</span>
                </span>

                <span>
                  Size:{" "}
                  <strong className="font-medium text-neutral-700">
                    {size.value}
                  </strong>
                </span>
              </div>
            </div>

            {/* Delete */}
            <button
              onClick={onRemove}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-neutral-400 transition hover:bg-red-50 hover:text-red-500"
              aria-label="Xóa sản phẩm"
            >
              <Trash2 size={17} />
            </button>
          </div>

          {/* Bottom */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            {/* Quantity */}
            <div className="flex h-9 items-center rounded-lg border border-neutral-200">
              <button
                onClick={onDecrease}
                disabled={quantity <= 1}
                className="flex h-full w-9 items-center justify-center text-neutral-500 transition hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <Minus size={14} />
              </button>

              <span className="flex min-w-8 justify-center text-sm font-medium text-neutral-900">
                {quantity}
              </span>

              <button
                onClick={onIncrease}
                className="flex h-full w-9 items-center justify-center text-neutral-500 transition hover:bg-neutral-50"
              >
                <Plus size={14} />
              </button>
            </div>

            {/* Price */}
            <div className="text-right">
              <p className="text-base font-bold text-neutral-950 sm:text-lg">
                {formatPrice(Number(item.productDetail.price) * quantity)}
              </p>

              <p className="text-xs text-neutral-400">
                {formatPrice(item.productDetail.price)} / sản phẩm
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
