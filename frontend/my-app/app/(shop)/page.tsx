import HeroBanner from "@/components/HeroBaner";
import NewProductSection from "@/components/product/newProductSection";

import CategorySection from "@/components/home/CategorySection";
import SaleBanner from "@/components/home/SaleBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs";

import heroImg from "../../public/heroBanner.jpg";

async function getProducts() {
  const res = await fetch("http://localhost:5000/product?page=1&limit=8", {
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error("Không thể tải danh sách sản phẩm");
  }

  return res.json();
}

export default async function Home() {
  const resProduct = await getProducts();
  const products = resProduct.data.items;

  return (
    <main className="min-h-screen overflow-hidden bg-white text-gray-900">
      {/* Hero banner */}
      <section>
        <HeroBanner
          slides={[
            {
              id: 1,
              image: heroImg,
              eyebrow: "LIMITED TIME OFFER",
              title: "BƯỚC CHÂN\nBỨT PHÁ",
              subtitle:
                "Khám phá những đôi giày giúp bạn tự tin trên mọi hành trình.",
              ctaText: "Khám phá ngay",
              ctaHref: "/product",
            },
            {
              id: 2,
              image: heroImg,
              eyebrow: "NEW COLLECTION",
              title: "PHONG CÁCH\nCỦA RIÊNG BẠN",
              subtitle:
                "Bộ sưu tập mới với thiết kế hiện đại, năng động và cá tính.",
              ctaText: "Xem bộ sưu tập",
              ctaHref: "/product",
            },
            {
              id: 3,
              image: heroImg,
              eyebrow: "SPECIAL OFFER",
              title: "NÂNG TẦM\nTỪNG BƯỚC CHÂN",
              subtitle: "Ưu đãi đặc biệt dành cho những tín đồ đam mê giày.",
              ctaText: "Săn ưu đãi",
              ctaHref: "/sale",
            },
          ]}
        />
      </section>

      {/* Danh mục */}
      <CategorySection />

      {/* Sản phẩm mới */}
      <section className="py-12 sm:py-16 lg:py-20">
        <NewProductSection />
      </section>

      {/* Banner sale */}
      <SaleBanner />

      {/* Lý do chọn shop */}
      <WhyChooseUs />
    </main>
  );
}
