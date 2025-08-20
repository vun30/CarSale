import Header from "./components/layout/Header";
import HeroSlider from "./components/home/HeroSlider";
import ProductList from "./components/home/ProductList";
import SupportSection from "./components/home/SupportSection";
import NewsSection from "./components/home/NewsSection";
import LocationSection from "./components/home/LocationSection";
import Footer from "./components/layout/Footer";
import ContactForm  from "./components/home/ContactForm";   
import SearchBar  from "./components/home/SearchBar"; 
export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <SearchBar />
      <HeroSlider />
      <SupportSection />
      <ProductList />
      <NewsSection />
      <LocationSection />
      <ContactForm />
      <Footer />
    </div>
  );
}
