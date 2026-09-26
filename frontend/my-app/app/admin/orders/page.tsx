"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Package,
  RefreshCw,
  Search,
  X,
} from "lucide-react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import UpdateOrderStatus from "@/components/admin/order/update-order";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const ITEMS_PER_PAGE = 10;

/* =========================================================
 * TYPES
 * ======================================================= */

type OrderStatus =
  | "PENDING"
  | "CONFIRMED"
  | "SHIPPING"
  | "DELIVERED"
  | "CANCELLED"
  | "RETURNED";

interface OrderItem {
  id: number;
  quantity: number;
  subtotal: number;
  img?: string;

  productDetail: {
    id: number;
    price: number;

    product: {
      id: number;
      name: string;
    };

    color?: {
      id: number;
      name: string;
    };

    size?: {
      id: number;
      value: string;
    };
  };
}

interface AdminOrder {
  id: number;
  orderCode: string;
  status: OrderStatus;

  totalAmount: number;
  createdAt: string;

  user?: {
    id: number;
    name: string;
    email: string;
    phone?: string;
  };

  items: OrderItem[];
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

interface AdminOrderResponse {
  success: boolean;
  message: string;

  data: {
    items: AdminOrder[];
    pagination: Pagination;
  };

  date: string;
  path: string;
}

/* =========================================================
 * STATUS CONFIG
 * ======================================================= */

const statusConfig: Record<
  OrderStatus,
  {
    label: string;
    className: string;
    dotClassName: string;
  }
> = {
  PENDING: {
    label: "Chờ xác nhận",
    className: "bg-yellow-50 text-yellow-700 ring-yellow-200",
    dotClassName: "bg-yellow-500",
  },

  CONFIRMED: {
    label: "Đã xác nhận",
    className: "bg-blue-50 text-blue-700 ring-blue-200",
    dotClassName: "bg-blue-500",
  },

  SHIPPING: {
    label: "Đang giao",
    className: "bg-purple-50 text-purple-700 ring-purple-200",
    dotClassName: "bg-purple-500",
  },

  DELIVERED: {
    label: "Đã giao",
    className: "bg-green-50 text-green-700 ring-green-200",
    dotClassName: "bg-green-500",
  },

  CANCELLED: {
    label: "Đã hủy",
    className: "bg-red-50 text-red-700 ring-red-200",
    dotClassName: "bg-red-500",
  },

  RETURNED: {
    label: "Đã trả hàng",
    className: "bg-orange-50 text-orange-700 ring-orange-200",
    dotClassName: "bg-orange-500",
  },
};

/* =========================================================
 * HELPERS
 * ======================================================= */

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date));
};

/* =========================================================
 * STATUS BADGE
 * ======================================================= */

