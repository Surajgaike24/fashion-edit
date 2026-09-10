import Navbar from "@/components/layout/navbar";
import Hero from "@/components/home/hero";
import FeaturedCategories from "@/components/home/featured-categories";
import TrendingProducts from "@/components/home/trending-products";
import ShopTheLook from "@/components/home/shop-the-look";
import EditorsPicks from "@/components/home/editors-picks";
import FashionInspiration from "@/components/home/fashion-inspiration";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-black">
      {/* Navigation */}
      <Navbar />

      {/* Main Experience */}
      <div>
        <Hero />

        <FeaturedCategories />

        <TrendingProducts />

        <ShopTheLook />

        <EditorsPicks />

        <FashionInspiration />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}