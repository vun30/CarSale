// src/productData.js
export const products = {
  tucson: {
    name: "Tucson",
    price: "Giá từ 825 triệu VNĐ",
    cover: "/images/slides/tucson-hero.jpg",
    highlight: {
      hero: "/images/slides/tucson-hero.jpg",

      videoId: "njbNCfPFbgU",
      cards: [
        {
          img: "/images/tucson/exterior-1.jpg",
          caption: "Diện mạo táo bạo và mạnh mẽ hơn",
        },
        {
          img: "/images/tucson/safety-1.jpg",
          caption: "Thiết kế rộng rãi và an toàn",
        },
        {
          img: "/images/tucson/exterior-2.jpg",
          caption: "Sẵn sàng thiết lập chuẩn mực thiết kế mới",
        },
        {
          img: "/images/tucson/sport-suv.jpg",
          caption: "Mang dáng vẻ SUV thể thao đầy sáng tạo",
        },
      ],
    },
    exteriorImg: "/images/slides/tucson-hero.jpg",
    interiorImg: "/images/tucson/interior.jpg",
    performanceText: "Smartstream 2.0L MPI, 156 mã lực, 192Nm, AT 6 cấp.",
    safetyList: ["6 túi khí", "Hỗ trợ giữ làn", "Cảnh báo điểm mù"],
    comfortList: ["Panorama", "Sạc không dây Qi", "Âm thanh Bose"],
    specs: {
      "Kích thước": "4,630 x 1,865 x 1,695 (mm)",
      "Chiều dài cơ sở": "2,755 mm",
      "Động cơ": "Smartstream 2.0L MPI",
      "Công suất": "156 mã lực",
      "Mô-men xoắn": "192 Nm",
      "Hộp số": "AT 6 cấp",
      "Dẫn động": "FWD",
    },
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Tucson mới. Mạnh mẽ và khoẻ khoắn.",
        body: "Thiết kế ngoại thất Hyundai Tucson mới với bề mặt được thiết kế theo kiểu hình khối cùng đường gân cơ bắp góc cạnh...",
      },

      lead: {
        title: "Thiết kế tiên phong",
        image: "/images/product/tucson.png",
        caption:
          "Tiên phong với thiết kế đèn ban ngày dạng ẩn “Parametric jewel”.",
      },

      // lưới 4 ảnh có caption (ảnh 2)
      grid4: [
        { img: "/images/product/tucson.png", caption: "Đèn chiếu sáng LED" },
        {
          img: "/images/product/tucson.png",
          caption: "Đèn chiếu sáng LED Projector (Phiên bản Turbo)",
        },
        {
          img: "/images/product/tucson.png",
          caption: "Lưới tản nhiệt sơn kim loại tối màu (Loại DRL trong suốt)",
        },
        {
          img: "/images/product/tucson.png",
          caption: "Lưới tản nhiệt Chrome màu tối",
        },
      ],

      // 2 thẻ nửa – nửa (ảnh 3 hàng trên)
      twoCards: [
        {
          img: "/images/tucson/exterior/mirror.jpg",
          caption:
            "Gương chiếu hậu chỉnh điện, gập điện, có sấy (tích hợp đèn báo rẽ)",
        },
        {
          img: "/images/tucson/exterior/panorama.jpg",
          caption: "Cửa sổ trời toàn cảnh",
        },
      ],

      // tiêu đề + mô tả + 1 ảnh lớn (ảnh 3 “bánh xe”)
      midBlock: {
        title: "Tối đa hoá sự năng động với thiết kế bánh xe mới",
        body: "Các đường nét dập nổi đặc trưng táo bạo kết hợp cùng thiết kế la-zăng sang trọng làm nổi bật phong cách thể thao.",
        image: "/images/tucson/exterior/wheel-hero.jpg",
      },

      // tiêu đề + mô tả + 1 ảnh lớn + 3 ảnh nhỏ (ảnh 4)
      tailBlock: {
        title: "Đường nét thiết kế táo bạo với bố cục rộng hơn",
        body: "Cụm đèn hậu LED kéo dài mang tính biểu tượng khẳng định hình ảnh công nghệ cao của Hyundai Tucson.",
        hero: "/images/tucson/exterior/rear-hero.jpg",
        thumbs: [
          "/images/tucson/exterior/rear-1.jpg",
          "/images/tucson/exterior/rear-2.jpg",
          "/images/tucson/exterior/rear-3.jpg",
        ],
      },
    },
  },

  santafe: {
    name: "Santa Fe",
    price: "Giá từ 1.099 tỷ VNĐ",
    cover: "/images/slides/santafe-hero.jpg",
    highlight: {
      hero: "/images/slides/santafe-hero.jpg",
      title: "New SANTA FE",
      subtitle: "Bứt phá mọi giới hạn.",
      videoId: "PUT_SANTAFE_YOUTUBE_ID",
      cards: [
        {
          img: "/images/santafe/card-1.jpg",
          caption: "Thiết kế mạnh mẽ, vuông vức",
        },
        {
          img: "/images/santafe/card-2.jpg",
          caption: "Công nghệ SmartSense thế hệ mới",
        },
        {
          img: "/images/santafe/card-3.jpg",
          caption: "Không gian 3 hàng ghế rộng rãi",
        },
        {
          img: "/images/santafe/card-4.jpg",
          caption: "Động cơ xăng/Hybrid tiết kiệm",
        },
      ],
    },
    // ... các field khác giống Tucson
  },
};
