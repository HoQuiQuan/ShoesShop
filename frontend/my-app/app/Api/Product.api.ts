import { api } from "@/lib/axios";

export default class ProductApi {
  public static async getProduct(id: number) {
    return await api.get(`product/${id}`, { withCredentials: true });
  }

  public static async getProductAdmin(id: number) {
    return await api.get(`product/admin/${id}`, { withCredentials: true });
  }

  public static async getAllProduct(page = 1, limit = 10, categoryId?: number) {
    if (categoryId) {
      return await api.get(
        `/product?page=${page}&limit=${limit}&categoryId=${categoryId}`,
        { withCredentials: true },
      );
    }
    return api.get(`/product?page=${page}&limit=${limit}`, {
      withCredentials: true,
    });
  }
}
