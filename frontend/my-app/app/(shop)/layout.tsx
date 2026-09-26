import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { App } from "@/components/App";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <App>
      <Header />

      {children}

      <Footer />
    </App>
  );
}
