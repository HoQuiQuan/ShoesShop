"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useAppDispatch } from "@/reduxToolkit/hooks";
import { fetchCustomer } from "@/reduxToolkit/Auth.reduxToolkit";
import { getCart } from "@/reduxToolkit/cart.reduxTookit";
import { type AlertData } from "@/components/alert/alert";
import AlertContainer from "@/components/alert/AlertContainer";
import AuthApi from "@/app/Api/Auth";
import Loading from "@/components/Loading";

export default function LoginPage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [alerts, setAlerts] = useState<AlertData[]>([]);
  console.log(alerts);

  const addAlert = (
    type: AlertData["type"],
    message: string,
    title?: string,
  ) => {
    const newAlert: AlertData = {
      id: crypto.randomUUID(),
      type,
      message,
      title,
      duration: 4000,
    };

    setAlerts((prev) => [...prev, newAlert]);
  };

  const removeAlert = (id: string) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };
  // LOGIN EMAIL BẰNG GOOGLE
  const handleLoginGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken(true);
      try {
        await AuthApi.loginWithGoogle(token);
        addAlert("success", "Đăng nhập thành công!", "Login with Google");
        router.push("/");
      } catch (error) {
        addAlert("error", "Đăng nhập thất bại!", "Login with Google");
      }
    } catch (error) {
      addAlert(
        "error",
        "Không thể sử dụng phương thức đăng nhập bằng Google",
        "Login with Google",
      );
    } finally {
      setLoading(false);
    }
  };

  // LOGIN EMAIL PASSWORD
  const loginWithPassword = async () => {
    setLoading(true);
    try {
      const res = await AuthApi.loginWithPassword(email, password);
      await dispatch(fetchCustomer()).unwrap();
      await dispatch(getCart()).unwrap();
      addAlert("success", "Đăng nhập thành công!", "Login with Local");
      router.push("/");
    } catch (error) {
      console.log(alerts);
      addAlert("error", "Đăng nhập thất bại!", "Login with Local");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading text="đang đăng nhập..."></Loading>}
      {AlertContainer({ alerts: alerts, onClose: removeAlert })}
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
    </>
  );
}
