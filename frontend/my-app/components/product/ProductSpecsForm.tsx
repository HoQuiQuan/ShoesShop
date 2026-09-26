"use client";

import { Plus, Trash2 } from "lucide-react";

import { ProductSpecForm } from "@/type/create-product.type";

interface Props {
  specs: ProductSpecForm[];
  onChange: (specs: ProductSpecForm[]) => void;
}

export default function ProductSpecsForm({ specs, onChange }: Props) {
  const addSpec = () => {
    onChange([
      ...specs,
      {
        id: crypto.randomUUID(),
        label: "",
        value: "",
        sortOrder: specs.length + 1,
      },
    ]);
  };

  const removeSpec = (id: string) => {
    onChange(specs.filter((spec) => spec.id !== id));
  };

  const updateSpec = (id: string, field: "label" | "value", value: string) => {
    onChange(
      specs.map((spec) =>
        spec.id === id
          ? {
              ...spec,
              [field]: value,
            }
          : spec,
      ),
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">Thông số sản phẩm</h2>

          <p className="text-sm text-gray-500">
            Thêm các thông tin mô tả sản phẩm.
          </p>
        </div>

        <button
          type="button"
          onClick={addSpec}
          className="
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-black
            px-3
            py-2
            text-sm
            font-medium
            text-white
            transition
            hover:bg-gray-800
          "
        >
          <Plus size={16} />
          Thêm
        </button>
      </div>

      {specs.length === 0 && (
        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          Chưa có thông số nào.
        </div>
      )}

      <div className="space-y-3">
        {specs.map((spec, index) => (
          <div
            key={spec.id}
            className="
              grid
              grid-cols-1
              gap-3
              rounded-xl
              border
              border-gray-200
              bg-white
              p-4
              sm:grid-cols-[1fr_1fr_auto]
            "
          >
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Tên thông số
              </label>

              <input
                type="text"
                value={spec.label}
                onChange={(e) => updateSpec(spec.id, "label", e.target.value)}
                placeholder="Ví dụ: Thương hiệu"
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

            <div>
              <label className="mb-1 block text-xs font-medium text-gray-500">
                Giá trị
              </label>

              <input
                type="text"
                value={spec.value}
                onChange={(e) => updateSpec(spec.id, "value", e.target.value)}
                placeholder="Ví dụ: Nike"
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

            <div className="flex items-end">
              <button
                type="button"
                onClick={() => removeSpec(spec.id)}
                className="
                  flex
                  h-10
                  w-full
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-red-200
                  text-red-500
                  hover:bg-red-50
                  sm:w-10
                "
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
