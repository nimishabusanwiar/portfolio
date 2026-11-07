import type { Content } from "./types";

// Traduction de en.ts. Mêmes faits, mêmes chiffres : modifier les deux fichiers ensemble.

export const fr: Content = {
  lang: "fr",
  meta: {
    title: "Nimisha Busaniwar | Ingénieure IA (RAG, évaluation de LLM)",
    description:
      "Étudiante en MSc Intelligence Artificielle à l'EPITA, Paris. Seule développeuse d'un assistant RAG bilingue sur Amazon Bedrock chez Navyr.ai. Recherche un stage de fin d'études de 6 mois, disponible immédiatement.",
  },
  nav: {
    experience: "Expérience",
    work: "Projets",
    skills: "Compétences",
    education: "Formation",
    contact: "Contact",
    skip: "Aller au contenu",
    switchLabel: "English",
  },
  hero: {
    kicker: "Ingénieure IA · Paris",
    heading: "Je conçois des systèmes RAG et je vérifie que leurs réponses tiennent la route.",
    intro:
      "Étudiante en MSc Intelligence Artificielle à l'EPITA. Chez Navyr.ai, j'étais la seule développeuse d'un assistant RAG bilingue sur Amazon Bedrock, construit sur un benchmark d'environ 600 000 cas d'usage IA en entreprise.",
    cvLabel: "Télécharger le CV (PDF)",
  },
  facts: [
    { label: "Recherche", value: "Stage de fin d'études de 6 mois" },
    { label: "Disponibilité", value: "Immédiate" },
    { label: "Convention", value: "Convention de stage EPITA" },
    { label: "Lieu", value: "Paris, mobile en France et en UE" },
    { label: "Langues", value: "Anglais C1 · Français B1" },
  ],
  numbersLabel: "Chiffres clés",
  numbers: [
    { value: "200+", label: "questions réelles testées sur 15 types, regroupées en 13 schémas d'erreur", source: "Navyr.ai" },
    { value: "19/19", label: "note du jury pour un assistant RAG agentique en droit des affaires", source: "Hackathon" },
    { value: "27,5 ms", label: "de latence API moyenne pour la recherche et le reranking (35,7 ms au p95)", source: "Recommandation" },
    { value: "0,96", label: "de ROC-AUC sur 299 695 transactions, modèle servi et monitoré", source: "Détection de fraude" },
  ],
  experienceTitle: "Expérience",
  experience: [
    {
      role: "Stagiaire Ingénieure IA",
      company: "Navyr.ai",
      dates: "août 2026 – nov. 2026",
      place: "Paris",
      summary:
        "Startup d'aide à la décision IA. Seule développeuse de l'Assistant IA, un assistant RAG anglais/français construit sur un benchmark d'environ 600 000 cas d'usage IA en entreprise.",
      bullets: [
        "Maintenance de la recherche hybride : BM25 + recherche vectorielle fusionnées par RRF, reranking Cohere, requêtes SQL Athena sur S3, Claude sur Amazon Bedrock et cache sémantique ElastiCache.",
        "Correction de bugs en production de bout en bout via Jira, merge requests GitLab et CI, dont des échecs de recherche en français (« santé » et « banque » sans aucun résultat) et des sommes en double dans les comparaisons sectorielles.",
        "Test de plus de 200 questions réelles sur 15 types de questions, en anglais et en français ; erreurs regroupées en 13 schémas et 28 problèmes, avec le suivi de 14 corrections confirmées. Le cofondateur a repris la méthode pour deux autres modules du produit.",
        "Responsable de mission du programme Data Connex (12 nouvelles bases de données) : évaluation de 11 sources de données (7 validées, 4 sous conditions) et création d'une table de résultats de 19 colonnes dans le data lake Athena.",
        "Étude des résultats des projets ML dans les services financiers : 41 cas analysés et 23 334 cas d'usage financiers recherchés ; démonstration que les sources publiques ne signalent presque jamais les échecs (biais du survivant) et proposition d'un registre des résultats à la place.",
        "Conception d'une proposition d'intégration basée sur MCP entre l'agent Python et un moteur d'ontologie, avec un routage par niveaux entre recherche standard et raisonnement sur l'ontologie.",
      ],
      tags: ["Amazon Bedrock", "BM25 + vecteurs", "Cohere Rerank", "Athena", "MCP", "GitLab CI"],
    },
    {
      role: "Data Analyst",
      company: "Edible Software Solutions",
      dates: "janv. 2025 – sept. 2025",
      place: "Inde",
      summary:
        "Requêtes SQL pour extraire, joindre et agréger des données métier multi-sources alimentant des tableaux de bord KPI sous Power BI et Tableau. Nettoyage des données brutes et reportings KPI récurrents pour les équipes métier.",
    },
    {
      role: "Stagiaire Machine Learning",
      company: "360DigiTMG",
      dates: "juil. 2024 – déc. 2024",
      place: "Hyderabad",
      summary: "Nettoyage et structuration avec Pandas de données historiques de trading d'électricité en séquences pour un modèle de prévision LSTM.",
    },
  ],
  workTitle: "Projets choisis",
  workIntro: "Chaque projet a son étude de cas : l'architecture, qui a fait quoi, et le résultat mesuré.",
  readCaseStudy: "Lire l'étude de cas",
  viewCode: "Code sur GitHub",
  skillsTitle: "Compétences",
  skills: [
    { group: "LLM & RAG", items: "Amazon Bedrock, RAG, recherche hybride (BM25 + vecteurs, RRF), reranking, MCP, tool calling, LangChain, évaluation LLM-as-a-Judge" },
    { group: "Machine learning", items: "PyTorch, scikit-learn, LightGBM, séries temporelles, NLP" },
    { group: "Programmation", items: "Python (Pandas, FastAPI, pytest), SQL" },
    { group: "Data & cloud", items: "AWS (S3, Glue, Athena, Lambda, ElastiCache), PostgreSQL / pgvector, Airflow, Great Expectations" },
    { group: "Outils", items: "Docker, Git, GitLab CI/CD, Jira, Linux, Grafana, Power BI, Tableau" },
  ],
  educationTitle: "Formation",
  education: [
    { title: "MSc Intelligence Artificielle, EPITA", detail: "Deep Learning, NLP & LLM, RAG, apprentissage par renforcement, MLOps", dates: "sept. 2025 – 2027 (prévu) · Paris" },
    { title: "Diplôme en Intelligence Artificielle, State University of New York", detail: "En ligne", dates: "mars 2025 – sept. 2025" },
    { title: "B.Tech Information Technology, JBIET", detail: "Classée 5e de la promotion", dates: "2020 – 2024 · Hyderabad" },
  ],
  languages: "Français B1 (objectif B2) · Anglais C1 (professionnel) · Télougou, hindi : langues maternelles · Marathi intermédiaire",
  contact: {
    heading: "Vous recrutez pour un stage IA de 6 mois ? Parlons-en.",
    email: "M'écrire",
    cv: "Télécharger le CV",
    location: "Paris, France",
  },
  caseStudyUi: {
    back: "Retour aux projets",
    problem: "Le problème",
    architecture: "Architecture",
    results: "Résultats",
    limitations: "Ce que je changerais",
    codeButton: "Voir le code sur GitHub",
    caseStudy: "Étude de cas",
    pipelineAria: "Pipeline",
  },
  cvFile: "/cv/Nimisha_Busaniwar_CV_FR.pdf",
  caseStudies: [
    {
      slug: "business-law-rag",
      kicker: "RAG agentique · Hackathon, équipe de 4",
      title: "Assistant RAG agentique en droit des affaires",
      summary: "Pipeline MCP à 3 agents sur un corpus juridique de 469 pages, avec recherche hybride et 3 niveaux de contrôle anti-hallucination.",
      lede: "Un assistant juridique qui cite ses sources, construit sur un corpus de droit des affaires de 469 pages pendant un hackathon et noté 19/19 par le jury.",
      metaDescription:
        "Étude de cas : assistant RAG agentique sur un corpus de droit des affaires de 469 pages. Recherche hybride FAISS + BM25, 3 agents MCP, contrôles anti-hallucination, 19/19.",
      cardMetrics: [
        { value: "19/19", label: "note du jury" },
        { value: "3/3", label: "refus hors périmètre" },
      ],
      stack: "LangChain · FAISS · BM25 · RRF · MCP",
      repo: "https://github.com/Arun949/Business-Law-RAG-LLM-AI-Assistant",
      facts: [
        { label: "Contexte", value: "Hackathon Tech Tribe" },
        { label: "Équipe", value: "Équipe de 4" },
        { label: "Mon rôle", value: "Reformulation des requêtes, couche anti-hallucination" },
        { label: "Stack", value: "LangChain, FAISS, BM25, MCP" },
      ],
      problem:
        "Une réponse juridique n'est utile que si chaque affirmation renvoie au texte source. Un LLM seul répond avec assurance même quand le corpus ne couvre pas la question. L'assistant devait répondre à partir des 469 pages, citer le passage utilisé et refuser les questions hors corpus.",
      pipeline: [
        { kind: "Entrée", title: "Question de l'utilisateur" },
        { kind: "Ma partie", title: "Reformulation de la requête", mine: true },
        { kind: "Recherche", title: "FAISS + BM25, fusion RRF", note: "blocs de 800 caractères, top 5" },
        { kind: "Agents MCP", title: "Chercheur, vérificateur, synthétiseur" },
        { kind: "Ma partie", title: "Contrôle anti-hallucination à 3 niveaux", mine: true },
        { kind: "Sortie", title: "Réponse sourcée ou refus" },
      ],
      pipelineNote: "Les étapes en surbrillance sont celles que j'ai développées. Le reste a été construit en équipe.",
      builtTitle: "Ce que j'ai développé",
      built: [
        {
          title: "Reformulation des requêtes",
          body: "Réécriture des questions avant la recherche, pour que les questions courtes ou ambiguës correspondent au vocabulaire du texte juridique. La note d'évaluation du jury est passée d'environ 14/19 à 19/19 après cette étape.",
        },
        {
          title: "Couche anti-hallucination",
          body: "Trois contrôles qui valident chaque réponse par rapport aux passages sources retrouvés avant de la renvoyer : une réponse sans appui dans le corpus devient un refus.",
        },
      ],
      results: [
        { value: "11/11", label: "questions factuelles" },
        { value: "3/3", label: "questions à renvois croisés" },
        { value: "3/3", label: "refus hors périmètre" },
        { value: "0,13 $", label: "de coût API total pour 681 appels au LLM" },
      ],
      resultsNote: "Évalué par un LLM-as-a-Judge : chaque réponse a été jugée fidèle à ses sources.",
    },
    {
      slug: "recommender",
      kicker: "Systèmes de recommandation · Équipe de 4",
      title: "Plateforme de recommandation en temps réel",
      summary: "22,6 M d'avis Amazon transformés en 4,02 M d'interactions d'entraînement ; recherche two-tower et reranking LightGBM derrière FastAPI.",
      lede: "Un système de recommandation en deux étapes (recherche, puis learning-to-rank) pour l'électronique Amazon, servi par une application web en temps réel.",
      metaDescription:
        "Étude de cas : système de recommandation en deux étapes sur Amazon Reviews 2023 Electronics. Recherche two-tower avec FAISS, reranking LightGBM LambdaRank, latence API moyenne de 27,5 ms.",
      cardMetrics: [
        { value: "27,5 ms", label: "latence moyenne" },
        { value: "35,7 ms", label: "latence p95" },
      ],
      stack: "PyTorch · FAISS · LightGBM · PostgreSQL · Docker",
      repo: "https://github.com/Arun949/amazon-electronics-recs",
      facts: [
        { label: "Équipe", value: "Équipe de 4" },
        { label: "Données", value: "552 000 utilisateurs, 148 000 produits" },
        { label: "Stack", value: "PyTorch, FAISS, LightGBM, FastAPI" },
      ],
      problem:
        "Recommander des produits électroniques à 552 000 utilisateurs parmi 148 000 produits, assez vite pour une page en direct. Le catalogue est très concentré sur quelques produits populaires et 31 % des produits du test n'apparaissent jamais à l'entraînement : un modèle qui retient seulement les produits populaires a un bon rappel et ne sert à rien en pratique.",
      pipeline: [
        { kind: "Données", title: "22,6 M d'avis → 4,02 M d'interactions", note: "découpage temporel" },
        { kind: "Recherche", title: "Modèle two-tower (PyTorch)", note: "négatifs in-batch" },
        { kind: "Candidats", title: "Recherche de plus proches voisins FAISS" },
        { kind: "Classement", title: "LightGBM LambdaRank", note: "12 variables" },
        { kind: "Service", title: "FastAPI + PostgreSQL" },
        { kind: "Sortie", title: "Application Streamlit" },
      ],
      pipelineNote: "Construit en équipe de 4.",
      builtTitle: "Fonctionnement",
      built: [
        {
          title: "D'abord une référence",
          body: "Une factorisation matricielle avec Bayesian Personalized Ranking (MF-BPR), implémentée de zéro, sert de référence de classement par paires.",
        },
        {
          title: "Rechercher, puis classer",
          body: "Un modèle two-tower construit les vecteurs utilisateurs à partir de l'historique et FAISS renvoie les candidats. LightGBM LambdaRank les reclasse avec 12 variables : comportement de l'utilisateur, popularité du produit, historique d'interactions et temps.",
        },
        {
          title: "Démarrage à froid",
          body: "Les résultats ont été analysés par niveau d'activité des utilisateurs, et les utilisateurs sans historique reçoivent les produits populaires.",
        },
      ],
      results: [
        { value: "2,5×", label: "NDCG@10 après reranking par rapport à la recherche seule" },
        { value: "+25 %", label: "NDCG@10 par rapport à la référence popularité (0,0026 contre 0,0021)" },
        { value: "85 %", label: "du catalogue couvert, contre 0,05 % pour la popularité" },
        { value: "27,5 ms", label: "de latence API moyenne (35,7 ms au p95)" },
      ],
      resultsNote:
        "Le rappel et le NDCG absolus sont faibles (environ 0,003 à 0,008) car le catalogue compte 148 000 produits et reste très concentré, et la référence popularité a le meilleur Recall@20 brut. Le gain utile vient du reranking et de la couverture.",
    },
    {
      slug: "fraud-mlops",
      kicker: "MLOps · Projet individuel",
      title: "Pipeline data et MLOps de détection de fraude",
      summary: "DAG Airflow pour l'ingestion, l'entraînement et l'inférence, contrôles Great Expectations, FastAPI dans Docker, dérive suivie dans Grafana.",
      lede: "Un modèle de fraude traité comme un système : validation des données, entraînement planifié, API conteneurisée et monitoring.",
      metaDescription:
        "Étude de cas : pipeline de détection de fraude de bout en bout sur 299 695 transactions avec Airflow, Great Expectations, FastAPI, Docker et Grafana. ROC-AUC 0,96.",
      cardMetrics: [
        { value: "0,96", label: "ROC-AUC" },
        { value: "299 695", label: "transactions" },
      ],
      stack: "Airflow · FastAPI · PostgreSQL · Grafana",
      repo: "https://github.com/nimishabusanwiar/dsp_project",
      facts: [
        { label: "Contexte", value: "EPITA, Data Science in Production" },
        { label: "Équipe", value: "Projet individuel" },
        { label: "Données", value: "299 695 transactions, 2,2 % de fraude" },
        { label: "Stack", value: "Airflow, FastAPI, Docker, Grafana" },
      ],
      problem:
        "Seules 2,2 % des transactions sont frauduleuses, et un modèle dans un notebook ne dit rien sur la détection des données invalides, des prédictions lentes ou de la dérive. L'objectif : un pipeline où chacun de ces points est contrôlé.",
      pipeline: [
        { kind: "Données", title: "Transactions dans PostgreSQL" },
        { kind: "Validation", title: "Contrôles Great Expectations" },
        { kind: "Entraînement", title: "DAG Airflow, Random Forest pondéré" },
        { kind: "Service", title: "FastAPI dans Docker" },
        { kind: "Monitoring", title: "Grafana : latence, dérive" },
      ],
      pipelineNote: "Projet individuel : j'ai développé chaque étape.",
      builtTitle: "Ce que j'ai développé",
      built: [
        {
          title: "Orchestration",
          body: "DAG Airflow pour l'ingestion, l'entraînement et l'inférence, avec des contrôles Great Expectations qui bloquent les problèmes de schéma et de qualité avant l'entraînement et avant l'inférence.",
        },
        {
          title: "Modèle et service",
          body: "Un Random Forest pondéré par classe, entraîné sur 299 695 transactions et servi par une API REST FastAPI dans Docker.",
        },
        {
          title: "Monitoring",
          body: "Tableaux de bord Grafana pour la santé du pipeline, la latence des prédictions et les signaux de dérive.",
        },
      ],
      results: [
        { value: "0,96", label: "ROC-AUC" },
        { value: "0,94", label: "précision, classe fraude" },
        { value: "0,68", label: "rappel, classe fraude" },
        { value: "0,79", label: "F1, classe fraude" },
      ],
      resultsNote: "Mesuré sur un jeu de test de 59 939 transactions. Un rappel de 0,68 signifie qu'environ une fraude sur trois n'est pas détectée au seuil actuel.",
    },
  ],
};
