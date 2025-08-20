// src/components/SearchBar.jsx
import { Search, Car, ChevronDown } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full bg-gray-100 py-10 px-4">
      {/* Background */}
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
        <div className="flex items-center bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Chọn loại xe + thanh dọc */}
          <div className="flex items-center px-3 bg-gray-50 relative pr-0">
            <Car className="w-4 h-4 text-gray-500 mr-2" />
            <select className="bg-transparent outline-none text-gray-700 text-sm appearance-none pr-6">
              <option value="all">Tất cả</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="mpv">MPV</option>
            </select>
            <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 pointer-events-none" />

            {/* Thanh dọc ngăn cách - chỉ hiện desktop */}
            <div className="hidden md:block w-px h-6 bg-gray-300 ml-6" />
          </div>

          {/* Ô tìm kiếm */}
          <input
            type="text"
            placeholder="Tìm kiếm mẫu xe, dòng xe..."
            className="flex-1 px-3 py-2 text-gray-700 text-sm outline-none"
          />

          {/* Nút tìm kiếm */}
          <button className="flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-800 text-white font-medium px-4 py-3 text-sm transition rounded-r-xl">
            <Search size={16} />
            <span className="hidden md:inline">Tìm kiếm</span>
          </button>
        </div>
      </div>
    </div>
  );
}
