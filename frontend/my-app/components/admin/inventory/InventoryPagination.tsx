"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  page: number;
  totalPages: number;
  total: number;
  onPageChange: (page: number) => void;
}

export default function InventoryPagination({
  page,
  totalPages,
  total,
  onPageChange,
}: Props) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = [];

  const start = Math.max(1, page - 2);

  const end = Math.min(totalPages, page + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-zinc-500">
        Tổng cộng <span className="font-semibold text-zinc-900">{total}</span>{" "}
        sản phẩm
      </p>

      <div className="flex items-center gap-1">
        <button
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronLeft size={16} />
        </button>

        {start > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="h-9 min-w-9 rounded-lg border border-zinc-200 px-2 text-sm hover:bg-zinc-50"
            >
              1
            </button>

            {start > 2 && <span className="px-1 text-zinc-400">...</span>}
          </>
        )}

        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`h-9 min-w-9 rounded-lg px-2 text-sm font-medium transition ${
              pageNumber === page
                ? "bg-zinc-900 text-white"
                : "border border-zinc-200 text-zinc-700 hover:bg-zinc-50"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <span className="px-1 text-zinc-400">...</span>
            )}

            <button
              onClick={() => onPageChange(totalPages)}
              className="h-9 min-w-9 rounded-lg border border-zinc-200 px-2 text-sm hover:bg-zinc-50"
            >
              {totalPages}
            </button>
          </>
        )}

        <button
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 transition hover:bg-zinc-50 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
