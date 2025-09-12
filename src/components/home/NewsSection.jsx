// src/components/NewsSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import newsData from "../../data/newsData";
import "../../styles/NewsSection.css"; // Ensure you have this CSS file for custom styles

export default function NewsSection() {
  const newsList = newsData.slice(0, 6);
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
            {newsList.map((news, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={`/tin-tuc/${news.slug}`}
                  className="block relative rounded-lg overflow-hidden shadow hover:shadow-lg transition h-64"
                >
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {/* Text overlay */}
                  <div className="absolute bottom-0 left-0 p-4 text-white">
                    <h3 className="text-lg font-semibold leading-snug">
                      {news.title}
                    </h3>
                    <p className="text-sm mt-1">{news.excerpt}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-500/60 flex items-center justify-center hover:bg-black/80 transition z-10">
            <ChevronLeft size={20} className="text-white" />
          </button>

          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gray-500/60 flex items-center justify-center hover:bg-black/80 transition z-10">
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
