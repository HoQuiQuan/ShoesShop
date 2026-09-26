"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

export interface HeroSlide {
  id: number | string;
  image: string | StaticImageData; // truyền ảnh string URL hoặc import tĩnh (vd: import banner from "../public/banner.jpg")
  eyebrow?: string; // dòng nhỏ phía trên tiêu đề, vd: "BỘ SƯU TẬP MỚI"
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

interface HeroBannerProps {
  slides: HeroSlide[];
  autoPlayInterval?: number; // ms, mặc định 6000. Truyền 0 để tắt tự chạy
}

export default function HeroBanner({
  slides,
  autoPlayInterval = 6000,
}: HeroBannerProps) {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const total = slides.length;
      if (total === 0) return; // tránh chia cho 0 → NaN
      setCurrent(((index % total) + total) % total);
    },
    [slides.length],
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play, dừng khi người dùng đang hover/focus vào banner
  useEffect(() => {
    if (autoPlayInterval <= 0 || slides.length <= 1 || isPaused) return;
    timerRef.current = setInterval(next, autoPlayInterval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next, autoPlayInterval, isPaused, slides.length]);

  if (slides.length === 0) return null;

  return (
    <section
      className="relative w-full overflow-hidden bg-neutral-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Banner khuyến mãi"
    >
      {/* Vùng ảnh + nội dung, chiều cao co giãn theo màn hình */}
      <div className="relative h-[62vw] max-h-[560px] min-h-[320px] w-full sm:h-[46vw] md:h-[40vw] lg:h-[34vw]">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive
                  ? "opacity-100 z-10"
                  : "pointer-events-none opacity-0 z-0"
              }`}
              aria-hidden={!isActive}
            >
              {/* Ảnh nền, hiệu ứng zoom chậm (Ken Burns) khi slide đang active */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className={`object-cover transition-transform ease-out motion-reduce:transition-none ${
                  isActive
                    ? "duration-[6000ms] scale-110"
                    : "duration-0 scale-100"
                }`}
              />

              {/* Gradient tối bên trái để chữ luôn rõ dù ảnh sáng hay tối */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

              {/* Nội dung chữ */}
              <div className="relative z-10 flex h-full items-center px-6 sm:px-10 lg:px-16">
                <div className="max-w-md sm:max-w-lg">
                  {slide.eyebrow && (
                    <span
                      className={`mb-3 inline-block rounded-full bg-red-500 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white transition-all duration-700 ${
                        isActive
                          ? "translate-y-0 opacity-100 delay-150"
                          : "translate-y-3 opacity-0"
                      }`}
                    >
                      {slide.eyebrow}
                    </span>
                  )}

                  <h1
                    className={`text-3xl font-extrabold uppercase leading-[1.05] tracking-tight text-white transition-all duration-700 sm:text-4xl md:text-5xl lg:text-6xl ${
                      isActive
                        ? "translate-y-0 opacity-100 delay-200"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  {slide.subtitle && (
                    <p
                      className={`mt-3 max-w-sm text-sm text-white/80 transition-all duration-700 sm:text-base ${
                        isActive
                          ? "translate-y-0 opacity-100 delay-300"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      {slide.subtitle}
                    </p>
                  )}

                  {slide.ctaText && (
                    <button
                      type="button"
                      onClick={() =>
                        slide.ctaHref && router.push(slide.ctaHref)
                      }
                      className={`group/cta mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-neutral-900 transition-all duration-700 hover:bg-red-500 hover:text-white active:scale-95 ${
                        isActive
                          ? "translate-y-0 opacity-100 delay-500"
                          : "translate-y-4 opacity-0"
                      }`}
                    >
                      {slide.ctaText}
                      <ChevronRight
                        size={16}
                        className="transition-transform duration-200 group-hover/cta:translate-x-1"
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mũi tên điều hướng — chỉ hiện khi có nhiều hơn 1 slide */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Banner trước"
            className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-11 sm:w-11"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Banner tiếp theo"
            className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-11 sm:w-11"
          >
            <ChevronRight size={20} />
          </button>

          {/* Chấm điều hướng */}
          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-6">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Đến banner ${index + 1}`}
                aria-current={index === current}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current
                    ? "w-6 bg-red-500"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
