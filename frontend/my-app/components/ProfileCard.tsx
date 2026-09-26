"use client";

import { useSelector, UseSelector } from "react-redux";
import avartaDefault from "../public/avartarDefault.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfileCard() {
  const user = useSelector((state) => state.customerReducer.data);
  console.log("user", user);
  const avatarUrl = user?.data?.avatar || avartaDefault;
  const route = useRouter();

  return (
    <div
      className="
bg-white
rounded-2xl
shadow-sm
overflow-hidden
"
    >
      <div
        className="
h-24
sm:h-32
bg-gradient-to-r
from-blue-600
to-purple-600
"
      />
      <div
        className="
px-4
sm:px-6
pb-5
"
      >
        <div
          className="
flex
flex-col
sm:flex-row
sm:items-end
gap-4
-mt-12
"
        >
          <Image
            src={avatarUrl}
            alt="User avatar"
            width={128}
            height={128}
            sizes="(max-width: 640px) 96px, 128px"
            className="h-24 w-24 rounded-full border-4 border-white object-cover sm:h-32 sm:w-32"
          />

          <div>
            <h1
              className="
text-xl
sm:text-2xl
font-bold
"
            >
              {user?.data?.name}
            </h1>

            <p
              className="
text-sm
text-gray-500
break-all
"
            >
              {user?.data?.email}
            </p>
          </div>
        </div>

        <div
          className="
flex
flex-col
sm:flex-row
gap-3
mt-5
"
        >
          <button
            className="
bg-blue-600
text-white
rounded-xl
px-5
py-2
w-full
sm:w-auto
"
          >
            Chỉnh sửa
          </button>

          <button
            className="
border
rounded-xl
px-5
py-2
w-full
sm:w-auto
"
            onClick={() => route.push("/profile/change-password")}
          >
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
}
