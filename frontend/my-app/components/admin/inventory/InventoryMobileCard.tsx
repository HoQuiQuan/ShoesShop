"use client";

import Image from "next/image";

import { AlertTriangle, ChevronRight, Package } from "lucide-react";

import { InventoryItem } from "@/app/Api/Inventory.api";

interface Props {
  item: InventoryItem;
}

const statusConfig = {
  IN_STOCK: {
    label: "Còn hàng",
    className: "bg-emerald-50 text-emerald-700",
  },

  LOW_STOCK: {
    label: "Sắp hết",
    className: "bg-amber-50 text-amber-700",
  },

  OUT_OF_STOCK: {
    label: "Hết hàng",
    className: "bg-red-50 text-red-700",
  },
} as const;

export default function InventoryMobileCard({ item }: Props) {
  const status = statusConfig[item.status];

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
      <div className="flex gap-3">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
          {item.img ? (
            <Image
              src={item.img}
              alt={item.productName}
              fill
              sizes="64px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-400">
              <Package size={22} />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate text-sm font-semibold text-zinc-900">
                {item.productName}
              </h3>

              <p className="mt-1 text-xs text-zinc-500">
                {item.colorName} · Size {item.sizeValue}
              </p>
            </div>

            <span
              className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${status.className}`}
            >
              {status.label}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 divide-x rounded-xl bg-zinc-50 py-3">
        <div className="text-center">
          <p className="text-[11px] text-zinc-500">Tổng kho</p>

          <p className="mt-1 text-sm font-bold text-zinc-900">
            {item.quantity}
          </p>
        </div>

        <div className="text-center">
          <p className="text-[11px] text-zinc-500">Đang giữ</p>

          <p className="mt-1 text-sm font-bold text-amber-600">
            {item.reserved}
          </p>
        </div>

        <div className="text-center">
          <p className="text-[11px] text-zinc-500">Khả dụng</p>

          <p className="mt-1 text-sm font-bold text-zinc-900">
            {item.available}
          </p>
        </div>
      </div>

      {item.status !== "IN_STOCK" && (
        <div className="mt-3 flex items-center gap-2 rounded-xl bg-amber-50 px-3 py-2 text-xs text-amber-700">
          <AlertTriangle size={14} />

          <span>
            {item.status === "OUT_OF_STOCK"
              ? "Sản phẩm hiện đã hết hàng."
              : "Số lượng khả dụng đang ở mức thấp."}
          </span>
        </div>
      )}

      <button className="mt-3 flex w-full items-center justify-between rounded-xl border border-zinc-200 px-3 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50">
        <span>Xem chi tiết tồn kho</span>

        <ChevronRight size={16} />
      </button>
    </div>
  );
}
