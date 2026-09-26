"use client";

import ProfileCard from "@/components/ProfileCard";
import { useSelector } from "react-redux";

export default function Profile() {
  const user = useSelector((state) => state.customerReducer.data);
  return (
    <div
      className="
min-h-screen
bg-gray-100
py-5
sm:py-10
px-3
sm:px-5
"
    >
      <div
        className="
max-w-6xl
mx-auto
flex
flex-col
gap-5
"
      >
        {/* MENU */}

        <div
          className="
w-full
lg:w-72
shrink-0
"
        >
          {/* <Sidebar /> */}
        </div>

        {/* CONTENT */}

        <div
          className="
flex-1
space-y-5
"
        >
          <ProfileCard />

          {/* <OrderStats /> */}

          <div
            className="
bg-white
rounded-2xl
shadow-sm
p-4
sm:p-6
"
          >
            <h2
              className="
text-lg
sm:text-xl
font-bold
mb-5
"
            >
              Thông tin cá nhân
            </h2>

            <div
              className="
grid
grid-cols-1
sm:grid-cols-2
gap-4
"
            >
              <Info title="Họ tên" value={user?.data?.name} />

              <Info title="Email" value={user?.data?.email} />

              <Info
                title="Điện thoại"
                value={user?.data?.phone || `Chưa có thông tin`}
              />

              <Info title="Địa chỉ" value="Chưa có thông tin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ title, value }: { title: string; value: string }) {
  return (
    <div
      className="
bg-gray-50
rounded-xl
p-4
"
    >
      <p
        className="
text-sm
text-gray-500
"
      >
        {title}
      </p>

      <p
        className="
font-semibold
mt-1
break-words
"
      >
        {value}
      </p>
    </div>
  );
}
