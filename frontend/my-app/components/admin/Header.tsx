"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function AdminHeader() {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        flex
        h-16
        items-center
        justify-between
        border-b
        bg-white
        px-4
        sm:px-6
      "
    >
      <button className="lg:hidden">
        <Menu size={24} />
      </button>

      {/* Search */}
      <div className="hidden md:flex">
        <div className="flex w-72 items-center gap-2 rounded-lg bg-gray-100 px-3 py-2">
          <Search size={18} className="text-gray-400" />

          <input
            placeholder="Tìm kiếm..."
            className="
              w-full
              bg-transparent
              text-sm
              outline-none
            "
          />
        </div>
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="relative">
          <Bell size={20} />

          <span
            className="
              absolute
              -right-1
              -top-1
              h-2
              w-2
              rounded-full
              bg-red-500
            "
          />
        </button>

        <div className="flex items-center gap-2">
          <div
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-black
              text-sm
              font-bold
              text-white
            "
          >
            A
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold">Administrator</p>

            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
