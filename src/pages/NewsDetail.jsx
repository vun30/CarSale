import { useEffect, useMemo, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// import { ArrowLeft } from "lucide-react"; // optional
import newsData from "../data/newsData";

// --- Helpers ---
function formatDateISO(iso) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  } catch (_) {
    return null;
  }
}

function normalizeImages(news) {
  // Accept: images as string[], or {src, alt, caption}[]; fallback to cover/image
  if (!news) return [];
  const arr = Array.isArray(news.images) ? news.images : [];
  const mapped = arr.map((it) =>
    typeof it === "string" ? { src: it, alt: news.title } : it
  );
  if (mapped.length === 0) {
    const one = news.cover || news.image;
    if (one) return [{ src: one, alt: news.title }];
  }
  return mapped;
}

function getCover(news) {
  if (!news) return undefined;
  return (
    news.cover ||
    news.image ||
    (Array.isArray(news.images)
      ? typeof news.images[0] === "string"
        ? news.images[0]
        : news.images[0]?.src
      : undefined)
  );
}

function AuthorLine({ author }) {
  if (!author) return null;
  if (typeof author === "string")
    return (
      <span>
        Tác giả: <span className="font-medium text-gray-700">{author}</span>
      </span>
    );
  return (
    <span>
      Tác giả: <span className="font-medium text-gray-700">{author.name}</span>
      {author.role ? (
        <span className="text-gray-500"> • {author.role}</span>
      ) : null}
    </span>
  );
}

function Tags({ tags }) {
  if (!Array.isArray(tags) || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tags.map((t) => (
        <span
          key={t}
          className="text-xs rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-gray-700"
        >
          #{t}
        </span>
      ))}
    </div>
  );
}

