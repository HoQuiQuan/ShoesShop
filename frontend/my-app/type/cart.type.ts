export interface CartProduct {
  name: string;
  image?: {
    url: string;
  };
}

export interface CartColor {
  name: string;
  colorCode: string;
}

export interface CartSize {
  value: string;
}

export interface CartProductDetail {
  id: number;
  product: CartProduct;
  price: number;
  color: CartColor;
  size: CartSize;
}

export interface CartItem {
  id: number;
  quantity: number;
  productDetail: CartProductDetail;
}

export interface CartData {
  items: CartItem[];
}

export interface CartResponse {
  success: boolean;
  message: string;
  data: CartData;
  date: string;
  path: string;
}
