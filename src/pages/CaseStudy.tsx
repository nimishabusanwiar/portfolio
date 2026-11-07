import { Fragment } from "react";
import type { CaseStudy as CS, Content } from "../content/types";
import { Reveal } from "../components/Reveal";

const label = "font-mono text-[12px] uppercase tracking-[0.04em] text-subtle";
const h2 = "font-display text-[24px] font-semibold sm:text-[26px]";

function Row({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="mx-auto flex max-w-[1120px] flex-col gap-4 px-6 pt-16 sm:px-8 md:flex-row md:gap-12 md:pt-20">
      <h2 className={`${h2} md:basis-[220px] md:shrink-0`}>{title}</h2>
      <div className="min-w-0 flex-1">{children}</div>
    </Reveal>
  );
}

export function CaseStudy({ c, cs, homeHref }: { c: Content; cs: CS; homeHref: string }) {
  const ui = c.caseStudyUi;
  const pipelineText = cs.pipeline.map((s) => s.title).join(" → ");
  return (
    <article>
      <Reveal className="mx-auto flex max-w-[1120px] flex-col gap-5 px-6 pb-4 pt-14 sm:px-8 sm:pt-20">
        <a href={`${homeHref}#work`} className="w-fit text-sm font-medium no-underline hover:underline">← {ui.back}</a>
        <p className="font-mono text-[13px] uppercase tracking-[0.04em] text-accent">{ui.caseStudy} · {cs.kicker}</p>
        <h1 className="max-w-[820px] font-display text-[36px] font-semibold leading-[1.08] tracking-[-0.025em] text-balance sm:text-[52px]">{cs.title}</h1>
        <p className="max-w-[720px] text-[18px] text-muted sm:text-[20px]">{cs.lede}</p>
        <dl className="mt-4 grid grid-cols-1 gap-px border-y border-line bg-line-soft sm:grid-cols-2 lg:grid-cols-4">
          {cs.facts.map((f) => (
            <div key={f.label} className="bg-paper py-[18px] sm:px-4 first:sm:pl-0">
              <dt className={label}>{f.label}</dt>
              <dd className="mt-1 text-[15px]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Row title={ui.problem}>
        <p className="text-[17px] text-chip">{cs.problem}</p>
      </Row>

      <Reveal className="mx-auto flex max-w-[1120px] flex-col gap-6 px-6 pt-16 sm:px-8 md:pt-20">
        <h2 className={h2}>{ui.architecture}</h2>
        <figure className="m-0 flex flex-col gap-3">
          <ol aria-label={`${ui.pipelineAria}: ${pipelineText}`} className="flex flex-col items-stretch gap-2 rounded-[10px] border border-line bg-white p-5 sm:p-8 lg:flex-row lg:gap-3">
            {cs.pipeline.map((step, i) => (
              <Fragment key={step.title}>
                {i > 0 && (
                  <li aria-hidden="true" className="flex items-center justify-center text-[18px] text-[#8a94a6]">
                    <span className="lg:hidden">↓</span>
                    <span className="hidden lg:inline">→</span>
                  </li>
                )}
                <li className={`flex flex-1 flex-col gap-1.5 rounded-lg p-4 ${step.mine ? "border-2 border-accent bg-accent-tint" : "border border-[#dde3ec]"}`}>
                  <span className={`font-mono text-[11px] uppercase ${step.mine ? "text-accent" : "text-subtle"}`}>{step.kind}</span>
                  <span className="text-[15px] font-semibold leading-snug">{step.title}</span>
                  {step.note && <span className="text-[13px] text-muted">{step.note}</span>}
                </li>
              </Fragment>
            ))}
          </ol>
          <figcaption className="text-sm text-subtle">{cs.pipelineNote}</figcaption>
        </figure>
      </Reveal>

      <Row title={cs.builtTitle}>
        <div className="flex flex-col gap-6">
          {cs.built.map((b) => (
            <div key={b.title}>
              <h3 className="mb-1.5 text-[18px] font-semibold">{b.title}</h3>
              <p className="text-chip">{b.body}</p>
            </div>
          ))}
        </div>
      </Row>

      <Reveal className="mx-auto flex max-w-[1120px] flex-col gap-6 px-6 pt-16 sm:px-8 md:pt-20">
        <h2 className={h2}>{ui.results}</h2>
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.results.map((r) => (
            <div key={r.label} className="flex flex-col-reverse justify-end rounded-[10px] border border-line bg-white p-6">
              <dt className="text-sm text-muted">{r.label}</dt>
              <dd className="font-display text-[34px] font-semibold">{r.value}</dd>
            </div>
          ))}
        </dl>
        {cs.resultsNote && <p className="max-w-[820px] text-[15px] text-muted">{cs.resultsNote}</p>}
      </Reveal>

      {cs.limitations && (
        <Row title={ui.limitations}>
          <p className="text-chip">{cs.limitations}</p>
        </Row>
      )}

      <div className="mx-auto flex max-w-[1120px] flex-wrap gap-3 px-6 pb-24 pt-16 sm:px-8 md:pt-20">
        {cs.repo && (
          <a href={cs.repo} className="inline-flex min-h-12 items-center rounded-md bg-ink px-5 text-[15px] font-medium text-white no-underline hover:bg-[#162a4d] hover:text-white">
            {ui.codeButton}
          </a>
        )}
        <a href={`${homeHref}#work`} className="inline-flex min-h-12 items-center rounded-md border border-[#c9cfd8] px-5 text-[15px] font-medium text-ink no-underline hover:border-ink">
          {ui.back}
        </a>
      </div>
    </article>
  );
}
