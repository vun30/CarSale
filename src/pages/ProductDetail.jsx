// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from "../components/layout/Breadcrumb";
import { products } from "../data/productData";

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
    <div className="max-w-6xl mx-auto px-4 space-y-10">
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
      {lead && (
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
                className="w-full h-40 object-cover rounded-lg shadow"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function ImageBlock({ src, alt }) {
  if (!src) return null;
  return <img src={src} alt={alt} className="rounded-lg shadow-md w-full" />;
}

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
          className="w-full h-[420px] md:h-[520px] object-cover"
        />
        {(title || subtitle) && (
          <div className="absolute left-6 top-6 md:left-10 md:top-10">
            {title && (
              <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-white/90 text-lg md:text-xl">{subtitle}</p>
            )}
          </div>
        )}
      </section>

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
        <section className="space-y-3">
          <h3 className="text-xl font-semibold">
            [OFFICIAL] – TVC {title || ""}
          </h3>
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

  // Auto scroll top khi đổi tab
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

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
        return (
          <div className="max-w-6xl mx-auto px-4">
            <ImageBlock src={product.interiorImg} alt="Nội thất" />
          </div>
        );

      case "Vận hành":
        return (
          <div className="max-w-6xl mx-auto px-4 text-gray-700">
            {product.performanceText || "Đang cập nhật."}
          </div>
        );

      case "An toàn":
        return (
          <ul className="max-w-6xl mx-auto px-4 list-disc list-inside space-y-2 text-gray-700">
            {(product.safetyList || []).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        );

      case "Tiện nghi":
        return (
          <ul className="max-w-6xl mx-auto px-4 list-disc list-inside space-y-2 text-gray-700">
            {(product.comfortList || []).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        );

      case "Thông số xe":
        return (
          <div className="max-w-6xl mx-auto px-4">
            <SpecTable specs={product.specs} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-10">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Breadcrumb />
      </div>

      {/* Hero banner trang chi tiết (cover chung) */}
      <div className="w-full mt-[-50px]">
        <img
          src={product.cover}
          alt={product.name}
          className="w-full h-[500px] object-cover"
        />
      </div>

      {/* Tên + Tabs */}
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-blue-700 font-semibold">{product.price}</p>
        </div>

        <div className="w-full md:w-auto border-b md:border-b-0 border-gray-200 flex overflow-x-auto">
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
        </div>
      </div>

      {/* Nội dung tab */}
      <div className="mt-8 transition-opacity duration-300">{renderTab()}</div>
    </div>
  );
}
