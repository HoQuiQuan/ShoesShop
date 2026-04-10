"use client";

import { useAppDispatch } from "@/reduxToolkit/hooks";
import { fetchLogoutCustomer } from "@/reduxToolkit/Auth.reduxToolkit";
import { useRouter } from "next/navigation";
export default function Profile() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleLogout = async () => {
    dispatch(fetchLogoutCustomer());
    router.push("/");
  };
  return (
    <>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}
