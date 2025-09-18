// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import { products } from "../data/productData";
import usePageTitle from "../hooks/usePageTitle";

const TAB_ORDER = [
  "Nổi bật",
  "Ngoại thất",
  "Nội thất",
  "Vận hành",
  "An toàn",
  "Tiện nghi",
  "Thông số xe",
];

// ---- Các block render nhỏ, chỉ dùng trong file này ----
function SpecTable({ specs }) {
  if (!specs) return null;
  return (
    <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
      <tbody>
        {Object.entries(specs).map(([k, v], i) => (
          <tr key={k} className={i % 2 ? "bg-white" : "bg-gray-50"}>
            <td className="px-4 py-2 font-medium border-b">{k}</td>
            <td className="px-4 py-2 border-b">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
function Exterior({ data }) {
  if (!data) return null;
  const { header, lead, grid4 = [], twoCards = [], midBlock, tailBlock } = data;

  return (
    <div className="max-w-6xl mx-auto px-4 space-y-10 mb-5">
      {/* Header text */}
      <section>
        {header?.eyebrow && (
          <p className="text-blue-900 font-semibold">{header.eyebrow}</p>
        )}
        {header?.title && (
          <h2 className="text-2xl md:text-3xl font-bold mt-1">
            {header.title}
          </h2>
        )}
        {header?.body && (
          <p className="text-gray-700 mt-3 leading-relaxed">{header.body}</p>
        )}
      </section>

      {/* Lead */}
      {Array.isArray(lead) ? (
        <section className="grid md:grid-cols-2 gap-6">
          {lead.map((it, i) => (
            <div key={i} className="space-y-3">
              {it.title && (
                <h3 className="text-xl font-semibold">{it.title}</h3>
              )}
              <img
                src={it.image}
                alt={it.title || `lead-${i}`}
                className="w-full rounded-xl shadow"
              />
              {it.caption && <p className="text-gray-700">{it.caption}</p>}
            </div>
          ))}
        </section>
      ) : (
        lead && (
          <section className="space-y-3">
            {lead.title && (
              <h3 className="text-xl font-semibold">{lead.title}</h3>
            )}
            <img
              src={lead.image}
              alt={lead.title}
              className="w-full rounded-xl shadow"
            />
            {lead.caption && <p className="text-gray-700">{lead.caption}</p>}
          </section>
        )
      )}

      {/* Grid 4 */}
      {grid4.length > 0 && (
        <section className="grid md:grid-cols-2 gap-6">
          {grid4.map((it, i) => (
            <article key={i} className="bg-gray-50 rounded-xl overflow-hidden">
              <img
                src={it.img}
                alt={it.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 font-semibold">{it.caption}</div>
            </article>
          ))}
        </section>
      )}

      {/* 2 Cards */}
      {twoCards.length === 2 && (
        <section className="grid md:grid-cols-2 gap-6">
          {twoCards.map((it, i) => (
            <article key={i} className="bg-gray-50 rounded-xl overflow-hidden">
              <img
                src={it.img}
                alt={it.caption}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 font-semibold">{it.caption}</div>
            </article>
          ))}
        </section>
      )}

      {/* MidBlock */}
      {midBlock && (
        <section className="space-y-3">
          <h3 className="text-xl font-semibold">{midBlock.title}</h3>
          <p className="text-gray-700">{midBlock.body}</p>
          <img
            src={midBlock.image}
            alt={midBlock.title}
            className="w-full rounded-xl shadow"
          />

          {/* Thumbs dưới ảnh chính */}
          {midBlock.thumbs && midBlock.thumbs.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              {midBlock.thumbs.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`thumb-${i}`}
                  className="w-full h-50 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* TailBlock */}
      {tailBlock && (
        <section className="space-y-3">
          <h3 className="text-xl font-semibold">{tailBlock.title}</h3>
          <p className="text-gray-700">{tailBlock.body}</p>
          <img
            src={tailBlock.hero}
            alt={tailBlock.title}
            className="w-full rounded-xl shadow"
          />
          <div className="grid md:grid-cols-3 gap-4 pt-4">
            {tailBlock.thumbs?.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`thumb-${i}`}
                className="w-full h-50 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

// function ImageBlock({ src, alt }) {
//   if (!src) return null;
//   return <img src={src} alt={alt} className="rounded-lg shadow-md w-full" />;
// }

function Highlights({ highlight }) {
  if (!highlight) return null;
  const { hero, title, subtitle, cards = [], videoId } = highlight;
  return (
    <div className="max-w-6xl mx-auto px-4 space-y-10">
      {/* 1) Hero */}
      <section className="relative rounded-xl overflow-hidden">
        <img
          src={hero}
          alt={title || "Highlights"}
          className="w-full h-[220px] sm:h-[280px] md:h-[420px] lg:h-[520px] object-cover"
        />

        {(title || subtitle) && (
          <div className="absolute left-4 top-4 md:left-10 md:top-10">
            {title && (
              <h2 className="text-white text-xl sm:text-2xl md:text-5xl font-bold drop-shadow">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-white/90 text-sm sm:text-base md:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        )}
      </section>

      {highlight.intro && (
        <section className="max-w-6xl mx-auto px-4 space-y-3">
          <p className="text-blue-900 text-2xl md:text-3xl font-bold">
            {highlight.intro.eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            {highlight.intro.title}
          </h2>
          <div className="bg-gray-100 rounded-md p-4 text-gray-700 leading-relaxed">
            {highlight.intro.body}
            {highlight.intro.link && (
              <div className="mt-2">
                <a
                  href={highlight.intro.link.href}
                  className="text-blue-700 underline underline-offset-2"
                >
                  {highlight.intro.link.text}
                </a>
              </div>
            )}
          </div>
        </section>
      )}
      {/* 2) Lưới 4 khối */}
      {cards.length > 0 && (
        <section className="grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <article
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <img
                src={c.img}
                alt={c.caption}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 font-semibold">{c.caption}</div>
            </article>
          ))}
        </section>
      )}

      {/* 3) Video */}
      {videoId && (
        <section className="space-y-3 pb-6">
          {/* <h3 className="text-xl font-semibold">
            [OFFICIAL] – TVC {title || ""}
          </h3> */}
          <div className="aspect-video rounded-xl overflow-hidden shadow">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Product TVC"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>
      )}
    </div>
  );
}

// ---- Component chính ----
export default function ProductDetail() {
  const { slug } = useParams();
  const product = products[slug];
  const [activeTab, setActiveTab] = useState("Nổi bật");
  const [zoomSrc, setZoomSrc] = useState(null);
  const [showVariants, setShowVariants] = useState(false);
  const variantDropdownRef = useRef(null);

   const pageTitle = product
     ? `Hyundai ${product.name} - Giá & Ưu Đãi Gia Lai`
     : "Xe Hyundai Chính Hãng | Hyundai Gia Lai";

   usePageTitle(pageTitle);

   const handleImageClick = (e) => {
     const img = e.target.closest("img");
     if (img) setZoomSrc(img.src);
   };

   const openContactModal = () => {
     window.dispatchEvent(new Event("open-contact-modal"));
   };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setZoomSrc(null);
    };
    if (zoomSrc) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [zoomSrc]);

  useEffect(() => {
    if (!showVariants) return;

    const handleClickOutside = (event) => {
      if (
        variantDropdownRef.current &&
        !variantDropdownRef.current.contains(event.target)
      ) {
        setShowVariants(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showVariants]);

  useEffect(() => {
    setShowVariants(false);
  }, [slug]);
  // Auto scroll top khi đổi tab
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [activeTab]);

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumb />
        <p>Sản phẩm không tồn tại.</p>
      </div>
    );
  }

  const renderTab = () => {
    switch (activeTab) {
      case "Nổi bật":
        return <Highlights highlight={product.highlight} />;

      case "Ngoại thất":
        return <Exterior data={product.exterior} />;

      case "Nội thất":
        return <Exterior data={product.interior} />;

      case "Vận hành":
        return <Exterior data={product.performance} />;

      case "An toàn":
        return <Exterior data={product.safety} />;

      case "Tiện nghi":
        return <Exterior data={product.comfort} />;

      case "Thông số xe":
        return <Exterior data={product.specBlock} />;

      default:
        return null;
    }
  };

  return (
    <>
      <div className="space-y-10" onClick={handleImageClick}>
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Breadcrumb />
        </div>

        {/* Hero banner trang chi tiết (cover chung) */}
        <div className="w-full mt-[-50px]">
          <img
            src={product.cover}
            alt={product.name}
            className="w-full  
      h-[220px]      /* mobile nhỏ gọn */
      sm:h-[300px]   /* tablet nhỏ */
      md:h-[400px]   /* desktop vừa */
      lg:h-[500px]   /* màn to */
      object-cover"
          />
        </div>

        {/* Tên + Tabs */}
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="mt-2 text-xl text-blue-900 font-semibold">
              {product.price}
            </p>
            {product.variants?.length > 0 && (
              <div className="relative mt-3" ref={variantDropdownRef}>
                <button
                  type="button"
                  onClick={() => setShowVariants((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-900 px-4 py-2 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50"
                >
                  {showVariants ? "Ẩn phiên bản & giá" : "Xem phiên bản & giá"}
                  <span
                    className={`text-base transition-transform ${
                      showVariants ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>
                {showVariants && (
                  <div
                    className="absolute left-1/2 top-full z-[80] mt-3
               w-[min(90vw,420px)] -translate-x-1/2
               rounded-2xl border border-gray-200 bg-white shadow-2xl
               md:left-0 md:-translate-x-0 md:w-[min(30vw,500px)]
               overflow-hidden" /* quan trọng: cắt viền + hết khoảng trắng */
                  >
                    {/* Scroll viewport: tự co, chỉ cuộn khi cao > 70vh */}
                    <div className="max-h-[70vh] overflow-y-auto">
                      {/* Header sticky đặt TRONG viewport cuộn */}
                      <div
                        className="px-4 sm:px-5 pt-4 pb-3 sticky top-0 z-10
                      bg-white/85 backdrop-blur rounded-t-2xl"
                      >
                        <p className="text-sm text-gray-500">
                          Bảng giá chi tiết theo từng phiên bản:
                        </p>
                      </div>

                      {/* Bảng: bỏ min-h + giảm padding đáy để không dư */}
                      <div className="px-4 sm:px-5 pb-4">
                        <table className="w-full text-sm sm:text-base">
                          <thead className="text-gray-600 border-b">
                            <tr>
                              <th className="py-2 text-left font-medium">
                                Phiên bản
                              </th>
                              <th className="py-2 text-right font-medium">
                                Giá
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {product.variants.map((variant) => (
                              <tr key={variant.name} className="odd:bg-gray-50">
                                <td className="py-3 pr-3">{variant.name}</td>
                                <td className="py-3 pl-3 text-right font-semibold text-red-600">
                                  {variant.price}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="w-full md:w-auto border-b md:border-b-0 border-gray-200 flex items-center overflow-x-auto">
            {TAB_ORDER.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 md:flex-none px-6 py-3 text-sm font-medium border-b-2 transition-colors
                ${
                  activeTab === tab
                    ? "border-black text-black font-semibold"
                    : "border-transparent text-gray-500 hover:text-black"
                }`}
              >
                {tab}
              </button>
            ))}
            {/* Order button: show inline on desktop, fixed at bottom on mobile */}
            <button
              type="button"
              onClick={openContactModal}
              className="hidden md:inline-flex flex-none px-6 py-3 text-sm font-semibold bg-blue-900 text-white rounded whitespace-nowrap ml-4 md:ml-auto hover:bg-blue-800"
            >
              Đặt hàng
            </button>
          </div>
        </div>

        {/* Nội dung tab */}
        <div className="mt-8 transition-opacity duration-300 pb-16 md:pb-0">
          {renderTab()}
        </div>
      </div>

      {/* Fixed order button for mobile */}
      <button
        type="button"
        onClick={openContactModal}
        className="md:hidden fixed bottom-0 left-0 w-full px-6 py-4 text-base font-semibold bg-blue-900 text-white hover:bg-blue-800"
      >
        Đặt hàng
      </button>
      {zoomSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setZoomSrc(null)}
        >
          <img
            src={zoomSrc}
            alt="preview"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
