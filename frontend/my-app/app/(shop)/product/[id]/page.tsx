import ProductDetail from "@/components/product/productDetail";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getProduct(id: string) {
  const response = await fetch(`http://localhost:5000/product/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Không thể lấy sản phẩm");
  }

  const result = await response.json();

  return result.data;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await getProduct(id);

  return (
    <div className="min-h-screen bg-white">
      <ProductDetail product={product} />
    </div>
  );
}
