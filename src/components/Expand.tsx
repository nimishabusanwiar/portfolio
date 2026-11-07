import type { ReactNode } from "react";

/** Animated open/close panel (CSS grid-rows trick, no JS measuring). */
export function Expand({ open, id, children }: { open: boolean; id: string; children: ReactNode }) {
  return (
    <div id={id} className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
      <div className="overflow-hidden" inert={!open}>{children}</div>
    </div>
  );
}
