"use client";

import { useMemo, useState } from "react";
import {
  Check,
  CircleAlert,
  Loader2,
  PackageCheck,
  Truck,
  X,
} from "lucide-react";
import { api } from "@/lib/axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/* =========================================================
 * TYPES
 * ======================================================= */

export type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "SHIPPING"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED";

interface UpdateOrderStatusProps {
  orderCode: string;

  currentStatus: OrderStatus;

  onSuccess?: (newStatus: OrderStatus) => void;
}

/* =========================================================
 * STATUS CONFIG
 * ======================================================= */

const statusConfig: Record<
  OrderStatus,
  {
    label: string;
    description: string;
    icon: typeof PackageCheck;
    className: string;
    iconClassName: string;
  }
> = {
  PENDING: {
    label: "Chờ xác nhận",
    description: "Đơn hàng đang chờ admin xác nhận.",
    icon: PackageCheck,
    className: "bg-yellow-50 text-yellow-700 border-yellow-200",
    iconClassName: "bg-yellow-100 text-yellow-600",
  },

  CONFIRMED: {
    label: "Đã xác nhận",
    description: "Đơn hàng đã được xác nhận và chuẩn bị giao.",
    icon: Check,
    className: "bg-blue-50 text-blue-700 border-blue-200",
    iconClassName: "bg-blue-100 text-blue-600",
  },

  SHIPPING: {
    label: "Đang giao",
    description: "Đơn hàng đang được giao cho khách.",
    icon: Truck,
    className: "bg-purple-50 text-purple-700 border-purple-200",
    iconClassName: "bg-purple-100 text-purple-600",
  },

  DELIVERED: {
    label: "Đã giao",
    description: "Đơn hàng đã được giao thành công.",
    icon: PackageCheck,
    className: "bg-green-50 text-green-700 border-green-200",
    iconClassName: "bg-green-100 text-green-600",
  },

  CANCELLED: {
    label: "Đã hủy",
    description: "Đơn hàng đã bị hủy.",
    icon: X,
    className: "bg-red-50 text-red-700 border-red-200",
    iconClassName: "bg-red-100 text-red-600",
  },

  RETURNED: {
    label: "Đã trả hàng",
    description: "Đơn hàng đã được trả lại.",
    icon: PackageCheck,
    className: "bg-orange-50 text-orange-700 border-orange-200",
    iconClassName: "bg-orange-100 text-orange-600",
  },
};

/* =========================================================
 * ALLOWED TRANSITIONS
 * ======================================================= */

const allowedTransitions: Record<OrderStatus, OrderStatus[]> = {
  PENDING: ["CONFIRMED", "CANCELLED"],

  CONFIRMED: ["SHIPPING", "CANCELLED"],

  SHIPPING: ["DELIVERED", "CANCELLED"],

  DELIVERED: ["RETURNED"],

  CANCELLED: [],

  RETURNED: [],
};

/* =========================================================
 * COMPONENT
 * ======================================================= */

