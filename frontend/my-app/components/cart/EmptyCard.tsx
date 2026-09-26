import { ArrowRight, ShoppingBag } from "lucide-react";

export default function EmptyCart() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-neutral-50 px-4">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-sm">
          <ShoppingBag size={34} className="text-neutral-400" />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-neutral-950">
          Giỏ hàng đang trống
        </h1>

        <p className="mt-2 text-sm leading-6 text-neutral-500">
          Bạn chưa thêm sản phẩm nào vào giỏ hàng. Hãy khám phá các sản phẩm của
          chúng tôi.
        </p>

        <a
          href="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Khám phá sản phẩm
          <ArrowRight size={17} />
        </a>
      </div>
    </main>
  );
}
