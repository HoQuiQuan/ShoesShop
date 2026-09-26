"use client";

import { useState } from "react";

import {
  X,
  User,
  Phone,
  FileText,
  PackageCheck,
  ChevronRight,
  Check,
  Truck,
  PackageOpen,
  SearchCheck,
  CircleX,
  CircleCheck,
  Loader2,
} from "lucide-react";

import ReturnStatusBadge from "./ReturnStatusBadge";
import ReturnTimeline from "./ReturnTimeline";
import CompleteReturnItemModal from "./CompleteReturnItemModal";

import { ReturnRequestStatus } from "@/app/Api/ReturnRequest";

interface ReturnItem {
  id: number;
  productName: string;
  image?: string;
  colorName?: string;
  sizeValue?: string;
  returnedQuantity: number;
  normalQuantity?: number;
  damagedQuantity?: number;
  status?: string;
}

interface ReturnRequest {
  id: number;
  orderCode: string;

  customer: {
    name: string;
    phone: string;
  };

  reason: string;
  note?: string;

  status: ReturnRequestStatus;

  items: ReturnItem[];
}

interface Props {
  data: ReturnRequest | null;

  open: boolean;

  onClose: () => void;

  onCompleteItem: (
    itemId: number,
    data: {
      normalQuantity: number;
      damagedQuantity: number;
      note?: string;
    },
  ) => void;

  // onChangeStatus: (status: ReturnRequestStatus, note?: string) => void;
  onChangeStatus_Approve: (id: number) => void;
  onChangeStatus_Receive: (id: number) => void;
  onChangeStatus_Reject: (id: number) => void;
  onChangeStatus_Shipping: (id: number) => void;
  onChangeStatus_Inspecting: (id: number) => void;

  loading?: boolean;
  statusLoading?: boolean;
}

