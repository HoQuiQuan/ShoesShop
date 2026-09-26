import { api } from "@/lib/axios";

export default class CheckoutApi {
  public static async getCheckoutProduct() {
    return await api.get("/checkout/", {
      withCredentials: true,
    });
  }
  public static async clearCheckoutProduct() {
    return await api.post(
      "/checkout/session/clear",
      {},
      { withCredentials: true },
    );
  }
}
