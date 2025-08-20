// src/components/NewsSection.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/NewsSection.css"; // Ensure you have this CSS file for custom styles

export default function NewsSection() {
  const newsList = [
    {
      title:
        "Hyundai Grand i10 2024 chốt lịch ra mắt thị trường Việt Nam vào ngày 15/6",
      desc: "Một số nguồn tin cho biết, Hyundai Grand i10 2024 được nâng cấp về mặt trang bị nhưng giá bán...",
      img: "src/assets/accent-hero.jpg",
    },
    {
      title:
        'Hyundai bán được 4.914 xe trong tháng 5/2024: Hyundai Accent vẫn "cân team"',
      desc: "Tập đoàn Thành Công (TC GROUP) thông báo kết quả bán hàng tháng xe ô tô Hyundai tháng 5/2024...",
      img: "/images/news2.jpg",
    },
    {
      title:
        "Hyundai Kona Electric 2024 mở bán tại Đông Nam Á, giá dự kiến khoảng 780 triệu VNĐ",
      desc: "Sau một thời gian được giới thiệu tại Triển lãm Ô tô Quốc tế Indonesia (IIMS) 2024, mới đây, Hyundai...",
      img: "/images/news3.jpg",
    },
    {
      title: "Hyundai Grandeur 2025 trình làng: Bổ sung nhiều tiện ích đắt giá",
      desc: "Mới đây, Hyundai đã chính thức giới thiệu phiên bản nâng cấp giữa vòng đời của mẫu sedan đầu bảng...",
      img: "/images/news4.jpg",
    },
    {
      title: "Hyundai Grandeur 2025 trình làng: Bổ sung nhiều tiện ích đắt giá",
      desc: "Mới đây, Hyundai đã chính thức giới thiệu phiên bản nâng cấp giữa vòng đời của mẫu sedan đầu bảng...",
      img: "/images/news4.jpg",
    },
    {
      title: "Hyundai Grandeur 2025 trình làng: Bổ sung nhiều tiện ích đắt giá",
      desc: "Mới đây, Hyundai đã chính thức giới thiệu phiên bản nâng cấp giữa vòng đời của mẫu sedan đầu bảng...",
      img: "/images/news4.jpg",
    },
  ];

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
                <div className="relative rounded-lg overflow-hidden shadow hover:shadow-lg transition h-64">
                  <img
                    src={news.img}
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
                    <p className="text-sm mt-1">{news.desc}</p>
                  </div>
                </div>
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
