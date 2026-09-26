import CartApi from "@/app/Api/Cart.api";
import ProductDetail from "@/components/product/productDetail";
import { api } from "@/lib/axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Cart {
  items: CartItem[];
}

export interface CartItem {
  id: number;
  quantity: number;
  productDetail: ProductDetail;
}

export interface ProductDetail {
  id: number;
  color: ProductColor;
  product: Product;
  size: ProductSize;
}

export interface ProductColor {
  name: string;
  colorCode: string;
}

export interface Product {
  name: string;
  price: number;
}

export interface ProductSize {
  value: string;
}

interface CartState {
  response: Cart | null;
  loading: boolean;
  error: string | null;
}

interface UpdateCart {
  id: number;
  quantity: number;
}

interface AddCart {
  id: number;
  quantity: number;
}

const initialState: CartState = {
  response: null,
  loading: false,
  error: null,
};

// ===============================
// GET CART
// ===============================

export const getCart = createAsyncThunk(
  "cart/customer",
  async (_, { rejectWithValue }) => {
    try {
      const res = await CartApi.getCart();

      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Không thể lấy giỏ hàng",
      );
    }
  },
);

// ===============================
// UPDATE CART API
// ===============================

export const updateCartItem = createAsyncThunk(
  "cart/updateItem",
  async ({ id, quantity }: UpdateCart, { rejectWithValue }) => {
    try {
      const res = await CartApi.updateCart(id, quantity);

      return res.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Không thể cập nhật giỏ hàng",
      );
    }
  },
);

// ===============================
// ADD CART API
// ===============================

export const addCartItem = createAsyncThunk(
  "cart/add",
  async ({ id, quantity }: AddCart, { rejectWithValue }) => {
    try {
      const res = await CartApi.addCartItem(id, quantity);
      console.log("da them", res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return rejectWithValue(
        error.response?.data?.message || "Không thể cập nhật giỏ hàng",
      );
    }
  },
);

export const deleteCartItem = createAsyncThunk(
  "cart/deleteCartItem",
  async ({ id }: { id: number }, { rejectWithValue }) => {
    try {
      await CartApi.deleteCartItem(id);

      return id;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          "Không thể xóa sản phẩm này khỏi giỏ hàng",
      );
    }
  },
);

// ===============================
// SLICE
// ===============================

export const CartSlice = createSlice({
  name: "cart",

  initialState,

  reducers: {
    // ===========================
    // ADD ITEM LOCAL
    // ===========================

    addItem: (state, action: PayloadAction<CartItem>) => {
      if (!state.response) {
        state.response = {
          items: [action.payload],
        };

        return;
      }

      state.response.items.push(action.payload);
    },

    // ===========================
    // UPDATE ITEM LOCAL
    // ===========================

    updateItem: (state, action: PayloadAction<UpdateCart>) => {
      if (!state.response) {
        return;
      }

      const item = state.response.items.find(
        (item) => item.id === action.payload.id,
      );

      if (!item) {
        console.log("Không tìm thấy cart item");
        return;
      }

      item.quantity = action.payload.quantity;

      console.log("Update local thành công");
    },

    // ===========================
    // DELETE
    // ===========================

    deleteItem: (state, action: PayloadAction<{ id: number }>) => {
      if (!state.response) {
        return;
      }

      const id = action.payload.id;

      state.response.items = state.response.items.filter(
        (item) => item.productDetail.id !== id,
      );
    },
  },

  extraReducers: (builder) => {
    builder

      // =========================
      // GET CART
      // =========================

      .addCase(getCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getCart.fulfilled, (state, action) => {
        state.response = action.payload.data;
        state.error = null;
        state.loading = false;
      })

      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;

        state.error = (action.payload as string) || "Không thể lấy giỏ hàng";
      })

      // =========================
      // UPDATE CART API
      // =========================

      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.error = null;
        const updatedItem = action.payload.data;

        if (!state.response) {
          return;
        }

        const item = state.response.items.find(
          (item) => item.id === updatedItem.id,
        );

        if (!item) {
          return;
        }

        item.quantity = updatedItem.quantity;

        console.log("Update database thành công");
      })

      .addCase(updateCartItem.rejected, (state, action) => {
        state.error =
          (action.payload as string) || "Không thể cập nhật giỏ hàng";
      })
      .addCase(addCartItem.pending, (state) => {
        state.loading = true;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const data = action.payload.data;

        if (!state.response) {
          state.response = {
            items: [data],
          };
          return;
        }

        const existingItem = state.response.items.find(
          (item) => item.id === data.id,
        );

        if (existingItem) {
          existingItem.quantity = data.quantity;
        } else {
          state.response.items.push(data);
        }
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.loading = false;
        console.log("khong the them san pham");
        state.error =
          (action.payload as string) ||
          "Không thể thêm sản phẩm này vào giỏ hàng";
      })

      // =========================
      // DELETE CART API
      // =========================

      .addCase(deleteCartItem.pending, (state) => {
        state.loading = true;
      })

      .addCase(deleteCartItem.fulfilled, (state, action) => {
        state.error = null;
        if (!state.response) return;

        const id = action.payload;

        state.response.items = state.response.items.filter(
          (item) => item.id !== id,
        );

        state.loading = false;
      })

      .addCase(deleteCartItem.rejected, (state, action) => {
        state.loading = false;
        state.error =
          (action.payload as string) || "Không thể xóa sản phẩm này";
      });
  },
});

export const { addItem, updateItem, deleteItem } = CartSlice.actions;

export default CartSlice.reducer;
