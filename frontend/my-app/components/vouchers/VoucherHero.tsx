import { ArrowRight, Gift, Sparkles, TicketPercent } from "lucide-react";

export default function VoucherHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-500 to-amber-400 px-6 py-10 text-white shadow-xl sm:px-10 lg:px-14 lg:py-14">
      {/* Decorations */}

      <div className="absolute -right-10 -top-10 h-52 w-52 rounded-full bg-white/10 blur-2xl" />

      <div className="absolute bottom-0 right-1/4 h-40 w-40 rounded-full bg-red-400/30 blur-2xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-2">
        {/* Content */}

        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur-md">
            <Sparkles size={16} />
            ƯU ĐÃI ĐẶC BIỆT
          </div>

          <h1 className="max-w-2xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Săn voucher hôm nay,
            <br />
            <span className="text-yellow-100">tiết kiệm đến 50%</span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-orange-50 sm:text-base">
            Khám phá những voucher giảm giá và ưu đãi miễn phí vận chuyển dành
            riêng cho khách hàng ShoeShop.
          </p>

          <a
            href="#voucher-list"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-bold text-orange-600 shadow-lg transition-all hover:scale-105"
          >
            Khám phá ngay
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Illustration */}

        <div className="relative hidden min-h-[220px] items-center justify-center lg:flex">
          <div className="absolute h-48 w-48 animate-pulse rounded-full bg-white/10" />

          <div className="relative flex h-44 w-64 rotate-6 items-center justify-center rounded-[2.5rem] border border-white/30 bg-white/20 shadow-2xl backdrop-blur-md transition-transform duration-500 hover:rotate-0 hover:scale-105">
            <TicketPercent size={90} strokeWidth={1.5} />

            <div className="absolute -bottom-7 -right-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-xl">
              <Gift size={30} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
