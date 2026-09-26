"use client";

export default function PaymentPending() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />
        </div>

        <h1 className="text-xl font-semibold text-gray-900">
          Đang kiểm tra thanh toán
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Hệ thống đang xác nhận giao dịch với VNPAY.
        </p>

        <p className="mt-4 text-xs text-gray-400">
          Vui lòng không đóng trang này.
        </p>
      </div>
    </div>
  );
}
