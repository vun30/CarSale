import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import About from "../pages/About";
import Contact from "../pages/Contact";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import { products } from "../data/productData";
import { productList } from "../data/productList";
import newsData from "../data/newsData";
import { BASE_URL, DEFAULT_SEO, ORGANIZATION } from "./constants";

const CATEGORY_LABELS = {
  sedan: "Sedan",
  suv: "SUV",
  mpv: "MPV",
  electric: "Xe điện",
};

function ensureAbsoluteUrl(path) {
  if (!path) return undefined;
  if (/^https?:\/\//i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_URL}${normalized}`;
}

function getArticleImage(article) {
  if (!article) return undefined;
  if (article.cover) return article.cover;
  if (Array.isArray(article.images) && article.images.length > 0) {
    const first = article.images[0];
    if (typeof first === "string") return first;
    if (first && typeof first === "object") return first.src;
  }
  return undefined;
}

function parsePriceToNumber(priceStr) {
  if (typeof priceStr !== "string") return null;
  const digits = priceStr.replace(/[^\d]/g, "");
  if (!digits) return null;
  return Number(digits);
}

function uniqueNumbers(values) {
  return [
    ...new Set(values.filter((value) => Number.isFinite(value) && value > 0)),
  ];
}

function createProductJsonLd({ product, canonical, name, description, image }) {
  const prices = [];
  if (Array.isArray(product?.variants)) {
    product.variants.forEach((variant) => {
      const parsed = parsePriceToNumber(variant.price);
      if (parsed) prices.push(parsed);
    });
  }
  const basePrice = parsePriceToNumber(product?.price);
  if (basePrice) prices.push(basePrice);

  const uniquePrices = uniqueNumbers(prices);
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Hyundai ${name}`,
    url: canonical,
    brand: {
      "@type": "Brand",
      name: "Hyundai",
    },
    seller: {
      "@type": "Organization",
      name: ORGANIZATION.name,
    },
  };

  if (description) {
    data.description = description;
  }
  if (image) {
    data.image = ensureAbsoluteUrl(image);
  }

  if (uniquePrices.length === 1) {
    data.offers = {
      "@type": "Offer",
      priceCurrency: "VND",
      price: uniquePrices[0].toString(),
      availability: "https://schema.org/InStock",
      url: canonical,
      seller: {
        "@type": "Organization",
        name: ORGANIZATION.name,
      },
    };
  } else if (uniquePrices.length > 1) {
    const low = Math.min(...uniquePrices).toString();
    const high = Math.max(...uniquePrices).toString();
    data.offers = {
      "@type": "AggregateOffer",
      priceCurrency: "VND",
      lowPrice: low,
      highPrice: high,
      offerCount: uniquePrices.length,
      availability: "https://schema.org/InStock",
      url: canonical,
      seller: {
        "@type": "Organization",
        name: ORGANIZATION.name,
      },
    };
  }

  return data;
}

function createArticleJsonLd(article, canonical, description) {
  const authorName =
    typeof article.author === "string"
      ? article.author
      : article.author?.name || ORGANIZATION.name;
  const image = getArticleImage(article);

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    ...(description ? { description } : {}),
    ...(image ? { image: ensureAbsoluteUrl(image) } : {}),
    ...(article.date ? { datePublished: article.date } : {}),
    ...(article.updatedAt || article.date
      ? { dateModified: article.updatedAt || article.date }
      : {}),
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
}

function createCollectionJsonLd(name, description, path) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: ensureAbsoluteUrl(path),
    publisher: {
      "@type": "Organization",
      name: ORGANIZATION.name,
      logo: {
        "@type": "ImageObject",
        url: ORGANIZATION.logo,
      },
    },
  };
}

function buildProductListMeta(category) {
  const normalized =
    typeof category === "string" ? category.toLowerCase() : null;
  const label = normalized ? CATEGORY_LABELS[normalized] : null;
  const headline = label ? `Xe Hyundai ${label}` : "Bảng giá xe Hyundai";
  const description = label
    ? `Khám phá giá bán, ưu đãi và thông số các mẫu xe Hyundai dòng ${label} tại Gia Lai.`
    : "Danh sách giá bán, ưu đãi và thông số các dòng xe Hyundai mới nhất tại Hyundai Gia Lai.";
  const path = normalized ? `/san-pham/${normalized}` : "/san-pham";

  return {
    title: `${headline} | Hyundai Gia Lai`,
    description,
    canonical: ensureAbsoluteUrl(path),
    jsonld: createCollectionJsonLd(headline, description, path),
  };
}

function buildProductDetailMeta({ category, slug }) {
  const normalizedSlug = typeof slug === "string" ? slug : "";
  const product = products[normalizedSlug];
  const listItem = productList.find((item) => item.slug === normalizedSlug);
  const resolvedCategory = category
    ? category.toLowerCase()
    : listItem?.category?.toLowerCase();
  const canonicalPath = resolvedCategory
    ? `/san-pham/${resolvedCategory}/${normalizedSlug}`
    : `/san-pham/${normalizedSlug}`;

  const name = product?.name || listItem?.name || normalizedSlug;
  const description = `Cập nhật giá bán, ưu đãi và thông số kỹ thuật Hyundai ${name} tại Hyundai Gia Lai.`;
  const canonical = ensureAbsoluteUrl(canonicalPath);
  const image = product?.highlight?.hero || product?.cover || listItem?.image;

  if (!product && !listItem) {
    return {
      title: "Sản phẩm Hyundai | Hyundai Gia Lai",
      description,
      canonical,
    };
  }

  return {
    title: `Hyundai ${name} - Giá xe & khuyến mãi | Hyundai Gia Lai`,
    description,
    canonical,
    jsonld: createProductJsonLd({
      product,
      canonical,
      name,
      description,
      image,
    }),
  };
}

function buildNewsArticleMeta(slug) {
  const article = newsData.find((item) => item.slug === slug);
  const fallbackCanonical = ensureAbsoluteUrl(`/tin-tuc/${slug}`);

  if (!article) {
    return {
      title: "Tin tức Hyundai Gia Lai",
      description:
        "Cập nhật tin tức và khuyến mãi xe Hyundai mới nhất tại Gia Lai.",
      canonical: fallbackCanonical,
    };
  }

  const canonicalPath = article.seo?.canonical || `/tin-tuc/${article.slug}`;
  const canonical = ensureAbsoluteUrl(canonicalPath);
  const title = article.seo?.metaTitle || `${article.title} | Hyundai Gia Lai`;
  const description =
    article.seo?.metaDescription ||
    article.excerpt ||
    `Tin tức và khuyến mãi Hyundai: ${article.title}.`;

  return {
    title,
    description,
    canonical,
    jsonld: createArticleJsonLd(article, canonical, description),
  };
}

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: DEFAULT_SEO.title,
      description: DEFAULT_SEO.description,
      canonical: DEFAULT_SEO.canonical,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: DEFAULT_SEO.title,
        url: DEFAULT_SEO.canonical,
        publisher: {
          "@type": "Organization",
          name: ORGANIZATION.name,
          logo: {
            "@type": "ImageObject",
            url: ORGANIZATION.logo,
          },
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${BASE_URL}/?s={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    },
  },
  {
    path: "/gioi-thieu",
    component: About,
    meta: {
      title: "Giới thiệu Hyundai Gia Lai - Đại lý ủy quyền Hyundai",
      description:
        "Thông tin về showroom Hyundai Gia Lai, dịch vụ hậu mãi và đội ngũ tư vấn được đào tạo chính hãng.",
      canonical: ensureAbsoluteUrl("/gioi-thieu"),
      jsonld: {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "Giới thiệu Hyundai Gia Lai",
        url: ensureAbsoluteUrl("/gioi-thieu"),
        publisher: {
          "@type": "Organization",
          name: ORGANIZATION.name,
          logo: {
            "@type": "ImageObject",
            url: ORGANIZATION.logo,
          },
        },
      },
    },
  },
  {
    path: "/lien-he",
    component: Contact,
    meta: {
      title: "Liên hệ Hyundai Gia Lai - Tư vấn & lái thử xe Hyundai",
      description:
        "Hotline 0981 543 342. Đặt lịch lái thử, nhận báo giá và hỗ trợ trả góp trực tiếp tại Hyundai Gia Lai.",
      canonical: ensureAbsoluteUrl("/lien-he"),
      jsonld: {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Liên hệ Hyundai Gia Lai",
        url: ensureAbsoluteUrl("/lien-he"),
        publisher: {
          "@type": "Organization",
          name: ORGANIZATION.name,
          logo: {
            "@type": "ImageObject",
            url: ORGANIZATION.logo,
          },
        },
      },
    },
  },
  {
    path: "/san-pham",
    component: Products,
    meta: () => buildProductListMeta(null),
  },
  {
    path: "/san-pham/:category",
    component: Products,
    meta: ({ params }) => buildProductListMeta(params.category),
  },
  {
    path: "/san-pham/:category/:slug",
    component: ProductDetail,
    meta: ({ params }) => buildProductDetailMeta(params),
  },
  {
    path: "/tin-tuc",
    component: News,
    meta: {
      title: "Tin tức xe Hyundai mới nhất - Hyundai Gia Lai",
      description:
        "Cập nhật khuyến mãi, giá xe và kinh nghiệm sử dụng xe Hyundai mới nhất từ Hyundai Gia Lai.",
      canonical: ensureAbsoluteUrl("/tin-tuc"),
      jsonld: createCollectionJsonLd(
        "Tin tức Hyundai Gia Lai",
        "Bài viết cập nhật giá xe, khuyến mãi và tư vấn sử dụng xe Hyundai.",
        "/tin-tuc"
      ),
    },
  },
  {
    path: "/tin-tuc/:slug",
    component: NewsDetail,
    meta: ({ params }) => buildNewsArticleMeta(params.slug),
  },
];

export default routes;
