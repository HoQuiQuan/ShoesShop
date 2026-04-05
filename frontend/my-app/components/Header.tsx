"use client";

import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AvatarUserLogin from "./AvartaUserLogin";

export default function Header() {
  const menuItems = [
    { name: "Giày nam", path: "/giay-nam" },
    { name: "Giày nữ", path: "/giay-nu" },
    { name: "Giày thể thao", path: "/giay-the-thao" },
    { name: "Sneaker", path: "/sneaker" },
    { name: "Sale", path: "/sale" },
  ];

  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarCurrent, setNavbarCurrent] = useState("");

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div
            className="text-2xl font-bold cursor-pointer"
            onClick={() => router.push("/")}
          >
            SHOES
          </div>
        </div>

        {/* CENTER MENU (desktop only) */}
        <nav className="hidden lg:flex gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                setNavbarCurrent(item.name);
                router.push(item.path);
              }}
              className={`cursor-pointer hover:text-red-500 ${
                navbarCurrent === item.name ? "text-red-500" : ""
              }`}
            >
              {item.name}
            </div>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Search (ẩn trên mobile) */}
          <div className="hidden md:flex items-center border rounded-lg px-3 py-2 w-64">
            <Search size={18} />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="ml-2 w-full outline-none text-sm"
            />
          </div>

          {/* Icons */}
          <AvatarUserLogin />

          <div className="relative cursor-pointer">
            <ShoppingCart
              size={22}
              onClick={() => {
                router.push("/cart");
              }}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              2
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-3 border-t">
          {/* Search mobile */}
          <div className="flex items-center border rounded-lg px-3 py-2">
            <Search size={18} />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="ml-2 w-full outline-none"
            />
          </div>

          {/* Menu items */}
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                setNavbarCurrent(item.name);
                router.push(item.path);
                setIsMenuOpen(false);
              }}
              className="py-2 border-b cursor-pointer hover:text-red-500"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
