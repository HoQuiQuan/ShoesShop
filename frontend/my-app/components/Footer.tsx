export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Store info */}
        <div>
          <h2 className="text-xl font-bold mb-4">SHOES STORE</h2>
          <p className="text-gray-400">
            Chuyên cung cấp các loại giày sneaker, giày thể thao chính hãng với
            giá tốt nhất.
          </p>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-semibold mb-4">Danh mục</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Giày Nam</li>
            <li className="hover:text-white cursor-pointer">Giày Nữ</li>
            <li className="hover:text-white cursor-pointer">Sneaker</li>
            <li className="hover:text-white cursor-pointer">Sale</li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Hỗ trợ</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">
              Chính sách đổi trả
            </li>
            <li className="hover:text-white cursor-pointer">
              Chính sách bảo hành
            </li>
            <li className="hover:text-white cursor-pointer">
              Hướng dẫn mua hàng
            </li>
            <li className="hover:text-white cursor-pointer">FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Liên hệ</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@shoes.com</li>
            <li>Hotline: 0123 456 789</li>
            <li>Địa chỉ: TP.HCM, Việt Nam</li>
          </ul>
        </div>
      </div>

      {/* Social */}
      <div className="border-t border-gray-700 py-6 text-center text-gray-400">
        <div className="flex justify-center gap-6 mb-3">
          <a className="hover:text-white">Facebook</a>
          <a className="hover:text-white">Instagram</a>
          <a className="hover:text-white">Youtube</a>
        </div>

        <p>© 2026 Shoes Store. All rights reserved.</p>
      </div>
    </footer>
  );
}
