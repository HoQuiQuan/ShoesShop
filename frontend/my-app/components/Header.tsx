"use client";

import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const menuItems = [
    { name: "Giày nam", path: "/giay-nam" },
    { name: "Giày Nữ", path: "/giay-nu" },
    { name: "Giày Thể Thao", path: "/giay-the-thao" },
    { name: "Sneaker", path: "/sneaker" },
    { name: "Sale", path: "/sale" },
  ];
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarCurrent, setNavbarCurrent] = useState("Giày Nam");
  // Ham xu li toggle menu tren mobile
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <header className="w-full border-b bg-white mb-1">
      {/* Top header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => router.push("/")}
        >
          SHOES
        </div>

        {/* Menu */}
        <nav className="">
          <div className="max-w-7xl mx-auto flex gap-8 py-3 px-4 text-sm font-medium">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className={`hover:text-red-500 text-[16px] font-[sans-serif] cursor-pointer ${navbarCurrent === item.name ? "text-red-500" : ""}`}
                onClick={() => {
                  setNavbarCurrent(item.name);
                  router.push(item.path);
                }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </nav>

        {/* Search + {User + Cart} */}
        <div className="flex items-center gap-6">
          {/* Search */}
          <div className="flex items-center border rounded-lg px-3 py-2 w-1/2">
            <Search size={18} />
            <input
              type="text"
              placeholder="Tìm kiếm giày..."
              className="ml-2 w-full outline-none"
            />
          </div>

          {/* User + Cart */}
          <div className="flex items-center gap-6">
            <div
              className="cursor-pointer flex items-center gap-1"
              //   onClick={() => router.push("/login")}
            >
              <Link href="/login">
                <User size={20} />
              </Link>
            </div>

            <div className="cursor-pointer flex items-center gap-1 relative">
              <ShoppingCart size={20} />
              {/* <span>Giỏ hàng</span> */}

              {/* Cart count */}
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
