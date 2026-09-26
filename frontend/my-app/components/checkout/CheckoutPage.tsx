"use client";

import { useEffect, useMemo, useState } from "react";
import ShippingAddress from "./ShippingAddress";
import VoucherSection from "./VoucherSection";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";
import CheckoutProductItem from "./CheckoutProductItem";
import CheckoutApi from "@/app/Api/Checkout.api";
import AddressApi from "@/app/Api/Address.api";
import { Voucher } from "@/type/voucher.type";
import Vouchers from "@/app/Api/Voucher.api";
import { CreateOrderRequest } from "@/type/order.type";
import { OrderApi } from "@/app/Api/Order.api";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import { useDispatch } from "react-redux";
import { deleteItem, getCart } from "@/reduxToolkit/cart.reduxTookit";
import { useAppDispatch } from "@/reduxToolkit/hooks";
import { PaymentApi } from "@/app/Api/Payment.api";

export interface CheckoutAddress {
  id: number;
  receiverName: string;
  receiverPhone: string;
  street: string;
  ward: string;
  city: string;
  isDefault: boolean;
}

export interface CheckoutProduct {
  id: number;
  productId: number;
  name: string;
  image: {
    id: number;
    url: string;
  };
  color: string;
  colorCode?: string;
  size: string;
  price: number;
  quantity: number;
}

