import { useState } from "react";
import type { Category, Content } from "../content/types";
import { casePath } from "../routes";
import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { Expand } from "../components/Expand";
import { Arrow, External, GitHubIcon, Plus } from "../components/Icons";

const mono = "font-mono text-[12px] uppercase tracking-[0.06em]";
const wrap = "mx-auto max-w-[1160px] px-6 sm:px-8";

/** Set this to "/photo.jpg" (file in /public) once the portrait is ready. */
const PHOTO: string | null = null;

function Hero({ c }: { c: Content }) {
  return (
    <section className={`${wrap} grid items-center gap-12 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1fr_400px] lg:gap-16 lg:pb-28`}>
      <Reveal className="flex flex-col gap-6">
        <p className={`${mono} text-accent`}>{c.hero.kicker}</p>
        <h1 className="font-display text-[42px] font-semibold leading-[1.04] tracking-[-0.03em] text-balance sm:text-[56px] lg:text-[64px]">{c.hero.heading}</h1>
        <p className="max-w-[600px] text-[17px] leading-relaxed text-muted sm:text-[19px]">{c.hero.intro}</p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a href="#work" className="group inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 text-[15px] font-medium text-white no-underline hover:bg-[#162a4d] hover:text-white">
            {c.hero.workButton} <Arrow className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#contact" className="inline-flex min-h-12 items-center rounded-full border border-[#c9cfd8] bg-white px-6 text-[15px] font-medium text-ink no-underline hover:border-ink hover:text-ink">
            {c.hero.contactButton}
          </a>
          <a href={c.cvFile} download className="inline-flex min-h-12 items-center rounded-full px-4 text-[15px] font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink hover:text-ink">
            {c.hero.cvButton} (PDF)
          </a>
        </div>
        <div className="mt-4 flex flex-col gap-3 border-t border-line pt-6">
          <p className="text-[14px] text-muted">
            <span className="text-subtle">{c.hero.previously} </span>
            {c.experience.map((j, i) => (
              <span key={j.company}>
                <span className="font-semibold text-ink">{j.company}</span>
                {i < c.experience.length - 1 && <span aria-hidden="true" className="mx-2 text-[#b8c2d3]">·</span>}
              </span>
            ))}
          </p>
          <p className="flex items-center gap-2 text-[14px] text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-ok" />
            {c.hero.openTo}
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto w-full max-w-[400px]">
        {PHOTO ? (
          <img src={PHOTO} alt={c.hero.photoAlt} width={800} height={1000} className="aspect-[4/5] w-full rounded-[28px] object-cover shadow-[0_30px_60px_-30px_rgba(11,27,51,0.45)]" />
        ) : (
          <div role="img" aria-label={c.hero.photoAlt} className="relative grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-[28px] bg-ink shadow-[0_30px_60px_-30px_rgba(11,27,51,0.45)]">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#2a4a8a_0%,transparent_55%),radial-gradient(circle_at_80%_90%,#1d4ed8_0%,transparent_45%)] opacity-70" />
            <span aria-hidden="true" className="relative font-display text-[96px] font-semibold tracking-[-0.04em] text-white/90">NB</span>
          </div>
        )}
      </Reveal>
    </section>
  );
}

