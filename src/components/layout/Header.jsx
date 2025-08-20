import { Share2, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/huyndai_logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Trang chủ",
    "Giới thiệu",
    "Sản phẩm",
    "Dịch vụ",
    "Tin tức",
    "Đăng ký lái thử",
    "Liên hệ",
  ];

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Hyundai Logo" className="h-12 w-auto" />
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center gap-6 text-gray-600 text-sm font-medium">
          {menuItems.map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Icons desktop */}
        {/* <div className="hidden md:flex items-center gap-4">
          <button className="text-gray-700 hover:text-black">
            <Share2 size={18} />
          </button>
          <button className="text-gray-700 hover:text-black">
            <Search size={18} />
          </button>
        </div> */}

        {/* Chữ Hyundai Gia Lai (desktop) */}
        <div className="hidden md:flex items-center">
          <span className="text-lg font-semibold text-blue-950">
            Hyundai Gia Lai
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-black"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3 text-gray-600 text-sm font-medium">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-gray-900 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex gap-4 pt-3 border-t border-gray-200 mt-3">
              <button className="text-gray-700 hover:text-black">
                <Share2 size={18} />
              </button>
              <button className="text-gray-700 hover:text-black">
                <Search size={18} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
