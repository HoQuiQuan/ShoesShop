"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { FiEye, FiEyeOff, FiMail, FiLock, FiShield } from "react-icons/fi";

import { useAppDispatch } from "@/reduxToolkit/hooks";

import { fetchCustomer } from "@/reduxToolkit/Auth.reduxToolkit";

import AuthApi from "@/app/Api/Auth";

import { type AlertData } from "@/components/alert/alert";

import AlertContainer from "@/components/alert/AlertContainer";

import Loading from "@/components/Loading";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParam = useSearchParams();
  // ================================
  // FORM
  // ================================

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  // ================================
  // VALIDATION
  // ================================

  const [emailError, setEmailError] = useState("");

  const [passwordError, setPasswordError] = useState("");

  // ================================
  // ALERT
  // ================================

  const [alerts, setAlerts] = useState<AlertData[]>([]);

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

  // ================================
  // VALIDATE FORM
  // ================================

  const validateForm = () => {
    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Vui lòng nhập email");

      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError("Email không hợp lệ");

      valid = false;
    }

    if (!password) {
      setPasswordError("Vui lòng nhập mật khẩu");

      valid = false;
    }

    return valid;
  };

  // ================================
  // CHECK ADMIN
  // ================================

  const checkAdmin = async () => {
    const result = await dispatch(fetchCustomer()).unwrap();

    if (result?.data?.role !== "ADMIN") {
      // Không phải admin
      await AuthApi.logout();

      addAlert(
        "error",
        "Tài khoản này không có quyền truy cập trang quản trị.",
        "Không có quyền truy cập",
      );

      return false;
    }

    return true;
  };

  // ================================
  // LOGIN EMAIL PASSWORD
  // ================================

  const loginWithPassword = async () => {
    if (loading) return;

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // ============================
      // LOGIN
      // ============================

      await AuthApi.loginAdmin(email.trim(), password);

      // ============================
      // LẤY CUSTOMER + CHECK ADMIN
      // ============================

      const isAdmin = await checkAdmin();

      if (!isAdmin) {
        return;
      }

      // ============================
      // SUCCESS
      // ============================

      addAlert("success", "Đăng nhập quản trị thành công!", "Admin Login");
      console.log("success", "Đăng nhập quản trị thành công!", "Admin Login");
      const redirect = searchParam.get("redirect");
      console.log(redirect);
      // Cho alert hiển thị một chút
      setTimeout(() => {
        router.replace(redirect ?? "");
      }, 500);
    } catch (error: any) {
      console.error("Admin login error:", error);

      const message = error?.response?.data?.message;

      if (Array.isArray(message)) {
        addAlert("error", message.join(", "), "Đăng nhập thất bại");
      } else {
        addAlert(
          "error",
          message || "Email hoặc mật khẩu không chính xác.",
          "Đăng nhập thất bại",
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // ================================
  // UI
  // ================================

  return (
    <>
      {/* ===========================
          LOADING
      ============================ */}

      {loading && <Loading text="Đang đăng nhập..." />}

      {/* ===========================
          ALERT
      ============================ */}

      {AlertContainer({
        alerts,
        onClose: removeAlert,
      })}

      {/* ===========================
          PAGE
      ============================ */}

      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8 sm:px-6">
        <div
          className="
            w-full
            max-w-md
            animate-[fadeIn_0.5s_ease-out]
          "
        >
          {/* ========================
              CARD
          ========================= */}

          <div
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-6
              shadow-xl
              sm:p-8
            "
          >
            {/* ======================
                LOGO
            ======================= */}

            <div className="flex justify-center">
              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-black
                  text-white
                  shadow-md
                  transition
                  duration-300
                  hover:scale-105
                "
              >
                <FiShield size={28} />
              </div>
            </div>

            {/* ======================
                TITLE
            ======================= */}

            <div className="mt-5 text-center">
              <h1
                className="
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-900
                  sm:text-3xl
                "
              >
                Admin Login
              </h1>

              <p
                className="
                  mt-2
                  text-sm
                  text-gray-500
                "
              >
                Đăng nhập vào trang quản trị
              </p>
            </div>

            {/* ======================
                FORM
            ======================= */}

            <div className="mt-8 space-y-5">
              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  Email
                </label>

                <div className="relative">
                  <FiMail
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                    size={18}
                  />

                  <input
                    id="email"
                    type="email"
                    value={email}
                    disabled={loading}
                    autoComplete="email"
                    placeholder="admin@example.com"
                    onChange={(e) => {
                      setEmail(e.target.value);

                      if (emailError) {
                        setEmailError("");
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        loginWithPassword();
                      }
                    }}
                    className={`
                      w-full
                      rounded-xl
                      border
                      bg-white
                      py-3
                      pl-10
                      pr-4
                      text-sm
                      text-gray-900
                      outline-none
                      transition
                      duration-200

                      placeholder:text-gray-400

                      focus:ring-2

                      disabled:cursor-not-allowed
                      disabled:bg-gray-100

                      ${
                        emailError
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                          : "border-gray-300 focus:border-black focus:ring-gray-100"
                      }
                    `}
                  />
                </div>

                {emailError && (
                  <p className="mt-1.5 text-xs text-red-500">{emailError}</p>
                )}
              </div>

              {/* PASSWORD */}

              <div>
                <label
                  htmlFor="password"
                  className="
                    mb-2
                    block
                    text-sm
                    font-medium
                    text-gray-700
                  "
                >
                  Mật khẩu
                </label>

                <div className="relative">
                  <FiLock
                    className="
                      pointer-events-none
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                    "
                    size={18}
                  />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    disabled={loading}
                    autoComplete="current-password"
                    placeholder="Nhập mật khẩu"
                    onChange={(e) => {
                      setPassword(e.target.value);

                      if (passwordError) {
                        setPasswordError("");
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        loginWithPassword();
                      }
                    }}
                    className={`
                      w-full
                      rounded-xl
                      border
                      bg-white
                      py-3
                      pl-10
                      pr-11
                      text-sm
                      text-gray-900
                      outline-none
                      transition
                      duration-200

                      placeholder:text-gray-400

                      focus:ring-2

                      disabled:cursor-not-allowed
                      disabled:bg-gray-100

                      ${
                        passwordError
                          ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                          : "border-gray-300 focus:border-black focus:ring-gray-100"
                      }
                    `}
                  />

                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="
                      absolute
                      right-3
                      top-1/2
                      -translate-y-1/2
                      text-gray-400
                      transition
                      hover:text-gray-700
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                    aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  >
                    {showPassword ? (
                      <FiEyeOff size={19} />
                    ) : (
                      <FiEye size={19} />
                    )}
                  </button>
                </div>

                {passwordError && (
                  <p className="mt-1.5 text-xs text-red-500">{passwordError}</p>
                )}
              </div>

              {/* ====================
                  FORGOT PASSWORD
              ===================== */}

              <div className="flex justify-end">
                <button
                  type="button"
                  disabled={loading}
                  onClick={() => router.push("/forgot-password")}
                  className="
                    text-sm
                    text-gray-500
                    transition
                    hover:text-black
                    hover:underline
                    disabled:opacity-50
                  "
                >
                  Quên mật khẩu?
                </button>
              </div>

              {/* ====================
                  LOGIN BUTTON
              ===================== */}

              <button
                type="button"
                disabled={loading}
                onClick={loginWithPassword}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-black
                  px-4
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition
                  duration-200

                  hover:-translate-y-0.5
                  hover:bg-gray-800
                  hover:shadow-md

                  active:translate-y-0

                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-white/30
                        border-t-white
                      "
                    />
                    Đang đăng nhập...
                  </span>
                ) : (
                  "Đăng nhập"
                )}
              </button>
            </div>

            {/* ======================
                DIVIDER
            ======================= */}

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />

              <span className="text-xs text-gray-400">HOẶC</span>

              <div className="h-px flex-1 bg-gray-200" />
            </div>

            {/* ======================
                SECURITY INFO
            ======================= */}

            <div
              className="
                mt-6
                rounded-xl
                bg-gray-50
                px-4
                py-3
                text-center
              "
            >
              <div className="flex items-center justify-center gap-2">
                <FiShield size={15} className="text-gray-500" />

                <span className="text-xs text-gray-500">
                  Chỉ tài khoản Admin mới có quyền truy cập
                </span>
              </div>
            </div>
          </div>

          {/* ========================
              FOOTER
          ========================= */}

          <p className="mt-5 text-center text-xs text-gray-400">
            © {new Date().getFullYear()} Shoes Store Admin
          </p>
        </div>
      </main>

      {/* ===========================
          ANIMATION
      ============================ */}

      <div
        className="
    w-full
    max-w-md
    animate-[fadeIn_0.5s_ease-out]
  "
      ></div>
    </>
  );
}
