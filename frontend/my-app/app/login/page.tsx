"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider();

  const handleLoginGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleLoginWithEmailPassword = async () => {
  //   if (!email || !password) {
  //     alert("Vui lòng nhập đầy đủ thông tin");
  //     return;
  //   }

  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       email,
  //       password,
  //     );

  //     console.log(userCredential.user);

  //     alert("Login thành công");
  //   } catch (error) {
  //     console.log(error);
  //     alert("Email hoặc password sai");
  //   }
  // };
  // LOGIN EMAIL PASSWORD
  const loginWithPassword = async () => {
    try {
      const methods = await fetchSignInMethodsForEmail(auth, email);

      if (methods.includes("google.com") && !methods.includes("password")) {
        alert("Email này đăng nhập bằng Google");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      console.log(userCredential.user);

      alert("Đăng nhập thành công");
    } catch (error) {
      console.log(error);

      alert("Đăng nhập thất bại");
    }
  };

  // // LOGIN GOOGLE
  // const loginWithGoogle = async () => {
  //   try {
  //     const result = await signInWithPopup(auth, provider);

  //     console.log("google login", result.user);
  //   } catch (err: any) {
  //     if (err.code === "auth/account-exists-with-different-credential") {
  //       const methods = await fetchSignInMethodsForEmail(
  //         auth,
  //         err.customData.email,
  //       );

  //       if (methods.includes("password")) {
  //         alert("Email này đã đăng ký bằng password");
  //       }
  //     }

  //     console.log(err.message);
  //   }
  // };

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
            <div>
              <label className="text-sm font-medium">Mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
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
