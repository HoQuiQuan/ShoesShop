"use client";

import Link from "next/link";
import { ArrowUpRight, RefreshCw, Tags } from "lucide-react";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

// const categories = [
//   {
//     name: "Giày thể thao",
//     subtitle: "Năng động mỗi ngày",
//     href: "/product?category=sport",
//     image: "/categories/sport.jpg",
//     number: "01",
//   },
//   {
//     name: "Giày chạy bộ",
//     subtitle: "Bứt phá giới hạn",
//     href: "/product?category=running",
//     image: "/categories/running.jpg",
//     number: "02",
//   },
//   {
//     name: "Giày thời trang",
//     subtitle: "Phong cách riêng",
//     href: "/product?category=fashion",
//     image: "/categories/fashion.jpg",
//     number: "03",
//   },
// ];

type Category = {
  id: number;
  name: string;
  slug: string;
  status?: "ACTIVE" | "INACTIVE";
  image?: string | null;
  description?: string | null;
};
type CategoryApiResponse = {
  success: boolean;
  data: Category[] | { items: Category[] };
};
async function getCategories(): Promise<Category[]> {
  const response = await api.get<CategoryApiResponse>("/category");
  const result = response.data.data;
  const categories = Array.isArray(result) ? result : result.items;
  return categories.filter((category) => category.status !== "INACTIVE");
}

export default function CategorySection() {
  const {
    data: categories = [],
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["categories", "home"],
    queryFn: getCategories,
    staleTime: 5 * 60 * 1000,
    retry: 1,
  });
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
            Find your style
          </p>

          <h2 className="text-2xl font-black tracking-tight sm:text-4xl">
            Khám phá danh mục
          </h2>

          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            Tìm đôi giày phù hợp với phong cách của bạn.
          </p>
        </div>

        <Link
          href="/product"
          className="hidden items-center gap-2 text-sm font-semibold transition hover:text-orange-600 sm:flex"
        >
          Xem tất cả
          <ArrowUpRight size={18} />
        </Link>
      </div>
      {/* Loading skeleton */}{" "}
      {isLoading && (
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {" "}
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="relative min-h-[230px] animate-pulse overflow-hidden rounded-2xl bg-gray-100 sm:min-h-[340px]"
            >
              {" "}
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-4 sm:p-6">
                {" "}
                <div className="h-3 w-20 rounded bg-gray-200" />{" "}
                <div className="h-6 w-3/4 rounded bg-gray-200" />{" "}
                <div className="h-3 w-1/2 rounded bg-gray-200" />{" "}
              </div>{" "}
            </div>
          ))}{" "}
        </div>
      )}{" "}
      {/* Error */}{" "}
      {isError && !isLoading && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 px-5 py-12 text-center">
          {" "}
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50 text-orange-500">
            {" "}
            <Tags size={25} />{" "}
          </div>{" "}
          <h3 className="font-bold text-gray-900">Không thể tải danh mục</h3>{" "}
          <p className="mt-2 text-sm text-gray-500">
            {" "}
            Đã có lỗi xảy ra. Vui lòng thử lại.{" "}
          </p>{" "}
          <button
            onClick={() => refetch()}
            disabled={isFetching}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600 disabled:opacity-50"
          >
            {" "}
            <RefreshCw
              size={16}
              className={isFetching ? "animate-spin" : ""}
            />{" "}
            Thử lại{" "}
          </button>{" "}
        </div>
      )}{" "}
      {/* Empty */}{" "}
      {!isLoading && !isError && categories.length === 0 && (
        <div className="rounded-2xl bg-gray-50 px-5 py-12 text-center">
          {" "}
          <Tags size={30} className="mx-auto text-gray-400" />{" "}
          <p className="mt-3 font-semibold text-gray-800">
            {" "}
            Chưa có danh mục sản phẩm{" "}
          </p>{" "}
          <p className="mt-1 text-sm text-gray-500">
            {" "}
            Các danh mục sẽ xuất hiện tại đây.{" "}
          </p>{" "}
        </div>
      )}
      {!isLoading && !isError && categories.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              href={category.slug}
              style={{ animationDelay: `${index * 120}ms` }}
              className="group relative isolate min-h-[280px] overflow-hidden rounded-2xl bg-gray-100 animate-[fadeUp_.7s_ease_both] sm:min-h-[360px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{
                  backgroundImage: `url('${category.image}')`,
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-7">
                <div>
                  <p className="mb-2 text-xs font-medium tracking-widest text-white/70">
                    CATEGORY {category.id}
                  </p>

                  <h3 className="text-xl font-bold sm:text-2xl">
                    {category.name}
                  </h3>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:-translate-y-1 group-hover:bg-orange-500 group-hover:text-white">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
