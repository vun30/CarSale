import { Mail, Phone, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#002c5f] text-white pt-10">
      {/* Nội dung chính */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:text-left text-center space-y-6 md:space-y-0">
        {/* Logo & Địa chỉ */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-6">
            <img
              src="images/logo/logo_footer.png"
              alt="Hyundai TC Motor"
              className="mt-[-1px] h-8 mb-4"
            />
            <h2 className=" mr-7 text-xl font-bold mb-3">HYUNDAI | TC MOTOR</h2>
          </div>
          <div className="mt-4">
            <p>Hyundai Gia Lai - Showroom Hyundai Tại Gia Lai.</p>
            <p>Showroom: 278 Lê Duẩn, Phường An Phú, Gia Lai.</p>
          </div>
        </div>

        {/* Hỗ trợ khách hàng */}
        <div className="flex flex-col items-center md:items-start ">
          <h3 className="text-lg font-bold border-b border-white/20 pb-1 mb-3">
            HỖ TRỢ KHÁCH HÀNG
          </h3>
          <div className="mt-4">
            <p>
              <span className="font-semibold">Hotline:</span> 0981543342
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              hyundaigialaiofficial@gmail.com
            </p>
            <p>
              <span className="font-semibold">Website:</span>{" "}
              hyundaigialaiofficial.com.vn
            </p>
          </div>
        </div>

        {/* Follow */}
        <div className="flex flex-col items-center md:items-start ">
          <h3 className="text-lg font-bold border-b border-white/20 pb-1 mb-3">
            FOLLOW
          </h3>
          <div className="flex gap-3">
            <a
              href="mailto:hyundaitphcm.cskh@gmail.com"
              className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              <Mail size={18} />
            </a>
            <a
              href="tel:0933490013"
              className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              <Phone size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full border border-white hover:bg-white hover:text-black transition"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mt-8 py-4 text-sm flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4 space-y-2 md:space-y-0">
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#" className="hover:underline text-gray-400">
            TRANG CHỦ
          </a>
          <a href="#" className="hover:underline text-gray-400">
            CHÍNH SÁCH BẢO MẬT
          </a>
          <a href="#" className="hover:underline text-gray-400">
            LIÊN HỆ
          </a>
        </div>
        <div className="text-center text-gray-400">
          Copyright © 2025 hyundaitphcm.com.vn
        </div>
        <div className="text-center text-gray-400">
          Hyundai Gia Lai - Gia Lai
        </div>
      </div>
    </footer>
  );
}
