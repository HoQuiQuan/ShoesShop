"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import productImgDefault from "../../public/default.webp";
import {
  ShoppingCart,
  ShoppingBag,
  Minus,
  Plus,
  Star,
  Check,
} from "lucide-react";

import type { Product } from "@/type/product.type";
import { useAppDispatch } from "@/reduxToolkit/hooks";
import { addCartItem } from "@/reduxToolkit/cart.reduxTookit";
import ProductReviewSection from "./ProductReviewSection";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedColorCode, setSelectedColorCode] = useState<string | null>(
    null,
  );

  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const [quantity, setQuantity] = useState(1);

  const [price, setPrice] = useState(0);

  const dispatch = useAppDispatch();

  console.log(product);

  useEffect(() => {
    const init = () => {
      setSelectedColor(product.variants[0].color.name);
      setSelectedColorCode(product.variants[0].color.colorCode);
      setSelectedSize(product.variants[0].size.value);

      product.images.forEach((item, index) => {
        if (item?.color?.colorCode == product.variants[0].color.colorCode) {
          setSelectedImage(index);
        }
      });

      const productSelected = product.variants.find((variant) => {
        if (
          selectedColorCode == variant.color.colorCode &&
          selectedSize == variant.size.value
        ) {
          return true;
        }
      });

      setPrice(productSelected?.price ?? 0);
    };
    init();
  }, []);

  useEffect(() => {
    const selectedPrice = () => {
      const productSelected = product.variants.find((variant) => {
        if (
          selectedColorCode == variant.color.colorCode &&
          selectedSize == variant.size.value
        ) {
          return true;
        }
      });
      setPrice(productSelected?.price ?? 0);
    };
    selectedPrice();
  }, [selectedColor, selectedColorCode, selectedSize]);

  /**
   * Danh sách màu không trùng
   */
  const colors = useMemo(() => {
    const map = new Map<string, string>();

    product.variants.forEach((variant) => {
      map.set(variant.color.name, variant.color.colorCode);
    });

    return Array.from(map.entries()).map(([name, colorCode]) => ({
      name,
      colorCode,
    }));
  }, [product.variants]);

  /**
   * Danh sách size không trùng
   */
  const sizes = useMemo(() => {
    const map = new Set<string>();

    product.variants.forEach((variant) => {
      map.add(variant.size.value);
    });

    return Array.from(map);
  }, [product.variants]);

  /**
   * Variant hiện tại
   */
  const selectedVariant = useMemo(() => {
    if (!selectedColor || !selectedSize) {
      return null;
    }

    return (
      product.variants.find(
        (variant) =>
          variant.color.name === selectedColor &&
          variant.size.value === selectedSize,
      ) ?? null
    );
  }, [product.variants, selectedColor, selectedSize]);

  /**
   * Tồn kho thực tế
   */
  const availableStock = selectedVariant
    ? selectedVariant.stock.quantity - selectedVariant.stock.reserved
    : 0;

  /**
   * Chọn màu
   */
  const handleSelectColor = (color: string, colorCode: string) => {
    setSelectedColor(color);
    setSelectedColorCode(colorCode);

    // Tìm image thuộc màu đang chọn
    const imageIndex = product.images.findIndex(
      (image) => image.color?.colorCode === colorCode,
    );

    if (imageIndex !== -1) {
      setSelectedImage(imageIndex);
    } else {
      // Không có image riêng cho màu -> tìm image chung
      const defaultImageIndex = product.images.findIndex(
        (image) => !image.color,
      );

      if (defaultImageIndex !== -1) {
        setSelectedImage(defaultImageIndex);
      }
    }

    // Khi đổi màu phải chọn lại size
    setSelectedSize(null);
    setQuantity(1);
  };

  /**
   * Chọn size
   */
  const handleSelectSize = (size: string) => {
    if (!selectedColor) return;

    const variant = product.variants.find(
      (item) => item.color.name === selectedColor && item.size.value === size,
    );

    if (!variant) return;

    const stock = variant.stock.quantity - variant.stock.reserved;

    if (stock <= 0) return;

    setSelectedSize(size);
    setQuantity(1);
  };

  /**
   * Tăng số lượng
   */
  const increaseQuantity = () => {
    if (!selectedVariant) return;

    if (quantity < availableStock) {
      setQuantity((prev) => prev + 1);
    }
  };

  /**
   * Giảm số lượng
   */
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  /**
   * Thêm giỏ hàng
   */
  const handleAddToCart = (id: number, quantity: number) => {
    if (!selectedVariant) {
      alert("Vui lòng chọn màu và size");
      return;
    }

    console.log({
      product,
      variant: selectedVariant,
      quantity,
    });

    //
    dispatch(
      addCartItem({
        id,
        quantity,
      }),
    );
  };

  /**
   * Tìm id theo color và size
   */

  const findIdProductDetail = (
    size: string | null,
    colorCode: string | null,
  ): number | null => {
    if (!size || !colorCode) {
      return null;
    }
    let result = -1;
    product.variants.forEach((productItems) => {
      if (
        productItems.size.value == size &&
        productItems.color.colorCode == colorCode
      ) {
        // console.log("yasssss");
        console.log(productItems.id);
        result = productItems.id;
      }
    });
    if (result <= 0) return null;
    else return result;
  };

  /**
   * Mua ngay
   */
  const handleBuyNow = () => {
    if (!selectedVariant) {
      alert("Vui lòng chọn màu và size");
      return;
    }

    console.log({
      variant: selectedVariant,
      quantity,
    });
  };

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* ================= IMAGE ================= */}
          <div>
            {/* Main image */}
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
              {product.images.length > 0 ? (
                <Image
                  src={product.images[selectedImage].url || productImgDefault}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-gray-400">
                  Không có hình ảnh
                </div>
              )}
            </div>

            {/* Thumbnail */}
            {product.images.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={image.url}
                    type="button"
                    onClick={() => {
                      setSelectedImage(index);

                      const selectedImageData = product.images[index];

                      // Nếu image có màu
                      if (selectedImageData.color) {
                        setSelectedColor(selectedImageData.color.name);

                        setSelectedColorCode(selectedImageData.color.colorCode);

                        setSelectedSize(null);
                        setQuantity(1);
                      }
                    }}
                    className={`relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 ${
                      selectedImage === index
                        ? "border-black"
                        : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image.url}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ================= INFORMATION ================= */}
          <div className="flex flex-col">
            {/* Name */}
            <h1 className="text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1">
                <Star
                  size={18}
                  fill="currentColor"
                  className="text-yellow-400"
                />

                <span className="font-medium">{product.rate}</span>
              </div>

              <div className="h-5 w-px bg-gray-300" />

              <span className="text-sm text-gray-500">
                {product.countRate} đánh giá
              </span>

              <div className="h-5 w-px bg-gray-300" />

              <span className="text-sm text-gray-500">
                Đã bán {product.purchases}
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 rounded-xl bg-gray-50 p-4">
              <span className="text-3xl font-bold text-red-600">
                {Number(price).toLocaleString("vi-VN")}₫
              </span>
            </div>

            <div className="my-6 h-px bg-gray-200" />

            {/* ================= COLOR ================= */}
            <div>
              <div className="mb-3 flex items-center justify-between">
                <span className="font-semibold">Màu sắc</span>

                {selectedColor && (
                  <span className="text-sm text-gray-500">{selectedColor}</span>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {colors.map((color) => {
                  const active = selectedColor === color.name;

                  return (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() =>
                        handleSelectColor(color.name, color.colorCode)
                      }
                      className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition ${
                        active
                          ? "border-black ring-1 ring-black"
                          : "border-gray-300 hover:border-gray-500"
                      }`}
                    >
                      <span
                        className="h-5 w-5 rounded-full border border-gray-300"
                        style={{
                          backgroundColor: color.colorCode,
                        }}
                      />

                      <span>{color.name}</span>

                      {active && <Check size={16} />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ================= SIZE ================= */}
            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-semibold">Kích thước</span>

                {selectedSize && (
                  <span className="text-sm text-gray-500">
                    Size {selectedSize}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => {
                  const variant = selectedColor
                    ? product.variants.find(
                        (item) =>
                          item.color.name === selectedColor &&
                          item.size.value === size,
                      )
                    : null;

                  const stock = variant
                    ? variant.stock.quantity - variant.stock.reserved
                    : 0;

                  const disabled = !selectedColor || stock <= 0;

                  const active = selectedSize === size;

                  return (
                    <button
                      key={size}
                      type="button"
                      disabled={disabled}
                      onClick={() => handleSelectSize(size)}
                      className={`relative min-w-14 rounded-lg border px-4 py-2 text-sm transition ${
                        active
                          ? "border-black bg-black text-white"
                          : disabled
                            ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400"
                            : "border-gray-300 hover:border-black"
                      }`}
                    >
                      {size}

                      {/* {stock <= 0 && selectedColor && (
                        <span className="absolute -right-1 -top-2 rounded bg-red-500 px-1 text-[9px] text-white">
                          Hết
                        </span>
                      )} */}
                    </button>
                  );
                })}
              </div>

              {!selectedColor && (
                <p className="mt-2 text-sm text-gray-500">
                  Vui lòng chọn màu trước
                </p>
              )}
            </div>

            {/* ================= STOCK ================= */}
            {selectedVariant && (
              <div className="mt-5">
                {availableStock > 0 ? (
                  <p className="text-sm text-green-600">
                    Còn {availableStock} sản phẩm
                  </p>
                ) : (
                  <p className="text-sm text-red-600">Sản phẩm đã hết hàng</p>
                )}
              </div>
            )}

            {/* ================= QUANTITY ================= */}
            <div className="mt-6">
              <span className="mb-3 block font-semibold">Số lượng</span>

              <div className="flex h-11 w-fit items-center overflow-hidden rounded-lg border border-gray-300">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="flex h-full w-11 items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                >
                  <Minus size={16} />
                </button>

                <span className="flex w-12 justify-center font-medium">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={!selectedVariant || quantity >= availableStock}
                  className="flex h-full w-11 items-center justify-center hover:bg-gray-100 disabled:opacity-40"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* ================= BUTTON ================= */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  const id = findIdProductDetail(
                    selectedSize,
                    selectedColorCode,
                  );

                  console.log("id", id);

                  if (!id) {
                    alert("Không thể thêm sản phẩm vào giỏ hàng");
                  }

                  handleAddToCart(id as number, quantity);
                }}
                disabled={!selectedVariant || availableStock <= 0}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-black font-semibold transition hover:bg-black hover:text-white disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-400"
              >
                <ShoppingCart size={20} />
                Thêm vào giỏ hàng
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                disabled={!selectedVariant || availableStock <= 0}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-black font-semibold text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <ShoppingBag size={20} />
                Mua ngay
              </button>
            </div>

            {/* ================= POLICY ================= */}
            <div className="mt-8 grid grid-cols-1 gap-4 border-t pt-6 sm:grid-cols-3">
              <div>
                <p className="font-medium">Miễn phí vận chuyển</p>
                <p className="mt-1 text-sm text-gray-500">
                  Cho đơn hàng đủ điều kiện
                </p>
              </div>

              <div>
                <p className="font-medium">Đổi trả dễ dàng</p>
                <p className="mt-1 text-sm text-gray-500">
                  Hỗ trợ đổi trả sản phẩm
                </p>
              </div>

              <div>
                <p className="font-medium">Thanh toán an toàn</p>
                <p className="mt-1 text-sm text-gray-500">Bảo mật thông tin</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 py-4">
          <div className="p-1 mb-4 border-b-1">MÔ TẢ SẢN PHẨM</div>
          <div>{product.description}</div>
        </div>

        {/* DECRIPTION + MÔ TẢ */}
        <div className="mt-5 py-4">
          <div className="p-1 mb-4 border-b-1">CHI TIẾT SẢN PHẨM</div>
          {product.specs.map((item, index) => (
            <li key={index}>
              <span className="font-bold">{item.label}:</span>
              <span> {item.value}</span>
            </li>
          ))}
        </div>

        {/* Xem đánh giá */}
        <ProductReviewSection productId={product.id}></ProductReviewSection>
      </div>
    </div>
  );
}
