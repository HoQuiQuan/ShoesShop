import { OrderStatus } from '@prisma/client';

export interface AdminOrderItemResponse {
  id: number;
  quantity: number;
  subtotal: number;
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
    };

    size?: {
      id: number;
      value: string;
    };
  };
}

export interface AdminOrderResponse {
  id: number;
  orderCode: string;
  status: OrderStatus;

  totalAmount: number;
  createdAt: string;

  user?: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  };

  items: AdminOrderItemResponse[];
}

export interface AdminOrdersResponse {
  items: AdminOrderResponse[];

  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
