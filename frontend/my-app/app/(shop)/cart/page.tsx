"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ShoppingBag } from "lucide-react";

import { useSelector } from "react-redux";
// import type { RootState } from "@/reduxToolkit/store";

import type { CartItem } from "@/type/cart.type";

import { CartSkeleton } from "@/components/cart/CartSkeleton";
import EmptyCart from "@/components/cart/EmptyCard";
import CartItemCard from "@/components/cart/CartItemCard";
import CartSummary from "@/components/cart/CartSummary";
import { useAppDispatch } from "@/reduxToolkit/hooks";
import {
  deleteCartItem,
  updateCartItem,
} from "@/reduxToolkit/cart.reduxTookit";
import { type AlertData } from "@/components/alert/alert";
import AlertContainer from "@/components/alert/AlertContainer";
import { useRouter } from "next/navigation";
import { api } from "@/lib/axios";
import Loading from "@/components/Loading";

const formatPrice = (price: string | number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(Number(price));
};

export default function CartPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [loadings, setLoadings] = useState<boolean>(false);
  /**
   * =========================
   * LẤY CART TỪ REDUX
   * =========================
   */

  const cart = useSelector((state) => state.cartReducer.response);

  const loading = useSelector((state) => state.cartReducer.loading);

  const errorCart = useSelector((state) => state.cartReducer.error);

  const [alerts, setAlerts] = useState<AlertData[]>([]);

  const addAlert = (
    type: AlertData["type"],
    message: string,
    title?: string,
  ) => {
    const newAlert: AlertData = {
      id: crypto.randomUUID(),
      type,
      message,
      title,
      duration: 4000,
    };

    setAlerts((prev) => [...prev, newAlert]);
  };

  const removeAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  const items: CartItem[] = cart?.items ?? [];

  /**
   * =========================
   * STATE CỦA RIÊNG CART PAGE
   * =========================
   */

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  /**
   * =========================
   * XÁC ĐỊNH ID
   * =========================
   */

  const getItemId = (item: CartItem, index: number) => {
    return item.id ?? index;
  };

  /**
   * =========================
   * CHỌN / BỎ CHỌN
   * =========================
   */

  const toggleItem = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id)
        ? prev.filter((itemId) => itemId !== id)
        : [...prev, id],
    );
  };

  /**
   * =========================
   * CHỌN TẤT CẢ
   * =========================
   */

  const toggleAll = () => {
    if (selectedItems.length === items.length) {
      setSelectedItems([]);
      return;
    }

    setSelectedItems(items.map((item, index) => getItemId(item, index)));
  };

  /**
   * =========================
   * TỰ ĐỘNG CHỌN ITEM MỚI
   * =========================
   *
   * Khi Redux load cart lần đầu,
   * mặc định chọn tất cả.
   */

  useEffect(() => {
    if (items.length === 0) {
      setSelectedItems([]);
      return;
    }

    setSelectedItems(items.map((item, index) => getItemId(item, index)));
  }, [cart?.items?.length]);

  /**
   * =========================
   * ITEM ĐƯỢC CHỌN
   * =========================
   */

  const selectedCartItems = useMemo(() => {
    return items.filter((item, index) =>
      selectedItems.includes(getItemId(item, index)),
    );
  }, [items, selectedItems]);

  /**
   * =========================
   * TẠM TÍNH
   * =========================
   */

  const subtotal = useMemo(() => {
    return selectedCartItems.reduce((total, item) => {
      const price = Number(item.productDetail.price);

      const quantity = item.quantity ?? 1;

      return total + price * quantity;
    }, 0);
  }, [selectedCartItems]);

  /**
   * =========================
   * THANH TOÁN
   * =========================
   */

  const handlePay = async () => {
    const result = selectedCartItems.map((item) => ({
      productDetailId: item.productDetail.id,
      quantity: item.quantity,
    }));

    setLoadings(true);

    await api.post(
      "/checkout/session",
      {
        productDetail: result,
      },
      { withCredentials: true },
    );

    setLoadings(false);
    router.push("/checkout/");
  };

  /**
   * =========================
   * PHÍ SHIP
   * =========================
   */

  const shippingFee = subtotal > 0 ? 30000 : 0;

  const total = subtotal + shippingFee;

  /**
   * =========================
   * LOADING
   * =========================
   */

  if (loading && !cart) {
    return <CartSkeleton />;
  }

  /**
   * =========================
   * EMPTY
   * =========================
   */

  if (!loading && items.length == 0) {
    return (
      <>
        {AlertContainer({ alerts: alerts, onClose: removeAlert })}
        <EmptyCart />
      </>
    );
  }

  /**
   * =========================
   * RENDER
   * =========================
   */

  return (
    <>
      {loadings && <Loading text="Đang chuyển hướng..."></Loading>}
      {AlertContainer({ alerts: alerts, onClose: removeAlert })}
      <main className="min-h-screen bg-neutral-50 pb-28 lg:pb-12">
        {/* <Alert
        alert={{ id: "1", message: "success", type: "error", title: "lslsls" }}
      ></Alert> */}
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
            <a href="/" className="transition hover:text-black">
              Trang chủ
            </a>

            <span>/</span>

            <span className="font-medium text-neutral-900">Giỏ hàng</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white">
                <ShoppingBag size={20} />
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                  Giỏ hàng
                </h1>

                <p className="mt-1 text-sm text-neutral-500">
                  {items.length} sản phẩm trong giỏ hàng
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_380px]">
            {/* ========================= */}
            {/* LEFT */}
            {/* ========================= */}

            <section className="min-w-0">
              {/* Select all */}
              <div className="mb-4 flex items-center justify-between rounded-2xl border border-neutral-200 bg-white px-4 py-4 sm:px-5">
                <label className="flex cursor-pointer items-center gap-3">
                  <button
                    type="button"
                    onClick={toggleAll}
                    className={`flex h-5 w-5 items-center justify-center rounded-md border transition ${
                      selectedItems.length === items.length
                        ? "border-black bg-black text-white"
                        : "border-neutral-300 bg-white"
                    }`}
                  >
                    {selectedItems.length === items.length && (
                      <Check size={13} strokeWidth={3} />
                    )}
                  </button>

                  <span className="text-sm font-medium text-neutral-900">
                    Chọn tất cả
                  </span>
                </label>

                <span className="text-sm text-neutral-500">
                  Đã chọn {selectedItems.length}/{items.length}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-3">
                {items.map((item, index) => {
                  const itemId = getItemId(item, index);

                  const quantity = item.quantity ?? 1;

                  const selected = selectedItems.includes(itemId);

                  return (
                    <CartItemCard
                      key={itemId}
                      item={item}
                      index={index}
                      selected={selected}
                      quantity={quantity}
                      onToggle={() => toggleItem(itemId)}
                      /*
                       * Không tự setItems nữa.
                       *
                       * Quantity sẽ được xử lý
                       * bằng Redux/API.
                       */

                      onIncrease={async () => {
                        dispatch(
                          updateCartItem({
                            id: item.id,
                            quantity: item.quantity + 1,
                          }),
                        );
                      }}
                      onDecrease={() => {
                        if (quantity <= 1) return;

                        dispatch(
                          updateCartItem({
                            id: item.id,
                            quantity: item.quantity - 1,
                          }),
                        );
                      }}
                      onRemove={() => {
                        dispatch(deleteCartItem({ id: item.id }));
                        if (!errorCart) {
                          addAlert(
                            "success",
                            "Xóa sản phẩm thành công",
                            "Giỏ hàng",
                          );
                        } else {
                          addAlert(
                            "error",
                            "Xóa sản phẩm thất bại",
                            "Giỏ hàng",
                          );
                        }
                      }}
                    />
                  );
                })}
              </div>

              {/* Continue shopping */}
              <a
                href="/products"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-700 transition hover:text-black"
              >
                <ChevronLeft size={17} />
                Tiếp tục mua sắm
              </a>
            </section>

            {/* ========================= */}
            {/* RIGHT */}
            {/* ========================= */}

            <CartSummary
              subtotal={subtotal}
              shippingFee={shippingFee}
              total={total}
              selectedCount={selectedItems.length}
              handlePay={handlePay}
            />
          </div>
        </div>

        {/* ========================= */}
        {/* MOBILE CHECKOUT */}
        {/* ========================= */}

        <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-neutral-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs text-neutral-500">Tổng cộng</p>

              <p className="truncate text-lg font-bold text-neutral-950">
                {formatPrice(total)}
              </p>
            </div>

            <button
              disabled={selectedItems.length === 0}
              className="flex shrink-0 items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
            >
              Thanh toán
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
