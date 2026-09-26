"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ProductCard from "../ProductCard";
import CategoryApi from "@/app/Api/Category.api";
import ProductApi from "@/app/Api/Product.api";

interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  colors: string[];
}

interface ProductResponse {
  items: Product[];
  total: number;
  page: number;
  totalPages: number;
}

interface Category {
  id: number;
  name: string;
}

// const defaultCategories: Category[] = [
//   {
//     id: 0,
//     name: "Tất cả",
//   },
//   {
//     id: 1,
//     name: "Vợt Cầu Lông",
//   },
//   {
//     id: 2,
//     name: "Giày Cầu Lông",
//   },
//   {
//     id: 3,
//     name: "Áo Cầu Lông",
//   },
//   {
//     id: 4,
//     name: "Váy Cầu Lông",
//   },
//   {
//     id: 5,
//     name: "Quần Cầu Lông",
//   },
// ];

export default function NewProductSection() {
  const [activeCategory, setActiveCategory] = useState(1);
  const [categories, setCategories] = useState<Category[]>([]);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<ProductResponse | null>(null);

  const productSliderRef = useRef<HTMLDivElement>(null);

  const scrollProducts = (direction: "left" | "right") => {
    if (!productSliderRef.current) return;

    const container = productSliderRef.current;

    const amount = container.clientWidth * 0.85;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await CategoryApi.getAllCategory();

        const categories = res.data.data;

        // Lấy tất cả id của những category đang được làm parent
        const parentIds = new Set(
          categories
            .filter((item) => item.parentId !== null)
            .map((item) => item.parentId),
        );

        // Chỉ lấy category không phải parent
        const data = categories
          .filter((item) => !parentIds.has(item.id))
          .map((item) => ({
            id: item.id,
            name: item.name,
          }));

        setCategories(data);
        setPage(1);
      } catch (error) {
        console.error("Lỗi lấy category:", error);
      }
    };

    getCategory();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      const res = await ProductApi.getAllProduct(page, 10, activeCategory);
      const products = res.data.data;
      setProducts(products);
    };
    getProducts();
  }, [activeCategory, page]);

  return (
    <section className="w-full bg-white py-8 sm:py-10 md:py-12 lg:py-14">
      {/* =====================================================
          TITLE
      ===================================================== */}

      <div className="mb-6 flex flex-col items-center px-4 sm:mb-8 md:mb-10">
        <h2
          className="
            text-center
            text-2xl
            font-bold
            text-[#f45112]

            sm:text-3xl
            md:text-4xl
          "
        >
          Sản phẩm mới
        </h2>

        <div
          className="
            relative
            mt-3
            h-1.5
            w-32
            overflow-hidden
            rounded-full
            bg-gray-200

            sm:mt-4
            sm:w-40

            md:w-48
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-12
              -translate-x-1/2
              rounded-full
              bg-[#f45112]

              sm:w-14
              md:w-16
            "
          />
        </div>
      </div>

      {/* =====================================================
          CATEGORY NAVIGATION
      ===================================================== */}

      <div className="w-full border-y border-gray-200">
        <div
          className="
            mx-auto
            w-full
            max-w-[1570px]
          "
        >
          <div
            className="
              flex
              w-full

              /*
               * MOBILE
               * Cho phép vuốt ngang
               */
              overflow-x-auto
              overscroll-x-contain
              scroll-smooth
              snap-x
              snap-mandatory

              scrollbar-hide

              /*
               * DESKTOP
               * Không scroll nữa
               */
              lg:overflow-x-visible
              lg:snap-none
            "
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    group
                    relative
                    flex
                    min-h-[50px]
                    flex-shrink-0
                    snap-start
                    items-center
                    justify-center
                    whitespace-nowrap
                    border-r
                    border-gray-200
                    px-5
                    py-3
                    text-center
                    text-sm
                    font-bold
                    transition-all
                    duration-200

                    /*
                     * MOBILE
                     */
                    min-w-fit

                    /*
                     * SMALL
                     */
                    sm:min-h-[54px]
                    sm:px-6
                    sm:text-base

                    /*
                     * TABLET
                     */
                    md:min-h-[58px]
                    md:px-7
                    md:text-lg

                    /*
                     * DESKTOP
                     * Chia đều 6 cột
                     */
                    lg:min-w-0
                    lg:flex-1
                    lg:px-3
                    lg:text-base

                    xl:text-lg

                    ${
                      isActive
                        ? "bg-[#335eb4] text-white"
                        : "bg-white text-gray-600 hover:bg-gray-50"
                    }
                  `}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCT AREA
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          w-full
          max-w-[1570px]
          overflow-hidden
          rounded-b-xl
          bg-[#ededed]

          p-3

          sm:p-4

          md:p-5

          lg:p-6
        "
      >
        {/* ===================================================
            LEFT ARROW
        =================================================== */}

        <button
          type="button"
          onClick={() => scrollProducts("left")}
          aria-label="Xem sản phẩm trước"
          className="
            absolute
            left-2
            top-1/2
            z-20
            hidden
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-gray-700
            shadow-lg
            transition-all
            duration-200
            hover:scale-110
            hover:bg-gray-100
            active:scale-95

            lg:flex
          "
        >
          <ChevronLeft size={24} />
        </button>

        {/* ===================================================
            PRODUCT SLIDER
        =================================================== */}

        <div
          ref={productSliderRef}
          className="
            flex
            gap-3
            overflow-x-auto
            overscroll-x-contain
            scroll-smooth
            snap-x
            snap-mandatory
            scrollbar-hide

            sm:gap-4
          "
        >
          {products?.items?.map((product) => (
            <div
              key={product.id}
              className="
                flex
                flex-shrink-0
                snap-start

                /*
                 * MOBILE
                 * 1 sản phẩm + một phần sản phẩm kế bên
                 */
                w-[78%]

                /*
                 * MOBILE LỚN
                 */
                min-[480px]:w-[62%]

                /*
                 * SMALL
                 */
                sm:w-[calc(50%-8px)]

                /*
                 * TABLET
                 */
                md:w-[calc(33.333333%-11px)]

                /*
                 * DESKTOP
                 */
                lg:w-[calc(25%-12px)]

                /*
                 * LARGE DESKTOP
                 */
                xl:w-[calc(20%-13px)]
              "
            >
              <ProductCard
                id={product.id}
                name={product.name}
                slug={product.slug}
                category={product.category}
                image={product.image}
                price={product.price}
                colors={product.colors}
              />
            </div>
          ))}
        </div>

        {/* ===================================================
            RIGHT ARROW
        =================================================== */}

        <button
          type="button"
          onClick={() => scrollProducts("right")}
          aria-label="Xem sản phẩm tiếp theo"
          className="
            absolute
            right-2
            top-1/2
            z-20
            hidden
            h-10
            w-10
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white
            text-gray-700
            shadow-lg
            transition-all
            duration-200
            hover:scale-110
            hover:bg-gray-100
            active:scale-95

            lg:flex
          "
        >
          <ChevronRight size={24} />
        </button>

        {/* ===================================================
    PAGINATION
=================================================== */}
        {products && products.totalPages > 1 && (
          <div className="mt-6 flex items-center justify-center px-2">
            <div className="flex items-center gap-1 sm:gap-2">
              {/* Previous */}
              <button
                type="button"
                disabled={page === 1}
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                className="
          flex
          h-9
          min-w-9
          items-center
          justify-center
          rounded-lg
          border
          border-gray-300
          bg-white
          text-gray-600
          transition

          hover:bg-gray-100

          disabled:cursor-not-allowed
          disabled:opacity-40

          sm:h-10
          sm:min-w-10
        "
                aria-label="Trang trước"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Page numbers */}
              {Array.from(
                { length: products.totalPages },
                (_, index) => index + 1,
              ).map((pageNumber) => {
                const isActive = page === pageNumber;

                return (
                  <button
                    key={pageNumber}
                    type="button"
                    onClick={() => setPage(pageNumber)}
                    className={`
              flex
              h-9
              min-w-9
              items-center
              justify-center
              rounded-lg
              border
              px-2
              text-sm
              font-medium
              transition

              sm:h-10
              sm:min-w-10
              sm:text-base

              ${
                isActive
                  ? "border-[#335eb4] bg-[#335eb4] text-white"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
              }
            `}
                  >
                    {pageNumber}
                  </button>
                );
              })}

              {/* Next */}
              <button
                type="button"
                disabled={page === products?.totalPages}
                onClick={() =>
                  setPage((prev) => Math.min(prev + 1, products?.totalPages))
                }
                className="
          flex
          h-9
          min-w-9
          items-center
          justify-center
          rounded-lg
          border
          border-gray-300
          bg-white
          text-gray-600
          transition

          hover:bg-gray-100

          disabled:cursor-not-allowed
          disabled:opacity-40

          sm:h-10
          sm:min-w-10
        "
                aria-label="Trang tiếp theo"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
