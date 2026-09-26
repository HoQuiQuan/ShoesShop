import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

let refreshPromise: Promise<any> | null = null;

// ======================================================
// REFRESH ACCESS TOKEN
// ======================================================

const refreshAccessToken = async () => {
  if (!refreshPromise) {
    refreshPromise = api.get("/auth/refresh/").finally(() => {
      refreshPromise = null;
    });
  }

  return refreshPromise;
};

// ======================================================
// RESPONSE INTERCEPTOR
// ======================================================

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error: AxiosError) => {
    const originalRequest = error.config as
      | (InternalAxiosRequestConfig & {
          _retry?: boolean;
        })
      | undefined;

    // Không có config
    if (!originalRequest) {
      return Promise.reject(error);
    }

    // Không phải 401
    if (error.response?.status !== 401) {
      return Promise.reject(error);
    }

    // ==================================================
    // QUAN TRỌNG:
    // KHÔNG ĐƯỢC REFRESH CHÍNH REQUEST /auth/refresh
    // ==================================================

    const requestUrl = originalRequest.url || "";

    if (requestUrl.includes("/auth/refresh")) {
      return Promise.reject(error);
    }

    // ==================================================
    // Request đã retry rồi
    // ==================================================

    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    // ==================================================
    // THỬ REFRESH
    // ==================================================

    try {
      await refreshAccessToken();

      // =================================================
      // REFRESH THÀNH CÔNG
      // → GỌI LẠI REQUEST BAN ĐẦU
      // =================================================

      return api(originalRequest);
    } catch (refreshError) {
      // =================================================
      // REFRESH THẤT BẠI
      // → CHO REQUEST REJECT
      // =================================================

      return Promise.reject(refreshError);
    }
  },
);
