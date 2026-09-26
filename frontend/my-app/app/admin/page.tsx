import ProtectedRoute from "@/components/auth/ProtectedRoute";
import {
  ShoppingCart,
  DollarSign,
  Package,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

const stats = [
  {
    title: "Tổng đơn hàng",
    value: "125",
    change: "+12.5%",
    icon: ShoppingCart,
  },
  {
    title: "Doanh thu",
    value: "25.600.000đ",
    change: "+8.2%",
    icon: DollarSign,
  },
  {
    title: "Sản phẩm",
    value: "86",
    change: "+4",
    icon: Package,
  },
  {
    title: "Khách hàng",
    value: "542",
    change: "+18",
    icon: Users,
  },
];

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="space-y-6">
        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <p className="mt-1 text-sm text-gray-500">
            Tổng quan hoạt động của cửa hàng
          </p>
        </div>

        {/* Stats */}
        <div
          className="
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        xl:grid-cols-4
      "
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                rounded-2xl
                border
                bg-white
                p-5
                shadow-sm
              "
              >
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{item.title}</p>

                    <p className="mt-2 text-2xl font-bold">{item.value}</p>
                  </div>

                  <div className="rounded-xl bg-gray-100 p-3">
                    <Icon size={21} />
                  </div>
                </div>

                <div
                  className="
                mt-4
                flex
                items-center
                gap-1
                text-xs
              "
                >
                  <TrendingUp size={14} />

                  <span className="font-semibold">{item.change}</span>

                  <span className="text-gray-400">so với tháng trước</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main */}
        <div
          className="
        grid
        grid-cols-1
        gap-6
        xl:grid-cols-3
      "
        >
          {/* Revenue */}
          <div
            className="
            rounded-2xl
            border
            bg-white
            p-5
            xl:col-span-2
          "
          >
            <h2 className="font-semibold">Doanh thu</h2>

            <p className="mt-1 text-sm text-gray-500">
              Doanh thu 7 ngày gần nhất
            </p>

            <div
              className="
            mt-8
            flex
            h-64
            items-end
            gap-3
            border-b
            border-l
            px-4
          "
            >
              {[40, 65, 50, 75, 55, 90, 70].map((height, index) => (
                <div key={index} className="flex h-full flex-1 items-end">
                  <div
                    className="
                      w-full
                      rounded-t-lg
                      bg-black
                    "
                    style={{
                      height: `${height}%`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Recent orders */}
          <div
            className="
          rounded-2xl
          border
          bg-white
          p-5
        "
          >
            <div className="flex items-center gap-2">
              <Clock size={18} />

              <h2 className="font-semibold">Đơn hàng gần đây</h2>
            </div>

            <div className="mt-5 space-y-4">
              {[
                ["#ORD001", "Nguyễn Văn A", "350.000đ"],
                ["#ORD002", "Trần Văn B", "720.000đ"],
                ["#ORD003", "Lê Văn C", "1.250.000đ"],
                ["#ORD004", "Phạm Văn D", "580.000đ"],
              ].map(([id, name, price]) => (
                <div
                  key={id}
                  className="
                  flex
                  justify-between
                  border-b
                  pb-3
                  last:border-0
                "
                >
                  <div>
                    <p className="text-sm font-medium">{id}</p>

                    <p className="text-xs text-gray-500">{name}</p>
                  </div>

                  <span className="text-sm font-semibold">{price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
