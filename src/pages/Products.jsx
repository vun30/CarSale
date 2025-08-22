import { Link, useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/layout/Breadcrumb";

export default function Products() {
  const categories = ["Tất cả", "Sedan", "SUV", "MPV", "Electric"];
  const { category } = useParams();
  const navigate = useNavigate();

  // Nếu không có category → mặc định "Tất cả"
  const active = category ? category : "Tất cả";

  const products = [
    {
      name: "Tucson",
      category: "SUV",
      slug: "tucson",
      image: "/images/product/tucson.png",
    },
    {
      name: "SantaFe",
      category: "SUV",
      slug: "santa-fe",
      image: "/images/product/santafe.png",
    },
    {
      name: "IONIQ 5",
      category: "Electric",
      slug: "ioniq-5",
      image: "/images/product/ioniq5.png",
    },
    {
      name: "Accent",
      category: "Sedan",
      slug: "accent",
      image: "/images/product/accent.png",
    },
    {
      name: "Stargazer X",
      category: "MPV",
      slug: "stargazer-x",
      image: "/images/product/stargazer.png",
    },
    {
      name: "Palisade",
      category: "SUV",
      slug: "palisade",
      image: "/images/product/palisade.png",
    },
    {
      name: "Custin",
      category: "MPV",
      slug: "custin",
      image: "/images/product/custin.png",
    },
    {
      name: "Creta",
      category: "SUV",
      slug: "creta",
      image: "/images/product/creta.png",
    },
    {
      name: "Elentra",
      category: "Sedan",
      slug: "elentra",
      image: "/images/product/elentra.png",
    },
    {
      name: "i10",
      category: "Sedan",
      slug: "i10",
      image: "/images/product/i10.png",
    },
  ];

  // Lọc theo category (nếu có)
  const filtered =
    active === "Tất cả"
      ? products
      : products.filter(
          (p) => p.category.toLowerCase() === active.toLowerCase()
        );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <Breadcrumb />

      {/* Title */}
      <div className="text-center mb-12 mt-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Sản phẩm</h1>
        <p className="text-gray-600">
          Khám phá các dòng xe Hyundai mới nhất tại Việt Nam
        </p>
      </div>

      {/* Category Tabs */}
      <div className="w-full border-b border-gray-200">
        <div className="flex w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                cat === "Tất cả"
                  ? navigate("/san-pham")
                  : navigate(`/san-pham/${cat.toLowerCase()}`)
              }
              className={`flex-1 text-center px-6 py-3 text-sm font-medium transition-all duration-300
                ${
                  active.toLowerCase() === cat.toLowerCase()
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product list */}
      <div
        key={active} // re-render khi đổi category để chạy animation
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-[fadeIn_0.6s_ease-in-out_forwards]"
      >
        {filtered.map((p) => (
          <Link
            key={p.slug}
            to={`/san-pham/${p.category.toLowerCase()}/${p.slug}`}
            className="text-center group"
          >
            <div className="h-40 flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="mt-3 font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {p.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
