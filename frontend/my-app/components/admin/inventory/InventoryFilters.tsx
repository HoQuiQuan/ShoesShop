"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { InventoryStatus } from "./inventory.data";

interface InventoryFiltersProps {
  search: string;
  status: InventoryStatus | "ALL";
  onSearchChange: (value: string) => void;
  onStatusChange: (value: InventoryStatus | "ALL") => void;
  onReset: () => void;
}

export default function InventoryFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onReset,
}: InventoryFiltersProps) {
  const hasFilter = search.trim() !== "" || status !== "ALL";

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm sm:p-4">
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm sản phẩm, màu sắc, size..."
            className="h-11 w-full rounded-xl border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-400 focus:bg-white focus:ring-2 focus:ring-zinc-100"
          />
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1 lg:w-52 lg:flex-none">
            <SlidersHorizontal
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            />

            <select
              value={status}
              onChange={(e) =>
                onStatusChange(e.target.value as InventoryStatus | "ALL")
              }
              className="h-11 w-full appearance-none rounded-xl border border-zinc-200 bg-zinc-50 pl-10 pr-8 text-sm outline-none transition focus:border-zinc-400 focus:bg-white"
            >
              <option value="ALL">Tất cả trạng thái</option>
              <option value="IN_STOCK">Còn hàng</option>
              <option value="LOW_STOCK">Sắp hết</option>
              <option value="OUT_OF_STOCK">Hết hàng</option>
            </select>
          </div>

          {hasFilter && (
            <button
              onClick={onReset}
              className="flex h-11 shrink-0 items-center gap-2 rounded-xl border border-zinc-200 px-3 text-sm font-medium text-zinc-600 transition hover:bg-zinc-50"
            >
              <X size={16} />
              <span className="hidden sm:block">Xóa lọc</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
