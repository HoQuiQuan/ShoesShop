import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk("category/customer", async () => {
  const res = await axios.get("http://localhost:5000/category", {
    withCredentials: true,
  });
  return res.data;
});

export const CategorySlice = createSlice({
  name: "category",
  initialState: {
    data: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(getCategory.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default CategorySlice.reducer;
