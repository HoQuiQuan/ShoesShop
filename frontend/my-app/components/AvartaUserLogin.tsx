import { useSelector } from "react-redux";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import avartaDefault from "../public/avartarDefault.jpg";
import Image from "next/image";

import Link from "next/link";

export default function AvatarUserLogin() {
  const data = useSelector((state) => state.customerReducer.data);
  const avatarUrl = data?.avartar || avartaDefault;
  return (
    // <div className="cursor-pointer flex items-center gap-1">
    <>
      {data ? (
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
    </>
    // </div>
  );
}
