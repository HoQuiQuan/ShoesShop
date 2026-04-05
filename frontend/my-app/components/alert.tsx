"use client";

import { useEffect, useState } from "react";

type AlertProps = {
  message: string;
  type?: "success" | "error" | "warning";
  duration?: number;
};

export default function Alert({
  message,
  type = "success",
  duration = 3000,
}: AlertProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
  };

  return (
    <div
      className={`
        fixed z-50
        top-5 right-5
        max-w-sm w-full
        text-white px-4 py-3 rounded-xl shadow-lg
        flex justify-between items-center gap-3
        transition-all duration-500

        ${colors[type]}

        ${show ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}

        md:max-w-md
        max-sm:top-auto max-sm:bottom-5
      `}
    >
      <span>{message}</span>

      <button onClick={() => setShow(false)} className="text-white text-lg">
        ✖
      </button>
    </div>
  );
}
