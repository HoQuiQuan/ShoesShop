"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { ReturnStatus } from "./ReturnStatusBadge";
import { ReturnRequestStatus } from "@/app/Api/ReturnRequest";

interface Props {
  search: string;
  status: ReturnRequestStatus | undefined;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: ReturnRequestStatus) => void;
  onClear: () => void;
}

export default function ReturnFilters({
  search,
  status,
  onSearchChange,
  onStatusChange,
  onClear,
}: Props) {
  const hasFilter = search || status;

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 lg:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm mã đơn, khách hàng, SĐT..."
            className="
              h-11 w-full rounded-xl
              border border-gray-200
              bg-gray-50 pl-10 pr-4
              text-sm outline-none
              transition
              focus:border-gray-400
              focus:bg-white
              focus:ring-2
              focus:ring-gray-100
            "
          />
        </div>

        {/* Status */}
        <div className="relative">
          <SlidersHorizontal
            size={17}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <select
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="
              h-11 min-w-[190px]
              appearance-none rounded-xl
              border border-gray-200
              bg-gray-50 pl-10 pr-8
              text-sm outline-none
              focus:border-gray-400
            "
          >
            <option value="">Tất cả trạng thái</option>
            <option value="PENDING">Chờ xử lý</option>
            <option value="APPROVED">Đã duyệt</option>
            <option value="SHIPPING">Đang gửi hàng</option>
            <option value="RECEIVED">Đã nhận hàng</option>
            <option value="INSPECTING">Đang kiểm tra</option>
            <option value="COMPLETED">Đã hoàn tất</option>
            <option value="REJECTED">Từ chối</option>
            <option value="CANCELLED">Đã hủy</option>
          </select>
        </div>

        {hasFilter && (
          <button
            onClick={onClear}
            className="
              flex h-11 items-center
              justify-center gap-2
              rounded-xl border
              border-gray-200 px-4
              text-sm text-gray-600
              transition
              hover:bg-gray-50
            "
          >
            <X size={16} />
            Xóa lọc
          </button>
        )}
      </div>
    </div>
  );
}
