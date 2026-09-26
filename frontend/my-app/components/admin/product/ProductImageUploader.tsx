"use client";

import { ChangeEvent } from "react";
import Image from "next/image";
import { ImagePlus, Trash2 } from "lucide-react";

import { ProductImageForm, Color } from "@/type/create-product.type";

interface Props {
  images: ProductImageForm[];
  colors: Color[];
  onChange: (images: ProductImageForm[]) => void;
}

export default function ProductImageUploader({
  images,
  colors,
  onChange,
}: Props) {
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    const newImages: ProductImageForm[] = files.map((file) => ({
      id: crypto.randomUUID(),
      file,
      preview: URL.createObjectURL(file),
      colorId: null,
    }));

    onChange([...images, ...newImages]);

    e.target.value = "";
  };

  const handleRemove = (id: string) => {
    const image = images.find((item) => item.id === id);

    if (image) {
      URL.revokeObjectURL(image.preview);
    }

    onChange(images.filter((item) => item.id !== id));
  };

  const handleColorChange = (id: string, colorId: string) => {
    onChange(
      images.map((image) =>
        image.id === id
          ? {
              ...image,
              colorId: colorId === "" ? null : Number(colorId),
            }
          : image,
      ),
    );
  };

  return (
    <div className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Hình ảnh sản phẩm
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Upload hình ảnh và chọn màu tương ứng cho từng hình.
        </p>
      </div>

      {/* Upload */}
      <label
        htmlFor="product-images"
        className="
          flex
          min-h-[150px]
          cursor-pointer
          flex-col
          items-center
          justify-center
          rounded-xl
          border-2
          border-dashed
          border-gray-300
          bg-gray-50
          p-6
          text-center
          transition
          hover:border-black
          hover:bg-gray-100
        "
      >
        <ImagePlus className="mb-3 h-10 w-10 text-gray-400" />

        <span className="text-sm font-medium text-gray-700">
          Click để chọn hình ảnh
        </span>

        <span className="mt-1 text-xs text-gray-500">
          Có thể chọn nhiều hình ảnh
        </span>

        <input
          id="product-images"
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          className="hidden"
        />
      </label>

      {/* Image list */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="
                overflow-hidden
                rounded-xl
                border
                border-gray-200
                bg-white
                shadow-sm
              "
            >
              {/* Preview */}
              <div className="relative aspect-square bg-gray-100">
                <Image
                  src={image.preview}
                  alt={`Product image ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />

                {/* Index */}
                <div
                  className="
                    absolute
                    left-2
                    top-2
                    rounded-md
                    bg-black/70
                    px-2
                    py-1
                    text-xs
                    font-medium
                    text-white
                  "
                >
                  Ảnh {index + 1}
                </div>

                {/* Delete */}
                <button
                  type="button"
                  onClick={() => handleRemove(image.id)}
                  className="
                    absolute
                    right-2
                    top-2
                    rounded-full
                    bg-white
                    p-2
                    text-red-500
                    shadow
                    transition
                    hover:bg-red-50
                  "
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Color */}
              <div className="p-3">
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  Màu của ảnh
                </label>

                <select
                  value={image.colorId === null ? "" : image.colorId}
                  onChange={(e) => handleColorChange(image.id, e.target.value)}
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
                  <option value="">Ảnh chung / không gắn màu</option>

                  {colors.map((color) => (
                    <option key={color.id} value={color.id}>
                      {color.name}
                    </option>
                  ))}
                </select>

                {image.colorId !== null && (
                  <div className="mt-2 flex items-center gap-2">
                    <span
                      className="h-4 w-4 rounded-full border"
                      style={{
                        backgroundColor: colors.find(
                          (c) => c.id === image.colorId,
                        )?.colorCode,
                      }}
                    />

                    <span className="text-xs text-gray-500">
                      {colors.find((c) => c.id === image.colorId)?.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
