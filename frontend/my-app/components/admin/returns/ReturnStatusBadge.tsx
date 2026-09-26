"use client";

import {
  Clock3,
  CheckCircle2,
  Truck,
  PackageCheck,
  Search,
  CircleCheck,
  XCircle,
  Ban,
} from "lucide-react";

export type ReturnStatus =
  | "PENDING"
  | "APPROVED"
  | "SHIPPING"
  | "RECEIVED"
  | "INSPECTING"
  | "COMPLETED"
  | "REJECTED"
  | "CANCELLED";

const statusConfig = {
  PENDING: {
    label: "Chờ xử lý",
    className: "bg-amber-50 text-amber-700 border-amber-200",
    icon: Clock3,
  },
  APPROVED: {
    label: "Đã duyệt",
    className: "bg-blue-50 text-blue-700 border-blue-200",
    icon: CheckCircle2,
  },
  SHIPPING: {
    label: "Đang gửi hàng",
    className: "bg-indigo-50 text-indigo-700 border-indigo-200",
    icon: Truck,
  },
  RECEIVED: {
    label: "Đã nhận hàng",
    className: "bg-purple-50 text-purple-700 border-purple-200",
    icon: PackageCheck,
  },
  INSPECTING: {
    label: "Đang kiểm tra",
    className: "bg-orange-50 text-orange-700 border-orange-200",
    icon: Search,
  },
  COMPLETED: {
    label: "Đã hoàn tất",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    icon: CircleCheck,
  },
  REJECTED: {
    label: "Từ chối",
    className: "bg-red-50 text-red-700 border-red-200",
    icon: XCircle,
  },
  CANCELLED: {
    label: "Đã hủy",
    className: "bg-gray-100 text-gray-600 border-gray-200",
    icon: Ban,
  },
};

interface Props {
  status: ReturnStatus;
}

export default function ReturnStatusBadge({ status }: Props) {
  const config = statusConfig[status];

  if (!config) return null;

  const Icon = config.icon;

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        rounded-full border px-2.5 py-1
        text-xs font-medium
        ${config.className}
      `}
    >
      <Icon size={13} />
      {config.label}
    </span>
  );
}
