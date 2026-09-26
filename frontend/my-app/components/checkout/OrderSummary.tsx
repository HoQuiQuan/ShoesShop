import { ShieldCheck } from "lucide-react";

interface Props {
  subtotal: number;
  shippingFee: number;
  discount: number;
  shippingDiscount: number;
  total: number;
  onOrder: () => void;
}

export default function OrderSummary({
  subtotal,
  shippingFee,
  discount,
  shippingDiscount,
  total,
  onOrder,
}: Props) {
  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b px-5 py-4">
        <h2 className="font-semibold">Tóm tắt đơn hàng</h2>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Tạm tính</span>

          <span className="font-medium">
            {subtotal.toLocaleString("vi-VN")}đ
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Phí vận chuyển</span>

          <span className="font-medium">
            {shippingFee.toLocaleString("vi-VN")}đ
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Giảm giá</span>

            <span className="font-medium text-green-600">
              -{discount.toLocaleString("vi-VN")}đ
            </span>
          </div>
        )}

        {shippingDiscount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Freeship</span>

            <span className="font-medium text-green-600">
              -{shippingDiscount.toLocaleString("vi-VN")}đ
            </span>
          </div>
        )}

        <div className="border-t pt-4">
          <div className="flex items-end justify-between gap-3">
            <span className="font-semibold">Tổng thanh toán</span>

            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">
                {total.toLocaleString("vi-VN")}đ
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Đã bao gồm các loại phí
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onOrder}
          className="w-full rounded-xl bg-black py-4 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-[0.99]"
        >
          Đặt hàng
        </button>

        <div className="flex items-start gap-2 rounded-xl bg-gray-50 p-3">
          <ShieldCheck size={17} className="mt-0.5 shrink-0 text-green-600" />

          <p className="text-xs leading-5 text-gray-500">
            Thông tin thanh toán của bạn được bảo mật và chỉ được sử dụng để xử
            lý đơn hàng.
          </p>
        </div>
      </div>
    </section>
  );
}