export default function UpdateOrderStatus({
  orderCode,
  currentStatus,
  onSuccess,
}: UpdateOrderStatusProps) {
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus | null>(
    null,
  );

  const [note, setNote] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);

  /* =======================================================
   * CURRENT STATUS
   * ======================================================= */

  const currentConfig = statusConfig[currentStatus];

  const CurrentIcon = currentConfig.icon;

  /* =======================================================
   * AVAILABLE STATUS
   * ======================================================= */

  const availableStatuses = useMemo(() => {
    return allowedTransitions[currentStatus] ?? [];
  }, [currentStatus]);

  /* =======================================================
   * SELECT STATUS
   * ======================================================= */

  const handleSelectStatus = (status: OrderStatus) => {
    setError("");

    setSelectedStatus(status);

    setNote("");

    setOpen(false);
  };

  /* =======================================================
   * OPEN CONFIRM
   * ======================================================= */

  const handleConfirmOpen = () => {
    if (!selectedStatus) return;

    setError("");

    setOpen(true);
  };

  /* =======================================================
   * UPDATE STATUS
   * ======================================================= */

  const handleUpdateStatus = async () => {
    if (!selectedStatus) return;

    try {
      setLoading(true);

      setError("");

      await api.patch(
        "order/admin/update-status",
        {
          orderCode: orderCode,
          orderStatus: selectedStatus,
        },
        { withCredentials: true },
      );

      /*
       * Thông báo cho component cha
       */
      onSuccess?.(selectedStatus);

      /*
       * Reset
       */
      setSelectedStatus(null);

      setNote("");

      setOpen(false);
    } catch (error) {
      console.error("Update order status error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Có lỗi xảy ra khi cập nhật đơn hàng",
      );
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
   * NO AVAILABLE ACTION
   * ======================================================= */

  if (availableStatuses.length === 0) {
    return (
      <div
        className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-sm
        "
      >
        <p
          className="
            mb-3
            text-xs
            font-semibold
            uppercase
            tracking-wide
            text-gray-400
          "
        >
          Trạng thái đơn hàng
        </p>

        <div
          className={`
            flex
            items-center
            gap-3
            rounded-xl
            border
            p-3
            ${currentConfig.className}
          `}
        >
          <div
            className={`
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              ${currentConfig.iconClassName}
            `}
          >
            <CurrentIcon className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-bold">{currentConfig.label}</p>

            <p className="mt-0.5 text-xs opacity-80">
              {currentConfig.description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  /* =======================================================
   * RENDER
   * ======================================================= */

  return (
    <>
      <div
        className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-4
          shadow-sm
          sm:p-5
        "
      >
        {/* HEADER */}

        <div className="mb-4">
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-wide
              text-gray-400
            "
          >
            Cập nhật trạng thái
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Thay đổi trạng thái đơn hàng
          </p>
        </div>

        {/* CURRENT STATUS */}

        <div
          className={`
            mb-4
            flex
            items-center
            gap-3
            rounded-xl
            border
            p-3
            ${currentConfig.className}
          `}
        >
          <div
            className={`
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              ${currentConfig.iconClassName}
            `}
          >
            <CurrentIcon className="h-5 w-5" />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-bold">{currentConfig.label}</p>

            <p className="mt-0.5 text-xs opacity-80">Trạng thái hiện tại</p>
          </div>
        </div>

        {/* OPTIONS */}

        <div className="space-y-2">
          {availableStatuses.map((status) => {
            const config = statusConfig[status];

            const Icon = config.icon;

            const selected = selectedStatus === status;

            return (
              <button
                key={status}
                type="button"
                disabled={loading}
                onClick={() => handleSelectStatus(status)}
                className={`
                    group
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    border
                    p-3
                    text-left
                    transition-all
                    duration-200
                    active:scale-[0.98]

                    ${
                      selected
                        ? `
                          border-black
                          bg-gray-50
                          shadow-sm
                        `
                        : `
                          border-gray-200
                          bg-white
                          hover:border-gray-300
                          hover:bg-gray-50
                        `
                    }

                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  `}
              >
                {/* ICON */}

                <div
                  className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      transition-transform
                      duration-200
                      group-hover:scale-105
                      ${config.iconClassName}
                    `}
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* TEXT */}

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-gray-800">
                    {config.label}
                  </p>

                  <p className="mt-0.5 text-xs text-gray-400">
                    {config.description}
                  </p>
                </div>

                {/* CHECK */}

                <div
                  className={`
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-200

                      ${
                        selected
                          ? `
                            border-black
                            bg-black
                            text-white
                          `
                          : `
                            border-gray-300
                            bg-white
                          `
                      }
                    `}
                >
                  {selected && <Check className="h-3 w-3" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* NOTE */}

        {selectedStatus && (
          <div
            className="
              mt-4
              animate-[fadeInUp_0.25s_ease-out_both]
            "
          >
            <label
              htmlFor="order-status-note"
              className="
                mb-2
                block
                text-xs
                font-semibold
                text-gray-600
              "
            >
              Ghi chú
              <span className="ml-1 font-normal text-gray-400">
                (không bắt buộc)
              </span>
            </label>

            <textarea
              id="order-status-note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder={
                selectedStatus === "CANCELLED"
                  ? "Nhập lý do hủy đơn..."
                  : "Nhập ghi chú cho lần cập nhật này..."
              }
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                px-3
                py-2.5
                text-sm
                text-gray-800
                outline-none
                transition-all
                duration-200
                placeholder:text-gray-400
                focus:border-black
                focus:bg-white
                focus:ring-2
                focus:ring-black/5
              "
            />
          </div>
        )}

        {/* ERROR */}

        {error && (
          <div
            className="
              mt-4
              flex
              items-start
              gap-2
              rounded-xl
              border
              border-red-200
              bg-red-50
              p-3
              text-sm
              text-red-700
              animate-[fadeInUp_0.25s_ease-out_both]
            "
          >
            <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />

            <p>{error}</p>
          </div>
        )}

        {/* ACTION */}

        {selectedStatus && (
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              disabled={loading}
              onClick={() => {
                setSelectedStatus(null);
                setNote("");
                setError("");
              }}
              className="
                h-10
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4
                text-sm
                font-semibold
                text-gray-600
                transition-all
                duration-200
                hover:bg-gray-50
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Hủy
            </button>

            <button
              type="button"
              disabled={loading}
              onClick={handleConfirmOpen}
              className="
                inline-flex
                h-10
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-black
                px-4
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-200
                hover:bg-gray-800
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <Check className="h-4 w-4" />
              Cập nhật trạng thái
            </button>
          </div>
        )}
      </div>

      {/* =====================================================
          CONFIRM MODAL
      ==================================================== */}

      {open && selectedStatus && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/40
            p-4
            backdrop-blur-sm
            animate-[fadeIn_0.2s_ease-out_both]
          "
          onMouseDown={() => {
            if (!loading) {
              setOpen(false);
            }
          }}
        >
          <div
            className="
              w-full
              max-w-md
              rounded-2xl
              bg-white
              p-5
              shadow-2xl
              animate-[scaleIn_0.2s_ease-out_both]
              sm:p-6
            "
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* ICON */}

            <div
              className="
                mb-4
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gray-100
              "
            >
              {selectedStatus === "CANCELLED" ? (
                <CircleAlert className="h-6 w-6 text-red-500" />
              ) : (
                <Check className="h-6 w-6 text-gray-700" />
              )}
            </div>

            {/* TITLE */}

            <h2 className="text-lg font-bold text-gray-900">
              Xác nhận cập nhật
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Bạn có chắc muốn chuyển đơn hàng{" "}
              <span className="font-semibold text-gray-800">{orderCode}</span>{" "}
              sang trạng thái{" "}
              <span className="font-semibold text-gray-800">
                {statusConfig[selectedStatus].label}
              </span>
              ?
            </p>

            {/* CANCEL WARNING */}

            {selectedStatus === "CANCELLED" && (
              <div
                className="
                  mt-4
                  rounded-xl
                  border
                  border-red-200
                  bg-red-50
                  p-3
                  text-xs
                  leading-5
                  text-red-700
                "
              >
                Hủy đơn có thể làm thay đổi số lượng tồn kho đã được reserve.
                Hãy kiểm tra kỹ trước khi xác nhận.
              </div>
            )}

            {/* BUTTON */}

            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                disabled={loading}
                onClick={() => setOpen(false)}
                className="
                  h-10
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  text-sm
                  font-semibold
                  text-gray-600
                  transition-all
                  hover:bg-gray-50
                  active:scale-95
                  disabled:opacity-50
                "
              >
                Quay lại
              </button>

              <button
                type="button"
                disabled={loading}
                onClick={handleUpdateStatus}
                className={`
                  inline-flex
                  h-10
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  px-4
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  active:scale-95
                  disabled:cursor-not-allowed
                  disabled:opacity-60

                  ${
                    selectedStatus === "CANCELLED"
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-black hover:bg-gray-800"
                  }
                `}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Đang cập nhật...
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4" />
                    Xác nhận
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
