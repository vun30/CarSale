// src/Home.jsx

import HeroSlider from "../components/home/HeroSlider";
import ProductList from "../components/home/ProductList";
import SupportSection from "../components/home/SupportSection";
import NewsSection from "../components/home/NewsSection";
import LocationSection from "../components/home/LocationSection";

import SearchBar from "../components/home/SearchBar";

export default function Home() {

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
