"use client";

import { useSelector } from "react-redux";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import avartaDefault from "../public/avartarDefault.jpg";
import Image from "next/image";

import Link from "next/link";
import LoadingSpinner from "./LoadingComponent";

export default function AvatarUserLogin() {
  const user = useSelector((state) => state.customerReducer.data);
  const loadingUser = useSelector((state) => state.customerReducer.loading);
  console.log("user", user);

  console.log("loadingUser", loadingUser);
  const avatarUrl = user?.data?.avatar || avartaDefault;
  return (
    // <div className="cursor-pointer flex items-center gap-1">
    <>
      <div>
        {user ? (
          <Link href="/profile">
            <Image
              src={avatarUrl}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full cursor-pointer"
            />
          </Link>
        ) : (
          <Link href="/login">
            <User size={20} />
          </Link>
        )}
      </div>
    </>
  );
}
