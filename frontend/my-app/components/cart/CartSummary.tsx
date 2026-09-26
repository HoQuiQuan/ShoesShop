import { ArrowRight, ShieldCheck, Truck } from "lucide-react";

interface Props {
  subtotal: number;
  shippingFee: number;
  total: number;
  selectedCount: number;
  handlePay: () => void;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(price);
};

export default function CartSummary({
  subtotal,
  shippingFee,
  total,
  selectedCount,
  handlePay,
}: Props) {
  return (
    <aside className="h-fit lg:sticky lg:top-6">
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6">
        <h2 className="text-lg font-bold text-neutral-950">Tóm tắt đơn hàng</h2>

        <div className="mt-5 space-y-4">
          <div className="flex justify-between gap-4 text-sm">
            <span className="text-neutral-500">
              Tạm tính ({selectedCount} sản phẩm)
            </span>

            <span className="font-medium text-neutral-900">
              {formatPrice(subtotal)}
            </span>
          </div>

          <div className="flex justify-between gap-4 text-sm">
            <span className="flex items-center gap-2 text-neutral-500">
              <Truck size={15} />
              Phí vận chuyển
            </span>

            <span className="font-medium text-neutral-900">
              {shippingFee > 0 ? formatPrice(shippingFee) : "Miễn phí"}
            </span>
          </div>

          <div className="border-t border-dashed border-neutral-200 pt-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-neutral-900">
                  Tổng cộng
                </p>

                <p className="mt-1 text-xs text-neutral-400">Đã bao gồm VAT</p>
              </div>

              <p className="text-xl font-bold text-neutral-950">
                {formatPrice(total)}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handlePay}
          disabled={selectedCount === 0}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-black px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
        >
          Tiến hành thanh toán
          <ArrowRight size={17} />
        </button>

        {/* Benefits */}
        <div className="mt-5 space-y-3 border-t border-neutral-100 pt-5">
          <div className="flex gap-3">
            <Truck size={18} className="mt-0.5 shrink-0 text-neutral-500" />

            <div>
              <p className="text-xs font-medium text-neutral-800">
                Giao hàng nhanh chóng
              </p>

              <p className="mt-0.5 text-xs text-neutral-400">
                Theo dõi đơn hàng trực tuyến
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <ShieldCheck
              size={18}
              className="mt-0.5 shrink-0 text-neutral-500"
            />

            <div>
              <p className="text-xs font-medium text-neutral-800">
                Thanh toán an toàn
              </p>

              <p className="mt-0.5 text-xs text-neutral-400">
                Bảo mật thông tin khách hàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
