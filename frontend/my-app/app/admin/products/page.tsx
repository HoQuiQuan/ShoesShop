"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
  Eye,
  Package,
  Plus,
  RefreshCw,
  Search,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

type ProductStatus = "ACTIVE" | "DRAFT" | "INACTIVE";

interface Product {
  id: number;
  name: string;
  slug: string;
  category?: {
    id: number;
    name: string;
  };
  image?: string | null;
  price?: number | null;
  status: ProductStatus;
  createdAt: string;

  productDetails?: {
    id: number;
    price: number;
    status: "ACTIVE" | "OUT_OF_STOCK" | "HIDDEN";

    stock?: {
      quantity: number;
      reserved: number;
    };
  }[];
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const ITEMS_PER_PAGE = 10;

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
};

/* =====================================================
   STATUS CONFIG
===================================================== */

const productStatusConfig: Record<
  ProductStatus,
  {
    label: string;
    className: string;
    dotClass: string;
  }
> = {
  ACTIVE: {
    label: "Đang bán",
    className: "border-green-200 bg-green-50 text-green-700",
    dotClass: "bg-green-500",
  },

  DRAFT: {
    label: "Bản nháp",
    className: "border-yellow-200 bg-yellow-50 text-yellow-700",
    dotClass: "bg-yellow-500",
  },

  INACTIVE: {
    label: "Ngừng bán",
    className: "border-gray-200 bg-gray-50 text-gray-600",
    dotClass: "bg-gray-400",
  },
};

/* =====================================================
   STATUS BADGE
===================================================== */

