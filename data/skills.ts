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
      "Object Detection",
      "Model Training",
      "PyTorch",
      "TensorFlow / Keras",
      "OpenCV"
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
      "UI/UX Basics",
      "Mobile Applications",
      "Edge Computing Concepts",
      "Smart Tech Solutions"
    ]
  },
  {
    id: "programming",
    icon: "💻",
    title: "Programming & Core Engineering",
    shortTitle: "Programming",
    skills: [
      "C",
      "C++",
      "Python",
      "Java",
      "JavaScript",
      "OOP & Software Design"
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
      "Data Analysis Basics"
    ]
  },
  {
    id: "dev-tools",
    icon: "🛠️",
    title: "Development Tools & CS Core",
    shortTitle: "Tools & Core",
    skills: [
      "Git / GitHub",
      "VS Code",
      "Linux Basics",
      "Jupyter Notebook",
      "Data Structures",
      "Algorithms",
      "Problem Solving"
    ]
  }
];

export const currentlyExploring = [
  "Vision Transformers (ViT)",
  "LLM Fine-tuning & Alignment",
  "Multimodal Medical Diagnostics",
  "XAI Interpretability & Trustable AI",
  "Edge AI Model Optimization"
];
