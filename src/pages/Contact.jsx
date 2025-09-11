import { Phone, MapPin, Clock } from "lucide-react";
import LocationSection from "../components/home/LocationSection";

export default function Contact() {
  const hotline = "0981543342";
  const displayPhone = hotline.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
  const mapsUrl = "https://maps.app.goo.gl/kHWeiBFTj4ZicDTc7";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <section
        className="relative h-[420px] md:h-[520px] overflow-hidden"
        style={{
          backgroundImage: "url('/images/slides/santafe-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-label="Showroom Hyundai Gia Lai"
      >
        {/* Overlay chuyển sắc: giúp chữ nổi bật bên trái */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-transparent" />

        {/* Nội dung căn TRÁI, canh giữa theo chiều dọc */}
        <div className="relative h-full">
          <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
            <div className="flex h-full items-center">
              <div className="w-full md:max-w-2xl lg:max-w-3xl text-left text-white">
                <span className="inline-block mb-3 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs tracking-wide">
                  Showroom chính hãng • Gia Lai
                </span>

                <h1 className="text-2xl md:text-4xl font-extrabold leading-tight drop-shadow-sm">
                  HYUNDAI GIA LAI
                </h1>

                <p className="mt-2 text-sm md:text-base text-white/90">
                  Showroom Hyundai tại Gia Lai — tư vấn, báo giá, lái thử.
                </p>

                <p className="mt-1 flex items-start gap-2 text-white/90">
                  <MapPin size={18} className="mt-[2px] shrink-0" />
                  <span>278 Lê Duẩn, Phường An Phú, Gia Lai.</span>
                </p>

                {/* Hàng nút hành động */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${hotline}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-900 px-4 py-2 font-semibold hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <Phone size={18} />
                    Gọi {displayPhone}
                  </a>

                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 font-medium backdrop-blur-sm hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                  >
                    <MapPin size={18} />
                    Xem đường đi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THẺ THÔNG TIN NHANH */}
      <section className="relative -mt-10 md:-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <Phone className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Hotline</div>
                  <div className="text-lg font-semibold">{displayPhone}</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <MapPin className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Địa chỉ</div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:underline"
                  >
                    278 Lê Duẩn, Phường An Phú, Gia Lai.
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-blue-50 p-2">
                  <Clock className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Giờ làm việc</div>
                  <div className="text-lg font-semibold">
                    8:00–18:00 (T2–CN)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Khoảng cách trước phần bản đồ/section tiếp theo */}
          <div className="h-8 md:h-10" />
        </div>
      </section>

      {/* MAP / VỊ TRÍ CHI TIẾT */}
      <LocationSection />
    </div>
  );
}
