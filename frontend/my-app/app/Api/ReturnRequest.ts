import { ReturnRequest } from "@/components/admin/returns/ReturnTable";
import { api } from "@/lib/axios";

export type ReturnRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "SHIPPING"
  | "RECEIVED"
  | "INSPECTING"
  | "COMPLETED"
  | "REJECTED"
  | "CANCELLED";

export interface ReturnRequestQuery {
  page?: number;
  limit?: number;
  search?: string;
  status?: ReturnRequestStatus;
}

export interface ReturnRequestPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ReturnRequestResponse {
  items: ReturnRequest[];
  pagination: ReturnRequestPagination;
}

export class ReturnRequestApi {
  public static async findReturnRequest(
    query: ReturnRequestQuery,
  ): Promise<ReturnRequestResponse> {
    const res = await api.get("/inventory/admin/return", {
      params: {
        page: query.page ?? 1,
        limit: query.limit ?? 10,
        search: query.search?.trim() || undefined,
        status: query.status ?? undefined,
      },
    });

    return res.data.data;
  }

  public static async completeReturnItem(
    id: number,
    normalQuantity: number,
    damagedQuantity: number,
  ) {
    return await api.patch(`inventory/admin/complete-return/${id}`, {
      normalQuantity,
      damagedQuantity,
    });
  }

  public static async approveReturn(id: number) {
    return await api.patch(`inventory/admin/approve-return/${id}`);
  }

  public static async shippingReturn(id: number) {
    return await api.patch(`inventory/admin/shipping-return/${id}`);
  }

  public static async receiveReturn(id: number) {
    return await api.patch(`inventory/admin/receive-return/${id}`);
  }

  public static async inspectingReturn(id: number) {
    return await api.patch(`inventory/admin/inspecting-return/${id}`);
  }

  public static async rejectReturn(id: number) {
    return await api.patch(`inventory/admin/reject-return/${id}`);
  }
}
