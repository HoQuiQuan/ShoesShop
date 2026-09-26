import { ShoppingBag } from "lucide-react";
import CheckoutProductItem from "./CheckoutProductItem";
import type { CheckoutProduct } from "./CheckoutPage";

interface Props {
  products: CheckoutProduct[];
}

export default function CheckoutProducts({ products }: Props) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b px-5 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
          <ShoppingBag size={20} />
        </div>

        <div>
          <h2 className="font-semibold">Sản phẩm</h2>

          <p className="text-xs text-gray-500">{products.length} sản phẩm</p>
        </div>
      </div>

      <div className="divide-y">
        {products.map((product) => (
          <CheckoutProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
