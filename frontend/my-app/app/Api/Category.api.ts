import { api } from "@/lib/axios";

export default class CategoryApi {
  public static async getAllCategory() {
    return await api.get("/category/", { withCredentials: true });
  }
}
