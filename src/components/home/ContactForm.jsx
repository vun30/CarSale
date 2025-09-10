// src/components/ContactForm.jsx
export default function ContactForm() {
  return (
    <div
      className="relative bg-cover bg-center py-12"
      style={{ backgroundImage: "url('/pic/pali.jpg')" }} // đổi link ảnh nền
    >
      {/* Overlay tối nhẹ */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative max-w-5xl mx-auto text-center text-white">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">
          ĐỂ LẠI THÔNG TIN, CHÚNG TÔI SẼ GỌI TƯ VẤN NGAY
        </h2>

        <form className="flex flex-col md:flex-row items-center gap-3 md:gap-4 bg-white p-4 md:p-3 rounded-2xl md:rounded-full shadow-lg">
          {/* Select xe */}
          <select className="w-full md:w-auto px-4 py-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Grand i10</option>
            <option>Tucson</option>
            <option>Santa Fe</option>
            <option>Creta</option>
            <option>Accent</option>
          </select>

          {/* Họ tên */}
          <input
            type="text"
            placeholder="Họ tên"
            className="flex-1 w-full px-4 py-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* SĐT */}
          <input
            type="text"
            placeholder="Số điện thoại"
            className="flex-1 w-full px-4 py-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Nút gửi */}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            GỬI
          </button>
        </form>
      </div>
    </div>
  );
}
