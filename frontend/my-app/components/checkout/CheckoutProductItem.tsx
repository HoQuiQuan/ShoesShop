import Image from "next/image";
import productImgDefault from "../../public/default.webp";
import type { CheckoutProduct } from "./CheckoutPage";

interface Props {
  product: CheckoutProduct;
}

export default function CheckoutProductItem({ product }: Props) {
  const total = product.price * product.quantity;

  return (
    <div className="flex gap-4 p-5">
      {/* Image */}
      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-24">
        <Image
          src={product.image.url || productImgDefault}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3 className="line-clamp-2 text-sm font-semibold text-gray-900 sm:text-base">
          {product.name}
        </h3>

        <div className="mt-2 space-y-1 text-xs text-gray-500 sm:text-sm">
          <p>
            Màu: <span className="text-gray-700">{product.color}</span>
          </p>

          <p>
            Size: <span className="text-gray-700">{product.size}</span>
          </p>

          <p>
            Số lượng:{" "}
            <span className="font-medium text-gray-700">
              x{product.quantity}
            </span>
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="text-right">
        <p className="text-sm font-semibold text-gray-900 sm:text-base">
          {total.toLocaleString("vi-VN")}đ
        </p>

        {product.quantity > 1 && (
          <p className="mt-1 text-xs text-gray-400">
            {product.price.toLocaleString("vi-VN")}đ / sản phẩm
          </p>
        )}
      </div>
    </div>
  );
}
