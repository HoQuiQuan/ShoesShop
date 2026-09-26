"use client";

import { Fragment, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Check,
  ChevronDown,
  Loader2,
  Package,
  Search,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type TransactionType = "IN" | "OUT";

export interface InventoryItem {
  id: number;
  productDetailId: number;

  productName: string;
  productImage?: string | null;

  sku?: string | null;
  size?: string | null;
  color?: string | null;

  quantity: number;
  reserved: number;
}

export interface StockTransactionPayload {
  productDetailId: number;
  quantity: number;
  reason: string;
  note?: string;
}

interface StockTransactionTableProps {
  items: InventoryItem[];

  isSubmitting?: boolean;

  onSubmit: (
    type: TransactionType,
    payload: StockTransactionPayload,
  ) => Promise<void> | void;

  onCancel?: () => void;
}

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const IN_REASONS = [
  "Nhập hàng mới",
  "Nhập bổ sung",
  "Hàng khách trả lại",
  "Điều chuyển kho",
  "Khác",
];

const OUT_REASONS = [
  "Xuất bán hàng",
  "Điều chuyển kho",
  "Hàng hư hỏng",
  "Hàng thất thoát",
  "Khác",
];

/* -------------------------------------------------------------------------- */
/* Main Component                                                             */
/* -------------------------------------------------------------------------- */

export default function StockTransactionTable({
  items,
  isSubmitting = false,
  onSubmit,
  onCancel,
}: StockTransactionTableProps) {
  const [search, setSearch] = useState("");

  const [openedProductId, setOpenedProductId] = useState<number | null>(null);

  const [transactionType, setTransactionType] = useState<TransactionType>("IN");

  const [quantity, setQuantity] = useState("");

  const [reason, setReason] = useState("");

  const [note, setNote] = useState("");

  const [error, setError] = useState("");

  /* ---------------------------------------------------------------------- */
  /* Filter                                                                 */
  /* ---------------------------------------------------------------------- */

  const filteredItems = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    if (!keyword) {
      return items;
    }

    return items.filter((item) => {
      return (
        item.productName.toLowerCase().includes(keyword) ||
        item.sku?.toLowerCase().includes(keyword) ||
        item.size?.toLowerCase().includes(keyword) ||
        item.color?.toLowerCase().includes(keyword)
      );
    });
  }, [items, search]);

  /* ---------------------------------------------------------------------- */
  /* Open transaction                                                       */
  /* ---------------------------------------------------------------------- */

  const openTransaction = (item: InventoryItem, type: TransactionType) => {
    setOpenedProductId(item.productDetailId);

    setTransactionType(type);

    setQuantity("");

    setReason("");

    setNote("");

    setError("");
  };

  /* ---------------------------------------------------------------------- */
  /* Close transaction                                                      */
  /* ---------------------------------------------------------------------- */

  const closeTransaction = () => {
    setOpenedProductId(null);

    setQuantity("");

    setReason("");

    setNote("");

    setError("");

    onCancel?.();
  };

  /* ---------------------------------------------------------------------- */
  /* Change type                                                            */
  /* ---------------------------------------------------------------------- */

  const changeTransactionType = (type: TransactionType) => {
    setTransactionType(type);

    setQuantity("");

    setReason("");

    setNote("");

    setError("");
  };

  /* ---------------------------------------------------------------------- */
  /* Submit                                                                 */
  /* ---------------------------------------------------------------------- */

  const handleSubmit = async () => {
    const item = items.find((item) => item.productDetailId === openedProductId);

    if (!item) return;

    setError("");

    const parsedQuantity = Number(quantity);

    if (!Number.isInteger(parsedQuantity) || parsedQuantity <= 0) {
      setError("Số lượng phải là số nguyên lớn hơn 0.");

      return;
    }

    if (!reason) {
      setError("Vui lòng chọn lý do.");

      return;
    }

    const available = item.quantity - item.reserved;

    if (transactionType === "OUT" && parsedQuantity > available) {
      setError(
        `Không thể xuất ${parsedQuantity} sản phẩm. Chỉ còn ${available} sản phẩm có thể bán.`,
      );

      return;
    }

    try {
      await onSubmit(transactionType, {
        productDetailId: item.productDetailId,
        quantity: parsedQuantity,
        reason,
        note: note.trim() || undefined,
      });

      closeTransaction();
    } catch {
      // Parent xử lý AlertContainer.
      // Không đóng form nếu API lỗi.
    }
  };

  return (
    <div className="space-y-4">
      {/* ================================================================== */}
      {/* Search                                                             */}
      {/* ================================================================== */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <Search
            size={18}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tìm sản phẩm, SKU, size, màu..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              pl-10
              pr-4
              text-sm
              text-slate-700
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-slate-400
              focus:ring-2
              focus:ring-slate-100
            "
          />
        </div>

        <div className="text-sm text-slate-500">
          <span className="font-semibold text-slate-700">
            {filteredItems.length}
          </span>{" "}
          sản phẩm
        </div>
      </div>

      {/* ================================================================== */}
      {/* Desktop                                                            */}
      {/* ================================================================== */}

      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Sản phẩm
                </th>

                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Size
                </th>

                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Màu
                </th>

                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Tồn kho
                </th>

                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Đã giữ
                </th>

                <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Có thể bán
                </th>

                <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Thao tác
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredItems.map((item) => {
                const isOpen = openedProductId === item.productDetailId;

                const available = item.quantity - item.reserved;

                return (
                  <Fragment key={item.productDetailId}>
                    {/* ---------------------------------------------------- */}
                    {/* Product Row                                          */}
                    {/* ---------------------------------------------------- */}

                    <tr
                      className={`
                        border-b
                        border-slate-100
                        transition-colors
                        ${isOpen ? "bg-slate-50" : "hover:bg-slate-50/70"}
                      `}
                    >
                      {/* Product */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <ProductImage
                            src={item.productImage}
                            name={item.productName}
                          />

                          <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-slate-800">
                              {item.productName}
                            </p>

                            <p className="mt-1 text-xs text-slate-400">
                              SKU: {item.sku || "-"}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Size */}
                      <td className="px-4 py-4 text-center text-sm text-slate-600">
                        {item.size || "-"}
                      </td>

                      {/* Color */}
                      <td className="px-4 py-4 text-center text-sm text-slate-600">
                        {item.color || "-"}
                      </td>

                      {/* Quantity */}
                      <td className="px-4 py-4 text-center">
                        <span className="font-semibold text-slate-800">
                          {item.quantity}
                        </span>
                      </td>

                      {/* Reserved */}
                      <td className="px-4 py-4 text-center">
                        <span className="font-semibold text-amber-600">
                          {item.reserved}
                        </span>
                      </td>

                      {/* Available */}
                      <td className="px-4 py-4 text-center">
                        <span
                          className={`
                            font-semibold
                            ${
                              available <= 0
                                ? "text-red-600"
                                : available <= 5
                                  ? "text-orange-600"
                                  : "text-emerald-600"
                            }
                          `}
                        >
                          {available}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={() => openTransaction(item, "IN")}
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-lg
                              bg-emerald-50
                              px-3
                              py-2
                              text-xs
                              font-semibold
                              text-emerald-700
                              transition
                              hover:bg-emerald-100
                            "
                          >
                            <ArrowDownToLine size={15} />
                            Nhập
                          </button>

                          <button
                            type="button"
                            onClick={() => openTransaction(item, "OUT")}
                            className="
                              inline-flex
                              items-center
                              gap-1.5
                              rounded-lg
                              bg-orange-50
                              px-3
                              py-2
                              text-xs
                              font-semibold
                              text-orange-700
                              transition
                              hover:bg-orange-100
                            "
                          >
                            <ArrowUpFromLine size={15} />
                            Xuất
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* ---------------------------------------------------- */}
                    {/* Expanded Form                                        */}
                    {/* ---------------------------------------------------- */}

                    <AnimatePresence>
                      {isOpen && (
                        <tr>
                          <td
                            colSpan={7}
                            className="border-b border-slate-200 bg-slate-50 p-5"
                          >
                            <TransactionForm
                              item={item}
                              type={transactionType}
                              quantity={quantity}
                              reason={reason}
                              note={note}
                              error={error}
                              isSubmitting={isSubmitting}
                              available={available}
                              onQuantityChange={setQuantity}
                              onReasonChange={setReason}
                              onNoteChange={setNote}
                              onSubmit={handleSubmit}
                              onCancel={closeTransaction}
                              onChangeType={changeTransactionType}
                            />
                          </td>
                        </tr>
                      )}
                    </AnimatePresence>
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* ================================================================== */}
      {/* Mobile                                                             */}
      {/* ================================================================== */}

      <div className="space-y-3 md:hidden">
        {filteredItems.map((item) => {
          const isOpen = openedProductId === item.productDetailId;

          const available = item.quantity - item.reserved;

          return (
            <motion.div
              key={item.productDetailId}
              layout
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Card */}
              <div className="p-4">
                <div className="flex gap-3">
                  <ProductImage
                    src={item.productImage}
                    name={item.productName}
                  />

                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-slate-800">
                      {item.productName}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      SKU: {item.sku || "-"}
                    </p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                        Size: {item.size || "-"}
                      </span>

                      <span className="rounded-md bg-slate-100 px-2 py-1 text-xs text-slate-600">
                        Màu: {item.color || "-"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <StockStat label="Tồn kho" value={item.quantity} />

                  <StockStat label="Đã giữ" value={item.reserved} />

                  <StockStat label="Có thể bán" value={available} />
                </div>

                {/* Buttons */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => openTransaction(item, "IN")}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-emerald-50
                      px-3
                      py-2.5
                      text-sm
                      font-semibold
                      text-emerald-700
                      transition
                      hover:bg-emerald-100
                    "
                  >
                    <ArrowDownToLine size={16} />
                    Nhập kho
                  </button>

                  <button
                    type="button"
                    onClick={() => openTransaction(item, "OUT")}
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-orange-50
                      px-3
                      py-2.5
                      text-sm
                      font-semibold
                      text-orange-700
                      transition
                      hover:bg-orange-100
                    "
                  >
                    <ArrowUpFromLine size={16} />
                    Xuất kho
                  </button>
                </div>
              </div>

              {/* Mobile form */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      height: 0,
                    }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                    }}
                    exit={{
                      opacity: 0,
                      height: 0,
                    }}
                    className="border-t border-slate-200 bg-slate-50"
                  >
                    <div className="p-4">
                      <TransactionForm
                        item={item}
                        type={transactionType}
                        quantity={quantity}
                        reason={reason}
                        note={note}
                        error={error}
                        isSubmitting={isSubmitting}
                        available={available}
                        onQuantityChange={setQuantity}
                        onReasonChange={setReason}
                        onNoteChange={setNote}
                        onSubmit={handleSubmit}
                        onCancel={closeTransaction}
                        onChangeType={changeTransactionType}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* ================================================================== */}
      {/* Empty state                                                        */}
      {/* ================================================================== */}

      {filteredItems.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
          <Package size={34} className="mx-auto text-slate-300" />

          <p className="mt-3 text-sm font-semibold text-slate-600">
            Không tìm thấy sản phẩm
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Thử tìm kiếm bằng tên sản phẩm hoặc SKU.
          </p>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Transaction Form                                                           */
/* -------------------------------------------------------------------------- */

interface TransactionFormProps {
  item: InventoryItem;

  type: TransactionType;

  quantity: string;
  reason: string;
  note: string;

  error: string;

  isSubmitting: boolean;

  available: number;

  onQuantityChange: (value: string) => void;

  onReasonChange: (value: string) => void;

  onNoteChange: (value: string) => void;

  onSubmit: () => void;

  onCancel: () => void;

  onChangeType: (type: TransactionType) => void;
}

function TransactionForm({
  item,
  type,
  quantity,
  reason,
  note,
  error,
  isSubmitting,
  available,
  onQuantityChange,
  onReasonChange,
  onNoteChange,
  onSubmit,
  onCancel,
  onChangeType,
}: TransactionFormProps) {
  const reasons = type === "IN" ? IN_REASONS : OUT_REASONS;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
    >
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            {type === "IN" ? (
              <ArrowDownToLine size={18} className="text-emerald-600" />
            ) : (
              <ArrowUpFromLine size={18} className="text-orange-600" />
            )}

            <h3 className="text-sm font-bold text-slate-800">
              {type === "IN" ? "Nhập kho" : "Xuất kho"}
            </h3>
          </div>

          <p className="mt-1 text-xs text-slate-500">{item.productName}</p>
        </div>

        {/* Switch */}
        <div className="flex w-fit rounded-xl bg-slate-100 p-1">
          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => onChangeType("IN")}
            className={`
              rounded-lg
              px-3
              py-1.5
              text-xs
              font-semibold
              transition
              ${
                type === "IN"
                  ? "bg-white text-emerald-700 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            Nhập
          </button>

          <button
            type="button"
            disabled={isSubmitting}
            onClick={() => onChangeType("OUT")}
            className={`
              rounded-lg
              px-3
              py-1.5
              text-xs
              font-semibold
              transition
              ${
                type === "OUT"
                  ? "bg-white text-orange-700 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }
            `}
          >
            Xuất
          </button>
        </div>
      </div>

      {/* Current stock */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Info label="Tồn kho" value={item.quantity} />

        <Info label="Đã giữ" value={item.reserved} />

        <Info label="Có thể bán" value={available} />

        <Info label="SKU" value={item.sku || "-"} />
      </div>

      {/* Inputs */}
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {/* Quantity */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">
            Số lượng
          </label>

          <input
            type="number"
            min={1}
            max={type === "OUT" ? available : undefined}
            value={quantity}
            disabled={isSubmitting}
            onChange={(e) => onQuantityChange(e.target.value)}
            placeholder="Nhập số lượng"
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3
              text-sm
              outline-none
              transition
              focus:border-slate-400
              focus:ring-2
              focus:ring-slate-100
              disabled:bg-slate-50
            "
          />

          {type === "OUT" && (
            <p className="mt-1 text-xs text-slate-400">
              Tối đa có thể xuất:{" "}
              <span className="font-semibold">{available}</span>
            </p>
          )}
        </div>

        {/* Reason */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">
            Lý do
          </label>

          <div className="relative">
            <select
              value={reason}
              disabled={isSubmitting}
              onChange={(e) => onReasonChange(e.target.value)}
              className="
                h-11
                w-full
                appearance-none
                rounded-xl
                border
                border-slate-200
                bg-white
                px-3
                pr-9
                text-sm
                text-slate-700
                outline-none
                transition
                focus:border-slate-400
                focus:ring-2
                focus:ring-slate-100
                disabled:bg-slate-50
              "
            >
              <option value="">Chọn lý do</option>

              {reasons.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>

        {/* Note */}
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-slate-600">
            Ghi chú
          </label>

          <input
            value={note}
            disabled={isSubmitting}
            onChange={(e) => onNoteChange(e.target.value)}
            placeholder="Ghi chú thêm..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-white
              px-3
              text-sm
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-slate-400
              focus:ring-2
              focus:ring-slate-100
              disabled:bg-slate-50
            "
          />
        </div>
      </div>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{
              opacity: 0,
              y: -5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -5,
            }}
            className="
              mt-4
              rounded-xl
              border
              border-red-100
              bg-red-50
              px-3
              py-2.5
              text-sm
              text-red-600
            "
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actions */}
      <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          disabled={isSubmitting}
          onClick={onCancel}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            py-2.5
            text-sm
            font-semibold
            text-slate-600
            transition
            hover:bg-slate-50
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <X size={16} />
          Hủy
        </button>

        <button
          type="button"
          disabled={isSubmitting}
          onClick={onSubmit}
          className={`
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            px-4
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            disabled:cursor-not-allowed
            disabled:opacity-50
            ${
              type === "IN"
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-orange-600 hover:bg-orange-700"
            }
          `}
        >
          {isSubmitting ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Check size={16} />
          )}

          {type === "IN" ? "Xác nhận nhập kho" : "Xác nhận xuất kho"}
        </button>
      </div>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/* Product Image                                                              */
/* -------------------------------------------------------------------------- */

function ProductImage({ src, name }: { src?: string | null; name: string }) {
  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-100">
      {src ? (
        <img src={src} alt={name} className="h-full w-full object-cover" />
      ) : (
        <Package size={20} className="text-slate-400" />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Stock Stat                                                                 */
/* -------------------------------------------------------------------------- */

function StockStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-slate-50 p-2.5 text-center">
      <p className="text-[10px] font-medium uppercase text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-slate-700">{value}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Info                                                                       */
/* -------------------------------------------------------------------------- */

function Info({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-xl bg-slate-50 px-3 py-2.5">
      <p className="text-[10px] font-medium uppercase text-slate-400">
        {label}
      </p>

      <p className="mt-1 truncate text-sm font-semibold text-slate-700">
        {value}
      </p>
    </div>
  );
}
