"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // LOGIN EMAIL BẰNG GOOGLE
  const handleLoginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken(true);
      try {
        const res = await axios.post(
          "http://localhost:5000/auth/loginWithGoogle",
          {
            token: token,
          },
          { withCredentials: true },
        );
        // console.log(res.data);
        console.log(res.data);
        alert("Login success");
        router.push("/");
      } catch (error) {
        alert(error);
      }
    } catch (error) {
      alert("fail");
    }
  };

  // LOGIN EMAIL PASSWORD
  const loginWithPassword = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/auth/loginLocal",
        {
          email,
          password,
        },
        { withCredentials: true },
      );
      console.log(res.data);
      alert("Login success");
      router.push("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-black text-white items-center justify-center">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-4xl font-bold">SHOES STORE</h1>
          <p className="text-gray-300">
            Khám phá bộ sưu tập giày mới nhất với phong cách hiện đại.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold">Đăng nhập</h2>
            <p className="text-gray-500">Đăng nhập để tiếp tục mua sắm</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            {/* Email */}
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {/* Password */}
            {/* <div>
              <label className="text-sm font-medium">Mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div> */}

            <div>
              <label className="text-sm font-medium">Mật khẩu</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-5"
                >
                  {showPassword ? <FiEye /> : <FiEyeOff />}
                </button>
              </div>
            </div>

            {/* Remember + forgot */}
            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Nhớ tài khoản
              </label>

              <button type="button" className="text-blue-500 hover:underline">
                Quên mật khẩu?
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              onClick={() => loginWithPassword()}
            >
              Đăng nhập
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-500">Hoặc</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              className="border py-3 rounded-lg hover:bg-gray-50 flex justify-center items-center gap-2"
              onClick={() => handleLoginGoogle()}
            >
              <FcGoogle size={27} />
              Google
            </button>

            <button className="border py-3 rounded-lg hover:bg-gray-50 flex justify-center items-center gap-2">
              <FaFacebook size={27} />
              Facebook
            </button>
          </div>

          {/* Register */}
          <p className="text-center text-sm text-gray-500">
            Chưa có tài khoản?{" "}
            <span
              className="text-black font-medium cursor-pointer"
              onClick={() => router.push("/register")}
            >
              Đăng ký
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
