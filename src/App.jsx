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
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
