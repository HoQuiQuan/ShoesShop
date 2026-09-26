export interface Category {
  id: number;
  name: string;
}

export interface Color {
  id: number;
  name: string;
  colorCode: string;
}

export interface Size {
  id: number;
  value: number | string;
}

export interface ProductSpecForm {
  id: string;
  label: string;
  value: string;
  sortOrder?: number;
}

export interface ProductVariantForm {
  id: string;
  sku: string;
  price: string;
  quantity: string;
  sizeId: string;
  colorId: string;
}

export interface ProductImageForm {
  id: string;
  file: File;
  preview: string;
  colorId: number | null;
}

export interface CreateProductResponse {
  product: {
    id: number;
    name: string;
    slug: string;
    description?: string;
    categoryId: number;
  };

  images?: {
    productId: number;
    colorId: number | null;
    url: string;
    sortOrder: number;
  }[];
}
