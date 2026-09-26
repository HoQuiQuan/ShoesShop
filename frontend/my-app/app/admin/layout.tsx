"use client";

import AdminHeader from "@/components/admin/Header";
import AdminSidebar from "@/components/admin/Sidebar";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AuthInitializer from "@/components/AuthInitializer";
import ReduxProvider from "@/reduxToolkit/Provider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ReduxProvider>
    //   <AuthInitializer>
    <div className="min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="lg:ml-64">
        <AdminHeader />

        {children}
      </div>
    </div>
    //   </AuthInitializer>
    // </ReduxProvider>
  );
}
