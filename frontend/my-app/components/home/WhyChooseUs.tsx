import { ShieldCheck, Truck, RefreshCcw, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Giao hàng toàn quốc",
    description: "Giao hàng thuận tiện đến địa chỉ của bạn.",
  },
  {
    icon: ShieldCheck,
    title: "Thanh toán an toàn",
    description: "Hỗ trợ các phương thức thanh toán tiện lợi.",
  },
  {
    icon: RefreshCcw,
    title: "Hỗ trợ đổi trả",
    description: "Chính sách đổi trả rõ ràng, minh bạch.",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ khách hàng",
    description: "Đồng hành cùng bạn trong quá trình mua sắm.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mb-10 text-center">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
          Shopping with confidence
        </p>

        <h2 className="text-2xl font-black tracking-tight sm:text-4xl">
          Trải nghiệm mua sắm khác biệt
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              style={{ animationDelay: `${index * 100}ms` }}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-gray-200/50 animate-[fadeUp_.6s_ease_both]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition duration-300 group-hover:bg-orange-500 group-hover:text-white">
                <Icon size={23} />
              </div>

              <h3 className="font-bold text-gray-900">{item.title}</h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
