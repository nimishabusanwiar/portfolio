import { SITE_URL } from "./content/en";
import { alternatePath, contentFor, type Route } from "./routes";
import { LINKS } from "./components/Footer";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Builds the <head> tags for one prerendered page. */
export function headFor(route: Route): string {
  const c = contentFor(route.lang);
  const cs = route.page === "case" ? c.caseStudies.find((s) => s.slug === route.slug) : undefined;
  const title = cs ? `${cs.title} | Nimisha Busaniwar` : c.meta.title;
  const description = cs ? cs.metaDescription : c.meta.description;
  const url = SITE_URL + route.path;
  const og = `${SITE_URL}/og-${route.lang}.png`;
  const locale = route.lang === "fr" ? "fr_FR" : "en_GB";

  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="en" href="${SITE_URL}${alternatePath(route, "en")}" />`,
    `<link rel="alternate" hreflang="fr" href="${SITE_URL}${alternatePath(route, "fr")}" />`,
    `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${alternatePath(route, "en")}" />`,
    `<meta property="og:type" content="${cs ? "article" : "profile"}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:locale" content="${locale}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
  ];

  if (!cs) {
    const person = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nimisha Busaniwar",
      jobTitle: route.lang === "fr" ? "Ingénieure IA (stagiaire)" : "AI Engineer (intern)",
      url: SITE_URL + "/",
      email: `mailto:${LINKS.email}`,
      address: { "@type": "PostalAddress", addressLocality: "Paris", addressCountry: "FR" },
      alumniOf: [{ "@type": "CollegeOrUniversity", name: "EPITA" }],
      sameAs: [LINKS.linkedin, LINKS.github],
      knowsLanguage: ["en", "fr"],
    };
    tags.push(`<script type="application/ld+json">${JSON.stringify(person).replace(/</g, "\\u003c")}</script>`);
  }
  return tags.join("\n    ");
}
