import { Toaster } from "react-hot-toast";
import BannerSection from "./components/BannerSection";
import BlogSection from "./components/BlogSection";
import Cart from "./components/Cart";
import Category from "./components/Category";
import FeatureSection from "./components/FeatureSection";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import FeatureSectionFruits from "./components/FeatureSectionFruits";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MobNavbar from "./components/MobNavbar";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import { CartContextProvider } from "./context/cartContext";
import { useState } from "react";

const App = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <CartContextProvider>
      <main>
        <Toaster />
        <Navbar setShowCart={setShowCart} />
        <MobNavbar setShowCart={setShowCart} />
        <Hero />
        <Category />
        <FeatureSectionFruits />
        <FeatureSectionBreakfast />
        <BannerSection />
        <BlogSection />
        <Newsletter />
        <FeatureSection />
        <Footer />
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
      </main>
    </CartContextProvider>
  );
};

export default App;
