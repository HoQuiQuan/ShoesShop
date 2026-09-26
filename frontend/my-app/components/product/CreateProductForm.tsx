"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Save } from "lucide-react";
import { toast } from "react-hot-toast";

import { api } from "@/lib/axios";

import {
  Category,
  Color,
  Size,
  ProductSpecForm,
  ProductVariantForm,
  ProductImageForm,
} from "@/type/create-product.type";

import ProductImageUploader from "../admin/product/ProductImageUploader";
import ProductSpecsForm from "./ProductSpecsForm";
import ProductVariantsForm from "./ProductVariantsForm";
import CategoryApi from "@/app/Api/Category.api";

export default function CreateProductForm() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [categoryId, setCategoryId] = useState("");

  const [categories, setCategories] = useState<Category[]>([]);
  console.log("categories", categories);

  const [colors, setColors] = useState<Color[]>([]);

  const [sizes, setSizes] = useState<Size[]>([]);

  const [specs, setSpecs] = useState<ProductSpecForm[]>([]);

  const [variants, setVariants] = useState<ProductVariantForm[]>([]);

  const [images, setImages] = useState<ProductImageForm[]>([]);

  const [loadingData, setLoadingData] = useState(true);

  const [submitting, setSubmitting] = useState(false);

  const [error, setError] = useState<string | null>(null);

  // ========================================
  // Load category / color / size
  // ========================================
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoadingData(true);

        const [categoryResponse, colorResponse, sizeResponse] =
          await Promise.all([
            CategoryApi.getAllCategory(),
            api.get("/product/colors/getAll"),
            api.get("/product/sizes/getAll"),
          ]);
        console.log("color", colorResponse);
        console.log(categoryResponse);

        /*
         * Nếu API của bạn trả:
         *
         * {
         *   items: [...]
         * }
         *
         * thì đổi thành:
         *
         * categoryResponse.data.items
         */

        setCategories(
          Array.isArray(categoryResponse.data.data)
            ? categoryResponse.data.data
            : (categoryResponse.data.items ?? []),
        );

        setColors(
          Array.isArray(colorResponse.data.data)
            ? colorResponse.data.data
            : (colorResponse.data.items ?? []),
        );

        setSizes(
          Array.isArray(sizeResponse.data.data)
            ? sizeResponse.data.data
            : (sizeResponse.data.items ?? []),
        );
      } catch (error) {
        console.error(error);

        setError("Không thể tải dữ liệu danh mục, màu hoặc size.");

        toast.error("Không thể tải dữ liệu cần thiết");
      } finally {
        setLoadingData(false);
      }
    };

    loadData();
  }, []);

  // ========================================
  // Validate
  // ========================================
  const validateForm = () => {
    if (!name.trim()) {
      toast.error("Vui lòng nhập tên sản phẩm");
      return false;
    }

    if (!categoryId) {
      toast.error("Vui lòng chọn danh mục");
      return false;
    }

    if (variants.length === 0) {
      toast.error("Sản phẩm phải có ít nhất một biến thể");
      return false;
    }

    if (images.length === 0) {
      toast.error("Vui lòng upload ít nhất một hình ảnh");
      return false;
    }

    for (const spec of specs) {
      if (!spec.label.trim() || !spec.value.trim()) {
        toast.error("Vui lòng nhập đầy đủ thông số sản phẩm");
        return false;
      }
    }

    for (const variant of variants) {
      if (!variant.sku.trim()) {
        toast.error("SKU không được để trống");
        return false;
      }

      if (!variant.price || Number(variant.price) <= 0) {
        toast.error(`Giá của ${variant.sku} không hợp lệ`);
        return false;
      }

      if (!variant.quantity || Number(variant.quantity) < 1) {
        toast.error(`Số lượng của ${variant.sku} không hợp lệ`);
        return false;
      }

      if (!variant.sizeId) {
        toast.error(`Vui lòng chọn size cho ${variant.sku}`);
        return false;
      }

      if (!variant.colorId) {
        toast.error(`Vui lòng chọn màu cho ${variant.sku}`);
        return false;
      }
    }

    // Kiểm tra trùng SKU
    const skuList = variants.map((variant) => variant.sku.trim().toLowerCase());

    const duplicateSku = skuList.find(
      (sku, index) => skuList.indexOf(sku) !== index,
    );

    if (duplicateSku) {
      toast.error(`SKU "${duplicateSku}" bị trùng`);
      return false;
    }

    return true;
  };

  // ========================================
  // Submit
  // ========================================
  const handleSubmit = async (e: React.FormEvent) => {
    console.log("da bam submit");
    // e.preventDefault();

    if (submitting) return;

    if (!validateForm()) return;

    setSubmitting(true);
    setError(null);

    const formData = new FormData();

    // ====================================
    // Product
    // ====================================
    formData.append("name", name.trim());

    if (description.trim()) {
      formData.append("description", description.trim());
    }

    formData.append("categoryId", categoryId);

    // ====================================
    // Specs
    // ====================================
    if (specs.length > 0) {
      const specsData = specs.map((spec, index) => ({
        label: spec.label.trim(),
        value: spec.value.trim(),
        sortOrder: spec.sortOrder ?? index + 1,
      }));

      formData.append("specs", JSON.stringify(specsData));
    }

    // ====================================
    // Variants
    // ====================================
    const variantsData = variants.map((variant) => ({
      sku: variant.sku.trim(),
      price: Number(variant.price),
      quantity: Number(variant.quantity),
      sizeId: Number(variant.sizeId),
      colorId: Number(variant.colorId),
    }));

    formData.append("variants", JSON.stringify(variantsData));

    // ====================================
    // Images
    // ====================================
    images.forEach((image) => {
      formData.append("files", image.file);
    });

    // ====================================
    // Image -> Color mapping
    // ====================================
    const imageColors = images.map((image, index) => ({
      fileIndex: index,
      colorId: image.colorId,
    }));

    formData.append("imageColors", JSON.stringify(imageColors));

    // ====================================
    // Debug
    // ====================================
    console.log("===== CREATE PRODUCT =====");

    console.log({
      name,
      description,
      categoryId,
      specs: specsDataForDebug(specs),
      variants: variantsData,
      imageColors,
    });

    // ====================================
    // API
    // ====================================
    const response = await api.post("/product", formData);

    // console.log("CREATE PRODUCT RESPONSE:", response.data);

    console.log("========== FORMDATA ==========");

    for (const [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(key, {
          name: value.name,
          type: value.type,
          size: value.size,
        });
      } else {
        console.log(key, value);
      }
    }

    console.log("================================");

    toast.success("Tạo sản phẩm thành công!");

    // Cleanup preview URLs
    // images.forEach((image) => {
    //   URL.revokeObjectURL(image.preview);
    // });

    // router.push("/admin/products");
  };

  if (loadingData) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="animate-spin text-gray-600" size={32} />

          <p className="text-sm text-gray-500">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ================================== */}
        {/* HEADER */}
        {/* ================================== */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Tạo sản phẩm</h1>

            <p className="mt-1 text-sm text-gray-500">
              Thêm sản phẩm mới vào cửa hàng.
            </p>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => router.back()}
              disabled={submitting}
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-gray-300
              bg-white
              px-4
              py-2.5
              text-sm
              font-medium
              text-gray-700
              hover:bg-gray-50
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
            >
              <ArrowLeft size={17} />
              Quay lại
            </button>

            <button
              type="submit"
              disabled={submitting}
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-black
              px-4
              py-2.5
              text-sm
              font-medium
              text-white
              hover:bg-gray-800
              disabled:cursor-not-allowed
              disabled:opacity-60
            "
            >
              {submitting ? (
                <>
                  <Loader2 size={17} className="animate-spin" />
                  Đang tạo...
                </>
              ) : (
                <>
                  <Save size={17} />
                  Tạo sản phẩm
                </>
              )}
            </button>
          </div>
        </div>

        {/* ================================== */}
        {/* ERROR */}
        {/* ================================== */}
        {error && (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* ================================== */}
        {/* BASIC INFORMATION */}
        {/* ================================== */}
        <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="mb-5">
            <h2 className="text-lg font-semibold">Thông tin cơ bản</h2>

            <p className="text-sm text-gray-500">
              Thông tin chính của sản phẩm.
            </p>
          </div>

          <div className="space-y-5">
            {/* Name */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Tên sản phẩm
                <span className="ml-1 text-red-500">*</span>
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ví dụ: Nike Air Max 270"
                className="
                w-full
                rounded-lg
                border
                border-gray-300
                px-4
                py-2.5
                text-sm
                outline-none
                transition
                focus:border-black
                focus:ring-1
                focus:ring-black
              "
              />
            </div>

            {/* Category */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Danh mục
                <span className="ml-1 text-red-500">*</span>
              </label>

              <select
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                className="
                w-full
                rounded-lg
                border
                border-gray-300
                bg-white
                px-4
                py-2.5
                text-sm
                outline-none
                focus:border-black
                focus:ring-1
                focus:ring-black
              "
              >
                <option value="">Chọn danh mục</option>

                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                Mô tả
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={6}
                placeholder="Nhập mô tả sản phẩm..."
                className="
                w-full
                resize-y
                rounded-lg
                border
                border-gray-300
                px-4
                py-3
                text-sm
                outline-none
                focus:border-black
                focus:ring-1
                focus:ring-black
              "
              />
            </div>
          </div>
        </section>

        {/* ================================== */}
        {/* IMAGES */}
        {/* ================================== */}
        <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <ProductImageUploader
            images={images}
            colors={colors}
            onChange={setImages}
          />
        </section>

        {/* ================================== */}
        {/* SPECS */}
        {/* ================================== */}
        <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <ProductSpecsForm specs={specs} onChange={setSpecs} />
        </section>

        {/* ================================== */}
        {/* VARIANTS */}
        {/* ================================== */}
        <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <ProductVariantsForm
            variants={variants}
            colors={colors}
            sizes={sizes}
            onChange={setVariants}
          />
        </section>

        {/* ================================== */}
        {/* BOTTOM ACTION */}
        {/* ================================== */}
        <div className="flex justify-end gap-3 border-t border-gray-200 pt-5">
          <button
            type="button"
            onClick={() => router.back()}
            disabled={submitting}
            className="
            rounded-lg
            border
            border-gray-300
            bg-white
            px-5
            py-2.5
            text-sm
            font-medium
            text-gray-700
            hover:bg-gray-50
          "
          >
            Hủy
          </button>

          <button
            type="submit"
            disabled={submitting}
            className="
            inline-flex
            items-center
            gap-2
            rounded-lg
            bg-black
            px-5
            py-2.5
            text-sm
            font-medium
            text-white
            hover:bg-gray-800
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
          >
            {submitting ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Đang tạo...
              </>
            ) : (
              <>
                <Save size={17} />
                Tạo sản phẩm
              </>
            )}
          </button>
        </div>
      </form>
      <button onClick={handleSubmit}>Bam di</button>
    </>
  );
}

// Chỉ dùng để debug
function specsDataForDebug(specs: ProductSpecForm[]) {
  return specs.map((spec, index) => ({
    label: spec.label.trim(),
    value: spec.value.trim(),
    sortOrder: spec.sortOrder ?? index + 1,
  }));
}
