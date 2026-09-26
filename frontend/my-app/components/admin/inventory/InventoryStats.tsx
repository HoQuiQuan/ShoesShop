"use client";

import { Package, Boxes, Lock, AlertTriangle, XCircle } from "lucide-react";

interface Props {
  totalProducts: number;
  totalQuantity: number;
  totalReserved: number;
  totalAvailable: number;
  lowStock: number;
  outOfStock: number;
  isLoading?: boolean;
}

export default function InventoryStats({
  totalProducts,
  totalQuantity,
  totalReserved,
  totalAvailable,
  lowStock,
  outOfStock,
  isLoading = false,
}: Props) {
  const cards = [
    {
      title: "SKU",
      value: totalProducts,
      icon: Package,
    },
    {
      title: "Tổng tồn",
      value: totalQuantity,
      icon: Boxes,
    },
    {
      title: "Đang giữ",
      value: totalReserved,
      icon: Lock,
    },
    {
      title: "Khả dụng",
      value: totalAvailable,
      icon: Package,
    },
    {
      title: "Sắp hết",
      value: lowStock,
      icon: AlertTriangle,
    },
    {
      title: "Hết hàng",
      value: outOfStock,
      icon: XCircle,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-zinc-500">{card.title}</p>

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                <Icon size={16} className="text-zinc-600" />
              </div>
            </div>

            {isLoading ? (
              <div className="mt-3 h-7 w-16 animate-pulse rounded bg-zinc-200" />
            ) : (
              <p className="mt-3 text-xl font-bold text-zinc-900">
                {card.value.toLocaleString("vi-VN")}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
