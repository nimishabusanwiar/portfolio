import { useEffect, useState } from "react";
import type { Content } from "../content/types";
import { ScrollProgress } from "./ScrollProgress";

const SECTIONS = ["experience", "work", "skills", "education", "contact"] as const;

export function Header({ c, homeHref, altHref, altLang, onHome }: {
  c: Content;
  homeHref: string;
  altHref: string;
  altLang: string;
  onHome: boolean;
}) {
  const [active, setActive] = useState<string>("");
  const href = (id: string) => (onHome ? `#${id}` : `${homeHref}#${id}`);
  const labels: Record<(typeof SECTIONS)[number], string> = {
    experience: c.nav.experience,
    work: c.nav.work,
    skills: c.nav.skills,
    education: c.nav.education,
    contact: c.nav.contact,
  };

  // Highlight the section currently in view (home page only).
  useEffect(() => {
    if (!onHome) return;
    const els = SECTIONS.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [onHome]);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/85 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-white">
        {c.nav.skip}
      </a>
      <nav aria-label="Main" className="mx-auto flex max-w-[1160px] items-center justify-between gap-6 px-6 py-3.5 sm:px-8">
        <a href={homeHref} className="flex items-center gap-2.5 text-ink no-underline">
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-lg bg-ink font-display text-[13px] font-semibold text-white">NB</span>
          <span className="font-display text-[16px] font-semibold">Nimisha Busaniwar</span>
        </a>
        <div className="flex items-center gap-1 text-[14px]">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={href(id)}
              aria-current={active === id ? "true" : undefined}
              className={`hidden rounded-md px-3 py-2 no-underline transition-colors lg:inline ${active === id ? "bg-tint text-ink" : "text-muted hover:text-ink"}`}
            >
              {labels[id]}
            </a>
          ))}
          <a href={altHref} hrefLang={altLang} lang={altLang} className="ml-2 rounded-md border border-line px-3 py-2 font-mono text-[12px] text-muted no-underline hover:border-ink hover:text-ink">
            {c.nav.switchLabel}
            <span className="sr-only">{altLang === "fr" ? " (version française)" : " (English version)"}</span>
          </a>
        </div>
      </nav>
      <ScrollProgress />
    </header>
  );
}