function Experience({ c }: { c: Content }) {
  return (
    <section aria-labelledby="experience" className={`${wrap} pt-24 sm:pt-28`}>
      <SectionHead num="01" title={c.experienceTitle} id="experience" />
      <ol className="relative mt-12 flex flex-col gap-12 border-l border-line pl-8 sm:ml-2 sm:pl-12">
        {c.experience.map((job) => (
          <li key={job.company} className="relative">
            <span aria-hidden="true" className="absolute -left-[37px] top-1.5 size-[11px] rounded-full border-2 border-accent bg-paper sm:-left-[53px]" />
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-[24px] font-semibold tracking-[-0.01em]">{job.company}</h3>
                <span className="text-[14px] text-subtle">{job.place}{job.context ? ` · ${job.context}` : ""}</span>
              </div>
              <div className="mt-5 flex flex-col gap-7">
                {job.roles.map((r) => (
                  <div key={r.title} className="grid gap-2 md:grid-cols-[220px_1fr] md:gap-8">
                    <div>
                      <p className="text-[16px] font-semibold">{r.title}</p>
                      <p className="mt-0.5 font-mono text-[12.5px] text-subtle">{r.dates}</p>
                    </div>
                    <ul className="flex list-disc flex-col gap-2.5 pl-5 text-[15.5px] text-chip marker:text-[#9aa5b8]">
                      {r.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
              {job.tags && (
                <ul aria-label="Stack" className="mt-5 flex flex-wrap gap-2 md:ml-[252px]">
                  {job.tags.map((t) => (
                    <li key={t} className="rounded-full border border-[#dde3ec] bg-white px-3 py-1 font-mono text-[12px] text-chip">{t}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects({ c }: { c: Content }) {
  const [filter, setFilter] = useState<"all" | Category>("all");
  const show = (cat: Category) => filter === "all" || filter === cat;
  const featured = c.caseStudies.filter((p) => show(p.category));
  const more = c.smallProjects.filter((p) => show(p.category));
  const keys = Object.keys(c.filters) as ("all" | Category)[];

  return (
    <section aria-labelledby="work" className={`${wrap} pt-24 sm:pt-28`}>
      <SectionHead num="02" title={c.workTitle} id="work" intro={c.workIntro} />
      <div role="group" aria-label={c.workTitle} className="mt-8 flex flex-wrap gap-2">
        {keys.map((k) => (
          <button
            key={k}
            type="button"
            aria-pressed={filter === k}
            onClick={() => setFilter(k)}
            className={`min-h-10 cursor-pointer rounded-full border px-4 text-[14px] font-medium transition-colors ${filter === k ? "border-ink bg-ink text-white" : "border-line bg-white text-muted hover:border-ink hover:text-ink"}`}
          >
            {c.filters[k]}
          </button>
        ))}
      </div>

      {featured.length > 0 && (
        <>
          <h3 className={`${mono} mt-10 text-subtle`}>{c.featuredLabel}</h3>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {featured.map((p) => (
              <article key={p.slug} className="group relative flex flex-col gap-4 rounded-[20px] border border-line bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-[#c9d3e3] hover:shadow-[0_20px_40px_-24px_rgba(11,27,51,0.25)] motion-reduce:hover:translate-y-0 sm:p-8">
                <p className={`${mono} text-accent`}>{p.kicker}</p>
                <h4 className="font-display text-[24px] font-semibold leading-tight tracking-[-0.015em]">
                  <a href={casePath(c.lang, p.slug)} className="text-ink no-underline after:absolute after:inset-0 after:rounded-[20px] hover:text-ink">{p.title}</a>
                </h4>
                <p className="text-[15.5px] text-muted">{p.summary}</p>
                <dl className="mt-auto flex gap-8 border-t border-line-soft pt-4">
                  {p.cardMetrics.map((m) => (
                    <div key={m.label} className="flex flex-col-reverse justify-end">
                      <dt className="text-[13px] text-subtle">{m.label}</dt>
                      <dd className="font-display text-[22px] font-semibold">{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[12px] text-chip">{p.stack}</p>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-medium text-accent">
                    {c.readCaseStudy} <Arrow className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </>
      )}

      {more.length > 0 && (
        <>
          <h3 className={`${mono} mt-14 text-subtle`}>{c.moreLabel}</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <article key={p.title} className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-6">
                <p className="text-[12.5px] text-subtle">{p.context}</p>
                <h4 className="text-[17px] font-semibold leading-snug">{p.title}</h4>
                <p className="text-[14.5px] text-muted">{p.summary}</p>
                <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-2">
                  <p className="font-mono text-[11.5px] text-chip">{p.stack}</p>
                  {p.repo ? (
                    <a href={p.repo} aria-label={`${c.viewCode}: ${p.title}`} className="inline-flex items-center gap-1.5 text-[13.5px] font-medium">
                      <GitHubIcon /> {c.viewCode}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function Skills({ c }: { c: Content }) {
  const [open, setOpen] = useState(0);
  const sel = c.skills[open];
  return (
    <section aria-labelledby="skills" className={`${wrap} pt-24 sm:pt-28`}>
      <SectionHead num="03" title={c.skillsTitle} id="skills" intro={c.skillsIntro} />
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {c.skills.map((s, i) => {
          const isOpen = open === i;
          return (
            <button
              key={s.group}
              type="button"
              aria-expanded={isOpen}
              aria-controls="skill-panel"
              onClick={() => setOpen(i)}
              className={`flex min-h-[88px] cursor-pointer flex-col justify-between gap-3 rounded-2xl border p-4 text-left transition-colors ${isOpen ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-[#9fb0cc]"}`}
            >
              <span className="text-[15px] font-semibold leading-snug">{s.group}</span>
              <span className={`font-mono text-[12px] ${isOpen ? "text-[#c7d3ea]" : "text-subtle"}`}>{s.items.length} {c.lang === "fr" ? "outils" : "tools"}</span>
            </button>
          );
        })}
      </div>
      <div id="skill-panel" role="region" aria-live="polite" aria-label={sel.group} className="mt-3 rounded-2xl border border-line bg-white p-6">
        <p className="text-[15px] font-semibold">{sel.group}</p>
        <ul key={sel.group} className="mt-4 flex flex-wrap gap-2 motion-safe:animate-[fadeUp_.3s_ease-out]">
          {sel.items.map((it) => (
            <li key={it} className="rounded-full bg-tint px-3.5 py-1.5 text-[14px] text-chip">{it}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Education({ c }: { c: Content }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section aria-labelledby="education" className={`${wrap} pt-24 sm:pt-28`}>
      <SectionHead num="04" title={c.educationTitle} id="education" />
      <div className="mt-10 flex flex-col gap-4">
        {c.education.map((e, i) => (
          <Reveal key={e.degree}>
            <article className="rounded-2xl border border-line bg-white p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                <div className="min-w-0 flex-[1_1_420px]">
                  <h3 className="text-[19px] font-semibold">{e.degree}</h3>
                  <p className="mt-1 text-[15.5px]">
                    <a href={e.url} className="inline-flex items-center gap-1.5 font-medium">
                      {e.school} <External />
                      <span className="sr-only"> ({c.visitSite})</span>
                    </a>
                  </p>
                  <p className="mt-2 text-[15px] text-muted">{e.detail}</p>
                </div>
                <span className="font-mono text-[12.5px] text-subtle">{e.dates}</span>
              </div>
              {e.coursework && (
                <>
                  <button
                    type="button"
                    aria-expanded={open === i}
                    aria-controls={`course-${i}`}
                    onClick={() => setOpen(open === i ? null : i)}
                    className="mt-4 inline-flex min-h-10 cursor-pointer items-center gap-2 rounded-full border border-line px-4 text-[14px] font-medium text-ink hover:border-ink"
                  >
                    {c.courseworkButton} ({e.coursework.length}) <Plus open={open === i} />
                  </button>
                  <Expand open={open === i} id={`course-${i}`}>
                    <ul className="mt-4 grid gap-x-6 gap-y-1.5 text-[14.5px] text-chip sm:grid-cols-2 lg:grid-cols-3">
                      {e.coursework.map((cw) => <li key={cw} className="flex gap-2"><span aria-hidden="true" className="text-accent">·</span>{cw}</li>)}
                    </ul>
                  </Expand>
                </>
              )}
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 rounded-2xl bg-tint px-6 py-5">
        <h3 className="text-[15px] font-semibold">{c.languagesTitle}</h3>
        <p className="text-[15px] text-chip">{c.languages}</p>
      </div>
    </section>
  );
}

export function Home({ c }: { c: Content }) {
  return (
    <>
      <Hero c={c} />
      <Experience c={c} />
      <Projects c={c} />
      <Skills c={c} />
      <Education c={c} />
    </>
  );
}
