import { Check } from "lucide-react";
import type { CheckoutAddress } from "./CheckoutPage";

interface Props {
  address: CheckoutAddress;
  selected: boolean;
  onClick: () => void;
}

export default function AddressCard({ address, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl border p-4 text-left transition ${
        selected
          ? "border-black bg-gray-50"
          : "border-gray-200 hover:border-gray-400"
      }`}
    >
      <div className="flex gap-3">
        <div
          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            selected ? "border-black bg-black" : "border-gray-300"
          }`}
        >
          {selected && <Check size={12} className="text-white" />}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">{address.receiverName}</span>

            <span className="text-sm text-gray-500">
              {address.receiverPhone}
            </span>

            {address.isDefault && (
              <span className="rounded-md bg-green-50 px-2 py-1 text-xs text-green-600">
                Mặc định
              </span>
            )}
          </div>

          <p className="mt-1 text-sm leading-6 text-gray-500">
            {address.street}, {address.ward}, {address.city}
          </p>
        </div>
      </div>
    </button>
  );
}
