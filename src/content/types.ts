export type Lang = "en" | "fr";

export type Category = "genai" | "ml" | "mlops" | "cv";

export interface Metric {
  value: string;
  label: string;
}

export interface Fact {
  label: string;
  value: string;
}

export interface Role {
  title: string;
  dates: string;
  bullets: string[];
}

export interface Job {
  company: string;
  place: string;
  context?: string;
  roles: Role[];
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
  category: Category;
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
  objective: string;
  dataset: string;
  pipeline: PipelineStep[];
  pipelineNote: string;
  technologies: string[];
  /** Empty = section hidden (contribution not yet confirmed). */
  contribution: string[];
  methodology: { title: string; body: string }[];
  results: Metric[];
  resultsNote?: string;
  /** Leave undefined until written: the section is hidden when empty. */
  limitations?: string;
}

export interface SmallProject {
  title: string;
  category: Category;
  context: string;
  summary: string;
  stack: string;
  repo?: string;
}

export interface SkillGroup {
  group: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  url: string;
  dates: string;
  detail: string;
  coursework?: string[];
}

export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  nav: {
    about: string;
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
    workButton: string;
    contactButton: string;
    cvButton: string;
    previously: string;
    openTo: string;
    photoAlt: string;
  };
  experienceTitle: string;
  experience: Job[];
  workTitle: string;
  workIntro: string;
  filters: Record<"all" | Category, string>;
  featuredLabel: string;
  moreLabel: string;
  readCaseStudy: string;
  viewCode: string;
  noRepo: string;
  smallProjects: SmallProject[];
  skillsTitle: string;
  skillsIntro: string;
  skills: SkillGroup[];
  educationTitle: string;
  education: EducationItem[];
  courseworkButton: string;
  visitSite: string;
  languagesTitle: string;
  languages: string;
  contact: { heading: string; text: string; email: string; cv: string; location: string };
  caseStudyUi: {
    back: string;
    caseStudy: string;
    problem: string;
    objective: string;
    dataset: string;
    architecture: string;
    technologies: string;
    contribution: string;
    methodology: string;
    results: string;
    limitations: string;
    codeButton: string;
    noRepoNote: string;
    pipelineAria: string;
  };
  cvFile: string;
  caseStudies: CaseStudy[];
}
