export function SectionHead({ num, title, id }: { num: string; title: string; id: string }) {
  return (
    <div className="md:basis-[220px] md:shrink-0">
      <p className="mb-2 font-mono text-[13px] text-accent" aria-hidden="true">{num}</p>
      <h2 id={id} className="font-display text-[28px] font-semibold tracking-[-0.02em] sm:text-[32px]">{title}</h2>
    </div>
  );
}
