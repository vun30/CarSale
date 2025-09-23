// src/pages/About.jsx
import { Link } from "react-router-dom";
import {
  Car,
  Wrench,
  ShieldCheck,
  Users,
  CheckCircle2,
  PhoneCall,
  ArrowRight,
  Star,
} from "lucide-react";
import LocationSection from "../components/home/LocationSection";


export default function About() {
  
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 pt-14 pb-8 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-blue-100 text-blue-900 rounded-full px-3 py-1">
                About us
              </span>
              <h1 className="mt-4 text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
                Giới thiệu{" "}
                <span className="text-[#002c5f]">Hyundai Gia Lai</span>
              </h1>
              <p className="mt-4 text-gray-700 text-lg">
                Đại lý ủy quyền Hyundai Thành Công – đồng hành cùng khách hàng
                từ tư vấn chọn xe, đăng ký, bảo hiểm đến bảo dưỡng chính hãng.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    window.dispatchEvent(new Event("open-contact-modal"))
                  }
                  className="inline-flex items-center gap-2 rounded-xl bg-[#002c5f] text-white px-5 py-3 hover:opacity-95"
                >
                  Đăng ký lái thử <ArrowRight size={18} />
                </button>
                <Link
                  to="/lien-he"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#002c5f] text-[#002c5f] px-5 py-3 hover:bg-white"
                >
                  Liên hệ ngay
                </Link>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  Báo giá minh bạch
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  Giao xe nhanh
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  Bảo dưỡng chính hãng
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  Hỗ trợ tài chính
                </li>
              </ul>
            </div>

            <div className="relative">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-sm ring-1 ring-gray-200">
                <img
                  src="/pic/hyundai-gia-lai-2625320j32787.webp"
                  alt="Không gian trưng bày Hyundai Gia Lai"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="hidden md:flex gap-3 absolute -bottom-6 -left-6">
                <div className="rounded-xl bg-white shadow p-3 ring-1 ring-gray-200 flex items-center gap-2">
                  <Star className="text-amber-500" size={18} />
                  <p className="text-sm">
                    <span className="font-semibold">4.8/5</span> dịch vụ hậu mãi
                  </p>
                </div>
                <div className="rounded-xl bg-white shadow p-3 ring-1 ring-gray-200 flex items-center gap-2">
                  <PhoneCall className="text-blue-600" size={18} />
                  <a
                    href="tel:0981543342"
                    className="text-sm font-medium hover:underline"
                  >
                    0981 543 342
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Car, label: "Mẫu xe trưng bày", value: "10+" },
              { icon: Users, label: "Khách hàng phục vụ/năm", value: "3.000+" },
              { icon: Wrench, label: "Bays dịch vụ", value: "12" },
              {
                icon: ShieldCheck,
                label: "Bảo hành chính hãng",
                value: "5 năm",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm"
              >
                <s.icon className="mx-auto text-[#002c5f]" size={22} />
                <div className="mt-2 text-2xl font-bold text-blue-900">
                  {s.value}
                </div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl font-semibold text-blue-900">
                Tầm nhìn & cam kết
              </h2>
              <p className="mt-4 text-gray-700 text-lg">
                Hyundai Gia Lai hướng đến trải nghiệm liền mạch cho khách hàng:
                tư vấn đúng nhu cầu, thủ tục nhanh, lăn bánh thuận tiện, cùng
                chế độ hậu mãi rõ ràng. Là đại lý ủy quyền của Hyundai Thành
                Công, chúng tôi tuân thủ quy chuẩn showroom – xưởng dịch vụ và
                quy trình chất lượng toàn hệ thống.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                <li className="flex gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  Quy trình 5 bước: tư vấn → lái thử → hợp đồng → đăng ký → giao
                  xe.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  Định kỳ nhắc lịch bảo dưỡng – chi phí minh bạch.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="text-green-600" size={18} />
                  Hỗ trợ tài chính đa ngân hàng, duyệt nhanh.
                </li>
              </ul>
            </div>

            <figure className="m-0">
              <img
                src="/images/news/gia_lai_2407.webp"
                alt="Các dòng xe Hyundai tại showroom"
                className="w-full rounded-2xl shadow-sm ring-1 ring-gray-200"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Không gian trưng bày rộng, nhiều phiên bản & màu sắc.
              </figcaption>
            </figure>
          </div>

          {/* SECTION 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-start mt-12">
            <figure className="order-2 md:order-1 m-0">
              <img
                src="/images/news/dai-ly-xe-hyundai-gia-lai-showroomxe-com-vn.jpg"
                alt="Khu vực xưởng dịch vụ Hyundai"
                className="w-full rounded-2xl shadow-sm ring-1 ring-gray-200"
              />
              <figcaption className="text-sm text-gray-500 mt-2 text-center">
                Xưởng dịch vụ chính hãng – trang thiết bị chuẩn HMC/HTV.
              </figcaption>
            </figure>

            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold text-blue-900">
                Dịch vụ sau bán hàng
              </h2>
              <p className="mt-4 text-gray-700 text-lg">
                Đội ngũ cố vấn – kỹ thuật viên được đào tạo bài bản, cập nhật kỹ
                thuật mới nhất. Chúng tôi chú trọng vệ sinh khoang máy, điều
                hòa, kiểm tra an toàn và minh bạch vật tư.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-gray-700">
                <li className="flex gap-2">
                  <Wrench size={18} className="text-[#002c5f]" />
                  Bảo dưỡng định kỳ
                </li>
                <li className="flex gap-2">
                  <ShieldCheck size={18} className="text-[#002c5f]" />
                  Bảo hành điện tử
                </li>
                <li className="flex gap-2">
                  <Car size={18} className="text-[#002c5f]" />
                  Phụ tùng chính hãng
                </li>
                <li className="flex gap-2">
                  <PhoneCall size={18} className="text-[#002c5f]" />
                  Cứu hộ & hỗ trợ
                </li>
              </ul>
            </div>
          </div>

          {/* GALLERY SINGLE */}
          <figure className="mt-12">
            <img
              src="/pic/hd1.jpg"
              alt="Khu trưng bày xe cao cấp"
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-sm ring-1 ring-gray-200"
            />
          </figure>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="py-10 bg-blue-50 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-blue-900">
              Sẵn sàng lái thử & nhận báo giá?
            </h3>
            <p className="mt-2 text-blue-900/80">
              Đặt lịch trong 30 giây – chúng tôi sẽ liên hệ xác nhận và chuẩn bị
              xe theo nhu cầu của bạn.
            </p>
          </div>
          <div className="flex md:justify-end gap-3">
            <button
              onClick={() =>
                window.dispatchEvent(new Event("open-contact-modal"))
              }
              className="inline-flex items-center gap-2 rounded-xl bg-[#002c5f] text-white px-5 py-3 hover:opacity-95"
            >
              Đăng ký lái thử <ArrowRight size={18} />
            </button>
            <Link
              to="/san-pham"
              className="inline-flex items-center gap-2 rounded-xl border border-[#002c5f] text-[#002c5f] px-5 py-3 hover:bg-white"
            >
              Xem sản phẩm
            </Link>
          </div>
        </div>
      </section>

      {/* MAP / ĐỊA CHỈ */}
      <LocationSection />
    </main>
  );
}
