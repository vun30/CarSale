// src/components/ContactForm.jsx
import { useMemo, useState } from "react";

const CAR_MODELS = [
  "Grand i10",
  "Tucson",
  "Santa Fe",
  "Creta",
  "Accent",
  "Elantra",
  "Venue",
  "Ioniq5",
  "Stargazer X",
  "Custin",
  "Palisade",
];

const API_URL = "https://api.hyundaigialaiofficial.com.vn/api/customers";

export default function ContactForm() {
   const defaultModel = useMemo(() => CAR_MODELS[0], []);
   const [formData, setFormData] = useState({
     name: "",
     phone: "",
     model: defaultModel,
   });
   const [status, setStatus] = useState({ type: null, message: "" });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (event) => {
     const { name, value } = event.target;
     setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = async (event) => {
     event.preventDefault();
     setStatus({ type: null, message: "" });

     const trimmedName = formData.name.trim();
     const trimmedPhone = formData.phone.trim();

     if (!trimmedName || !trimmedPhone) {
       setStatus({
         type: "error",
         message: "Vui lòng nhập đầy đủ họ tên và số điện thoại.",
       });
       return;
     }

     setIsSubmitting(true);

     try {
       const response = await fetch(API_URL, {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           phone: trimmedPhone,
           name: trimmedName,
           model: formData.model,
         }),
       });

       if (!response.ok) {
         const errorMessage = await response.text();
         throw new Error(
           errorMessage || "Gửi thông tin thất bại. Vui lòng thử lại sau."
         );
       }

       setStatus({
         type: "success",
         message: "Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm nhất.",
       });
       setFormData({ name: "", phone: "", model: defaultModel });
     } catch (error) {
       setStatus({
         type: "error",
         message: error.message || "Có lỗi xảy ra, vui lòng thử lại.",
       });
     } finally {
       setIsSubmitting(false);
     }
   };
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

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-3 md:gap-4 bg-white p-4 md:p-3 rounded-2xl md:rounded-full shadow-lg"
        >
          <select
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full md:w-auto px-4 py-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {CAR_MODELS.map((model) => (
              <option key={model} value={model}>
                {model}
              </option>
            ))}
          </select>

          {/* Họ tên */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Họ tên"
            className="flex-1 w-full px-4 py-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* SĐT */}
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
            className="flex-1 w-full px-4 py-2 rounded-full border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Nút gửi */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-6 py-2 rounded-full bg-orange-500 text-white font-semibold transition hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Đang gửi..." : "GỬI"}
          </button>
        </form>
        {status.message && (
          <p
            className={`mt-4 text-sm md:text-base ${
              status.type === "success" ? "text-green-300" : "text-red-300"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </div>
  );
}
