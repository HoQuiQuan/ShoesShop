"use client";
import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Nike Air Force 1",
      price: 120,
      quantity: 1,
      size: 42,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      price: 150,
      quantity: 2,
      size: 41,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const increase = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decrease = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 10;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">🛒 Giỏ hàng</h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Giỏ hàng của bạn đang trống</p>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg">
              Tiếp tục mua sắm
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT - Cart Items */}
            <div className="flex-1 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>

                    <p className="mt-2 font-bold">${item.price}</p>

                    {/* Quantity */}
                    <div className="flex items-center gap-2 mt-3">
                      <button
                        onClick={() => decrease(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => increase(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Xóa
                  </button>
                </div>
              ))}
            </div>

            {/* RIGHT - Summary */}
            <div className="w-full lg:w-80 bg-white rounded-xl shadow p-6 h-fit">
              <h2 className="text-lg font-semibold mb-4">Tóm tắt đơn hàng</h2>

              <div className="flex justify-between mb-2">
                <span>Tạm tính</span>
                <span>${subtotal}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Phí ship</span>
                <span>${shipping}</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between font-bold text-lg">
                <span>Tổng</span>
                <span>${total}</span>
              </div>

              {/* Coupon */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Mã giảm giá"
                  className="w-full border rounded-lg p-2 mb-2"
                />
                <button className="w-full bg-gray-200 py-2 rounded-lg">
                  Áp dụng
                </button>
              </div>

              {/* CTA */}
              <button className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800">
                Thanh toán
              </button>

              <button className="w-full mt-2 border py-3 rounded-lg">
                Tiếp tục mua
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
