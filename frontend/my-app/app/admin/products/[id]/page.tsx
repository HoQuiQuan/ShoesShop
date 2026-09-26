"use client";

import { use, useMemo, useState } from "react";
import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Loader2,
  Package,
  Search,
  Save,
  X,
  Star,
  ShoppingBag,
  Boxes,
  Image as ImageIcon,
  RefreshCw,
  List,
} from "lucide-react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import ProductApi from "@/app/Api/Product.api";
import { api } from "@/lib/axios";

// ========================================
// ALERT
// ========================================
// Sửa đường dẫn này nếu folder alert của bạn khác
import AlertContainer from "@/components/alert/AlertContainer";
import type { AlertData } from "@/components/alert/alert";

/* =========================
   TYPES
========================= */

interface ProductVariant {
  id: number;
  price: number;
  status: "ACTIVE" | "HIDDEN";

  color: {
    name: string;
    colorCode: string;
  } | null;

  size: {
    value: string | number;
  } | null;

  stock: {
    quantity: number;
    reserved: number;
  } | null;
}

interface ProductSpec {
  label: string;
  value: string;
}

interface ProductImage {
  url: string;

  color: {
    name: string;
    colorCode: string;
  } | null;
}

interface Product {
  name: string;
  description: string | null;
  slug: string;
  specs: ProductSpec[];
  rate: number;
  countRate: number;
  purchases: number;
  variants: ProductVariant[];
  images: ProductImage[];
}

interface PageProps {
  params: Promise<{ id: string }>;
}

interface EditForm {
  price: string;
}

interface EditFormActive {
  status: "ACTIVE" | "HIDDEN";
}

/* =========================
   HELPERS
========================= */

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);

const formatNumber = (value: number) =>
  new Intl.NumberFormat("vi-VN").format(value);

function getAvailableStock(variant: ProductVariant) {
  const quantity = variant.stock?.quantity ?? 0;
  const reserved = variant.stock?.reserved ?? 0;

  return Math.max(quantity - reserved, 0);
}

function getColorLabel(variant: ProductVariant) {
  return variant.color?.name ?? "Chưa phân loại màu";
}

function getColorKey(variant: ProductVariant) {
  return variant.color?.name ?? "no-color";
}

/* =========================
   PAGE CONTENT
========================= */

