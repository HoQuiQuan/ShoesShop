"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Check,
  Loader2,
  Package,
  X,
} from "lucide-react";

import {
  InventoryItem,
  StockTransactionPayload,
} from "@/app/Api/Inventory.api";

interface Props {
  items: InventoryItem[];
  isLoading: boolean;

  isSubmitting: boolean;

  onStockIn: (payload: StockTransactionPayload) => Promise<void>;

  onStockOut: (payload: StockTransactionPayload) => Promise<void>;
}

type TransactionType = "IN" | "OUT";

const statusConfig = {
  IN_STOCK: {
    label: "Còn hàng",
    className: "bg-emerald-50 text-emerald-700",
  },

  LOW_STOCK: {
    label: "Sắp hết",
    className: "bg-amber-50 text-amber-700",
  },

  OUT_OF_STOCK: {
    label: "Hết hàng",
    className: "bg-red-50 text-red-700",
  },
} as const;

const stockInReasons = [
  "Nhập hàng từ nhà cung cấp",
  "Nhập hàng bổ sung",
  "Nhập hàng mới",
  "Khác",
];

const stockOutReasons = [
  "Xuất bán hàng",
  "Xuất hàng lỗi",
  "Xuất hàng hỏng",
  "Xuất kho nội bộ",
  "Khác",
];

