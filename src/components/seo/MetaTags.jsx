import { useEffect } from "react";
import {
  DEFAULT_SEO,
  DEFAULT_OG_IMAGE,
  ORGANIZATION,
} from "../../seo/constants";

const MANAGED_META_ATTR = "data-managed-meta";
const MANAGED_JSONLD_ATTR = "data-managed-jsonld";
const DEFAULT_ROBOTS = "index, follow";

function updateMetaTag(name, content) {
  if (typeof document === "undefined") return;
  let tag = document.head.querySelector(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute(MANAGED_META_ATTR, "true");
  tag.setAttribute("content", content);
}
function updatePropertyTag(property, content) {
  if (typeof document === "undefined" || !property) return;
  let tag = document.head.querySelector(`meta[property="${property}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute(MANAGED_META_ATTR, "true");
  tag.setAttribute("content", content);
}

function updateCanonical(href) {
  if (typeof document === "undefined") return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute(MANAGED_META_ATTR, "true");
  link.setAttribute("href", href);
}

function updateJsonLd(jsonld) {
  if (typeof document === "undefined") return;
  const existing = document.head.querySelectorAll(
    `script[type="application/ld+json"][${MANAGED_JSONLD_ATTR}]`
  );
  existing.forEach((node) => node.remove());

  if (!jsonld) return;

  const entries = Array.isArray(jsonld) ? jsonld : [jsonld];
  entries.filter(Boolean).forEach((entry) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute(MANAGED_JSONLD_ATTR, "true");
    script.textContent = JSON.stringify(entry, null, 2);
    document.head.appendChild(script);
  });
}

export default function MetaTags({ meta }) {
  useEffect(() => {
    if (typeof document === "undefined") return undefined;

    const data = meta || {};
    const title = data.title || DEFAULT_SEO.title;
    const description = data.description || DEFAULT_SEO.description;
    const canonical = data.canonical || DEFAULT_SEO.canonical;

    const robots = data.robots || DEFAULT_ROBOTS;
    const openGraph = {
      title: data.openGraph?.title || DEFAULT_SEO.openGraph?.title || title,
      description:
        data.openGraph?.description ||
        DEFAULT_SEO.openGraph?.description ||
        description,
      url: data.openGraph?.url || DEFAULT_SEO.openGraph?.url || canonical,
      type: data.openGraph?.type || DEFAULT_SEO.openGraph?.type || "website",
      image:
        data.openGraph?.image ||
        data.image ||
        DEFAULT_SEO.openGraph?.image ||
        DEFAULT_OG_IMAGE,
      siteName:
        data.openGraph?.siteName ||
        DEFAULT_SEO.openGraph?.siteName ||
        ORGANIZATION.name,
    };
    const twitter = {
      card:
        data.twitter?.card ||
        DEFAULT_SEO.twitter?.card ||
        "summary_large_image",
      title: data.twitter?.title || DEFAULT_SEO.twitter?.title || title,
      description:
        data.twitter?.description ||
        DEFAULT_SEO.twitter?.description ||
        description,
      image:
        data.twitter?.image ||
        data.image ||
        DEFAULT_SEO.twitter?.image ||
        openGraph.image ||
        DEFAULT_OG_IMAGE,
    };

    document.title = title;
    updateMetaTag("description", description);
    updateMetaTag("robots", robots);
    updateCanonical(canonical);
    updateJsonLd(data.jsonld);
    updatePropertyTag("og:title", openGraph.title);
    updatePropertyTag("og:description", openGraph.description);
    updatePropertyTag("og:url", openGraph.url);
    updatePropertyTag("og:type", openGraph.type);
    updatePropertyTag("og:image", openGraph.image);
    updatePropertyTag("og:site_name", openGraph.siteName);
    updateMetaTag("twitter:card", twitter.card);
    updateMetaTag("twitter:title", twitter.title);
    updateMetaTag("twitter:description", twitter.description);
    updateMetaTag("twitter:image", twitter.image);
    return undefined;
  }, [meta]);

  return null;
}
