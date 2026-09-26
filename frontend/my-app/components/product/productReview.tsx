"use client";

import { useEffect, useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Loader2,
  Send,
  Star,
  X,
} from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import ReviewApi from "@/app/Api/Review.api";

type ProductReviewsProps = {
  orderDetailId: number;
};

const STAR_VALUES = [1, 2, 3, 4, 5] as const;

const RATING_LABELS: Record<number, string> = {
  1: "Rất không hài lòng",
  2: "Không hài lòng",
  3: "Bình thường",
  4: "Hài lòng",
  5: "Rất hài lòng",
};

function StarSelector({
  value,
  onChange,
  disabled = false,
}: {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const displayValue = hoverValue ?? value;

  return (
    <div
      className="flex items-center gap-0.5"
      onMouseLeave={() => setHoverValue(null)}
    >
      {STAR_VALUES.map((star) => {
        const active = star <= displayValue;

        return (
          <button
            key={star}
            type="button"
            disabled={disabled}
            aria-label={`Đánh giá ${star} sao`}
            onMouseEnter={() => {
              if (!disabled) {
                setHoverValue(star);
              }
            }}
            onClick={() => {
              if (!disabled) {
                onChange(star);
              }
            }}
            className="
              rounded-md p-0.5
              transition-all duration-150
              hover:scale-110
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-amber-400
              disabled:cursor-not-allowed
            "
          >
            <Star
              className={
                active
                  ? "fill-amber-400 text-amber-400"
                  : "fill-transparent text-gray-300"
              }
              size={24}
              strokeWidth={1.8}
            />
          </button>
        );
      })}
    </div>
  );
}

export default function ProductReviews({ orderDetailId }: ProductReviewsProps) {
  const queryClient = useQueryClient();

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const createReviewMutation = useMutation({
    mutationFn: async () => {
      const response = await ReviewApi.createReview(
        orderDetailId,
        rating,
        comment.trim(),
      );

      return response.data;
    },

    onSuccess: () => {
      setRating(0);
      setComment("");
      setIsOpen(false);

      // Nếu sau này bạn có query lấy review theo orderDetailId
      // thì query này sẽ được refresh.
      queryClient.invalidateQueries({
        queryKey: ["review", orderDetailId],
      });

      queryClient.invalidateQueries({
        queryKey: ["order-detail"],
      });
    },
  });

  const canSubmit =
    rating >= 1 &&
    rating <= 5 &&
    comment.trim().length >= 5 &&
    !createReviewMutation.isPending;

  // Xóa trạng thái error cũ khi user chỉnh sửa lại review
  useEffect(() => {
    if (rating > 0 || comment.length > 0) {
      createReviewMutation.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating, comment]);

  return (
    <div className="border-t border-gray-100 bg-gray-50/50 px-5 py-4 md:px-6">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />

            <p className="text-sm font-semibold text-gray-900">
              Đánh giá sản phẩm
            </p>
          </div>

          {!isOpen && (
            <p className="mt-1 text-xs text-gray-500">
              Chia sẻ trải nghiệm của bạn về sản phẩm này
            </p>
          )}
        </div>

        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="
              inline-flex shrink-0 items-center gap-1.5
              rounded-lg
              border border-gray-200
              bg-white
              px-3
              py-2
              text-xs
              font-semibold
              text-gray-800
              shadow-sm
              transition
              hover:border-gray-300
              hover:bg-gray-50
            "
          >
            Đánh giá
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Review form */}
      {isOpen && (
        <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:p-5">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900">
                Sản phẩm này thế nào?
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Hãy đánh giá dựa trên trải nghiệm thực tế của bạn.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setRating(0);
                setComment("");
                createReviewMutation.reset();
              }}
              className="
                rounded-lg p-1.5
                text-gray-400
                transition
                hover:bg-gray-100
                hover:text-gray-700
              "
              aria-label="Đóng đánh giá"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Rating */}
          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <StarSelector
                value={rating}
                onChange={setRating}
                disabled={createReviewMutation.isPending}
              />

              {rating > 0 ? (
                <span className="text-sm font-medium text-amber-600">
                  {RATING_LABELS[rating]}
                </span>
              ) : (
                <span className="text-xs text-gray-400">Chọn số sao</span>
              )}
            </div>
          </div>

          {/* Comment */}
          <div className="mt-4">
            <textarea
              value={comment}
              onChange={(event) => {
                setComment(event.target.value);
              }}
              maxLength={1000}
              rows={4}
              disabled={createReviewMutation.isPending}
              placeholder="Ví dụ: Sản phẩm đẹp, đúng mô tả, đi rất êm..."
              className="
                w-full
                resize-none
                rounded-xl
                border border-gray-200
                bg-white
                px-4 py-3
                text-sm
                leading-6
                text-gray-900
                outline-none
                transition
                placeholder:text-gray-400
                focus:border-gray-900
                focus:ring-4
                focus:ring-gray-900/5
                disabled:bg-gray-50
                disabled:text-gray-500
              "
            />

            <div className="mt-1.5 flex items-center justify-between gap-3">
              <div className="min-h-4">
                {comment.length > 0 && comment.trim().length < 5 && (
                  <p className="text-xs text-red-500">
                    Nội dung tối thiểu 5 ký tự
                  </p>
                )}

                {rating === 0 && comment.length > 0 && (
                  <p className="text-xs text-amber-600">Vui lòng chọn số sao</p>
                )}
              </div>

              <span className="shrink-0 text-xs text-gray-400">
                {comment.length}/1000
              </span>
            </div>
          </div>

          {/* Error */}
          {createReviewMutation.isError && (
            <div className="mt-3 rounded-lg border border-red-100 bg-red-50 px-3 py-2.5 text-sm text-red-600">
              Không thể gửi đánh giá. Vui lòng thử lại.
            </div>
          )}

          {/* Success */}
          {createReviewMutation.isSuccess && (
            <div className="mt-3 flex items-start gap-2 rounded-lg border border-green-100 bg-green-50 px-3 py-2.5 text-sm text-green-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />

              <div>
                <p className="font-medium">Đánh giá đã được gửi thành công.</p>

                <p className="mt-0.5 text-xs text-green-600">
                  Cảm ơn bạn đã chia sẻ trải nghiệm.
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
            <button
              type="button"
              disabled={createReviewMutation.isPending}
              onClick={() => {
                setIsOpen(false);
                setRating(0);
                setComment("");
                createReviewMutation.reset();
              }}
              className="
                min-h-10
                rounded-lg
                px-4
                text-sm
                font-medium
                text-gray-600
                transition
                hover:bg-gray-100
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              Hủy
            </button>

            <button
              type="button"
              disabled={!canSubmit}
              onClick={() => {
                createReviewMutation.mutate();
              }}
              className="
                inline-flex
                min-h-10
                items-center
                justify-center
                gap-2
                rounded-lg
                bg-gray-900
                px-4
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-gray-800
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:bg-gray-300
              "
            >
              {createReviewMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Đang gửi...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Gửi đánh giá
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
