"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/reduxToolkit/hooks";

import { fetchCustomer } from "@/reduxToolkit/Auth.reduxToolkit";

import { getCart } from "@/reduxToolkit/cart.reduxTookit";

export default function AuthInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadUser = async () => {
      try {
        // ============================================
        // 1. KIỂM TRA USER
        // ============================================

        const customer = await dispatch(fetchCustomer()).unwrap();

        console.log("✅ Auth thành công:", customer);

        // ============================================
        // 2. USER HỢP LỆ → LẤY CART
        // ============================================

        try {
          await dispatch(getCart()).unwrap();

          console.log("✅ Lấy cart thành công");
        } catch (error) {
          console.log("⚠️ Không lấy được cart:", error);
        }
      } catch (error) {
        // ============================================
        // 3. USER CHƯA LOGIN
        // ============================================

        console.log("ℹ️ User chưa đăng nhập hoặc refresh token hết hạn");
      }
    };

    loadUser();
  }, [dispatch]);

  return <>{children}</>;
}
