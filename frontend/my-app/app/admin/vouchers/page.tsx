"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  Clock,
  Copy,
  Edit,
  Eye,
  Filter,
  Loader2,
  Plus,
  Power,
  RefreshCw,
  Search,
  Ticket,
  Trash2,
  X,
  XCircle,
} from "lucide-react";

import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { api } from "@/lib/axios";
import Vouchers from "@/app/Api/Voucher.api";

/* =========================================================
TYPES
========================================================= */

type VoucherType = "DISCOUNT" | "FREESHIP";
type DiscountType = "PERCENT" | "FIXED_AMOUNT";

interface Voucher {
  id: number;
  code: string;
  voucherType: VoucherType;
  discountType: DiscountType;
  discountValue: number | string;
  maxDiscount?: number | string | null;
  minOrderValue?: number | string | null;
  description?: string | null;
  usageLimit?: number | null;
  usedCount: number;
  startAt: string;
  endAt: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

interface VoucherForm {
  code: string;
  voucherType: VoucherType;
  discountType: DiscountType;
  discountValue: string;
  maxDiscount: string;
  minOrderValue: string;
  description: string;
  usageLimit: string;
  startAt: string;
  endAt: string;
}

/* =========================================================
CONSTANTS
========================================================= */

const emptyForm: VoucherForm = {
  code: "",
  voucherType: "DISCOUNT",
  discountType: "PERCENT",
  discountValue: "",
  maxDiscount: "",
  minOrderValue: "",
  description: "",
  usageLimit: "",
  startAt: "",
  endAt: "",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

/* =========================================================
HELPERS
========================================================= */

function formatCurrency(value: number | string | null | undefined) {
  if (value === null || value === undefined || value === "") {
    return "0 ₫";
  }

  return new Intl.NumberFormat("vi-VN").format(Number(value)) + " ₫";
}

function formatDate(value: string) {
  if (!value) return "—";

  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function toDateTimeLocal(value?: string) {
  if (!value) return "";

  const date = new Date(value);

  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60000);

  return localDate.toISOString().slice(0, 16);
}

function getVoucherStatus(voucher: Voucher) {
  const now = new Date();
  const start = new Date(voucher.startAt);
  const end = new Date(voucher.endAt);

  if (!voucher.isActive) {
    return {
      label: "Đã tắt",
      className: "bg-gray-100 text-gray-600",
      icon: XCircle,
    };
  }

  if (now < start) {
    return {
      label: "Chưa bắt đầu",
      className: "bg-yellow-100 text-yellow-700",
      icon: Clock,
    };
  }

  if (now > end) {
    return {
      label: "Hết hạn",
      className: "bg-red-100 text-red-600",
      icon: XCircle,
    };
  }

  if (
    voucher.usageLimit !== null &&
    voucher.usageLimit !== undefined &&
    voucher.usedCount >= voucher.usageLimit
  ) {
    return {
      label: "Hết lượt",
      className: "bg-orange-100 text-orange-700",
      icon: XCircle,
    };
  }

  return {
    label: "Đang hoạt động",
    className: "bg-green-100 text-green-700",
    icon: Check,
  };
}

/* =========================================================
MAIN PAGE
========================================================= */

export default function AdminVouchersPage() {
  const [vouchers, setVouchers] = useState<Voucher[]>([]);

  console.log(vouchers);

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<"ALL" | VoucherType>("ALL");

  const [statusFilter, setStatusFilter] = useState<
    "ALL" | "ACTIVE" | "INACTIVE"
  >("ALL");

  const [showForm, setShowForm] = useState(false);
  const [editingVoucher, setEditingVoucher] = useState<Voucher | null>(null);

  const [viewingVoucher, setViewingVoucher] = useState<Voucher | null>(null);

  const [deleteVoucher, setDeleteVoucher] = useState<Voucher | null>(null);

  const [activateVoucher, setActivateVoucher] = useState<Voucher | null>(null);

  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  /* =========================================================
ALERT
========================================================= */

  const showAlert = (type: "success" | "error", message: string) => {
    setAlert({ type, message });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  /* =========================================================
FETCH
========================================================= */

  const fetchVouchers = async (showRefresh = false) => {
    try {
      if (showRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const response = await Vouchers.findAllVoucherAdmin();

      const data = response.data.data;

      setVouchers(data);
    } catch (error) {
      console.error(error);

      showAlert("error", "Không thể tải danh sách voucher");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchVouchers();
  }, []);

  /* =========================================================
FILTER
========================================================= */

  const filteredVouchers = useMemo(() => {
    return vouchers.filter((voucher) => {
      const keyword = search.toLowerCase().trim();

      const matchSearch =
        !keyword ||
        voucher.code.toLowerCase().includes(keyword) ||
        voucher.description?.toLowerCase().includes(keyword);

      const matchType =
        typeFilter === "ALL" || voucher.voucherType === typeFilter;

      const matchStatus =
        statusFilter === "ALL" ||
        (statusFilter === "ACTIVE" ? voucher.isActive : !voucher.isActive);

      return matchSearch && matchType && matchStatus;
    });
  }, [vouchers, search, typeFilter, statusFilter]);

  console.log("vouchers", vouchers);
  console.log("filteredVouchers", filteredVouchers);

  /* =========================================================
STATISTICS
========================================================= */

  const statistics = useMemo(() => {
    const active = vouchers.filter((voucher) => voucher.isActive).length;

    const discount = vouchers.filter(
      (voucher) => voucher.voucherType === "DISCOUNT",
    ).length;

    const freeship = vouchers.filter(
      (voucher) => voucher.voucherType === "FREESHIP",
    ).length;

    return {
      total: vouchers.length,
      active,
      discount,
      freeship,
    };
  }, [vouchers]);

  /* =========================================================
CREATE
========================================================= */

  const handleCreate = () => {
    setEditingVoucher(null);
    setShowForm(true);
  };

  /* =========================================================
EDIT
========================================================= */

  const handleEdit = (voucher: Voucher) => {
    setEditingVoucher(voucher);
    setShowForm(true);
  };

  /* =========================================================
DELETE / DISABLE
========================================================= */

  const handleDisable = async () => {
    if (!deleteVoucher) return;

    try {
      await api.delete(`${API_URL}/vouchers/${deleteVoucher.id}`);

      setVouchers((prev) =>
        prev.map((voucher) =>
          voucher.id === deleteVoucher.id
            ? {
                ...voucher,
                isActive: false,
              }
            : voucher,
        ),
      );

      showAlert("success", "Đã vô hiệu hóa voucher");

      setDeleteVoucher(null);
    } catch (error) {
      console.error(error);

      showAlert("error", "Không thể vô hiệu hóa voucher");
    }
  };

  /* =========================================================
ACTIVE
========================================================= */

  const handleActivateVoucher = async () => {
    if (!activateVoucher) return;

    try {
      await Vouchers.activateVoucher(activateVoucher.id);

      setVouchers((prev) =>
        prev.map((voucher) =>
          voucher.id === activateVoucher.id
            ? {
                ...voucher,
                isActive: true,
              }
            : voucher,
        ),
      );

      showAlert("success", "Đã bật lại voucher");

      setActivateVoucher(null);
    } catch (error) {
      console.error(error);

      showAlert("error", "Không thể bật lại voucher");
    }
  };

  /* =========================================================
COPY CODE
========================================================= */

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);

      showAlert("success", `Đã sao chép mã ${code}`);
    } catch {
      showAlert("error", "Không thể sao chép mã voucher");
    }
  };

  /* =========================================================
SAVE
========================================================= */

  const handleSave = async (form: VoucherForm) => {
    try {
      const payload = {
        code: form.code.trim().toUpperCase(),
        voucherType: form.voucherType,
        discountType: form.discountType,
        discountValue: Number(form.discountValue),

        maxDiscount: form.maxDiscount === "" ? null : Number(form.maxDiscount),

        minOrderValue:
          form.minOrderValue === "" ? null : Number(form.minOrderValue),

        description: form.description.trim() || null,

        usageLimit: form.usageLimit === "" ? null : Number(form.usageLimit),

        startAt: new Date(form.startAt).toISOString(),

        endAt: new Date(form.endAt).toISOString(),
      };

      if (editingVoucher) {
        const response = await api.patch(
          `${API_URL}/vouchers/${editingVoucher.id}`,
          payload,
        );

        setVouchers((prev) =>
          prev.map((voucher) =>
            voucher.id === editingVoucher.id ? response.data.data : voucher,
          ),
        );

        showAlert("success", "Cập nhật voucher thành công");
      } else {
        const response = await api.post(`${API_URL}/vouchers`, payload);

        setVouchers((prev) => [response.data.data, ...prev]);

        showAlert("success", "Tạo voucher thành công");
      }

      setShowForm(false);
      setEditingVoucher(null);
    } catch (error: any) {
      console.error(error);

      const message = error?.response?.data?.message;

      showAlert(
        "error",
        Array.isArray(message)
          ? message[0]
          : message || "Không thể lưu voucher",
      );
    }
  };

  return (
    <ProtectedRoute>
      {" "}
      <div className="min-h-screen bg-gray-50">
        {/* =================================================
ALERT
================================================= */}

        {alert && (
          <div className="fixed right-5 top-5 z-[200]">
            <div
              className={`flex items-center gap-3 rounded-xl border bg-white px-4 py-3 shadow-xl ${
                alert.type === "success" ? "border-green-200" : "border-red-200"
              }`}
            >
              {alert.type === "success" ? (
                <Check className="h-5 w-5 text-green-600" />
              ) : (
                <XCircle className="h-5 w-5 text-red-600" />
              )}

              <p className="text-sm font-medium text-gray-800">
                {alert.message}
              </p>

              <button
                onClick={() => setAlert(null)}
                className="ml-2 rounded-lg p-1 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* =================================================
        HEADER
    ================================================= */}

        <div className="border-b bg-white">
          <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gray-900 p-2.5">
                    <Ticket className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                      Voucher
                    </h1>

                    <p className="mt-1 text-sm text-gray-500">
                      Quản lý mã giảm giá và miễn phí vận chuyển
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => fetchVouchers(true)}
                  disabled={refreshing}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 disabled:opacity-60"
                >
                  <RefreshCw
                    className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`}
                  />

                  <span className="hidden sm:inline">Làm mới</span>
                </button>

                <button
                  onClick={handleCreate}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 active:scale-[0.98]"
                >
                  <Plus className="h-4 w-4" />
                  Thêm voucher
                </button>
              </div>
            </div>
          </div>
        </div>

        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
          {/* =================================================
          STATISTICS
      ================================================= */}

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard
              title="Tổng voucher"
              value={statistics.total}
              icon={<Ticket />}
            />

            <StatCard
              title="Đang hoạt động"
              value={statistics.active}
              icon={<Check />}
            />

            <StatCard
              title="Giảm giá"
              value={statistics.discount}
              icon={<span className="font-bold">%</span>}
            />

            <StatCard
              title="Freeship"
              value={statistics.freeship}
              icon={<span className="font-bold">₫</span>}
            />
          </div>

          {/* =================================================
          FILTER
      ================================================= */}

          <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="flex flex-col gap-3 lg:flex-row">
              {/* SEARCH */}

              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Tìm theo mã voucher hoặc mô tả..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-400 focus:bg-white"
                />
              </div>

              {/* TYPE */}

              <div className="relative">
                <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

                <select
                  value={typeFilter}
                  onChange={(e) =>
                    setTypeFilter(e.target.value as "ALL" | VoucherType)
                  }
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-10 text-sm outline-none focus:border-gray-400 sm:w-[190px]"
                >
                  <option value="ALL">Tất cả loại</option>
                  <option value="DISCOUNT">Giảm giá</option>
                  <option value="FREESHIP">Freeship</option>
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>

              {/* STATUS */}

              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(
                      e.target.value as "ALL" | "ACTIVE" | "INACTIVE",
                    )
                  }
                  className="w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-4 pr-10 text-sm outline-none focus:border-gray-400 sm:w-[180px]"
                >
                  <option value="ALL">Tất cả trạng thái</option>
                  <option value="ACTIVE">Đang hoạt động</option>
                  <option value="INACTIVE">Đã tắt</option>
                </select>

                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* =================================================
          DESKTOP TABLE
      ================================================= */}

          <div className="mt-6 hidden overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:block">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px]">
                <thead className="border-b bg-gray-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Voucher
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Loại
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Giá trị
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Sử dụng
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Thời gian
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Trạng thái
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-wide text-gray-500">
                      Thao tác
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {loading ? (
                    Array.from({
                      length: 6,
                    }).map((_, index) => <VoucherSkeleton key={index} />)
                  ) : filteredVouchers.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-5 py-16 text-center">
                        <Ticket className="mx-auto h-10 w-10 text-gray-300" />

                        <p className="mt-3 font-medium text-gray-700">
                          Không tìm thấy voucher
                        </p>

                        <p className="mt-1 text-sm text-gray-400">
                          Thử thay đổi từ khóa hoặc bộ lọc
                        </p>
                      </td>
                    </tr>
                  ) : (
                    filteredVouchers.map((voucher, index) => (
                      <VoucherRow
                        key={voucher.id}
                        voucher={voucher}
                        index={index}
                        onView={() => setViewingVoucher(voucher)}
                        onEdit={() => handleEdit(voucher)}
                        onDisable={() => setDeleteVoucher(voucher)}
                        onActive={() => setActivateVoucher(voucher)}
                        onCopy={() => handleCopy(voucher.code)}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* =================================================
          MOBILE
      ================================================= */}

          <div className="mt-6 space-y-3 md:hidden">
            {loading ? (
              Array.from({
                length: 5,
              }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse rounded-2xl border bg-white p-4"
                >
                  <div className="h-5 w-32 rounded bg-gray-200" />
                  <div className="mt-3 h-4 w-48 rounded bg-gray-200" />
                  <div className="mt-4 h-16 rounded bg-gray-100" />
                </div>
              ))
            ) : filteredVouchers.length === 0 ? (
              <div className="rounded-2xl border bg-white py-14 text-center">
                <Ticket className="mx-auto h-10 w-10 text-gray-300" />

                <p className="mt-3 font-medium text-gray-700">
                  Không có voucher
                </p>
              </div>
            ) : (
              filteredVouchers.map((voucher, index) => (
                <VoucherMobileCard
                  key={voucher.id}
                  voucher={voucher}
                  index={index}
                  onView={() => setViewingVoucher(voucher)}
                  onEdit={() => handleEdit(voucher)}
                  onDisable={() => setDeleteVoucher(voucher)}
                />
              ))
            )}
          </div>

          {/* =================================================
          RESULT
      ================================================= */}

          {!loading && (
            <p className="mt-4 text-sm text-gray-500">
              Hiển thị{" "}
              <span className="font-semibold text-gray-800">
                {filteredVouchers.length}
              </span>{" "}
              / {vouchers.length} voucher
            </p>
          )}
        </main>

        {/* =================================================
        FORM MODAL
    ================================================= */}

        {showForm && (
          <VoucherFormModal
            voucher={editingVoucher}
            onClose={() => {
              setShowForm(false);
              setEditingVoucher(null);
            }}
            onSubmit={handleSave}
          />
        )}

        {/* =================================================
        DETAIL MODAL
    ================================================= */}

        {viewingVoucher && (
          <VoucherDetailModal
            voucher={viewingVoucher}
            onClose={() => setViewingVoucher(null)}
            onEdit={() => {
              setViewingVoucher(null);
              handleEdit(viewingVoucher);
            }}
          />
        )}

        {/* =================================================
        DELETE MODAL
    ================================================= */}

        {deleteVoucher && (
          <ConfirmDisableModal
            voucher={deleteVoucher}
            onClose={() => setDeleteVoucher(null)}
            onConfirm={handleDisable}
          />
        )}

        {activateVoucher && (
          <ConfirmActivateModal
            voucher={activateVoucher}
            onClose={() => setActivateVoucher(null)}
            onConfirm={handleActivateVoucher}
          />
        )}
      </div>
    </ProtectedRoute>
  );
}

/* =========================================================
STAT CARD
========================================================= */

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:p-5">
      {" "}
      <div className="flex items-center justify-between">
        {" "}
        <div>
          {" "}
          <p className="text-sm text-gray-500">{title} </p>
          <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-700">
          <span className="h-5 w-5">{icon}</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
ROW
========================================================= */

function VoucherRow({
  voucher,
  index,
  onView,
  onEdit,
  onDisable,
  onActive,
  onCopy,
}: {
  voucher: Voucher;
  index: number;
  onView: () => void;
  onEdit: () => void;
  onDisable: () => void;
  onCopy: () => void;
  onActive: () => void;
}) {
  const status = getVoucherStatus(voucher);
  const StatusIcon = status.icon;

  return (
    <tr
      className="animate-in fade-in slide-in-from-bottom-2 duration-300"
      style={{
        animationDelay: `${index * 40}ms`,
      }}
    >
      {/* {" "} */}
      <td className="px-5 py-4">
        {/* {" "} */}
        <div className="flex items-center gap-3">
          {/* {" "} */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100">
            {/* {" "} */}
            <Ticket className="h-5 w-5 text-gray-700" />{" "}
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900">{voucher.code}</span>

              <button
                onClick={onCopy}
                className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                title="Sao chép"
              >
                <Copy className="h-3.5 w-3.5" />
              </button>
            </div>

            <p className="max-w-[230px] truncate text-xs text-gray-500">
              {voucher.description || "Không có mô tả"}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-4">
        <span
          className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
            voucher.voucherType === "DISCOUNT"
              ? "bg-blue-50 text-blue-700"
              : "bg-purple-50 text-purple-700"
          }`}
        >
          {voucher.voucherType === "DISCOUNT" ? "Giảm giá" : "Freeship"}
        </span>
      </td>
      <td className="px-5 py-4">
        <div className="font-semibold text-gray-900">
          {voucher.discountType === "PERCENT"
            ? `${voucher.discountValue}%`
            : formatCurrency(voucher.discountValue)}
        </div>

        {voucher.maxDiscount && (
          <div className="mt-1 text-xs text-gray-500">
            Tối đa {formatCurrency(voucher.maxDiscount)}
          </div>
        )}
      </td>
      <td className="px-5 py-4">
        <span className="font-medium text-gray-900">{voucher.usedCount}</span>

        <span className="text-gray-400"> / {voucher.usageLimit ?? "∞"}</span>
      </td>
      <td className="px-5 py-4">
        <p className="text-xs text-gray-600">{formatDate(voucher.startAt)}</p>

        <p className="mt-1 text-xs text-gray-400">
          → {formatDate(voucher.endAt)}
        </p>
      </td>
      <td className="px-5 py-4">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${status.className}`}
        >
          <StatusIcon className="h-3.5 w-3.5" />
          {status.label}
        </span>
      </td>
      <td className="px-5 py-4">
        <div className="flex justify-end gap-1">
          <button
            onClick={onView}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            title="Xem"
          >
            <Eye className="h-4 w-4" />
          </button>

          <button
            onClick={onEdit}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600"
            title="Chỉnh sửa"
          >
            <Edit className="h-4 w-4" />
          </button>

          {voucher.isActive && (
            <button
              onClick={onDisable}
              className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
              title="Vô hiệu hóa"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
          {!voucher.isActive && (
            <button
              onClick={onActive}
              className="rounded-lg p-2 text-gray-500 transition hover:bg-green-50 hover:text-green-600"
              title="Activate"
            >
              <Power className="h-4 w-4" />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}

/* =========================================================
MOBILE CARD
========================================================= */

function VoucherMobileCard({
  voucher,
  index,
  onView,
  onEdit,
  onDisable,
}: {
  voucher: Voucher;
  index: number;
  onView: () => void;
  onEdit: () => void;
  onDisable: () => void;
}) {
  const status = getVoucherStatus(voucher);
  const StatusIcon = status.icon;

  return (
    <div
      className="animate-in fade-in slide-in-from-bottom-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm duration-300"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      {" "}
      <div className="flex items-start justify-between gap-3">
        {" "}
        <div>
          {" "}
          <div className="flex items-center gap-2">
            {" "}
            <Ticket className="h-5 w-5 text-gray-700" />
            <span className="font-bold text-gray-900">{voucher.code}</span>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            {voucher.description || "Không có mô tả"}
          </p>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold ${status.className}`}
        >
          <StatusIcon className="h-3 w-3" />
          {status.label}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3">
        <div>
          <p className="text-xs text-gray-500">Loại</p>

