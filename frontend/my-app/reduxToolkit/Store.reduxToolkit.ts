import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Auth.reduxToolkit";
import cartReducer from "./cart.reduxTookit";

export const store = configureStore({
  reducer: { customerReducer, cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// reduxToolkit
