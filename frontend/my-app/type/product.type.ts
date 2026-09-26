export interface ProductColor {
  name: string;
  colorCode: string;
}

export interface ProductSize {
  value: string;
}

export interface ProductStock {
  quantity: number;
  reserved: number;
}

export interface ProductVariant {
  id: number;
  price: number;
  color: ProductColor;
  size: ProductSize;
  stock: ProductStock;
}

export interface ProductImage {
  url: string;
  color: {
    name: string;
    colorCode: string;
  };
}

export interface Specs {
  label: string;
  value: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  slug: string;
  rate: number;
  countRate: number;
  purchases: number;
  specs: Specs[];
  variants: ProductVariant[];
  images: ProductImage[];
}
