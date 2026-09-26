"use client";

function SkeletonBox({ className = "" }: { className?: string }) {
  return (
    <div
      className={`
        animate-pulse
        rounded-lg
        bg-gray-200
        ${className}
      `}
    />
  );
}

export default function OrderSkeleton() {
  return (
    <div className="space-y-5">
      {[1, 2, 3].map((order) => (
        <div
          key={order}
          className="
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
          "
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-3">
              <SkeletonBox className="h-10 w-10 rounded-xl" />

              <div className="space-y-2">
                <SkeletonBox className="h-2.5 w-20" />
                <SkeletonBox className="h-4 w-32" />
              </div>
            </div>

            <SkeletonBox className="h-7 w-28 rounded-full" />
          </div>

          {/* Items */}
          <div className="px-4 sm:px-6">
            {[1, 2].map((item) => (
              <div
                key={item}
                className="flex gap-4 border-b border-gray-100 py-4"
              >
                <SkeletonBox className="h-[76px] w-[76px] shrink-0 rounded-xl sm:h-[92px] sm:w-[92px]" />

                <div className="flex-1 space-y-3">
                  <SkeletonBox className="h-4 w-3/4" />
                  <SkeletonBox className="h-3 w-1/2" />
                  <SkeletonBox className="h-3 w-1/3" />
                </div>

                <SkeletonBox className="h-4 w-20" />
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex justify-end gap-4 bg-gray-50 px-4 py-4 sm:px-6">
            <SkeletonBox className="h-10 w-24 rounded-xl" />
            <SkeletonBox className="h-10 w-28 rounded-xl" />
          </div>
        </div>
      ))}
    </div>
  );
}
