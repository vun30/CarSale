import { Phone, ClipboardEdit } from "lucide-react";

export default function FloatingContact() {
  const phone = "0981543342"; // đổi ở đây là đủ

  return (
    <>
      {/* Bên trái: Gọi điện + Đăng ký tư vấn */}
      <div className="fixed bottom-6 left-0 z-50 flex flex-col gap-2 items-start">
        {/* Gọi điện */}
        <a
          href={`tel:${phone}`}
          className="
            bg-blue-900 text-white font-semibold
            px-4 py-2.5
            flex items-center justify-center gap-2
            hover:bg-blue-800 transition
            whitespace-nowrap
            rounded-r-full shadow-md text-base
          "
          aria-label={`Gọi ${phone}`}
          title={`Gọi ${phone}`}
        >
          <Phone size={20} strokeWidth={2.2} />
          {phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}
        </a>

        {/* Đăng ký tư vấn */}
        <a
          href="/dang-ky-tu-van"
          className="
            bg-red-600 text-white font-semibold 
            px-4 py-2.5
            rounded-r-full shadow-md 
            flex items-center justify-center gap-2 
            hover:bg-red-700 transition
            whitespace-nowrap text-base
          "
        >
          <ClipboardEdit size={20} strokeWidth={2.2} />
          ĐĂNG KÍ TƯ VẤN
        </a>
      </div>

      {/* Bên phải: Zalo */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://zalo.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
          aria-label="Chat Zalo"
          title="Chat Zalo"
        >
          {/* Thẻ bọc để tạo glow hình tròn */}
          <div className="pulse-glow rounded-full p-1 bg-white/0 shadow-lg transition hover:opacity-90">
            <img
              src="/images/logo/zalo.png"
              alt="Chat Zalo"
              className="h-16 w-16 object-contain rounded-full"
            />
          </div>
        </a>
      </div>
    </>
  );
}
