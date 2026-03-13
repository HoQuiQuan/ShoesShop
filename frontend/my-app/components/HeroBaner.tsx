import Image from "next/image";

export default function HeroBanner() {
  return (
    <section
      className="min-h-[600px] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('data:image/jpeg;base64,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')",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10">
        {/* Content */}
        <div className="space-y-6">
          <p className="text-sm text-white uppercase tracking-widest">
            New Collection
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-red-400">
            Discover The Best <br />
            <span className="text-orange-500">Sneakers Collection</span>
          </h1>

          <p className="text-white text-lg">
            Explore the latest sneakers with modern design, comfort, and premium
            quality for your daily style.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Shop Now
            </button>

            <button className="px-6 py-3 border text-white border-gray-300 rounded-lg hover:bg-gray-100 transition hover:text-gray-500">
              View Collection
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/heroBannerImg.png"
            alt="Sneaker"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
