import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "images/slides/KV-Accent-&-Stargazer--slide-website (1).png",
    },
    {
      id: 2,
      image: "images/slides/KV-Palisade-&-Santa-Fe-slide-website (1).png",
    },
    { id: 3, image: "images/slides/KV-Tucson-&-Creta-slide-website.png" },
    { id: 4, image: "images/slides/slide-website-mới (1) (1).jpg" },
    { id: 5, image: "images/slides/slide-website-mới (1).jpg" },
    { id: 6, image: "images/slides/slide-website-mới.jpg" },
    { id: 7, image: "images/slides/accent-hero.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 giây đổi slide

    return () => clearInterval(interval); // clear khi component unmount
  }, [current]);

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] overflow-hidden">
      {/* Slide images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`slide-${slide.id}`}
            className="w-full h-full object-cover"
          />
          {/* Text overlay */}
          <div className="absolute top-1/4 left-4 sm:left-10 text-white drop-shadow-lg">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-xl md:text-2xl mt-2">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 rounded-full p-1 sm:p-2 bg-white/40 hover:bg-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 rounded-full p-1 sm:p-2 bg-white/40 hover:bg-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-blue-500" : "bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
