import { useState, useEffect } from "react";
import { Phone, ClipboardEdit, Copy, Minimize2, Maximize2 } from "lucide-react";

export default function FloatingContact() {
  const phone = "0981543342"; // đổi ở đây là đủ
  const formatted = `${phone.slice(0, 4)} ${phone.slice(4, 7)} ${phone.slice(
    7
  )}`;

  // Chỉ 1 chế độ "Thu gọn" => chuyển toàn bộ sang icon-only (không ẩn hẳn)
  const [mini, setMini] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      setMini(localStorage.getItem("fc-mini") === "1");
    } catch (error) {
      console.warn("Không thể đọc trạng thái thu gọn", error);
    }
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("fc-mini", mini ? "1" : "0");
    } catch (error) {
      console.warn("Không thể lưu trạng thái thu gọn", error);
    }
  }, [mini]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard?.writeText(phone);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (error) {
      console.warn("Không thể lưu trạng thái thu gọn", error);
    }
  };

  // Kích thước nhỏ mặc định; khi mini=true thì chuyển sang icon-only
  const smallPad = "px-3 py-2";
  const iconCircle = "h-8 w-8"; // full-mode icon circle

  return (
    <>
      {/* Nút bật/tắt Thu gọn */}
      <div className="mb-8 fixed bottom-28 left-3 z-[60] print:hidden">
        <button
          type="button"
          onClick={() => setMini((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur ring-1 ring-slate-200 shadow hover:shadow-md transition active:scale-95"
          aria-label={mini ? "Mở rộng nút liên hệ" : "Thu gọn về icon"}
          title={mini ? "Mở rộng" : "Thu gọn"}
        >
          {mini ? (
            <Maximize2 className="h-5 w-5" />
          ) : (
            <Minimize2 className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Cụm nút bên trái */}
      <div className="fixed bottom-6 left-3 z-[60] print:hidden flex flex-col items-start gap-2">
        {mini ? (
          // === MINI MODE: chỉ icon tròn ===
          <>
            <a
              href={`tel:${phone}`}
              className="grid h-12 w-12 place-items-center rounded-full text-white shadow-[0_8px_28px_rgba(0,44,95,.35)] ring-1 ring-white/20 bg-gradient-to-br from-[#002c5f] via-[#0b57a5] to-[#24a2ff] transition hover:scale-105 active:scale-95"
              aria-label={`Gọi ${phone}`}
              title={`Gọi ${phone}`}
            >
              <Phone className="h-5 w-5" strokeWidth={2.2} />
            </a>

            <button
              onClick={() =>
                window.dispatchEvent(new Event("open-contact-modal"))
              }
              className="grid h-12 w-12 place-items-center rounded-full text-white shadow-[0_8px_28px_rgba(190,18,60,.4)] ring-1 ring-white/20 bg-gradient-to-br from-rose-600 via-rose-500 to-rose-400 transition hover:scale-105 active:scale-95"
              aria-label="Mở form đăng ký tư vấn"
              title="Đăng ký tư vấn"
            >
              <ClipboardEdit className="h-5 w-5" strokeWidth={2.2} />
            </button>
          </>
        ) : (
          // === FULL (NHỎ GỌN): icon + text ngắn ===
          <>
            <a
              href={`tel:${phone}`}
              className={`group relative inline-flex items-center gap-2 rounded-full ${smallPad} text-white shadow-[0_8px_28px_rgba(0,44,95,.35)] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300/60 transition active:scale-[0.98] hover:scale-[1.02] bg-gradient-to-r from-[#002c5f] via-[#0b57a5] to-[#24a2ff]`}
              aria-label={`Gọi ${phone}`}
              title={`Gọi ${phone}`}
            >
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#1e3a8a]/20 via-[#0284c7]/20 to-[#38bdf8]/20 blur opacity-0 transition group-hover:opacity-100" />
              <span
                className={`relative flex ${iconCircle} items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm`}
              >
                <Phone className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="relative text-sm font-semibold tracking-wide">
                {formatted}
              </span>

              {/* Copy nhỏ gọn */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  copyToClipboard();
                }}
                className="relative ml-1 inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-white/30 bg-white/10 hover:bg-white/15 active:scale-95"
                aria-label="Sao chép số điện thoại"
                title="Sao chép"
              >
                <Copy className="mr-1 h-3.5 w-3.5" />
                Sao chép
                {copied && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-md bg-black text-white text-[11px] px-2 py-0.5 shadow-md">
                    Đã sao chép!
                  </span>
                )}
              </button>
            </a>

            <button
              onClick={() =>
                window.dispatchEvent(new Event("open-contact-modal"))
              }
              className={`group relative inline-flex items-center gap-2 rounded-full ${smallPad} font-semibold text-white shadow-[0_8px_28px_rgba(190,18,60,.4)] focus:outline-none focus-visible:ring-4 focus-visible:ring-rose-300/60 transition active:scale-[0.98] hover:scale-[1.02] bg-gradient-to-r from-rose-600 via-rose-500 to-rose-400`}
              aria-label="Mở form đăng ký tư vấn"
              title="Đăng ký tư vấn"
            >
              <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-rose-600/20 via-rose-500/20 to-rose-400/20 blur opacity-0 transition group-hover:opacity-100" />
              <span
                className={`relative flex ${iconCircle} items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm`}
              >
                <ClipboardEdit className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="relative text-sm">ĐĂNG KÝ TƯ VẤN</span>
            </button>
          </>
        )}
      </div>

      {/* Zalo bên phải: tự nhỏ lại khi mini */}
      <div className="fixed bottom-6 right-6 z-[60] print:hidden">
        <a
          href={`https://zalo.me/${phone}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block"
          aria-label="Chat Zalo"
          title="Chat Zalo"
        >
          <span
            className={`pointer-events-none absolute inset-0 ${
              mini ? "-m-1" : "-m-2"
            } rounded-full animate-ping bg-sky-400/25 group-hover:bg-sky-500/30`}
          />
          <span
            className={`relative grid ${
              mini ? "h-12 w-12" : "h-14 w-14"
            } place-items-center rounded-full bg-white/70 backdrop-blur-sm shadow-[0_12px_30px_rgba(14,165,233,.35)] ring-1 ring-sky-200 transition-transform group-active:scale-95 group-hover:scale-105`}
          >
            <img
              src="/images/logo/zalo.png"
              alt="Chat Zalo"
              className={`${
                mini ? "h-8 w-8" : "h-10 w-10"
              } object-contain drop-shadow-sm`}
              draggable={false}
            />
          </span>
          <span
            className={`absolute ${
              mini ? "-top-8" : "-top-9"
            } left-1/2 -translate-x-1/2 rounded-md bg-black/85 px-2.5 py-1 text-xs text-white opacity-0 shadow-md transition group-hover:opacity-100`}
          >
            Chat Zalo
            <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-black/85" />
          </span>
        </a>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) { .animate-ping { animation: none; } }
      `}</style>
    </>
  );
}
