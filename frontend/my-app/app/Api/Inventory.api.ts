import { api } from "@/lib/axios";

export type InventoryStatus = "IN_STOCK" | "LOW_STOCK" | "OUT_OF_STOCK";

export interface InventoryItem {
  productDetailId: number;

  productId: number;

  productName: string;

  colorId: number;

  colorName: string;

  sizeId: number;

  sizeValue: string;

  price: number;

  img: string | null;

  quantity: number;

  reserved: number;

  available: number;

  status: InventoryStatus;
}

export interface InventoryPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface InventoryResponse {
  data: {
    data: InventoryItem[];

    pagination: InventoryPagination;
  };
}

export interface InventoryQuery {
  page?: number;

  limit?: number;

  search?: string;

  status?: InventoryStatus;
}

export interface StockTransactionPayload {
  productDetailId: number;
  quantity: number;
  reason: string;
  note?: string;
}

export class InventoryApi {
  public static async findAllInventory(
    query: InventoryQuery,
  ): Promise<InventoryResponse> {
    const response = await api.get<InventoryResponse>("/inventory", {
      params: {
        page: query.page ?? 1,

        limit: query.limit ?? 10,

        search: query.search?.trim() || undefined,

        status: query.status || undefined,
      },
    });

    return response.data;
  }

  public static async stockIn(payload: StockTransactionPayload) {
    return await api.post("/inventory/stock-in", payload);
  }

  public static async stockOut(payload: StockTransactionPayload) {
    return await api.post("/inventory/stock-out", payload);
  }
}
