"use client";

interface VoucherTabsProps {
  active: string;
  onChange: (value: string) => void;
}

const tabs = [
  {
    value: "ALL",
    label: "Tất cả",
  },
  {
    value: "DISCOUNT",
    label: "Giảm giá",
  },
  {
    value: "FREESHIP",
    label: "Miễn phí vận chuyển",
  },
];

export default function VoucherTabs({ active, onChange }: VoucherTabsProps) {
  return (
    <div className="flex w-full gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {tabs.map((tab) => {
        const isActive = active === tab.value;

        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`whitespace-nowrap rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                : "bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
