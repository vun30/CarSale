// src/pages/News.jsx (hoặc đường dẫn bạn đang dùng)
import { Link } from "react-router-dom";
import { useMemo } from "react";
import newsData from "../data/newsData";


// --- Helpers ---
function getCover(n) {
  if (!n) return undefined;
  if (n.cover) return n.cover;
  if (n.image) return n.image;
  if (Array.isArray(n.images) && n.images.length > 0) {
    const it = n.images[0];
    return typeof it === "string" ? it : it?.src;
  }
  return undefined;
}

function parseDateParts(iso) {
  try {
    const d = new Date(iso);
    if (isNaN(d)) return null;
    const day = d.toLocaleDateString("vi-VN", { day: "2-digit" });
    const monthRaw = d.toLocaleDateString("vi-VN", { month: "short" }); // "thg 9"
    const month =
      monthRaw.charAt(0).toUpperCase() + monthRaw.slice(1).replace(".", "");
    const full = d.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return { day, month, full };
  } catch {
    return null;
  }
}

function byNewest(a, b) {
  const ad = a?.date ? new Date(a.date).getTime() : 0;
  const bd = b?.date ? new Date(b.date).getTime() : 0;
  return bd - ad;
}

export default function News() {
 
  const list = useMemo(() => {
    return newsData
      .map((n) => ({
        ...n,
        cover: getCover(n),
        dateParts: parseDateParts(n.date),
      }))
      .sort(byNewest);
  }, []);

  const latest = list.slice(0, 6);

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-[#002c5f]">
            Tin tức & Bài viết
          </h1>
          <p className="text-gray-600 mt-2">
            Cập nhật giá xe, khuyến mãi, đánh giá thực tế và kinh nghiệm sử dụng
            các dòng Hyundai.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main list */}
          <div className="md:col-span-2 space-y-6">
            {list.map((news) => (
              <Link
                to={`/tin-tuc/${news.slug}`}
                key={news.slug}
                className="group flex gap-4 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                {/* thumbnail */}
                <div className="relative w-44 md:w-56 flex-shrink-0">
                  {news.cover ? (
                    <img
                      src={news.cover}
                      alt={news.title}
                      className="w-full h-28 md:h-36 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-28 md:h-36 bg-gray-100" />
                  )}

                  {/* date badge */}
                  {news.dateParts && (
                    <div className="absolute top-0 left-0 w-14 h-14 bg-[#002c5f] text-white flex flex-col items-center justify-center rounded-br-2xl shadow">
                      <span className="text-base font-bold leading-none">
                        {news.dateParts.day}
                      </span>
                      <span className="text-[11px] opacity-90">
                        {news.dateParts.month}
                      </span>
                    </div>
                  )}
                </div>

                {/* content */}
                <div className="flex-1 p-4 pr-5">
                  {/* category + reading time */}
                  <div className="flex items-center gap-2 text-xs mb-2">
                    {news.category && (
                      <span className="inline-block uppercase tracking-wider text-[#002c5f] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded">
                        {news.category}
                      </span>
                    )}
                    {typeof news.readingTime === "number" && (
                      <span className="inline-block text-gray-600 bg-gray-50 border border-gray-200 px-2 py-0.5 rounded">
                        {news.readingTime} phút đọc
                      </span>
                    )}
                    {news.dateParts && (
                      <span className="ml-auto text-gray-500">
                        {news.dateParts.full}
                      </span>
                    )}
                  </div>

                  <h2 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-[#002c5f] line-clamp-2">
                    {news.title}
                  </h2>

                  {news.excerpt && (
                    <p className="mt-2 text-gray-600 line-clamp-2 md:line-clamp-3">
                      {news.excerpt}
                    </p>
                  )}

                  {/* tags (nhỏ gọn) */}
                  {Array.isArray(news.tags) && news.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {news.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-gray-700"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <aside>
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-[#002c5f]">
                Bài viết mới
              </h2>
              <ul className="space-y-3">
                {latest.map((news) => (
                  <li key={news.slug}>
                    <Link
                      to={`/tin-tuc/${news.slug}`}
                      className="group flex gap-3 items-center"
                    >
                      <div className="h-14 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                        {news.cover ? (
                          <img
                            src={news.cover}
                            alt={news.title}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-full w-full bg-gray-100" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-medium text-gray-900 leading-snug line-clamp-2 group-hover:text-[#002c5f]">
                          {news.title}
                        </h3>
                        {news.dateParts && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {news.dateParts.full}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 text-right">
                <Link
                  to="/tin-tuc"
                  className="text-sm text-blue-700 hover:underline"
                >
                  Xem tất cả
                </Link>
              </div>
            </div>

            {/* Hotline box */}
            <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-5">
              <h3 className="text-base font-semibold text-[#002c5f]">
                Cần tư vấn chọn xe?
              </h3>
              <p className="text-sm text-blue-900/80 mt-1">
                Liên hệ để nhận báo giá & lịch lái thử nhanh.
              </p>
              <div className="mt-3 flex gap-2">
                <a
                  href="tel:0981543342"
                  className="inline-flex items-center justify-center rounded-xl bg-[#002c5f] px-4 py-2 text-white hover:opacity-95"
                >
                  Gọi ngay
                </a>
                <Link
                  to="/lien-he"
                  className="inline-flex items-center justify-center rounded-xl border border-[#002c5f] px-4 py-2 text-[#002c5f] hover:bg-white"
                >
                  Form liên hệ
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