          <p className="mt-1 text-sm font-semibold">
            {voucher.voucherType === "DISCOUNT" ? "Giảm giá" : "Freeship"}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Giá trị</p>

          <p className="mt-1 text-sm font-semibold">
            {voucher.discountType === "PERCENT"
              ? `${voucher.discountValue}%`
              : formatCurrency(voucher.discountValue)}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Đã dùng</p>

          <p className="mt-1 text-sm font-semibold">
            {voucher.usedCount} / {voucher.usageLimit ?? "∞"}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-500">Tối thiểu</p>

          <p className="mt-1 text-sm font-semibold">
            {voucher.minOrderValue
              ? formatCurrency(voucher.minOrderValue)
              : "Không"}
          </p>
        </div>
      </div>
      <div className="mt-3 text-xs text-gray-500">
        {formatDate(voucher.startAt)} → {formatDate(voucher.endAt)}
      </div>
      <div className="mt-4 flex gap-2">
        <button
          onClick={onView}
          className="flex-1 rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Xem
        </button>

        <button
          onClick={onEdit}
          className="flex-1 rounded-xl bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Chỉnh sửa
        </button>

        {voucher.isActive && (
          <button
            onClick={onDisable}
            className="rounded-xl border border-red-200 px-3 py-2 text-red-600 hover:bg-red-50"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

/* =========================================================
SKELETON
========================================================= */

function VoucherSkeleton() {
  return (
    <tr className="animate-pulse">
      {Array.from({
        length: 7,
      }).map((_, index) => (
        <td key={index} className="px-5 py-5">
          <div className="h-4 w-24 rounded bg-gray-200" />{" "}
        </td>
      ))}
    </tr>
  );
}

/* =========================================================
FORM MODAL
========================================================= */

function VoucherFormModal({
  voucher,
  onClose,
  onSubmit,
}: {
  voucher: Voucher | null;
  onClose: () => void;
  onSubmit: (form: VoucherForm) => Promise<void>;
}) {
  const [form, setForm] = useState<VoucherForm>(() =>
    voucher
      ? {
          code: voucher.code,
          voucherType: voucher.voucherType,
          discountType: voucher.discountType,
          discountValue: String(voucher.discountValue),
          maxDiscount:
            voucher.maxDiscount !== null && voucher.maxDiscount !== undefined
              ? String(voucher.maxDiscount)
              : "",
          minOrderValue:
            voucher.minOrderValue !== null &&
            voucher.minOrderValue !== undefined
              ? String(voucher.minOrderValue)
              : "",
          description: voucher.description || "",
          usageLimit:
            voucher.usageLimit !== null ? String(voucher.usageLimit) : "",
          startAt: toDateTimeLocal(voucher.startAt),
          endAt: toDateTimeLocal(voucher.endAt),
        }
      : emptyForm,
  );

  const [saving, setSaving] = useState(false);

  const handleChange = (key: keyof VoucherForm, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.code.trim()) {
      alert("Vui lòng nhập mã voucher");
      return;
    }

    if (!form.discountValue) {
      alert("Vui lòng nhập giá trị giảm");
      return;
    }

    if (!form.startAt || !form.endAt) {
      alert("Vui lòng nhập thời gian");
      return;
    }

    if (new Date(form.endAt) <= new Date(form.startAt)) {
      alert("Thời gian kết thúc phải sau thời gian bắt đầu");
      return;
    }

    if (form.discountType === "PERCENT" && Number(form.discountValue) > 100) {
      alert("Phần trăm giảm không được lớn hơn 100%");
      return;
    }

    try {
      setSaving(true);
      await onSubmit(form);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl max-h-[94vh] overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {/* HEADER */}

        <div className="flex items-center justify-between border-b px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              {voucher ? "Chỉnh sửa voucher" : "Tạo voucher mới"}
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Thiết lập thông tin voucher
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* BODY */}

        <div className="max-h-[calc(94vh-130px)] overflow-y-auto p-5 sm:p-6">
          <div className="space-y-5">
            {/* CODE */}

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Mã voucher
              </label>

              <input
                value={form.code}
                onChange={(e) =>
                  handleChange("code", e.target.value.toUpperCase())
                }
                placeholder="VD: SALE10PT"
                disabled={!!voucher}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm uppercase outline-none focus:border-gray-500 disabled:bg-gray-100"
              />

              {voucher && (
                <p className="mt-1 text-xs text-gray-400">
                  Mã voucher không thể thay đổi.
                </p>
              )}
            </div>

            {/* TYPE */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Loại voucher
                </label>

                <select
                  value={form.voucherType}
                  onChange={(e) => handleChange("voucherType", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
                >
                  <option value="DISCOUNT">Giảm giá</option>
                  <option value="FREESHIP">Freeship</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Kiểu giảm
                </label>

                <select
                  value={form.discountType}
                  onChange={(e) => handleChange("discountType", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
                >
                  <option value="PERCENT">Phần trăm (%)</option>
                  <option value="FIXED_AMOUNT">Số tiền (₫)</option>
                </select>
              </div>
            </div>

            {/* VALUE */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Giá trị giảm
                </label>

                <input
                  type="number"
                  min="0"
                  value={form.discountValue}
                  onChange={(e) =>
                    handleChange("discountValue", e.target.value)
                  }
                  placeholder={form.discountType === "PERCENT" ? "10" : "50000"}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Giảm tối đa
                </label>

                <input
                  type="number"
                  min="0"
                  value={form.maxDiscount}
                  onChange={(e) => handleChange("maxDiscount", e.target.value)}
                  placeholder="50000"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
                />
              </div>
            </div>

            {/* MIN ORDER + LIMIT */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Đơn tối thiểu
                </label>

                <input
                  type="number"
                  min="0"
                  value={form.minOrderValue}
                  onChange={(e) =>
                    handleChange("minOrderValue", e.target.value)
                  }
                  placeholder="200000"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Giới hạn lượt dùng
                </label>

                <input
                  type="number"
                  min="0"
                  value={form.usageLimit}
                  onChange={(e) => handleChange("usageLimit", e.target.value)}
                  placeholder="100"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
                />

                <p className="mt-1 text-xs text-gray-400">
                  Để trống nếu không giới hạn.
                </p>
              </div>
            </div>

            {/* DATE */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Bắt đầu
                </label>

                <input
                  type="datetime-local"
                  value={form.startAt}
                  onChange={(e) => handleChange("startAt", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Kết thúc
                </label>

                <input
                  type="datetime-local"
                  value={form.endAt}
                  onChange={(e) => handleChange("endAt", e.target.value)}
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
                />
              </div>
            </div>

            {/* DESCRIPTION */}

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Mô tả
              </label>

              <textarea
                rows={3}
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Nhập mô tả voucher..."
                className="w-full resize-none rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-gray-500"
              />
            </div>
          </div>
        </div>

        {/* FOOTER */}

        <div className="flex justify-end gap-2 border-t bg-gray-50 px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Hủy
          </button>

          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {saving && <Loader2 className="h-4 w-4 animate-spin" />}

            {saving ? "Đang lưu..." : voucher ? "Lưu thay đổi" : "Tạo voucher"}
          </button>
        </div>
      </form>
    </div>
  );
}

/* =========================================================
DETAIL MODAL
========================================================= */

function VoucherDetailModal({
  voucher,
  onClose,
  onEdit,
}: {
  voucher: Voucher;
  onClose: () => void;
  onEdit: () => void;
}) {
  const status = getVoucherStatus(voucher);
  const StatusIcon = status.icon;

  return (
    <div
      className="fixed inset-0 z-[150] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg max-h-[92vh] overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        {" "}
        <div className="flex items-center justify-between border-b px-5 py-4">
          {" "}
          <div>
            {" "}
            <h2 className="text-lg font-bold text-gray-900">
              Chi tiết voucher{" "}
            </h2>
            <p className="mt-1 text-xs text-gray-500">#{voucher.id}</p>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="max-h-[calc(92vh-130px)] overflow-y-auto p-5">
          <div className="rounded-2xl bg-gray-900 p-5 text-white">
            <div className="flex items-center justify-between">
              <Ticket className="h-7 w-7" />

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${status.className}`}
              >
                {status.label}
              </span>
            </div>

            <p className="mt-6 text-xs text-gray-400">MÃ VOUCHER</p>

            <div className="mt-1 flex items-center gap-2">
              <h3 className="text-2xl font-bold tracking-wide">
                {voucher.code}
              </h3>

              <Copy
                className="h-4 w-4 cursor-pointer text-gray-400 hover:text-white"
                onClick={() => navigator.clipboard.writeText(voucher.code)}
              />
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <DetailItem
              label="Loại"
              value={
                voucher.voucherType === "DISCOUNT" ? "Giảm giá" : "Freeship"
              }
            />

            <DetailItem
              label="Kiểu giảm"
              value={
                voucher.discountType === "PERCENT" ? "Phần trăm" : "Số tiền"
              }
            />

            <DetailItem
              label="Giá trị"
              value={
                voucher.discountType === "PERCENT"
                  ? `${voucher.discountValue}%`
                  : formatCurrency(voucher.discountValue)
              }
            />

            <DetailItem
              label="Giảm tối đa"
              value={
                voucher.maxDiscount
                  ? formatCurrency(voucher.maxDiscount)
                  : "Không"
              }
            />

            <DetailItem
              label="Đơn tối thiểu"
              value={
                voucher.minOrderValue
                  ? formatCurrency(voucher.minOrderValue)
                  : "Không"
              }
            />

            <DetailItem
              label="Đã sử dụng"
              value={`${voucher.usedCount} / ${voucher.usageLimit ?? "∞"}`}
            />
          </div>

          <div className="mt-4 rounded-xl border p-4">
            <p className="text-xs text-gray-500">Thời gian áp dụng</p>

            <div className="mt-2 space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-gray-500">Bắt đầu</span>

                <span className="font-medium text-gray-900">
                  {formatDate(voucher.startAt)}
                </span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-gray-500">Kết thúc</span>

                <span className="font-medium text-gray-900">
                  {formatDate(voucher.endAt)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-xl bg-gray-50 p-4">
            <p className="text-xs text-gray-500">Mô tả</p>

            <p className="mt-2 text-sm text-gray-700">
              {voucher.description || "Không có mô tả"}
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-2 border-t bg-gray-50 px-5 py-4">
          <button
            onClick={onClose}
            className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            Đóng
          </button>

          <button
            onClick={onEdit}
            className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-gray-800"
          >
            <Edit className="h-4 w-4" />
            Chỉnh sửa
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
DETAIL ITEM
========================================================= */

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border bg-white p-3">
      <p className="text-xs text-gray-500">{label}</p>

      <p className="mt-1 text-sm font-semibold text-gray-900">{value}</p>
    </div>
  );
}

/* =========================================================
CONFIRM DISABLE
========================================================= */

function ConfirmDisableModal({
  voucher,
  onClose,
  onConfirm,
}: {
  voucher: Voucher;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
          <Trash2 className="h-6 w-6 text-red-600" />
        </div>

        <h2 className="mt-4 text-lg font-bold text-gray-900">
          Vô hiệu hóa voucher?
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Bạn có chắc muốn vô hiệu hóa voucher{" "}
          <span className="font-semibold text-gray-900">{voucher.code}</span>?
          Voucher sẽ không còn được sử dụng.
        </p>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            Hủy
          </button>

          <button
            onClick={handleConfirm}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Vô hiệu hóa
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
CONFIRM ACTIVATE
========================================================= */

function ConfirmActivateModal({
  voucher,
  onClose,
  onConfirm,
}: {
  voucher: Voucher;
  onClose: () => void;
  onConfirm: () => Promise<void>;
}) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    try {
      setLoading(true);
      await onConfirm();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <Power className="h-6 w-6 text-green-600" />
        </div>

        <h2 className="mt-4 text-lg font-bold text-gray-900">
          Bật lại voucher?
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Bạn có chắc muốn bật lại voucher{" "}
          <span className="font-semibold text-gray-900">{voucher.code}</span>?
          Voucher sẽ được kích hoạt lại nếu còn thời hạn và lượt sử dụng.
        </p>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium hover:bg-gray-50"
          >
            Hủy
          </button>

          <button
            onClick={handleConfirm}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700 disabled:opacity-60"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Bật lại
          </button>
        </div>
      </div>
    </div>
  );
}
