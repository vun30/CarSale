// src/components/NewsSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import newsData from "../../data/newsData";
import "../../styles/NewsSection.css"; // Ensure you have this CSS file for custom styles

// --- Helpers duplicated from News.jsx ---
function getCover(n) {
  if (!n) return undefined;
  if (n.cover) return n.cover;
  if (n.image) return n.image;
  if (Array.isArray(n.images) && n.images.length > 0) {
    const it = n.images[0];
    return typeof it === "string" ? it : it?.src;
  }
  return undefined;
}

function parseDateParts(iso) {
  try {
    const d = new Date(iso);
    if (isNaN(d)) return null;
    const day = d.toLocaleDateString("vi-VN", { day: "2-digit" });
    const monthRaw = d.toLocaleDateString("vi-VN", { month: "short" });
    const month = monthRaw.charAt(0).toUpperCase() + monthRaw.slice(1).replace(".", "");
    const full = d.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return { day, month, full };
  } catch {
    return null;
  }
}

function byNewest(a, b) {
  const ad = a?.date ? new Date(a.date).getTime() : 0;
  const bd = b?.date ? new Date(b.date).getTime() : 0;
  return bd - ad;
}

export default function NewsSection() {
  const list = useMemo(() => {
    return newsData
      .map((n) => ({
        ...n,
        cover: getCover(n),
        dateParts: parseDateParts(n.date),
      }))
      .sort(byNewest)
      .slice(0, 6);
  }, []);
  return (
    <section className="bg-[#f0faff] py-10 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#002c5f] mb-6 text-center">
          Tin Tức Mới
        </h2>

        <div className="relative">
          <Swiper
            className="mySwiper"
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {list.map((news) => (
              <SwiperSlide key={news.slug}>
                <Link
                  to={`/tin-tuc/${news.slug}`}
                  className="group flex min-h-[350px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
                >
                  <div className="relative">
                    {news.cover ? (
                      <img
                        src={news.cover}
                        alt={news.title}
                        className="h-40 w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-40 w-full bg-gray-100" />
                    )}
                    {news.dateParts && (
                      <div className="absolute top-0 left-0 flex h-14 w-14 flex-col items-center justify-center rounded-br-2xl bg-[#002c5f] text-white shadow">
                        <span className="text-base font-bold leading-none">
                          {news.dateParts.day}
                        </span>
                        <span className="text-[11px] opacity-90">
                          {news.dateParts.month}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="mb-2 flex items-center gap-2 text-xs">
                      {news.category && (
                        <span className="rounded border border-blue-100 bg-blue-50 px-2 py-0.5 uppercase tracking-wider text-[#002c5f]">
                          {news.category}
                        </span>
                      )}
                      {typeof news.readingTime === "number" && (
                        <span className="rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-gray-600">
                          {news.readingTime} phút đọc
                        </span>
                      )}
                      {news.dateParts && (
                        <span className="ml-auto text-gray-500">
                          {news.dateParts.full}
                        </span>
                      )}
                    </div>
                    <h3 className="line-clamp-2 text-base font-semibold text-gray-900 group-hover:text-[#002c5f]">
                      {news.title}
                    </h3>
                    {news.excerpt && (
                      <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                        {news.excerpt}
                      </p>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <button className="custom-prev absolute left-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-gray-500/60 transition hover:bg-black/80 flex items-center justify-center">
            <ChevronLeft size={20} className="text-white" />
          </button>

          <button className="custom-next absolute right-0 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full bg-gray-500/60 transition hover:bg-black/80 flex items-center justify-center">
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
