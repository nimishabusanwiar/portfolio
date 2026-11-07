import type { Content } from "../content/types";

export const LINKS = {
  email: "busaniwar@gmail.com",
  linkedin: "https://www.linkedin.com/in/nimisha-busaniwar",
  github: "https://github.com/nimishabusanwiar",
};

export function Footer({ c, full }: { c: Content; full: boolean }) {
  return (
    <footer id="contact" className={`bg-ink text-white ${full ? "mt-24 sm:mt-28" : ""}`}>
      <div className={`mx-auto flex max-w-[1120px] flex-col gap-12 px-6 sm:px-8 ${full ? "pb-10 pt-20" : "py-8"}`}>
        {full && (
          <div className="flex flex-wrap items-end justify-between gap-8">
            <h2 className="max-w-[560px] font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] sm:text-[44px]">
              {c.contact.heading}
            </h2>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${LINKS.email}`} className="inline-flex min-h-12 items-center rounded-md bg-white px-5 text-[15px] font-medium text-ink no-underline hover:bg-tint">
                {c.contact.email}
              </a>
              <a href={c.cvFile} download className="inline-flex min-h-12 items-center rounded-md border border-[#4b5e80] px-5 text-[15px] font-medium text-white no-underline hover:border-white hover:text-white">
                {c.contact.cv}
              </a>
            </div>
          </div>
        )}
        <div className={`flex flex-wrap justify-between gap-4 font-mono text-[13px] ${full ? "border-t border-[#22355a] pt-6" : ""}`}>
          <div className="flex flex-wrap gap-6">
            <a href={LINKS.linkedin} className="text-[#c7d3ea] hover:text-white">LinkedIn</a>
            <a href={LINKS.github} className="text-[#c7d3ea] hover:text-white">GitHub</a>
            <a href={`mailto:${LINKS.email}`} className="text-[#c7d3ea] hover:text-white">{LINKS.email}</a>
          </div>
          <span className="text-[#a9b6cf]">{c.contact.location}</span>
        </div>
      </div>
    </footer>
  );
}
