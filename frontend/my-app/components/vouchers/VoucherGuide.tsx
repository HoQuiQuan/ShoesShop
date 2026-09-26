import { CheckCircle2, Gift, ShoppingBag, TicketCheck } from "lucide-react";

const steps = [
  {
    icon: Gift,
    title: "Nhận voucher",
    description: "Chọn ưu đãi phù hợp và nhấn nút Nhận voucher.",
  },
  {
    icon: TicketCheck,
    title: "Lưu vào tài khoản",
    description: "Voucher sẽ được lưu trong kho voucher của bạn.",
  },
  {
    icon: ShoppingBag,
    title: "Mua sản phẩm",
    description: "Chọn sản phẩm yêu thích và tiến hành thanh toán.",
  },
  {
    icon: CheckCircle2,
    title: "Áp dụng giảm giá",
    description: "Chọn voucher phù hợp trước khi hoàn tất đơn hàng.",
  },
];

export default function VoucherGuide() {
  return (
    <section className="mt-16">
      <div className="mb-8 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-orange-500">
          Hướng dẫn
        </p>

        <h2 className="mt-2 text-2xl font-black text-gray-900 sm:text-3xl">
          Nhận và sử dụng voucher
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500">
          Chỉ với vài bước đơn giản, bạn có thể nhận ưu đãi và tiết kiệm khi mua
          sắm tại ShoeShop.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="group relative rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl"
            >
              <span className="absolute right-5 top-5 text-4xl font-black text-gray-100">
                0{index + 1}
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-500 transition-transform duration-300 group-hover:scale-110">
                <Icon size={25} />
              </div>

              <h3 className="mt-5 font-bold text-gray-900">{step.title}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
