import type { Content } from "../content/types";
import { casePath } from "../routes";
import { Reveal } from "../components/Reveal";
import { SectionHead } from "../components/SectionHead";
import { LINKS } from "../components/Footer";

const label = "font-mono text-[12px] uppercase tracking-[0.04em] text-subtle";

export function Home({ c }: { c: Content }) {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto flex max-w-[1120px] flex-wrap items-end gap-14 px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <Reveal className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
          <p className="font-mono text-[13px] uppercase tracking-[0.04em] text-accent">{c.hero.kicker}</p>
          <h1 className="max-w-[780px] font-display text-[40px] font-semibold leading-[1.06] tracking-[-0.025em] text-balance sm:text-[52px] lg:text-[60px]">
            {c.hero.heading}
          </h1>
          <p className="max-w-[640px] text-[17px] text-muted sm:text-[19px]">{c.hero.intro}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={c.cvFile} download className="inline-flex min-h-12 items-center rounded-md bg-ink px-5 text-[15px] font-medium text-white no-underline hover:bg-[#162a4d] hover:text-white">
              {c.hero.cvLabel}
            </a>
            <a href={`mailto:${LINKS.email}`} className="inline-flex min-h-12 items-center rounded-md border border-[#c9cfd8] px-5 text-[15px] font-medium text-ink no-underline hover:border-ink">
              {LINKS.email}
            </a>
          </div>
        </Reveal>
        <Reveal className="flex-[1_1_280px]" delay={0.1}>
          <dl className="rounded-lg border border-line bg-white text-sm">
            {c.facts.map((f, i) => (
              <div key={f.label} className={`flex justify-between gap-4 px-[18px] py-[14px] ${i < c.facts.length - 1 ? "border-b border-line-soft" : ""}`}>
                <dt className={`${label} whitespace-nowrap`}>{f.label}</dt>
                <dd className="flex items-center gap-2 text-right">
                  {i === 1 && <span aria-hidden="true" className="size-2 rounded-full bg-ok" />}
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Key numbers */}
      <section aria-label={c.numbersLabel} className="border-y border-line bg-white">
        <div className="mx-auto max-w-[1120px] sm:px-8">
          <div className="grid grid-cols-1 gap-px bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
            {c.numbers.map((n) => (
              <div key={n.value} className="flex flex-col gap-1.5 bg-white px-6 py-7">
                <span className="font-display text-[36px] font-semibold tracking-[-0.02em]">{n.value}</span>
                <span className="text-sm text-muted">{n.label}</span>
                <span className="font-mono text-[12px] text-subtle">{n.source}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section aria-labelledby="experience" className="mx-auto flex max-w-[1120px] flex-col gap-10 px-6 pt-24 sm:px-8 md:flex-row md:gap-12 md:pt-28">
        <SectionHead num="01" title={c.experienceTitle} id="experience" />
        <div className="flex min-w-0 flex-1 flex-col">
          {c.experience.map((job, i) => (
            <Reveal key={job.company}>
              <article className={`flex flex-col gap-3 ${i === 0 ? "pb-10" : "py-10"} ${i === c.experience.length - 1 ? "pb-0" : "border-b border-line"}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-[19px] font-semibold sm:text-[20px]">
                    {job.role}, {job.company}
                  </h3>
                  <span className="font-mono text-[13px] text-subtle">
                    {job.dates} · {job.place}
                  </span>
                </div>
                <p className="text-muted">{job.summary}</p>
                {job.bullets && (
                  <ul className="flex list-disc flex-col gap-2.5 pl-5 marker:text-subtle">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {job.tags && (
                  <ul className="flex flex-wrap gap-2 pt-1" aria-label="Stack">
                    {job.tags.map((t) => (
                      <li key={t} className="rounded border border-[#dde3ec] px-2.5 py-1 font-mono text-[12px] text-chip">{t}</li>
                    ))}
                  </ul>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Work */}
      <section aria-labelledby="work" className="mx-auto flex max-w-[1120px] flex-col gap-10 px-6 pt-24 sm:px-8 md:pt-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead num="02" title={c.workTitle} id="work" />
          <p className="max-w-[420px] text-[15px] text-muted">{c.workIntro}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {c.caseStudies.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06} className="flex">
              <article className="flex flex-1 flex-col gap-4 rounded-[10px] border border-line bg-white p-7 transition-shadow hover:shadow-[0_8px_30px_-12px_rgba(11,27,51,0.18)]">
                <p className={label}>{p.kicker}</p>
                <h3 className="font-display text-[22px] font-semibold leading-tight tracking-[-0.01em]">
                  <a href={casePath(c.lang, p.slug)} className="text-ink no-underline hover:text-accent">{p.title}</a>
                </h3>
                <p className="text-[15px] text-muted">{p.summary}</p>
                <dl className="flex gap-6 border-y border-line-soft py-3.5">
                  {p.cardMetrics.map((m) => (
                    <div key={m.label} className="flex flex-col-reverse justify-end">
                      <dt className="text-[13px] text-subtle">{m.label}</dt>
                      <dd className="font-display text-[24px] font-semibold">{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="font-mono text-[12px] text-chip">{p.stack}</p>
                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-1 text-[15px] font-medium">
                  <a href={casePath(c.lang, p.slug)} aria-label={`${c.readCaseStudy}: ${p.title}`}>{c.readCaseStudy}</a>
                  {p.repo && <a href={p.repo} aria-label={`${c.viewCode}: ${p.title}`}>{c.viewCode}</a>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section aria-labelledby="skills" className="mx-auto flex max-w-[1120px] flex-col gap-10 px-6 pt-24 sm:px-8 md:flex-row md:gap-12 md:pt-28">
        <SectionHead num="03" title={c.skillsTitle} id="skills" />
        <Reveal className="min-w-0 flex-1">
          <dl className="flex flex-col">
            {c.skills.map((s, i) => (
              <div key={s.group} className={`flex flex-col gap-1 py-[18px] sm:flex-row sm:gap-8 ${i === 0 ? "pt-0" : ""} ${i < c.skills.length - 1 ? "border-b border-line" : ""}`}>
                <dt className="font-semibold sm:basis-[160px] sm:shrink-0">{s.group}</dt>
                <dd className="text-chip">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* Education */}
      <section aria-labelledby="education" className="mx-auto flex max-w-[1120px] flex-col gap-10 px-6 pt-24 sm:px-8 md:flex-row md:gap-12 md:pt-28">
        <SectionHead num="04" title={c.educationTitle} id="education" />
        <Reveal className="flex min-w-0 flex-1 flex-col">
          {c.education.map((e, i) => (
            <div key={e.title} className={`flex flex-wrap justify-between gap-x-6 gap-y-1 ${i === 0 ? "pb-6" : "py-6"} ${i < c.education.length - 1 ? "border-b border-line" : "pb-0"}`}>
              <div className="min-w-0 flex-[1_1_380px]">
                <h3 className="text-[18px] font-semibold">{e.title}</h3>
                <p className="mt-1 text-[15px] text-muted">{e.detail}</p>
              </div>
              <span className="font-mono text-[13px] text-subtle">{e.dates}</span>
            </div>
          ))}
          <p className="mt-8 rounded-lg bg-tint px-5 py-[18px] text-[15px] text-chip">{c.languages}</p>
        </Reveal>
      </section>
    </>
  );
}
