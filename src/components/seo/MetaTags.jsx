import { useEffect } from "react";
import { DEFAULT_SEO } from "../../seo/constants";

const MANAGED_META_ATTR = "data-managed-meta";
const MANAGED_JSONLD_ATTR = "data-managed-jsonld";

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

    document.title = title;
    updateMetaTag("description", description);
    updateCanonical(canonical);
    updateJsonLd(data.jsonld);

    return undefined;
  }, [meta]);

  return null;
}
