import { Ticket } from "lucide-react";
import VoucherCard, { Voucher } from "./VoucherCard";

interface VoucherListProps {
  vouchers: Voucher[];
  loading: boolean;
  claimingId: number | null;
  onClaim: (voucher: Voucher) => void;
}

function VoucherSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex gap-3">
        <div className="h-14 w-14 rounded-2xl bg-gray-200" />

        <div className="flex-1 space-y-3">
          <div className="h-3 w-24 rounded bg-gray-200" />

          <div className="h-5 w-40 rounded bg-gray-200" />

          <div className="h-3 w-28 rounded bg-gray-200" />
        </div>
      </div>

      <div className="my-4 border-t border-dashed" />

      <div className="space-y-3">
        <div className="h-3 w-3/4 rounded bg-gray-200" />

        <div className="h-3 w-1/2 rounded bg-gray-200" />
      </div>

      <div className="mt-5 h-11 rounded-xl bg-gray-200" />
    </div>
  );
}

export default function VoucherList({
  vouchers,
  loading,
  claimingId,
  onClaim,
}: VoucherListProps) {
  if (loading) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <VoucherSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!vouchers.length) {
    return (
      <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-white px-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
          <Ticket size={30} />
        </div>

        <h3 className="mt-5 text-lg font-bold text-gray-900">
          Không tìm thấy voucher
        </h3>

        <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
          Hiện chưa có voucher phù hợp với lựa chọn của bạn.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {vouchers.map((voucher) => (
        <VoucherCard
          key={voucher.id}
          voucher={voucher}
          loading={claimingId === voucher.id}
          onClaim={onClaim}
        />
      ))}
    </div>
  );
}
