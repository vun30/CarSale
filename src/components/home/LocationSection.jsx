import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function LocationSection() {
  const images = [
    { id: 1, image: "pic/toan1.jpg" },
    { id: 2, image: "pic/toan2.jpg" },
    { id: 3, image: "pic/toan3.jpg" },
  ];

  const swiperRef = useRef(null);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Google Map */}
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Hyundai Gia Lai Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.7912339049644!2d108.0301429746193!3d13.971028492181107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316c1fe7a25af87f%3A0xcf8a886aae7de7d9!2sHyundai%20Gia%20Lai!5e0!3m2!1svi!2s!4v1755259708676!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Image Slider */}
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full h-full"
          >
            {images.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  src={item.image}
                  alt={`Hyundai Award ${item.id}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          {/* <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
          >
            <ChevronRight size={20} />
          </button> */}
        </div>
      </div>
    </section>
  );
}
