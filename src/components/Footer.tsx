import type { Content } from "../content/types";
import { GITHUB } from "../content/en";

export const LINKS = {
  email: "busaniwar@gmail.com",
  linkedin: "https://www.linkedin.com/in/nimisha-busaniwar",
  github: GITHUB,
};

export function Footer({ c, full }: { c: Content; full: boolean }) {
  return (
    <footer id="contact" className={`bg-ink text-white ${full ? "mt-28" : ""}`}>
      <div className={`mx-auto flex max-w-[1160px] flex-col gap-12 px-6 sm:px-8 ${full ? "pb-10 pt-20 sm:pt-24" : "py-8"}`}>
        {full && (
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="max-w-[620px]">
              <h2 className="font-display text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[48px]">{c.contact.heading}</h2>
              <p className="mt-4 text-[17px] text-[#c7d3ea]">{c.contact.text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${LINKS.email}`} className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-[15px] font-medium text-ink no-underline hover:bg-tint hover:text-ink">
                {c.contact.email}
              </a>
              <a href={c.cvFile} download className="inline-flex min-h-12 items-center rounded-full border border-[#4b5e80] px-6 text-[15px] font-medium text-white no-underline hover:border-white hover:text-white">
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
