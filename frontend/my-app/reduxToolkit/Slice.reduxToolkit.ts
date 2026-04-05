import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCustomer = createAsyncThunk(
  "customer/fetchCustomer",
  async () => {
    const res = await axios.get("http://localhost:5000/auth/me", {
      withCredentials: true,
    });
    return res.data;
  },
);

export const fetchLogoutCustomer = createAsyncThunk(
  "customer/logout",
  async () => {
    const res = await axios.get("http://localhost:5000/auth/logout", {
      withCredentials: true,
    });
  },
);

export const CustomerSlice = createSlice({
  name: "customer",
  initialState: {
    data: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomer.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchCustomer.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchLogoutCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLogoutCustomer.fulfilled, (state) => {
        state.data = null;
        state.loading = false;
      })
      .addCase(fetchLogoutCustomer.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default CustomerSlice.reducer;