export default function CheckoutPage() {
  const [products, setProducts] = useState<CheckoutProduct[]>([]);
  const [addresses, setAddresses] = useState<CheckoutAddress[]>([]);
  const [discountVouchers, setDiscountVouchers] = useState<Voucher[]>([]);
  const [shippingVouchers, setShippingVouchers] = useState<Voucher[]>([]);
  const [selectedAddressId, setSelectedAddressId] = useState<number>(1);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [orderSuccess, setOrderSuccess] = useState<{
    orderCode: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedDiscountVoucher, setSelectedDiscountVoucher] =
    useState<Voucher | null>(null);

  console.log(selectedDiscountVoucher);

  const [selectedShippingVoucher, setSelectedShippingVoucher] =
    useState<Voucher | null>(null);

  const [paymentMethod, setPaymentMethod] = useState<"COD" | "VNPAY" | "MOMO">(
    "COD",
  );

  const selectedAddress = addresses.find(
    (address) => address.id === selectedAddressId,
  );

  const createOrderRequest = useMemo<CreateOrderRequest | null>(() => {
    if (!selectedAddress) {
      return null;
    }

    return {
      products: products.map((product) => ({
        productDetailId: product.id,
        img: product.image.url,
        quantity: product.quantity,
      })),

      addressId: selectedAddress.id,

      discountVoucherId: selectedDiscountVoucher?.id,
      shippingVoucherId: selectedShippingVoucher?.id,

      paymentMethod,

      note: undefined,
    };
  }, [
    products,
    selectedAddress,
    selectedDiscountVoucher,
    selectedShippingVoucher,
    paymentMethod,
  ]);

  useEffect(() => {
    const getCheckout = async () => {
      try {
        const res = await CheckoutApi.getCheckoutProduct();

        setProducts(res.data.data);
      } catch (error) {
        console.error("Không thể lấy checkout:", error);
      }
    };

    getCheckout();
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      try {
        const res = await AddressApi.getAddress();

        setAddresses(res.data.data);

        const data = res.data.data;

        const defaultAddress = data.find(
          (address: CheckoutAddress) => address.isDefault === true,
        );

        if (defaultAddress) {
          setSelectedAddressId(defaultAddress.id);
        }
      } catch (error) {
        console.log("Không thể lấy địa chỉ", error);
      }
    };
    getAddress();
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      return;
    }

    const getApplicableVouchers = async () => {
      try {
        const subtotal = products.reduce(
          (total, product) => total + product.price * product.quantity,
          0,
        );

        const [resDiscount, resShipping] = await Promise.all([
          Vouchers.getApplicableVouchers(subtotal, "DISCOUNT"),
          Vouchers.getApplicableVouchers(subtotal, "FREESHIP"),
        ]);

        setDiscountVouchers(resDiscount.data.data);
        setShippingVouchers(resShipping.data.data);
      } catch (error) {
        console.error("Không thể lấy voucher:", error);
      }
    };

    getApplicableVouchers();
  }, [products]);

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );

  const shippingFee = 30000;

  const discount = selectedDiscountVoucher
    ? selectedDiscountVoucher.discountType === "FIXED_AMOUNT"
      ? selectedDiscountVoucher.discountValue
      : Math.min(
          (subtotal * selectedDiscountVoucher.discountValue) / 100,
          selectedDiscountVoucher.maxDiscount ?? Infinity,
        )
    : 0;

  const shippingDiscount = selectedShippingVoucher
    ? selectedShippingVoucher.discountType === "FIXED_AMOUNT"
      ? selectedShippingVoucher.discountValue
      : Math.min(
          (shippingFee * selectedShippingVoucher.discountValue) / 100,
          selectedShippingVoucher.maxDiscount ?? Infinity,
        )
    : 0;

  const total = Math.max(
    subtotal + shippingFee - discount - shippingDiscount,
    0,
  );

  const handleOrder = async () => {
    if (!selectedAddress) {
      alert("Vui lòng chọn địa chỉ nhận hàng");
      return;
    }

    if (!createOrderRequest) {
      alert("Thông tin đặt hàng không hợp lệ");
      return;
    }

    if (products.length === 0) {
      alert("Không có sản phẩm để đặt hàng");
      return;
    }

    try {
      setLoading(true);

      // =====================================================
      // 1. TẠO ORDER
      // =====================================================

      const res = await OrderApi.createOrder(createOrderRequest);

      const orderCode = res.data.data.orderCode;

      // =====================================================
      // 2. NẾU THANH TOÁN VNPAY
      // =====================================================

      if (paymentMethod === "VNPAY") {
        const paymentRes = await PaymentApi.createVnpayPayment({
          orderCode,
        });

        const paymentData = paymentRes;

        console.log("VNPAY payment:", paymentData);

        // Không cần xử lý gì thêm ở frontend.
        // Chuyển browser sang VNPAY.

        window.location.href = paymentData.paymentUrl;

        return;
      }

      // =====================================================
      // 3. NẾU COD
      // =====================================================

      setOrderSuccess({
        orderCode,
      });

      // Xóa sản phẩm khỏi Redux cart
      createOrderRequest.products.forEach((item) => {
        dispatch(
          deleteItem({
            id: item.productDetailId,
          }),
        );
      });

      // Xóa checkout session
      try {
        await CheckoutApi.clearCheckoutProduct();
      } catch (error) {
        console.error("Không thể clear checkout:", error);
      }
    } catch (error) {
      console.error("Đặt hàng thất bại:", error);

      alert("Đặt hàng thất bại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {loading && <Loading text="Đang mua hàng..."></Loading>}
      {orderSuccess && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-900">
              Đặt hàng thành công!
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Cảm ơn bạn đã mua hàng.
            </p>

            <p className="mt-3 text-sm text-gray-700">
              Mã đơn hàng:
              <span className="ml-1 font-bold text-gray-900">
                {orderSuccess.orderCode}
              </span>
            </p>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  router.push(`/orders/${orderSuccess.orderCode}`);
                }}
                className="
            flex-1
            rounded-xl
            bg-black
            px-4
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-gray-800
            active:scale-95
          "
              >
                Xem đơn hàng
              </button>

              <button
                onClick={() => {
                  router.push("/");
                }}
                className="
            flex-1
            rounded-xl
            border
            border-gray-200
            px-4
            py-3
            text-sm
            font-semibold
            text-gray-700
            transition
            hover:bg-gray-50
            active:scale-95
          "
              >
                Về trang chủ
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Đặt hàng</h1>

          <p className="mt-1 text-sm text-gray-500">
            Kiểm tra thông tin trước khi hoàn tất đơn hàng
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_380px]">
          {/* LEFT */}
          <div className="space-y-6">
            <ShippingAddress
              addresses={addresses}
              selectedAddressId={selectedAddressId}
              onSelect={setSelectedAddressId}
              onAddressesChange={setAddresses}
            />

            <div className="divide-y">
              {products.map((product) => (
                <CheckoutProductItem key={product.id} product={product} />
              ))}
            </div>

            <VoucherSection
              discountVouchers={discountVouchers}
              shippingVouchers={shippingVouchers}
              selectedDiscountVoucher={selectedDiscountVoucher}
              selectedShippingVoucher={selectedShippingVoucher}
              onSelectDiscount={setSelectedDiscountVoucher}
              onSelectShipping={setSelectedShippingVoucher}
            />

            <PaymentMethod value={paymentMethod} onChange={setPaymentMethod} />
          </div>

          {/* RIGHT */}
          <div className="lg:sticky lg:top-6 lg:h-fit">
            <OrderSummary
              subtotal={subtotal}
              shippingFee={shippingFee}
              discount={discount}
              shippingDiscount={shippingDiscount}
              total={total}
              onOrder={handleOrder}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
