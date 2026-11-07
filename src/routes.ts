import { en } from "./content/en";
import { fr } from "./content/fr";
import type { Content, Lang } from "./content/types";

export type Route =
  | { lang: Lang; page: "home"; path: string }
  | { lang: Lang; page: "case"; slug: string; path: string };

export const contentFor = (lang: Lang): Content => (lang === "fr" ? fr : en);

const prefix = (lang: Lang) => (lang === "fr" ? "/fr" : "");

export function homePath(lang: Lang): string {
  return `${prefix(lang)}/`;
}

export function casePath(lang: Lang, slug: string): string {
  return `${prefix(lang)}/work/${slug}/`;
}

export function allRoutes(): Route[] {
  const out: Route[] = [];
  for (const lang of ["en", "fr"] as const) {
    out.push({ lang, page: "home", path: homePath(lang) });
    for (const cs of contentFor(lang).caseStudies) {
      out.push({ lang, page: "case", slug: cs.slug, path: casePath(lang, cs.slug) });
    }
  }
  return out;
}

export function normalisePath(path: string): string {
  return path.endsWith("/") ? path : `${path}/`;
}

export function resolveRoute(path: string): Route | undefined {
  const p = normalisePath(path);
  return allRoutes().find((r) => r.path === p);
}

/** Same page in the other language. */
export function alternatePath(route: Route, lang: Lang): string {
  return route.page === "home" ? homePath(lang) : casePath(lang, route.slug);
}
