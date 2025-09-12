// src/data/newsData.js
// Bản mở rộng: nội dung dài và giàu thông tin như tạp chí ô tô.
// - Chuyển các đề mục trong content sang blocks (heading + paragraph) để hiển thị đậm/đẹp.
// - Mỗi bài có content = "" (hoặc giữ lại phần thực sự cần), phần nội dung chính nằm trong blocks.
// - Tăng readingTime tương ứng.

export const newsData = [
  // ======== 1. CRETA (MỞ RỘNG RẤT DÀI) ========
  {
    id: "creta-2025-promo",
    slug: "khuyen-mai-xe-hyundai-creta-2025",
    title: "Khuyến mãi xe Hyundai Creta 2025",
    excerpt:
      "Ưu đãi tiền mặt, phụ kiện chính hãng và hỗ trợ vay hấp dẫn cho Hyundai Creta 2025 trong tháng này.",
    category: "Khuyến mãi",
    tags: ["Creta", "SUV cỡ B", "Khuyến mãi", "Giá xe", "Lăn bánh", "Tư vấn"],
    author: { name: "Hyundai Gia Lai", role: "Tư vấn bán hàng" },
    readingTime: 12,
    date: "2025-07-03T09:00:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/creta-hero.jpg",
    images: [
      {
        src: "/images/slides/creta-hero.jpg",
        alt: "Hyundai Creta 2025 - góc chéo trước",
        caption: "Thiết kế trẻ trung, dải đèn định vị LED đặc trưng.",
      },
      {
        src: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe1.jpg",
        alt: "Ngoại thất Creta 2025",
        caption: "Tỷ lệ thân xe gọn gàng, phù hợp đô thị.",
      },
      {
        src: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe2.jpg",
        alt: "Nội thất Creta",
        caption: "Khoang lái trực quan, nhiều ngăn chứa đồ.",
      },
      {
        src: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe3.jpg",
        alt: "Đuôi xe Creta",
        caption: "Cụm đèn hậu họa tiết độc đáo.",
      },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Hyundai Creta 2025 tiếp tục là lựa chọn sáng giá trong phân khúc SUV cỡ B nhờ thiết kế trẻ trung, tiện nghi thực dụng và chi phí sử dụng hợp lý. Đợt này, đại lý triển khai ưu đãi tiền mặt kèm gói phụ kiện chính hãng. Khách vay mua xe được hỗ trợ lãi suất cạnh tranh, duyệt hồ sơ nhanh trong 24–48 giờ, có nhân viên chuyên trách hướng dẫn từng bước.",
      },
      { type: "heading", level: 2, text: "Gói ưu đãi áp dụng trong tháng" },
      {
        type: "list",
        style: "unordered",
        items: [
          "Giảm trực tiếp theo phiên bản & màu xe (số lượng giới hạn).",
          "Tặng film cách nhiệt, thảm sàn, bọc vô-lăng (tùy đại lý).",
          "Hỗ trợ lãi suất ưu đãi 6–12 tháng đầu, thời hạn vay tối đa 84 tháng.",
        ],
      },
      { type: "heading", level: 2, text: "Ai nên chọn Creta?" },
      {
        type: "list",
        style: "unordered",
        items: [
          "Gia đình 3–5 người cần xe gầm cao, rộng rãi nhưng chi phí nuôi xe vừa phải.",
          "Người chạy phố nhiều, muốn vô-lăng nhẹ, tầm nhìn thoáng, camera rõ.",
          "Khách mới lần đầu mua xe cần dịch vụ sau bán bài bản, lịch bảo dưỡng minh bạch.",
        ],
      },
      {
        type: "table",
        headers: ["Hạng mục", "Chi phí định kỳ (tham khảo)"],
        rows: [
          ["Bảo dưỡng 5.000 km", "1,2–1,6 triệu đồng"],
          ["Bảo dưỡng 10.000 km", "1,8–2,4 triệu đồng"],
          ["Lọc gió/điều hòa", "150–400 nghìn đồng"],
        ],
        note: "Chi phí có thể thay đổi theo địa phương/xưởng dịch vụ và chương trình khuyến mãi.",
      },
      { type: "cta", label: "Nhận ưu đãi cá nhân hóa", href: "/lien-he" },

      // bổ sung thêm các tiểu mục chuyên sâu
      { type: "heading", level: 2, text: "Mẹo chọn phiên bản & màu xe" },
      {
        type: "list",
        style: "unordered",
        items: [
          "Đi phố nhiều, ít hành lý: bản tiêu chuẩn đã đủ, ưu tiên màu sáng để mát cabin.",
          "Đi tỉnh/đường trường: cân nhắc bản cao hơn có hỗ trợ an toàn chủ động.",
          "Nếu ngại chờ: hỏi sẵn màu xe có sẵn kho để nhận xe nhanh.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Minh họa chi phí lăn bánh & trả góp",
      },
      {
        type: "table",
        headers: ["Khoản mục", "Ước tính"],
        rows: [
          ["Giá niêm yết (tham khảo)", "≈ 665–745 triệu (tùy bản)"],
          ["Phí trước bạ/biển số/BH TNDS", "≈ 60–85 triệu (TP.HCM)"],
          ["Tổng lăn bánh", "≈ 725–830 triệu"],
          ["Trả góp 80%/84 tháng", "≈ 9–11 triệu/tháng 6–12T đầu*"],
        ],
        note: "*Áp dụng gói ưu đãi lãi suất cố định giai đoạn đầu; con số minh họa, sẽ thay đổi theo hồ sơ.",
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Trải nghiệm vận hành & tiện nghi" },
      {
        type: "paragraph",
        text: "Creta 2025 ghi điểm nhờ độ êm ở dải tốc độ đô thị, vô-lăng nhẹ nhưng vẫn đủ phản hồi, giúp việc xoay trở bãi xe ngầm hoặc ngõ hẹp trở nên tự tin. Hệ thống treo xử lý tốt các gờ giảm tốc thường gặp trong phố, hạn chế dằn xóc vào cabin. Ở tốc độ 60–80 km/h, tiếng ồn gió được kiểm soát ổn, phù hợp nhu cầu đi tỉnh ngắn cuối tuần.",
      },
      { type: "heading", level: 2, text: "Chi phí sử dụng & hậu mãi" },
      {
        type: "paragraph",
        text: "Creta có lịch bảo dưỡng định kỳ rõ ràng, phụ tùng sẵn và mức giá hợp lý. Trong điều kiện vận hành đô thị nắng nóng, bạn nên kiểm tra lọc gió điều hòa sớm hơn khuyến nghị (mỗi 8–10 nghìn km) để duy trì hiệu suất làm lạnh. Mức tiêu hao nhiên liệu thực tế dao động tùy thói quen người lái, nhưng người dùng phản ánh ổn định ở mức tiết kiệm trong nhóm SUV B.",
      },
      { type: "heading", level: 2, text: "Những điểm cần lưu ý" },
      {
        type: "paragraph",
        text: "Do định vị là xe đô thị, cách âm gầm ở mặt đường bê tông xấu có thể tăng nhẹ khi vượt ngưỡng 90 km/h; điều này có thể cải thiện phần nào bằng bộ lốp yên tĩnh hơn khi đến kỳ thay mới. Ngoài ra, nếu thường xuyên chở đủ 5 người + hành lý, hãy cân nhắc sớm option cốp chứa đồ thông minh hoặc thanh giá nóc để linh hoạt hơn.",
      },
    ],
    content: "",
    related: [
      "gia-xe-hyundai-stargazer-lan-banh-kem-khuyen-mai-thang-7",
      "gia-xe-tucson-2025-kem-khuyen-mai-thang-7",
      "huong-dan-vay-mua-xe-hyundai-2025-lai-suat-uu-dai",
    ],
    seo: {
      metaTitle: "Khuyến mãi Hyundai Creta 2025 | Giá tốt & ưu đãi",
      metaDescription:
        "Ưu đãi Creta 2025: tiền mặt, phụ kiện chính hãng, hỗ trợ vay. Bảng lăn bánh minh họa & mẹo chọn phiên bản.",
      canonical: "/tin-tuc/khuyen-mai-xe-hyundai-creta-2025",
    },
  },

  // ======== 2. STARGAZER (MỞ RỘNG) ========
  {
    id: "stargazer-2025-price",
    slug: "gia-xe-hyundai-stargazer-lan-banh-kem-khuyen-mai-thang-7",
    title: "Giá xe Hyundai Stargazer lăn bánh kèm khuyến mãi tháng 7",
    excerpt:
      "Cập nhật giá lăn bánh Hyundai Stargazer 2025 tại TP.HCM và ưu đãi lệ phí trước bạ.",
    category: "Giá xe",
    tags: ["Stargazer", "MPV", "Giá lăn bánh", "Khuyến mãi", "Gia đình 7 chỗ"],
    author: { name: "Hyundai Gia Lai", role: "Tư vấn bán hàng" },
    readingTime: 11,
    date: "2025-07-21T08:30:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/product/stargazer.png",
    images: [
      {
        src: "/images/product/stargazer.png",
        alt: "Hyundai Stargazer 2025",
        caption: "Ngoại hình hiện đại, phù hợp gia đình 7 chỗ.",
      },
      {
        src: "/images/cardetail/ngoaithat/accent/accent-ngoaithat2.jpg",
        alt: "Khoang nội thất 3 hàng ghế",
      },
      {
        src: "/images/cardetail/ngoaithat/accent/accent-ngoaithat3.jpg",
        alt: "Khoang hành lý linh hoạt",
      },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Trong tháng 7, Hyundai Stargazer 2025 có ưu đãi trực tiếp tại đại lý, đồng thời hỗ trợ lệ phí trước bạ giúp người dùng tiết kiệm chi phí ban đầu. Bảng giá lăn bánh dưới đây mang tính tham khảo tại TP.HCM, có thể chênh lệch theo thời điểm và chương trình nội bộ.",
      },
      {
        type: "table",
        headers: [
          "Phiên bản",
          "Giá niêm yết",
          "Ưu đãi (tham khảo)",
          "Lăn bánh*",
        ],
        rows: [
          ["Tiêu chuẩn", "619 triệu", "-25 triệu", "≈ 615–635 triệu"],
          ["Đặc biệt", "669 triệu", "-25 triệu", "≈ 665–685 triệu"],
          ["Cao cấp", "729 triệu", "-25 triệu", "≈ 690–710 triệu"],
        ],
        note: "*Đã gồm trước bạ, biển số, BH TNDS. Tùy thời điểm/đại lý sẽ có chênh lệch nhỏ.",
      },
      {
        type: "heading",
        level: 2,
        text: "Gợi ý chọn phiên bản theo bài toán gia đình",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Đi phố nhiều, con nhỏ: ưu tiên bản có camera sau & cảm biến đủ dùng.",
          "Đi xa thường xuyên: cân nhắc bản cao cấp với thêm công nghệ an toàn.",
          "Gia đình 3 thế hệ: chú ý độ rộng hàng 3, cách bố trí ghế & cốp khi gập.",
        ],
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Không gian & thực dụng" },
      {
        type: "paragraph",
        text: "Stargazer 2025 hướng đến gia đình trẻ nhờ ba hàng ghế thoáng, bậc lên xuống thấp, dễ tiếp cận cho người lớn tuổi và trẻ em. Hàng ghế sau có thể gập linh hoạt để mở rộng khoang hành lý; khi đi du lịch, bạn có thể xếp vali đứng, tận dụng khoảng trống dọc hai bên rất hiệu quả.",
      },
      { type: "heading", level: 2, text: "Vận hành & tiết kiệm" },
      {
        type: "paragraph",
        text: "Hệ thống treo tối ưu cho đô thị, ít dằn xóc khi qua gờ; tay lái nhẹ, phù hợp thao tác quay đầu trong hẻm nhỏ. Ở hành trình dài, khả năng cách âm gió đạt mức khá cho một mẫu MPV phổ thông. Mức tiêu hao nhiên liệu ổn định nếu bạn giữ đều ga và tận dụng chế độ ga tự động (nếu có) trên cao tốc.",
      },
      { type: "heading", level: 2, text: "Lưu ý sử dụng" },
      {
        type: "paragraph",
        text: "Khi chở đủ 7 người, hãy bố trí hành lý nhỏ/nhẹ ở khoang sau, vật nặng nên đặt giữa hàng ghế hai để cân bằng. Đừng quên kiểm tra áp suất lốp trước mỗi chuyến đi xa và thay gạt mưa đúng kỳ để đảm bảo tầm nhìn trong mưa.",
      },

      { type: "cta", label: "Nhận báo giá chi tiết", href: "/lien-he" },
    ],
    content: "",
    related: [
      "khuyen-mai-xe-hyundai-creta-2025",
      "kinh-nghiem-dang-ky-xe-2025-giay-to-chi-phi",
    ],
    seo: {
      metaTitle: "Giá lăn bánh Hyundai Stargazer 2025 & ưu đãi tháng 7",
      metaDescription:
        "Bảng lăn bánh Stargazer 2025, gợi ý chọn phiên bản theo gia đình, mẹo xếp hành lý và lưu ý sử dụng.",
      canonical:
        "/tin-tuc/gia-xe-hyundai-stargazer-lan-banh-kem-khuyen-mai-thang-7",
    },
  },

  // ======== 3. TUCSON (MỞ RỘNG) ========
  {
    id: "tucson-2025-price",
    slug: "gia-xe-tucson-2025-kem-khuyen-mai-thang-7",
    title: "Giá xe Tucson 2025 kèm khuyến mãi tháng 7",
    excerpt:
      "Tucson 2025 nâng cấp nhẹ về thiết kế, bổ sung tiện nghi và ưu đãi lãi suất cho khách hàng vay.",
    category: "Giá xe",
    tags: ["Tucson", "Crossover", "Giá xe", "Khuyến mãi", "Trải nghiệm"],
    author: { name: "Hyundai Gia Lai", role: "Tư vấn bán hàng" },
    readingTime: 12,
    date: "2025-06-14T10:15:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/tucson-hero.jpg",
    images: [
      {
        src: "/images/slides/tucson-hero.jpg",
        alt: "Hyundai Tucson 2025 - góc trước",
        caption: "Lưới tản nhiệt mới, hiệu ứng thị giác mạnh.",
      },
      {
        src: "/images/cardetail/ngoaithat/tucson/tucson-ngoaithat2.jpg",
        alt: "Khoang lái Tucson",
      },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Tucson 2025 bổ sung tiện nghi hữu dụng cho bản tiêu chuẩn và tinh chỉnh ngoại hình nuột hơn. Đại lý triển khai hỗ trợ lãi suất 0% trong 12 tháng đầu (điều kiện áp dụng), kèm gói phụ kiện lắp đặt tại xưởng chính hãng.",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Lãi suất 0%/12 tháng đầu (tùy hồ sơ).",
          "Tặng phụ kiện trị giá ~20 triệu đồng.",
          "Giao xe nhanh, đủ màu cơ bản.",
        ],
      },
      {
        type: "table",
        headers: ["Phiên bản", "Trang bị chính", "Phù hợp với ai"],
        rows: [
          [
            "Tiêu chuẩn",
            "Màn hình lớn, an toàn cơ bản",
            "Gia đình dùng đô thị",
          ],
          [
            "Đặc biệt",
            "Thêm tiện nghi, hỗ trợ lái",
            "Đi đường trường thường xuyên",
          ],
          [
            "Cao cấp",
            "An toàn chủ động đầy đủ",
            "Người dùng ưu tiên công nghệ",
          ],
        ],
      },
      { type: "cta", label: "Đặt lịch lái thử", href: "/lien-he" },
      { type: "heading", level: 2, text: "Nhược điểm cần biết" },
      {
        type: "list",
        style: "unordered",
        items: [
          "Ở mặt đường bê tông xấu, tiếng ồn lốp có thể hiện rõ trên 90 km/h.",
          "Khoang hành lý khi gập ghế phẳng rất rộng nhưng mép sàn hơi cao.",
        ],
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Trải nghiệm 400 km hỗn hợp" },
      {
        type: "paragraph",
        text: "Trong hành trình 400 km gồm 60% cao tốc và 40% quốc lộ, Tucson thể hiện độ cách âm gió tốt dưới 90 km/h. Ở dải 100–110 km/h, độ ồn tăng dần nhưng vẫn trong ngưỡng thoải mái để trò chuyện. Độ bám lái ổn định, chuyển làn nhanh chóng không gây chao thân.",
      },
      { type: "heading", level: 2, text: "Ghế ngồi & công thái học" },
      {
        type: "paragraph",
        text: "Hàng ghế trước có đỡ lưng tốt, ít mỏi vai sau 2 giờ. Bệ tỳ tay trung tâm vừa tầm, hộc chứa đồ to. Hàng ghế sau thoáng đầu gối, có cửa gió sau & cổng sạc tiện dụng cho gia đình đi xa.",
      },
      { type: "heading", level: 2, text: "Công nghệ an toàn chủ động" },
      {
        type: "paragraph",
        text: "Gói hỗ trợ giữ làn, cảnh báo điểm mù và cảnh báo phương tiện cắt ngang hoạt động nhạy nhưng không gắt. Khi đường mưa nhẹ, hệ thống vẫn đọc làn khá tự tin. Đây là điểm cộng cho người chạy quốc lộ ban đêm.",
      },
    ],
    content: "",
    related: [
      "khuyen-mai-xe-hyundai-creta-2025",
      "so-sanh-tucson-va-cx5-va-crv-2025-chon-xe-nao-cho-gia-dinh",
    ],
    seo: {
      metaTitle: "Giá xe Hyundai Tucson 2025 & ưu đãi tháng 7",
      metaDescription:
        "Ưu đãi Tucson 2025, trải nghiệm thực tế 400km, bảng chọn phiên bản và lưu ý nhược điểm.",
      canonical: "/tin-tuc/gia-xe-tucson-2025-kem-khuyen-mai-thang-7",
    },
  },

  // ======== 4. ACCENT (MỞ RỘNG) ========
  {
    id: "accent-2025-price",
    slug: "gia-xe-accent-2025-uu-dai-thang-7",
    title: "Giá xe Accent 2025: ưu đãi tháng 7 và chi phí lăn bánh",
    excerpt:
      "Accent 2025 giữ lợi thế về chi phí sử dụng, thiết kế gọn gàng và trang bị đủ dùng.",
    category: "Giá xe",
    tags: ["Accent", "Sedan hạng B", "Giá lăn bánh", "Chi phí 5 năm", "Đô thị"],
    author: { name: "Hyundai Gia Lai", role: "Chuyên viên tư vấn" },
    readingTime: 10,
    date: "2025-07-12T09:30:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/accent-hero.jpg",
    images: [
      {
        src: "/images/slides/accent-hero.jpg",
        alt: "Hyundai Accent 2025",
        caption: "Thiết kế gọn gàng, tiết kiệm nhiên liệu.",
      },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Accent 2025 phù hợp người dùng cần một mẫu sedan bền bỉ, tiết kiệm và dễ sử dụng trong phố. Ưu đãi tháng 7 tập trung hỗ trợ lệ phí trước bạ và quà tặng phụ kiện.",
      },
      {
        type: "table",
        headers: ["Phiên bản", "Giá niêm yết", "Ưu đãi", "Lăn bánh tham khảo"],
        rows: [
          ["Tiêu chuẩn", "~ 455 triệu", "Quà tặng phụ kiện", "≈ 495–505 triệu"],
          [
            "Đặc biệt",
            "~ 495 triệu",
            "Quà tặng + hỗ trợ trước bạ",
            "≈ 535–545 triệu",
          ],
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Chi phí sở hữu ước tính 5 năm (đi 12.000 km/năm)",
      },
      {
        type: "table",
        headers: ["Khoản mục", "Ước tính 5 năm"],
        rows: [
          ["Nhiên liệu", "≈ 70–90 triệu (tuỳ giá xăng và thói quen)"],
          ["Bảo dưỡng định kỳ", "≈ 15–25 triệu"],
          ["Lốp, gạt mưa, ắc-quy", "≈ 10–18 triệu"],
        ],
        note: "Con số minh họa; thực tế phụ thuộc hành trình, thói quen lái và môi trường vận hành.",
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Trải nghiệm đô thị" },
      {
        type: "paragraph",
        text: "Trong dải 0–50 km/h, Accent phản hồi chân ga mượt, vô-lăng nhẹ tạo cảm giác dễ kiểm soát khi len xe giờ cao điểm. Bán kính quay vòng nhỏ giúp quay đầu nhanh ngay trong ngõ hẹp. Điều hòa làm lạnh nhanh, đặc biệt hữu ích ở khí hậu nóng ẩm.",
      },
      { type: "heading", level: 2, text: "Đi tỉnh ngắn cuối tuần" },
      {
        type: "paragraph",
        text: "Giữ tốc 70–80 km/h, khoang cabin đủ yên tĩnh để trò chuyện; ghế ôm người vừa phải. Nếu thường xuyên chở đủ 4 người lớn, nên sắp xếp hành lý nhẹ và bơm lốp đúng chuẩn để xe không ì.",
      },
      { type: "heading", level: 2, text: "Lưu ý nhỏ" },
      {
        type: "paragraph",
        text: "Với người thích cảm giác lái thể thao, vô-lăng Accent thiên về nhẹ nhàng. Bù lại, đây chính là thế mạnh trong sử dụng hằng ngày: ít mệt, dễ chịu và chi phí nuôi xe thấp.",
      },
    ],
    content: "",
    related: ["khuyen-mai-xe-hyundai-creta-2025"],
    seo: {
      metaTitle: "Giá lăn bánh Hyundai Accent 2025 & ưu đãi tháng 7",
      metaDescription:
        "Bảng lăn bánh Accent 2025, chi phí sở hữu 5 năm, trải nghiệm đô thị và lưu ý sử dụng.",
      canonical: "/tin-tuc/gia-xe-accent-2025-uu-dai-thang-7",
    },
  },

  // ======== 5. SANTA FE (MỞ RỘNG) ========
  {
    id: "santafe-2025-overview",
    slug: "danh-gia-santafe-2025-noi-that-rong-va-da-cong-nghe",
    title: "Đánh giá Santa Fe 2025: nội thất rộng, trang bị đa công nghệ",
    excerpt:
      "Santa Fe 2025 gây ấn tượng nhờ khoang nội thất rộng rãi, nhiều công nghệ hỗ trợ lái và khả năng cách âm tốt.",
    category: "Đánh giá xe",
    tags: ["Santa Fe", "SUV 7 chỗ", "Đánh giá", "Gia đình", "Công nghệ"],
    author: { name: "Hyundai Gia Lai", role: "Chuyên viên sản phẩm" },
    readingTime: 12,
    date: "2025-06-28T14:00:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/santafe-hero.jpg",
    images: [
      {
        src: "/images/slides/santafe-hero.jpg",
        alt: "Hyundai Santa Fe 2025",
        caption: "Ngoại hình vuông vức, thực dụng hiện đại.",
      },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Santa Fe 2025 chuyển mình mạnh về thiết kế với phong cách vuông vức, thực dụng. Hàng ghế thứ ba có thể dùng cho người lớn ở hành trình ngắn. Các tính năng hỗ trợ lái nâng cao giúp giảm mệt mỏi khi chạy đường trường.",
      },
      {
        type: "table",
        headers: ["Hàng ghế", "Khoảng để chân", "Phù hợp"],
        rows: [
          ["Hàng 1", "Rộng rãi", "Lái xe/chuyến đi dài"],
          ["Hàng 2", "Thoáng", "Gia đình 3–4 người"],
          ["Hàng 3", "Đủ dùng", "Người lớn đi ngắn/trẻ em"],
        ],
      },
      { type: "cta", label: "Đăng ký lái thử Santa Fe", href: "/lien-he" },
      { type: "heading", level: 2, text: "Mẹo tận dụng khoang chứa đồ" },
      {
        type: "list",
        style: "unordered",
        items: [
          "Gập phẳng hàng 3 khi đi 5 người để có khoang chứa cực lớn.",
          "Dùng lưới chằng đồ để cố định vali cao, hạn chế xê dịch.",
          "Vật nhẹ để trên, vật nặng đặt sát lưng ghế để cân bằng.",
        ],
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Vận hành & cách âm" },
      {
        type: "paragraph",
        text: "Santa Fe mang đến cảm giác vững chãi khi ôm cua, thân xe được kiểm soát tốt nhờ hệ thống treo tối ưu. Ở tốc độ 80–90 km/h, tiếng ồn gió thấp, chỉ tăng nhẹ khi vượt 100 km/h. Khả năng vượt ổ gà, ổ voi tốt, không gây sốc cho hành khách hàng hai.",
      },
      { type: "heading", level: 2, text: "Trải nghiệm người dùng & giao diện" },
      {
        type: "paragraph",
        text: "Cụm nút vật lý được giữ lại cho các chức năng hay dùng như điều hòa, xông kính, chuyển chế độ lái. Màn hình trung tâm phản hồi mượt, giao diện dễ hiểu. Bảng đồng hồ rõ ràng, có chỉ dẫn an toàn trực quan.",
      },
      { type: "heading", level: 2, text: "Gia đình 3 thế hệ" },
      {
        type: "paragraph",
        text: "Hàng ghế ba đủ thoải mái cho chặng ngắn; khi đi dài, nên đổi chỗ theo chặng để tránh mỏi. Nếu thường xuyên chở 6–7 người, hãy cân nhắc thêm phụ kiện sạc đa cổng và rèm nắng để tối ưu tiện nghi.",
      },
    ],
    content: "",
    related: [
      "khuyen-mai-xe-hyundai-creta-2025",
      "gia-xe-tucson-2025-kem-khuyen-mai-thang-7",
      "meo-su-dung-he-thong-an-toan-hyundai-htrac-smart-sense",
    ],
    seo: {
      metaTitle:
        "Đánh giá Hyundai Santa Fe 2025 | Nội thất rộng, nhiều công nghệ",
      metaDescription:
        "Cảm giác lái vững, cách âm tốt; mẹo tận dụng khoang đồ và kinh nghiệm đi xa cho gia đình 3 thế hệ.",
      canonical: "/tin-tuc/danh-gia-santafe-2025-noi-that-rong-va-da-cong-nghe",
    },
  },

  // ======== 6. IONIQ 5 (MỞ RỘNG) ========
  {
    id: "ioniq5-2025-price",
    slug: "gia-xe-ioniq5-2025-uu-dai-pin-va-sac",
    title: "Giá xe IONIQ 5 2025: ưu đãi pin và hạ tầng sạc",
    excerpt:
      "IONIQ 5 2025 nổi bật với hệ truyền động điện, khả năng sạc nhanh và nhiều công nghệ an toàn.",
    category: "Giá xe",
    tags: ["IONIQ 5", "Xe điện", "Giá xe", "Sạc nhanh", "E-GMP", "One-pedal"],
    author: { name: "Hyundai Gia Lai", role: "Chuyên viên EV" },
    readingTime: 11,
    date: "2025-07-05T11:00:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe1.jpg",
    images: [
      {
        src: "/images/cardetail/ngoaithat/ioniq/ioniq-ngoaithe1.jpg",
        alt: "Hyundai IONIQ 5 2025",
        caption: "Thiết kế tương lai, nền tảng E-GMP.",
      },
    ],
    blocks: [
      {
        type: "list",
        style: "unordered",
        items: [
          "Tặng wallbox (tùy phiên bản/đại lý).",
          "Hỗ trợ khảo sát điện gia đình khi lắp đặt.",
          "Ưu đãi gói bảo dưỡng EV.",
        ],
      },
      {
        type: "table",
        headers: ["Hạng mục", "Ưu điểm"],
        rows: [
          ["Sạc nhanh DC", "Rút ngắn thời gian chờ đường dài"],
          ["One-pedal driving", "Giảm mỏi chân trong đô thị"],
          ["Trọng tâm thấp", "Vào cua vững, ít nghiêng thân"],
        ],
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Không gian phẳng & linh hoạt" },
      {
        type: "paragraph",
        text: "IONIQ 5 tận dụng sàn phẳng của nền tảng E-GMP, tạo ra cảm giác rộng rãi khác biệt so với xe xăng cùng kích thước. Hàng ghế có thể trượt/ngả linh hoạt để tối ưu chỗ để chân hoặc cốp.",
      },
      { type: "heading", level: 2, text: "Sạc nhanh & tái sinh năng lượng" },
      {
        type: "paragraph",
        text: "Khả năng sạc nhanh DC giúp rút ngắn thời gian dừng trên các cung đường dài. Ở đô thị, chế độ phanh tái sinh (regen) thông minh góp phần tiết kiệm năng lượng; bạn có thể làm quen dần với phong cách one-pedal để lái êm và chính xác hơn.",
      },
      { type: "heading", level: 2, text: "Chi phí vận hành" },
      {
        type: "paragraph",
        text: "Chi phí điện/100 km thường thấp hơn nhiều so với nhiên liệu hoá thạch; bảo dưỡng tổng thể đơn giản hơn do ít chi tiết cơ khí hao mòn. Khi lắp wallbox tại nhà, nên khảo sát tải điện, lắp CB chống giật và sử dụng dây dẫn đạt chuẩn.",
      },

      { type: "cta", label: "Tư vấn xe điện & hạ tầng sạc", href: "/lien-he" },
    ],
    content: "",
    related: [
      "meo-su-dung-he-thong-an-toan-hyundai-htrac-smart-sense",
      "so-sanh-tucson-va-cx5-va-crv-2025-chon-xe-nao-cho-gia-dinh",
    ],
    seo: {
      metaTitle: "Giá xe IONIQ 5 2025 & ưu đãi sạc",
      metaDescription:
        "Không gian phẳng E-GMP, sạc nhanh DC, chi phí vận hành thấp. Mẹo dùng one-pedal & an toàn sạc tại nhà.",
      canonical: "/tin-tuc/gia-xe-ioniq5-2025-uu-dai-pin-va-sac",
    },
  },

  // ======== 7. BẢNG GIÁ THÁNG 09/2025 (MỞ RỘNG) ========
  {
    id: "bang-gia-hyundai-09-2025",
    slug: "bang-gia-hyundai-09-2025-uu-dai-tong-hop",
    title: "Bảng giá Hyundai tháng 09/2025: ưu đãi & lăn bánh tham khảo",
    excerpt:
      "Tổng hợp giá niêm yết, khuyến mãi và lăn bánh tham khảo cho các mẫu Hyundai trong tháng 09/2025.",
    category: "Giá xe",
    tags: ["Bảng giá", "Khuyến mãi", "Lăn bánh", "09/2025", "Tổng hợp"],
    author: { name: "Hyundai Gia Lai", role: "Truyền thông" },
    readingTime: 10,
    date: "2025-09-02T08:00:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/creta-hero.jpg",
    images: [
      {
        src: "/images/slides/creta-hero.jpg",
        alt: "Bảng giá Hyundai 09/2025",
        caption: "Giá có thể thay đổi theo thời điểm và khu vực.",
      },
    ],
    blocks: [
      {
        type: "paragraph",
        text: "Dưới đây là bảng giá niêm yết và lăn bánh tham khảo một số mẫu Hyundai chủ lực trong tháng 09/2025. Mức ưu đãi và chi phí đăng ký có thể thay đổi theo địa phương, thời điểm và chương trình nội bộ của đại lý.",
      },
      {
        type: "table",
        headers: [
          "Mẫu xe",
          "Giá niêm yết (từ)",
          "Ưu đãi (tham khảo)",
          "Lăn bánh (TP.HCM)",
        ],
        rows: [
          ["Grand i10", "360 triệu", "Quà tặng phụ kiện", "≈ 400–420 triệu"],
          ["Accent 2025", "455 triệu", "Hỗ trợ trước bạ", "≈ 495–545 triệu"],
          [
            "Creta 2025",
            "~ 665 triệu",
            "Giảm trực tiếp/Phụ kiện",
            "≈ 725–755 triệu",
          ],
          ["Stargazer 2025", "619 triệu", "Giảm trực tiếp", "≈ 615–710 triệu"],
          [
            "Tucson 2025",
            "~ 769 triệu",
            "Lãi suất 0%* (12T)",
            "≈ 840–920 triệu",
          ],
          ["Santa Fe 2025", "1,089 tỷ", "Phụ kiện & BHVC", "≈ 1,220–1,300 tỷ"],
          [
            "IONIQ 5 2025",
            "1,2 tỷ",
            "Wallbox & dịch vụ EV",
            "≈ 1,260–1,320 tỷ",
          ],
        ],
        note: "*Chương trình lãi suất cần xét duyệt hồ sơ; lăn bánh gồm trước bạ, biển số, BH TNDS, có thể chênh lệch nhỏ.",
      },
      { type: "heading", level: 2, text: "Gợi ý nhanh theo ngân sách" },
      {
        type: "list",
        style: "unordered",
        items: [
          "≤ 600 triệu: Grand i10 (đô thị) hoặc Accent (đa dụng, tiết kiệm).",
          "600–800 triệu: Creta (gầm cao, gia đình nhỏ) hoặc Stargazer (7 chỗ).",
          "800–1.1 tỷ: Tucson (cân bằng), Santa Fe (7 chỗ cao cấp).",
          "≥ 1.2 tỷ: IONIQ 5 (EV, chi phí vận hành thấp).",
        ],
      },
      {
        type: "paragraph",
        text: "Bên cạnh giá niêm yết, các đại lý thường có chính sách nội bộ theo từng thời điểm giao xe thực tế. Nếu cần nhận xe sớm, bạn nên linh hoạt về màu ngoại thất. Với khách hàng thu đổi xe cũ, việc định giá lại sẽ dựa trên lịch sử bảo dưỡng, số km và tình trạng sơn vỏ – nên mang đầy đủ sổ dịch vụ để tối ưu giá thu vào.",
      },
      { type: "cta", label: "Nhận báo giá theo phiên bản", href: "/lien-he" },
    ],
    content: "",
    related: [
      "huong-dan-vay-mua-xe-hyundai-2025-lai-suat-uu-dai",
      "kinh-nghiem-dang-ky-xe-2025-giay-to-chi-phi",
      "gia-xe-tucson-2025-kem-khuyen-mai-thang-7",
    ],
    seo: {
      metaTitle: "Bảng giá Hyundai 09/2025 | Ưu đãi & lăn bánh",
      metaDescription:
        "Tổng hợp giá Hyundai tháng 09/2025, ưu đãi và lăn bánh tham khảo. Gợi ý chọn xe theo ngân sách.",
      canonical: "/tin-tuc/bang-gia-hyundai-09-2025-uu-dai-tong-hop",
    },
  },

  // ======== 8. SO SÁNH CUV (MỞ RỘNG) ========
  {
    id: "compare-cuv-2025",
    slug: "so-sanh-tucson-va-cx5-va-crv-2025-chon-xe-nao-cho-gia-dinh",
    title: "So sánh Tucson vs CX-5 vs CR-V 2025: chọn xe nào cho gia đình?",
    excerpt:
      "So sánh nhanh 3 mẫu CUV ăn khách về không gian, trang bị, chi phí nuôi xe và giá trị bán lại.",
    category: "So sánh",
    tags: ["Tucson", "CX-5", "CR-V", "So sánh", "Gia đình"],
    author: { name: "Hyundai Gia Lai", role: "Biên tập" },
    readingTime: 11,
    date: "2025-09-06T09:20:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/tucson-hero.jpg",
    images: [{ src: "/images/slides/tucson-hero.jpg", alt: "Tucson 2025" }],
    blocks: [
      {
        type: "paragraph",
        text: "Ở tầm giá 800–1 tỷ đồng, Tucson, CX-5 và CR-V là 3 lựa chọn phổ biến cho gia đình. Dưới đây là bảng so sánh nhanh các tiêu chí quan trọng để bạn dễ cân nhắc.",
      },
      {
        type: "table",
        headers: ["Tiêu chí", "Tucson 2025", "CX-5 2025", "CR-V 2025"],
        rows: [
          [
            "Không gian",
            "Rộng rãi, tối ưu khoang sau",
            "Đủ dùng",
            "Rất rộng (3 hàng ghế)",
          ],
          ["Vận hành", "Êm, cách âm tốt", "Chắc tay", "Mượt, tiết kiệm"],
          ["Công nghệ an toàn", "Đầy đủ gói chủ động", "Đủ dùng", "Rất đầy đủ"],
          ["Chi phí nuôi xe", "Hợp lý", "Hợp lý", "Nhỉnh hơn"],
          ["Giá trị bán lại", "Tốt", "Tốt", "Rất tốt"],
        ],
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Ưu tiên yên tĩnh & tiện nghi: Tucson.",
          "Thích cảm giác lái đằm tay: CX-5.",
          "Gia đình đông, hay đi xa: CR-V (3 hàng ghế).",
        ],
      },
      {
        type: "paragraph",
        text: "Sự khác biệt lớn nằm ở không gian & chất treo. Tucson cân bằng giữa êm ái và ổn định; CX-5 thiên về lái sướng; CR-V tối ưu chỗ ngồi. Hãy chạy thử cả ba nếu có thể: cảm giác vô-lăng, tầm nhìn và độ êm mới là thứ quyết định cuối cùng.",
      },
      { type: "cta", label: "Đăng ký lái thử Tucson", href: "/lien-he" },
    ],
    content: "",
    related: [
      "gia-xe-tucson-2025-kem-khuyen-mai-thang-7",
      "bang-gia-hyundai-09-2025-uu-dai-tong-hop",
    ],
    seo: {
      metaTitle: "So sánh Tucson vs CX-5 vs CR-V 2025 | Chọn xe gia đình",
      metaDescription:
        "Bảng so sánh tiêu chí chính và gợi ý chọn theo nhu cầu thực tế gia đình.",
      canonical:
        "/tin-tuc/so-sanh-tucson-va-cx5-va-crv-2025-chon-xe-nao-cho-gia-dinh",
    },
  },

  // ======== 9. HƯỚNG DẪN VAY (MỞ RỘNG) ========
  {
    id: "loan-2025-guide",
    slug: "huong-dan-vay-mua-xe-hyundai-2025-lai-suat-uu-dai",
    title: "Hướng dẫn vay mua xe Hyundai 2025: lãi suất & hồ sơ cần chuẩn bị",
    excerpt:
      "Tổng hợp lãi suất ưu đãi, cách tính khoản trả hàng tháng và danh mục hồ sơ cần có khi vay mua xe.",
    category: "Tư vấn",
    tags: ["Vay mua xe", "Lãi suất", "Tài chính", "Hồ sơ", "Trả góp"],
    author: { name: "Hyundai Gia Lai", role: "Chuyên viên tài chính" },
    readingTime: 11,
    date: "2025-08-28T10:00:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/accent-hero.jpg",
    images: [{ src: "/images/slides/accent-hero.jpg", alt: "Tư vấn vay 2025" }],
    blocks: [
      {
        type: "table",
        headers: ["Gói vay", "Ưu đãi lãi suất", "Tỷ lệ vay tối đa", "Thời hạn"],
        rows: [
          [
            "Chuẩn",
            "Từ ~7,5%/năm (6–12 tháng)",
            "80–85% giá trị xe",
            "Tối đa 84 tháng",
          ],
          ["Siêu nhanh", "Từ ~8,2%/năm (6 tháng)", "70–80%", "Tối đa 60 tháng"],
        ],
        note: "Con số tham khảo, phụ thuộc hồ sơ và ngân hàng.",
      },
      { type: "heading", level: 2, text: "Hồ sơ cơ bản cần chuẩn bị" },
      {
        type: "list",
        style: "unordered",
        items: [
          "CMND/CCCD, hộ khẩu/tạm trú.",
          "Sao kê lương, HĐ lao động/giấy tờ chứng minh thu nhập.",
          "Giấy tờ tài sản khác (nếu có) để tăng hạn mức.",
        ],
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Cách ước tính khoản trả tháng" },
      {
        type: "paragraph",
        text: "Một phép tính nhanh: với khoản vay 600 triệu, lãi suất ưu đãi 8%/năm cố định 12 tháng đầu, số tiền trả tháng sẽ khoảng 9–11 triệu trong giai đoạn ưu đãi, sau đó điều chỉnh theo lãi suất thả nổi. Nên đặt mục tiêu chi phí trả góp không vượt 30–40% tổng thu nhập gia đình để an toàn dòng tiền.",
      },
      { type: "heading", level: 2, text: "Mẹo duyệt hồ sơ nhanh" },
      {
        type: "paragraph",
        text: "Giữ lịch sử tín dụng tốt, trả nợ đúng hạn; cung cấp chứng từ thu nhập rõ ràng; xác nhận công ty/đơn vị công tác để ngân hàng kiểm tra thuận tiện. Nếu tự doanh, nên chuẩn bị báo cáo doanh thu đơn giản và hoá đơn đầu vào/ra tiêu biểu.",
      },

      { type: "cta", label: "Được tư vấn gói vay phù hợp", href: "/lien-he" },
    ],
    content: "",
    related: [
      "bang-gia-hyundai-09-2025-uu-dai-tong-hop",
      "khuyen-mai-xe-hyundai-creta-2025",
    ],
    seo: {
      metaTitle: "Vay mua xe Hyundai 2025 | Lãi suất & hồ sơ",
      metaDescription:
        "Cách tính trả góp, mẹo duyệt hồ sơ nhanh và lưu ý ngân sách an toàn khi mua xe.",
      canonical: "/tin-tuc/huong-dan-vay-mua-xe-hyundai-2025-lai-suat-uu-dai",
    },
  },

  // ======== 10. ĐĂNG KÝ XE (MỞ RỘNG) ========
  {
    id: "register-vehicle-2025",
    slug: "kinh-nghiem-dang-ky-xe-2025-giay-to-chi-phi",
    title: "Kinh nghiệm đăng ký xe 2025: giấy tờ & các khoản phí cần lưu ý",
    excerpt:
      "Checklist giấy tờ, các bước đăng ký xe mới và ước tính những khoản phí bắt buộc khi lăn bánh.",
    category: "Tư vấn",
    tags: ["Đăng ký xe", "Phí trước bạ", "Thủ tục", "Bảo hiểm", "Biển số"],
    author: { name: "Hyundai Gia Lai", role: "CSKH" },
    readingTime: 10,
    date: "2025-08-20T09:00:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/creta-hero.jpg",
    images: [
      { src: "/images/slides/creta-hero.jpg", alt: "Hướng dẫn đăng ký xe" },
    ],
    blocks: [
      {
        type: "list",
        style: "unordered",
        items: [
          "Hóa đơn mua bán, phiếu kiểm tra chất lượng xuất xưởng.",
          "Giấy tờ cá nhân (CCCD/hộ khẩu).",
          "Chứng từ nộp lệ phí trước bạ, phí đăng ký biển số.",
        ],
      },
      {
        type: "table",
        headers: ["Khoản phí", "Mức thu (tham khảo)"],
        rows: [
          ["Lệ phí trước bạ", "10–12% tùy địa phương"],
          ["Phí đăng ký biển số", "200 nghìn – 20 triệu"],
          ["BH TNDS bắt buộc", "≈ 480–1.000 nghìn/năm"],
        ],
        note: "Mức thu có thể điều chỉnh theo quy định từng địa phương và thời điểm.",
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Quy trình rút gọn" },
      {
        type: "paragraph",
        text: "1) Ký hợp đồng mua bán – 2) Nộp trước bạ – 3) Đăng ký biển số – 4) Đăng kiểm – 5) Nhận cavet (đăng ký xe). Đại lý có thể hỗ trợ trọn gói giúp bạn tiết kiệm thời gian xếp hàng.",
      },
      { type: "heading", level: 2, text: "Mẹo tránh sót giấy tờ" },
      {
        type: "paragraph",
        text: "Photo sẵn 3–5 bản CMND/CCCD & hộ khẩu/tạm trú; lưu bản scan trong điện thoại. Kiểm tra kỹ thông tin khung, máy trên hoá đơn và phiếu xuất xưởng khớp với thực tế xe.",
      },

      { type: "cta", label: "Hỗ trợ thủ tục nhanh chóng", href: "/lien-he" },
    ],
    content: "",
    related: [
      "bang-gia-hyundai-09-2025-uu-dai-tong-hop",
      "gia-xe-hyundai-stargazer-lan-banh-kem-khuyen-mai-thang-7",
    ],
    seo: {
      metaTitle: "Kinh nghiệm đăng ký xe 2025 | Giấy tờ & chi phí",
      metaDescription:
        "Quy trình rút gọn, bảng phí tham khảo và mẹo chuẩn bị hồ sơ đăng ký xe mới.",
      canonical: "/tin-tuc/kinh-nghiem-dang-ky-xe-2025-giay-to-chi-phi",
    },
  },

  // ======== 11. BẢO DƯỠNG 10.000 KM (MỞ RỘNG) ========
  {
    id: "bao-duong-10k-2025",
    slug: "bao-duong-10000km-hyundai-2025-muc-kiem-tra-chi-phi",
    title: "Bảo dưỡng 10.000 km Hyundai 2025: mục kiểm tra & chi phí",
    excerpt:
      "Danh mục kiểm tra, thời điểm thay thế vật tư và ước tính chi phí bảo dưỡng 10.000 km.",
    category: "Bảo dưỡng",
    tags: ["Bảo dưỡng", "10.000 km", "Chi phí", "Lịch bảo dưỡng", "Mẹo xưởng"],
    author: { name: "Hyundai Gia Lai", role: "Cố vấn dịch vụ" },
    readingTime: 9,
    date: "2025-08-05T08:30:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/tucson-hero.jpg",
    images: [
      { src: "/images/slides/tucson-hero.jpg", alt: "Bảo dưỡng 10.000 km" },
    ],
    blocks: [
      {
        type: "list",
        style: "unordered",
        items: [
          "Thay dầu động cơ, lọc dầu.",
          "Kiểm tra phanh, lốp, hệ thống treo.",
          "Vệ sinh lọc gió động cơ/điều hòa (tùy tình trạng).",
        ],
      },
      {
        type: "table",
        headers: ["Hạng mục", "Chi phí tham khảo"],
        rows: [
          ["Dầu + lọc dầu", "900 nghìn – 1,5 triệu"],
          ["Kiểm tra tổng quát", "Miễn phí tại xưởng chính hãng"],
          ["Lọc gió động cơ", "150–300 nghìn"],
        ],
        note: "Chi phí khác nhau theo mẫu xe & loại dầu.",
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Khi nào nên rút ngắn chu kỳ?" },
      {
        type: "paragraph",
        text: "Nếu thường xuyên chạy đường ngập bụi, kẹt xe kéo dài hoặc đỗ nắng lâu, hãy kiểm tra lọc gió/điều hòa sớm hơn khuyến nghị. Hơi ẩm tích tụ dễ gây mùi khó chịu – vệ sinh dàn lạnh định kỳ sẽ giúp điều hòa làm lạnh sâu và sạch hơn.",
      },
      { type: "heading", level: 2, text: "Gợi ý nhỏ tại xưởng" },
      {
        type: "paragraph",
        text: "Trao đổi trước với cố vấn về ngân sách dự kiến để được đề xuất vật tư hợp lý; kiểm tra cùng kỹ thuật viên các hạng mục đã thực hiện; xin giữ lại phụ tùng thay thế để đối chiếu khi cần.",
      },

      { type: "cta", label: "Đặt lịch bảo dưỡng", href: "/lien-he" },
    ],
    content: "",
    related: ["meo-su-dung-he-thong-an-toan-hyundai-htrac-smart-sense"],
    seo: {
      metaTitle: "Bảo dưỡng 10.000 km Hyundai 2025 | Danh mục & chi phí",
      metaDescription:
        "Khi nào rút ngắn chu kỳ, mẹo giữ điều hòa sạch và cách làm việc hiệu quả với cố vấn dịch vụ.",
      canonical: "/tin-tuc/bao-duong-10000km-hyundai-2025-muc-kiem-tra-chi-phi",
    },
  },

  // ======== 12. MẸO AN TOÀN (MỞ RỘNG) ========
  {
    id: "safety-tips-2025",
    slug: "meo-su-dung-he-thong-an-toan-hyundai-htrac-smart-sense",
    title:
      "Mẹo sử dụng hệ thống an toàn Hyundai: HTRAC & SmartSense hiệu quả hơn",
    excerpt:
      "Giải thích nhanh các tính năng hỗ trợ lái và mẹo dùng để hệ thống can thiệp êm, chính xác.",
    category: "Kinh nghiệm",
    tags: ["An toàn", "HTRAC", "SmartSense", "Hỗ trợ lái", "Cài đặt"],
    author: { name: "Hyundai Gia Lai", role: "Hướng dẫn viên lái thử" },
    readingTime: 9,
    date: "2025-08-09T09:30:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/santafe-hero.jpg",
    images: [
      {
        src: "/images/slides/santafe-hero.jpg",
        alt: "Hệ thống an toàn Hyundai",
      },
    ],
    blocks: [
      {
        type: "table",
        headers: ["Tính năng", "Tác dụng"],
        rows: [
          ["LFA/LKA", "Giữ xe theo làn/đường, cảnh báo chệch làn"],
          ["FCA", "Phanh khẩn cấp chủ động"],
          ["SCC", "Ga tự động thích ứng xe phía trước"],
        ],
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Thiết lập ban đầu" },
      {
        type: "paragraph",
        text: "Sau khi nhận xe, hãy vào phần cài đặt trợ lái để chọn độ nhạy cảnh báo và khoảng cách an toàn phù hợp thói quen chạy xe. Luôn giữ tay nhẹ trên vô-lăng khi kích hoạt hỗ trợ giữ làn để hệ thống nhận diện bạn đang chủ động điều khiển.",
      },
      { type: "heading", level: 2, text: "Khi nào nên tắt tạm thời?" },
      {
        type: "paragraph",
        text: "Ở các đoạn sửa đường, vạch sơn mờ hoặc khu vực có vạch phụ nhiều lớp, hệ thống có thể hiểu nhầm. Lúc này, tắt tạm thời hỗ trợ giữ làn để chủ động điều hướng, sau đó bật lại khi điều kiện vạch sơn rõ ràng.",
      },

      {
        type: "cta",
        label: "Hẹn lịch trải nghiệm tính năng",
        href: "/lien-he",
      },
    ],
    content: "",
    related: ["danh-gia-santafe-2025-noi-that-rong-va-da-cong-nghe"],
    seo: {
      metaTitle: "Mẹo dùng an toàn Hyundai | HTRAC & SmartSense",
      metaDescription:
        "Thiết lập độ nhạy cảnh báo, khi nào nên tắt tạm thời và mẹo giữ tay trên vô-lăng để hệ thống hoạt động mượt.",
      canonical:
        "/tin-tuc/meo-su-dung-he-thong-an-toan-hyundai-htrac-smart-sense",
    },
  },

  // ======== 13. LÁI THỬ ACCENT (MỞ RỘNG) ========
  {
    id: "accent-drive-urban-2025",
    slug: "trai-nghiem-lai-thu-accent-2025-trong-do-thi",
    title:
      "Trải nghiệm lái thử Accent 2025 trong đô thị: tiết kiệm & linh hoạt",
    excerpt:
      "Đánh giá nhanh khả năng xoay trở, tầm nhìn và độ êm của Accent 2025 khi di chuyển nội đô.",
    category: "Trải nghiệm",
    tags: ["Accent", "Đô thị", "Lái thử", "Tiết kiệm", "Thực tế"],
    author: { name: "Hyundai Gia Lai", role: "Test Driver" },
    readingTime: 9,
    date: "2025-08-30T15:30:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/accent-hero.jpg",
    images: [
      { src: "/images/slides/accent-hero.jpg", alt: "Accent 2025 nội đô" },
    ],
    blocks: [
      {
        type: "list",
        style: "unordered",
        items: [
          "Tiết kiệm xăng tốt ở dải 30–50 km/h.",
          "Điều hòa làm lạnh nhanh, giữ cabin ổn định.",
          "Camera sau rõ, hỗ trợ đỗ hẹp.",
        ],
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Hành trình thử tiêu chuẩn" },
      {
        type: "paragraph",
        text: "Lộ trình gồm 8 km nội đô giờ cao điểm, 5 km đường ven sông thoáng và 2 km dốc hầm gửi xe. Accent vượt bài nhẹ nhàng, chân ga tuyến tính, hộp số sang số êm. Khi leo dốc hầm, xe không hụt hơi, duy trì tốc độ ổn định.",
      },
      { type: "heading", level: 2, text: "Tầm nhìn & công thái học" },
      {
        type: "paragraph",
        text: "Cột A gọn, gương hậu bố trí hợp lý, hạn chế điểm mù. Ghế ngồi nâng hạ vừa tầm; hành khách sau có khoảng để chân đủ thoải mái cho hành trình 30–60 phút trong phố.",
      },

      { type: "cta", label: "Đặt lịch lái thử Accent", href: "/lien-he" },
    ],
    content: "",
    related: ["gia-xe-accent-2025-uu-dai-thang-7"],
    seo: {
      metaTitle: "Lái thử Accent 2025 đô thị | Tiết kiệm & linh hoạt",
      metaDescription:
        "Lộ trình thử tiêu chuẩn, đánh giá chân ga – hộp số – tầm nhìn và điểm cộng cho đi phố hằng ngày.",
      canonical: "/tin-tuc/trai-nghiem-lai-thu-accent-2025-trong-do-thi",
    },
  },

  // ======== 14. BẢO HIỂM THÂN VỎ (MỞ RỘNG) ========
  {
    id: "faq-insurance-2025",
    slug: "hoi-dap-bao-hiem-than-vo-oto-2025-nen-mua-khong",
    title: "Hỏi – đáp bảo hiểm thân vỏ ô tô 2025: có nên mua không?",
    excerpt:
      "Giải đáp thắc mắc thường gặp về phạm vi bảo hiểm, mức khấu trừ và khi nào nên mua bảo hiểm thân vỏ.",
    category: "Tư vấn",
    tags: ["Bảo hiểm", "Thân vỏ", "Phạm vi chi trả", "Khấu trừ", "Tư vấn"],
    author: { name: "Hyundai Gia Lai", role: "CSKH" },
    readingTime: 9,
    date: "2025-09-04T11:45:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/creta-hero.jpg",
    images: [
      { src: "/images/slides/creta-hero.jpg", alt: "Bảo hiểm thân vỏ ô tô" },
    ],
    blocks: [
      { type: "heading", level: 2, text: "Câu hỏi thường gặp" },
      {
        type: "list",
        style: "unordered",
        items: [
          "Bảo hiểm thân vỏ chi trả khi va quệt, thiên tai (tùy gói).",
          "Mức khấu trừ: 500 nghìn – 2 triệu/lần (tham khảo).",
          "Không chi trả hao mòn tự nhiên/phụ kiện ngoài hợp đồng.",
        ],
      },
      {
        type: "table",
        headers: ["Tình huống", "Khả năng chi trả"],
        rows: [
          ["Xước cánh cửa khi đỗ xe", "Có (trừ khấu trừ)"],
          ["Ngập nước nhẹ", "Có (tùy điều kiện hợp đồng)"],
          ["Thay đồ chơi ngoài", "Không"],
        ],
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Khi nào nên mua?" },
      {
        type: "paragraph",
        text: "Xe đỗ ngoài trời thường xuyên, chạy phố đông hay khu vực mưa bão theo mùa nên cân nhắc mua ngay từ năm đầu. Nếu xe mới và giá trị cao, bảo hiểm thân vỏ giúp bạn giảm rủi ro đáng kể về chi phí sơn/phục hồi.",
      },

      { type: "cta", label: "Tư vấn gói bảo hiểm phù hợp", href: "/lien-he" },
    ],
    content: "",
    related: ["kinh-nghiem-dang-ky-xe-2025-giay-to-chi-phi"],
    seo: {
      metaTitle: "Bảo hiểm thân vỏ ô tô 2025 | Có nên mua?",
      metaDescription:
        "FAQ phạm vi chi trả, mức khấu trừ; tình huống điển hình và khi nào nên mua để tối ưu rủi ro.",
      canonical: "/tin-tuc/hoi-dap-bao-hiem-than-vo-oto-2025-nen-mua-khong",
    },
  },

  // ======== 15. CHĂM SÓC XE MÙA MƯA (MỞ RỘNG) ========
  {
    id: "rain-care-2025",
    slug: "cham-soc-xe-mua-mua-2025-chong-am-moc-va-kinh-mo",
    title: "Chăm sóc xe mùa mưa 2025: chống ẩm mốc & xử lý kính mờ",
    excerpt:
      "Mẹo sử dụng điều hòa, chống bám hơi kính và xử lý mùi ẩm mốc trong khoang lái khi trời mưa.",
    category: "Kinh nghiệm",
    tags: ["Mùa mưa", "Kính mờ", "Khử mùi", "Điều hòa", "Bảo dưỡng nhẹ"],
    author: { name: "Hyundai Gia Lai", role: "Cố vấn kỹ thuật" },
    readingTime: 9,
    date: "2025-07-29T08:10:00+07:00",
    updatedAt: "2025-09-12T09:10:00+07:00",
    cover: "/images/slides/santafe-hero.jpg",
    images: [
      { src: "/images/slides/santafe-hero.jpg", alt: "Chăm sóc xe mùa mưa" },
    ],
    blocks: [
      {
        type: "list",
        style: "unordered",
        items: [
          "Bật sấy kính, hướng gió lên kính trước khi mờ nhiều.",
          "Giữ lọc gió điều hòa sạch, thay đúng kỳ.",
          "Vệ sinh thảm sàn, phơi khô để tránh ẩm mốc.",
        ],
      },
      {
        type: "table",
        headers: ["Vật tư", "Chu kỳ (khuyến nghị)"],
        rows: [
          ["Lọc gió điều hòa", "10.000–15.000 km"],
          ["Nước rửa kính", "Bổ sung khi cần"],
          ["Gạt mưa", "12 tháng/lần hoặc khi bị sọc"],
        ],
      },

      // === Chuyển content sang heading + paragraph ===
      { type: "heading", level: 2, text: "Xử lý kính mờ nhanh" },
      {
        type: "paragraph",
        text: "Nguyên nhân chính là chênh lệch nhiệt độ & độ ẩm trong/ngoài xe. Bật sấy kính, tăng gió hướng lên kính, mở lấy gió ngoài một lúc để cân bằng – kính sẽ trong trở lại nhanh chóng.",
      },
      { type: "heading", level: 2, text: "Khử mùi ẩm mốc" },
      {
        type: "paragraph",
        text: "Vệ sinh thảm sàn & khoang để đồ định kỳ, mở hé cửa khi đỗ nơi an toàn để thoát ẩm. Nếu mùi vẫn còn, kiểm tra ron cửa & sàn khoang hành lý để phát hiện sớm điểm rò nước.",
      },

      { type: "cta", label: "Đặt lịch vệ sinh nội thất", href: "/lien-he" },
    ],
    content: "",
    related: ["bao-duong-10000km-hyundai-2025-muc-kiem-tra-chi-phi"],
    seo: {
      metaTitle: "Chăm sóc xe mùa mưa 2025 | Kính mờ & ẩm mốc",
      metaDescription:
        "Quy trình xử lý kính mờ nhanh, mẹo khử mùi ẩm trong cabin và lịch thay vật tư cơ bản mùa mưa.",
      canonical: "/tin-tuc/cham-soc-xe-mua-mua-2025-chong-am-moc-va-kinh-mo",
    },
  },
];

export default newsData;