// Render rich blocks similar to a news CMS
function Blocks({ blocks }) {
  if (!Array.isArray(blocks) || blocks.length === 0) return null;
  return (
    <div className="space-y-5">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "heading": {
            const Tag = `h${b.level || 2}`;
            return (
              <Tag
                key={i}
                className="mt-6 text-2xl font-semibold text-[#002c5f]"
              >
                {b.text}
              </Tag>
            );
          }
          case "paragraph":
            return (
              <p key={i} className="text-lg leading-8 text-gray-800">
                {b.text}
              </p>
            );
          case "list": {
            const items = Array.isArray(b.items) ? b.items : [];
            if (b.style === "ordered") {
              return (
                <ol
                  key={i}
                  className="list-decimal pl-6 space-y-1 text-gray-800"
                >
                  {items.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ol>
              );
            }
            return (
              <ul key={i} className="list-disc pl-6 space-y-1 text-gray-800">
                {items.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            );
          }
          case "image":
            return (
              <figure
                key={i}
                className="rounded-xl overflow-hidden border border-gray-200"
              >
                <img
                  src={b.src}
                  alt={b.alt || ""}
                  className="w-full object-cover"
                  loading="lazy"
                />
                {b.caption && (
                  <figcaption className="text-sm text-gray-500 px-4 py-2">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            );
          case "table": {
            const headers = b.headers || [];
            const rows = b.rows || [];
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full border border-gray-200 text-sm">
                  {headers.length > 0 && (
                    <thead className="bg-gray-50">
                      <tr>
                        {headers.map((h, hi) => (
                          <th
                            key={hi}
                            className="px-3 py-2 text-left font-semibold text-gray-700 border-b border-gray-200"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                  )}
                  <tbody>
                    {rows.map((r, ri) => (
                      <tr
                        key={ri}
                        className={ri % 2 ? "bg-white" : "bg-gray-50"}
                      >
                        {r.map((c, ci) => (
                          <td
                            key={ci}
                            className="px-3 py-2 text-gray-800 border-b border-gray-200"
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {b.note && (
                  <p className="text-xs text-gray-500 mt-2">{b.note}</p>
                )}
              </div>
            );
          }
          case "cta":
            return (
              <div key={i} className="mt-2">
                <a
                  href={b.href}
                  className="inline-flex items-center justify-center rounded-xl bg-[#002c5f] px-4 py-2 text-white hover:opacity-95"
                >
                  {b.label}
                </a>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}

export default function NewsDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // current news
  const news = useMemo(() => newsData.find((n) => n.slug === slug), [slug]);

  // others (sorted newest first if ISO dates exist)
  const others = useMemo(() => {
    const list = newsData.filter((n) => n.slug !== slug);
    const allHaveISO = list.every((n) => typeof n.date === "string");
    const sorted = allHaveISO
      ? [...list].sort((a, b) => new Date(b.date) - new Date(a.date))
      : [...list];
    return sorted.map((n) => ({
      ...n,
      cover: getCover(n),
    }));
  }, [slug]);

  // reading progress
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.getElementById("article-body");
      if (!el) return;
      const total = el.scrollHeight - window.innerHeight;
      const current = Math.max(0, Math.min(window.scrollY, total));
      setProgress(total > 0 ? Math.round((current / total) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [slug]);

  // gallery state
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const images = useMemo(() => normalizeImages(news), [news]);

  const openAt = (i) => {
    setIdx(i);
    setOpen(true);
  };
  const next = () => setIdx((i) => (i + 1) % Math.max(images.length, 1));
  const prev = () =>
    setIdx(
      (i) => (i - 1 + Math.max(images.length, 1)) % Math.max(images.length, 1)
    );

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  if (!news) {
    return (
      <section className="pb-16">
        <div className="sticky top-0 z-30 h-1 w-full bg-gray-100">
          <div
            className="h-full bg-[#002c5f]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Bài viết không tồn tại
            </h1>
            <p className="text-gray-600 mb-6">
              Đường dẫn có thể đã thay đổi hoặc nội dung đã bị gỡ.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Quay lại
              </button>
              <Link
                to="/tin-tuc"
                className="inline-flex items-center gap-2 rounded-xl bg-[#002c5f] px-4 py-2 text-white hover:opacity-95"
              >
                Xem tất cả tin tức
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const dateStr = formatDateISO(news.date);
  const reading =
    typeof news.readingTime === "number"
      ? `${news.readingTime} phút đọc`
      : null;

  // related posts: use explicit `news.related` if available, else take others top 3
  const related = useMemo(() => {
    if (Array.isArray(news.related) && news.related.length > 0) {
      const map = new Map(newsData.map((n) => [n.slug, n]));
      return news.related
        .map((slug) => map.get(slug))
        .filter(Boolean)
        .map((n) => ({ ...n, cover: getCover(n) }));
    }
    return others.slice(0, 3);
  }, [news, others]);

  return (
    <section className="pb-16">
      {/* progress */}
      <div className="sticky top-0 z-30 h-1 w-full bg-gray-100">
        <div
          className="h-full bg-[#002c5f] transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm text-gray-500 py-6"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-[#002c5f]">
            Trang chủ
          </Link>
          <span>›</span>
          <Link to="/tin-tuc" className="hover:text-[#002c5f]">
            Tin tức
          </Link>
          <span>›</span>
          <span className="text-gray-700 line-clamp-1" title={news.title}>
            {news.title}
          </span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main */}
          <article className="lg:col-span-8 space-y-6">
            <header>
              {news.category && (
                <span className="inline-block text-xs font-medium uppercase tracking-wider text-[#002c5f] bg-blue-50 px-2 py-1 rounded">
                  {news.category}
                </span>
              )}
              <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-[#002c5f]">
                {news.title}
              </h1>
              <div className="mt-2 text-sm text-gray-500 flex flex-wrap items-center gap-3">
                {dateStr && <span>{dateStr}</span>}
                {reading && <span>• {reading}</span>}
                {news.author && (
                  <span>
                    • <AuthorLine author={news.author} />
                  </span>
                )}
              </div>
            </header>

            {/* cover image */}
            {getCover(news) && (
              <figure className="rounded-2xl overflow-hidden border border-gray-200">
                <img
                  src={getCover(news)}
                  alt={news.title}
                  className="w-full object-cover aspect-[16/9]"
                />
              </figure>
            )}

            {/* content (legacy) */}
            {news.content && (
              <div
                id="article-body"
                className="text-lg leading-8 text-gray-800 whitespace-pre-line"
              >
                {news.content}
              </div>
            )}

            {/* rich blocks */}
            {Array.isArray(news.blocks) && news.blocks.length > 0 && (
              <div id="article-body" className="space-y-5">
                <Blocks blocks={news.blocks} />
              </div>
            )}

            {/* gallery (thumbnails -> lightbox) */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => openAt(i)}
                    className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white"
                    aria-label={`Xem ảnh ${i + 1}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt || `${news.title} ${i + 1}`}
                      className="h-40 sm:h-44 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* tags */}
            <Tags tags={news.tags} />

            {/* related */}
            {related.length > 0 && (
              <section className="pt-4">
                <h2 className="text-xl font-semibold text-[#002c5f] mb-4">
                  Bài viết liên quan
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/tin-tuc/${item.slug}`}
                      className="group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        {getCover(item) ? (
                          <img
                            src={getCover(item)}
                            alt={item.title}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className="h-full w-full bg-gray-100" />
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-[#002c5f]">
                          {item.title}
                        </h3>
                        {item.date && (
                          <p className="mt-1 text-sm text-gray-500">
                            {formatDateISO(item.date)}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-semibold mb-4 text-[#002c5f]">
                  Bài viết mới
                </h2>
                <ul className="space-y-3">
                  {others.slice(0, 6).map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/tin-tuc/${item.slug}`}
                        className="flex gap-3 group"
                      >
                        <div className="h-16 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          {getCover(item) ? (
                            <img
                              src={getCover(item)}
                              alt={item.title}
                              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                          ) : (
                            <div className="h-full w-full bg-gray-100" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 leading-snug line-clamp-2 group-hover:text-[#002c5f]">
                            {item.title}
                          </h3>
                          {item.date && (
                            <p className="text-xs text-gray-500 mt-1">
                              {formatDateISO(item.date)}
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

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <h3 className="text-base font-semibold text-[#002c5f]">
                  Bạn cần tư vấn?
                </h3>
                <p className="text-sm text-blue-900/80 mt-1">
                  Liên hệ đội ngũ của chúng tôi để được hỗ trợ nhanh chóng.
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
            </div>
          </aside>
        </div>
      </div>

      {/* Lightbox */}
      {open && images.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/75"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-[92vw] h-[88vh] max-w-6xl flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-3 py-2 shadow"
            >
              ‹
            </button>
            <img
              src={images[idx].src}
              alt={images[idx].alt || `Ảnh ${idx + 1}`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
            />
            <button
              onClick={next}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-3 py-2 shadow"
            >
              ›
            </button>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 rounded-full bg-white/80 hover:bg-white px-3 py-1 shadow"
            >
              Đóng
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white text-sm bg-black/40 px-3 py-1 rounded-full">
              {idx + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
