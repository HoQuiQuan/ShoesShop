export interface OrderDetailItem {
  id: number;
  productDetailId: number;
  productName: string;
  colorName: string | null;
  sizeValue: string | null;
  price: string | number;
  quantity: number;
  img: string | null;
}

export interface OrderDetail {
  orderCode: string;

  receiverName: string;
  receiverPhone: string;
  receiverAddress: string;

  paymentMethod: string;
  paymentStatus: string;
  status: string;

  note: string | null;

  subtotal: string | number;
  shippingFee: string | number;
  discountAmount: string | number;
  totalPrice: string | number;

  createdAt: string;

  items: OrderDetailItem[];
}
