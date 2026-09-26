export type OrderProduct = {
  productDetailId: number;
  img: string;
  quantity: number;
};

export type CreateOrderRequest = {
  products: OrderProduct[];
  addressId: number;
  discountVoucherId?: number;
  shippingVoucherId?: number;
  paymentMethod: "COD" | "BANK_TRANSFER" | "VNPAY" | "MOMO" | "STRIPE";
  note?: string;
};

export interface OrderItem {
  id: number;
  img: string | null;

  productDetail: {
    id: number;

    product: {
      id: number;
      name: string;
    };

    color: {
      id: number;
      name: string;
    };

    size: {
      value: string;
    };

    // price: string;
  };

  price: string;
  quantity: number;
}

export interface Order {
  orderCode: string;
  status: string;
  items: OrderItem[];
  subtotal: number | string;
}
