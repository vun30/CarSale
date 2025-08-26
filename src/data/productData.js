// src/data/productData.js
export const products = {
  tucson: {
    name: "Tucson",
    price: "Giá từ 825 triệu VNĐ",
    cover: "/images/slides/tucson-hero.jpg",

    // ===== NỔI BẬT (Highlights) =====
    highlight: {
      hero: "/images/cardetail/highlights/tucson/tucson-highlight1.jpg",
      // title: "New TUCSON",
      // subtitle: "Mở chuẩn mực mới cho SUV đô thị.",
      videoId: "njbNCfPFbgU",
      intro: {
        eyebrow: "Hyundai",
        title: "NEW TUCSON",
        body: "Hyundai New Tucson được phân phối trên hệ thống đại lý Hyundai toàn quốc với 4 phiên bản khác nhau cùng 7 lựa chọn màu sắc: Đen, Trắng, Đỏ đô, Bạc, Xanh, Vàng cát và Xanh lục bảo. Cũng như những sản phẩm xe du lịch Hyundai được sản xuất và phân phối, New Tucson được áp dụng chế độ bảo hành 5 năm hoặc 100.000km tùy điều kiện nào đến trước.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [
        {
          img: "/images/cardetail/highlights/tucson/tucson-highlight2.jpg",
          caption: "Diện mạo táo bạo và mạnh mẽ hơn",
        },
        {
          img: "/images/cardetail/highlights/tucson/tucson-highlight3.jpg",
          caption: "Thiết kế rộng rãi và an toàn",
        },
        {
          img: "/images/cardetail/highlights/tucson/tucson-highlight4.jpg",
          caption: "Sẵn sàng thiết lập chuẩn mực thiết kế mới",
        },
        {
          img: "/images/cardetail/highlights/tucson/tucson-highlight5.jpg",
          caption: "Mang dáng vẻ SUV thể thao đầy sáng tạo",
        },
      ],
    },

    // Ảnh chung cũ (nếu vẫn muốn dùng ở tab)
    exteriorImg: "/images/slides/tucson-hero.jpg",
    interiorImg: "/images/tucson/interior.jpg",

    // ===== THÔNG SỐ, TIỆN NGHI, AN TOÀN, VẬN HÀNH =====
    performanceText: "Smartstream 2.0L MPI, 156 mã lực, 192Nm, AT 6 cấp.",
    safetyList: ["6 túi khí", "Hỗ trợ giữ làn", "Cảnh báo điểm mù"],
    comfortList: ["Cửa sổ trời Panorama", "Sạc không dây Qi", "Âm thanh Bose"],
    specs: {
      "Kích thước": "4,630 x 1,865 x 1,695 (mm)",
      "Chiều dài cơ sở": "2,755 mm",
      "Động cơ": "Smartstream 2.0L MPI",
      "Công suất": "156 mã lực",
      "Mô-men xoắn": "192 Nm",
      "Hộp số": "AT 6 cấp",
      "Dẫn động": "FWD",
    },

    // ===== NGOẠI THẤT (Exterior) =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Tucson mới. Mạnh mẽ và khoẻ khoắn.",
        body: "Thiết kế ngoại thất Hyundai Tucson mới với bề mặt được thiết kế theo kiểu hình khối cùng đường gân cơ bắp góc cạnh. Thân xe được tạo hình sắc sảo với sự kết hợp của các đường cắt thẳng góc cạnh sắc nét trong một tổng thể mượt mà của các hình khối. Điểm nhấn đặc trưng của HyundaiTucson mới là lưới tản nhiệt hầm hố với các mắt lưới thưa. Đèn LED ban ngày thiết kế ẩn vào lưới tản nhiệt theo phong cách Parametric Jewel Hidden Lights. Đèn chiếu sáng Projector LED, đem đến khả năng chiếu sáng tốt hơn với ánh sáng chụm và đi xa hơn. New Tucson sở hữu một kích thước vượt trội với các thông số Dài x Rộng x Cao lần lượt là 4.640 x 1.865 x 1.665 (mm) cùng chiều dài cơ sở xe ở mức 2.755mm. Xe được trang bị lazang có các kích thước từ 17 cho đến 19 inch tùy từng phiên bản. Khoảng sáng gầm xe đạt mức 181mm.",
      },

      lead: {
        title: "Thiết kế tiên phong",
        image: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat1.jpg",
        caption: "Tiên phong với đèn ban ngày dạng ẩn “Parametric Jewel”.",
      },

      grid4: [
        {
          img: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat2.jpg",
          caption: "Đèn chiếu sáng LED",
        },
        {
          img: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat3.jpg",
          caption: "Đèn LED Projector (Phiên bản Turbo)",
        },
        {
          img: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat4.jpg",
          caption: "Lưới tản nhiệt sơn kim loại tối màu (DRL trong suốt)",
        },
        {
          img: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat15.jpg",
          caption: "Lưới tản nhiệt Chrome màu tối",
        },
      ],

      twoCards: [
        {
          img: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat5.jpg",
          caption:
            "Gương chiếu hậu chỉnh điện, gập điện, có sấy (tích hợp đèn báo rẽ)",
        },
        {
          img: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat6.jpg",
          caption: "Cửa sổ trời toàn cảnh",
        },
      ],

      midBlock: {
        title: "Tối đa hoá sự năng động với thiết kế bánh xe mới",
        body: "Đường nét dập nổi táo bạo kết hợp la-zăng sang trọng làm nổi bật phong cách thể thao.",
        image: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat7.jpg",
        thumbs: [
          "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat8.jpg",
          "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat9.jpg",
          "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat10.jpg",
        ],
      },

      tailBlock: {
        title: "Đường nét táo bạo với bố cục rộng hơn",
        body: "Cụm đèn hậu LED kéo dài mang tính biểu tượng khẳng định hình ảnh công nghệ cao.",
        hero: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat11.jpg",
        thumbs: [
          "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat12.jpg",
          "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat13.jpg",
          "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat14.jpg",
        ],
      },
    },

    // ===== NỘI THẤT (Interior) — theo đúng thứ tự ảnh bạn gửi =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title:
          "Hyundai Tucson. Trải nghiệm không gian tập trung vào người lái.",
        body: "Hyundai Tucson mới tối đa hoá sự thoải mái và thư giãn cho người dùng. Cụm đôi màn hình 12.3 inch liền mạch với độ nghiêng vừa phải hướng về người lái, kèm hệ thống đèn LED nội thất 64 màu.",
      },

      // Ảnh lớn khoang lái
      lead: {
        title: "Khoang lái hiện đại, trực quan",
        image: "/images/cardetail/noithat/tucson/tucson-noithat1.jpg", // thay bằng ảnh lớn nội thất của bạn
        caption:
          'Cụm đôi màn hình 12.3" và bố cục tối giản giúp tập trung khi lái xe.',
      },

      // Lưới 4 ảnh nhỏ (theo block bạn gửi: cần số sau vô lăng → đôi màn hình → sưởi/làm mát ghế → gương ECM)
      grid4: [
        {
          img: "/images/cardetail/noithat/tucson/tucson-noithat3.jpg",
          caption: "Cần số điện tử sau vô lăng",
        },
        {
          img: "/images/cardetail/noithat/tucson/tucson-noithat4.jpg",
          caption:
            'Màn hình giải trí 12.3" với màn hình thông tin 12.3" liền mạch toàn cảnh',
        },
        {
          img: "/images/cardetail/noithat/tucson/tucson-noithat5.jpg",
          caption: "Hệ thống sưởi/làm mát cho hàng ghế trước",
        },
        {
          img: "/images/cardetail/noithat/tucson/tucson-noithat6.jpg",
          caption: "Gương chống chói tự động (ECM)",
        },
      ],
    },
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Hyundai Tucson. Thiết lập nhịp độ.",
        body: "Nhấn bàn đạp ga và cảm nhận nhịp cảm xúc với cú bứt tốc mượt mà từ động cơ Smartstream. Drive Mode 4 chế độ và My Drive cho phép tuỳ chỉnh vô lăng & chế độ lái theo sở thích. Khung gầm N3 mới giúp Tucson xử lý NVH (Noise–Vibration–Harshness) tốt hơn, mang lại hành trình thoải mái.",
      },

      // Ảnh chạy trên đèo (hero)
      lead: {
        // có thể bỏ title/caption nếu không cần
        title: "Cảm hứng trên mọi cung đường",
        image: "/images/cardetail/vanhanh/tucson/tucson-vanhanh1.jpg", // thay bằng ảnh bạn dùng
        caption: null,
      },

      // Block “Động cơ Smartstream”: 1 ảnh lớn + 3 thumb nhỏ
      tailBlock: {
        title: "Động cơ Smartstream",
        body: "Tucson trang bị các tuỳ chọn Smartstream: xăng 2.0, tăng áp 1.6T-GDi và dầu 2.0, cân bằng giữa hiệu suất và tiết kiệm.",
        hero: "/images/cardetail/vanhanh/tucson/tucson-vanhanh2.jpg", // ảnh khoang động cơ lớn
        thumbs: [
          "/images/cardetail/vanhanh/tucson/tucson-vanhanh3.jpg", // biểu đồ/ảnh mô tả bản 2.0 NA
          "/images/cardetail/vanhanh/tucson/tucson-vanhanh4.jpg", // biểu đồ/ảnh mô tả bản 1.6T-GDi
          "/images/cardetail/vanhanh/tucson/tucson-vanhanh5.jpg", // biểu đồ/ảnh mô tả bản 2.0 Diesel
        ],
      },

      // Block “HTRAC”: tiêu đề + mô tả + 1 ảnh lớn
      midBlock: {
        title: "Hệ thống dẫn động toàn thời gian HTRAC",
        body: "Tối ưu lực kéo nhờ phân bổ mô-men trước/sau theo điều kiện vận hành, tự tin di chuyển trên nhiều địa hình.",
        image: "/images/cardetail/vanhanh/tucson/tucson-vanhanh6.jpg", // ảnh 3 mặt đường bùn/tuyết/đường khô
      },
    },
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai Tucson. Hệ thống an toàn SmartSense.",
        body: "Hyundai Tucson hoàn toàn mới mang đến loạt cải tiến an toàn vượt trội với SmartSense: hỗ trợ duy trì làn, phòng tránh va chạm phía trước, khi lùi xe, và cảnh báo điểm mù.",
      },

      lead: {
        title: "Hệ thống an toàn chủ động SmartSense",
        image: "/images/cardetail/antoan/tucson/tucson-antoan1.jpg", // ảnh xe đuôi bạn gửi
        caption: null,
      },

      grid4: [
        {
          img: "/images/cardetail/antoan/tucson/tucson-antoan2.jpg",
          caption:
            "Hỗ trợ duy trì làn đường (LFA): cảnh báo và giữ xe trong làn, hỗ trợ điều khiển chính xác.",
        },
        {
          img: "/images/cardetail/antoan/tucson/tucson-antoan3.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm phía trước (FCA): phân tích camera + radar, tự động phanh tránh tai nạn.",
        },
        {
          img: "/images/cardetail/antoan/tucson/tucson-antoan4.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm khi lùi xe (RCCA): cảnh báo chướng ngại, hỗ trợ phanh khi cần.",
        },
        {
          img: "/images/cardetail/antoan/tucson/tucson-antoan5.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm điểm mù (BCA): cảnh báo & kiểm soát phanh khi có nguy hiểm vùng mù.",
        },
        {
          img: "/images/cardetail/antoan/tucson/tucson-antoan6.jpg",
          caption: "Hiển thị điểm mù trên màn hình thông tin BVM.",
        },
        {
          img: "/images/cardetail/antoan/tucson/tucson-antoan7.jpg",
          caption: "Hệ thống camera 360 độ.",
        },
      ],
    },
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Hyundai Tucson. Hành trình của bạn bắt đầu từ đây.",
        body: "Dù là hành trình nào, trải nghiệm của bạn sẽ đầy cảm xúc khi bạn có những người bạn đồng hành đáng tin cậy trong suốt chuyến đi như hệ thống thông tin giải trí 12,3 inch và dàn loa cao cấp Bose trên Hyundai Tucson. Màn hình cảm ứng dễ vận hành và đồng bộ kết nối dễ dàng với điện thoại thông minh của bạn",
      },

      // Ảnh lớn đầu mục (khoang lái)
      lead: {
        title: "Khoang lái tiện nghi cao cấp",
        image: "/images/cardetail/tiennghi/tucson/tucson-tiennghi1.jpg", // ảnh lớn bạn gửi
        caption: null,
      },

      // Lưới 6 ô – đúng thứ tự như ảnh
      grid4: [
        {
          img: "/images/cardetail/tiennghi/tucson/tucson-tiennghi2.jpg",
          caption: "Cốp điện thông minh",
        },
        {
          img: "/images/cardetail/tiennghi/tucson/tucson-tiennghi3.jpg",
          caption: "Đèn nội thất",
        },
        {
          img: "/images/cardetail/tiennghi/tucson/tucson-tiennghi4.jpg",
          caption: "Cửa sổ trời toàn cảnh panorama",
        },
        {
          img: "/images/cardetail/tiennghi/tucson/tucson-tiennghi5.jpg",
          caption: "Nhớ ghế lái 2 vị trí",
        },
        {
          img: "/images/cardetail/tiennghi/tucson/tucson-tiennghi6.jpg",
          caption: "Sưởi và làm mát hàng ghế trước",
        },
        {
          img: "/images/cardetail/tiennghi/tucson/tucson-tiennghi7.jpg",
          caption: "Hệ thống loa Bose cao cấp",
        },
      ],
    },
    // ... trong products.tucson
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật xe Hyundai Tucson mới.",
        body: null,
      },

      // Ảnh 1: bảng kỹ thuật tổng quát
      lead: [
        {
          title: null,
          image: "/images/cardetail/thongso/tucson/tucson-thongso1.jpg",
          caption: null,
        },
        {
          title: null,
          image: "/images/cardetail/thongso/tucson/tucson-thongso2.jpg",
          caption: null,
        },
      ],
    },
  },

  // ============ SANTA FE (ví dụ rút gọn, bạn có thể mở rộng giống Tucson) ============
  santafe: {
    name: "Santa Fe",
    price: "Giá từ 1.099 tỷ VNĐ",
    cover: "/images/slides/santafe-hero.jpg",

    // ===== NỔI BẬT =====
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

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Santa Fe mới. Mạnh mẽ và vuông vức.",
        body: "Ngôn ngữ thiết kế H–light, thân xe vuông vức, hiện đại và đa dụng.",
      },
      lead: {
        title: "Thiết kế mới đậm chất SUV",
        image: "/images/santafe/exterior/lead.jpg",
        caption: "Đèn định vị hình chữ H đặc trưng.",
      },
      grid4: [
        {
          img: "/images/santafe/exterior/grid-1.jpg",
          caption: "Đèn LED chữ H",
        },
        {
          img: "/images/santafe/exterior/grid-2.jpg",
          caption: "Mâm 20 inch thể thao",
        },
        {
          img: "/images/santafe/exterior/grid-3.jpg",
          caption: "Cản trước khỏe khoắn",
        },
        {
          img: "/images/santafe/exterior/grid-4.jpg",
          caption: "Đuôi xe vuông vức",
        },
      ],
      twoCards: [
        {
          img: "/images/santafe/exterior/card-1.jpg",
          caption: "Gương gập điện, sấy kính",
        },
        {
          img: "/images/santafe/exterior/card-2.jpg",
          caption: "Giá nóc & cửa sổ trời",
        },
      ],
      midBlock: {
        title: "Bánh xe thiết kế mới",
        body: "Tối ưu tính khí động học và thẩm mỹ.",
        image: "/images/santafe/exterior/wheel.jpg",
      },
      tailBlock: {
        title: "Đuôi xe chữ H",
        body: "Cụm đèn hậu chữ H đồng nhất với đầu xe.",
        hero: "/images/santafe/exterior/rear-hero.jpg",
        thumbs: [
          "/images/santafe/exterior/rear-1.jpg",
          "/images/santafe/exterior/rear-2.jpg",
          "/images/santafe/exterior/rear-3.jpg",
        ],
      },
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Không gian 3 hàng ghế rộng rãi.",
        body: "Khoang nội thất tiện nghi, bảng điều khiển hiện đại, vật liệu cao cấp.",
      },
      lead: {
        title: "Khoang lái công nghệ",
        image: "/images/santafe/interior/main.jpg",
        caption: "Màn hình cong cỡ lớn, cần số điện tử.",
      },
      grid4: [
        {
          img: "/images/santafe/interior/grid-1.jpg",
          caption: "Màn hình cảm ứng cỡ lớn",
        },
        {
          img: "/images/santafe/interior/grid-2.jpg",
          caption: "Sạc không dây kép",
        },
        {
          img: "/images/santafe/interior/grid-3.jpg",
          caption: "Hàng ghế 2 & 3 rộng rãi",
        },
        {
          img: "/images/santafe/interior/grid-4.jpg",
          caption: "Cửa gió và cổng sạc sau",
        },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Santa Fe. Hiệu suất & tiết kiệm.",
        body: "Tùy chọn động cơ xăng/Hybrid, cân bằng giữa mạnh mẽ và tiết kiệm.",
      },
      lead: {
        title: "Mạnh mẽ trên mọi cung đường",
        image: "/images/santafe/performance/lead.jpg",
        caption: null,
      },
      midBlock: {
        title: "Hệ dẫn động AWD",
        body: "Tối ưu lực kéo, di chuyển an toàn trên nhiều loại địa hình.",
        image: "/images/santafe/performance/awd.jpg",
      },
      tailBlock: {
        title: "Động cơ tùy chọn",
        body: "Các bản xăng và hybrid đáp ứng nhiều nhu cầu.",
        hero: "/images/santafe/performance/engine-hero.jpg",
        thumbs: [
          "/images/santafe/performance/engine-1.jpg",
          "/images/santafe/performance/engine-2.jpg",
          "/images/santafe/performance/engine-3.jpg",
        ],
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "SmartSense thế hệ mới",
        body: "Santa Fe trang bị đầy đủ gói an toàn tiên tiến.",
      },
      lead: {
        title: "Hệ thống an toàn chủ động",
        image: "/images/santafe/safety/main.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/santafe/safety/grid-1.jpg",
          caption: "Cảnh báo điểm mù",
        },
        { img: "/images/santafe/safety/grid-2.jpg", caption: "Hỗ trợ giữ làn" },
        { img: "/images/santafe/safety/grid-3.jpg", caption: "Camera 360" },
        {
          img: "/images/santafe/safety/grid-4.jpg",
          caption: "Phanh khẩn cấp tự động",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Tiện nghi hiện đại",
        body: "Đem lại trải nghiệm thoải mái cho cả gia đình.",
      },
      lead: {
        title: "Khoang lái tiện nghi",
        image: "/images/santafe/comfort/main.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/santafe/comfort/grid-1.jpg",
          caption: "Cốp điện thông minh",
        },
        {
          img: "/images/santafe/comfort/grid-2.jpg",
          caption: "Cửa sổ trời toàn cảnh",
        },
        {
          img: "/images/santafe/comfort/grid-3.jpg",
          caption: "Hệ thống loa cao cấp",
        },
        {
          img: "/images/santafe/comfort/grid-4.jpg",
          caption: "Ghế chỉnh điện",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật Santa Fe.",
        body: null,
      },
      lead: [
        { image: "/images/santafe/specs/spec-1.jpg", caption: null },
        { image: "/images/santafe/specs/spec-2.jpg", caption: null },
      ],
    },
  },
};
