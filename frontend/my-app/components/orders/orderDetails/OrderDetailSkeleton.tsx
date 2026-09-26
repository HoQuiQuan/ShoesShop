export default function OrderDetailSkeleton() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-8">
      <div className="mb-6 h-8 w-64 rounded bg-gray-200" />

      <div className="mb-6 h-40 rounded-2xl bg-gray-200" />

      <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <div className="h-72 rounded-2xl bg-gray-200" />
          <div className="h-56 rounded-2xl bg-gray-200" />
        </div>

        <div className="h-96 rounded-2xl bg-gray-200" />
      </div>
    </div>
  );
}
