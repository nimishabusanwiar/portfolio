import { Fragment, type ReactNode } from "react";
import type { CaseStudy as CS, Content } from "../content/types";
import { casePath } from "../routes";
import { Reveal } from "../components/Reveal";
import { Arrow, GitHubIcon } from "../components/Icons";

const mono = "font-mono text-[12px] uppercase tracking-[0.06em]";
const h2 = "font-display text-[22px] font-semibold tracking-[-0.01em] sm:text-[24px]";
const wrap = "mx-auto max-w-[1160px] px-6 sm:px-8";

function Row({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal className={`${wrap} grid gap-3 pt-14 md:grid-cols-[240px_1fr] md:gap-12 md:pt-16`}>
      <h2 className={h2}>{title}</h2>
      <div className="min-w-0 max-w-[760px] text-[17px] leading-relaxed text-chip">{children}</div>
    </Reveal>
  );
}

export function CaseStudy({ c, cs, homeHref }: { c: Content; cs: CS; homeHref: string }) {
  const ui = c.caseStudyUi;
  const pipelineText = cs.pipeline.map((s) => s.title).join(" → ");
  const idx = c.caseStudies.findIndex((s) => s.slug === cs.slug);
  const next = c.caseStudies[(idx + 1) % c.caseStudies.length];

  return (
    <article>
      <header className="border-b border-line bg-white">
        <Reveal className={`${wrap} flex flex-col gap-5 pb-12 pt-10 sm:pt-14`}>
          <a href={`${homeHref}#work`} className="inline-flex w-fit items-center gap-1.5 text-[14px] font-medium no-underline hover:underline">
            <Arrow className="rotate-180" /> {ui.back}
          </a>
          <p className={`${mono} text-accent`}>{ui.caseStudy} · {cs.kicker}</p>
          <h1 className="max-w-[860px] font-display text-[38px] font-semibold leading-[1.06] tracking-[-0.03em] text-balance sm:text-[54px]">{cs.title}</h1>
          <p className="max-w-[760px] text-[18px] leading-relaxed text-muted sm:text-[20px]">{cs.lede}</p>
          <dl className="mt-4 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {cs.facts.map((f) => (
              <div key={f.label} className="bg-paper px-5 py-4">
                <dt className={`${mono} text-subtle`}>{f.label}</dt>
                <dd className="mt-1 text-[15px] font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
          <div>
            {cs.repo ? (
              <a href={cs.repo} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-[14.5px] font-medium text-white no-underline hover:bg-[#162a4d] hover:text-white">
                <GitHubIcon /> {ui.codeButton}
              </a>
            ) : (
              <p className="text-[14px] text-subtle">{ui.noRepoNote}</p>
            )}
          </div>
        </Reveal>
      </header>

      <Row title={ui.problem}><p>{cs.problem}</p></Row>
      <Row title={ui.objective}><p>{cs.objective}</p></Row>
      <Row title={ui.dataset}><p>{cs.dataset}</p></Row>

      <Reveal className={`${wrap} flex flex-col gap-6 pt-14 md:pt-16`}>
        <h2 className={h2}>{ui.architecture}</h2>
        <figure className="m-0 flex flex-col gap-3">
          <ol aria-label={`${ui.pipelineAria}: ${pipelineText}`} className="flex flex-col items-stretch gap-2 rounded-[20px] border border-line bg-white p-5 sm:p-7 lg:flex-row lg:gap-2.5">
            {cs.pipeline.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && (
                  <li aria-hidden="true" className="flex items-center justify-center text-[#8a94a6]">
                    <Arrow className="rotate-90 lg:rotate-0" />
                  </li>
                )}
                <li className={`flex flex-1 flex-col gap-1.5 rounded-xl p-4 ${step.mine ? "border-2 border-accent bg-accent-tint" : "border border-[#dde3ec] bg-paper"}`}>
                  <span className={`font-mono text-[11px] uppercase ${step.mine ? "text-accent" : "text-subtle"}`}>{step.kind}</span>
                  <span className="text-[14.5px] font-semibold leading-snug">{step.title}</span>
                  {step.note && <span className="text-[13px] text-muted">{step.note}</span>}
                </li>
              </Fragment>
            ))}
          </ol>
          <figcaption className="text-[14px] text-subtle">{cs.pipelineNote}</figcaption>
        </figure>
      </Reveal>

      <Row title={ui.technologies}>
        <ul className="flex flex-wrap gap-2">
          {cs.technologies.map((t) => (
            <li key={t} className="rounded-full border border-[#dde3ec] bg-white px-3 py-1 font-mono text-[12.5px] text-chip">{t}</li>
          ))}
        </ul>
      </Row>

      {cs.contribution.length > 0 && (
        <Row title={ui.contribution}>
          <ul className="flex flex-col gap-3">
            {cs.contribution.map((b) => (
              <li key={b} className="flex gap-3"><span aria-hidden="true" className="mt-[11px] size-1.5 shrink-0 rounded-full bg-accent" />{b}</li>
            ))}
          </ul>
        </Row>
      )}

      <Row title={ui.methodology}>
        <div className="flex flex-col gap-6">
          {cs.methodology.map((m) => (
            <div key={m.title}>
              <h3 className="mb-1.5 text-[17px] font-semibold text-ink">{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </Row>

      <Reveal className={`${wrap} flex flex-col gap-6 pt-14 md:pt-16`}>
        <h2 className={h2}>{ui.results}</h2>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.results.map((r) => (
            <div key={r.label} className="flex flex-col-reverse justify-end rounded-[18px] border border-line bg-white p-6">
              <dt className="text-[14px] text-muted">{r.label}</dt>
              <dd className="font-display text-[32px] font-semibold tracking-[-0.02em]">{r.value}</dd>
            </div>
          ))}
        </dl>
        {cs.resultsNote && <p className="max-w-[860px] text-[15.5px] leading-relaxed text-muted">{cs.resultsNote}</p>}
      </Reveal>

      {cs.limitations && (
        <Row title={ui.limitations}><p>{cs.limitations}</p></Row>
      )}

      <div className={`${wrap} pb-24 pt-20`}>
        <a href={casePath(c.lang, next.slug)} className="group flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-line bg-white p-7 text-ink no-underline hover:border-[#c9d3e3] hover:text-ink">
          <span>
            <span className={`${mono} block text-subtle`}>{ui.caseStudy}</span>
            <span className="mt-1 block font-display text-[22px] font-semibold">{next.title}</span>
          </span>
          <Arrow className="size-5 text-accent transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}
