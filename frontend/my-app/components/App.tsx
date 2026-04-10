"use client";

import { useAppDispatch } from "@/reduxToolkit/hooks";
import { fetchCustomer } from "@/reduxToolkit/Auth.reduxToolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCart } from "@/reduxToolkit/cart.reduxTookit";

export function App({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const dataCustomer = useSelector((state) => state.customerReducer.data);
  const dataCart = useSelector((state) => state.cartReducer.data);
  useEffect(() => {
    dispatch(fetchCustomer());
    dispatch(getCart());
    console.log("da console");
  }, []);
  useEffect(() => {
    console.log("customer: ", dataCustomer);
    console.log("cart: ", dataCart);
  }, [dataCustomer, dataCart]);
  return <>{children}</>;
}
