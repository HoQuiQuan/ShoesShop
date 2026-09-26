"use client";

import { Check, Package, Truck, CircleCheck, XCircle } from "lucide-react";

interface Props {
  status: string;
}

const statuses = [
  {
    key: "PENDING",
    label: "Chờ xác nhận",
    icon: Package,
  },
  {
    key: "CONFIRMED",
    label: "Đã xác nhận",
    icon: Check,
  },
  {
    key: "SHIPPING",
    label: "Đang giao",
    icon: Truck,
  },
  {
    key: "DELIVERED",
    label: "Đã giao",
    icon: CircleCheck,
  },
];

export default function OrderStatusTimeline({ status }: Props) {
  if (status === "CANCELLED") {
    return (
      <div className="animate-in fade-in slide-in-from-top-2 rounded-2xl border border-red-200 bg-red-50 p-5 duration-500">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600">
            <XCircle size={23} />
          </div>

          <div>
            <p className="font-semibold text-red-700">Đơn hàng đã bị hủy</p>

            <p className="mt-1 text-sm text-red-600/80">
              Đơn hàng này không còn được xử lý.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = statuses.findIndex((item) => item.key === status);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900">Trạng thái đơn hàng</h2>

        <p className="mt-1 text-sm text-gray-500">
          Theo dõi tiến trình xử lý đơn hàng của bạn
        </p>
      </div>

      <div className="relative">
        {/* Desktop line */}
        <div className="absolute left-[12%] right-[12%] top-5 hidden h-[2px] bg-gray-200 md:block" />

        <div className="grid grid-cols-4">
          {statuses.map((item, index) => {
            const Icon = item.icon;

            const active = index <= currentIndex;

            return (
              <div
                key={item.key}
                className="relative flex flex-col items-center text-center"
              >
                <div
                  className={`
                    relative z-10 flex h-10 w-10 items-center justify-center
                    rounded-full border-2 transition-all duration-500
                    ${
                      active
                        ? "border-gray-900 bg-gray-900 text-white shadow-lg"
                        : "border-gray-200 bg-white text-gray-400"
                    }
                  `}
                >
                  <Icon size={18} />
                </div>

                <span
                  className={`
                    mt-3 text-xs font-medium transition-colors duration-300
                    md:text-sm
                    ${active ? "text-gray-900" : "text-gray-400"}
                  `}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
