"use client";

interface Props {
  active: string;
  onChange: (status: string) => void;
}

const filters = [
  {
    value: "ALL",
    label: "Tất cả",
  },
  {
    value: "PENDING",
    label: "Chờ xác nhận",
  },
  {
    value: "CONFIRMED",
    label: "Đã xác nhận",
  },
  {
    value: "SHIPPING",
    label: "Đang giao",
  },
  {
    value: "DELIVERED",
    label: "Đã giao",
  },
  {
    value: "CANCELLED",
    label: "Đã hủy",
  },
  {
    value: "RETURN",
    lable: "Hàng đã trả",
  },
];

export default function OrderFilter({ active, onChange }: Props) {
  return (
    <div
      className="
        mb-6
        overflow-x-auto
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-1.5
        scrollbar-none
      "
    >
      <div className="flex min-w-max gap-1">
        {filters.map((filter) => {
          const isActive = active === filter.value;

          return (
            <button
              key={filter.value}
              onClick={() => onChange(filter.value)}
              className={`
                whitespace-nowrap
                rounded-xl
                px-4
                py-2.5
                text-sm
                font-medium
                transition-all
                duration-200
                ${
                  isActive
                    ? "bg-black text-white shadow-sm"
                    : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                }
              `}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
