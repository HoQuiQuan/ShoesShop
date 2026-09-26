"use client";

import { useState } from "react";
import { RefreshCw, RotateCcw } from "lucide-react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

import ReturnStats from "@/components/admin/returns/ReturnStats";
import ReturnFilters from "@/components/admin/returns/ReturnFilters";
import ReturnTable, {
  ReturnRequest,
} from "@/components/admin/returns/ReturnTable";
import ReturnDetailModal from "@/components/admin/returns/ReturnDetailModal";

import { ReturnRequestApi, ReturnRequestStatus } from "@/app/Api/ReturnRequest";
import { api } from "@/lib/axios";
import { InventoryApi } from "@/app/Api/Inventory.api";

export default function ReturnsPage() {
  const [page, setPage] = useState(1);

  const limit = 6;

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<ReturnRequestStatus | undefined>(
    undefined,
  );

  const [selectedReturn, setSelectedReturn] = useState<ReturnRequest | null>(
    null,
  );

  /*
   * =========================================================
   * GET RETURN REQUESTS
   * =========================================================
   */

  const { data, isLoading, isFetching, isError, error, refetch } = useQuery({
    queryKey: ["admin-return-requests", page, limit, search, status],

    queryFn: () =>
      ReturnRequestApi.findReturnRequest({
        page,
        limit,
        search: search.trim() || undefined,
        status: status || undefined,
      }),

    placeholderData: keepPreviousData,

    staleTime: 30 * 1000,

    retry: 1,

    refetchOnWindowFocus: false,
  });

  /*
   * =========================================================
   * DATA
   * =========================================================
   */

  const returns: ReturnRequest[] = data?.items ?? [];
  console.log("returns", returns);

  const pagination = data?.pagination;

  const total = pagination?.total ?? 0;

  const totalPages = Math.max(
    1,
    pagination?.totalPages ?? Math.ceil(total / limit),
  );

  /*
   * API ĐÃ PHÂN TRANG
   * Không slice returns thêm lần nữa.
   */
  const currentPage = Math.min(page, totalPages);

  /*
   * =========================================================
   * STATS
   * =========================================================
   *
   * Lưu ý:
   * Nếu backend chỉ trả items của page hiện tại,
   * không được tính stats bằng returns.filter(...)
   *
   * Vì vậy phần stats nên lấy từ API stats riêng.
   *
   * Tạm thời nếu backend chưa có stats API,
   * chỉ hiển thị các số liệu của page hiện tại.
   */

  const stats = {
    total,
    pending: returns.filter((item) => item.status === "PENDING").length,

    inspecting: returns.filter((item) => item.status === "INSPECTING").length,

    completed: returns.filter((item) => item.status === "COMPLETED").length,
  };

  /*
   * =========================================================
   * SEARCH
   * =========================================================
   */

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  /*
   * =========================================================
   * STATUS FILTER
   * =========================================================
   */

  const handleStatusChange = (value: ReturnRequestStatus) => {
    setStatus(value);
    setPage(1);
  };

  const handleApprove = async (id: number) => {
    const res = await ReturnRequestApi.approveReturn(id);
    setSelectedReturn(null);
    refetch();
  };
  const handleShipping = async (id: number) => {
    const res = await ReturnRequestApi.shippingReturn(id);
    setSelectedReturn(null);
    refetch();
  };
  const handleReceive = async (id: number) => {
    const res = await ReturnRequestApi.receiveReturn(id);
    setSelectedReturn(null);
    refetch();
  };
  const handleInspecting = async (id: number) => {
    const res = await ReturnRequestApi.inspectingReturn(id);
    setSelectedReturn(null);
    refetch();
  };
  const handleReject = async (id: number) => {
    const res = await ReturnRequestApi.rejectReturn(id);
    setSelectedReturn(null);
    refetch();
  };

  /*
   * =========================================================
   * CLEAR FILTER
   * =========================================================
   */

  const clearFilters = () => {
    setSearch("");
    setStatus(undefined);
    setPage(1);
  };

  /*
   * =========================================================
   * REFRESH
   * =========================================================
   */

  const handleRefresh = async () => {
    await refetch();
  };

  /*
   * =========================================================
   * VIEW DETAIL
   * =========================================================
   */

  const handleView = (item: ReturnRequest) => {
    setSelectedReturn(item);
  };

  /*
   * =========================================================
   * COMPLETE RETURN ITEM
   * =========================================================
   */

  const handleCompleteItem = async (
    itemId: number,
    payload: {
      normalQuantity: number;
      damagedQuantity: number;
      note?: string;
    },
  ) => {
    try {
      await ReturnRequestApi.completeReturnItem(
        itemId,
        payload.normalQuantity,
        payload.damagedQuantity,
      );

      await refetch();

      setSelectedReturn((current) => {
        if (!current) return null;

        const updatedItems = current.items.map((item) => {
          if (item.id !== itemId) {
            return item;
          }

          return {
            ...item,
            normalQuantity: payload.normalQuantity,
            damagedQuantity: payload.damagedQuantity,
            status: "COMPLETED",
          };
        });

        const allCompleted = updatedItems.every(
          (item) => item.status === "COMPLETED",
        );

        return {
          ...current,
          items: updatedItems,
          status: allCompleted ? "COMPLETED" : current.status,
        };
      });
    } catch (error) {
      console.error("Complete return item error:", error);

      /*
       * Ở đây bạn nên dùng AlertContainer
       * của project thay vì alert().
       */
    }
  };

  /*
   * =========================================================
   * PAGINATION
   * =========================================================
   */

  const goToPage = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPages) {
      return;
    }

    setPage(nextPage);
  };

  /*
   * =========================================================
   * ERROR
   * =========================================================
   */

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50/70 p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-[1600px]">
          <div className="rounded-2xl border border-red-100 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500">
              !
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              Không thể tải danh sách hàng trả về
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {error instanceof Error
                ? error.message
                : "Đã xảy ra lỗi khi tải dữ liệu."}
            </p>

            <button
              onClick={() => refetch()}
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              <RefreshCw size={16} />
              Thử lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/70 p-4 md:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px] space-y-6">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-black p-2.5 text-white">
                <RotateCcw size={20} />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Xử lý hàng trả về
                </h1>

                <p className="mt-1 text-sm text-gray-500">
                  Kiểm tra và xử lý sản phẩm khách hàng gửi trả
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={handleRefresh}
            disabled={isFetching}
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-2.5
              text-sm
              font-medium
              text-gray-700
              shadow-sm
              transition
              hover:bg-gray-50
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <RefreshCw size={16} className={isFetching ? "animate-spin" : ""} />

            {isFetching ? "Đang làm mới..." : "Làm mới"}
          </button>
        </div>

        {/* =================================================
            STATS
        ================================================= */}

        <ReturnStats {...stats} />

        {/* =================================================
            FILTER
        ================================================= */}

        <ReturnFilters
          search={search}
          status={status}
          onSearchChange={handleSearchChange}
          onStatusChange={handleStatusChange}
          onClear={clearFilters}
        />

        {/* =================================================
            RESULT INFO
        ================================================= */}

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            Tổng cộng{" "}
            <span className="font-semibold text-gray-900">{total}</span> yêu cầu
          </p>

          {(search || status) && (
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-gray-600 hover:text-black"
            >
              Xóa bộ lọc
            </button>
          )}
        </div>

        {/* =================================================
            TABLE
        ================================================= */}

        <ReturnTable
          data={returns}
          loading={isLoading || isFetching}
          onView={handleView}
        />

        {/* =================================================
            PAGINATION
        ================================================= */}

        {totalPages > 1 && (
          <div className="flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500">
              Trang{" "}
              <span className="font-semibold text-gray-900">{currentPage}</span>{" "}
              /{" "}
              <span className="font-semibold text-gray-900">{totalPages}</span>
            </p>

            <div className="flex items-center gap-2">
              {/* PREVIOUS */}

              <button
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition
                  hover:bg-gray-50
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                Trước
              </button>

              {/* PAGE NUMBERS */}

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => goToPage(pageNumber)}
                    className={`
                    h-9
                    w-9
                    rounded-xl
                    text-sm
                    font-medium
                    transition
                    ${
                      pageNumber === currentPage
                        ? "bg-black text-white"
                        : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                    }
                  `}
                  >
                    {pageNumber}
                  </button>
                ),
              )}

              {/* NEXT */}

              <button
                disabled={currentPage >= totalPages}
                onClick={() => goToPage(currentPage + 1)}
                className="
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-medium
                  transition
                  hover:bg-gray-50
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                Sau
              </button>
            </div>
          </div>
        )}
      </div>

      {/* =================================================
          DETAIL MODAL
      ================================================= */}

      <ReturnDetailModal
        data={selectedReturn}
        open={!!selectedReturn}
        onClose={() => setSelectedReturn(null)}
        loading={false}
        onChangeStatus_Approve={handleApprove}
        onChangeStatus_Shipping={handleShipping}
        onChangeStatus_Receive={handleReceive}
        onChangeStatus_Inspecting={handleInspecting}
        onChangeStatus_Reject={handleReject}
        onCompleteItem={handleCompleteItem}
        statusLoading={isLoading}
      />
    </div>
  );
}
