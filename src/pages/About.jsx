import LocationSection from "../components/home/LocationSection";

export default function About() {
  return (
    <div>
      <div className="max-w-5xl mx-auto px-6 py-12 leading-relaxed ">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900 text-center">
          Giới thiệu Hyundai Gia Lai
        </h1>

        <p className="mb-10 text-black text-lg max-w-3xl mx-auto">
          Hyundai, một trong những thương hiệu xe hơi hàng đầu thế giới, đã
          chinh phục không chỉ thị trường quốc tế mà còn làm say đắm lòng người
          Việt Nam bằng sự đa dạng, chất lượng và tiện nghi của các dòng xe của
          mình. Và Hyundai Gia Định không phải là ngoại lệ. Đại Lý Hyundai Đông
          Sài Gòn – Đại Lý Uỷ Quyền Chính Thức của Hyundai Thành Công Việt Nam.
          Là một trong những Đại lý kinh doanh xe Ô tô Hyundai lớn nhất tại Việt
          Nam. Để có được những thành quả này, Hyundai Đông Sài Gòn có sự hỗ trợ
          giúp đỡ từ Hyundai Thành Công và đặc biệt sự ủng hộ của Quý Khách
          hàng.
        </p>

        <figure className="my-14">
          <img
            src="/images/slides/accent-hero.jpg"
            alt="Không gian trưng bày"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-md mb-10"
          />
        </figure>

        <p className="mb-10 text-black text-lg max-w-3xl mx-auto ">
          Hyundai Gia Lai, tự hào là điểm đến lý tưởng cho những ai đang tìm
          kiếm chiếc xe mơ ước. Với đội ngũ nhân viên chuyên nghiệp, tận tâm và
          am hiểu về sản phẩm, Hyundai Gia Lai cam kết mang đến cho khách hàng
          sự phục vụ tốt nhất và trải nghiệm mua sắm thoải mái nhất.
        </p>

        <figure className="my-14">
          <img
            src="/images/slides/creta-hero.jpg"
            alt="Các dòng xe Hyundai"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-md mb-10"
          />
        </figure>

        <p className="mb-10 text-black text-lg max-w-3xl mx-auto">
          Đội ngũ tư vấn viên giàu kinh nghiệm của chúng tôi luôn sẵn sàng hỗ
          trợ quý khách lựa chọn chiếc xe phù hợp nhất.
        </p>

        <figure className="my-14">
          <img
            src="/images/slides/palisade-hero.jpg"
            alt="Đội ngũ tư vấn viên"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-md mb-10"
          />
        </figure>

        <p className="mb-10 text-black text-lg max-w-3xl mx-auto">
          Hyundai Gia Lai cung cấp các dòng xe đa dạng từ sedan, SUV đến
          hatchback và MVP đảm bảo đáp ứng mọi nhu cầu của khách hàng. Hiện tại
          Hyundai đang được phân phối tại thị trường Việt Nam các dòng xe như:
          Hyundai i10, Hyundai Accent, Hyundai Venue, Hyundai Creta, Hyundai
          Stargazer, Hyundai Tucson, Hyundai Santafe, Hyundai Custin, Hyundai
          Palisade… .Không chỉ vậy, các dịch vụ hậu mãi, bảo dưỡng và sửa chữa
          tạiHyundai Đông Sài Gòn cũng được đánh giá cao với đội ngũ kỹ thuật
          viên chuyên nghiệp và trang thiết bị hiện đại.
        </p>

        <figure className="my-14">
          <img
            src="/images/slides/tucson-hero.jpg"
            alt="Dịch vụ hậu mãi"
            className="w-full max-w-3xl mx-auto rounded-xl shadow-md mb-10"
          />
        </figure>

        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Hyundai Gia Lai hân hạnh đồng hành cùng quý khách trên mọi hành trình
          và hy vọng mang đến những trải nghiệm tuyệt vời nhất.
        </p>
      </div>
      <LocationSection />
    </div>
  );
}
