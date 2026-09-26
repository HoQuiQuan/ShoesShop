"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import type { RootState } from "@/reduxToolkit/Store.reduxToolkit";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const { data: customer, loading } = useSelector(
    (state: RootState) => state.customerReducer,
  );

  console.log("🔄 ProtectedRoute render:", {
    loading,
    customer,
  });

  useEffect(() => {
    console.log("👀 ProtectedRoute effect:", {
      loading,
      customer,
    });

    if (loading) return;

    if (!customer) {
      router.replace(`/admin/login?redirect=${encodeURIComponent(pathname)}`);
    }
  }, [customer, loading, pathname, router]);

  if (loading) {
    console.log("⏳ RETURN LOADING");

    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-black" />

          <p>Đang kiểm tra đăng nhập...</p>
        </div>
      </div>
    );
  }

  if (!customer) {
    console.log("❌ RETURN NULL - CHƯA LOGIN");
    return null;
  }

  console.log("✅ RETURN CHILDREN");

  return <>{children}</>;
}
