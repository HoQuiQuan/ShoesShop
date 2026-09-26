"use client";

import { CheckCircle2, Circle } from "lucide-react";

import { ReturnStatus } from "./ReturnStatusBadge";

const steps = [
  {
    status: "PENDING",
    label: "Yêu cầu trả hàng",
  },
  {
    status: "APPROVED",
    label: "Đã duyệt",
  },
  {
    status: "SHIPPING",
    label: "Đang gửi hàng",
  },
  {
    status: "RECEIVED",
    label: "Đã nhận hàng",
  },
  {
    status: "INSPECTING",
    label: "Đang kiểm tra",
  },
  {
    status: "COMPLETED",
    label: "Hoàn tất",
  },
];

const order = [
  "PENDING",
  "APPROVED",
  "SHIPPING",
  "RECEIVED",
  "INSPECTING",
  "COMPLETED",
];

interface Props {
  status: ReturnStatus;
}

export default function ReturnTimeline({ status }: Props) {
  const currentIndex = order.indexOf(status);

  return (
    <div className="overflow-x-auto">
      <div className="flex min-w-[700px] items-start">
        {steps.map((step, index) => {
          const completed = index < currentIndex;
          const current = index === currentIndex;

          return (
            <div key={step.status} className="flex flex-1 items-start">
              <div className="flex flex-col items-center">
                <div
                  className={`
                    flex h-9 w-9 items-center
                    justify-center rounded-full
                    ${
                      completed
                        ? "bg-emerald-500 text-white"
                        : current
                          ? "bg-black text-white"
                          : "bg-gray-100 text-gray-400"
                    }
                  `}
                >
                  {completed ? (
                    <CheckCircle2 size={18} />
                  ) : (
                    <Circle size={17} />
                  )}
                </div>

                <p
                  className={`
                    mt-2 whitespace-nowrap text-xs
                    ${
                      current || completed
                        ? "font-semibold text-gray-900"
                        : "text-gray-400"
                    }
                  `}
                >
                  {step.label}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`
                    mt-4 h-[2px] flex-1
                    ${completed ? "bg-emerald-500" : "bg-gray-100"}
                  `}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
