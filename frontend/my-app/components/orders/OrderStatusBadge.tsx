"use client";

import {
  Clock3,
  CircleCheck,
  Truck,
  PackageCheck,
  XCircle,
} from "lucide-react";

interface Props {
  status: string;
}

const statusConfig: Record<
  string,
  {
    label: string;
    className: string;
    icon: React.ElementType;
  }
> = {
  PENDING: {
    label: "Chờ xác nhận",
    className: "bg-amber-50 text-amber-700 border-amber-200",
    icon: Clock3,
  },

  CONFIRMED: {
    label: "Đã xác nhận",
    className: "bg-blue-50 text-blue-700 border-blue-200",
    icon: CircleCheck,
  },

  SHIPPING: {
    label: "Đang giao",
    className: "bg-violet-50 text-violet-700 border-violet-200",
    icon: Truck,
  },

  DELIVERED: {
    label: "Đã giao",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: PackageCheck,
  },

  CANCELLED: {
    label: "Đã hủy",
    className: "bg-red-50 text-red-700 border-red-200",
    icon: XCircle,
  },
};

export default function OrderStatusBadge({ status }: Props) {
  const config = statusConfig[status] ?? {
    label: status,
    className: "bg-gray-50 text-gray-600 border-gray-200",
    icon: Clock3,
  };

  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        border
        px-3
        py-1.5
        text-xs
        font-semibold
        ${config.className}
      `}
    >
      <Icon size={14} strokeWidth={2} />

      {config.label}
    </span>
  );
}
