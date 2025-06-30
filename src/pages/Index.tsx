
import { Hero } from "@/components/Hero";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { PromoBanner } from "@/components/PromoBanner";
import { Newsletter } from "@/components/Newsletter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <CategoryShowcase />
        <FeaturedProducts />
        <PromoBanner />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
