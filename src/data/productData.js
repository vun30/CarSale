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
      hero: "/images/cardetail/highlights/santafe/santafe-hightlight1.jpg",
      // title: "New SANTA FE",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "6mrKeGgS1eU",
      intro: {
        eyebrow: "Hyundai",
        title: "NEW SANTAFE",
        body: "Hyundai Santa Fe hoàn toàn mới. Chiếc SUV đô thị cao cấp mang ngôn ngữ thiết kế hình hộp độc đáo hoàn toàn mới được tạo ra bởi sự hài hòa tinh tế giữa phong cách sống đa sắc màu và những trải nghiệm thú vị. Sự cân bằng này được thể hiện qua thiết kế hình chữ H trên các chi tiết của chiếc xe. Ngoài ra, All New Santa Fe với những tính năng ưu việt sẽ khiến bạn hài lòng trên mọi hành trình.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [
        // {
        //   img: "/images/cardetail/highlights/santafe/santafe-hightlight2.jpg",
        //   caption: "Thiết kế mạnh mẽ, vuông vức",
        // },
        // {
        //   img: "/images/cardetail/highlights/santafe/santafe-hightlight3.jpg",
        //   caption: "Công nghệ SmartSense thế hệ mới",
        // },
        // {
        //   img: "/images/cardetail/highlights/santafe/santafe-hightlight4.jpg",
        //   caption: "Không gian 3 hàng ghế rộng rãi",
        // },
        // {
        //   img: "/images/santafe/card-4.jpg",
        //   caption: "Động cơ xăng/Hybrid tiết kiệm",
        // },
      ],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title:
          "Hyundai Santa Fe. Thiết kế ngoại thất dạng hình hộp Boxy đặc trưng.",
        body: "Hyundai Santa Fe hoàn toàn mới. Mang phong cách thiết kế ngoại thất boxy khối hộp đậm chất SUV cổ điển, với cụm đèn chiếu sáng và nắp capo đẩy lên cao, tạo nên tổng thể khoẻ khoắn và thể thao. Điểm nhấn ở phần đầu xe là cụm đèn chiếu sáng Adaptive LED thích ứng tự động (AHB-LED), cùng cụm đèn chiếu sáng ban ngày tạo hình chữ H. Bên cạnh đó, mặt ca-lăng lấy cảm hứng từ logo Hyundai dạng phẳng 2D, làm nên tổng thể thiết kế táo bạo cá tính. Mặt ca-lăng của xe được trang bị tính năng AAF (Active Air Flap) mở/ đóng tự động thông minh tùy theo các chế độ vận hành nhằm tối ưu hệ số cản gió nhưng vẫn đảm bảo làm mát động cơ và hệ thống phanh. Cụ thể chỉ số cản gió thế hệ thứ 5 này là 0,298Cd (ngang với một chiếc sedan) còn thế hệ trước đó là 0,33Cd.",
      },
      lead: {
        title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/santafe/santafe-ngoaithat4.jpg",
        caption:
          "Hyundai Santa Fe Mới tiếp tục sử dụng hệ thống khung gầm toàn cầu N-Platform, mang tới một vóc dáng to lớn, mạnh mẽ và sang trọng hơn. Cụ thể, xe có kích thước Dài x Rộng x Cao lần lượt là 4.830 x 1.900 x 1.780 (mm), kích thước này dài hơn 45mm, cao hơn 50mm so với thế hệ trước. Chiều dài cơ sở của xe cũng được tăng lên 50mm đạt con số 2.815mm, đem đến một không gian rộng rãi hơn cho 2 hàng ghế phía sau.All New Santa Fe cũng trở nên cứng cáp, góc cạnh hơn nhờ phần vòm bánh xe lồi ra, vuông vức. Thân xe thiết kế dạng phẳng tối giản, phù hợp với một chiếc SUV kích thước lớp cũng như giúp tối ưu hoá không gian bên trong. Phần đuôi xe tiếp tục sử dụng công nghệ LED với tạo hình đèn hậu hình chữ H đồng bộ với cụm đèn trước, gia tăng khả năng nhận diện khi di chuyển. Phần đuôi xe có thiết kế phẳng hài hoà trong tổng thể thiết kế khối hộp của xe cũng như gia tăng tiện ích với cốp điện tự động.",
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/santafe/santafe-ngoaithat2.jpg",
          caption: "Lưới tản nhiệt mạ crôm + Cánh gió chủ động",
        },
        {
          img: "/images/cardetail/ngoaithat/santafe/santafe-ngoaithat3.jpg",
          caption: "Hệ thống đèn chiếu sáng full LED",
        },
        {
          img: "/images/cardetail/ngoaithat/santafe/santafe-ngoaithat5.jpg",
          caption: "Điểm bám tay ẩn trên trụ C",
        },
        {
          img: "/images/cardetail/ngoaithat/santafe/santafe-ngoaithat6.jpg",
          caption: "Cửa sổ trời đôi",
        },
      ],
      twoCards: [
        // {
        //   img: "/images/santafe/exterior/card-1.jpg",
        //   caption: "Gương gập điện, sấy kính",
        // },
        // {
        //   img: "/images/santafe/exterior/card-2.jpg",
        //   caption: "Giá nóc & cửa sổ trời",
        // },
      ],
      midBlock: {
        title: "Bánh xe thiết kế mới",
        body: "All New Santa Fe có 3 tuỳ chọn lazang với kích thước 18, 20 và 21 inch với các thông số lốp tương ứng lần lượt 235/60 R18, 255/45 R20, 245/45 R21. Phiên bản Caligraphy được trang bị lazang đa chấu 21 inches tạo hình đẹp mắt, các phiên bản phiên bản còn lại sử dụng mâm 18 và 20 inch thiết kế khoẻ khắn với những nan lớn. Xe được trang bị giá nóc có khả năng tải đồ tối đa 100kg, cũng như tạo thêm vẻ việt dã khoẻ khoắn cho Santa Fe. Bên cạnh đó xe có móc tay ẩn ở cột chữ C giúp người sử dụng dễ dàng leo lên tháo dỡ, lắp đặt đồ trên nóc xe.",
        image: "/images/cardetail/ngoaithat/santafe/santafe-ngoaithat8.jpg",
      },
      tailBlock: {
        title: "Đuôi xe chữ H",
        body: "Cụm đèn hậu chữ H đồng nhất với đầu xe với cốp điện thông minh và cần gạt mưa dạng ẩn.",
        hero: "/images/cardetail/ngoaithat/santafe/santafe.jpg",
        thumbs: [
          "/images/cardetail/ngoaithat/santafe/santafe-ngoaithat9.jpg",
          "/images/cardetail/ngoaithat/santafe/santafe-ngoaithat10.jpg",
          "/images/cardetail/ngoaithat/santafe/santafe-ngoaithat11.jpg",
        ],
      },
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Hyundai Santa Fe. Nâng tầm sang trọng và đẳng cấp.",
        body: "Hyundai Santa Fe với thiết kế nội thất nâng tầm sang trọng và đẳng cấp. Tận hưởng không gian nội thất sang trọng, tinh tế qua thiết kế chữ H được thể hiện qua đèn trang trí nội thất ẩn. Tầm nhìn đa chiều thoáng đãng, màn hình cảm ứng mở rộng cùng các tiện nghi cao cấp sẽ giúp bạn có trải nghiệm thoải mái nhất trên mọi cung đường. Điểm nhấn của không gian hàng ghế trước là cụm màn hình thông tin và màn hình giải trí cảm ứng nối liền kích thước đều 12,3 inches. Cụm màn hình này hướng về phía người lái, giúp lái xe dễ dàng quan sát và sử dụng hơn khi đang lái xe. Màn hình giải trí hỗ trợ Android Auto/Apple Carplay không dây, bản đồ định vị dẫn đường vệ tinh tích hợp công nghệ W3W (What 3 Word) với độ chính xác tuyệt đối dành riêng cho thị trường Việt Nam. Tương tự phiên bản trước, màn hình hỗ trợ hiển thị Camera 360 SVM, hỗ trợ lái xe tốt hơn trong các tình huống đỗ xe hay di chuyển những con đường hẹp, đông đúc. Bên cạnh đó, hệ thống 12 loa Bose cùng ampli rời hỗ trợ giải mã âm thanh chất lượng cao đem đến trải nghiệm Hi-end ngay trên xe.",
      },
      lead: {
        title: "Khoang lái công nghệ",
        image: "/images/cardetail/noithat/santafe/san-noithat1.jpg",
        caption: "Nội thất Hyundai Santa Fe",
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/santafe/san-noithat2.jpg",
          caption:
            "Màn hình thông tin 12.3 inch nối liền với màn hình giải trí 12.3 inch",
        },
        {
          img: "/images/cardetail/noithat/santafe/san-noithat3.jpg",
          caption: "Cần số điện tử sau vô lăng",
        },
        {
          img: "/images/cardetail/noithat/santafe/san-noithat4.jpg",
          caption: "Điều hòa tự động 2 vùng độc lập",
        },
        {
          img: "/images/cardetail/noithat/santafe/san-noithat5.jpg",
          caption: "Hệ thống 12 loa BOSE cao cấp",
        },
        {
          img: "/images/cardetail/noithat/santafe/san-noithat6.jpg",
          caption: "Sạc không dây kép",
        },
        {
          img: "/images/cardetail/noithat/santafe/san-noithat7.jpg",
          caption: "Sưởi & làm mát hàng ghế trước",
        },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Hyundai Santa Fe. Mạnh mẽ, bứt tốc đầy phấn khích.",
        body: "Mỗi lần cầm lái Hyundai Santa Fe hoàn toàn mới sẽ là 1 trải nghiệm đầy cảm xúc bởi chiếc xe được trang bị khối động cơ mạnh mẽ cùng với hộp số tự động/hộp số ly hợp kép 8 cấp. Người lái có thể tùy chọn đa dạng các chế độ lái ECO/NORMAL/SPORT/SMART thích hợp cho việc di chuyển đa địa hình.",
      },
      lead: {
        title: "Mạnh mẽ trên mọi cung đường",
        image: "/images/cardetail/vanhanh/santafe/san-vanhanh1.jpg",
        caption: null,
      },
      // midBlock: {
      //   title: "Hệ dẫn động AWD",
      //   body: "Tối ưu lực kéo, di chuyển an toàn trên nhiều loại địa hình.",
      //   image: "/images/santafe/performance/awd.jpg",
      // },
      tailBlock: {
        title: "",
        body: "Động cơ Động cơ xăng SmartStream G2.5 Turbo (Calligraphy 2.5T) kèm 4 chế độ địa hình và Hệ dẫn động HTRAC mang lại khả năng vận hành mạnh mẽ, bứt tốc đầy phấn khích.",
        hero: "",
        thumbs: [
          "/images/cardetail/vanhanh/santafe/san-vanhanh2.jpg",
          "/images/cardetail/vanhanh/santafe/san-vanhanh3.jpg",
          "/images/cardetail/vanhanh/santafe/san-vanhanh4.jpg",
        ],
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai Santa Fe. An toàn chủ động thông minh.",
        body: "Hyundai Sante Fe hoàn toàn mới được trang bị gói công nghệ an toàn chủ động Hyundai SMARTSENSE với nhiều cải tiến vượt trội hơn. Với 5 radar xung quanh xe, người lái có thể an tâm quan sát, chủ động xử lí mọi tình huống và vững vàng bứt phá trong mọi hành trình.",
      },
      lead: {
        title: "Hệ thống an toàn chủ động",
        image: "/images/cardetail/antoan/santafe/san-antoan1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/antoan/santafe/san-antoan2.jpg",
          caption:
            "Hệ thống hỗ trợ phòng tránh va chạm phía trước FCA (hỗ trợ cả khi chuyển làn, rẽ)",
        },
        {
          img: "/images/cardetail/antoan/santafe/san-antoan3.jpg",
          caption: "Hỗ trợ duy trì làn đường LFA",
        },
        {
          img: "/images/cardetail/antoan/santafe/san-antoan4.jpg",
          caption: "Kiểm soát hành trình thích ứng",
        },
        {
          img: "/images/cardetail/antoan/santafe/san-antoan5.jpg",
          caption: "Hỗ trợ hiển thị điểm mù trên màn hình BVM",
        },
        {
          img: "/images/cardetail/antoan/santafe/san-antoan6.jpg",
          caption: "Phanh khẩn cấp tự động",
        },
        {
          img: "/images/cardetail/antoan/santafe/san-antoan7.jpg",
          caption: "Hỗ trợ phòng tránh va chạm khi lùi xe",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Hyundai Santa Fe. Tiện nghi thông minh và hiện đại.",
        body: "Cảm nhận sự tiện nghi đẳng cấp trên Hyundai Santa Fe hoàn toàn mới với các tính năng thông minh hỗ trợ tối đa cho người ngồi trên xe. Điểm nhấn là màn hình thông tin cảm ứng liền mạch 12.3 inch cung cấp đầy đủ thông tin một cách tiện ích nhất cùng cần số điện tử sau vô lăng giúp người lái dễ dàng thao tác hơn. Hành trình cũng trở nên thoải mái, đầy cảm xúc hơn với trang bị sạc không dây kép, cụm điều khiển cảm ứng kết hợp nút vật lí, thông gió và sưởi ghế, cùng ghế ngồi có thể điều chỉnh đa hướng thông minh.",
      },
      lead: {
        title: "Khoang lái tiện nghi",
        image: "/images/cardetail/tiennghi/santafe/san-tiennghi1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/santafe/san-tiennghi2.jpg",
          caption: "Hiển thị thông tin trên kính lái – HUD",
        },
        {
          img: "/images/cardetail/tiennghi/santafe/san-tiennghi3.jpg",
          caption: "Ghế chỉnh điện hàng 1 và hàng 2",
        },
        {
          img: "/images/cardetail/tiennghi/santafe/san-tiennghi4.jpg",
          caption: "Rèm cửa hàng ghế 2",
        },
        {
          img: "/images/cardetail/tiennghi/santafe/san-tiennghi5.jpg",
          caption: "Ngăn khử khuẩn UV-C",
        },
        {
          img: "/images/cardetail/tiennghi/santafe/san-tiennghi6.jpg",
          caption: "Kết nối Apple Carplay & Android Auto không dây",
        },
        {
          img: "/images/cardetail/tiennghi/santafe/san-tiennghi7.jpg",
          caption: "Chức năng sưởi hàng ghế 2",
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
        {
          image: "/images/cardetail/thongso/santafe/san-thongso1.jpg",
          caption: null,
        },
        {
          image: "/images/cardetail/thongso/santafe/san-thongso2.jpg",
          caption: null,
        },
      ],
    },
  },

  ioniq5: {
    name: "IONIQ 5",
    price: "Giá từ 1.3 tỷ VNĐ",
    cover: "/images/cardetail/highlights/ioniq/ioniq-highlight1.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/ioniq/ioniq-highlight2.jpg",
      // title: "New IONIQ 5",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "na_H4u0J4nc",
      intro: {
        eyebrow: "Hyundai",
        title: "IONIQ 5 - Xe thế giới của năm và nhiều hơn thế nữa",
        body: "IONIQ 5 được đón nhận trên toàn cầu với thiết kế độc đáo, công nghệ và trải nghiệm khác biệt của thế hệ xe EV mới",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [
        {
          img: "/images/cardetail/highlights/ioniq/ioniq-highlight3.jpg",
          caption:
            "Công nghệ V2L cho phép IONIQ 5 hoạt động như một nguồn cấp điện lên đến 3,6 kW cho các thiết bị điện tử, tăng đáng kể sự tiện lợi và thoải mái cho bạn khi di chuyển và trải nghiệm.",
        },
        {
          img: "/images/cardetail/highlights/ioniq/ioniq-highlight4.jpg",
          caption:
            "Các nhà thiết kế đã giải quyết những lo ngại liên quan đến tác động xấu môi trường thông qua việc IONIQ 5 sử dụng các vật liệu có nguồn gốc bền vững và thân thiện với môi trường.",
        },
      ],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title:
          "Hyundai IONIQ 5. Vẻ đẹp của ngôn ngữ thiết kế “Parametric Pixel”.",
        body: "Huyndai IONIQ 5 với phong cách thiết kế “Parametric Pixel” trên IONIQ 5 kết hợp các sắc thái pixel và kỹ thuật số để tạo ra tính thẩm mỹ độc đáo và vượt thời gian.",
      },
      lead: {
        // title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe1.jpg",
        caption: "Ngoại Thất Hyundai IONIQ 5.",
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe2.jpg",
          caption: "Đèn chiếu sáng thiết kế “Parametric Pixel”",
        },
        {
          img: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe3.jpg",
          caption: "Mui xe dạng vỏ sò",
        },
        {
          img: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe4.jpg",
          caption: "Cổng sạc ẩn",
        },
        {
          img: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe5.jpg",
          caption: "Tay nắm cửa dạng ẩn",
        },
      ],
      twoCards: [
        {
          img: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe6.jpg",
          caption: "Vành xe 20 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe7.jpg",
          caption: "Cụm đèn hậu LED thiết kế “Parametric Pixel”",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Nội thất rộng rãi và có thể tùy chỉnh",
        body: "Nền tảng khung gầm mới E-GMP (Electric-Global Modular Platform) giúp tối đa hóa không gian nội thất. Nó không chỉ là một phương tiện giao thông, mà nó còn thay đổi lối sống của bạn. Thân thiện với thiên nhiên cho cuộc sống bền vững. Cabin được xây dựng hoàn toàn bằng vật liệu thân thiện với môi trường để thúc đẩy cuộc sống bền vững. Đây là những bộ phận độc đáo chỉ có trên IONIQ 5.",
      },
      lead: {
        title: "Khoang lái công nghệ",
        image: "/images/cardetail/noithat/ioniq/ioniq-noithat1.jpg",
        caption: "Màn hình cong cỡ lớn, cần số điện tử.",
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/ioniq/ioniq-noithat2.jpg",
          caption:
            "Các vật liệu từ lớp lót và vải thảm được tạo nên từ các thành phần sinh học chiết xuất từ mía và ngô. Ghế ngồi và tay vịn cửa cũng sử dụng vải làm từ chai PET tái chế.",
        },
        {
          img: "/images/cardetail/noithat/ioniq/ioniq-noithat3.jpg",
          caption:
            "Các thành phần da ghế được nhuộm bằng dầu hạt lanh, được xử lý hoàn toàn thân thiện với môi trường.",
        },
        {
          img: "/images/cardetail/noithat/ioniq/ioniq-noithat4.jpg",
          caption:
            "Tận hưởng tiện nghi cao cấp vơi ghế thư giãn cho người lái có thể ngả hoàn toàn ở phía trước. Ghế ngả theo góc tối ưu, mang lại cảm giác không trọng lượng cho người ngồi.",
        },
        // {
        //   img: "/images/ioniq/interior/grid-4.jpg",
        //   caption: "Cửa gió và cổng sạc sau",
        // },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "IONIQ 5 – Hiệu suất mạnh mẽ",
        body: "Tận hưởng trải nghiệm lái xe tuyệt vời với IONIQ 5 được trang bị đầy đủ công nghệ thông minh tiên tiến.",
      },
      lead: {
        title: "Mạnh mẽ trên mọi cung đường",
        image: "/images/cardetail/vanhanh/ioniq/ioniq-vanhanh1.jpg",
        caption: null,
      },
      midBlock: {
        title: "Nền tảng E-GMP",
        body: "Nền tảng khung gầm độc quyền cho thế hệ EV hoàn toàn mới. E-GMP mang đến thiết kế sáng tạo, cho phép sạc nhanh hơn, tăng phạm vi lái xe và nhiều không gian nội thất hơn.",
        image: "/images/cardetail/vanhanh/ioniq/ioniq-vanhanh4.jpg",
      },
      tailBlock: {
        title: "Điều khiển linh hoạt",
        body: "Nút bấm chế độ lái và cần số điện tử giúp tối ưu không gian bảng điều khiển trung tâm, mang lại cảm giác rộng rãi và thoải mái hơn cho người lái.",
        hero: "/images/cardetail/vanhanh/ioniq/ioniq-vanhanh5.jpg",
        thumbs: [
          "/images/cardetail/vanhanh/ioniq/ioniq-vanhanh2.jpg",
          "/images/cardetail/vanhanh/ioniq/ioniq-vanhanh3.jpg",
          "/images/cardetail/vanhanh/ioniq/ioniq-vanhanh6.jpg",
        ],
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai SmartSense",
        body: "An toàn và vui vẻ hơn với tính năng ga tự động thích ứng Smart Cruise Control",
      },
      lead: {
        title: "Hệ thống an toàn chủ động",
        image: "/images/cardetail/antoan/ioniq/ioniq-antoan1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/antoan/ioniq/ioniq-antoan2.jpg",
          caption:
            "Hỗ trợ phòng tránh tai nạn khi rời khỏi xe SEA: Cảm biến sẽ tự động khóa cửa sau nếu phát hiện có vật thể di chuyển tiếp cận từ phía sau khi cửa sắp mở.",
        },
        {
          img: "/images/cardetail/antoan/ioniq/ioniq-antoan3.jpg",
          caption:
            "Hỗ trợ giữ và duy trì làn đương (LKA & LFA): Sử dụng camera phía trước để theo dõi vạch kẻ đường. Trong trường hợp chệch làn đường ngoài ý muốn, hệ thống sẽ cảnh báo bạn và có thể hỗ trợ đánh lái để đưa xe đi lại đúng làn đường",
        },
        {
          img: "/images/cardetail/antoan/ioniq/ioniq-antoan4.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm phía trước FCA: Phân tích dữ liệu từ camera và radar phía trước. Nếu dự đoán được sắp có va chạm với xe, người đi bộ, xe đạp, hệ thống cánh bảo và phanh tự động sẽ giúp người lái phòng tránh va chạm và tai nạn",
        },
        {
          img: "/images/cardetail/antoan/ioniq/ioniq-antoan6.jpg",
          caption: "Camera 360",
        },
        {
          img: "/images/cardetail/antoan/ioniq/ioniq-antoan7.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm khi lùi xe: Khi lùi xe, nếu tiềm ẩn nguy hiểm va chạm phía hông xe từ bên trái hoặc bên phải, hệ thống sẽ đưa ra cảnh báo. Nếu sau tín hiệu cảnh báo, nguy hiểm gia tăng, hệ thống sẽ hỗ trợ phanh.",
        },
        {
          img: "/images/cardetail/antoan/ioniq/ioniq-antoan5.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm điểm mù BCA: Khi có tín hiệu chuyển làn, nếu tiềm ẩn nguy hiểm va chạm phía hông xe, hệ thống sẽ đưa ra cảnh báo. Nếu sau tín hiệu cảnh báo, nguy hiểm gia tăng, hệ thống sẽ kiểm soát để phòng tránh va chạm.",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Tính năng & công nghệ tiên tiến.",
        body: "Tận hưởng nhiều tính năng cao cấp của IONIQ 5 với công nghệ cao mới nhất mang đến sự thoải mái giúp nâng niu hành khách từng điểm chạm.",
      },
      lead: {
        title: "Khoang lái tiện nghi",
        image: "/images/cardetail/tiennghi/ioniq/ioniq-tiennghi1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/ioniq/ioniq-tiennghi2.jpg",
          caption: "Cụm Console có thể trượt",
        },
        {
          img: "/images/cardetail/tiennghi/ioniq/ioniq-tiennghi3.jpg",
          caption: "Hệ thống Loa Bose Cao cấp",
        },
        {
          img: "/images/cardetail/tiennghi/ioniq/ioniq-tiennghi4.jpg",
          caption: "Cửa sổ trời toàn cảnh",
        },
        {
          img: "/images/cardetail/tiennghi/ioniq/ioniq-tiennghi5.jpg",
          caption: "Điều hòa tự động 2 vùng độc lập",
        },
        {
          img: "/images/cardetail/tiennghi/ioniq/ioniq-tiennghi6.jpg",
          caption: "Điều hòa tự động 2 vùng độc lập",
        },
        {
          img: "/images/cardetail/tiennghi/ioniq/ioniq-tiennghi7.jpg",
          caption: "Cụm màn hình đôi kích thước 12.3″",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật IONIQ 5.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/ioniq/thong-so.jpg",
          caption: null,
        },
      ],
    },
  },
  accent: {
    name: "ACCENT",
    price: "Giá từ 439 triệu VNĐ",
    cover: "/images/slides/accent-hero.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/accent/accent-highlight1.jpg",
      // title: "New IONIQ 5",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "jcwcQlpDph4",
      intro: {
        eyebrow: "Hyundai",
        title: "ALL NEW ACCENT",
        body: "Hyundai Accent hoàn toàn mới với ngôn ngữ thiết kế thể thao gợi cảm – Sensuous sportiness đầy táo bạo, mạnh mẽ cùng nhiều trang bị hiện đại giúp cho việc trải nghiệm chiếc xe vươn lên tầm cao mới.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Accent Mới. Mạnh mẽ vươn tầm.",
        body: "Hyundai Accent hoàn toàn mới với ngôn ngữ thiết kế thể thao gợi cảm – Sensuous sportiness, mạnh mẽ 16’’ thể thao cùng nhiều trang bị hiện đại giúp cho việc trải nghiệm chiếc xe vươn lên tầm cao mới.",
      },
      lead: {
        // title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/accent/accent-ngoaithat1.jpg",
        caption: "Ngoại Thất Hyundai Accent.",
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/accent/accent-ngoaithat2.jpg",
          caption: "Dải đèn định vị tối giản thời thượng",
        },
        {
          img: "/images/cardetail/ngoaithat/accent/accent-ngoaithat3.jpg",
          caption: "Đèn chiếu sáng LED hiện đại",
        },
        {
          img: "/images/cardetail/ngoaithat/accent/accent-ngoaithat4.jpg",
          caption: "Mặt Calang cách điệu khác biệt",
        },
        {
          img: "/images/cardetail/ngoaithat/accent/accent-ngoaithat5.jpg",
          caption: "Tay nắm cửa mạ Crom cùng keyless entry",
        },
        {
          img: "/images/cardetail/ngoaithat/accent/accent-ngoaithat6.jpg",
          caption:
            "Gương chiếu hậu chỉnh điện, gập điện, có sấy tích hợp đèn báo rẽ",
        },
        {
          img: "/images/cardetail/ngoaithat/accent/accent-ngoaithat7.jpg",
          caption: "Vành hợp kim thể thao kích thước 16 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/accent/accent-ngoaithat8.jpg",
          caption: "Cụm đèn hậu LED hiện đại",
        },
        {
          img: "/images/cardetail/ngoaithat/accent/accent-ngoaithat9.jpg",
          caption: "Cản sau tạo hình hoa văn kim cương",
        },
        {
          img: "/images/cardetail/ngoaithat/accent/accent-ngoaithat10.jpg",
          caption: "Ăng ten vây cá sơn đen",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Hyundai Accent Mới. Trẻ trung & hiện đại.",
        body: "Bước vào Accent hoàn toàn mới và trải nghiệm sự hiện đại, tiện nghi. Đường nét, kết cấu kết hợp màu sắc mang đến cảm giác đầy hứng thú.",
      },
      lead: {
        title: "Khoang lái công nghệ",
        image: "/images/cardetail/noithat/accent/accent-noithat1.jpg",
        caption: "Nội Thất Hyundai Accent Mới",
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/accent/accent-noithat2.jpg",
          caption: "Điều hòa tự động 1 vùng",
        },
        {
          img: "/images/cardetail/noithat/accent/accent-noithat3.jpg",
          caption: "Làm mát hàng ghế trước",
        },
        {
          img: "/images/cardetail/noithat/accent/accent-noithat4.jpg",
          caption: "Màn hình thông tin kỹ thuật số 10.25 inch",
        },
        {
          img: "/images/cardetail/noithat/accent/accent-noithat5.jpg",
          caption: "Cửa gió hàng ghế sau tích hợp cổng sạc Type C",
        },
        {
          img: "/images/cardetail/noithat/accent/accent-noithat6.jpg",
          caption: "Sạc không dây",
        },
        {
          img: "/images/cardetail/noithat/accent/accent-noithat7.jpg",
          caption: "Lẫy chuyển số sau vô lăng",
        },
        // {
        //   img: "/images/ioniq/interior/grid-4.jpg",
        //   caption: "Cửa gió và cổng sạc sau",
        // },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Hyundai Accent. Vận hành mạnh mẽ đáng tin cậy.",
        body: "Hyundai All new Accent được trang bị động cơ Smartstream 1.5L cung cấp công suất cực đại lên tới 115/6,300 (PS/rpm) và mô-men xoắn cực đại 144/4,500 (Nm/rpm) giúp xe tăng tốc tốt, mang lại sự tự tin khi di chuyển tích hợp các chế độ lái cho phép bạn chọn phong cách lái xe phù hợp nhất cho mình.",
      },
      lead: {
        title: "Mạnh mẽ trên mọi cung đường",
        image: "/images/cardetail/vanhanh/accent/accent-vanhanh1.jpg",
        caption: null,
      },
      midBlock: {
        title: "Động cơ SmartStream G1.5",
        body: "Công suất cực đại đạt 115ps tại 6,300 vòng/phút Momen xoắn cực đại đat 144Nm tại 4,500 vòng/phút. Hộp số tự động 6 cấp (IVT) giúp vận hành êm ái, tiết kiệm nhiên liệu.",
        image: "/images/cardetail/vanhanh/accent/accent-vanhanh2.jpg",
      },
      tailBlock: {
        title: "3 Chế độ vận hành khác biệt",
        body: "Hyundai All new Accent có ba chế độ lái. Normal cho việc lái xe hàng ngày, Eco tiết kiệm nhiên liệu và Sport để thực hiện những cú tăng tốc thể thao",
        hero: "/images/cardetail/vanhanh/accent/accent-vanhanh3.jpg",
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai SmartSense",
        body: "An toàn và vui vẻ hơn với tính năng ga tự động thích ứng Smart Cruise Control",
      },

      grid4: [
        {
          img: "/images/cardetail/antoan/accent/accent-antoan1.jpg",
          caption: "Hệ thống hỗ trợ phòng tránh va chạm phía trước FCA",
        },
        {
          img: "/images/cardetail/antoan/accent/accent-antoan2.jpg",
          caption: "Hệ thống hỗ trợ giữ và duy trì làn đường LKA/LFA",
        },
        {
          img: "/images/cardetail/antoan/accent/accent-antoan3.jpg",
          caption: "Hệ thống hỗ trợ phòng tránh va chạm điểm mù BCA",
        },
        {
          img: "/images/cardetail/antoan/accent/accent-antoan4.jpg",
          caption: "Hệ thống hỗ trợ phòng tránh va chạm khi lùi RCCA",
        },
        {
          img: "/images/cardetail/antoan/accent/accent-antoan5.jpg",
          caption: "Đèn pha tự động thích ứng HBA",
        },
        {
          img: "/images/cardetail/antoan/accent/accent-antoan6.jpg",
          caption: "Hệ thống phòng tránh mở cửa an toàn SEW.",
        },
        {
          img: "/images/cardetail/antoan/accent/accent-antoan7.jpg",
          caption: "Camera hỗ trợ đỗ xe",
        },
        {
          img: "/images/cardetail/antoan/accent/accent-antoan8.jpg",
          caption: "Cảm biến áp suất lốp",
        },
        {
          img: "/images/cardetail/antoan/accent/accent-antoan9.jpg",
          caption: "Hệ thống an toàn 6 túi khí",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Hyundai Accent Mới. Tiện nghi cao cấp hàng đầu phân khúc.",
        body: null,
      },
      lead: {
        title: null,
        image: "/images/cardetail/tiennghi/accent/accent-tiennghi1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/accent/accent-tiennghi2.jpg",
          caption: "Tựa để tay tích hợp giá để cốc",
        },
        {
          img: "/images/cardetail/tiennghi/accent/accent-tiennghi3.jpg",
          caption:
            "Màn hình giải trí 8 inch tích hợp Apple Carplay/Android Auto không dây",
        },
        {
          img: "/images/cardetail/tiennghi/accent/accent-tiennghi4.jpg",
          caption: "Gập ghế 6:4 hàng ghế sau",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật Accent.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/accent/accent-thongso1.jpg",
          caption: null,
        },
        {
          image: "/images/cardetail/thongso/accent/accent-thongso2.jpg",
          caption: null,
        },
      ],
    },
  },
  stargazer: {
    name: "Stargazer",
    price: "Giá từ 489 triệu VNĐ",
    cover: "/images/slides/star-hero.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/star/star-highlight1.jpg",
      // title: "New IONIQ 5",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "D3l-ggcW3NI",
      intro: {
        eyebrow: "Hyundai",
        title: "Stargazer X",
        body: "Hyundai STARGAZER X với thiết kế mới táo bạo, mới mẻ, trang bị tiện nghi cùng sức mạnh động cơ và sự an toàn tối đa mang đến sự thoải mái , tiện lợi và an toàn cho mỗi chuyến đi.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Stargazer X. Thiết kế năng động và thể thao.",
        body: "Hyundai Stargazer X mới được thiết kế thể thao, nam tính và sắc sảo hơn, phù hợp hơn với xu thế hiện nay.",
      },
      lead: {
        // title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/star/star-ngoaithat1.jpg",
        caption: "Ngoại Thất Hyundai Stargazer X.",
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/star/star-ngoaithat2.jpg",
          caption: "Lưới tản nhiệt 3D mạ crôm",
        },
        {
          img: "/images/cardetail/ngoaithat/star/star-ngoaithat3.jpg",
          caption: "Đèn chiếu sáng dạng LED",
        },
        {
          img: "/images/cardetail/ngoaithat/star/star-ngoaithat4.jpg",
          caption: "Thiết kế thể thao mạnh mẽ",
        },
        {
          img: "/images/cardetail/ngoaithat/star/star-ngoaithat5.jpg",
          caption: "Vành hợp kim 17 inch thể thao",
        },
        {
          img: "/images/cardetail/ngoaithat/star/star-ngoaithat6.jpg",
          caption: "Xi nhan tích hợp trên gương chiếu hậu",
        },
        {
          img: "/images/cardetail/ngoaithat/star/star-ngoaithat7.jpg",
          caption: "Keyless Entry",
        },
        {
          img: "/images/cardetail/ngoaithat/star/star-ngoaithat8.jpg",
          caption: "Đèn phanh trên cao",
        },
        {
          img: "/images/cardetail/ngoaithat/star/star-ngoaithat9.jpg",
          caption: "Cụm đèn hậu LED hình chữ H",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Hyundai Stargazer X.",
        body: "Nội thất Hyundai Stargazer X rộng rãi thoải mái hàng đầu trong phân khúc cùng với vô số tiện nghi được trang bị.",
      },
      lead: {
        title: "Khoang lái công nghệ",
        image: "/images/cardetail/noithat/star/star-noithat1.jpg",
        caption: "Nội Thất Hyundai Stargazer X",
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/star/star-noithat2.jpg",
          caption:
            "Màn hình kích thước 10.25 inch: Màn hình giải trí với tính năng Apple Carplay/ Android Auto không dây duy nhất trong phân khúc hiện tại",
        },
        {
          img: "/images/cardetail/noithat/star/star-noithat3.jpg",
          caption: "Màn hình thông tin Full LCD",
        },
        {
          img: "/images/cardetail/noithat/star/star-noithat4.jpg",
          caption: "Sạc không dây",
        },
        {
          img: "/images/cardetail/noithat/star/star-noithat5.jpg",
          caption: "Phanh tay điện tử",
        },
        {
          img: "/images/cardetail/noithat/star/star-noithat6.jpg",
          caption: "Ghế da cao cấp với chỉ đỏ thể thao",
        },
        {
          img: "/images/cardetail/noithat/star/star-noithat7.jpg",
          caption: "Cửa gió điều hòa cho hàng ghế 2 và 3",
        },
        {
          img: "/images/cardetail/noithat/star/star-noithat8.jpg",
          caption: "Hệ thống 8 loa bose cao cấp",
        },
        // {
        //   img: "/images/ioniq/interior/grid-4.jpg",
        //   caption: "Cửa gió và cổng sạc sau",
        // },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Hyundai Stargazer X. Hiệu suất vận hành tối ưu.",
        body: "Hyundai STARGAZER X được trang bị động cơ Smartstream 1.5L và hệ thống truyền động hộp số biến thiên vô cấp thông minh (CVT), mang đến khả năng vận hành bền bỉ, nhạy bén và hiệu quả. Tính năng Chế độ lái cho phép bạn chọn phong cách lái xe phù hợp nhất cho mình.",
      },
      lead: {
        title: "Mạnh mẽ trên mọi cung đường",
        image: "/images/cardetail/vanhanh/star/star-vanhanh1.jpg",
        caption: null,
      },
      midBlock: {
        title: "Động cơ SmartStream G1.5",
        body: "Công suất cực đại đạt 115ps tại 6,300 vòng/phút Momen xoắn cực đại đat 144Nm tại 4,500 vòng/phút.",
        image: "/images/cardetail/vanhanh/star/star-vanhanh2.jpg",
      },
      tailBlock: {
        title: "4 chế độ lái",
        body: "Hyundai STARGAZER X có bốn chế độ lái. Normal cho việc lái xe hàng ngày, Eco tiết kiệm nhiên liệu, Sport để vận hành xe tối đa và Smart để điều chỉnh khoảng thời gian chuyển số tự động dựa trên kiểu lái xe.",
        hero: "/images/cardetail/vanhanh/star/star-vanhanh3.jpg",
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai SmartSense",
        body: "Hyundai Stargazer X được trang bị gói an toàn Hyundai Smartsense giúp người lái an tâm trên mọi hành trình.",
      },

      grid4: [
        {
          img: "/images/cardetail/antoan/star/star-antoan.jpg",
          caption:
            "Phòng tránh va chạm điểm mù BCA : Khi có tín hiệu chuyển làn tiềm ẩn nguy cơ va chạm phía hông xe, hệ thống sẽ đưa ra cảnh báo bằng hình ảnh và âm thanh. Nếu sau khi đưa ra tín hiệu cảnh báo , nguy hiểm gia tăng, hệ thống sẽ kiểm soát và phanh lại để phòng tránh va chạm",
        },
        {
          img: "/images/cardetail/antoan/star/star-antoan2.jpg",
          caption:
            "Phòng tránh va chạm phía trước FCA: Khi tiềm ẩn nguy cơ va chạm với xe phía trước, hệ thống sẽ đưa ra cảnh báo bằng hình ảnh và âm thanh. Nếu sau khi đưa ra tín hiệu cảnh báo , nguy hiểm gia tăng, hệ thống sẽ kiểm soát và phanh lại để phòng tránh va chạm.",
        },
        {
          img: "/images/cardetail/antoan/star/star-antoan3.jpg",
          caption:
            "Hỗ trợ giữ làn đường LFA : Hệ thống sẽ hỗ trợ tác động vào vô lăng để xe luôn đi chính giữa 2 vạch kẻ đường.",
        },
        {
          img: "/images/cardetail/antoan/star/star-antoan4.jpg",
          caption:
            "Hỗ trợ phòng tránh lệch làn đường: Hệ thống sử dụng camera để theo dõi việc di chuyển của xe. Khi xe có hiện tượng đi lệch làn đường, hệ thống sẽ đưa ra cảnh báo bằng âm thanh và trong một vài trường hợp hệ thống sẽ can thiệp vào hệ thống vô lăng để tránh xe đi lệch khỏi làn đường",
        },
        {
          img: "/images/cardetail/antoan/star/star-antoan5.jpg",
          caption:
            "Hệ thống đèn thích ứng AHB: Hệ thống sử dụng camera để nhận biết các nguồn sáng của các xe cùng chiều và đối diện từ đó sẽ tự động điều chính chế độ chiếu sáng (xa/gần) để phòng tránh chói mắt cho người tham gia giao thông.",
        },
        {
          img: "/images/cardetail/antoan/star/star-antoan6.jpg",
          caption:
            "Hệ thống phòng tránh va chạm phía sau RCCA: Khi có tín hiệu chuyển làn tiềm ẩn nguy cơ va chạm phía sau xe, hệ thống sẽ đưa ra cảnh báo bằng hình ảnh và âm thanh. Nếu sau khi đưa ra tín hiệu cảnh báo , nguy hiểm gia tăng, hệ thống sẽ kiểm soát và phanh lại để phòng tránh va chạm.",
        },
        {
          img: "/images/cardetail/antoan/star/star-antoan7.jpg",
          caption:
            "Hệ thống cảnh báo va chạm khi rời khỏi xe SEW: Khi rời khỏi xe hệ thống sẽ quét các phương tiện từ phía sau nhờ radar. Nếu tiềm ẩn nguy cơ va chạm, hệ thống sẽ cảnh báo bàng hình ảnh và âm thanh.",
        },
        {
          img: "/images/cardetail/antoan/star/star-antoan8.jpg",
          caption: "Camera hỗ trợ đỗ xe",
        },
        {
          img: "/images/cardetail/antoan/star/star-antoan9.jpg",
          caption: "Hệ thống an toàn 6 túi khí",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Hyundai Stargazer X. Tiện nghi cao cấp.",
        body: null,
      },
      lead: {
        title: null,
        image: "/images/cardetail/tiennghi/star/star-tiennghi1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/star/star-tiennghi2.jpg",
          caption: "Cảm biến áp suất lốp TPMS",
        },
        {
          img: "/images/cardetail/tiennghi/star/star-tiennghi3.jpg",
          caption: "Sạc không dây",
        },
        {
          img: "/images/cardetail/tiennghi/star/star-tiennghi4.jpg",
          caption: "Bệ tì tay kích thước lớn",
        },
        {
          img: "/images/cardetail/tiennghi/star/star-tiennghi5.jpg",
          caption: "Màn hình 10.25 inch cùng Apple Carplay/Android Auto",
        },
        {
          img: "/images/cardetail/tiennghi/star/star-tiennghi6.jpg",
          caption: "Hệ thống loa bose cao cấp",
        },
        {
          img: "/images/cardetail/tiennghi/star/star-tiennghi7.jpg",
          caption: "Khởi động bằng nút bấm",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật Stargazer X.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/star/star-thongso.jpg",
          caption: null,
        },
      ],
    },
  },
  palisade: {
    name: "Palisade",
    price: "Giá từ 489 triệu VNĐ",
    cover: "/images/slides/palisade-hero.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/pali/pali-highlight1.jpg",
      // title: "New IONIQ 5",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "w9oanii6XzM",
      intro: {
        eyebrow: "Hyundai",
        title: "PALISADE – Diện mạo mới táo bạo",
        body: "Hyundai Palisade mới thu hút sự chú ý ngay lập tức ở bất cứ nơi nào bạn đi du lịch. Đó là một diện mạo độc đáo truyền cảm hứng cho việc lái xe tự tin. Sự tự tin của bạn được đặt đúng chỗ: công nghệ tiên tiến cùng các tính năng an toàn giúp bạn và những người thân yêu của bạn an tâm trên mọi cung đường Cabin PALISADE rộng rãi, chỗ ngồi linh hoạt, và các tính năng kết nối tiên tiến khiến nó trở thành một chiếc SUV đầu bảng.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "HYUNDAI PALISADE. VẺ NGOÀI CAO CẤP VÀ SANG TRỌNG.",
        body: "Hyundai Palisade mới có vẻ ngoài nổi bật. Với đặc điểm thiết kế thanh lịch và sang trọng phản ánh khí chất và sự thành công của bạn. Hyundai Palisade sinh ra với vai trò là chiếc SUV hàng đầu của Hyundai, PALISADE thể hiện tất cả những đặc điểm của một người dẫn đầu. Vừa cơ bắp vừa thanh lịch, nó thể hiện sự hiện diện mạnh mẽ với những phẩm chất cao cấp gây được sự chú ý. Dù bạn đi đâu, PALISADE sẽ đưa bạn đến đó thật phong cách.",
      },
      lead: {
        // title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/pali/pali-ngoaithat1.jpg",
        caption: "Ngoại Thất Hyundai Palisade.",
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/pali/papali-highlight2.jpg",
          caption: "Lưới tản nhiệt sơn đen bóng",
        },
        {
          img: "/images/cardetail/ngoaithat/pali/papali-highlight3.jpg",
          caption: "Hệ thống đèn chiều sáng Full LED",
        },
        {
          img: "/images/cardetail/ngoaithat/pali/papali-highlight4.jpg",
          caption: "Đèn xi nhan LED",
        },
        {
          img: "/images/cardetail/ngoaithat/pali/papali-highlight5.jpg",
          caption: "Vành xe kích thước 20 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/pali/papali-highlight6.jpg",
          caption: "Đèn chào mừng",
        },
        {
          img: "/images/cardetail/ngoaithat/pali/papali-highlight7.jpg",
          caption: "Cửa sổ trời đôi cùng giá nóc",
        },
        {
          img: "/images/cardetail/ngoaithat/pali/papali-highlight8.jpg",
          caption: "Cụm đèn hậu dạng LED",
        },
        {
          img: "/images/cardetail/ngoaithat/pali/papali-highlight9.jpg",
          caption: "Cốp điện thông minh",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "HYUNDAI PALISADE. THIẾT KẾ NỘI THẤT CAO CẤP & TRỰC QUAN.",
        body: "Hyundai Palisade được sở hữu không gian nội thất hiện đại, tinh tế với nhiều vật liệu cao cấp, nhằm mang đến cho chủ nhân không gian thực sự thỏa mái tiện nghi với khả năng điều khiển trực quan. Xe được trang bị vật liệu da kết hợp các chi tiết vật liệu thân thiện môi trường và nhôm định hình, tạo nên sự cao cấp sang trọng, tinh tế",
      },
      lead: {
        title: "Nội Thất Hyundai Palisade",
        image: "/images/cardetail/noithat/pali/pali-noithat1.jpg",
        caption: "Nội Thất Hyundai Stargazer X",
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/pali/pali-noithat2.jpg",
          caption: "Hệ thống loa Infinity Cao cấp",
        },
        {
          img: "/images/cardetail/noithat/pali/pali-noithat3.jpg",
          caption: "Hệ thống loa Infinity Cao cấp",
        },
        {
          img: "/images/cardetail/noithat/pali/pali-noithat4.jpg",
          caption: "Màn hình giải trí 12.3 inch",
        },

        // {
        //   img: "/images/ioniq/interior/grid-4.jpg",
        //   caption: "Cửa gió và cổng sạc sau",
        // },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Hyundai Palisade. Khả năng vận hành bền bỉ tiết kiệm",
        body: "Khi bạn đặt chân nhấn ga di chuyển, bạn có thể tin cậy vào PALISADE để cung cấp tất cả sức mạnh bạn cần. Động cơ diesel của PALISADE được kết hợp với hộp số tự động 8 cấp đã được cải tiến có công nghệ giảm ma sát mới giúp chuyển số mượt mà hơn, êm ái hơn và tiết kiệm nhiên liệu tốt hơn cùng hệ thống HTRAC, dẫn động bốn bánh của Hyundai được trang bị các chế độ lái địa hình giúp cải thiện khả năng “off road” trên các địa hình phức tạp",
      },
      lead: {
        title: "Mạnh mẽ trên mọi cung đường",
        image: "/images/cardetail/vanhanh/pali/pali-vanhanh1.jpg",
        caption: null,
      },
      midBlock: {
        title: "Núm xoay điều chỉnh chế độ lái & độ địa hình",
        body: null,
        image: "/images/cardetail/vanhanh/pali/pali1.png",
      },
      tailBlock: {
        title: "Hệ dẫn động toàn thời gian HTRAC và hộp số tự dộng 8 cấp",
        body: null,
        hero: "/images/cardetail/vanhanh/pali/pali2.png",
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai SmartSense",
        body: "Với việc trang bị Hyundai SmartSense, Palisade trở thành chiếc xe an toàn bậc nhất với những công nghệ hỗ trợ hiện đại nhất",
      },

      grid4: [
        {
          img: "/images/cardetail/antoan/pali/pali-antoan1.jpg",
          caption:
            "Hỗ trợ giữ làn đường:Hệ thống sử dụng camera để theo dõi vạch kẻ đường. Từ đó tính năng hỗ trợ điều chỉnh tay lái để đảm báo xe luôn đi trong làn",
        },
        {
          img: "/images/cardetail/antoan/pali/pali-antoan2.jpg",
          caption:
            "Hỗ trợ giữ làn đường: Hệ thống sử dụng camera để theo dõi vạch kẻ đường. Từ đó tính năng hỗ trợ điều chỉnh tay lái để đảm báo xe luôn đi trong làn",
        },
        {
          img: "/images/cardetail/antoan/pali/pali-antoan3.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm điểm mù: Khi có tín hiệu chuyển làn, nếu tiềm ẩn nguy hiểm va chạm, hệ thống sẽ đưa ra tín hiệu cảnh báo. Nếu sau tín hiệu cảnh báo, nguy hiểm gia tăng, hệ thông sẽ kiểm soát để phòng tránh va chạm",
        },
        {
          img: "/images/cardetail/antoan/pali/pali-antoan4.jpg",
          caption:
            "Phòng tránh va chạm khi rời khỏi xe: Hệ thống sẽ can thiệp để khóa cửa phòng tránh va chạm có thể xảy ra khi mở cửa xe",
        },
        {
          img: "/images/cardetail/antoan/pali/pali-antoan5.jpg",
          caption: "Hệ thống cảm biến lùi trước và sau",
        },
        {
          img: "/images/cardetail/antoan/pali/pali-antoan6.jpg",
          caption: "Đèn lùi dẫn hướng",
        },
        {
          img: "/images/cardetail/antoan/pali/pali-antoan7.jpg",
          caption: "Hệ thống 7 túi khí",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Hyundai Palisade. Tiện nghi đẳng cấp thương gia.",
        body: "Trung tâm của sự chú ý là cụm màn hình thông tin kỹ thuật số 12,3 inch hiển thị đồ họa và văn bản một cách chi tiết, đầy màu sắc. Màn hình giải trí 12,3 inch hỗ trợ hiển thị chia đôi màn hình để bạn có thể dễ dàng kiểm tra lộ trình và hướng đi của mình, xem thông tin nhạc/radio, v.v. cùng một lúc.",
      },
      lead: {
        title: null,
        image: "/images/cardetail/tiennghi/pali/pali-tiennghi1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/pali/pali-tiennghi2.jpg",
          caption: "Màn hình hiển thị thông tin trên kính lái",
        },
        {
          img: "/images/cardetail/tiennghi/pali/pali-tiennghi3.jpg",
          caption: "Hiển thị điểm mù trên màn hình",
        },
        {
          img: "/images/cardetail/tiennghi/pali/pali-tiennghi4.jpg",
          caption: "Sưởi và làm mát ghế hàng ghế 2",
        },
        {
          img: "/images/cardetail/tiennghi/pali/pali-tiennghi5.jpg",
          caption: "Điều hòa tự động 3 vùng độc lập",
        },
        {
          img: "/images/cardetail/tiennghi/pali/pali-tiennghi6.jpg",
          caption: "Nhớ 2 vị trí ghế lái",
        },
        {
          img: "/images/cardetail/tiennghi/pali/pali-tiennghi9.jpg",
          caption: "Cổng sạc tích hợp trên ghế hành khách",
        },
        {
          img: "/images/cardetail/tiennghi/pali/pali-tiennghi10.jpg",
          caption: "Sạc không dây",
        },
        {
          img: "/images/cardetail/tiennghi/pali/pali-tiennghi11.jpg",
          caption: "Nút chỉnh điện hàng ghế 2",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật Stargazer X.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/pali/pali-thongso.jpg",
          caption: null,
        },
      ],
    },
  },
  creta: {
    name: "Creta",
    price: "Giá từ 599 triệu VNĐ",
    cover: "/images/slides/creta-hero.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/creta/creta-highlight1.jpg",
      // title: "New IONIQ 5",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "oBPRWCOPpV8",
      intro: {
        eyebrow: "Hyundai",
        title: "New Creta 2025",
        body: "Hyundai Creta 2025 khoác lên mình diện mạo ngoại thất vừa táo bạo vừa hiện đại, nổi bật với lưới tản nhiệt Black Chrome Parametric đầy cá tính, cụm đèn chiếu sáng LED sắc sảo và dải đèn định vị ban ngày (DRL) ấn tượng. Tất cả hòa quyện tạo nên một phong cách mạnh mẽ, cuốn hút khiến Hyundai Creta luôn là tâm điểm trên mọi cung đường. Hyundai Creta 2025 có 4 phiên bản: Tiêu chuẩn, Đặc biệt và Cao cấp, cùng phiên bản thể thao N Line. Xe có 6 tùy chọn màu sắc: Trắng, Đỏ, Đen, Bạc, Xám Kim loại, Xanh Dương. Xe được bảo hành 5 năm hoặc 100.000 km (tùy điều kiện nào đến trước).",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Creta 2025 – Hiện đại, táo bạo.",
        body: "Hòa quyện những đường nét táo bạo, đậm chất tương lai là sự tinh tế, cổ điển. Hyundai Creta 2025 sở hữu dáng vẻ tự tin, khỏe khoắn, lập tức thu hút mọi ánh nhìn. Vành hợp kim độc đáo là điểm sáng nổi bật, giúp Hyundai Creta khẳng định vị thế riêng biệt trong phân khúc SUV phổ thông.",
      },
      lead: {
        // title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/creta/creta-ngoaithat1.jpg",
        caption: "Ngoại Thất Hyundai Creta 2025.",
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/creta/creta-ngoaithat2.jpg",
          caption: "Cụm lưới tản nhiệt “Parametric Jewel Pattern”",
        },
        {
          img: "/images/cardetail/ngoaithat/creta/creta-ngoaithat3.jpg",
          caption: "Đèn chiếu sáng LED",
        },
        {
          img: "/images/cardetail/ngoaithat/creta/creta-ngoaithat4.jpg",
          caption: "Đường nét đặc trưng táo bạo",
        },
        {
          img: "/images/cardetail/ngoaithat/creta/creta-ngoaithat5.jpg",
          caption:
            "Vành hợp kim kích thước 17 inch thiết kế 2 tông màu thể thao",
        },
        {
          img: "/images/cardetail/ngoaithat/creta/creta-ngoaithat6.jpg",
          caption: "Hệ thống phanh phong cách N-Line",
        },
        {
          img: "/images/cardetail/ngoaithat/creta/creta-ngoaithat7.jpg",
          caption: "Thiết kế tinh tế",
        },
        {
          img: "/images/cardetail/ngoaithat/creta/creta-ngoaithat8.jpg",
          caption: "Cụm đèn hậu dạng LED với dải đèn nối liền",
        },
        {
          img: "/images/cardetail/ngoaithat/creta/creta-ngoaithat9.jpg",
          caption: "Đèn báo rẽ với hiệu ứng dòng chảy",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Hyundai Creta 2025 – Không gian nội thất tinh tế.",
        body: "Nội thất của Hyundai Creta 2025 toát lên vẻ tinh tế đậm chất đô thị hiện đại thể hiện qua cụm màn hình đôi công nghệ cao và những tiện ích hàng đầu. Không gian được thiết kế tối ưu rộng rãi đem tới những trải nghiệm thoải mái nhất trên từng hành trình.",
      },
      lead: {
        title: "Nội Thất Hyundai Creta 2025",
        image: "/images/cardetail/noithat/creta/creta-noithat1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/creta/creta-noithat2.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/noithat/creta/creta-noithat3.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/noithat/creta/creta-noithat4.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/noithat/creta/creta-noithat5.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/noithat/creta/creta-noithat6.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/noithat/creta/creta-noithat7.jpg",
          caption: null,
        },

        // {
        //   img: "/images/ioniq/interior/grid-4.jpg",
        //   caption: "Cửa gió và cổng sạc sau",
        // },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Hyundai Creta 2025 – Vận hành linh hoạt.",
        body: "Hyundai Creta 2025 mang đến khả năng vận hành linh hoạt trong đô thị. Với loại động cơ cân bằng hoàn hảo giữa tiết kiệm nhiên liệu và sức mạnh tối ưu, hứa hẹn một trải nghiệm lái xe phấn khích đến từng khoảnh khắc.",
      },
      lead: {
        title: "Mạnh mẽ trên mọi cung đường",
        image: "/images/cardetail/vanhanh/creta/creta-vanhanh1.jpg",
        caption: null,
      },
      midBlock: {
        title: null,
        body: null,
        image: "/images/cardetail/vanhanh/creta/creta-vanhanh2.jpg",
      },
      tailBlock: {
        title: null,
        body: null,
        hero: "/images/cardetail/vanhanh/creta/vanhanh.png",
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai Creta 2025 – Hệ thống an toàn Hyundai SmartSense.",
        body: "Hyundai Creta 2025 mang đến một loạt các cải tiến của hệ thống SmartSense",
      },

      grid4: [
        {
          img: "/images/cardetail/antoan/creta/creta-antoan1.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm phía trước (FCA): Phân tích dữ liệu từ camera phía trước. Nếu dự đoán được sắp có va chạm với xe, người đi bộ, xe đạp, hệ thống cánh bảo và phanh tự động sẽ giúp người lái phòng tránh va chạm và tai nạn",
        },
        {
          img: "/images/cardetail/antoan/creta/creta-vanhanh2.jpg",
          caption:
            "Hỗ trợ giữ và duy trì làn đường (LKA-LFA): Nếu như bạn di chuyển ra khỏi làn đường mà không có đèn tín hiệu, hệ thống sẽ sử dụng âm thanh và hình ảnh để cảnh báo về sự thay đổi. Camera của xe sẽ liên tục quét các vạch sơn trên làn đường để đảm bảo rằng xe được điều khiển chính xác và giữa làn đường. Khi cần thiết, tính năng sẽ điều chỉnh tay lái để đảm bảo xe luôn đi trong làn",
        },
        {
          img: "/images/cardetail/antoan/creta/creta-vanhanh3.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm điểm mù (BCA): Khi có tín hiệu chuyển làn, nếu tiềm ẩn nguy hiểm va chạm, hệ thống sẽ đưa ra tín hiệu cảnh báo. Nếu sau tín hiệu cảnh báo, nguy hiểm gia tăng, hệ thông sẽ kiểm soát để phòng tránh va chạm",
        },
        {
          img: "/images/cardetail/antoan/creta/creta-antoan4.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm khi lùi xe (RCCA): Khi lùi xe, nếu tiềm ẩn nguy hiểm va chạm phía hông xe từ bên trái hoặc bên phải, hệ thống sẽ đưa ra cảnh báo. Nếu sau tín hiệu cảnh báo, nguy hiểm gia tăng, hệ thống sẽ hỗ trợ phanh.",
        },
        {
          img: "/images/cardetail/antoan/creta/creta-antoan6.jpg",
          caption:
            "Điều khiển hành trình thích ứng SCC: Hệ thống giúp duy trì khoảng cách với xe phía trước một khoảng an toàn khi xe chạy chế độ hành trình.",
        },
        {
          img: "/images/cardetail/antoan/creta/creta-antoan7.jpg",
          caption:
            "Camera 360 và Hệ thống cảnh báo điểm mù trên màn hình thông tin",
        },
        {
          img: "/images/cardetail/antoan/creta/creta-antoan8.jpg",
          caption: "Hệ thống 6 túi khí",
        },
        {
          img: "/images/cardetail/antoan/creta/creta-antoan9.jpg",
          caption: "Cảm biến áp suất lốp TPMS",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Hyundai creta 2025 – Tiên nghi thiết thực.",
        body: "Hyundai Creta cung cấp các tính năng cao cấp như Hệ thống âm thanh BOSE, làm mát ghế, ghế lái chỉnh điện nâng tầm trải nghiệm lái xe.",
      },
      lead: {
        title: null,
        image: null,
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/creta/creta-tiennghi1.jpg",
          caption: "Làm mát hàng ghế trước",
        },
        {
          img: "/images/cardetail/tiennghi/creta/creta-tiennghi2.jpg",
          caption: "Ghế lái chỉnh điện",
        },
        {
          img: "/images/cardetail/tiennghi/creta/creta-tiennghi3.jpg",
          caption: "Sạc không dây và Cổng sạc Type C",
        },
        {
          img: "/images/cardetail/tiennghi/creta/creta-tiennghi4.jpg",
          caption: "Điều hòa tự động",
        },
        {
          img: "/images/cardetail/tiennghi/creta/creta-tiennghi5.jpg",
          caption: "Hệ thống 8 loa Bose",
        },
        {
          img: "/images/cardetail/tiennghi/creta/creta-tiennghi6.jpg",
          caption: "Cửa gió hàng ghế sau, cổng sạc Type C",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật Creta.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/creta/creta-thongso1.jpg",
          caption: null,
        },
        {
          image: "/images/cardetail/thongso/creta/creta-thongso2.jpg",
          caption: null,
        },
      ],
    },
  },
  elentra: {
    name: "Elentra",
    price: "Giá từ 599 triệu VNĐ",
    cover: "/images/slides/elentra-hero.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/elentra/elentra-highlight1.jpg",
      // title: "New IONIQ 5",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "DR5QzKrZ4x4",
      intro: {
        eyebrow: "Hyundai",
        title: "All New Elentra 2025",
        body: "Huyndai Elantra Mới với thiết kế ‘Parametric Dynamics’ làm nổi bật tính thẩm mỹ hình học của phần mui kéo dài và các đường nét kiểu dáng đẹp, hoàn thiện phong cách sáng tạo và có tầm nhìn xa.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [
        {
          img: "/images/cardetail/highlights/elentra/elentra-highlight2.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/highlights/elentra/elentra-highlight3.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/highlights/elentra/elentra-highlight4.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/highlights/elentra/elentra-highlight5.jpg",
          caption: null,
        },
      ],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Elentra 2025 – Hiện đại, táo bạo.",
        body: "Hòa quyện những đường nét táo bạo, đậm chất tương lai là sự tinh tế, cổ điển. Hyundai Elentra 2025 sở hữu dáng vẻ tự tin, khỏe khoắn, lập tức thu hút mọi ánh nhìn. Vành hợp kim độc đáo là điểm sáng nổi bật, giúp Hyundai Elentra khẳng định vị thế riêng biệt trong phân khúc SUV phổ thông.",
      },
      lead: {
        // title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat1.jpg",
        caption: 'Lưới tản nhiệt "Parametric Jewel Pattern"',
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat2.jpg",
          caption: "Đèn chiếu sáng Halogen Projector",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat3.jpg",
          caption: "Đèn chiếu sáng Led Projector",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat4.jpg",
          caption: 'Bề mặt "Parametric Jewel"',
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat5.jpg",
          caption: "Vành 16 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat6.jpg",
          caption: "Vành 17 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat7.jpg",
          caption: "Vành 18 inch (N Line)",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat8.jpg",
          caption: "Cụm đèn hậu dạng LED (1.6 AT)",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat9.jpg",
          caption: "Cụm đèn hậu dạng LED (2.0 AT/ N Line)",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Hyundai Elentra 2025 – Khoang lái gợi cảm.",
        body: "Khoang lái của All New Elantra giống như buồng lái của phi công. Giúp người lái kiểm soát tốt hơn và dễ dàng hơn.",
      },
      lead: {
        title: "Nội Thất Hyundai Elentra 2025",
        image: "/images/cardetail/noithat/elentra/elentra-noithat3.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/elentra/elentra-noithat2.jpg",
          caption:
            "Màn hình thông tin và màn hình giải trí có cùng kích thước 10,25",
        },
        {
          img: "/images/cardetail/noithat/elentra/elentra-noithat1.jpg",
          caption:
            "Thiết kế màn hình giải trí nghiêng 10 độ về phía người lái để việc điều khiển dễ dàng hơn và trải nghiệm công nghệ được trọn vẹn hơn",
        },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title:
          "Hyundai Elentra 2025 – Dành cho những người tham vọng, táo bạo cùng sự phi thường",
        body: "Nền tảng thế hệ thứ 3 mới được phát triển của Elantra mang lại khả năng xử lý nhanh nhẹn và ổn định được hỗ trợ bởi động cơ tiết kiệm nhiên liệu, mang đến cho bạn hiệu suất lái xe tối ưu mọi lúc mọi nơi.",
      },
      lead: {
        title: "Động cơ Gamma 1.6",
        image: "/images/cardetail/vanhanh/elentra/elentra-vanhanh1.png",
        caption: null,
      },
      midBlock: {
        title: "Động cơ Nu 2.0 MPI",
        body: null,
        image: "/images/cardetail/vanhanh/elentra/elentra-vanhanh2.png",
      },
      tailBlock: {
        title: "Động cơ Smartstream G1.6 Turbo T-GDi",
        body: null,
        hero: "/images/cardetail/vanhanh/elentra/elentra-vanhanh3.png",
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai Elentra 2025 – Hệ thống an toàn Hyundai SmartSense.",
        body: "Hyundai Elentra 2025 mang đến một loạt các cải tiến của hệ thống SmartSense",
      },

      grid4: [
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan1.jpg",
          caption:
            "Hệ thống cân bằng điện tử ESC: Hệ thống cân bằng điện tử ESC sẽ phát hiện tình trạng mất kiểm soát của xe khi phanh hay chuyển hướng, đồng thời sẽ có những tác động kịp thời lên hệ thống phanh và truyền động giúp chiếc xe nhanh chóng có lại được tình trạng cân bằng và an toàn.",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan2.jpg",
          caption:
            "Hệ thống hỗ trợ khởi hành ngang dốc HAC: Hệ thống HAC sẽ giúp chiếc xe giữ nguyên vị trí đang dừng khi xe đỗ ở ngang dốc, xe sẽ di chuyển khi tài xế chuyển sang bàn đạp ga giúp bạn dễ dàng tiếp tục cuộc hành trình mà không lo xe bị tụt dốc.",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan3.jpg",
          caption:
            "Hệ thống chống bó cứng phanh ABS: Hệ thống chống bó cứng phanh ABS bao gồm các cảm biến điều tiết lực phanh của bạn tác động lên đĩa phanh, giúp giảm tốc nhanh chóng nhưng vẫn đảm bảo hướng đánh lái của vô lăng giúp xe đi đúng hướng tránh va chạm.",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan4.jpg",
          caption: "Khung thép cường lực (AHSS)",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan5.jpg",
          caption: "Phanh tay điện tử",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan6.jpg",
          caption: "Cảm biến lùi",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Hyundai Elentra 2025 – Tiện nghi thiết thực.",
        body: null,
      },
      lead: {
        title: null,
        image: null,
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi1.jpg",
          caption: "Làm mát hàng ghế trước",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tienngh2.jpg",
          caption: "Ghế lái chỉnh điện",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi3.jpg",
          caption: "Sạc không dây và Cổng sạc Type C",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi4.jpg",
          caption: "Điều hòa tự động",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi5.jpg",
          caption: "Hệ thống 8 loa Bose",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi6.jpg",
          caption: "Cửa gió hàng ghế sau, cổng sạc Type C",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật Elentra.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/elentra/elentra-thongso1.jpg",
          caption: null,
        },
      ],
    },
  },
  elentra: {
    name: "Elentra",
    price: "Giá từ 599 triệu VNĐ",
    cover: "/images/slides/elentra-hero.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/elentra/elentra-highlight1.jpg",
      // title: "New IONIQ 5",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "DR5QzKrZ4x4",
      intro: {
        eyebrow: "Hyundai",
        title: "All New Elentra 2025",
        body: "Huyndai Elantra Mới với thiết kế ‘Parametric Dynamics’ làm nổi bật tính thẩm mỹ hình học của phần mui kéo dài và các đường nét kiểu dáng đẹp, hoàn thiện phong cách sáng tạo và có tầm nhìn xa.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [
        {
          img: "/images/cardetail/highlights/elentra/elentra-highlight2.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/highlights/elentra/elentra-highlight3.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/highlights/elentra/elentra-highlight4.jpg",
          caption: null,
        },
        {
          img: "/images/cardetail/highlights/elentra/elentra-highlight5.jpg",
          caption: null,
        },
      ],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Elentra 2025 – Hiện đại, táo bạo.",
        body: "Hòa quyện những đường nét táo bạo, đậm chất tương lai là sự tinh tế, cổ điển. Hyundai Elentra 2025 sở hữu dáng vẻ tự tin, khỏe khoắn, lập tức thu hút mọi ánh nhìn. Vành hợp kim độc đáo là điểm sáng nổi bật, giúp Hyundai Elentra khẳng định vị thế riêng biệt trong phân khúc SUV phổ thông.",
      },
      lead: {
        // title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat1.jpg",
        caption: 'Lưới tản nhiệt "Parametric Jewel Pattern"',
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat2.jpg",
          caption: "Đèn chiếu sáng Halogen Projector",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat3.jpg",
          caption: "Đèn chiếu sáng Led Projector",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat4.jpg",
          caption: 'Bề mặt "Parametric Jewel"',
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat5.jpg",
          caption: "Vành 16 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat6.jpg",
          caption: "Vành 17 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat7.jpg",
          caption: "Vành 18 inch (N Line)",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat8.jpg",
          caption: "Cụm đèn hậu dạng LED (1.6 AT)",
        },
        {
          img: "/images/cardetail/ngoaithat/elentra/elentra-ngoaithat9.jpg",
          caption: "Cụm đèn hậu dạng LED (2.0 AT/ N Line)",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Hyundai Elentra 2025 – Khoang lái gợi cảm.",
        body: "Khoang lái của All New Elantra giống như buồng lái của phi công. Giúp người lái kiểm soát tốt hơn và dễ dàng hơn.",
      },
      lead: {
        title: "Nội Thất Hyundai Elentra 2025",
        image: "/images/cardetail/noithat/elentra/elentra-noithat3.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/elentra/elentra-noithat2.jpg",
          caption:
            "Màn hình thông tin và màn hình giải trí có cùng kích thước 10,25",
        },
        {
          img: "/images/cardetail/noithat/elentra/elentra-noithat1.jpg",
          caption:
            "Thiết kế màn hình giải trí nghiêng 10 độ về phía người lái để việc điều khiển dễ dàng hơn và trải nghiệm công nghệ được trọn vẹn hơn",
        },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title:
          "Hyundai Elentra 2025 – Dành cho những người tham vọng, táo bạo cùng sự phi thường",
        body: "Nền tảng thế hệ thứ 3 mới được phát triển của Elantra mang lại khả năng xử lý nhanh nhẹn và ổn định được hỗ trợ bởi động cơ tiết kiệm nhiên liệu, mang đến cho bạn hiệu suất lái xe tối ưu mọi lúc mọi nơi.",
      },
      lead: {
        title: "Động cơ Gamma 1.6",
        image: "/images/cardetail/vanhanh/elentra/elentra-vanhanh1.png",
        caption: null,
      },
      midBlock: {
        title: "Động cơ Nu 2.0 MPI",
        body: null,
        image: "/images/cardetail/vanhanh/elentra/elentra-vanhanh2.png",
      },
      tailBlock: {
        title: "Động cơ Smartstream G1.6 Turbo T-GDi",
        body: null,
        hero: "/images/cardetail/vanhanh/elentra/elentra-vanhanh3.png",
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai Elentra 2025 – Hệ thống an toàn Hyundai SmartSense.",
        body: "Hyundai Elentra 2025 mang đến một loạt các cải tiến của hệ thống SmartSense",
      },

      grid4: [
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan1.jpg",
          caption:
            "Hệ thống cân bằng điện tử ESC: Hệ thống cân bằng điện tử ESC sẽ phát hiện tình trạng mất kiểm soát của xe khi phanh hay chuyển hướng, đồng thời sẽ có những tác động kịp thời lên hệ thống phanh và truyền động giúp chiếc xe nhanh chóng có lại được tình trạng cân bằng và an toàn.",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan2.jpg",
          caption:
            "Hệ thống hỗ trợ khởi hành ngang dốc HAC: Hệ thống HAC sẽ giúp chiếc xe giữ nguyên vị trí đang dừng khi xe đỗ ở ngang dốc, xe sẽ di chuyển khi tài xế chuyển sang bàn đạp ga giúp bạn dễ dàng tiếp tục cuộc hành trình mà không lo xe bị tụt dốc.",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan3.jpg",
          caption:
            "Hệ thống chống bó cứng phanh ABS: Hệ thống chống bó cứng phanh ABS bao gồm các cảm biến điều tiết lực phanh của bạn tác động lên đĩa phanh, giúp giảm tốc nhanh chóng nhưng vẫn đảm bảo hướng đánh lái của vô lăng giúp xe đi đúng hướng tránh va chạm.",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan4.jpg",
          caption: "Khung thép cường lực (AHSS)",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan5.jpg",
          caption: "Phanh tay điện tử",
        },
        {
          img: "/images/cardetail/antoan/elentra/elentra-antoan6.jpg",
          caption: "Cảm biến lùi",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Hyundai Elentra 2025 – Tiện nghi thiết thực.",
        body: null,
      },
      lead: {
        title: null,
        image: null,
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi1.jpg",
          caption: "Làm mát hàng ghế trước",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tienngh2.jpg",
          caption: "Ghế lái chỉnh điện",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi3.jpg",
          caption: "Sạc không dây và Cổng sạc Type C",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi4.jpg",
          caption: "Điều hòa tự động",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi5.jpg",
          caption: "Hệ thống 8 loa Bose",
        },
        {
          img: "/images/cardetail/tiennghi/elentra/elentra-tiennghi6.jpg",
          caption: "Cửa gió hàng ghế sau, cổng sạc Type C",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật Elentra.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/elentra/elentra-thongso1.jpg",
          caption: null,
        },
      ],
    },
  },
  i10sedan: {
    name: "i10 Sedan",
    price: "Giá từ 380 triệu VNĐ",
    cover: "/images/slides/i10sedan.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/i10-sedan/i10-highlight1.png",
      // title: "New IONIQ 5",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "VyQLxZhMdKE",
      intro: {
        eyebrow: "Hyundai",
        title: "New Grand i10 Sedan",
        body: "New Grand i10 sở hữu kích thước lớn hàng đầu phân khúc, đem đến một không gian thoải mái tối đa. Bên cạnh đó là sự tỉ mỉ, tinh tế trên các chi tiết cùng các tiện ích.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Grand i10 Sedan Mới. Ấn tượng về sự cá tính.",
        body: "Hyundai Grand i10 Sedan mới là sự kết hợp hoàn hảo của công nghệ tiên tiến, hiệu suất mượt mà và sự an toàn mang lại niềm vui hứng khởi cho mỗi chuyến. Thiết kế mới mẻ, kích thước nhỏ gọn tạo nên vẻ ngoài tươi mới, trẻ trung, tự tin và cá tính.",
      },
      lead: {
        // title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat1.jpg",
        caption: "Ngoại Thất Hyundai i10 2025.",
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat2.jpg",
          caption: "Lưới tản nhiệt thiết kế mới",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat3.jpg",
          caption: "Đèn định vị ban ngày LED",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat4.jpg",
          caption: "Đèn chiếu sáng Halogen Projector",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat5.jpg",
          caption: "Mặt Trước Hyundai Grand i10 Sedan Mới",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat6.jpg",
          caption: "Mặt Bên Hyundai Grand i10 Sedan Mới",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat7.jpg",
          caption: "Gương chiếu hậu chỉnh điện, gập điện, có sấy",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat8.jpg",
          caption: "Vành xe thể thao kích thước 15 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat9.jpg",
          caption: "Mặt Sau Hyundai Grand i10 Sedan Mới",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-sedan/i10-ngoaithat10.jpg",
          caption: "Cụm đèn hậu dạng LED",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Hyundai Grand i10 Sedan Mới. Tiện nghi trên từng cây số.",
        body: "Khoang nội thất của Hyundai Grand i10 Sedan mới là tất cả những gì bạn cần. Đó là sự rộng rãi của không gian kết hợp cùng sự tỉ mỉ, tinh tế trên các chi tiết cùng các tiện ích vượt tầm phân khúc.",
      },
      lead: {
        title: "Nội Thất Hyundai i10 2025",
        image: "/images/cardetail/noithat/i10-sedan/i10-noithat1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/i10-sedan/i10-noithat2.jpg",
          caption: "Điều hòa chỉnh cơ",
        },
        {
          img: "/images/cardetail/noithat/i10-sedan/i10-noithat3.jpg",
          caption: "Màn hình thông tin kích thước 3.5 inch",
        },
        {
          img: "/images/cardetail/noithat/i10-sedan/i10-noithat4.jpg",
          caption:
            "Màn hình giải trí 8 inch (Apple Carplay/Android Auto có dây)",
        },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Hyundai New Grand i10 Sedan. Khả năng vận hành xuất sắc.",
        body: "Hyundai New Grand i10 Sedan được tối ưu với hệ thống khung gầm, động cơ, hộp số đem đến khả năng vận hành xuất sắc, cân bằng giữa những yếu tố bền bỉ và tiết kiệm.",
      },
      lead: {
        title: null,
        image: "/images/cardetail/vanhanh/i10-sedan/i10-vanhanh1.jpg",
        caption: null,
      },
      midBlock: {
        title: "Động cơ Kappa 1.2L",
        body: "Động cơ 4 xylanh Kappa dung tích 1.2L, đi cùng công nghệ van biến thiên CVVT, cho công suất cực đại 83 mã lực tại 6.000 vòng/phút và moment xoắn 114 Nm tại 4.000 vòng/phút.",
        image: "/images/cardetail/vanhanh/i10-sedan/i10-vanhanh2.jpg",
      },
      tailBlock: {
        title: null,
        body: null,
        hero: "/images/cardetail/vanhanh/i10-sedan/i10-vanhanh3.png",
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai New Grand i10 Sedan. An toàn vượt trội.",
        body: "Hyunda New Grand i10 Sedan với hệ thống khung gầm tối ưu cùng các trang bị an toàn mang đến sự thoải mái & an tâm trên mọi hành trình",
      },

      grid4: [
        {
          img: "/images/cardetail/antoan/i10-sedan/i10-antoan1.jpg",
          caption: "Cảm biến lùi khi đỗ xe",
        },
        {
          img: "/images/cardetail/antoan/i10-sedan/i10-antoan2.jpg",
          caption: "Cảm biến áp suất lốp",
        },
        {
          img: "/images/cardetail/antoan/i10-sedan/i10-antoan3.jpg",
          caption: "Camera lùi",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title:
          "Hyundai Grand i10 Sedan Mới. Công nghệ đỉnh cao tích hợp trong một chiếc xe nhỏ gọn.",
        body: "Những chuyến hành trình của bạn sẽ trở nên thú vị với những công nghệ tiện ích được trang bị bên trong Grand i10 Sedan Mới.",
      },
      lead: {
        title: null,
        image: null,
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/i10-sedan/i10-tiennghi1.jpg",
          caption: "Vô lăng bọc da tích hợp nút bấm điều khiển âm thanh",
        },
        {
          img: "/images/cardetail/tiennghi/i10-sedan/i10-tiennghi2.jpg",
          caption: "Nút bấm khởi động Start/Stop",
        },
        {
          img: "/images/cardetail/tiennghi/i10-sedan/i10-tiennghi3.jpg",
          caption: "Đèn nội thất",
        },
        {
          img: "/images/cardetail/tiennghi/i10-sedan/i10-tiennghi4.jpg",
          caption: "Cụm phím điều khiển media",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật i10.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/i10-sedan/i10-thongso1.jpg",
          caption: null,
        },
        {
          image: "/images/cardetail/thongso/i10-sedan/i10-thongso2.jpg",
          caption: null,
        },
      ],
    },
  },
  i10hatchback: {
    name: "i10 Hatchback",
    price: "Giá từ 360 triệu VNĐ",
    cover: "/images/slides/i10-hero.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/i10-hatback/i10-highlight1.jpg",
      // title: "New IONIQ 5",
      // subtitle: "Bứt phá mọi giới hạn.",
      videoId: "VyQLxZhMdKE",
      intro: {
        eyebrow: "Hyundai",
        title: "New Grand i10 Hatchback",
        body: "New Grand i10 Hatchback sở hữu kích thước lớn hàng đầu phân khúc, đem đến một không gian thoải mái tối đa. Bên cạnh đó là sự tỉ mỉ, tinh tế trên các chi tiết cùng các tiện ích.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Grand i10 Hatchback Mới. Ấn tượng về sự cá tính.",
        body: "Hyundai Grand i10 Hatchback mới là sự kết hợp hoàn hảo của công nghệ tiên tiến, hiệu suất mượt mà và sự an toàn mang lại niềm vui hứng khởi cho mỗi chuyến. Thiết kế mới mẻ, kích thước nhỏ gọn tạo nên vẻ ngoài tươi mới, trẻ trung, tự tin và cá tính.",
      },
      lead: {
        // title: "Thiết kế mới đậm chất SUV",
        image: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat1.jpg",
        caption: "Ngoại Thất Hyundai i10 Hatchback 2025.",
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat2.jpg",
          caption: "Mặt Trước Hyundai Grand i10 Hatchback Mới",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat3.jpg",
          caption: "Đèn chiếu sáng Halogen Projector",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat4.jpg",
          caption: "Lưới tản nhiệt thiết kế mới",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat5.jpg",
          caption: "Đèn định vị ban ngày LED",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat6.jpg",
          caption: "Mặt Bên Hyundai Grand i10 Hatchback Mới",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat7.jpg",
          caption: "Vành xe thể thao kích thước 15 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat8.jpg",
          caption: "Gương chiếu hậu chỉnh điện, gập điện, có sấy",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat9.jpg",
          caption: "Mặt Sau Hyundai Grand i10 Hatchback Mới",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat10.jpg",
          caption: "Cụm đèn hậu dạng LED",
        },
        {
          img: "/images/cardetail/ngoaithat/i10-hatback/i10-ngoaithat11.jpg",
          caption: "Đèn phanh trên cao",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Hyundai Grand i10 Hatchback Mới. Tiện nghi trên từng cây số.",
        body: "Khoang nội thất của Hyundai Grand i10 Hatchback mới là tất cả những gì bạn cần. Đó là sự rộng rãi của không gian kết hợp cùng sự tỉ mỉ, tinh tế trên các chi tiết cùng các tiện ích vượt tầm phân khúc.",
      },
      lead: {
        title: "Nội Thất Hyundai i10 Hatchback 2025",
        image: "/images/cardetail/noithat/i10-sedan/i10-noithat1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/i10-sedan/i10-noithat2.jpg",
          caption: "Điều hòa chỉnh cơ",
        },
        {
          img: "/images/cardetail/noithat/i10-sedan/i10-noithat3.jpg",
          caption: "Màn hình thông tin kích thước 3.5 inch",
        },
        {
          img: "/images/cardetail/noithat/i10-sedan/i10-noithat4.jpg",
          caption:
            "Màn hình giải trí 8 inch (Apple Carplay/Android Auto có dây)",
        },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Hyundai New Grand i10 Hatchback. Khả năng vận hành xuất sắc.",
        body: "Hyundai New Grand i10 Hatchback được tối ưu với hệ thống khung gầm, động cơ, hộp số đem đến khả năng vận hành xuất sắc, cân bằng giữa những yếu tố bền bỉ và tiết kiệm.",
      },
      lead: {
        title: null,
        image: "/images/cardetail/vanhanh/i10-hatback/i10-vanhanh1.jpg",
        caption: null,
      },
      midBlock: {
        title: "Động cơ Kappa 1.2L",
        body: "Động cơ 4 xylanh Kappa dung tích 1.2L, đi cùng công nghệ van biến thiên CVVT, cho công suất cực đại 83 mã lực tại 6.000 vòng/phút và moment xoắn 114 Nm tại 4.000 vòng/phút.",
        image: "/images/cardetail/vanhanh/i10-sedan/i10-vanhanh2.jpg",
      },
      tailBlock: {
        title: null,
        body: null,
        hero: "/images/cardetail/vanhanh/i10-sedan/i10-vanhanh3.png",
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai New Grand i10 Sedan. An toàn vượt trội.",
        body: "Hyunda New Grand i10 Sedan với hệ thống khung gầm tối ưu cùng các trang bị an toàn mang đến sự thoải mái & an tâm trên mọi hành trình",
      },

      grid4: [
        {
          img: "/images/cardetail/antoan/i10-sedan/i10-antoan1.jpg",
          caption: "Cảm biến lùi khi đỗ xe",
        },
        {
          img: "/images/cardetail/antoan/i10-sedan/i10-antoan2.jpg",
          caption: "Cảm biến áp suất lốp",
        },
        {
          img: "/images/cardetail/antoan/i10-sedan/i10-antoan3.jpg",
          caption: "Camera lùi",
        },
        {
          img: "/images/cardetail/antoan/i10-hatback/i10-antoan1.jpg",
          caption: "4 túi khí an toàn",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title:
          "Hyundai Grand i10 Hatchback Mới. Công nghệ đỉnh cao tích hợp trong một chiếc xe nhỏ gọn.",
        body: "Những chuyến hành trình của bạn sẽ trở nên thú vị với những công nghệ tiện ích được trang bị bên trong Grand i10 Hatchback Mới.",
      },
      lead: {
        title: null,
        image: "/images/cardetail/tiennghi/i10-hatback/i10-tiennghi1.jpg",
        caption: "Khởi động bằng nút bấm khởi động Start/Stop",
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/i10-hatback/i10-tiennghi2.jpg",
          caption: "Gập ghế 6:4 hàng ghế sau",
        },
        {
          img: "/images/cardetail/tiennghi/i10-hatback/i10-tiennghi3.jpg",
          caption: "Cửa gió điều hòa phía sau",
        },
        {
          img: "/images/cardetail/tiennghi/i10-hatback/i10-tiennghi4.jpg",
          caption:
            "Màn hình giải trí 8 inch có kết nối Apple Carplay & Android Auto có dây",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật i10 Hatchback.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/i10-hatback/i10-thongso1.jpg",
          caption: null,
        },
        {
          image: "/images/cardetail/thongso/i10-hatback/i10-thongso2.jpg",
          caption: null,
        },
      ],
    },
  },
  custin: {
    name: "Custin",
    price: "Giá từ 1,2 tỷ VNĐ",
    cover: "/images/slides/custin.jpg",

    // ===== NỔI BẬT =====
    highlight: {
      hero: "/images/cardetail/highlights/custin/custin1.png",
      // title: "Hyundai Custin",
      // subtitle: "MPV 7 chỗ thời thượng.",
      videoId: "oBPRWCOPpV8",
      intro: {
        eyebrow: "Hyundai",
        title: "New Custin 2025",
        body: "Hyundai Custin 2025 là mẫu MPV 7 chỗ mang phong cách hiện đại với thiết kế năng động, không gian rộng rãi và tiện nghi cao cấp. Ngoại hình ấn tượng với lưới tản nhiệt nổi khối, hệ thống đèn LED sắc sảo và dải đèn định vị độc đáo. Nội thất bố trí 3 hàng ghế linh hoạt cho gia đình, công nghệ kết nối thông minh, an toàn chủ động tiên tiến, đáp ứng hoàn hảo nhu cầu di chuyển đô thị và đường dài.",
        link: {
          text: "Liên hệ để biết thêm chi tiết",
          href: "https://zalo.me/0981543342",
        }, // đổi href nếu có
      },
      cards: [],
    },

    // ===== NGOẠI THẤT =====
    exterior: {
      header: {
        eyebrow: "Ngoại thất",
        title: "Hyundai Custin 2025 – MPV hiện đại, thanh lịch.",
        body: "Thiết kế đậm chất đô thị với các đường nét mạnh mẽ, khí động học tối ưu. Cửa trượt tiện dụng, mâm hợp kim thể thao và dải LED đặc trưng giúp Custin nổi bật trong phân khúc MPV.",
      },
      lead: {
        image: "/images/cardetail/ngoaithat/custin/custin-ngoaithat1.jpg",
        caption: "Ngoại thất Hyundai Custin 2025.",
      },
      grid4: [
        {
          img: "/images/cardetail/ngoaithat/custin/custin-ngoaithat2.jpg",
          caption: "Lưới tản nhiệt tạo hình tham số mạnh mẽ",
        },
        {
          img: "/images/cardetail/ngoaithat/custin/custin-ngoaithat3.jpg",
          caption: "Cửa trượt điện thông minh",
        },
        {
          img: "/images/cardetail/ngoaithat/custin/custin-ngoaithat4.jpg",
          caption: "Vành xe kích thước 18 inch",
        },
        {
          img: "/images/cardetail/ngoaithat/custin/custin-ngoaithat5.jpg",
          caption: "Cụm đèn hậu dạng LED",
        },
      ],
    },

    // ===== NỘI THẤT =====
    interior: {
      header: {
        eyebrow: "Nội thất",
        title: "Hyundai Custin 2025 – Không gian 7 chỗ tiện nghi.",
        body: "Khoang nội thất rộng rãi với bố cục 3 hàng ghế linh hoạt, chất liệu hoàn thiện tinh tế. Cụm màn hình đôi hiện đại, kết nối thông minh, mang đến trải nghiệm tiện nghi cho cả gia đình.",
      },
      lead: {
        title: "Nội thất Hyundai Custin 2025",
        image: "/images/cardetail/noithat/custin/custin-noithat1.jpg",
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/noithat/custin/custin-noithat2.jpg",
          caption: "Hàng ghế “Captain”",
        },
        {
          img: "/images/cardetail/noithat/custin/custin-noithat3.jpg",
          caption: "Chế độ thư giãn (Relax Mode) tiện lợi",
        },
        {
          img: "/images/cardetail/noithat/custin/custin-noithat4.jpg",
          caption: "Chế độ sưởi",
        },
        {
          img: "/images/cardetail/noithat/custin/custin-noithat5.jpg",
          caption: "Chế độ làm mát ",
        },
      ],
    },

    // ===== VẬN HÀNH =====
    performance: {
      header: {
        eyebrow: "Vận hành",
        title: "Hyundai Custin 2025 – Êm ái, tiết kiệm, linh hoạt.",
        body: "Hệ truyền động tối ưu cho đô thị và đường trường, thân xe cân bằng tốt, cách âm ấn tượng. Các chế độ lái trực quan mang lại cảm giác điều khiển tự tin.",
      },
      lead: {
        title: "Mạnh mẽ trên mọi hành trình",
        image: "/images/cardetail/vanhanh/custin/custin-vanhanh1.jpg",
        caption: null,
      },
      midBlock: {
        title: null,
        body: null,
        image: null,
      },
      tailBlock: {
        title: "4 chế độ lái: Eco, Comfort, Sport, Smart",
        body: null,
        hero: "/images/cardetail/vanhanh/custin/custin-vanhanh2.jpg",
      },
    },

    // ===== AN TOÀN =====
    safety: {
      header: {
        eyebrow: "An toàn",
        title: "Hyundai Custin 2025 – SmartSense an tâm mọi nẻo đường.",
        body: "Danh mục an toàn chủ động giúp phòng tránh rủi ro, hỗ trợ người lái tự tin hơn trong mọi tình huống giao thông.",
      },
      grid4: [
        {
          img: "/images/cardetail/antoan/custin/custin-antoan1.jpg",
          caption:
            "Hỗ trợ phòng tránh va chạm phía trước (FCA) với người đi bộ/xe đạp",
        },
        {
          img: "/images/cardetail/antoan/custin/custin-antoan2.jpg",
          caption: "Hỗ trợ giữ làn đường",
        },
        {
          img: "/images/cardetail/antoan/custin/custin-antoan3.jpg",
          caption: "Hỗ trợ phòng tránh va chạm điểm mù",
        },
        {
          img: "/images/cardetail/antoan/custin/custin-antoan4.jpg",
          caption: "Hỗ trợ phòng tránh va chạm khi lùi xe",
        },
        {
          img: "/images/cardetail/antoan/custin/custin-antoan5.jpg",
          caption: "Hỗ trợ phòng tránh va chạm phía trước",
        },
      ],
    },

    // ===== TIỆN NGHI =====
    comfort: {
      header: {
        eyebrow: "Tiện nghi",
        title: "Hyundai Custin 2025 – Tiện nghi đẳng cấp gia đình.",
        body: "Trang bị phong phú: điều hòa tự động, sạc không dây, âm thanh cao cấp, cốp điện rảnh tay… nâng trải nghiệm của mọi hành khách.",
      },
      lead: {
        title: null,
        image: null,
        caption: null,
      },
      grid4: [
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi1.jpg",
          caption: "Cốp điện & đá cốp rảnh tay",
        },
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi2.jpg",
          caption: "Cụm phím Media tích hợp trên vô lăng",
        },
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi3.jpg",
          caption: "Phanh tay điện tử cùng Auto Hold",
        },
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi4.jpg",
          caption: "Cần số điện tử dạng nút bấm",
        },
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi5.jpg",
          caption: "Cửa sổ trời đôi",
        },
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi6.jpg",
          caption: "Rèm che nắng hàng ghế 2",
        },
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi7.jpg",
          caption: "Sạc không dây cho hàng ghế 2",
        },
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi8.jpg",
          caption: "Đèn viền nội thất",
        },
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi9.jpg",
          caption: "Màn hình thông tin Full Digital",
        },
        {
          img: "/images/cardetail/tiennghi/custin/custin-tiennghi10.jpg",
          caption: "Màn hình giải trí kích thước 10.4 inch",
        },
      ],
    },

    // ===== THÔNG SỐ =====
    specBlock: {
      header: {
        eyebrow: "Thông số xe",
        title: "Bảng thông số kỹ thuật Custin.",
        body: null,
      },
      lead: [
        {
          image: "/images/cardetail/thongso/custin/custin-thongso.jpg",
          caption: null,
        },
        
      ],
    },
  },
};