export default function ReturnDetailModal({
  data,
  open,
  onClose,
  onCompleteItem,
  // onChangeStatus,
  onChangeStatus_Approve,
  onChangeStatus_Shipping,
  onChangeStatus_Receive,
  onChangeStatus_Reject,
  onChangeStatus_Inspecting,
  loading,
  statusLoading,
}: Props) {
  const [selectedItem, setSelectedItem] = useState<ReturnItem | null>(null);

  if (!open || !data) return null;

  /*
   * =========================================================
   * STATUS
   * =========================================================
   */

  const status = data.status;

  /*
   * Có thể kiểm tra từng item khi:
   *
   * RECEIVED
   * hoặc
   * INSPECTING
   */

  const canInspect = status === "RECEIVED" || status === "INSPECTING";

  /*
   * =========================================================
   * ACTION BUTTONS
   * =========================================================
   */

  const renderStatusActions = () => {
    if (statusLoading) {
      return (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Loader2 size={16} className="animate-spin" />
          Đang xử lý...
        </div>
      );
    }

    /*
     * PENDING
     *
     * Admin mới nhận yêu cầu.
     */
    if (status == "PENDING") {
      return (
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => onChangeStatus_Approve(data.id)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-black
              px-4
              py-2.5
              text-sm
              font-medium
              text-white
              transition
              hover:bg-gray-800
            "
          >
            <Check size={16} />
            Duyệt yêu cầu
          </button>

          <button
            onClick={() => onChangeStatus_Reject(data.id)}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-red-200
              bg-red-50
              px-4
              py-2.5
              text-sm
              font-medium
              text-red-600
              transition
              hover:bg-red-100
            "
          >
            <CircleX size={16} />
            Từ chối
          </button>
        </div>
      );
    }

    /*
     * APPROVED
     *
     * Khách đã được duyệt trả hàng.
     *
     * Admin chuyển sang SHIPPING khi
     * hàng đang được gửi về.
     */

    if (status === "APPROVED") {
      return (
        <button
          onClick={() => onChangeStatus_Shipping(data.id)}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-black
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-gray-800
          "
        >
          <Truck size={16} />
          Đang vận chuyển
        </button>
      );
    }

    /*
     * SHIPPING
     *
     * Hàng đang trên đường về shop.
     */

    if (status === "SHIPPING") {
      return (
        <button
          onClick={() => onChangeStatus_Receive(data.id)}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-black
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-gray-800
          "
        >
          <PackageOpen size={16} />
          Xác nhận đã nhận hàng
        </button>
      );
    }

    /*
     * RECEIVED
     *
     * Shop đã nhận hàng.
     * Chuyển sang INSPECTING.
     */

    if (status === "RECEIVED") {
      return (
        <button
          onClick={() => onChangeStatus_Inspecting(data.id)}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-black
            px-4
            py-2.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-gray-800
          "
        >
          <SearchCheck size={16} />
          Bắt đầu kiểm tra
        </button>
      );
    }

    /*
     * INSPECTING
     *
     * Không cần action trạng thái ở đây.
     * Admin xử lý từng item.
     */

    if (status === "INSPECTING") {
      return (
        <div className="flex items-center gap-2 rounded-xl bg-amber-50 px-4 py-2.5 text-sm font-medium text-amber-700">
          <SearchCheck size={16} />
          Đang kiểm tra sản phẩm
        </div>
      );
    }

    /*
     * COMPLETED
     */

    if (status === "COMPLETED") {
      return (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-2.5 text-sm font-medium text-emerald-700">
          <CircleCheck size={16} />
          Đã hoàn tất
        </div>
      );
    }

    /*
     * REJECTED
     */

    if (status === "REJECTED") {
      return (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
          <CircleX size={16} />
          Yêu cầu đã bị từ chối
        </div>
      );
    }

    return null;
  };

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
        <div className="flex h-full items-center justify-center p-4">
          <div
            className="
              flex
              h-[92vh]
              w-full
              max-w-5xl
              flex-col
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-2xl
            "
          >
            {/* =================================================
                HEADER
            ================================================= */}

            <div className="flex items-center justify-between border-b px-6 py-5">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h2 className="text-xl font-bold text-gray-900">
                    Yêu cầu trả hàng #{data.id}
                  </h2>

                  <ReturnStatusBadge status={data.status} />
                </div>

                <p className="mt-1 text-sm text-gray-500">
                  Đơn hàng {data.orderCode}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-xl p-2 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {/* =================================================
                CONTENT
            ================================================= */}

            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-6">
                {/* =================================================
                    TIMELINE
                ================================================= */}

                <section className="rounded-2xl border border-gray-100 p-5">
                  <h3 className="mb-6 font-semibold text-gray-900">
                    Tiến trình xử lý
                  </h3>

                  <ReturnTimeline status={data.status} />
                </section>

                {/* =================================================
                    CUSTOMER
                ================================================= */}

                <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-gray-100 p-5">
                    <div className="mb-4 flex items-center gap-2">
                      <User size={18} />

                      <h3 className="font-semibold">Thông tin khách hàng</h3>
                    </div>

                    <p className="font-medium">{data.customer.name}</p>

                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <Phone size={15} />

                      {data.customer.phone}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-gray-100 p-5">
                    <div className="mb-4 flex items-center gap-2">
                      <FileText size={18} />

                      <h3 className="font-semibold">Lý do trả hàng</h3>
                    </div>

                    <p className="text-sm text-gray-700">{data.reason}</p>

                    {data.note && (
                      <p className="mt-2 text-sm text-gray-500">{data.note}</p>
                    )}
                  </div>
                </section>

                {/* =================================================
                    ITEMS
                ================================================= */}

                <section>
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">
                      Sản phẩm trả về
                    </h3>

                    <span className="text-sm text-gray-500">
                      {data.items.length} sản phẩm
                    </span>
                  </div>

                  <div className="space-y-3">
                    {data.items.map((item) => {
                      const completed = item.status === "COMPLETED";

                      return (
                        <div
                          key={item.id}
                          className="
                            rounded-2xl
                            border
                            border-gray-100
                            bg-white
                            p-4
                            shadow-sm
                          "
                        >
                          <div className="flex items-center gap-4">
                            {/* IMAGE */}

                            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-50">
                              {item.image ? (
                                <img
                                  src={item.image}
                                  alt={item.productName}
                                  className="h-full w-full object-cover"
                                />
                              ) : (
                                <div className="flex h-full items-center justify-center">
                                  <PackageCheck
                                    size={25}
                                    className="text-gray-300"
                                  />
                                </div>
                              )}
                            </div>

                            {/* INFO */}

                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-gray-900">
                                {item.productName}
                              </p>

                              <div className="mt-1 flex flex-wrap gap-3 text-sm text-gray-500">
                                <span>Màu: {item.colorName || "—"}</span>

                                <span>Size: {item.sizeValue || "—"}</span>

                                <span>SL: {item.returnedQuantity}</span>
                              </div>

                              {completed && (
                                <div className="mt-2 text-xs text-emerald-600">
                                  Nguyên vẹn: {item.normalQuantity || 0}
                                  {" • "}
                                  Hư hỏng: {item.damagedQuantity || 0}
                                </div>
                              )}
                            </div>

                            {/* ACTION */}

                            {canInspect && !completed && (
                              <button
                                onClick={() => setSelectedItem(item)}
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-black
                                    px-4
                                    py-2.5
                                    text-sm
                                    font-medium
                                    text-white
                                    transition
                                    hover:bg-gray-800
                                  "
                              >
                                Kiểm tra
                                <ChevronRight size={16} />
                              </button>
                            )}

                            {completed && (
                              <span className="rounded-xl bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
                                Đã xử lý
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>

            {/* =================================================
                FOOTER ACTION
            ================================================= */}

            <div className="flex flex-col gap-3 border-t bg-gray-50/70 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs text-gray-500">
                {status === "PENDING" &&
                  "Kiểm tra thông tin trước khi duyệt yêu cầu."}

                {status === "APPROVED" &&
                  "Xác nhận khi khách đã gửi sản phẩm trả về."}

                {status === "SHIPPING" &&
                  "Xác nhận khi shop đã nhận được hàng."}

                {status === "RECEIVED" &&
                  "Bắt đầu kiểm tra tình trạng sản phẩm."}

                {status === "INSPECTING" &&
                  "Kiểm tra và phân loại từng sản phẩm."}

                {status === "COMPLETED" && "Quá trình trả hàng đã hoàn tất."}

                {status === "REJECTED" && "Yêu cầu trả hàng đã kết thúc."}
              </p>

              <div className="flex justify-end">{renderStatusActions()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          COMPLETE ITEM MODAL
      ================================================= */}

      <CompleteReturnItemModal
        item={selectedItem}
        open={!!selectedItem}
        loading={loading}
        onClose={() => setSelectedItem(null)}
        onSubmit={(payload) => {
          if (!selectedItem) return;

          onCompleteItem(selectedItem.id, payload);

          setSelectedItem(null);
        }}
      />
    </>
  );
}
