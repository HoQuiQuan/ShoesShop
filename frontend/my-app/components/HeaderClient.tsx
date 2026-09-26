"use client";

import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/reduxToolkit/hooks";
import { getCategory } from "@/reduxToolkit/category.reduxToolkit";
import AvatarUserLogin from "./AvartaUserLogin";
import LoadingSpinner from "./LoadingComponent";
import Loading from "./Loading";

export default function HeaderClient() {
  const menuItems = [
    { name: "Sale", slug: "/sale" },
    { name: "Sản phẩm", slug: "/san-pham" },
    { name: "Voucher", slug: "/vouchers" },
    { name: "Thông tin", slug: "/thong-tin" },
  ];

  const dispatch = useAppDispatch();
  const statusCart = useSelector((state) => state.customerReducer.loading);
  const cart = useSelector((state) => state.cartReducer.response);
  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const categories = useSelector((data) => data.categoryReducer?.data);

  // loading chuyen router
  const [loading, setLoading] = useState(false);

  const handleRedirect = (link: string) => {
    setLoading(true);
    router.push(link);
    setLoading(false);
  };

  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarCurrent, setNavbarCurrent] = useState("");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // dùng cho click (tablet/mobile-ish)
  const dropdownRef = useRef(null);

  // Đóng dropdown khi click ra ngoài (phòng trường hợp dùng click thay vì hover)
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsCategoryOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      {loading && <Loading text="Đang chuyển hướng..."></Loading>}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            className="text-2xl font-bold cursor-pointer tracking-tight"
            onClick={() => router.push("/")}
          >
            SHOES
          </div>
        </div>

        {/* CENTER MENU (desktop only) */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-medium">
          {/* Sale */}
          <div
            onClick={() => {
              setNavbarCurrent(menuItems[0].name);
              router.push(menuItems[0].slug);
            }}
            className={`relative cursor-pointer text-lg font-sans transition-colors duration-200 hover:text-red-500
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-500
              after:transition-all after:duration-300
              ${
                navbarCurrent === menuItems[0].name
                  ? "text-red-500 after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
          >
            {menuItems[0].name}
          </div>

          {/* Sản phẩm + dropdown */}
          <div
            ref={dropdownRef}
            className="relative group"
            onMouseEnter={() => setIsCategoryOpen(true)}
            onMouseLeave={() => setIsCategoryOpen(false)}
          >
            <div
              onClick={() => {
                setNavbarCurrent(menuItems[1].name);
                router.push(menuItems[1].slug);
              }}
              className={`flex items-center gap-1 cursor-pointer text-lg font-sans transition-colors duration-200 hover:text-red-500
                ${navbarCurrent === menuItems[1].name ? "text-red-500" : ""}`}
            >
              {menuItems[1].name}
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${
                  isCategoryOpen ? "rotate-180 text-red-500" : "text-gray-400"
                }`}
              />
            </div>

            {/* Dropdown */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[880px] z-50
                transition-all duration-300 ease-out
                ${
                  isCategoryOpen
                    ? "opacity-100 translate-y-0 visible pointer-events-auto"
                    : "opacity-0 -translate-y-2 invisible pointer-events-none"
                }`}
            >
              <div className="bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] p-8 relative overflow-hidden">
                {/* mũi tên chỉ báo */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45" />

                <div className="grid grid-cols-4 gap-8 relative">
                  {categories?.map((category, idx) => (
                    <div
                      key={category.id}
                      className="transition-all duration-300"
                      style={{
                        transitionDelay: isCategoryOpen
                          ? `${idx * 40}ms`
                          : "0ms",
                      }}
                    >
                      <h3 className="font-bold text-[15px] text-gray-900 border-b border-gray-100 pb-2 mb-3 uppercase tracking-wide">
                        {category.name}
                      </h3>

                      <ul className="space-y-2.5">
                        {category.children?.map((child) => (
                          <li
                            key={child.id}
                            className="group/item flex items-center cursor-pointer text-[14px] text-gray-500 hover:text-red-500 transition-all duration-200"
                            onClick={() => {
                              setIsCategoryOpen(false);
                              router.push(`/category/${child.slug}`);
                            }}
                          >
                            <span className="w-0 group-hover/item:w-2 h-[1.5px] bg-red-500 transition-all duration-200 mr-0 group-hover/item:mr-2 rounded-full" />
                            {child.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* footer link */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-end">
                  <span
                    className="text-sm font-semibold text-red-500 hover:text-red-600 cursor-pointer flex items-center gap-1 transition-colors"
                    onClick={() => {
                      setIsCategoryOpen(false);
                      router.push("/san-pham");
                    }}
                  >
                    Xem tất cả sản phẩm →
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Voncher */}
          <div
            onClick={() => {
              setNavbarCurrent(menuItems[2].name);
              router.push(menuItems[2].slug);
            }}
            className={`relative cursor-pointer text-lg font-sans transition-colors duration-200 hover:text-red-500
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-red-500
              after:transition-all after:duration-300
              ${
                navbarCurrent === menuItems[2].name
                  ? "text-red-500 after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
          >
            {menuItems[2].name}
          </div>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center border rounded-lg px-3 py-2 w-64 transition-all duration-200 focus-within:border-red-400 focus-within:ring-2 focus-within:ring-red-100">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="ml-2 w-full outline-none text-sm"
            />
          </div>

          <AvatarUserLogin />
          <div className="relative cursor-pointer group/cart">
            <ShoppingCart
              size={22}
              className="transition-transform duration-200 group-hover/cart:scale-110"
              onClick={() => {
                router.push("/cart");
              }}
            />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {cart?.items?.length || ``}
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t
          ${isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-t-0"}`}
      >
        <div className="px-4 pb-4 space-y-3">
          <div className="flex items-center border rounded-lg px-3 py-2 mt-3">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="ml-2 w-full outline-none"
            />
          </div>

          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => {
                setNavbarCurrent(item.name);
                router.push(item.slug);
                setIsMenuOpen(false);
              }}
              className={`py-2 border-b cursor-pointer transition-colors duration-200 hover:text-red-500
                ${navbarCurrent === item.name ? "text-red-500 font-semibold" : ""}`}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
