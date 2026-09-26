"use client";

interface LoadingProps {
  text?: string;
}

export default function Loading({
  text = "Đang tải dữ liệu...",
}: LoadingProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/10">
      <div className="flex flex-col items-center justify-center rounded-2xl bg-white/80 px-6 py-5 shadow-lg backdrop-blur-sm">
        {/* Spinner */}
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-neutral-200 border-t-black sm:h-12 sm:w-12" />

        {/* Text */}
        <p className="mt-3 text-center text-sm font-medium text-neutral-700 sm:text-base">
          {text}
        </p>
      </div>
    </div>
  );
}
