export type Lang = "en" | "fr";

export interface Metric {
  value: string;
  label: string;
  source?: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Job {
  role: string;
  company: string;
  dates: string;
  place: string;
  summary: string;
  bullets?: string[];
  tags?: string[];
}

export interface PipelineStep {
  kind: string;
  title: string;
  note?: string;
  mine?: boolean;
}

export interface CaseStudy {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  lede: string;
  metaDescription: string;
  cardMetrics: Metric[];
  stack: string;
  repo?: string;
  facts: Fact[];
  problem: string;
  pipeline: PipelineStep[];
  pipelineNote: string;
  builtTitle: string;
  built: { title: string; body: string }[];
  results: Metric[];
  resultsNote?: string;
  /** Leave undefined until written: the section is hidden when empty. */
  limitations?: string;
}

export interface EducationItem {
  title: string;
  detail: string;
  dates: string;
}

export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  nav: {
    experience: string;
    work: string;
    skills: string;
    education: string;
    contact: string;
    skip: string;
    switchLabel: string;
  };
  hero: {
    kicker: string;
    heading: string;
    intro: string;
    cvLabel: string;
  };
  facts: Fact[];
  numbersLabel: string;
  numbers: Metric[];
  experienceTitle: string;
  experience: Job[];
  workTitle: string;
  workIntro: string;
  readCaseStudy: string;
  viewCode: string;
  skillsTitle: string;
  skills: { group: string; items: string }[];
  educationTitle: string;
  education: EducationItem[];
  languages: string;
  contact: { heading: string; email: string; cv: string; location: string };
  caseStudyUi: {
    back: string;
    problem: string;
    architecture: string;
    results: string;
    limitations: string;
    codeButton: string;
    caseStudy: string;
    pipelineAria: string;
  };
  cvFile: string;
  caseStudies: CaseStudy[];
}
