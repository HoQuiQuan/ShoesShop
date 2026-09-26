"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import productImgDefault from "../public/default.webp";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  id: number;
  name: string;
  slug: string;
  category?: string;
  image: string;
  price: number;
  oldPrice?: number;
  colors?: string[]; // hex codes for variant swatches, e.g. ["#F4C2C2", "#E9DCC3", "#2596E9", "#111111"]
}

const currency = new Intl.NumberFormat("vi-VN");

export default function ProductCard({
  id,
  name,
  image,
  price,
  oldPrice,
  colors = [],
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeColor, setActiveColor] = useState(0);

  const discount =
    oldPrice && oldPrice > price
      ? Math.round(((oldPrice - price) / oldPrice) * 100)
      : 0;

  const router = useRouter();

  return (
    <div
      className="group w-full max-w-xs overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.18)] motion-reduce:transform-none motion-reduce:transition-none"
      onClick={() => {
        router.push(`product/${id}`);
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-2xl bg-neutral-100">
        {image ? (
          <Image
            src={image || productImgDefault}
            alt={name}
            fill
            sizes="(min-width: 1280px) 20vw, (min-width: 768px) 30vw, 45vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Không có hình ảnh
          </div>
        )}

        {discount > 0 && (
          <span className="absolute left-3 top-3 rounded-full bg-neutral-900 px-2.5 py-1 text-[11px] font-bold tabular-nums text-white">
            -{discount}%
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsWishlisted((v) => !v)}
          aria-pressed={isWishlisted}
          aria-label={isWishlisted ? "Bỏ khỏi yêu thích" : "Thêm vào yêu thích"}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-600 shadow-sm backdrop-blur transition-all duration-200 hover:bg-neutral-900 hover:text-white active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
        >
          <Heart size={15} className={isWishlisted ? "fill-current" : ""} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-3.5">
        <h3 className="truncate text-[13px] font-medium leading-snug text-neutral-800">
          {name}
        </h3>

        <div className="flex items-baseline gap-2">
          <span className="text-base font-bold tabular-nums text-neutral-900">
            {currency.format(price)}đ
          </span>
          {oldPrice && oldPrice > price && (
            <span className="text-xs tabular-nums text-neutral-400 line-through">
              {currency.format(oldPrice)}đ
            </span>
          )}
        </div>

        {colors.length > 0 && (
          <div
            className="mt-0.5 flex items-center gap-2"
            role="radiogroup"
            aria-label="Chọn màu sắc"
          >
            {colors.map((color, index) => (
              <button
                key={color + index}
                type="button"
                role="radio"
                aria-checked={activeColor === index}
                aria-label={`Màu ${index + 1}`}
                onClick={() => setActiveColor(index)}
                className={`h-5 w-5 rounded-full ring-1 ring-inset ring-black/10 transition-transform duration-150 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${
                  activeColor === index
                    ? "ring-2 ring-offset-2 ring-neutral-900"
                    : ""
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
