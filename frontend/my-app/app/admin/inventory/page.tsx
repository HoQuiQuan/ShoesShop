"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import InventoryHeader from "@/components/admin/inventory/InventoryHeader";
import InventoryStats from "@/components/admin/inventory/InventoryStats";
import InventoryFilters from "@/components/admin/inventory/InventoryFilters";
import InventoryTable from "@/components/admin/inventory/InventoryTable";
import InventoryMobileCard from "@/components/admin/inventory/InventoryMobileCard";
import InventoryPagination from "@/components/admin/inventory/InventoryPagination";
import InventorySkeleton from "@/components/admin/inventory/InventorySkeleton";

import {
  InventoryApi,
  InventoryStatus,
  StockTransactionPayload,
} from "@/app/Api/Inventory.api";
import { useDebounce } from "@/app/hooks/debounce/useDebounce";

const LIMIT = 10;

export default function InventoryPage() {
  const [page, setPage] = useState(1);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 400);

  const [status, setStatus] = useState<InventoryStatus | "ALL">("ALL");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["inventory", page, LIMIT, debouncedSearch, status],

    queryFn: () =>
      InventoryApi.findAllInventory({
        page,
        limit: LIMIT,
        search,
      }),

    placeholderData: keepPreviousData,

    staleTime: 30_000,

    retry: 1,

    refetchOnWindowFocus: false,
  });

  const inventory = data?.data.data ?? [];

  //   console.log("inventory", inventory);

  const pagination = data?.data.pagination;

  console.log("pagination", pagination);

  const handleStockIn = async (payload: StockTransactionPayload) => {
    try {
      setIsSubmitting(true);

      await InventoryApi.stockIn(payload);

      await refetch();

      // gọi AlertContainer success ở đây
    } catch (error) {
      // gọi AlertContainer error ở đây
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStockOut = async (payload: StockTransactionPayload) => {
    try {
      setIsSubmitting(true);

      await InventoryApi.stockOut(payload);

      await refetch();

      // gọi AlertContainer success ở đây
    } catch (error) {
      // gọi AlertContainer error ở đây
    } finally {
      setIsSubmitting(false);
    }
  };

  /*
   * =========================
   * Statistics
   * =========================
   *
   * Tạm thời tính trên dữ liệu
   * của page hiện tại.
   *
   * Sau này nên làm API dashboard riêng
   * để lấy thống kê toàn bộ kho.
   */

  const totalQuantity = inventory.reduce((sum, item) => sum + item.quantity, 0);

  const totalReserved = inventory.reduce((sum, item) => sum + item.reserved, 0);

  const lowStock = inventory.filter(
    (item) => item.status === "LOW_STOCK",
  ).length;

  const outOfStock = inventory.filter(
    (item) => item.status === "OUT_OF_STOCK",
  ).length;

  /*
   * =========================
   * Handlers
   * =========================
   */

  const handleSearch = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleStatus = (value: InventoryStatus | "ALL") => {
    setStatus(value);
    setPage(1);
  };

  const handleReset = () => {
    setSearch("");
    setStatus("ALL");
    setPage(1);
  };

  /*
   * =========================
   * Loading
   * =========================
   */

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[#f7f7f8] p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-[1600px]">
          <InventorySkeleton />
        </div>
      </main>
    );
  }

  /*
   * =========================
   * Error
   * =========================
   */

  if (isError) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f7f7f8] p-6">
        <div className="rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">
            Không thể tải tồn kho
          </h2>

          <p className="mt-2 text-sm text-zinc-500">
            Đã xảy ra lỗi khi lấy dữ liệu từ server.
          </p>

          {error instanceof Error && (
            <p className="mt-2 text-xs text-red-500">{error.message}</p>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f8] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">
        {/* =========================
            HEADER
        ========================= */}

        <InventoryHeader
          onImport={() => {
            console.log("Open stock in modal");
          }}
          onExport={() => {
            console.log("Export Excel");
          }}
        />

        {/* =========================
            STATS
        ========================= */}

        <InventoryStats
          totalProducts={pagination?.total ?? 0}
          totalQuantity={totalQuantity}
          totalReserved={totalReserved}
          totalAvailable={totalQuantity - totalReserved}
          lowStock={lowStock}
          outOfStock={outOfStock}
        />

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.15,
          }}
          className="mt-5 space-y-4"
        >
          {/* =========================
              FILTER
          ========================= */}

          <InventoryFilters
            search={search}
            status={status}
            onSearchChange={handleSearch}
            onStatusChange={handleStatus}
            onReset={handleReset}
          />

          {/* =========================
              TABLE
          ========================= */}

          <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            {/* HEADER */}

            <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-4 sm:px-5">
              <div>
                <h2 className="text-sm font-semibold text-zinc-900 sm:text-base">
                  Danh sách tồn kho
                </h2>

                <p className="mt-0.5 text-xs text-zinc-500">
                  Quản lý tồn kho theo từng biến thể sản phẩm.
                </p>
              </div>

              <span className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600">
                {pagination?.total ?? 0} SKU
              </span>
            </div>

            {/* =========================
                DESKTOP
            ========================= */}

            <div
              className={`transition-opacity duration-200 ${
                isFetching ? "opacity-60" : "opacity-100"
              }`}
            >
              <InventoryTable
                items={inventory}
                isLoading={isLoading}
                isSubmitting={isSubmitting}
                onStockIn={handleStockIn}
                onStockOut={handleStockOut}
              />
            </div>

            {/* =========================
                MOBILE
            ========================= */}

            <div
              className={`space-y-3 p-3 transition-opacity duration-200 lg:hidden ${
                isFetching ? "opacity-60" : "opacity-100"
              }`}
            >
              {inventory.length > 0 ? (
                inventory.map((item) => (
                  <InventoryMobileCard key={item.productDetailId} item={item} />
                ))
              ) : (
                <div className="py-12 text-center text-sm text-zinc-500">
                  Không tìm thấy sản phẩm phù hợp.
                </div>
              )}
            </div>

            {/* =========================
                PAGINATION
            ========================= */}

            <InventoryPagination
              page={pagination?.page ?? 1}
              totalPages={pagination?.totalPages ?? 1}
              total={pagination?.total ?? 0}
              limit={pagination?.limit ?? LIMIT}
              onPageChange={setPage}
            />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
