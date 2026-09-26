import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import AuthApi from "@/app/Api/Auth";

// ======================================================
// FETCH CUSTOMER
// ======================================================

export const fetchCustomer = createAsyncThunk(
  "customer/fetchCustomer",

  async (_, { rejectWithValue }) => {
    // ==================================================
    // 1. THỬ ACCESS TOKEN
    // ==================================================

    try {
      const res = await AuthApi.getMe();

      if (res?.data) {
        return res.data;
      }
    } catch (error) {
      console.log("Access token không hợp lệ hoặc đã hết hạn");
    }

    // ==================================================
    // 2. ACCESS TOKEN KHÔNG DÙNG ĐƯỢC
    //    → THỬ REFRESH TOKEN
    // ==================================================

    try {
      await AuthApi.refresh();

      console.log("Refresh token thành công");

      // ==================================================
      // 3. REFRESH XONG → GET ME LẠI
      // ==================================================

      const res2 = await AuthApi.getMe();

      if (res2?.data) {
        return res2.data;
      }

      return rejectWithValue("Không lấy được thông tin customer");
    } catch (error) {
      console.log("Refresh token thất bại");

      return rejectWithValue("UNAUTHORIZED");
    }
  },
);

// ======================================================
// LOGOUT
// ======================================================

export const fetchLogoutCustomer = createAsyncThunk(
  "customer/logout",

  async (_, { rejectWithValue }) => {
    try {
      await AuthApi.logout();
    } catch (error) {
      return rejectWithValue("Logout thất bại");
    }
  },
);

// ======================================================
// SLICE
// ======================================================

export const CustomerSlice = createSlice({
  name: "customer",

  initialState: {
    data: null,
    loading: true,
    error: null as string | null,
  },

  reducers: {
    logout: (state) => {
      state.data = null;
      state.loading = false;
    },
  },

  extraReducers: (builder) => {
    builder

      // ==================================================
      // FETCH CUSTOMER - PENDING
      // ==================================================

      .addCase(fetchCustomer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // ==================================================
      // FETCH CUSTOMER - SUCCESS
      // ==================================================

      .addCase(fetchCustomer.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })

      // ==================================================
      // FETCH CUSTOMER - FAILED
      // ==================================================

      .addCase(fetchCustomer.rejected, (state, action) => {
        state.data = null;
        state.loading = false;

        state.error =
          (action.payload as string) ||
          action.error.message ||
          "Không thể xác thực người dùng";
      })

      // ==================================================
      // LOGOUT - PENDING
      // ==================================================

      .addCase(fetchLogoutCustomer.pending, (state) => {
        state.loading = true;
      })

      // ==================================================
      // LOGOUT - SUCCESS
      // ==================================================

      .addCase(fetchLogoutCustomer.fulfilled, (state) => {
        state.data = null;
        state.loading = false;
        state.error = null;
      })

      // ==================================================
      // LOGOUT - FAILED
      // ==================================================

      .addCase(fetchLogoutCustomer.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { logout } = CustomerSlice.actions;

export default CustomerSlice.reducer;
