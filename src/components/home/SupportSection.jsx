// src/components/SupportSection.jsx
import { Phone } from "lucide-react";

export default function SupportSection() {
  return (
    <section className="bg-[#002c5f] py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Text */}
        <div className="text-center md:text-left text-white">
          <p className="text-lg font-semibold">
            HỖ TRỢ MUA XE HYUNDAI TRẢ GÓP ĐẾN 85%
          </p>
          <p className="text-sm md:text-base font-bold">
            LÃI SUẤT THẤP - THỦ TỤC NHANH CHÓNG
          </p>
        </div>

        {/* Phone Button */}
        <a
          href="tel:0902200700"
          className="flex items-center gap-2 bg-white text-[#002c5f] px-4 py-2 rounded-md shadow hover:bg-gray-100 transition"
        >
          <Phone size={18} />
          <span className="font-medium">0981 543 342</span>
        </a>
      </div>
    </section>
  );
}
