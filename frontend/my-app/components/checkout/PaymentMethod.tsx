import { Banknote, CreditCard } from "lucide-react";

interface Props {
  value: "COD" | "VNPAY" | "MOMO";
  onChange: (value: "COD" | "VNPAY" | "MOMO") => void;
}

export default function PaymentMethod({ value, onChange }: Props) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="font-semibold">Phương thức thanh toán</h2>

      <div className="mt-4 space-y-3">
        <button
          onClick={() => onChange("COD")}
          className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
            value === "COD"
              ? "border-black bg-gray-50"
              : "border-gray-200 hover:border-gray-400"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <Banknote size={20} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold">Thanh toán khi nhận hàng</p>

            <p className="mt-1 text-xs text-gray-500">
              Thanh toán bằng tiền mặt khi nhận hàng
            </p>
          </div>

          <div
            className={`h-5 w-5 rounded-full border ${
              value === "COD" ? "border-black bg-black" : "border-gray-300"
            }`}
          />
        </button>

        <button
          onClick={() => onChange("VNPAY")}
          className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
            value === "VNPAY"
              ? "border-black bg-gray-50"
              : "border-gray-200 hover:border-gray-400"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <CreditCard size={20} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold">VNPAY</p>

            <p className="mt-1 text-xs text-gray-500">
              Thanh toán qua tài khoản ngân hàng
            </p>
          </div>

          <div
            className={`h-5 w-5 rounded-full border ${
              value === "VNPAY" ? "border-black bg-black" : "border-gray-300"
            }`}
          />
        </button>

        <button
          onClick={() => onChange("MOMO")}
          className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
            value === "MOMO"
              ? "border-black bg-gray-50"
              : "border-gray-200 hover:border-gray-400"
          }`}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
            <CreditCard size={20} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold">MOMO</p>

            <p className="mt-1 text-xs text-gray-500">Thanh toán bằng MOMO</p>
          </div>

          <div
            className={`h-5 w-5 rounded-full border ${
              value === "MOMO" ? "border-black bg-black" : "border-gray-300"
            }`}
          />
        </button>
      </div>
    </section>
  );
}
