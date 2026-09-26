export function CartSkeleton() {
  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <div className="h-8 w-40 animate-pulse rounded bg-neutral-200" />

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_380px]">
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4 rounded-2xl bg-white p-5">
                <div className="h-28 w-28 animate-pulse rounded-xl bg-neutral-200" />

                <div className="flex-1 space-y-3">
                  <div className="h-5 w-3/4 animate-pulse rounded bg-neutral-200" />

                  <div className="h-4 w-1/3 animate-pulse rounded bg-neutral-200" />

                  <div className="h-9 w-24 animate-pulse rounded bg-neutral-200" />
                </div>
              </div>
            ))}
          </div>

          <div className="h-80 animate-pulse rounded-2xl bg-neutral-200" />
        </div>
      </div>
    </main>
  );
}
