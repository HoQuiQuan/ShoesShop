import { api } from "@/lib/axios";

export default class AuthApi {
  public static async register(
    username: string,
    email: string,
    password: string,
  ) {
    return await api.post(
      "/auth/register/",
      { username, email, password },
      { withCredentials: true },
    );
  }

  public static async loginAdmin(email: string, password: string) {
    return await api.post(
      "auth/login-admin",
      { email, password },
      { withCredentials: true },
    );
  }

  public static async loginWithPassword(email: string, password: string) {
    const res = await api.post(
      "/auth/login/",
      { email, password },
      { withCredentials: true },
    );
    return res;
  }

  public static async loginWithGoogle(token: string) {
    const res = await api.post(
      "/auth/login-google",
      { token },
      { withCredentials: true },
    );
    return res;
  }

  public static async getMe() {
    const res = await api.get("/auth/me/", { withCredentials: true });
    return res;
  }

  public static async refresh() {
    return await api.get("/auth/refresh/", { withCredentials: true });
  }

  public static async logout() {
    return await api.get("/auth/logout/", { withCredentials: true });
  }
}
