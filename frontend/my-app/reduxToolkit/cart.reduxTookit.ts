import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCart = createAsyncThunk("cart/customer", async () => {
  const data = await axios.get("http://localhost:5000/cart/getCart", {
    withCredentials: true,
  });
  return data;
});

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    data: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(getCart.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default CartSlice.reducer;
