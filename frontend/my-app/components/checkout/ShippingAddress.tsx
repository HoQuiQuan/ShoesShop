"use client";

import { useState } from "react";
import { MapPin, Plus, Check, ChevronDown, X } from "lucide-react";
import AddressCard from "./AddressCard";
import type { CheckoutAddress } from "./CheckoutPage";
import { api } from "@/lib/axios";
import AddressApi from "@/app/Api/Address.api";

interface Props {
  addresses: CheckoutAddress[];
  selectedAddressId: number;
  onSelect: (id: number) => void;
  onAddressesChange: (addresses: CheckoutAddress[]) => void;
}

export default function ShippingAddress({
  addresses,
  selectedAddressId,
  onSelect,
  onAddressesChange,
}: Props) {
  const [open, setOpen] = useState(false);
  const [openSetAddress, setOpenSetAddress] = useState<boolean>(false);

  // Form thêm địa chỉ
  const [form, setForm] = useState({
    receiverName: "",
    receiverPhone: "",
    street: "",
    ward: "",
    city: "",
    isDefault: false,
  });

  const selectedAddress = addresses.find(
    (address) => address.id === selectedAddressId,
  );

  // =========================
  // Thay đổi input
  // =========================
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================
  // Mở form thêm địa chỉ
  // =========================
  const handleOpenAddAddress = () => {
    setForm({
      receiverName: "",
      receiverPhone: "",
      street: "",
      ward: "",
      city: "",
      isDefault: false,
    });

    setOpenSetAddress(true);
  };

  // =========================
  // Lưu địa chỉ
  // =========================
  const handleSaveAddress = async () => {
    if (
      !form.receiverName.trim() ||
      !form.receiverPhone.trim() ||
      !form.street.trim() ||
      !form.ward.trim() ||
      !form.city.trim()
    ) {
      alert("Vui lòng nhập đầy đủ thông tin địa chỉ");
      return;
    }

    try {
      const addressData = {
        receiverName: form.receiverName,
        receiverPhone: form.receiverPhone,
        street: form.street,
        ward: form.ward,
        city: form.city,
        isDefault: form.isDefault,
      };

      const res = await AddressApi.createAddress(addressData);

      // Lấy address mà backend vừa tạo
      const newAddress: CheckoutAddress = res.data.data;

      let newAddresses: CheckoutAddress[];

      if (form.isDefault) {
        newAddresses = addresses.map((address) => ({
          ...address,
          isDefault: false,
        }));

        newAddresses.push(newAddress);
      } else {
        newAddresses = [...addresses, newAddress];
      }

      onAddressesChange(newAddresses);

      // Chọn address vừa tạo
      onSelect(newAddress.id);

      setOpenSetAddress(false);
      setOpen(false);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {}
  };

  return (
    <section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <MapPin size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">Địa chỉ nhận hàng</h2>

            <p className="text-xs text-gray-500">
              Chọn địa chỉ bạn muốn nhận hàng
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleOpenAddAddress}
          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-black transition hover:bg-gray-100"
        >
          <Plus size={17} />

          <span className="hidden sm:inline">Thêm địa chỉ</span>
        </button>
      </div>

      {/* ========================= */}
      {/* FORM THÊM ĐỊA CHỈ */}
      {/* ========================= */}

      {openSetAddress && (
        <div className="border-b border-gray-200 bg-gray-50 p-5">
          <div className="rounded-xl border border-gray-200 bg-white p-5">
            {/* Form header */}
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-base font-semibold text-gray-900">
                Thêm địa chỉ mới
              </h3>

              <button
                type="button"
                onClick={() => setOpenSetAddress(false)}
                className="rounded-lg p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-black"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Tên người nhận */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Tên người nhận
                </label>

                <input
                  type="text"
                  name="receiverName"
                  value={form.receiverName}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Số điện thoại */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Số điện thoại
                </label>

                <input
                  type="tel"
                  name="receiverPhone"
                  value={form.receiverPhone}
                  onChange={handleChange}
                  placeholder="0901234567"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Địa chỉ */}
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Địa chỉ
                </label>

                <input
                  type="text"
                  name="street"
                  value={form.street}
                  onChange={handleChange}
                  placeholder="Số nhà, tên đường..."
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Phường */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Phường / Xã
                </label>

                <input
                  type="text"
                  name="ward"
                  value={form.ward}
                  onChange={handleChange}
                  placeholder="Phường..."
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-black"
                />
              </div>

              {/* Thành phố */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-gray-700">
                  Thành phố
                </label>

                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="TP. Hồ Chí Minh"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-black"
                />
              </div>
            </div>

            {/* Mặc định */}
            <label className="mt-4 flex cursor-pointer items-center gap-2">
              <input
                type="checkbox"
                name="isDefault"
                checked={form.isDefault}
                onChange={handleChange}
                className="h-4 w-4"
              />

              <span className="text-sm text-gray-700">
                Đặt làm địa chỉ mặc định
              </span>
            </label>

            {/* Buttons */}
            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpenSetAddress(false)}
                className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium transition hover:bg-gray-50"
              >
                Hủy
              </button>

              <button
                type="button"
                onClick={handleSaveAddress}
                className="rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Lưu địa chỉ
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================= */}
      {/* SELECTED ADDRESS */}
      {/* ========================= */}

      {selectedAddress && (
        <div className="p-5">
          <div className="rounded-xl border border-gray-200 p-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black">
                <Check size={12} className="text-white" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold">
                    {selectedAddress.receiverName}
                  </span>

                  <span className="text-gray-300">|</span>

                  <span className="text-sm text-gray-600">
                    {selectedAddress.receiverPhone}
                  </span>

                  {selectedAddress.isDefault && (
                    <span className="rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                      Mặc định
                    </span>
                  )}
                </div>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {selectedAddress.street}, {selectedAddress.ward},{" "}
                  {selectedAddress.city}
                </p>
              </div>
            </div>
          </div>

          {/* Change address */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-medium transition hover:bg-gray-50"
          >
            Thay đổi địa chỉ
            <ChevronDown
              size={16}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="mt-3 space-y-3">
              {addresses.map((address) => (
                <AddressCard
                  key={address.id}
                  address={address}
                  selected={address.id === selectedAddressId}
                  onClick={() => {
                    onSelect(address.id);
                    setOpen(false);
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
