export function SectionHead({ num, title, id, intro }: { num: string; title: string; id: string; intro?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="mb-2 font-mono text-[13px] text-accent" aria-hidden="true">{num}</p>
        <h2 id={id} className="font-display text-[32px] font-semibold tracking-[-0.02em] sm:text-[40px]">{title}</h2>
      </div>
      {intro && <p className="max-w-[440px] text-[15px] text-muted">{intro}</p>}
    </div>
  );
}
