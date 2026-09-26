"use client";

import {
  LayoutDashboard,
  Package,
  FolderTree,
  ShoppingCart,
  Users,
  Ticket,
  Warehouse,
  X,
  LogOut,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    title: "Tổng quan",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Sản phẩm",
    href: "/admin/products",
    icon: Package,
  },
  {
    title: "Danh mục",
    href: "/admin/categories",
    icon: FolderTree,
  },
  {
    title: "Đơn hàng",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    title: "Khách hàng",
    href: "/admin/customers",
    icon: Users,
  },
  {
    title: "Voucher",
    href: "/admin/vouchers",
    icon: Ticket,
  },
  {
    title: "Tồn kho",
    href: "/admin/inventory",
    icon: Warehouse,
  },
];

interface Props {
  open?: boolean;
  onClose?: () => void;
}

export default function AdminSidebar({ open = true, onClose }: Props) {
  const pathname = usePathname();

  return (
    <aside
      className={`
        fixed
        inset-y-0
        left-0
        z-50
        w-64
        border-r
        bg-white
        transition-transform
        duration-300

        ${open ? "translate-x-0" : "-translate-x-full"}

        lg:translate-x-0
      `}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b px-5">
        <Link href="/admin" className="text-xl font-black tracking-tight">
          SHOES<span className="text-gray-400">ADMIN</span>
        </Link>

        <button onClick={onClose} className="lg:hidden">
          <X size={22} />
        </button>
      </div>

      {/* Menu */}
      <nav className="space-y-1 p-3">
        {menus.map((menu) => {
          const Icon = menu.icon;

          const active =
            menu.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(menu.href);

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={`
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition

                ${
                  active
                    ? "bg-black text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }
              `}
            >
              <Icon size={19} />

              {menu.title}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="absolute bottom-0 w-full border-t p-3">
        <button
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-xl
            px-4
            py-3
            text-sm
            text-red-600
            hover:bg-red-50
          "
        >
          <LogOut size={19} />
          Đăng xuất
        </button>
      </div>
    </aside>
  );
}
