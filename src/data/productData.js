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
        { image: "/images/cardetail/thongso/santafe/san-thongso2.jpg", caption: null },
      ],
    },
  },
};
