// src/components/SearchBar.jsx
import { Search, Car, ChevronDown } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { productList } from "../../data/productList";

export default function SearchBar() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const blurTimeoutRef = useRef();
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const trimmedQuery = query.trim();

  const suggestions = useMemo(() => {
    const normalized = trimmedQuery.toLowerCase();
    if (!normalized) return [];

    return productList.filter((product) => {
      if (category !== "all") {
        const matchCategory =
          product.category.toLowerCase() === category.toLowerCase();
        if (!matchCategory) return false;
      }

      const nameMatches = product.name.toLowerCase().includes(normalized);
      const keywordMatches = product.keywords?.some((keyword) =>
        keyword.toLowerCase().includes(normalized)
      );

      return nameMatches || keywordMatches;
    });
  }, [category, trimmedQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (suggestions.length === 0) return;

    const first = suggestions[0];
    cancelBlurTimeout();
    navigate(`/san-pham/${first.category.toLowerCase()}/${first.slug}`);
    setQuery("");
    setIsFocused(false);
  };

  const cancelBlurTimeout = () => {
    if (blurTimeoutRef.current) {
      clearTimeout(blurTimeoutRef.current);
      blurTimeoutRef.current = undefined;
    }
  };

  useEffect(() => {
    return () => {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (
      trimmedQuery.length === 0 &&
      document.activeElement !== inputRef.current
    ) {
      if (blurTimeoutRef.current) {
        clearTimeout(blurTimeoutRef.current);
        blurTimeoutRef.current = undefined;
      }
      setIsFocused(false);
    }
  }, [trimmedQuery]);

  const handleBlur = () => {
    cancelBlurTimeout();
    blurTimeoutRef.current = setTimeout(() => {
      setIsFocused(false);
    }, 120);
  };

  const shouldShowDropdown = isFocused && trimmedQuery.length > 0;

  const handleSuggestionClick = () => {
    cancelBlurTimeout();
    setQuery("");
    setIsFocused(false);
  };
  return (
    <div className="w-full bg-gray-100 py-10 px-4">
      {/* Background */}
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <div className="relative">
          <form
            onSubmit={handleSubmit}
            className="flex items-center bg-white rounded-xl shadow-lg overflow-hidden"
          >
            {/* Chọn loại xe + thanh dọc */}
            <div className="flex items-center px-3 bg-gray-50 relative pr-0">
              <Car className="w-4 h-4 text-gray-500 mr-2" />
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="bg-transparent outline-none text-gray-700 text-sm appearance-none pr-6"
              >
                <option value="all">Tất cả</option>
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="mpv">MPV</option>
                <option value="electric">Electric</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 pointer-events-none" />

              <div className="hidden md:block w-px h-6 bg-gray-300 ml-6" />
            </div>

            {/* Ô tìm kiếm */}
            <input
              ref={inputRef}
              type="text"
              placeholder="Tìm kiếm mẫu xe, dòng xe..."
              className="flex-1 px-3 py-2 text-gray-700 text-sm outline-none"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onFocus={() => {
                cancelBlurTimeout();
                setIsFocused(true);
              }}
              onBlur={handleBlur}
              autoComplete="off"
            />

            {/* Nút tìm kiếm */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-800 text-white font-medium px-4 py-3 text-sm transition rounded-r-xl"
            >
              <Search size={16} />
              <span className="hidden md:inline">Tìm kiếm</span>
            </button>
          </form>

          {shouldShowDropdown && (
            <div
              className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-20"
              onMouseEnter={() => {
                cancelBlurTimeout();
                setIsFocused(true);
              }}
              onMouseLeave={() => {
                if (trimmedQuery.length === 0) {
                  setIsFocused(false);
                }
              }}
            >
              {suggestions.length > 0 ? (
                <ul className="divide-y divide-gray-100 max-h-72 overflow-y-auto">
                  {suggestions.map((product) => (
                    <li key={product.slug}>
                      <Link
                        to={`/san-pham/${product.category.toLowerCase()}/${
                          product.slug
                        }`}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-blue-50 transition"
                        onClick={handleSuggestionClick}
                      >
                        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800">
                            {product.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {product.category}
                          </p>
                        </div>
                        <span className="text-sm text-blue-700 font-medium">
                          Xem chi tiết
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-4 py-3 text-sm text-gray-500">
                  Không tìm thấy kết quả phù hợp.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
