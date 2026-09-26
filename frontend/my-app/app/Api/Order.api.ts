import { api } from "@/lib/axios";
import { CreateOrderRequest } from "@/type/order.type";
import { promises } from "dns";

export interface OrderDetail {
  orderCode: string;

  paymentMethod: string;

  paymentStatus: "UNPAID" | "PAID";

  status:
    | "PENDING"
    | "CONFIRMED"
    | "SHIPPING"
    | "DELIVERED"
    | "CANCELLED"
    | "RETURNED";

  receiverName: string;

  receiverPhone: string;

  receiverAddress: string;

  note?: string;

  subtotal: number;

  shippingFee: number;

  discountAmount?: number;

  totalPrice: number;

  items: OrderItem[];
}

export interface OrderItem {
  id: number;

  quantity: number;

  price: number;

  img?: string;

  productDetail: {
    id: number;

    price: number;

    product: {
      id: number;
      name: string;
    };

    color?: {
      id: number;
      name: string;
      colorCode?: string;
    };

    size?: {
      id: number;
      value: string;
    };
  };
}

export class OrderApi {
  public static async createOrder(
    createOrderRequest: CreateOrderRequest | null,
  ) {
    return await api.post(
      "/order/",
      {
        products: createOrderRequest?.products,
        addressId: createOrderRequest?.addressId,
        discountVoucherId: createOrderRequest?.discountVoucherId,
        shippingVoucherId: createOrderRequest?.shippingVoucherId,
        paymentMethod: createOrderRequest?.paymentMethod,
        note: createOrderRequest?.note,
      },
      { withCredentials: true },
    );
  }

  public static async findOrderUser() {
    return await api.get("/order/", { withCredentials: true });
  }

  public static async getDetailOrderUser(
    orderCode: string,
  ): Promise<OrderDetail> {
    return await api.get(`/order/orderDetail/${orderCode}`, {
      withCredentials: true,
    });
  }
}
