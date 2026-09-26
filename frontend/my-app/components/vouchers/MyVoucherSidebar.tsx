import { ChevronRight, Gift, PackageOpen, Ticket } from "lucide-react";
import { Voucher } from "./VoucherCard";

interface MyVoucherSidebarProps {
  vouchers: Voucher[];
}

export default function MyVoucherSidebar({ vouchers }: MyVoucherSidebarProps) {
  return (
    <aside className="h-fit rounded-3xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
            <Ticket size={20} />
          </div>

          <div>
            <h2 className="font-bold text-gray-900">Voucher của tôi</h2>

            <p className="text-xs text-gray-500">Ưu đãi bạn đã nhận</p>
          </div>
        </div>

        <button className="text-sm font-semibold text-orange-500 hover:text-orange-600">
          Xem tất cả
        </button>
      </div>

      {!vouchers.length ? (
        <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
            <PackageOpen size={30} />
          </div>

          <h3 className="mt-5 font-bold text-gray-900">Chưa có voucher nào</h3>

          <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
            Hãy nhận những voucher hấp dẫn để tiết kiệm cho đơn hàng tiếp theo.
          </p>
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          {vouchers.slice(0, 5).map((voucher) => (
            <button
              key={voucher.id}
              className="group flex w-full items-center gap-3 rounded-2xl border border-gray-100 p-3 text-left transition-all hover:border-orange-200 hover:bg-orange-50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-500">
                {voucher.voucherType === "FREESHIP" ? (
                  <Gift size={19} />
                ) : (
                  <Ticket size={19} />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-gray-800">
                  {voucher.code}
                </p>

                <p className="mt-1 truncate text-xs text-gray-500">
                  {voucher.voucherType === "FREESHIP"
                    ? "Miễn phí vận chuyển"
                    : voucher.discountType === "PERCENT"
                      ? `Giảm ${voucher.discountValue}%`
                      : `Giảm ${voucher.discountValue?.toLocaleString(
                          "vi-VN",
                        )}đ`}
                </p>
              </div>

              <ChevronRight
                size={18}
                className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-orange-500"
              />
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}
