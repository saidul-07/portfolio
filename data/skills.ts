export interface SkillCategory {
  id: string;
  icon: string;
  title: string;
  shortTitle: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    icon: "🧠",
    title: "AI & Deep Learning",
    shortTitle: "AI & ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Explainable AI (XAI)",
      "Computer Vision",
      "PyTorch / TensorFlow"
    ]
  },
  {
    id: "software-dev",
    icon: "🦾",
    title: "Software & Mobile Development",
    shortTitle: "Software & Mobile",
    skills: [
      "Android Dev (Java)",
      "REST APIs",
      "UI/UX Design",
      "Mobile Applications",
      "Smart Tech Solutions"
    ]
  },
  {
    id: "programming",
    icon: "💻",
    title: "Programming & Web Development",
    shortTitle: "Programming & Web",
    skills: [
      "Python",
      "C / C++",
      "JavaScript",
      "Django",
      "Flask / FastAPI",
      "HTML5 / CSS3",
      "PHP",
      "REST APIs"
    ]
  },
  {
    id: "databases",
    icon: "📊",
    title: "Databases & Data Analytics",
    shortTitle: "Data & DB",
    skills: [
      "SQL",
      "MySQL",
      "SQLite",
      "Relational Modeling",
      "Data Analytics"
    ]
  },
  {
    id: "dev-tools",
    icon: "🛠️",
    title: "Development Tools & CS Core",
    shortTitle: "Tools & Core",
    skills: [
      "Git / GitHub",
      "VS Code & Linux",
      "Data Structures",
      "Algorithms",
      "Problem Solving"
    ]
  }
];

export const currentlyExploring = [
  "Vision Transformers (ViT)",
  "LLM Fine-tuning",
  "Multimodal Diagnostics",
  "XAI Interpretability",
  "Edge AI Optimization"
];