export default function InventoryTable({
  items,
  isLoading,
  isSubmitting,
  onStockIn,
  onStockOut,
}: Props) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const [transactionType, setTransactionType] =
    useState<TransactionType | null>(null);

  const [quantity, setQuantity] = useState("");

  const [reason, setReason] = useState("");

  const [note, setNote] = useState("");

  const [error, setError] = useState("");

  const resetForm = () => {
    setExpandedId(null);
    setTransactionType(null);
    setQuantity("");
    setReason("");
    setNote("");
    setError("");
  };

  const openTransaction = (item: InventoryItem, type: TransactionType) => {
    setExpandedId(item.productDetailId);
    setTransactionType(type);
    setQuantity("");
    setReason("");
    setNote("");
    setError("");
  };

  const handleSubmit = async (item: InventoryItem) => {
    if (!transactionType) {
      return;
    }

    const parsedQuantity = Number(quantity);

    /**
     * ============================
     * VALIDATION
     * ============================
     */

    if (!quantity || !Number.isInteger(parsedQuantity) || parsedQuantity <= 0) {
      setError("Số lượng phải là số nguyên lớn hơn 0.");
      return;
    }

    if (transactionType === "OUT" && parsedQuantity > item.available) {
      setError(
        `Số lượng xuất không được vượt quá tồn khả dụng (${item.available}).`,
      );
      return;
    }

    if (!reason.trim()) {
      setError("Vui lòng chọn lý do.");
      return;
    }

    const payload: StockTransactionPayload = {
      productDetailId: item.productDetailId,
      quantity: parsedQuantity,
      reason: reason.trim(),
      note: note.trim() || undefined,
    };

    try {
      setError("");

      if (transactionType === "IN") {
        await onStockIn(payload);
      } else {
        await onStockOut(payload);
      }

      resetForm();
    } catch (error: any) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          "Không thể thực hiện giao dịch kho.",
      );
    }
  };

  if (isLoading) {
    return (
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
        <div className="animate-pulse">
          <div className="h-12 bg-zinc-100" />

          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-20 border-t border-zinc-100 bg-white"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1200px]">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50">
              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Sản phẩm
              </th>

              <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Phân loại
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Tổng kho
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Đang giữ
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Khả dụng
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Trạng thái
              </th>

              <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Thao tác
              </th>
            </tr>
          </thead>

          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-20 text-center">
                  <Package size={40} className="mx-auto text-zinc-300" />

                  <p className="mt-3 text-sm font-medium text-zinc-700">
                    Không tìm thấy sản phẩm
                  </p>
                </td>
              </tr>
            ) : (
              items.map((item) => {
                const status = statusConfig[item.status];

                const isExpanded = expandedId === item.productDetailId;

                return (
                  <Fragment key={item.productDetailId}>
                    <tr
                      key={item.productDetailId}
                      className={`border-b border-zinc-100 transition ${
                        isExpanded ? "bg-zinc-50" : "hover:bg-zinc-50"
                      }`}
                    >
                      {/* PRODUCT */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-zinc-100">
                            {item.img ? (
                              <Image
                                src={item.img}
                                alt={item.productName}
                                fill
                                sizes="48px"
                                className="object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center">
                                <Package size={18} className="text-zinc-400" />
                              </div>
                            )}
                          </div>

                          <div className="min-w-0">
                            <p className="max-w-[280px] truncate text-sm font-semibold text-zinc-900">
                              {item.productName}
                            </p>

                            <p className="mt-1 text-xs text-zinc-500">
                              ID variant: {item.productDetailId}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* VARIANT */}
                      <td className="px-5 py-4">
                        <div className="text-sm text-zinc-700">
                          {item.colorName}
                        </div>

                        <div className="mt-1 text-xs text-zinc-500">
                          Size {item.sizeValue}
                        </div>
                      </td>

                      {/* QUANTITY */}
                      <td className="px-5 py-4 text-center">
                        <span className="font-semibold text-zinc-900">
                          {item.quantity}
                        </span>
                      </td>

                      {/* RESERVED */}
                      <td className="px-5 py-4 text-center">
                        <span className="font-semibold text-amber-600">
                          {item.reserved}
                        </span>
                      </td>

                      {/* AVAILABLE */}
                      <td className="px-5 py-4 text-center">
                        <span className="font-bold text-zinc-900">
                          {item.available}
                        </span>
                      </td>

                      {/* STATUS */}
                      <td className="px-5 py-4 text-center">
                        <span
                          className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${status.className}`}
                        >
                          {status.label}
                        </span>
                      </td>

                      {/* ACTION */}
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            disabled={isSubmitting}
                            onClick={() => openTransaction(item, "IN")}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <ArrowDownToLine size={15} />
                            Nhập
                          </button>

                          <button
                            type="button"
                            disabled={isSubmitting || item.available <= 0}
                            onClick={() => openTransaction(item, "OUT")}
                            className="inline-flex items-center gap-1.5 rounded-xl bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <ArrowUpFromLine size={15} />
                            Xuất
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* TRANSACTION FORM */}
                    <AnimatePresence>
                      {isExpanded && transactionType && (
                        <motion.tr
                          key={`form-${item.productDetailId}`}
                          initial={{
                            opacity: 0,
                          }}
                          animate={{
                            opacity: 1,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                        >
                          <td
                            colSpan={7}
                            className="border-b border-zinc-200 bg-zinc-50 px-5 py-5"
                          >
                            <motion.div
                              initial={{
                                opacity: 0,
                                y: -8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                            >
                              {/* FORM HEADER */}
                              <div className="flex items-start justify-between gap-4">
                                <div>
                                  <div className="flex items-center gap-2">
                                    {transactionType === "IN" ? (
                                      <ArrowDownToLine
                                        size={18}
                                        className="text-emerald-600"
                                      />
                                    ) : (
                                      <ArrowUpFromLine
                                        size={18}
                                        className="text-red-600"
                                      />
                                    )}

                                    <h3 className="text-sm font-bold text-zinc-900">
                                      {transactionType === "IN"
                                        ? "Nhập kho"
                                        : "Xuất kho"}
                                    </h3>
                                  </div>

                                  <p className="mt-1 text-xs text-zinc-500">
                                    {item.productName} · {item.colorName} · Size{" "}
                                    {item.sizeValue}
                                  </p>
                                </div>

                                <button
                                  type="button"
                                  onClick={resetForm}
                                  disabled={isSubmitting}
                                  className="rounded-lg p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-zinc-700"
                                >
                                  <X size={18} />
                                </button>
                              </div>

                              {/* FORM */}
                              <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
                                {/* QUANTITY */}
                                <div>
                                  <label className="mb-2 block text-xs font-semibold text-zinc-700">
                                    Số lượng
                                  </label>

                                  <input
                                    type="number"
                                    min={1}
                                    max={
                                      transactionType === "OUT"
                                        ? item.available
                                        : undefined
                                    }
                                    value={quantity}
                                    disabled={isSubmitting}
                                    onChange={(e) =>
                                      setQuantity(e.target.value)
                                    }
                                    placeholder="Nhập số lượng"
                                    className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 disabled:bg-zinc-100"
                                  />

                                  {transactionType === "OUT" && (
                                    <p className="mt-1.5 text-xs text-zinc-500">
                                      Khả dụng:{" "}
                                      <span className="font-semibold text-zinc-700">
                                        {item.available}
                                      </span>
                                    </p>
                                  )}
                                </div>

                                {/* REASON */}
                                <div>
                                  <label className="mb-2 block text-xs font-semibold text-zinc-700">
                                    Lý do
                                  </label>

                                  <select
                                    value={reason}
                                    disabled={isSubmitting}
                                    onChange={(e) => setReason(e.target.value)}
                                    className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 disabled:bg-zinc-100"
                                  >
                                    <option value="">Chọn lý do</option>

                                    {(transactionType === "IN"
                                      ? stockInReasons
                                      : stockOutReasons
                                    ).map((itemReason) => (
                                      <option
                                        key={itemReason}
                                        value={itemReason}
                                      >
                                        {itemReason}
                                      </option>
                                    ))}
                                  </select>
                                </div>

                                {/* NOTE */}
                                <div>
                                  <label className="mb-2 block text-xs font-semibold text-zinc-700">
                                    Ghi chú
                                    <span className="ml-1 font-normal text-zinc-400">
                                      (tuỳ chọn)
                                    </span>
                                  </label>

                                  <input
                                    type="text"
                                    value={note}
                                    disabled={isSubmitting}
                                    onChange={(e) => setNote(e.target.value)}
                                    placeholder="Ghi chú thêm..."
                                    className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-zinc-900 focus:ring-2 focus:ring-zinc-900/10 disabled:bg-zinc-100"
                                  />
                                </div>
                              </div>

                              {/* ERROR */}
                              {error && (
                                <div className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs font-medium text-red-600">
                                  {error}
                                </div>
                              )}

                              {/* FOOTER */}
                              <div className="mt-5 flex flex-col-reverse justify-end gap-2 sm:flex-row">
                                <button
                                  type="button"
                                  disabled={isSubmitting}
                                  onClick={resetForm}
                                  className="inline-flex h-10 items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  <X size={15} />
                                  Hủy
                                </button>

                                <button
                                  type="button"
                                  disabled={isSubmitting}
                                  onClick={() => handleSubmit(item)}
                                  className={`inline-flex h-10 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-50 ${
                                    transactionType === "IN"
                                      ? "bg-emerald-600 hover:bg-emerald-700"
                                      : "bg-red-600 hover:bg-red-700"
                                  }`}
                                >
                                  {isSubmitting ? (
                                    <Fragment key={item.productDetailId}>
                                      <Loader2
                                        size={15}
                                        className="animate-spin"
                                      />
                                      Đang xử lý...
                                    </Fragment>
                                  ) : (
                                    <Fragment key={item.productDetailId}>
                                      <Check size={15} />
                                      Xác nhận{" "}
                                      {transactionType === "IN"
                                        ? "nhập kho"
                                        : "xuất kho"}
                                    </Fragment>
                                  )}
                                </button>
                              </div>
                            </motion.div>
                          </td>
                        </motion.tr>
                      )}
                    </AnimatePresence>
                  </Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
