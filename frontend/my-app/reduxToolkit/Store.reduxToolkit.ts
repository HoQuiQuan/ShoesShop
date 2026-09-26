import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Auth.reduxToolkit";
import cartReducer from "./cart.reduxTookit";
import categoryReducer from "./category.reduxToolkit";

export const store = configureStore({
  reducer: { customerReducer, cartReducer, categoryReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// reduxToolkit
