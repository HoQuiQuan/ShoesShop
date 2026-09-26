"use client";

import axios from "axios";
import { Eye, EyeOff, Lock } from "lucide-react";
import { useState } from "react";
import { api } from "@/lib/axios";
import { AlertData } from "@/components/alert/alert";
import AlertContainer from "@/components/alert/AlertContainer";

export default function ChangePasswordPage() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleChangePassword = async () => {
    try {
      const res = await api.post(
        "/auth/change-password/",
        {
          oldPassword,
          newPassword,
          confirmPassword,
        },
        { withCredentials: true },
      );

      addAlert("success", "Đổi mật khẩu thành công!", "Đổi mật khẩu");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data);
        addAlert(
          "error",
          error.response?.data?.message ?? "Có lỗi xảy ra!",
          "Đổi mật khẩu",
        );
      } else {
        addAlert("error", "Lỗi không xác đinh!", "Đổi mật khẩu");
      }
    }
  };

  return (
    <>
      {AlertContainer({ alerts: alerts, onClose: removeAlert })}
      <div className="mx-auto max-w-xl rounded-2xl border border-gray-300 bg-white p-8 shadow-xl my-10">
        <h1 className="mb-2 text-3xl font-bold">Đổi mật khẩu</h1>

        <p className="mb-8 text-sm text-gray-500">
          Để bảo mật tài khoản, hãy nhập mật khẩu hiện tại và mật khẩu mới.
        </p>

        <div className="space-y-6">
          {/* Mật khẩu cũ */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Mật khẩu hiện tại
            </label>

            <div className="flex items-center rounded-lg border px-4">
              <Lock size={18} className="text-gray-500" />

              <input
                type={showOld ? "text" : "password"}
                placeholder="Nhập mật khẩu hiện tại"
                className="flex-1 px-3 py-3 outline-none"
                onChange={(e) => setOldPassword(e.target.value)}
              />

              <button type="button" onClick={() => setShowOld(!showOld)}>
                {!showOld ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Mật khẩu mới */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Mật khẩu mới
            </label>

            <div className="flex items-center rounded-lg border px-4">
              <Lock size={18} className="text-gray-500" />

              <input
                type={showNew ? "text" : "password"}
                placeholder="Nhập mật khẩu mới"
                className="flex-1 px-3 py-3 outline-none"
                onChange={(e) => setNewPassword(e.target.value)}
              />

              <button type="button" onClick={() => setShowNew(!showNew)}>
                {!showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Xác nhận */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Xác nhận mật khẩu
            </label>

            <div className="flex items-center rounded-lg border px-4">
              <Lock size={18} className="text-gray-500" />

              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Nhập lại mật khẩu"
                className="flex-1 px-3 py-3 outline-none"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {!showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            className="
            w-full
            rounded-lg
            bg-red-500
            py-3
            font-semibold
            text-white
            transition
            hover:bg-red-600
          "
            onClick={handleChangePassword}
          >
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </>
  );
}
