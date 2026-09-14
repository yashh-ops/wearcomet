import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ProductDisplay from "./components/productDisplay/ProductDisplay";
import SecondHero from "./components/secondHero/SecondHero";
import ProductDisplayTwo from "./components/productDisplayTwo/ProductDisplayTwo";
import PressSection from "./components/pressSection/PressSection";
import ReviewsSection from "./components/reviewsSection/ReviewsSection";
import Footer from "./components/footer/Footer";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Vault from "./pages/vault/Vault";
import "./App.css";

const Home = () => (
  <>
    <Hero />
    <ProductDisplay />
    <SecondHero />
    <ProductDisplayTwo />
    <PressSection />
    <ReviewsSection />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* PRODUCT DETAILS */}
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* THE VAULT */}
          <Route path="/pages/vault" element={<Vault />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
