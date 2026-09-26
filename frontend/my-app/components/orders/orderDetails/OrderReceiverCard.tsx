"use client";

import { MapPin, Phone, User } from "lucide-react";

interface Props {
  name: string;
  phone: string;
  address: string;
}

export default function OrderReceiverCard({ name, phone, address }: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-6">
      <div className="mb-5">
        <h2 className="font-bold text-gray-900">Thông tin nhận hàng</h2>

        <p className="mt-1 text-sm text-gray-500">
          Địa chỉ được sử dụng cho đơn hàng này
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <User size={17} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Người nhận</p>

            <p className="mt-1 font-medium">{name}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <Phone size={17} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Số điện thoại</p>

            <p className="mt-1 font-medium">{phone}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100">
            <MapPin size={17} />
          </div>

          <div>
            <p className="text-xs text-gray-500">Địa chỉ</p>

            <p className="mt-1 text-sm leading-6 text-gray-700">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
