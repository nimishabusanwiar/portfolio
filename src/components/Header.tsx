import type { Content } from "../content/types";

export function Header({ c, homeHref, altHref, altLang, onHome }: {
  c: Content;
  homeHref: string;
  altHref: string;
  altLang: string;
  onHome: boolean;
}) {
  const section = (id: string) => (onHome ? `#${id}` : `${homeHref}#${id}`);
  const links: [string, string][] = [
    [c.nav.experience, "experience"],
    [c.nav.work, "work"],
    [c.nav.skills, "skills"],
    [c.nav.education, "education"],
    [c.nav.contact, "contact"],
  ];
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-white">
        {c.nav.skip}
      </a>
      <nav aria-label="Main" className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 sm:px-8">
        <a href={homeHref} className="font-display text-[17px] font-semibold text-ink no-underline">
          Nimisha Busaniwar
        </a>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
          {links.map(([label, id]) => (
            <a key={id} href={section(id)} className="hidden py-2 text-muted no-underline hover:text-ink md:inline">
              {label}
            </a>
          ))}
          <a href={altHref} hrefLang={altLang} lang={altLang} className="rounded border border-line px-3 py-2 font-mono text-[13px] text-muted no-underline hover:border-ink hover:text-ink">
            {c.nav.switchLabel}
          </a>
        </div>
      </nav>
    </header>
  );
}
