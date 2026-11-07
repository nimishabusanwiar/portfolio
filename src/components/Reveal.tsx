import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { useInView } from "motion/react";
import * as m from "motion/react-m";

// useLayoutEffect warns during SSR; it never runs there, so swap it for a no-op on the server.
const useIsoLayoutEffect = typeof window === "undefined" ? () => {} : useLayoutEffect;

/**
 * Fades content up when it scrolls into view.
 * The prerendered HTML is always visible (no blank page before JS loads, good LCP).
 * After hydration, only elements that start below the fold are hidden and then revealed.
 * Reduced-motion users get no movement (MotionConfig reducedMotion="user").
 */
export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -60px 0px" });
  const [armed, setArmed] = useState(false);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (el && el.getBoundingClientRect().top > window.innerHeight) setArmed(true);
  }, []);

  const hidden = armed && !inView;
  return (
    <m.div
      ref={ref}
      data-reveal
      className={className}
      initial={false}
      animate={hidden ? { opacity: 0, y: 14 } : { opacity: 1, y: 0 }}
      transition={hidden ? { duration: 0 } : { duration: 0.5, ease: [0.2, 0, 0, 1], delay }}
    >
      {children}
    </m.div>
  );
}
