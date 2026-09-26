import { api } from "@/lib/axios";

export default class CartApi {
  public static async getCart() {
    return await api.get("/cart/", {
      withCredentials: true,
    });
  }

  public static async updateCart(id: number, quantity: number) {
    return await api.patch(
      `/cart/${id}`,
      {
        quantity,
      },
      {
        withCredentials: true,
      },
    );
  }

  public static async addCartItem(productDetailId: number, quantity: number) {
    return await api.post(
      "/cart/",
      {
        productDetailId,
        quantity,
      },
      { withCredentials: true },
    );
  }

  public static async deleteCartItem(id: number) {
    return await api.delete(`/cart/${id}`, {
      withCredentials: true,
    });
  }
}
