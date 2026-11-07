import type { Content } from "./types";

// Source of truth: Nimisha's current CVs and the verified numbers in the project portfolio file.
// Never add a number here that isn't in those sources.

export const SITE_URL = "https://nimisha-busaniwar.vercel.app"; // update after first deploy / custom domain

export const en: Content = {
  lang: "en",
  meta: {
    title: "Nimisha Busaniwar | AI Engineer (RAG, LLM evaluation)",
    description:
      "MSc AI student at EPITA, Paris. Sole developer of a bilingual RAG assistant on Amazon Bedrock at Navyr.ai. Looking for a 6-month end-of-studies internship, available immediately.",
  },
  nav: {
    experience: "Experience",
    work: "Work",
    skills: "Skills",
    education: "Education",
    contact: "Contact",
    skip: "Skip to content",
    switchLabel: "Français",
  },
  hero: {
    kicker: "AI Engineer · Paris",
    heading: "I build RAG systems and check that their answers hold up.",
    intro:
      "MSc Artificial Intelligence student at EPITA. At Navyr.ai I was the sole developer of a bilingual RAG assistant on Amazon Bedrock over a benchmark of ~600K enterprise AI use cases.",
    cvLabel: "Download CV (PDF)",
  },
  facts: [
    { label: "Looking for", value: "6-month end-of-studies internship" },
    { label: "Availability", value: "Immediately" },
    { label: "Agreement", value: "EPITA internship agreement" },
    { label: "Location", value: "Paris, open to France and EU" },
    { label: "Languages", value: "English C1 · French B1" },
  ],
  numbersLabel: "Key numbers",
  numbers: [
    { value: "200+", label: "real questions tested across 15 types, grouped into 13 failure patterns", source: "Navyr.ai" },
    { value: "19/19", label: "jury score for an agentic legal RAG assistant", source: "Hackathon" },
    { value: "27.5 ms", label: "mean API latency for retrieval plus reranking (35.7 ms p95)", source: "Recommender" },
    { value: "0.96", label: "ROC-AUC on 299,695 transactions, served and monitored", source: "Fraud pipeline" },
  ],
  experienceTitle: "Experience",
  experience: [
    {
      role: "AI Engineer Intern",
      company: "Navyr.ai",
      dates: "Aug 2026 – Nov 2026",
      place: "Paris",
      summary:
        "AI decision-intelligence startup. Sole developer of the AI Assistant, an English/French RAG assistant over a benchmark of ~600K enterprise AI use cases.",
      bullets: [
        "Maintained hybrid retrieval: BM25 + vector search fused with RRF, Cohere reranking, Athena SQL over S3, Claude on Amazon Bedrock and an ElastiCache semantic cache.",
        "Fixed production bugs end to end through Jira, GitLab merge requests and CI, including French retrieval failures (\"santé\" and \"banque\" returning zero results) and duplicated sums in sector comparisons.",
        "Tested 200+ real questions across 15 question types in English and French; grouped failures into 13 patterns and 28 issues, and tracked 14 confirmed fixes. The co-founder adopted the method for two other product modules.",
        "Mission owner of the Data Connex programme (12 new databases): assessed 11 data sources (7 go, 4 go with conditions) and created a 19-column outcomes table in the Athena data lake.",
        "Researched ML outcomes in financial services: reviewed 41 cases and searched 23,334 finance use cases; showed that public sources almost never report failures (survivorship bias) and proposed an outcome registry instead.",
        "Designed an MCP-based integration proposal between the Python agent and an ontology engine, with tiered routing between standard retrieval and ontology reasoning.",
      ],
      tags: ["Amazon Bedrock", "BM25 + vectors", "Cohere Rerank", "Athena", "MCP", "GitLab CI"],
    },
    {
      role: "Data Analyst",
      company: "Edible Software Solutions",
      dates: "Jan 2025 – Sep 2025",
      place: "India",
      summary:
        "Wrote SQL to extract, join and aggregate multi-source business data behind KPI dashboards in Power BI and Tableau. Cleaned raw data and produced recurring KPI reports for business teams.",
    },
    {
      role: "Machine Learning Intern",
      company: "360DigiTMG",
      dates: "Jul 2024 – Dec 2024",
      place: "Hyderabad",
      summary: "Cleaned and structured historical power-trading data with Pandas into sequences for an LSTM forecaster.",
    },
  ],
  workTitle: "Selected work",
  workIntro: "Each project has a case study with the architecture, who built what, and the measured result.",
  readCaseStudy: "Read case study",
  viewCode: "Code on GitHub",
  skillsTitle: "Skills",
  skills: [
    { group: "LLM & RAG", items: "Amazon Bedrock, RAG, hybrid search (BM25 + vectors, RRF), reranking, MCP, tool calling, LangChain, LLM-as-a-Judge evaluation" },
    { group: "Machine learning", items: "PyTorch, scikit-learn, LightGBM, time series, NLP" },
    { group: "Coding", items: "Python (Pandas, FastAPI, pytest), SQL" },
    { group: "Data & cloud", items: "AWS (S3, Glue, Athena, Lambda, ElastiCache), PostgreSQL / pgvector, Airflow, Great Expectations" },
    { group: "Tools", items: "Docker, Git, GitLab CI/CD, Jira, Linux, Grafana, Power BI, Tableau" },
  ],
  educationTitle: "Education",
  education: [
    { title: "MSc Artificial Intelligence, EPITA", detail: "Deep Learning, NLP & LLMs, RAG, Reinforcement Learning, MLOps", dates: "Sep 2025 – 2027 (expected) · Paris" },
    { title: "Diploma in Artificial Intelligence, State University of New York", detail: "Online", dates: "Mar 2025 – Sep 2025" },
    { title: "B.Tech Information Technology, JBIET", detail: "Ranked 5th in class", dates: "2020 – 2024 · Hyderabad" },
  ],
  languages: "French B1 (working toward B2) · English C1 (professional) · Telugu, Hindi native · Marathi intermediate",
  contact: {
    heading: "Hiring for a 6-month AI internship? Let's talk.",
    email: "Email me",
    cv: "Download CV",
    location: "Paris, France",
  },
  caseStudyUi: {
    back: "Back to all work",
    problem: "The problem",
    architecture: "Architecture",
    results: "Results",
    limitations: "What I would change",
    codeButton: "View code on GitHub",
    caseStudy: "Case study",
    pipelineAria: "Pipeline",
  },
  cvFile: "/cv/Nimisha_Busaniwar_CV_EN.pdf",
  caseStudies: [
    {
      slug: "business-law-rag",
      kicker: "Agentic RAG · Hackathon, team of 4",
      title: "Agentic RAG Assistant for Business Law",
      summary: "3-agent MCP pipeline over a 469-page legal corpus with hybrid retrieval and 3-layer anti-hallucination checks.",
      lede: "A citation-backed legal assistant over a 469-page business law corpus, built in a hackathon and scored 19/19 by the jury.",
      metaDescription:
        "Case study: agentic RAG assistant over a 469-page business law corpus. Hybrid FAISS + BM25 retrieval, 3 MCP agents, anti-hallucination checks, 19/19 jury score.",
      cardMetrics: [
        { value: "19/19", label: "jury score" },
        { value: "3/3", label: "out-of-scope refusals" },
      ],
      stack: "LangChain · FAISS · BM25 · RRF · MCP",
      repo: "https://github.com/Arun949/Business-Law-RAG-LLM-AI-Assistant",
      facts: [
        { label: "Context", value: "Tech Tribe hackathon" },
        { label: "Team", value: "Team of 4" },
        { label: "My role", value: "Query reformulation, anti-hallucination layer" },
        { label: "Stack", value: "LangChain, FAISS, BM25, MCP" },
      ],
      problem:
        "Legal answers are only useful if every claim can be traced back to the source text. A plain LLM answers confidently even when the corpus does not cover the question. The assistant had to answer from the 469 pages, cite the passage it used, and refuse questions outside the corpus.",
      pipeline: [
        { kind: "Input", title: "User question" },
        { kind: "My part", title: "Query reformulation", mine: true },
        { kind: "Retrieval", title: "FAISS + BM25, fused with RRF", note: "800-char chunks, top 5" },
        { kind: "MCP agents", title: "Researcher, Fact-Checker, Synthesiser" },
        { kind: "My part", title: "3-layer anti-hallucination check", mine: true },
        { kind: "Output", title: "Cited answer or refusal" },
      ],
      pipelineNote: "Highlighted steps are the parts I built. The rest was built with the team.",
      builtTitle: "What I built",
      built: [
        {
          title: "Query reformulation",
          body: "Rewrote user questions before retrieval so that short or ambiguous questions matched the vocabulary of the legal text. The jury evaluation score went from about 14/19 to 19/19 after this step.",
        },
        {
          title: "Anti-hallucination layer",
          body: "Three checks that validate each answer against the retrieved source passages before it is returned, so an answer without support in the corpus becomes a refusal.",
        },
      ],
      results: [
        { value: "11/11", label: "factual questions" },
        { value: "3/3", label: "cross-reference questions" },
        { value: "3/3", label: "out-of-scope refusals" },
        { value: "$0.13", label: "total API cost for 681 LLM calls" },
      ],
      resultsNote: "Evaluated with an LLM-as-a-Judge; every answer was judged faithful to its sources.",
    },
    {
      slug: "recommender",
      kicker: "Recommender systems · Team of 4",
      title: "Real-Time Recommendation Platform",
      summary: "22.6M Amazon reviews processed into 4.02M training interactions; two-tower retrieval and LightGBM reranking behind FastAPI.",
      lede: "A two-stage recommender (retrieval, then learning-to-rank) for Amazon electronics, served through a real-time web app.",
      metaDescription:
        "Case study: two-stage recommender on Amazon Reviews 2023 Electronics. Two-tower retrieval with FAISS, LightGBM LambdaRank reranking, 27.5 ms mean API latency.",
      cardMetrics: [
        { value: "27.5 ms", label: "mean latency" },
        { value: "35.7 ms", label: "p95 latency" },
      ],
      stack: "PyTorch · FAISS · LightGBM · PostgreSQL · Docker",
      repo: "https://github.com/Arun949/amazon-electronics-recs",
      facts: [
        { label: "Team", value: "Team of 4" },
        { label: "Data", value: "552K users, 148K items" },
        { label: "Stack", value: "PyTorch, FAISS, LightGBM, FastAPI" },
      ],
      problem:
        "Recommend electronics to 552K users across 148K items fast enough for a live page. The catalogue is very head-heavy and 31% of test items never appear in training, so a model that only memorises popular items looks good on recall and is useless in practice.",
      pipeline: [
        { kind: "Data", title: "22.6M reviews → 4.02M interactions", note: "time-based split" },
        { kind: "Retrieval", title: "Two-tower model (PyTorch)", note: "in-batch negatives" },
        { kind: "Candidates", title: "FAISS nearest-neighbour search" },
        { kind: "Ranking", title: "LightGBM LambdaRank", note: "12 features" },
        { kind: "Serving", title: "FastAPI + PostgreSQL" },
        { kind: "Output", title: "Streamlit app" },
      ],
      pipelineNote: "Built as a team of 4.",
      builtTitle: "How it works",
      built: [
        {
          title: "Baseline first",
          body: "Matrix factorisation with Bayesian Personalised Ranking (MF-BPR), implemented from scratch, gave a pairwise ranking baseline to beat.",
        },
        {
          title: "Retrieve, then rank",
          body: "A two-tower model builds user vectors from history and FAISS returns candidates. LightGBM LambdaRank reranks them with 12 features on user behaviour, item popularity, interaction history and time.",
        },
        {
          title: "Cold start",
          body: "Results were analysed by user activity bucket, and users with no history are routed to a popularity fallback.",
        },
      ],
      results: [
        { value: "2.5×", label: "NDCG@10 after reranking vs retrieval alone" },
        { value: "+25%", label: "NDCG@10 vs the popularity baseline (0.0026 vs 0.0021)" },
        { value: "85%", label: "catalogue coverage vs 0.05% for popularity" },
        { value: "27.5 ms", label: "mean API latency (35.7 ms p95)" },
      ],
      resultsNote:
        "Absolute recall and NDCG are low (about 0.003 to 0.008) because the catalogue has 148K items and is very head-heavy, and the popularity baseline has the best raw Recall@20. The gain that matters is from reranking and coverage.",
    },
    {
      slug: "fraud-mlops",
      kicker: "MLOps · Individual project",
      title: "Fraud Detection Data & MLOps Pipeline",
      summary: "Airflow DAGs for ingestion, training and inference, Great Expectations data checks, FastAPI in Docker, drift monitored in Grafana.",
      lede: "A fraud model treated as a system: data validation, scheduled training, a containerised API and monitoring.",
      metaDescription:
        "Case study: end-to-end fraud detection pipeline on 299,695 transactions with Airflow, Great Expectations, FastAPI, Docker and Grafana. ROC-AUC 0.96.",
      cardMetrics: [
        { value: "0.96", label: "ROC-AUC" },
        { value: "299,695", label: "transactions" },
      ],
      stack: "Airflow · FastAPI · PostgreSQL · Grafana",
      repo: "https://github.com/nimishabusanwiar/dsp_project",
      facts: [
        { label: "Context", value: "EPITA, Data Science in Production" },
        { label: "Team", value: "Individual project" },
        { label: "Data", value: "299,695 transactions, 2.2% fraud" },
        { label: "Stack", value: "Airflow, FastAPI, Docker, Grafana" },
      ],
      problem:
        "Only 2.2% of transactions are fraudulent, and a model in a notebook says nothing about whether bad data, slow predictions or drift will be caught. The goal was a pipeline where each of those is checked.",
      pipeline: [
        { kind: "Data", title: "Transactions in PostgreSQL" },
        { kind: "Validation", title: "Great Expectations checks" },
        { kind: "Training", title: "Airflow DAG, class-weighted Random Forest" },
        { kind: "Serving", title: "FastAPI in Docker" },
        { kind: "Monitoring", title: "Grafana: latency, drift" },
      ],
      pipelineNote: "Individual project: I built every step.",
      builtTitle: "What I built",
      built: [
        {
          title: "Orchestration",
          body: "Airflow DAGs for ingestion, training and inference, with Great Expectations checks that stop schema and data-quality problems before training and before inference.",
        },
        {
          title: "Model and serving",
          body: "A class-weighted Random Forest trained on 299,695 transactions and served as a FastAPI REST service in Docker.",
        },
        {
          title: "Monitoring",
          body: "Grafana dashboards for pipeline health, prediction latency and drift signals.",
        },
      ],
      results: [
        { value: "0.96", label: "ROC-AUC" },
        { value: "0.94", label: "precision, fraud class" },
        { value: "0.68", label: "recall, fraud class" },
        { value: "0.79", label: "F1, fraud class" },
      ],
      resultsNote: "Measured on a held-out test set of 59,939 transactions. Recall 0.68 means about one fraud in three is missed at the current threshold.",
    },
  ],
};
