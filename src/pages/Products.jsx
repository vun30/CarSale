import { Link, useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/layout/Breadcrumb";
import { productList } from "../data/productList";

export default function Products() {
  const categories = ["Tất cả", "Sedan", "SUV", "MPV", "Electric"];
  const { category } = useParams();
  const navigate = useNavigate();

  // Nếu không có category → mặc định "Tất cả"
  const active = category ? category : "Tất cả";

  

  // Lọc theo category (nếu có)
  const filtered =
    active === "Tất cả"
      ? productList
      : productList.filter(
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
