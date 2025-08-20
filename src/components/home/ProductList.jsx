// src/components/ProductList.jsx
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export default function ProductList() {
  const products = [
    {
      name: "Tucson",
      img: "src/assets/tucson-icon.webp",
      price: "825 triệu",
    },
    {
      name: "Santa Fe",
      img: "src/assets/santafe-icon.png",
      price: "1,055 tỷ",
    },
    { name: "IONIQ 5", img: "src/assets/ionig-icon.png", price: "1,3 tỷ" },
    {
      name: "All new Accent",
      img: "src/assets/accent-icon.webp",
      price: "455 triệu",
    },
    {
      name: "Stargazer X",
      img: "src/assets/stargazer-icon.png",
      price: "620 triệu",
    },
    {
      name: "Palisade",
      img: "src/assets/palisade-icon.png",
      price: "1,589 tỷ",
    },
    { name: "Custin", img: "src/assets/custin-icon.png", price: "1,19 tỷ" },
    { name: "Creta", img: "src/assets/creta-icon.png", price: "650 triệu" },
    {
      name: "Elentra",
      img: "src/assets/elentra-icon.png",
      price: "590 triệu",
    },
    { name: "i10", img: "src/assets/i10-icon.png", price: "360 triệu" },
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <section className="py-10 bg-white mt-3">
      <h2 className="text-4xl text-center font-bold text-gray-600 mb-10">
        Sản phẩm
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {visibleProducts.map((product, idx) => (
          <div key={idx} className="text-center">
            <div className="w-full aspect-square flex items-center justify-center rounded-lg">
              <img
                src={product.img}
                alt={product.name}
                className="max-h-[80%] max-w-[80%] object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Tên xe */}
            <p className="mt-[-50px] text-lg font-semibold text-[#3B241A] font-[Poppins]">
              {product.name}
            </p>

            {/* Giá xe */}
            <p className="text-sm">
              <span className="font-bold text-black">Giá: </span>
              <span className="font-bold text-blue-900">{product.price}</span>
            </p>
          </div>
        ))}
      </div>

      {/* Nút Xem tất cả / Thu gọn */}
      <div className="flex justify-end max-w-7xl mx-auto px-4 mt-6">
        <button
          onClick={() => setShowAll(!showAll)}
          className="flex items-center gap-1 text-gray-600 border-b border-gray-400 hover:text-gray-800 transition cursor-pointer"
        >
          <span>{showAll ? "Thu gọn" : "Xem tất cả"}</span>
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-300 ${
              showAll ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>
    </section>
  );
}
