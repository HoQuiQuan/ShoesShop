"use client";

import { useAppDispatch } from "@/reduxToolkit/hooks";
import { fetchCustomer } from "@/reduxToolkit/Slice.reduxToolkit";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export function App({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const data = useSelector((state) => state.customerReducer.data);
  useEffect(() => {
    dispatch(fetchCustomer());
    console.log("da console");
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <>{children}</>;
}
