"use client";

import Image from "next/image";
import HeroBanner from "@/components/HeroBaner";
import { useEffect } from "react";
import { useAppDispatch } from "@/reduxToolkit/hooks";
import { fetchCustomer } from "@/reduxToolkit/Auth.reduxToolkit";
import { useSelector } from "react-redux";

export default function Home() {
  const dispatch = useAppDispatch();
  const data = useSelector((state) => state.customerReducer.data);
  useEffect(() => {
    dispatch(fetchCustomer());
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <HeroBanner />
    </>
  );
}
