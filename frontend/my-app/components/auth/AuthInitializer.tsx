"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/reduxToolkit/Store.reduxToolkit";
import { fetchCustomer } from "@/reduxToolkit/Auth.reduxToolkit";

export default function AuthInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCustomer());
  }, [dispatch]);

  return null;
}
