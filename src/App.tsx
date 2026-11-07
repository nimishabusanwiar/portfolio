import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { CaseStudy } from "./pages/CaseStudy";
import { alternatePath, contentFor, homePath, resolveRoute } from "./routes";

export function App({ path }: { path: string }) {
  const route = resolveRoute(path) ?? resolveRoute("/")!;
  const c = contentFor(route.lang);
  const altLang = route.lang === "en" ? "fr" : "en";
  const home = homePath(route.lang);
  const cs = route.page === "case" ? c.caseStudies.find((s) => s.slug === route.slug) : undefined;

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <Header c={c} homeHref={home} altHref={alternatePath(route, altLang)} altLang={altLang} onHome={route.page === "home"} />
        <main id="main" tabIndex={-1} className="outline-none">
          {cs ? <CaseStudy c={c} cs={cs} homeHref={home} /> : <Home c={c} />}
        </main>
        <Footer c={c} full={route.page === "home"} />
      </LazyMotion>
    </MotionConfig>
  );
}
