import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/layout/Footer"; // Assuming you have a Footer component
import ContactForm from "./components/home/ContactForm";
import FloatingContact from "./components/common/FloatingContact";
import ContactModal from "./components/common/ContactModal";
import Contact from "./pages/Contact";
import About from "./pages/About";


export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/san-pham" element={<Products />} />
          <Route path="/san-pham/:category" element={<Products />} />
          <Route path="/san-pham/:category/:slug" element={<ProductDetail />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
      </main>
      <ContactModal />
      <ContactForm />
      <FloatingContact />
      <Footer />
    </Router>
  );
}
