import { Share2, Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Trang chủ",
    "Giới thiệu",
    "Sản phẩm",
    // "Dịch vụ",
    "Tin tức",
    "Đăng ký lái thử",
    "Liên hệ",
  ];

  const routeOf = (item) => {
    switch (item) {
      case "Trang chủ":
        return "/";
      case "Giới thiệu":
        return "/gioi-thieu";
      case "Sản phẩm":
        return "/san-pham";
      case "Dịch vụ":
        return "/dich-vu";
      case "Tin tức":
        return "/tin-tuc";
      case "Liên hệ":
        return "/lien-he";
      default:
        return "#";
    }
  };

  const handleTestDrive = () => {
    // mở modal
    window.dispatchEvent(new Event("open-contact-modal"));
    // đóng menu mobile (nếu đang mở)
    setIsOpen(false);
    // blur để tránh trình duyệt tự cuộn focus vào giữa trên mobile
    requestAnimationFrame(() => {
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
    });
  };

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src="/images/logo/huyndai_logo.png"
              alt="Hyundai Logo"
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Menu desktop */}
        <nav
          className="hidden md:flex items-center gap-6 text-gray-600 text-sm font-medium ml-30"
          aria-label="Main navigation"
        >
          {menuItems.map((item, idx) =>
            item === "Đăng ký lái thử" ? (
              <button
                key={idx}
                type="button"
                onClick={handleTestDrive}
                className="hover:text-gray-900 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ) : (
              <Link
                key={idx}
                to={routeOf(item)}
                className="hover:text-gray-900 transition-colors"
              >
                {item}
              </Link>
            )
          )}
        </nav>

        {/* Chữ Hyundai Gia Lai (desktop) */}
        <div className="hidden md:flex items-center">
          <span className="text-lg font-semibold text-blue-950">
            Hyundai Gia Lai
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden text-gray-700 hover:text-black"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav
            className="flex flex-col p-4 space-y-3 text-gray-600 text-sm font-medium"
            aria-label="Mobile navigation"
          >
            {menuItems.map((item, idx) =>
              item === "Đăng ký lái thử" ? (
                <button
                  key={idx}
                  type="button"
                  onClick={handleTestDrive}
                  className="w-full text-left hover:text-gray-900 transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ) : (
                <Link
                  key={idx}
                  to={routeOf(item)}
                  className="hover:text-gray-900 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              )
            )}

            <div className="flex gap-4 pt-3 border-t border-gray-200 mt-3">
              <button
                type="button"
                className="text-gray-700 hover:text-black cursor-pointer"
                aria-label="Chia sẻ"
              >
                <Share2 size={18} />
              </button>
              <button
                type="button"
                className="text-gray-700 hover:text-black cursor-pointer"
                aria-label="Tìm kiếm"
              >
                <Search size={18} />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
