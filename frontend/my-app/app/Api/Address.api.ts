import { api } from "@/lib/axios";

interface createAddressRequest {
  receiverName: string;
  receiverPhone: string;
  street: string;
  ward: string;
  city: string;
  isDefault: boolean;
}

export default class AddressApi {
  public static async createAddress(data: createAddressRequest) {
    return await api.post(
      "/address/",
      { ...data },
      {
        withCredentials: true,
      },
    );
  }
  public static async getAddress() {
    return await api.get("/address/", {
      withCredentials: true,
    });
  }
}
