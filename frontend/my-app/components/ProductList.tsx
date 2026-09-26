"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

export interface Product {
  id: number;
  name: string;
  slug: string;
  category?: string;
  image: string;
  price: number;
  oldPrice?: number;
  colors?: string[];
}

interface ProductListProps {
  title?: string;
  products: Product[];
}

export default function ProductList({ title, products }: ProductListProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = scrollerRef.current;
    if (!el) return;

    const handleResize = () => updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", handleResize);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", handleResize);
    };
  }, [products]);

  const scrollByDirection = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9;
    el.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full">
      {title && (
        <h2 className="mb-4 text-lg font-semibold text-neutral-900 sm:text-xl">
          {title}
        </h2>
      )}

      <div className="group/list relative">
        {/* Left arrow */}
        <button
          type="button"
          onClick={() => scrollByDirection("left")}
          aria-label="Xem sản phẩm trước"
          disabled={!canScrollLeft}
          className={`absolute left-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-md transition-all duration-200 sm:flex ${
            canScrollLeft
              ? "opacity-0 group-hover/list:opacity-100 hover:bg-neutral-900 hover:text-white"
              : "pointer-events-none opacity-0"
          } focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900`}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => scrollByDirection("right")}
          aria-label="Xem sản phẩm tiếp theo"
          disabled={!canScrollRight}
          className={`absolute right-1 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-md transition-all duration-200 sm:flex ${
            canScrollRight
              ? "opacity-0 group-hover/list:opacity-100 hover:bg-neutral-900 hover:text-white"
              : "pointer-events-none opacity-0"
          } focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900`}
        >
          <ChevronRight size={20} />
        </button>

        {/* Left/right fade so cards don't look cut off */}
        <div
          className={`pointer-events-none absolute left-0 top-0 z-[5] h-full w-8 bg-gradient-to-r from-white to-transparent transition-opacity duration-200 sm:w-14 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`pointer-events-none absolute right-0 top-0 z-[5] h-full w-8 bg-gradient-to-l from-white to-transparent transition-opacity duration-200 sm:w-14 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Scroller */}
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[62%] flex-none snap-start sm:w-[38%] md:w-[29%] lg:w-[23%] xl:w-[19%]"
              // onClick={() => {
              //   router.push(`product/${product.id}`);
              // }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
