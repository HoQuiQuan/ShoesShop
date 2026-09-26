"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";

export type AlertType = "success" | "error" | "warning" | "info";

export interface AlertData {
  id: string;
  type: AlertType;
  title?: string;
  message: string;
  duration?: number;
}

interface AlertProps {
  alert: AlertData;
  onClose: (id: string) => void;
}

const alertConfig = {
  success: {
    icon: CheckCircle2,
    title: "Thành công",
    className: "border-emerald-200/80 bg-emerald-50/95 text-emerald-900",
    iconClass: "text-emerald-500",
    progressClass: "bg-emerald-500",
  },

  error: {
    icon: XCircle,
    title: "Có lỗi xảy ra",
    className: "border-red-200/80 bg-red-50/95 text-red-900",
    iconClass: "text-red-500",
    progressClass: "bg-red-500",
  },

  warning: {
    icon: AlertTriangle,
    title: "Cảnh báo",
    className: "border-amber-200/80 bg-amber-50/95 text-amber-900",
    iconClass: "text-amber-500",
    progressClass: "bg-amber-500",
  },

  info: {
    icon: Info,
    title: "Thông báo",
    className: "border-blue-200/80 bg-blue-50/95 text-blue-900",
    iconClass: "text-blue-500",
    progressClass: "bg-blue-500",
  },
};

export default function Alert({ alert, onClose }: AlertProps) {
  const [isClosing, setIsClosing] = useState(false);

  const closingRef = useRef(false);

  const config = alertConfig[alert.type];
  const Icon = config.icon;

  const duration = alert.duration ?? 4000;

  const handleClose = () => {
    if (closingRef.current) {
      return;
    }

    closingRef.current = true;

    setIsClosing(true);

    setTimeout(() => {
      onClose(alert.id);
    }, 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div
      className={`
        pointer-events-auto
        relative
        w-[calc(100vw-32px)]
        max-w-[420px]
        overflow-hidden
        rounded-2xl
        border
        shadow-[0_15px_40px_rgba(0,0,0,0.12)]
        backdrop-blur-xl
        transition-all
        duration-300
        ease-out

        ${
          isClosing
            ? "translate-x-[120%] opacity-0"
            : "translate-x-0 opacity-100 animate-alert-in"
        }

        ${config.className}
      `}
    >
      <div className="flex gap-3 p-4">
        {/* ICON */}
        <div className="shrink-0 pt-0.5">
          <Icon className={`h-6 w-6 ${config.iconClass}`} strokeWidth={2} />
        </div>

        {/* CONTENT */}
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold">
            {alert.title ?? config.title}
          </h4>

          <p className="mt-1 break-words text-sm leading-5 opacity-80">
            {alert.message}
          </p>
        </div>

        {/* CLOSE */}
        <button
          type="button"
          onClick={handleClose}
          className="
            shrink-0
            rounded-lg
            p-1
            opacity-50
            transition
            hover:bg-black/5
            hover:opacity-100
            active:scale-90
          "
          aria-label="Đóng thông báo"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* PROGRESS */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-black/5">
        <div
          className={`
            h-full
            ${config.progressClass}
            animate-alert-progress
          `}
          style={{
            animationDuration: `${duration}ms`,
          }}
        />
      </div>
    </div>
  );
}