function ProductDetailPageContent({ productId }: { productId: number }) {
  const queryClient = useQueryClient();

  /* =========================
     STATES
  ========================= */

  const [keyword, setKeyword] = useState("");

  // ========================================
  // ALERT STATE
  // ========================================

  const [alerts, setAlerts] = useState<AlertData[]>([]);

  // ========================================
  // SHOW ALERT
  // ========================================

  function showAlert(
    type: AlertData["type"],
    message: string,
    title?: string,
    duration = 4000,
  ) {
    const id = crypto.randomUUID();

    setAlerts((previous) => [
      ...previous,
      {
        id,
        type,
        message,
        title,
        duration,
      },
    ]);
  }

  // ========================================
  // CLOSE ALERT
  // ========================================

  function handleCloseAlert(id: string) {
    setAlerts((previous) =>
      previous.filter((alertItem) => alertItem.id !== id),
    );
  }

  // Edit price
  const [editingVariant, setEditingVariant] = useState<ProductVariant | null>(
    null,
  );

  // Edit status
  const [editingVariantActive, setEditingVariantActive] =
    useState<ProductVariant | null>(null);

  const [editForm, setEditForm] = useState<EditForm>({
    price: "",
  });

  const [editFormActivate, setEditFormActivate] = useState<EditFormActive>({
    status: "ACTIVE",
  });

  /* =========================
     GET PRODUCT DETAIL
  ========================= */

  const productQuery = useQuery({
    queryKey: ["product", productId],

    queryFn: async () => {
      const response = await ProductApi.getProductAdmin(productId);

      const product = response.data.data;

      console.log("product", product);

      return product as Product;
    },

    enabled: productId > 0,
  });

  /* =========================
     UPDATE PRICE
  ========================= */

  const updateMutation = useMutation({
    mutationFn: async ({ id, price }: { id: number; price: number }) => {
      const response = await api.patch(`/product/productDetail/${id}`, {
        price,
      });

      return response.data;
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["product", productId],
      });

      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      setEditingVariant(null);
    },
  });

  /* =========================
     UPDATE STATUS
  ========================= */

  const updateStatusMutation = useMutation({
    mutationFn: async ({
      id,
      status,
    }: {
      id: number;
      status: "ACTIVE" | "HIDDEN";
    }) => {
      const response = await api.patch(`/product/productDetail/${id}`, {
        status,
      });

      return response.data;
    },

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["product", productId],
      });

      await queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      setEditingVariantActive(null);
    },
  });

  /* =========================
     PRODUCT
  ========================= */

  const product = productQuery.data;

  /* =========================
     FILTER VARIANTS
  ========================= */

  const variants = useMemo(() => {
    return (product?.variants ?? []).filter((variant) => {
      const normalizedKeyword = keyword.trim().toLowerCase();

      if (!normalizedKeyword) {
        return true;
      }

      const size = String(variant.size?.value ?? "").toLowerCase();

      const color = variant.color?.name?.toLowerCase() ?? "";

      return (
        size.includes(normalizedKeyword) || color.includes(normalizedKeyword)
      );
    });
  }, [product?.variants, keyword]);

  /* =========================
     STATISTICS
  ========================= */

  console.log("product2", product);

  const totalStock =
    product?.variants.reduce(
      (sum, variant) => sum + getAvailableStock(variant),
      0,
    ) ?? 0;

  const totalReserved =
    product?.variants.reduce(
      (sum, variant) => sum + (variant.stock?.reserved ?? 0),
      0,
    ) ?? 0;

  const colorCount = new Set(product?.variants.map(getColorKey) ?? []).size;

  /* =========================
     GROUP VARIANTS BY COLOR
  ========================= */

  const groupedVariants = useMemo(() => {
    if (!product?.variants) {
      return {};
    }

    return product.variants.reduce<Record<string, ProductVariant[]>>(
      (groups, variant) => {
        const key = getColorKey(variant);

        if (!groups[key]) {
          groups[key] = [];
        }

        groups[key].push(variant);

        return groups;
      },
      {},
    );
  }, [product]);

  /* =========================
     OPEN EDIT PRICE
  ========================= */

  function openEdit(variant: ProductVariant) {
    setEditingVariant(variant);

    setEditForm({
      price: String(variant.price),
    });
  }

  /* =========================
     OPEN EDIT STATUS
  ========================= */

  function openEditActive(variant: ProductVariant) {
    setEditingVariantActive(variant);

    setEditFormActivate({
      status: variant.status,
    });
  }

  /* =========================
     SAVE PRICE
  ========================= */

  async function handleSave() {
    if (!editingVariant) {
      return;
    }

    const price = Number(editForm.price);

    /* =========================
       VALIDATE
    ========================= */

    if (editForm.price.trim() === "" || !Number.isFinite(price) || price < 0) {
      showAlert(
        "warning",
        "Vui lòng nhập giá bán hợp lệ.",
        "Dữ liệu không hợp lệ",
      );

      return;
    }

    try {
      await updateMutation.mutateAsync({
        id: editingVariant.id,
        price,
      });

      /* =========================
         SUCCESS ALERT
      ========================= */

      showAlert(
        "success",
        "Giá của biến thể đã được cập nhật thành công.",
        "Cập nhật thành công",
      );
    } catch (error: any) {
      /* =========================
         ERROR ALERT
      ========================= */

      const message =
        error?.response?.data?.message ?? "Không thể cập nhật giá biến thể.";

      showAlert(
        "error",
        Array.isArray(message) ? message.join(", ") : message,
        "Cập nhật thất bại",
      );
    }
  }

  /* =========================
     SAVE STATUS
  ========================= */

  async function handleSaveStatus() {
    if (!editingVariantActive) {
      return;
    }

    try {
      await updateStatusMutation.mutateAsync({
        id: editingVariantActive.id,
        status: editFormActivate.status,
      });

      /* =========================
         SUCCESS ALERT
      ========================= */

      showAlert(
        "success",
        "Trạng thái của biến thể đã được cập nhật thành công.",
        "Cập nhật thành công",
      );
    } catch (error: any) {
      /* =========================
         ERROR ALERT
      ========================= */

      const message =
        error?.response?.data?.message ??
        "Không thể cập nhật trạng thái biến thể.";

      showAlert(
        "error",
        Array.isArray(message) ? message.join(", ") : message,
        "Cập nhật thất bại",
      );
    }
  }

  /* =========================
     LOADING
  ========================= */

  if (productQuery.isLoading) {
    return (
      <>
        <AlertContainer alerts={alerts} onClose={handleCloseAlert} />

        <div className="flex min-h-[50vh] items-center justify-center gap-3 text-sm text-gray-500">
          <Loader2 size={20} className="animate-spin" />
          Đang tải thông tin sản phẩm...
        </div>
      </>
    );
  }

  /* =========================
     ERROR
  ========================= */

  if (productQuery.isError || !product) {
    return (
      <>
        <AlertContainer alerts={alerts} onClose={handleCloseAlert} />

        <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <Package size={40} className="mx-auto text-gray-300" />

          <h2 className="mt-4 font-semibold text-gray-900">
            Không tải được sản phẩm
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Vui lòng kiểm tra ID sản phẩm hoặc kết nối API.
          </p>

          <button
            onClick={() => productQuery.refetch()}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            <RefreshCw size={16} />
            Thử lại
          </button>
        </div>
      </>
    );
  }

  /* =========================
     MAIN UI
  ========================= */

  return (
    <>
      {/* ========================================
          CUSTOM ALERT
      ======================================== */}

      <AlertContainer alerts={alerts} onClose={handleCloseAlert} />

      <div className="mx-auto max-w-7xl space-y-6">
        {/* =========================
            HEADER
        ========================= */}

        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/admin/products"
              className="mb-3 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-gray-900"
            >
              <ArrowLeft size={16} />
              Quay lại sản phẩm
            </Link>

            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Chi tiết sản phẩm
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Quản lý thông tin, hình ảnh và các biến thể sản phẩm.
            </p>
          </div>

          <button
            onClick={() => productQuery.refetch()}
            disabled={productQuery.isFetching}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:opacity-50"
          >
            <RefreshCw
              size={16}
              className={productQuery.isFetching ? "animate-spin" : ""}
            />
            Tải lại dữ liệu
          </button>
        </header>

        {/* =========================
            PRODUCT OVERVIEW
        ========================= */}

        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="grid gap-5 p-4 sm:p-6 md:grid-cols-[200px_1fr]">
            {/* MAIN IMAGE */}

            <div className="aspect-square overflow-hidden rounded-xl bg-gray-100 md:h-[200px]">
              {product.images?.[0]?.url ? (
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-300">
                  <ImageIcon size={44} />
                </div>
              )}
            </div>

            {/* PRODUCT INFO */}

            <div className="flex min-w-0 flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Thông tin sản phẩm
              </p>

              <h2 className="mt-2 break-words text-xl font-bold text-gray-900 sm:text-2xl">
                {product.name}
              </h2>

              <p className="mt-2 break-all text-sm text-gray-500">
                Slug: {product.slug}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-600">
                  {product.variants.length} biến thể
                </span>

                <span className="rounded-lg bg-gray-100 px-3 py-1.5 text-sm text-gray-600">
                  {colorCount} màu sắc
                </span>
              </div>

              {product.description && (
                <p className="mt-4 whitespace-pre-line text-sm leading-6 text-gray-600">
                  {product.description}
                </p>
              )}
            </div>
          </div>

          {/* PRODUCT IMAGE GALLERY */}

          {product.images?.length > 0 && (
            <div className="border-t border-gray-100 px-4 py-4 sm:px-6">
              <div className="mb-3 flex items-center gap-2">
                <ImageIcon size={16} className="text-gray-400" />

                <h3 className="text-sm font-semibold text-gray-800">
                  Hình ảnh sản phẩm
                </h3>

                <span className="text-xs text-gray-400">
                  ({product.images.length})
                </span>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-1">
                {product.images.map((image, index) => (
                  <div
                    key={`${image.url}-${index}`}
                    className="w-24 shrink-0 sm:w-28"
                  >
                    <div className="aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                      <img
                        src={image.url}
                        alt={`${product.name} - ảnh ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <p className="mt-1.5 truncate text-xs text-gray-500">
                      {image.color?.name ?? "Ảnh sản phẩm"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* =========================
            STATISTICS
        ========================= */}

        <section className="grid grid-cols-2 gap-3 lg:grid-cols-3">
          <StatCard
            label="Tổng biến thể"
            value={formatNumber(product.variants.length)}
            icon={<Boxes size={18} />}
          />

          <StatCard
            label="Tồn khả dụng"
            value={formatNumber(totalStock)}
            icon={<Package size={18} />}
          />

          <StatCard
            label="Đã bán"
            value={formatNumber(product.purchases ?? 0)}
            icon={<ShoppingBag size={18} />}
          />
        </section>

        {/* =========================
            RATING
        ========================= */}

        <section className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
              <Star size={20} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Đánh giá trung bình</p>

              <p className="mt-1 text-xl font-bold text-gray-900">
                {Number(product.rate ?? 0).toFixed(1)}

                <span className="ml-1 text-sm font-normal text-gray-400">
                  / 5
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Star size={20} />
            </div>

            <div>
              <p className="text-sm text-gray-500">Số lượt đánh giá</p>

              <p className="mt-1 text-xl font-bold text-gray-900">
                {formatNumber(product.countRate ?? 0)}
              </p>
            </div>
          </div>
        </section>

        {/* =========================
            SPECS
        ========================= */}

        {product.specs?.length > 0 && (
          <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-100 px-4 py-4 sm:px-6">
              <h2 className="font-bold text-gray-900">Thông số sản phẩm</h2>

              <p className="mt-1 text-sm text-gray-500">
                Các thông tin mô tả và đặc điểm sản phẩm.
              </p>
            </div>

            <div className="divide-y divide-gray-100">
              {product.specs.map((spec, index) => (
                <div
                  key={`${spec.label}-${index}`}
                  className="grid grid-cols-1 gap-1 px-4 py-3 sm:grid-cols-[220px_1fr] sm:gap-4 sm:px-6"
                >
                  <p className="text-sm font-medium text-gray-500">
                    {spec.label}
                  </p>

                  <p className="whitespace-pre-line break-words text-sm text-gray-900">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            SEARCH VARIANTS
        ========================= */}

        <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
                placeholder="Tìm theo màu sắc hoặc size..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400 focus:bg-white"
              />
            </div>

            {keyword && (
              <button
                onClick={() => setKeyword("")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50"
              >
                <X size={15} />
                Xóa tìm kiếm
              </button>
            )}
          </div>

          <p className="mt-3 text-xs text-gray-400">
            Hiển thị {variants.length} / {product.variants.length} biến thể
          </p>
        </section>

        {/* =========================
            VARIANTS
        ========================= */}

        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Danh sách biến thể
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Các biến thể được nhóm theo màu sắc.
            </p>
          </div>

          {Object.entries(groupedVariants).map(([colorKey, colorVariants]) => {
            const filteredVariants = colorVariants.filter((variant) =>
              variants.some((item) => item.id === variant.id),
            );

            if (filteredVariants.length === 0) {
              return null;
            }

            const color = colorVariants[0]?.color;

            return (
              <div
                key={colorKey}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                {/* COLOR HEADER */}

                <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 px-4 py-4 sm:px-5">
                  <div
                    className="h-8 w-8 shrink-0 rounded-full border border-black/10"
                    style={{
                      backgroundColor: color?.colorCode ?? "#e5e7eb",
                    }}
                  />

                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900">
                      {color?.name ?? "Chưa phân loại màu"}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {filteredVariants.length} biến thể
                    </p>
                  </div>
                </div>

                {/* =========================
                        DESKTOP TABLE
                    ========================= */}

                <div className="hidden overflow-x-auto md:block">
                  <table className="w-full min-w-[850px] text-left">
                    <thead className="border-b border-gray-100 bg-white">
                      <tr className="text-xs uppercase tracking-wide text-gray-400">
                        <th className="px-5 py-3 font-medium">Kích cỡ</th>

                        <th className="px-5 py-3 font-medium">Giá bán</th>

                        <th className="px-5 py-3 font-medium">Tồn khả dụng</th>

                        <th className="px-5 py-3 font-medium">Trạng thái</th>

                        <th className="px-5 py-3 text-right font-medium">
                          Thao tác
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {filteredVariants.map((variant) => {
                        const available = getAvailableStock(variant);

                        return (
                          <tr
                            key={variant.id}
                            className="transition hover:bg-gray-50"
                          >
                            {/* SIZE */}

                            <td className="px-5 py-4">
                              <p className="font-semibold text-gray-900">
                                Size {variant.size?.value ?? "—"}
                              </p>

                              <p className="mt-1 text-xs text-gray-400">
                                ID: {variant.id}
                              </p>
                            </td>

                            {/* PRICE */}

                            <td className="px-5 py-4 text-sm font-semibold text-gray-900">
                              {formatCurrency(Number(variant.price))}
                            </td>

                            {/* AVAILABLE */}

                            <td className="px-5 py-4">
                              <span
                                className={`text-sm font-semibold ${
                                  available <= 0
                                    ? "text-red-600"
                                    : "text-gray-800"
                                }`}
                              >
                                {formatNumber(available)}
                              </span>
                            </td>

                            {/* STATUS */}

                            <td className="px-5 py-4">
                              <span
                                className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                                  variant.status === "ACTIVE"
                                    ? "bg-green-50 text-green-700"
                                    : "bg-orange-50 text-orange-700"
                                }`}
                              >
                                {variant.status === "ACTIVE"
                                  ? "Đang hoạt động"
                                  : "Đang ẩn"}
                              </span>
                            </td>

                            {/* ACTION */}

                            <td className="px-5 py-4">
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => openEdit(variant)}
                                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                                >
                                  Chỉnh sửa giá
                                </button>

                                <button
                                  onClick={() => openEditActive(variant)}
                                  title="Chỉnh sửa trạng thái"
                                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
                                >
                                  <List size={16} />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* =========================
                        MOBILE CARDS
                    ========================= */}

                <div className="divide-y divide-gray-100 md:hidden">
                  {filteredVariants.map((variant) => {
                    const available = getAvailableStock(variant);

                    return (
                      <div key={variant.id} className="space-y-3 p-4">
                        {/* HEADER */}

                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-semibold text-gray-900">
                              Size {variant.size?.value ?? "—"}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              ID: {variant.id}
                            </p>
                          </div>

                          <span
                            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                              variant.status === "ACTIVE"
                                ? "bg-green-50 text-green-700"
                                : "bg-orange-50 text-orange-700"
                            }`}
                          >
                            {variant.status === "ACTIVE"
                              ? "Đang hoạt động"
                              : "Đang ẩn"}
                          </span>
                        </div>

                        {/* STOCK STATUS */}

                        <div className="flex items-center justify-between rounded-xl bg-gray-50 p-3">
                          <span className="text-xs text-gray-500">
                            Tình trạng kho
                          </span>

                          <span
                            className={`text-xs font-semibold ${
                              available <= 0 ? "text-red-600" : "text-green-600"
                            }`}
                          >
                            {available <= 0 ? "Hết hàng" : "Còn hàng"}
                          </span>
                        </div>

                        {/* INFO */}

                        <div className="grid grid-cols-2 gap-3">
                          <div className="rounded-xl bg-gray-50 p-3">
                            <p className="text-xs text-gray-500">Giá bán</p>

                            <p className="mt-1 text-sm font-semibold text-gray-900">
                              {formatCurrency(Number(variant.price))}
                            </p>
                          </div>

                          <div className="rounded-xl bg-gray-50 p-3">
                            <p className="text-xs text-gray-500">
                              Tồn khả dụng
                            </p>

                            <p className="mt-1 text-sm font-semibold text-gray-900">
                              {formatNumber(available)}
                            </p>
                          </div>

                          <div className="rounded-xl bg-gray-50 p-3">
                            <p className="text-xs text-gray-500">
                              Tổng tồn kho
                            </p>

                            <p className="mt-1 text-sm font-semibold text-gray-900">
                              {formatNumber(variant.stock?.quantity ?? 0)}
                            </p>
                          </div>

                          <div className="rounded-xl bg-gray-50 p-3">
                            <p className="text-xs text-gray-500">Đã giữ</p>

                            <p className="mt-1 text-sm font-semibold text-gray-900">
                              {formatNumber(variant.stock?.reserved ?? 0)}
                            </p>
                          </div>
                        </div>

                        {/* ACTIONS */}

                        <div className="grid grid-cols-[1fr_auto] gap-2">
                          <button
                            onClick={() => openEdit(variant)}
                            className="rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-700"
                          >
                            Chỉnh sửa giá
                          </button>

                          <button
                            onClick={() => openEditActive(variant)}
                            title="Chỉnh sửa trạng thái"
                            className="inline-flex h-full min-h-[42px] w-12 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:bg-gray-50"
                          >
                            <List size={17} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* EMPTY */}

          {variants.length === 0 && (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-4 py-12 text-center">
              <Package size={34} className="mx-auto text-gray-300" />

              <p className="mt-3 font-medium text-gray-800">
                Không tìm thấy biến thể
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Hãy thay đổi từ khóa tìm kiếm.
              </p>
            </div>
          )}
        </section>

        {/* =====================================================
            EDIT PRICE MODAL
        ===================================================== */}

        {editingVariant && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 backdrop-blur-[2px] sm:items-center sm:p-4">
            <div className="w-full max-w-lg rounded-t-2xl bg-white p-5 shadow-2xl sm:rounded-2xl sm:p-6">
              {/* HEADER */}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Chỉnh sửa giá biến thể
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {getColorLabel(editingVariant)} · Size{" "}
                    {editingVariant.size?.value ?? "—"}
                  </p>
                </div>

                <button
                  onClick={() => setEditingVariant(null)}
                  disabled={updateMutation.isPending}
                  className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                  aria-label="Đóng"
                >
                  <X size={19} />
                </button>
              </div>

              {/* CURRENT PRICE */}

              <div className="mt-5 rounded-xl bg-gray-50 p-4">
                <p className="text-xs text-gray-500">Giá hiện tại</p>

                <p className="mt-1 text-lg font-bold text-gray-900">
                  {formatCurrency(Number(editingVariant.price))}
                </p>
              </div>

              {/* INPUT */}

              <div className="mt-6">
                <label className="text-sm font-medium text-gray-700">
                  Giá bán mới (VNĐ)
                </label>

                <input
                  type="number"
                  min="0"
                  step="1000"
                  value={editForm.price}
                  onChange={(event) =>
                    setEditForm((previous) => ({
                      ...previous,
                      price: event.target.value,
                    }))
                  }
                  disabled={updateMutation.isPending}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-gray-500 disabled:bg-gray-50"
                  placeholder="Nhập giá bán"
                />

                <p className="mt-2 text-xs text-gray-400">
                  ID biến thể: {editingVariant.id}
                </p>
              </div>

              {/* FOOTER */}

              <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <button
                  onClick={() => setEditingVariant(null)}
                  disabled={updateMutation.isPending}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
                >
                  Hủy
                </button>

                <button
                  onClick={handleSave}
                  disabled={updateMutation.isPending}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {updateMutation.isPending ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Save size={16} />
                  )}

                  {updateMutation.isPending ? "Đang lưu..." : "Lưu thay đổi"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================
            EDIT STATUS MODAL
        ===================================================== */}

        {editingVariantActive && (
          <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-0 backdrop-blur-[2px] sm:items-center sm:p-4">
            <div className="w-full max-w-lg rounded-t-2xl bg-white p-5 shadow-2xl sm:rounded-2xl sm:p-6">
              {/* HEADER */}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">
                    Chỉnh sửa trạng thái
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {getColorLabel(editingVariantActive)} · Size{" "}
                    {editingVariantActive.size?.value ?? "—"}
                  </p>
                </div>

                <button
                  onClick={() => setEditingVariantActive(null)}
                  disabled={updateStatusMutation.isPending}
                  className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50"
                  aria-label="Đóng"
                >
                  <X size={19} />
                </button>
              </div>

              {/* VARIANT INFO */}

              <div className="mt-5 rounded-xl bg-gray-50 p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">ID biến thể</p>

                    <p className="mt-1 font-semibold text-gray-900">
                      #{editingVariantActive.id}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">Giá bán</p>

                    <p className="mt-1 font-semibold text-gray-900">
                      {formatCurrency(Number(editingVariantActive.price))}
                    </p>
                  </div>
                </div>
              </div>

              {/* STATUS */}

              <div className="mt-6">
                <label className="text-sm font-semibold text-gray-700">
                  Trạng thái biến thể
                </label>

                <div className="mt-3 space-y-3">
                  {/* ACTIVE */}

                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                      editFormActivate.status === "ACTIVE"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="variantStatus"
                      value="ACTIVE"
                      checked={editFormActivate.status === "ACTIVE"}
                      onChange={() =>
                        setEditFormActivate({
                          status: "ACTIVE",
                        })
                      }
                      disabled={updateStatusMutation.isPending}
                      className="mt-1 accent-green-600"
                    />

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                        <span className="text-sm font-semibold text-gray-900">
                          ACTIVE
                        </span>

                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                          Đang hoạt động
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Biến thể được phép hiển thị và đặt mua nếu sản phẩm đang
                        hoạt động và còn hàng.
                      </p>
                    </div>
                  </label>

                  {/* HIDDEN */}

                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition ${
                      editFormActivate.status === "HIDDEN"
                        ? "border-orange-500 bg-orange-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="variantStatus"
                      value="HIDDEN"
                      checked={editFormActivate.status === "HIDDEN"}
                      onChange={() =>
                        setEditFormActivate({
                          status: "HIDDEN",
                        })
                      }
                      disabled={updateStatusMutation.isPending}
                      className="mt-1 accent-orange-600"
                    />

                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-orange-500" />

                        <span className="text-sm font-semibold text-gray-900">
                          HIDDEN
                        </span>

                        <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-700">
                          Đang ẩn
                        </span>
                      </div>

                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Ẩn biến thể khỏi khách hàng và không cho đặt mua mới.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* FOOTER */}

              <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                <button
                  onClick={() => setEditingVariantActive(null)}
                  disabled={updateStatusMutation.isPending}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-50"
                >
                  Hủy
                </button>

                <button
                  onClick={handleSaveStatus}
                  disabled={
                    updateStatusMutation.isPending ||
                    editFormActivate.status === editingVariantActive.status
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {updateStatusMutation.isPending ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Save size={16} />
                  )}

                  {updateStatusMutation.isPending
                    ? "Đang lưu..."
                    : "Lưu thay đổi"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

/* =========================
   STAT CARD
========================= */

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-medium text-gray-500 sm:text-sm">{label}</p>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
          {icon}
        </div>
      </div>

      <p className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
        {value}
      </p>
    </div>
  );
}

/* =========================
   PAGE
========================= */

export default function ProductDetailPage({ params }: PageProps) {
  const { id } = use(params);

  const productId = Number(id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return (
      <div className="p-6 text-sm text-red-600">ID sản phẩm không hợp lệ.</div>
    );
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
        <ProductDetailPageContent productId={productId} />
      </main>
    </ProtectedRoute>
  );
}
