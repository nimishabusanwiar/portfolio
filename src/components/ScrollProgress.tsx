import { useScroll, useSpring } from "motion/react";
import * as m from "motion/react-m";

/** Thin bar under the header that fills as the page scrolls. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });
  return <m.div aria-hidden="true" className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-accent" style={{ scaleX }} />;
}
