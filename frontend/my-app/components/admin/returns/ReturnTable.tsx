"use client";

import { Eye, Package, ChevronRight } from "lucide-react";
import ReturnStatusBadge, { ReturnStatus } from "./ReturnStatusBadge";
import { ReturnRequestStatus } from "@/app/Api/ReturnRequest";

export interface ReturnRequest {
  id: number;
  orderId: number;
  orderCode: string;

  customer: {
    id: number;
    name: string;
    phone: string;
  };

  reason: string;
  note?: string;

  status: ReturnRequestStatus;

  items: {
    id: number;
    productName: string;
    image?: string;
    colorName?: string;
    sizeValue?: string;
    returnedQuantity: number;
    normalQuantity?: number;
    damagedQuantity?: number;
    status?: string;
  }[];

  createdAt: string;
  updatedAt: string;
}

interface Props {
  data: ReturnRequest[];
  loading?: boolean;
  onView: (item: ReturnRequest) => void;
}

export default function ReturnTable({ data, loading, onView }: Props) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:block">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                Yêu cầu
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                Đơn hàng
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                Khách hàng
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold uppercase text-gray-500">
                Sản phẩm
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase text-gray-500">
                Trạng thái
              </th>

              <th className="px-5 py-4 text-right text-xs font-semibold uppercase text-gray-500">
                Thao tác
              </th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <tr key={index} className="border-b border-gray-50">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <td key={i} className="px-5 py-5">
                      <div className="h-4 animate-pulse rounded bg-gray-100" />
                    </td>
                  ))}
                </tr>
              ))
            ) : data.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-5 py-16 text-center">
                  <Package size={40} className="mx-auto text-gray-300" />

                  <p className="mt-3 text-sm font-medium text-gray-500">
                    Không tìm thấy yêu cầu trả hàng
                  </p>
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-b border-gray-50
                    transition-colors
                    hover:bg-gray-50/70
                  "
                >
                  <td className="px-5 py-4">
                    <p className="font-semibold text-gray-900">#{item.id}</p>

                    <p className="mt-1 text-xs text-gray-400">
                      {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">
                      {item.orderCode}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <p className="font-medium text-gray-900">
                      {item.customer.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {item.customer.phone}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-center">
                    <span className="inline-flex rounded-lg bg-gray-100 px-2.5 py-1 text-sm font-medium">
                      {item.items.length}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <ReturnStatusBadge status={item.status} />
                  </td>

                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => onView(item)}
                      className="
                        inline-flex items-center
                        gap-1.5 rounded-lg
                        px-3 py-2
                        text-sm font-medium
                        text-gray-700
                        transition
                        hover:bg-gray-100
                      "
                    >
                      <Eye size={16} />
                      Xem
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile */}
      <div className="space-y-3 lg:hidden">
        {data.map((item) => (
          <button
            key={item.id}
            onClick={() => onView(item)}
            className="
              w-full rounded-2xl
              border border-gray-100
              bg-white p-4
              text-left shadow-sm
              transition
              active:scale-[0.99]
            "
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-gray-900">#{item.id}</p>

                <p className="mt-1 text-sm text-gray-500">{item.orderCode}</p>
              </div>

              <ReturnStatusBadge status={item.status} />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">{item.customer.name}</p>

                <p className="text-xs text-gray-400">{item.customer.phone}</p>
              </div>

              <ChevronRight size={18} className="text-gray-400" />
            </div>
          </button>
        ))}
      </div>
    </>
  );
}