function StatusBadge({ status }: { status: OrderStatus }) {
  const config = statusConfig[status];

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        px-2.5
        py-1
        text-xs
        font-semibold
        ring-1
        ring-inset
        ${config.className}
      `}
    >
      <span
        className={`
          h-1.5
          w-1.5
          rounded-full
          ${config.dotClassName}
        `}
      />

      {config.label}
    </span>
  );
}

/* =========================================================
 * SKELETON
 * ======================================================= */

function OrderSkeleton() {
  return (
    <div className="space-y-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="
            animate-pulse
            rounded-2xl
            border
            border-gray-200
            bg-white
            p-4
          "
        >
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 shrink-0 rounded-xl bg-gray-200" />

            <div className="min-w-0 flex-1 space-y-2">
              <div className="h-4 w-40 rounded bg-gray-200" />

              <div className="h-3 w-64 max-w-full rounded bg-gray-200" />
            </div>

            <div className="hidden h-8 w-24 rounded-lg bg-gray-200 sm:block" />

            <div className="h-8 w-20 rounded-lg bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
}

/* =========================================================
 * PAGINATION
 * ======================================================= */

function Pagination({
  page,
  totalPages,
  totalOrders,
  hasNextPage,
  hasPreviousPage,
  loading,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  totalOrders: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  loading: boolean;
  onPageChange: (page: number) => void;
}) {
  const getPageNumbers = (): (number | "...")[] => {
    const pages: (number | "...")[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }

      return pages;
    }

    pages.push(1);

    if (page > 4) {
      pages.push("...");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 3) {
      pages.push("...");
    }

    pages.push(totalPages);

    return pages;
  };

  const startItem = totalOrders === 0 ? 0 : (page - 1) * ITEMS_PER_PAGE + 1;

  const endItem = Math.min(page * ITEMS_PER_PAGE, totalOrders);

  return (
    <div
      className="
        mt-6
        flex
        flex-col
        gap-4
        border-t
        border-gray-200
        pt-5
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* INFO */}
      <div className="text-center text-xs text-gray-500 sm:text-left sm:text-sm">
        Hiển thị{" "}
        <span className="font-semibold text-gray-700">{startItem}</span> -{" "}
        <span className="font-semibold text-gray-700">{endItem}</span> trong{" "}
        <span className="font-semibold text-gray-700">{totalOrders}</span> đơn
        hàng
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-center gap-1.5">
        {/* PREVIOUS */}
        <button
          type="button"
          disabled={!hasPreviousPage || loading}
          onClick={() => onPageChange(page - 1)}
          aria-label="Trang trước"
          className="
            group
            flex
            h-9
            items-center
            gap-1
            rounded-xl
            border
            border-gray-200
            bg-white
            px-2.5
            text-sm
            font-medium
            text-gray-600
            shadow-sm
            transition-all
            duration-200
            hover:border-gray-300
            hover:bg-gray-50
            hover:text-black
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-40
            sm:h-10
            sm:px-3
          "
        >
          <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />

          <span className="hidden sm:inline">Trước</span>
        </button>

        {/* PAGE NUMBERS */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((item, index) => {
            if (item === "...") {
              return (
                <span
                  key={`dots-${index}`}
                  className="
                    flex
                    h-9
                    w-7
                    items-center
                    justify-center
                    text-sm
                    font-medium
                    text-gray-400
                    sm:h-10
                    sm:w-9
                  "
                >
                  ...
                </span>
              );
            }

            const active = item === page;

            return (
              <button
                key={item}
                type="button"
                disabled={loading}
                onClick={() => onPageChange(item)}
                className={`
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-xl
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  active:scale-90
                  sm:h-10
                  sm:w-10

                  ${
                    active
                      ? `
                        scale-105
                        bg-black
                        text-white
                        shadow-md
                        shadow-black/10
                      `
                      : `
                        bg-white
                        text-gray-600
                        hover:bg-gray-100
                        hover:text-black
                      `
                  }

                  disabled:cursor-not-allowed
                  disabled:opacity-50
                `}
              >
                {item}
              </button>
            );
          })}
        </div>

        {/* NEXT */}
        <button
          type="button"
          disabled={!hasNextPage || loading}
          onClick={() => onPageChange(page + 1)}
          aria-label="Trang sau"
          className="
            group
            flex
            h-9
            items-center
            gap-1
            rounded-xl
            border
            border-gray-200
            bg-white
            px-2.5
            text-sm
            font-medium
            text-gray-600
            shadow-sm
            transition-all
            duration-200
            hover:border-gray-300
            hover:bg-gray-50
            hover:text-black
            active:scale-95
            disabled:cursor-not-allowed
            disabled:opacity-40
            sm:h-10
            sm:px-3
          "
        >
          <span className="hidden sm:inline">Sau</span>

          <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}

/* =========================================================
 * ORDER STATUS MODAL
 * ======================================================= */

function OrderStatusModal({
  order,
  onClose,
  onSuccess,
}: {
  order: AdminOrder;
  onClose: () => void;
  onSuccess: (newStatus: OrderStatus) => void;
}) {
  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-black/50
        p-4
        backdrop-blur-sm
        animate-[fadeIn_0.2s_ease-out]
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="
          w-full
          max-w-2xl
          overflow-hidden
          rounded-3xl
          bg-white
          shadow-2xl
          animate-[scaleIn_0.2s_ease-out]
        "
      >
        {/* =================================================
            MODAL HEADER
        ================================================== */}

        <div
          className="
            flex
            items-start
            justify-between
            border-b
            border-gray-100
            px-5
            py-4
            sm:px-6
            sm:py-5
          "
        >
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Cập nhật trạng thái đơn hàng
            </p>

            <h2 className="mt-1 truncate text-lg font-bold text-gray-900 sm:text-xl">
              {order.orderCode}
            </h2>

            <p className="mt-1 text-xs text-gray-400">Đơn hàng #{order.id}</p>
          </div>

          {/* CLOSE */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-xl
              text-gray-400
              transition-all
              duration-200
              hover:bg-gray-100
              hover:text-gray-900
              active:scale-90
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* =================================================
            MODAL CONTENT
        ================================================== */}

        <div
          className="
            max-h-[75vh]
            overflow-y-auto
            p-5
            sm:p-6
          "
        >
          {/* ORDER SUMMARY */}
          <div className="mb-5 grid gap-3 sm:grid-cols-2">
            {/* CUSTOMER */}
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Khách hàng
              </p>

              <p className="mt-1 text-sm font-semibold text-gray-800">
                {order.user?.name || "Khách hàng"}
              </p>

              <p className="mt-1 truncate text-xs text-gray-500">
                {order.user?.email || "Không có email"}
              </p>
            </div>

            {/* TOTAL */}
            <div className="rounded-2xl bg-gray-50 p-4">
              <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                Tổng thanh toán
              </p>

              <p className="mt-1 text-base font-bold text-gray-900">
                {formatCurrency(order.totalAmount)}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {order.items.length} sản phẩm
              </p>
            </div>
          </div>

          {/* CURRENT STATUS */}
          <div
            className="
              mb-5
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
            "
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Trạng thái hiện tại
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Chọn trạng thái mới cho đơn hàng
                </p>
              </div>

              <StatusBadge status={order.status} />
            </div>
          </div>

          {/* UPDATE COMPONENT */}
          <UpdateOrderStatus
            orderCode={order.orderCode}
            currentStatus={order.status}
            onSuccess={(newStatus) => {
              onSuccess(newStatus);
            }}
          />
        </div>

        {/* =================================================
            MODAL FOOTER
        ================================================== */}

        <div
          className="
            border-t
            border-gray-100
            bg-gray-50/70
            px-5
            py-4
            sm:px-6
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              w-full
              rounded-xl
              border
              border-gray-200
              bg-white
              px-4
              py-2.5
              text-sm
              font-semibold
              text-gray-700
              shadow-sm
              transition-all
              duration-200
              hover:border-gray-300
              hover:bg-gray-50
              active:scale-[0.98]
            "
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
 * MAIN PAGE
 * ======================================================= */

export default function AdminOrdersPage() {
  /* =======================================================
   * STATE
   * ===================================================== */

  const [orders, setOrders] = useState<AdminOrder[]>([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState<"ALL" | OrderStatus>("ALL");

  const [page, setPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [totalOrders, setTotalOrders] = useState(0);

  const [hasNextPage, setHasNextPage] = useState(false);

  const [hasPreviousPage, setHasPreviousPage] = useState(false);

  /*
   * Order đang được chọn để mở modal
   */
  const [selectedOrder, setSelectedOrder] = useState<AdminOrder | null>(null);

  /* =======================================================
   * FETCH ORDERS
   * ===================================================== */

  const fetchOrders = async (
    pageNumber: number,
    currentSearch = search,
    currentStatus = status,
  ) => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      params.set("page", String(pageNumber));
      params.set("limit", String(ITEMS_PER_PAGE));

      if (currentSearch.trim()) {
        params.set("search", currentSearch.trim());
      }

      if (currentStatus !== "ALL") {
        params.set("status", currentStatus);
      }

      const response = await fetch(
        `${API_URL}/order/admin?${params.toString()}`,
        {
          method: "GET",
          credentials: "include",
          cache: "no-store",
        },
      );

      if (!response.ok) {
        throw new Error("Không thể lấy danh sách đơn hàng");
      }

      const result: AdminOrderResponse = await response.json();

      const data = result?.data;

      setOrders(data?.items ?? []);

      const pagination = data?.pagination;

      setPage(pagination?.page ?? pageNumber);

      setTotalPages(pagination?.totalPages ?? 1);

      setTotalOrders(pagination?.total ?? 0);

      setHasNextPage(pagination?.hasNextPage ?? false);

      setHasPreviousPage(pagination?.hasPreviousPage ?? false);
    } catch (error) {
      console.error("Fetch admin orders error:", error);

      setOrders([]);

      setTotalPages(1);

      setTotalOrders(0);

      setHasNextPage(false);

      setHasPreviousPage(false);
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
   * INITIAL LOAD
   * ===================================================== */

  useEffect(() => {
    fetchOrders(1);
  }, []);

  /* =======================================================
   * SEARCH / FILTER
   * ===================================================== */

  useEffect(() => {
    if (page !== 1) {
      setPage(1);
    }
  }, [search, status]);

  /* =======================================================
   * PAGE CHANGE
   * ===================================================== */

  const handlePageChange = (newPage: number) => {
    if (loading) return;

    if (newPage < 1) return;

    if (newPage > totalPages) return;

    if (newPage === page) return;

    fetchOrders(newPage, search, status);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =======================================================
   * REFRESH
   * ===================================================== */

  const handleRefresh = () => {
    fetchOrders(page, search, status);
  };

  /* =======================================================
   * LOCAL FILTER
   * ===================================================== */

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const keyword = search.trim().toLowerCase();

      const matchesSearch =
        !keyword ||
        order.orderCode.toLowerCase().includes(keyword) ||
        order.user?.name?.toLowerCase().includes(keyword) ||
        order.user?.email?.toLowerCase().includes(keyword);

      const matchesStatus = status === "ALL" || order.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [orders, search, status]);

  /* =======================================================
   * STATISTICS
   *
   * Các status bên dưới chỉ tính page hiện tại.
   * ===================================================== */

  const statistics = useMemo(() => {
    return {
      total: totalOrders,

      pending: orders.filter((order) => order.status === "PENDING").length,

      confirmed: orders.filter((order) => order.status === "CONFIRMED").length,

      shipping: orders.filter((order) => order.status === "SHIPPING").length,

      delivered: orders.filter((order) => order.status === "DELIVERED").length,

      cancelled: orders.filter((order) => order.status === "CANCELLED").length,
    };
  }, [orders, totalOrders]);

  /* =======================================================
   * OPEN ORDER MODAL
   * ===================================================== */

  const handleOpenOrder = (order: AdminOrder) => {
    setSelectedOrder(order);
  };

  /* =======================================================
   * CLOSE ORDER MODAL
   * ===================================================== */

  const handleCloseOrder = () => {
    setSelectedOrder(null);
  };

  /* =======================================================
   * STATUS UPDATE SUCCESS
   * ===================================================== */

  const handleStatusUpdate = (newStatus: OrderStatus) => {
    if (!selectedOrder) return;

    /*
     * Update danh sách order
     */
    setOrders((prev) =>
      prev.map((order) =>
        order.id === selectedOrder.id
          ? {
              ...order,
              status: newStatus,
            }
          : order,
      ),
    );

    /*
     * Update order đang mở trong modal
     */
    setSelectedOrder((prev) =>
      prev
        ? {
            ...prev,
            status: newStatus,
          }
        : null,
    );
  };

  /* =======================================================
   * RENDER
   * ===================================================== */

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          {/* =================================================
              HEADER
          ================================================== */}

          <div
            className="
              mb-6
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <h1
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  sm:text-3xl
                "
              >
                Đơn hàng
              </h1>

              <p className="mt-1 text-sm text-gray-500">
                Quản lý và theo dõi tất cả đơn hàng
              </p>
            </div>

            {/* REFRESH */}
            <button
              type="button"
              onClick={handleRefresh}
              disabled={loading}
              className="
                group
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-xl
                border
                border-gray-200
                bg-white
                px-4
                py-2.5
                text-sm
                font-semibold
                text-gray-700
                shadow-sm
                transition-all
                duration-200
                hover:border-gray-300
                hover:bg-gray-50
                hover:text-black
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <RefreshCw
                className={`
                  h-4
                  w-4
                  transition-transform
                  duration-500
                  ${loading ? "animate-spin" : "group-hover:rotate-180"}
                `}
              />
              Làm mới
            </button>
          </div>

          {/* =================================================
              STATISTICS
          ================================================== */}

          <div
            className="
              mb-6
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-3
              lg:grid-cols-6
            "
          >
            {/* TOTAL */}
            <div
              className="
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-4
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <p className="text-xs font-medium text-gray-500">Tổng đơn</p>

              <p className="mt-2 text-2xl font-bold text-gray-900">
                {statistics.total}
              </p>
            </div>

            {/* PENDING */}
            <div
              className="
                rounded-2xl
                border
                border-yellow-100
                bg-yellow-50/50
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <p className="text-xs font-medium text-yellow-700">
                Chờ xác nhận
              </p>

              <p className="mt-2 text-2xl font-bold text-yellow-800">
                {statistics.pending}
              </p>
            </div>

            {/* CONFIRMED */}
            <div
              className="
                rounded-2xl
                border
                border-blue-100
                bg-blue-50/50
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <p className="text-xs font-medium text-blue-700">Đã xác nhận</p>

              <p className="mt-2 text-2xl font-bold text-blue-800">
                {statistics.confirmed}
              </p>
            </div>

            {/* SHIPPING */}
            <div
              className="
                rounded-2xl
                border
                border-purple-100
                bg-purple-50/50
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <p className="text-xs font-medium text-purple-700">Đang giao</p>

              <p className="mt-2 text-2xl font-bold text-purple-800">
                {statistics.shipping}
              </p>
            </div>

            {/* DELIVERED */}
            <div
              className="
                rounded-2xl
                border
                border-green-100
                bg-green-50/50
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <p className="text-xs font-medium text-green-700">Đã giao</p>

              <p className="mt-2 text-2xl font-bold text-green-800">
                {statistics.delivered}
              </p>
            </div>

            {/* CANCELLED */}
            <div
              className="
                rounded-2xl
                border
                border-red-100
                bg-red-50/50
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <p className="text-xs font-medium text-red-700">Đã hủy</p>

              <p className="mt-2 text-2xl font-bold text-red-800">
                {statistics.cancelled}
              </p>
            </div>
          </div>

          {/* =================================================
              FILTER
          ================================================== */}

          <div
            className="
              mb-6
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
              shadow-sm
            "
          >
            <div
              className="
                flex
                flex-col
                gap-3
                lg:flex-row
                lg:items-center
              "
            >
              {/* SEARCH */}
              <div className="relative flex-1">
                <Search
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    h-4
                    w-4
                    -translate-y-1/2
                    text-gray-400
                  "
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Tìm theo mã đơn, tên khách hàng, email..."
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    pl-10
                    pr-4
                    text-sm
                    text-gray-900
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

              {/* STATUS */}
              <div className="w-full lg:w-56">
                <select
                  value={status}
                  onChange={(event) =>
                    setStatus(event.target.value as "ALL" | OrderStatus)
                  }
                  className="
                    h-11
                    w-full
                    rounded-xl
                    border
                    border-gray-200
                    bg-gray-50
                    px-3
                    text-sm
                    font-medium
                    text-gray-700
                    outline-none
                    transition-all
                    duration-200
                    focus:border-black
                    focus:bg-white
                    focus:ring-2
                    focus:ring-black/5
                  "
                >
                  <option value="ALL">Tất cả trạng thái</option>

                  <option value="PENDING">Chờ xác nhận</option>

                  <option value="CONFIRMED">Đã xác nhận</option>

                  <option value="SHIPPING">Đang giao</option>

                  <option value="DELIVERED">Đã giao</option>

                  <option value="CANCELLED">Đã hủy</option>

                  <option value="RETURNED">Đã trả hàng</option>
                </select>
              </div>
            </div>
          </div>

          {/* =================================================
              CONTENT
          ================================================== */}

          {loading ? (
            <OrderSkeleton />
          ) : filteredOrders.length === 0 ? (
            /* =================================================
                EMPTY
            ================================================== */

            <div
              className="
                flex
                min-h-[350px]
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-dashed
                border-gray-300
                bg-white
                px-6
                text-center
                animate-[fadeIn_0.3s_ease-out]
              "
            >
              <div
                className="
                  mb-4
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gray-100
                "
              >
                <Package className="h-8 w-8 text-gray-400" />
              </div>

              <h3 className="text-base font-semibold text-gray-800">
                Không tìm thấy đơn hàng
              </h3>

              <p className="mt-1 max-w-sm text-sm text-gray-500">
                Không có đơn hàng nào phù hợp với điều kiện tìm kiếm hiện tại.
              </p>
            </div>
          ) : (
            <>
              {/* =================================================
                  DESKTOP TABLE
              ================================================== */}

              <div
                className="
                  hidden
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  lg:block
                "
              >
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[950px]">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50/80">
                        <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Đơn hàng
                        </th>

                        <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Khách hàng
                        </th>

                        <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Sản phẩm
                        </th>

                        <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Tổng tiền
                        </th>

                        <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Trạng thái
                        </th>

                        <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                          Ngày tạo
                        </th>

                        <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                          #
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-100">
                      {filteredOrders.map((order, index) => (
                        <tr
                          key={order.id}
                          className="
                              group
                              animate-[fadeInUp_0.35s_ease-out_both]
                              transition-colors
                              duration-200
                              hover:bg-gray-50/70
                            "
                          style={{
                            animationDelay: `${index * 40}ms`,
                          }}
                        >
                          {/* ORDER */}
                          <td className="px-5 py-4">
                            <div>
                              <p className="font-semibold text-gray-900">
                                {order.orderCode}
                              </p>

                              <p className="mt-1 text-xs text-gray-400">
                                #{order.id}
                              </p>
                            </div>
                          </td>

                          {/* USER */}
                          <td className="px-5 py-4">
                            <div className="max-w-[180px]">
                              <p className="truncate text-sm font-medium text-gray-800">
                                {order.user?.name || "Khách hàng"}
                              </p>

                              <p className="mt-1 truncate text-xs text-gray-400">
                                {order.user?.email || "Không có email"}
                              </p>

                              {order.user?.phone && (
                                <p className="mt-1 text-xs text-gray-400">
                                  {order.user.phone}
                                </p>
                              )}
                            </div>
                          </td>

                          {/* PRODUCTS */}
                          <td className="px-5 py-4">
                            <div className="flex items-center">
                              {order.items
                                .slice(0, 3)
                                .map((item, itemIndex) => (
                                  <div
                                    key={item.id}
                                    className={`
                                          relative
                                          h-10
                                          w-10
                                          overflow-hidden
                                          rounded-lg
                                          border
                                          border-white
                                          bg-gray-100
                                          shadow-sm
                                          ${itemIndex > 0 ? "-ml-2" : ""}
                                        `}
                                  >
                                    {item.img ? (
                                      <img
                                        src={item.img}
                                        alt={
                                          item.productDetail?.product?.name ||
                                          "Product"
                                        }
                                        className="
                                              h-full
                                              w-full
                                              object-cover
                                            "
                                      />
                                    ) : (
                                      <div className="flex h-full w-full items-center justify-center">
                                        <Package className="h-4 w-4 text-gray-300" />
                                      </div>
                                    )}
                                  </div>
                                ))}

                              {order.items.length > 3 && (
                                <div
                                  className="
                                      -ml-2
                                      flex
                                      h-10
                                      w-10
                                      items-center
                                      justify-center
                                      rounded-lg
                                      border
                                      border-white
                                      bg-gray-100
                                      text-xs
                                      font-semibold
                                      text-gray-500
                                      shadow-sm
                                    "
                                >
                                  +{order.items.length - 3}
                                </div>
                              )}
                            </div>

                            <p className="mt-2 text-xs text-gray-400">
                              {order.items.length} sản phẩm
                            </p>
                          </td>

                          {/* TOTAL */}
                          <td className="px-5 py-4">
                            <p className="text-sm font-bold text-gray-900">
                              {formatCurrency(order.totalAmount)}
                            </p>
                          </td>

                          {/* STATUS */}
                          <td className="px-5 py-4">
                            <StatusBadge status={order.status} />
                          </td>

                          {/* DATE */}
                          <td className="px-5 py-4">
                            <p className="whitespace-nowrap text-sm text-gray-600">
                              {formatDate(order.createdAt)}
                            </p>
                          </td>

                          {/* ACTION */}
                          <td className="px-5 py-4 text-right">
                            <button
                              type="button"
                              onClick={() => handleOpenOrder(order)}
                              className="
                                  inline-flex
                                  h-9
                                  items-center
                                  gap-2
                                  rounded-xl
                                  border
                                  border-gray-200
                                  bg-white
                                  px-3
                                  text-sm
                                  font-semibold
                                  text-gray-600
                                  shadow-sm
                                  transition-all
                                  duration-200
                                  hover:border-black
                                  hover:bg-black
                                  hover:text-white
                                  active:scale-95
                                "
                            >
                              <Eye className="h-4 w-4" />

                              <span>Chi tiết</span>
                            </button>
                            <button
                              className="
                                  inline-flex
                                  h-9
                                  items-center
                                  gap-2
                                  rounded-xl
                                  border
                                  border-gray-200
                                  bg-white
                                  px-3
                                  text-sm
                                  font-semibold
                                  text-gray-600
                                  shadow-sm
                                  transition-all
                                  duration-200
                                  hover:border-black
                                  hover:bg-black
                                  hover:text-white
                                  active:scale-95
                                  ml-3
                                "
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* =================================================
                  MOBILE / TABLET
              ================================================== */}

              <div className="space-y-3 lg:hidden">
                {filteredOrders.map((order, index) => (
                  <div
                    key={order.id}
                    className="
                        animate-[fadeInUp_0.35s_ease-out_both]
                        rounded-2xl
                        border
                        border-gray-200
                        bg-white
                        p-4
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-md
                      "
                    style={{
                      animationDelay: `${index * 40}ms`,
                    }}
                  >
                    {/* TOP */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-bold text-gray-900">
                          {order.orderCode}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          #{order.id} · {formatDate(order.createdAt)}
                        </p>
                      </div>

                      <StatusBadge status={order.status} />
                    </div>

                    {/* USER */}
                    <div className="mt-4 rounded-xl bg-gray-50 p-3">
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Khách hàng
                      </p>

                      <p className="mt-1 text-sm font-semibold text-gray-800">
                        {order.user?.name || "Khách hàng"}
                      </p>

                      <p className="mt-1 truncate text-xs text-gray-500">
                        {order.user?.email || "Không có email"}
                      </p>

                      {order.user?.phone && (
                        <p className="mt-1 text-xs text-gray-500">
                          {order.user.phone}
                        </p>
                      )}
                    </div>

                    {/* PRODUCTS */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                          Sản phẩm
                        </p>

                        <p className="text-xs text-gray-500">
                          {order.items.length} sản phẩm
                        </p>
                      </div>

                      <div className="mt-3 space-y-3">
                        {order.items.slice(0, 3).map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3"
                          >
                            {/* IMAGE */}
                            <div
                              className="
                                    h-12
                                    w-12
                                    shrink-0
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-gray-100
                                    bg-gray-50
                                  "
                            >
                              {item.img ? (
                                <img
                                  src={item.img}
                                  alt={
                                    item.productDetail?.product?.name ||
                                    "Product"
                                  }
                                  className="
                                        h-full
                                        w-full
                                        object-cover
                                      "
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center">
                                  <Package className="h-5 w-5 text-gray-300" />
                                </div>
                              )}
                            </div>

                            {/* INFO */}
                            <div className="min-w-0 flex-1">
                              <p className="truncate text-sm font-medium text-gray-800">
                                {item.productDetail.product.name}
                              </p>

                              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-400">
                                {item.productDetail.color && (
                                  <span>
                                    Màu: {item.productDetail.color.name}
                                  </span>
                                )}

                                {item.productDetail.size && (
                                  <span>
                                    Size: {item.productDetail.size.value}
                                  </span>
                                )}

                                <span>x{item.quantity}</span>
                              </div>
                            </div>

                            {/* PRICE */}
                            <p className="shrink-0 text-sm font-semibold text-gray-800">
                              {formatCurrency(item.subtotal)}
                            </p>
                          </div>
                        ))}

                        {order.items.length > 3 && (
                          <p className="text-xs text-gray-400">
                            + {order.items.length - 3} sản phẩm khác
                          </p>
                        )}
                      </div>
                    </div>

                    {/* BOTTOM */}
                    <div
                      className="
                          mt-4
                          flex
                          items-center
                          justify-between
                          gap-3
                          border-t
                          border-gray-100
                          pt-4
                        "
                    >
                      <div>
                        <p className="text-xs text-gray-400">Tổng thanh toán</p>

                        <p className="mt-1 text-base font-bold text-gray-900">
                          {formatCurrency(order.totalAmount)}
                        </p>
                      </div>

                      {/* DETAIL BUTTON */}
                      <button
                        type="button"
                        onClick={() => handleOpenOrder(order)}
                        className="
                            inline-flex
                            h-10
                            shrink-0
                            items-center
                            gap-2
                            rounded-xl
                            bg-black
                            px-4
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-200
                            hover:bg-gray-800
                            active:scale-95
                          "
                      >
                        <Eye className="h-4 w-4" />

                        <span>Chi tiết</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  PAGINATION
              ================================================== */}

              <Pagination
                page={page}
                totalPages={totalPages}
                totalOrders={totalOrders}
                hasNextPage={hasNextPage}
                hasPreviousPage={hasPreviousPage}
                loading={loading}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>

      {/* =====================================================
          ORDER STATUS MODAL
      ===================================================== */}

      {selectedOrder && (
        <OrderStatusModal
          order={selectedOrder}
          onClose={handleCloseOrder}
          onSuccess={handleStatusUpdate}
        />
      )}
    </ProtectedRoute>
  );
}
