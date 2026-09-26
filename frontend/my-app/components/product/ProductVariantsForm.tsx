"use client";

import { Plus, Trash2 } from "lucide-react";

import { Color, ProductVariantForm, Size } from "@/type/create-product.type";

interface Props {
  variants: ProductVariantForm[];
  colors: Color[];
  sizes: Size[];
  onChange: (variants: ProductVariantForm[]) => void;
}

export default function ProductVariantsForm({
  variants,
  colors,
  sizes,
  onChange,
}: Props) {
  const addVariant = () => {
    onChange([
      ...variants,
      {
        id: crypto.randomUUID(),
        sku: "",
        price: "",
        quantity: "",
        sizeId: "",
        colorId: "",
      },
    ]);
  };

  const removeVariant = (id: string) => {
    onChange(variants.filter((variant) => variant.id !== id));
  };

  const updateVariant = (
    id: string,
    field: keyof ProductVariantForm,
    value: string,
  ) => {
    onChange(
      variants.map((variant) =>
        variant.id === id
          ? {
              ...variant,
              [field]: value,
            }
          : variant,
      ),
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Biến thể sản phẩm</h2>

          <p className="text-sm text-gray-500">
            Mỗi biến thể gồm SKU, giá, tồn kho, size và màu.
          </p>
        </div>

        <button
          type="button"
          onClick={addVariant}
          className="
            inline-flex
            shrink-0
            items-center
            gap-2
            rounded-lg
            bg-black
            px-3
            py-2
            text-sm
            font-medium
            text-white
            hover:bg-gray-800
          "
        >
          <Plus size={16} />
          Thêm
        </button>
      </div>

      {variants.length === 0 && (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          Chưa có biến thể nào.
        </div>
      )}

      <div className="space-y-4">
        {variants.map((variant, index) => (
          <div
            key={variant.id}
            className="rounded-xl border border-gray-200 bg-white p-4"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-medium">Biến thể #{index + 1}</h3>

              <button
                type="button"
                onClick={() => removeVariant(variant.id)}
                className="
                  rounded-lg
                  p-2
                  text-red-500
                  hover:bg-red-50
                "
              >
                <Trash2 size={17} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {/* SKU */}
              <div>
                <label className="mb-1 block text-sm font-medium">SKU</label>

                <input
                  type="text"
                  value={variant.sku}
                  onChange={(e) =>
                    updateVariant(variant.id, "sku", e.target.value)
                  }
                  placeholder="NIKE-AM270-WH-40"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    px-3
                    py-2
                    text-sm
                    outline-none
                    focus:border-black
                  "
                />
              </div>

              {/* Price */}
              <div>
                <label className="mb-1 block text-sm font-medium">Giá</label>

                <input
                  type="number"
                  min="0"
                  value={variant.price}
                  onChange={(e) =>
                    updateVariant(variant.id, "price", e.target.value)
                  }
                  placeholder="2499000"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    px-3
                    py-2
                    text-sm
                    outline-none
                    focus:border-black
                  "
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="mb-1 block text-sm font-medium">
                  Số lượng
                </label>

                <input
                  type="number"
                  min="1"
                  value={variant.quantity}
                  onChange={(e) =>
                    updateVariant(variant.id, "quantity", e.target.value)
                  }
                  placeholder="20"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    px-3
                    py-2
                    text-sm
                    outline-none
                    focus:border-black
                  "
                />
              </div>

              {/* Size */}
              <div>
                <label className="mb-1 block text-sm font-medium">Size</label>

                <select
                  value={variant.sizeId}
                  onChange={(e) =>
                    updateVariant(variant.id, "sizeId", e.target.value)
                  }
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    bg-white
                    px-3
                    py-2
                    text-sm
                    outline-none
                    focus:border-black
                  "
                >
                  <option value="">Chọn size</option>

                  {sizes.map((size) => (
                    <option key={size.id} value={size.id}>
                      {size.value}
                    </option>
                  ))}
                </select>
              </div>

              {/* Color */}
              <div>
                <label className="mb-1 block text-sm font-medium">Màu</label>

                <select
                  value={variant.colorId}
                  onChange={(e) =>
                    updateVariant(variant.id, "colorId", e.target.value)
                  }
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-300
                    bg-white
                    px-3
                    py-2
                    text-sm
                    outline-none
                    focus:border-black
                  "
                >
                  <option value="">Chọn màu</option>

                  {colors.map((color) => (
                    <option key={color.id} value={color.id}>
                      {color.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
