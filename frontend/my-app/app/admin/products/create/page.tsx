import CreateProductForm from "@/components/product/CreateProductForm";

export default function CreateProductPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto w-full max-w-[1600px] px-3 py-5 sm:px-5 lg:px-8 lg:py-8">
        <CreateProductForm />
      </div>
    </main>
  );
}