function ProductStatusBadge({ status }: { status: ProductStatus }) {
  const config = productStatusConfig[status];

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        whitespace-nowrap
        rounded-full
        border
        px-2.5
        py-1
        text-xs
        font-medium
        ${config.className}
      `}
    >
      <span
        className={`
          h-1.5
          w-1.5
          rounded-full
          ${config.dotClass}
        `}
      />

      {config.label}
    </span>
  );
}

/* =====================================================
   PRODUCT SKELETON
===================================================== */

function ProductSkeleton() {
  return (
    <div className="divide-y divide-gray-100">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="
            flex
            animate-pulse
            items-center
            gap-4
            p-4
            sm:p-5
          "
        >
          <div className="h-14 w-14 shrink-0 rounded-xl bg-gray-200" />

          <div className="min-w-0 flex-1">
            <div className="h-4 w-2/3 rounded bg-gray-200" />
            <div className="mt-2 h-3 w-1/3 rounded bg-gray-100" />
          </div>

          <div className="hidden h-4 w-24 rounded bg-gray-200 md:block" />

          <div className="hidden h-4 w-28 rounded bg-gray-200 sm:block" />

          <div className="h-8 w-8 rounded-lg bg-gray-200" />
        </div>
      ))}
    </div>
  );
}

/* =====================================================
   PRODUCT CARD MOBILE
===================================================== */

function ProductMobileCard({ product }: { product: Product }) {
  const totalStock =
    product.productDetails?.reduce((total, detail) => {
      const quantity = detail.stock?.quantity ?? 0;
      const reserved = detail.stock?.reserved ?? 0;

      return total + Math.max(quantity - reserved, 0);
    }, 0) ?? 0;

  return (
    <div
      className="
        group
        p-4
        transition
        duration-200
        hover:bg-gray-50
        sm:p-5
      "
    >
      <div className="flex gap-3">
        {/* IMAGE */}

        <div
          className="
            relative
            h-20
            w-20
            shrink-0
            overflow-hidden
            rounded-xl
            bg-gray-100
          "
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="
                h-full
                w-full
                object-cover
                transition
                duration-300
                group-hover:scale-105
              "
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Package size={28} className="text-gray-300" />
            </div>
          )}
        </div>

        {/* CONTENT */}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3
                className="
                  line-clamp-2
                  text-sm
                  font-semibold
                  text-gray-900
                "
              >
                {product.name}
              </h3>

              <p className="mt-1 truncate text-xs text-gray-400">
                #{product.id} · {product.slug}
              </p>
            </div>

            <ProductStatusBadge status={product.status} />
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
            <span>
              Danh mục:{" "}
              <span className="font-medium text-gray-700">
                {product.category?.name ?? "Chưa phân loại"}
              </span>
            </span>

            <span>
              Tồn kho:{" "}
              <span
                className={
                  totalStock <= 0
                    ? "font-semibold text-red-500"
                    : "font-medium text-gray-700"
                }
              >
                {totalStock}
              </span>
            </span>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="font-semibold text-gray-900">
              {product.price != null
                ? formatCurrency(Number(product.price))
                : "Liên hệ"}
            </span>

            <Link
              href={`/admin/products/${product.id}`}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                bg-black
                px-3
                py-2
                text-xs
                font-medium
                text-white
                transition
                hover:bg-gray-800
              "
            >
              Chi tiết
              <Eye size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   MAIN
===================================================== */

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<"ALL" | ProductStatus>("ALL");

  const [page, setPage] = useState(1);

  /* =====================================================
     FETCH PRODUCTS
  ===================================================== */

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/product/ADMIN`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Không thể lấy danh sách sản phẩm");
      }

      const data = await response.json();

      setProducts(data.data ?? data ?? []);
    } catch (error) {
      console.error("Fetch admin products error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  /* =====================================================
     FILTER
  ===================================================== */

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchSearch =
        !keyword ||
        product.name.toLowerCase().includes(keyword) ||
        product.slug.toLowerCase().includes(keyword) ||
        product.category?.name?.toLowerCase().includes(keyword);

      const matchStatus = status === "ALL" || product.status === status;

      return matchSearch && matchStatus;
    });
  }, [products, search, status]);

  /* =====================================================
     PAGINATION
  ===================================================== */

  const totalPages = Math.max(
    Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
    1,
  );

  const currentPage = Math.min(page, totalPages);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    setPage(1);
  }, [search, status]);

  /* =====================================================
     STATISTICS
  ===================================================== */

  const statistics = useMemo(() => {
    return {
      total: products.length,

      active: products.filter((item) => item.status === "ACTIVE").length,

      draft: products.filter((item) => item.status === "DRAFT").length,

      inactive: products.filter((item) => item.status === "INACTIVE").length,
    };
  }, [products]);

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        {/* =================================================
          HEADER
      ================================================= */}

        <div
          className="
          mb-6
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
        >
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs text-gray-400">
              <Link href="/admin" className="transition hover:text-black">
                Admin
              </Link>

              <span>/</span>

              <span className="text-gray-700">Sản phẩm</span>
            </div>

            <h1
              className="
              text-2xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-3xl
            "
            >
              Quản lý sản phẩm
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Quản lý sản phẩm, tồn kho và trạng thái kinh doanh.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={fetchProducts}
              disabled={loading}
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-3
              py-2.5
              text-sm
              font-medium
              text-gray-700
              shadow-sm
              transition
              hover:bg-gray-50
              disabled:cursor-not-allowed
              disabled:opacity-50
              sm:px-4
            "
            >
              <RefreshCw size={16} className={loading ? "animate-spin" : ""} />

              <span className="hidden sm:inline">Làm mới</span>
            </button>

            <Link
              href="/admin/products/create"
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-black
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              duration-200
              hover:-translate-y-0.5
              hover:bg-gray-800
              hover:shadow-md
            "
            >
              <Plus size={17} />

              <span>Thêm sản phẩm</span>
            </Link>
          </div>
        </div>

        {/* =================================================
          STATISTICS
      ================================================= */}

        <div
          className="
          mb-6
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-4
        "
        >
          <Statistic
            title="Tổng sản phẩm"
            value={statistics.total}
            icon={<Package size={18} />}
          />

          <Statistic
            title="Đang bán"
            value={statistics.active}
            icon={<span>✓</span>}
          />

          <Statistic
            title="Bản nháp"
            value={statistics.draft}
            icon={<span>✎</span>}
          />

          <Statistic
            title="Ngừng bán"
            value={statistics.inactive}
            icon={<span>−</span>}
          />
        </div>

        {/* =================================================
          FILTER
      ================================================= */}

        <section className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row">
            {/* SEARCH */}

            <div className="relative flex-1">
              <Search
                size={18}
                className="
                pointer-events-none
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Tìm sản phẩm, slug, danh mục..."
                className="
                w-full
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                py-2.5
                pl-10
                pr-4
                text-sm
                text-gray-900
                outline-none
                transition
                focus:border-black
                focus:bg-white
                focus:ring-2
                focus:ring-gray-100
              "
              />
            </div>

            {/* STATUS */}

            <div className="flex gap-2">
              <div className="relative flex-1 lg:flex-none">
                <SlidersHorizontal
                  size={16}
                  className="
                  pointer-events-none
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
                />

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value as "ALL" | ProductStatus)
                  }
                  className="
                  w-full
                  appearance-none
                  rounded-xl
                  border
                  border-gray-200
                  bg-gray-50
                  py-2.5
                  pl-9
                  pr-8
                  text-sm
                  outline-none
                  transition
                  focus:border-black
                  focus:bg-white
                "
                >
                  <option value="ALL">Tất cả trạng thái</option>

                  <option value="ACTIVE">Đang bán</option>

                  <option value="DRAFT">Bản nháp</option>

                  <option value="INACTIVE">Ngừng bán</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
          PRODUCT LIST
      ================================================= */}

        <section
          className="
          overflow-hidden
          rounded-2xl
          border
          border-gray-200
          bg-white
          shadow-sm
        "
        >
          {loading ? (
            <ProductSkeleton />
          ) : filteredProducts.length === 0 ? (
            <EmptyProducts />
          ) : (
            <>
              {/* ================= DESKTOP ================= */}

              <div className="hidden overflow-x-auto lg:block">
                <table className="w-full min-w-[1000px]">
                  <thead>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Sản phẩm
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Danh mục
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Trạng thái
                      </th>

                      <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Ngày tạo
                      </th>

                      <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                        Thao tác
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {paginatedProducts.map((product, index) => {
                      const quantityStock =
                        product.productDetails?.reduce((total, detail) => {
                          const quantity = detail.stock?.quantity ?? 0;

                          return quantity;
                        }, 0) ?? 0;
                      const reserveStock =
                        product.productDetails?.reduce((total, detail) => {
                          const reserve = detail.stock?.reserved ?? 0;

                          return reserve;
                        }, 0) ?? 0;

                      return (
                        <tr
                          key={product.id}
                          className="
                            animate-[fadeIn_0.3s_ease-out]
                            transition
                            duration-200
                            hover:bg-gray-50
                          "
                          style={{
                            animationDelay: `${index * 40}ms`,
                          }}
                        >
                          {/* PRODUCT */}
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                                {product.image ? (
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="
                                      h-full
                                      w-full
                                      object-cover
                                      transition
                                      duration-300
                                      hover:scale-105
                                    "
                                  />
                                ) : (
                                  <div className="flex h-full w-full items-center justify-center">
                                    <Package
                                      size={22}
                                      className="text-gray-300"
                                    />
                                  </div>
                                )}
                              </div>

                              <div className="min-w-0">
                                <p className="max-w-[260px] truncate font-semibold text-gray-900">
                                  {product.name}
                                </p>

                                <p className="mt-1 max-w-[260px] truncate text-xs text-gray-400">
                                  #{product.id} · {product.slug}
                                </p>
                              </div>
                            </div>
                          </td>
                          {/* CATEGORY */}
                          <td className="px-5 py-4">
                            <span className="text-sm text-gray-600">
                              {product.category?.name ?? "Chưa phân loại"}
                            </span>
                          </td>

                          {/* STATUS */}
                          <td className="px-5 py-4">
                            <ProductStatusBadge status={product.status} />
                          </td>
                          {/* DATE */}
                          <td className="px-5 py-4 text-sm text-gray-500">
                            {formatDate(product.createdAt)}
                          </td>
                          {/* ACTION */}
                          <td className="px-5 py-4 text-right">
                            <Link
                              href={`/admin/products/${product.id}`}
                              className="
                                inline-flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-lg
                                text-gray-500
                                transition
                                hover:bg-gray-100
                                hover:text-black
                              "
                              title="Xem chi tiết"
                            >
                              <Eye size={18} />
                            </Link>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* ================= MOBILE ================= */}

              <div className="divide-y divide-gray-100 lg:hidden">
                {paginatedProducts.map((product) => (
                  <ProductMobileCard key={product.id} product={product} />
                ))}
              </div>

              {/* ================= PAGINATION ================= */}

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredProducts.length}
                onPrevious={() => setPage((prev) => Math.max(prev - 1, 1))}
                onNext={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              />
            </>
          )}
        </section>
      </main>
    </ProtectedRoute>
  );
}

/* =====================================================
   STATISTIC
===================================================== */

function Statistic({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
        transition
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
        sm:p-5
      "
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-gray-500 sm:text-sm">{title}</p>

        <div
          className="
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-lg
            bg-gray-100
            text-gray-500
            transition
            group-hover:bg-black
            group-hover:text-white
          "
        >
          {icon}
        </div>
      </div>

      <p className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
        {value}
      </p>
    </div>
  );
}

/* =====================================================
   EMPTY
===================================================== */

function EmptyProducts() {
  return (
    <div className="flex min-h-[320px] flex-col items-center justify-center px-4 text-center">
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-gray-100
        "
      >
        <Package size={30} className="text-gray-300" />
      </div>

      <h3 className="mt-4 font-semibold text-gray-900">
        Không tìm thấy sản phẩm
      </h3>

      <p className="mt-1 max-w-sm text-sm text-gray-500">
        Không có sản phẩm nào phù hợp với bộ lọc hiện tại.
      </p>
    </div>
  );
}

/* =====================================================
   PAGINATION
===================================================== */

function Pagination({
  currentPage,
  totalPages,
  totalItems,
  onPrevious,
  onNext,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPrevious: () => void;
  onNext: () => void;
}) {
  return (
    <ProtectedRoute>
      <div
        className="
        flex
        flex-col
        gap-3
        border-t
        border-gray-100
        px-4
        py-4
        sm:flex-row
        sm:items-center
        sm:justify-between
        sm:px-5
      "
      >
        <p className="text-xs text-gray-500 sm:text-sm">
          Tổng <span className="font-medium text-gray-900">{totalItems}</span>{" "}
          sản phẩm
        </p>

        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <button
            type="button"
            disabled={currentPage <= 1}
            onClick={onPrevious}
            className="
            inline-flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-gray-200
            bg-white
            text-gray-600
            transition
            hover:bg-gray-50
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
          >
            <ChevronLeft size={17} />
          </button>

          <span className="min-w-[90px] text-center text-sm text-gray-600">
            Trang{" "}
            <span className="font-semibold text-gray-900">{currentPage}</span> /{" "}
            {totalPages}
          </span>

          <button
            type="button"
            disabled={currentPage >= totalPages}
            onClick={onNext}
            className="
            inline-flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-gray-200
            bg-white
            text-gray-600
            transition
            hover:bg-gray-50
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>
    </ProtectedRoute>
  );
}
