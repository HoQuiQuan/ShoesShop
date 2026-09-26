import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function SaleBanner() {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#171717]">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative grid items-center gap-8 px-6 py-12 sm:px-12 sm:py-16 lg:grid-cols-2 lg:px-16">
          <div className="text-white">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-orange-300">
              <Sparkles size={15} />
              Special promotion
            </div>

            <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              BƯỚC CHÂN
              <br />
              <span className="text-orange-500">ĐÓN ƯU ĐÃI</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-300 sm:text-base">
              Khám phá các chương trình ưu đãi dành cho những mẫu giày được yêu
              thích.
            </p>

            <Link
              href="/sale"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20"
            >
              Khám phá ưu đãi
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative flex min-h-[220px] items-center justify-center sm:min-h-[300px]">
            <div className="absolute h-56 w-56 rounded-full border border-white/10 sm:h-72 sm:w-72" />

            <div className="absolute h-44 w-44 rounded-full border border-white/10 sm:h-60 sm:w-60" />

            <div className="relative z-10 rotate-[-12deg] text-center transition duration-700 hover:rotate-0 hover:scale-105">
              <span className="text-7xl font-black tracking-tighter text-white sm:text-8xl lg:text-9xl">
                SALE
              </span>

              <p className="mt-2 text-3xl font-black text-orange-500 sm:text-5xl">
                UP TO 50%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
