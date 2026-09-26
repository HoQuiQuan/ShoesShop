"use client";

import { useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Loader2,
  MessageCircle,
  Star,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import ReviewApi from "@/app/Api/Review.api";

type ReviewUser = {
  id: number;
  name: string;
  avatar?: string | null;
};

type ProductReview = {
  id: number;
  rating: number;
  content: string;
  createdAt: string;
  user: ReviewUser;
};

type RatingCounts = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
};

type ProductReviewResponse = {
  reviews: ProductReview[];
  summary: {
    averageRating: number;
    totalReviews: number;
    ratingCounts: RatingCounts;
  };
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

interface ProductReviewSectionProps {
  productId: number;
}

const STAR_VALUES = [1, 2, 3, 4, 5] as const;

function formatDate(date: string) {
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

function getInitial(name?: string) {
  return name?.trim()?.charAt(0)?.toUpperCase() || "U";
}

function getPercentage(count: number, total: number): number {
  if (!total) return 0;

  return Math.round((count / total) * 100);
}

function StaticStars({ value, size = 18 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {STAR_VALUES.map((star) => {
        const active = star <= Math.round(value);

        return (
          <Star
            key={star}
            size={size}
            strokeWidth={1.8}
            className={
              active
                ? "fill-amber-400 text-amber-400"
                : "fill-transparent text-gray-300"
            }
          />
        );
      })}
    </div>
  );
}

function RatingFilterButton({
  value,
  active,
  count,
  onClick,
}: {
  value: number | "all";
  active: boolean;
  count?: number;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex
        min-h-9
        items-center
        gap-1.5
        rounded-lg
        border
        px-3
        text-sm
        font-medium
        transition
        ${
          active
            ? "border-gray-900 bg-gray-900 text-white"
            : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50"
        }
      `}
    >
      {value === "all" ? (
        "Tất cả"
      ) : (
        <>
          <Star
            className={
              active
                ? "fill-amber-300 text-amber-300"
                : "fill-amber-400 text-amber-400"
            }
            size={14}
          />
          {value}
        </>
      )}

      {count !== undefined && (
        <span className={active ? "text-gray-300" : "text-gray-400"}>
          ({count})
        </span>
      )}
    </button>
  );
}

export default function ProductReviewSection({
  productId,
}: ProductReviewSectionProps) {
  const [ratingFilter, setRatingFilter] = useState<number | "all">("all");

  const [page, setPage] = useState(1);

  const limit = 5;

  const { data, isLoading, isError, isFetching } =
    useQuery<ProductReviewResponse>({
      queryKey: ["product-reviews", productId, ratingFilter, page],

      queryFn: async () => {
        const response = await ReviewApi.getProductReviews(productId, {
          page,
          limit,
          rating: ratingFilter === "all" ? undefined : ratingFilter,
        });

        return response.data.data;
      },

      staleTime: 30_000,
    });

  const summary = data?.summary;
  console.log("data ProductReviewSection", data);

  const ratingCounts = useMemo(() => {
    return {
      5: summary?.ratingCounts?.[5] ?? 0,
      4: summary?.ratingCounts?.[4] ?? 0,
      3: summary?.ratingCounts?.[3] ?? 0,
      2: summary?.ratingCounts?.[2] ?? 0,
      1: summary?.ratingCounts?.[1] ?? 0,
    };
  }, [summary]);

  const handleFilterChange = (value: number | "all") => {
    setRatingFilter(value);
    setPage(1);
  };

  return (
    <section className="mt-10 sm:mt-14">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-5 md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
              <MessageCircle className="h-5 w-5 text-amber-500" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Đánh giá sản phẩm
              </h2>

              <p className="mt-0.5 text-sm text-gray-500">
                Chia sẻ trải nghiệm của bạn về sản phẩm
              </p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="border-b border-gray-100 px-5 py-6 md:px-7">
          {isLoading ? (
            <div className="flex justify-center py-6">
              <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
            </div>
          ) : isError ? (
            <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
              Không thể tải đánh giá sản phẩm.
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-[180px_1fr]">
              {/* Average */}
              <div className="flex flex-col items-center justify-center border-b border-gray-100 pb-6 md:border-b-0 md:border-r md:pb-0 md:pr-8">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {Number(summary?.averageRating ?? 0).toFixed(1)}
                </span>

                <div className="mt-2">
                  <StaticStars value={summary?.averageRating ?? 0} size={20} />
                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {summary?.totalReviews ?? 0} đánh giá
                </p>
              </div>

              {/* Rating distribution */}
              <div className="flex flex-col justify-center gap-2.5">
                {([5, 4, 3, 2, 1] as const).map((star) => {
                  const count = ratingCounts[star];

                  const percentage = getPercentage(
                    count,
                    summary?.totalReviews ?? 0,
                  );

                  return (
                    <button
                      type="button"
                      key={star}
                      onClick={() => handleFilterChange(star)}
                      className="group flex items-center gap-3 text-sm"
                    >
                      <div className="flex w-14 shrink-0 items-center gap-1">
                        <span className="text-gray-600">{star}</span>

                        <Star
                          size={13}
                          className="fill-amber-400 text-amber-400"
                        />
                      </div>

                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="h-full rounded-full bg-amber-400 transition-all duration-500"
                          style={{
                            width: `${percentage}%`,
                          }}
                        />
                      </div>

                      <span className="w-10 shrink-0 text-right text-xs text-gray-400">
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Filter */}
        {!isLoading && !isError && (
          <div className="border-b border-gray-100 px-5 py-4 md:px-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />

                <span className="text-sm font-medium text-gray-700">
                  Lọc đánh giá
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <RatingFilterButton
                  value="all"
                  active={ratingFilter === "all"}
                  count={summary?.totalReviews}
                  onClick={() => handleFilterChange("all")}
                />

                {([5, 4, 3, 2, 1] as const).map((star) => (
                  <RatingFilterButton
                    key={star}
                    value={star}
                    active={ratingFilter === star}
                    count={ratingCounts[star]}
                    onClick={() => handleFilterChange(star)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Reviews */}
        <div>
          {isLoading ? (
            <div className="flex justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-gray-400" />
            </div>
          ) : data?.reviews?.length ? (
            <>
              <div className="divide-y divide-gray-100">
                {data.reviews.map((review) => (
                  <div key={review.id} className="px-5 py-6 md:px-7">
                    <div className="flex gap-3">
                      {/* Avatar */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
                        {review.user.avatar ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={review.user.avatar}
                            alt={review.user.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          getInitial(review.user.name)
                        )}
                      </div>

                      <div className="min-w-0 flex-1">
                        {/* User + date */}
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-sm font-semibold text-gray-900">
                            {review.user.name}
                          </p>

                          <time className="text-xs text-gray-400">
                            {formatDate(review.createdAt)}
                          </time>
                        </div>

                        {/* Rating */}
                        <div className="mt-1.5">
                          <StaticStars value={review.rating} size={16} />
                        </div>

                        {/* Comment */}
                        <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-gray-700">
                          {review.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {(data.totalPages ?? 1) > 1 && (
                <div className="flex items-center justify-center gap-2 border-t border-gray-100 px-5 py-5">
                  <button
                    type="button"
                    disabled={page <= 1 || isFetching}
                    onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-lg
                      border border-gray-200
                      text-gray-600
                      transition
                      hover:bg-gray-50
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                    aria-label="Trang trước"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <span className="min-w-20 text-center text-sm text-gray-600">
                    Trang {data.page} / {data.totalPages}
                  </span>

                  <button
                    type="button"
                    disabled={page >= data.totalPages || isFetching}
                    onClick={() =>
                      setPage((prev) => Math.min(data.totalPages, prev + 1))
                    }
                    className="
                      flex h-9 w-9
                      items-center justify-center
                      rounded-lg
                      border border-gray-200
                      text-gray-600
                      transition
                      hover:bg-gray-50
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                    aria-label="Trang sau"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="px-5 py-12 text-center md:px-7">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                <MessageCircle className="h-6 w-6 text-gray-400" />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-gray-900">
                Chưa có đánh giá
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                Hãy là người đầu tiên chia sẻ trải nghiệm về sản phẩm này.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
