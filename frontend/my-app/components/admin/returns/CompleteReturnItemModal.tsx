"use client";

import { useMemo, useState } from "react";
import { AlertCircle, CheckCircle2, PackageCheck, X } from "lucide-react";

interface ReturnItem {
  id: number;
  productName: string;
  image?: string;
  colorName?: string;
  sizeValue?: string;
  returnedQuantity: number;
}

interface Props {
  item: ReturnItem | null;
  open: boolean;
  loading?: boolean;
  onClose: () => void;
  onSubmit: (data: {
    normalQuantity: number;
    damagedQuantity: number;
    note?: string;
  }) => void;
}

export default function CompleteReturnItemModal({
  item,
  open,
  loading,
  onClose,
  onSubmit,
}: Props) {
  const [normalQuantity, setNormalQuantity] = useState(0);
  const [damagedQuantity, setDamagedQuantity] = useState(0);
  const [note, setNote] = useState("");

  const total = useMemo(
    () => normalQuantity + damagedQuantity,
    [normalQuantity, damagedQuantity],
  );

  if (!open || !item) return null;

  const valid = total === item.returnedQuantity;

  const handleSubmit = () => {
    if (!valid) return;

    onSubmit({
      normalQuantity,
      damagedQuantity,
      note: note.trim() || undefined,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div
        className="
          w-full max-w-lg
          overflow-hidden rounded-2xl
          bg-white shadow-2xl
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-5">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Kiểm tra hàng trả về
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Phân loại tình trạng sản phẩm
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X size={19} />
          </button>
        </div>

        <div className="space-y-5 p-5">
          {/* Product */}
          <div className="flex gap-4 rounded-xl bg-gray-50 p-4">
            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-white">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.productName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <PackageCheck size={24} className="text-gray-300" />
                </div>
              )}
            </div>

            <div>
              <p className="font-semibold text-gray-900">{item.productName}</p>

              <p className="mt-1 text-sm text-gray-500">
                Màu: {item.colorName || "—"}
              </p>

              <p className="text-sm text-gray-500">
                Size: {item.sizeValue || "—"}
              </p>

              <p className="mt-2 text-sm font-semibold">
                Số lượng trả:{" "}
                <span className="text-blue-600">{item.returnedQuantity}</span>
              </p>
            </div>
          </div>

          {/* Normal */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Hàng nguyên vẹn
            </label>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setNormalQuantity(Math.max(0, normalQuantity - 1))
                }
                className="h-10 w-10 rounded-lg border hover:bg-gray-50"
              >
                −
              </button>

              <input
                type="number"
                min={0}
                max={item.returnedQuantity}
                value={normalQuantity}
                onChange={(e) =>
                  setNormalQuantity(
                    Math.max(
                      0,
                      Math.min(item.returnedQuantity, Number(e.target.value)),
                    ),
                  )
                }
                className="
                  h-10 flex-1 rounded-lg
                  border border-gray-200
                  text-center outline-none
                  focus:border-gray-400
                "
              />

              <button
                type="button"
                onClick={() =>
                  setNormalQuantity(
                    Math.min(item.returnedQuantity, normalQuantity + 1),
                  )
                }
                className="h-10 w-10 rounded-lg border hover:bg-gray-50"
              >
                +
              </button>
            </div>

            <p className="mt-1 text-xs text-gray-400">
              Số lượng này sẽ được cộng lại vào tồn kho.
            </p>
          </div>

          {/* Damaged */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Hàng hư hỏng
            </label>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  setDamagedQuantity(Math.max(0, damagedQuantity - 1))
                }
                className="h-10 w-10 rounded-lg border hover:bg-gray-50"
              >
                −
              </button>

              <input
                type="number"
                min={0}
                max={item.returnedQuantity}
                value={damagedQuantity}
                onChange={(e) =>
                  setDamagedQuantity(
                    Math.max(
                      0,
                      Math.min(item.returnedQuantity, Number(e.target.value)),
                    ),
                  )
                }
                className="
                  h-10 flex-1 rounded-lg
                  border border-gray-200
                  text-center outline-none
                  focus:border-gray-400
                "
              />

              <button
                type="button"
                onClick={() =>
                  setDamagedQuantity(
                    Math.min(item.returnedQuantity, damagedQuantity + 1),
                  )
                }
                className="h-10 w-10 rounded-lg border hover:bg-gray-50"
              >
                +
              </button>
            </div>

            <p className="mt-1 text-xs text-gray-400">
              Số lượng này sẽ được đưa vào kho hàng hư hỏng.
            </p>
          </div>

          {/* Validation */}
          <div
            className={`
              flex items-center gap-3 rounded-xl
              border p-3 text-sm
              ${
                valid
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-amber-200 bg-amber-50 text-amber-700"
              }
            `}
          >
            {valid ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}

            <span>
              Đã phân loại: <strong>{total}</strong> /{" "}
              <strong>{item.returnedQuantity}</strong>
            </span>
          </div>

          {/* Note */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Ghi chú kiểm tra
            </label>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Ví dụ: Sản phẩm còn mới, hộp nguyên vẹn..."
              className="
                w-full resize-none rounded-xl
                border border-gray-200
                p-3 text-sm outline-none
                focus:border-gray-400
              "
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t bg-gray-50 p-4">
          <button
            onClick={onClose}
            className="
              rounded-xl border border-gray-200
              bg-white px-4 py-2.5
              text-sm font-medium
              hover:bg-gray-50
            "
          >
            Hủy
          </button>

          <button
            disabled={!valid || loading}
            onClick={handleSubmit}
            className="
              rounded-xl bg-black
              px-5 py-2.5
              text-sm font-medium text-white
              transition
              hover:bg-gray-800
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            {loading ? "Đang xử lý..." : "Hoàn tất xử lý"}
          </button>
        </div>
      </div>
    </div>
  );
}
