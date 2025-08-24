import { Phone, ClipboardEdit } from "lucide-react";

export default function FloatingContact() {
  const phone = "0981543342"; // đổi ở đây là đủ

  return (
    <>
      {/* Bên trái: Gọi điện + Đăng ký tư vấn */}
      <div className="fixed bottom-6 left-0 z-50 flex flex-col gap-3 items-start">
        {/* Gọi điện */}
        <a
          href={`tel:${phone}`}
          className="
            bg-blue-900 text-white font-bold
            px-5 py-3
            flex items-center justify-center gap-2
            hover:bg-blue-800 transition
            whitespace-nowrap
            rounded-r-full shadow-lg text-lg
          "
          aria-label={`Gọi ${phone}`}
          title={`Gọi ${phone}`}
        >
          <Phone size={22} strokeWidth={2.5} />
          {phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}
        </a>

        {/* Đăng ký tư vấn */}
        <a
          href="/dang-ky-tu-van"
          className="
            bg-red-600 text-white font-bold 
            px-5 py-3
            rounded-r-full shadow-lg 
            flex items-center justify-center gap-2 
            hover:bg-red-700 transition
            whitespace-nowrap text-lg
          "
        >
          <ClipboardEdit size={22} strokeWidth={2.5} />
          ĐĂNG KÍ TƯ VẤN
        </a>
      </div>

      {/* Bên phải: Zalo */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={`https://zalo.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            shadow-lg hover:opacity-90 transition
            inline-block
          "
          aria-label="Chat Zalo"
          title="Chat Zalo"
        >
          <img
            src="/images/logo/zalo.png" // 👉 thay bằng logo Zalo nền trong suốt
            alt="Chat Zalo"
            className="h-16 w-auto block pulse-glow"
          />
        </a>
      </div>
    </>
  );
}
