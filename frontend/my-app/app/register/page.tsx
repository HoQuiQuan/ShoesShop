"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { auth, googleProvider } from "@/lib/firebase";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      const user = result.user;

      console.log("User:", user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRegister = async (e: any) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await sendEmailVerification(userCredential.user);

      alert("Đăng ký thành công. Vui lòng kiểm tra email để xác thực.");

      router.push("/login");
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email đã tồn tại");
      } else if (error.code === "auth/weak-password") {
        alert("Mật khẩu phải ít nhất 6 ký tự");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT BANNER */}
      <div className="hidden lg:flex w-1/2 bg-black text-white items-center justify-center">
        <div className="max-w-md text-center space-y-6">
          <h1 className="text-4xl font-bold">SHOES STORE</h1>
          <p className="text-gray-300">
            Tạo tài khoản để khám phá bộ sưu tập giày mới nhất.
          </p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-md space-y-6">
          <div>
            <h2 className="text-3xl font-bold">Đăng ký</h2>
            <p className="text-gray-500">Tạo tài khoản để bắt đầu mua sắm</p>
          </div>

          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="text-sm font-medium">Họ và tên</label>
              <input
                type="text"
                placeholder="Nguyễn Văn A"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-3"
              />
            </div>

            <div>
              <label className="text-sm font-medium">Xác nhận mật khẩu</label>
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mt-1 border rounded-lg px-4 py-3"
              />
            </div>

            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" required />
              <span>
                Tôi đồng ý với <span className="text-blue-500">Điều khoản</span>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Đăng ký
            </button>
          </form>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-sm text-gray-500">Hoặc</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Social login */}
          <div className="grid grid-cols-2 gap-3">
            <button
              className="border py-3 rounded-lg hover:bg-gray-50 flex justify-center items-center gap-2"
              onClick={() => handleLogin()}
            >
              <FcGoogle size={27} />
              Google
            </button>

            <button className="border py-3 rounded-lg hover:bg-gray-50 flex justify-center items-center gap-2">
              <FaFacebook size={27} />
              Facebook
            </button>
          </div>

          <p className="text-center text-sm text-gray-500">
            Đã có tài khoản?{" "}
            <span
              className="text-black font-medium cursor-pointer"
              onClick={() => router.push("/login")}
            >
              Đăng nhập
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
