"use client";

import { RotateCcw, Clock3, Search, CheckCircle2 } from "lucide-react";

interface Props {
  total: number;
  pending: number;
  inspecting: number;
  completed: number;
}

export default function ReturnStats({
  total,
  pending,
  inspecting,
  completed,
}: Props) {
  const stats = [
    {
      label: "Tổng yêu cầu",
      value: total,
      icon: RotateCcw,
      description: "Tất cả yêu cầu trả hàng",
    },
    {
      label: "Chờ xử lý",
      value: pending,
      icon: Clock3,
      description: "Cần admin xử lý",
    },
    {
      label: "Đang kiểm tra",
      value: inspecting,
      icon: Search,
      description: "Đang kiểm tra sản phẩm",
    },
    {
      label: "Đã hoàn tất",
      value: completed,
      icon: CheckCircle2,
      description: "Đã xử lý xong",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              rounded-2xl border border-gray-100
              bg-white p-5
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-md
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">{item.label}</p>

                <p className="mt-2 text-3xl font-bold text-gray-900">
                  {item.value}
                </p>

                <p className="mt-1 text-xs text-gray-400">{item.description}</p>
              </div>

              <div className="rounded-xl bg-gray-50 p-3">
                <Icon size={20} className="text-gray-700" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
