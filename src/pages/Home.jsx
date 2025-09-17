// src/Home.jsx

import HeroSlider from "../components/home/HeroSlider";
import ProductList from "../components/home/ProductList";
import SupportSection from "../components/home/SupportSection";
import NewsSection from "../components/home/NewsSection";
import LocationSection from "../components/home/LocationSection";
import ContactForm from "../components/home/ContactForm";
import SearchBar from "../components/home/SearchBar";
import usePageTitle from "../hooks/usePageTitle";
export default function Home() {
  usePageTitle("Hyundai Gia Lai - Showroom Xe Hyundai Chính Hãng");
  return (
    <div className="bg-gray-50 min-h-screen">
      <SearchBar />
      <HeroSlider />
      <SupportSection />
      <ProductList />
      <NewsSection />
      <LocationSection />
    </div>
  );
}
