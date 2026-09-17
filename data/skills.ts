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
    id: "ai-dl",
    icon: "🧠",
    title: "AI & Deep Learning",
    shortTitle: "AI & ML",
    shortTitle: "AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Explainable AI (XAI)",
      "Computer Vision",
      "PyTorch / TensorFlow"
      "NLP & LLMs",
      "Medical Image Processing",
      "PyTorch",
      "TensorFlow / Keras",
      "YOLOv8",
      "OpenCV",
      "SHAP & GradCAM"
    ]
  },
  {
    id: "software-dev",
    icon: "🦾",
    title: "Software & Mobile Development",
    shortTitle: "Software & Mobile",
    id: "embedded-edge",
    icon: "📡",
    title: "Embedded & Edge Systems",
    shortTitle: "Embedded",
    skills: [
      "Android Dev (Java)",
      "REST APIs",
      "UI/UX Design",
      "Mobile Applications",
      "Smart Tech Solutions"
      "Edge Computing Architecture",
      "Edge AI Optimization",
      "Arduino & ESP32",
      "Sensor Integration",
      "Wireless Telemetry",
      "Proteus Simulation",
      "Smart City & Agri-Tech"
    ]
  },
  {
    id: "programming",
    id: "programming-web",
    icon: "💻",
    title: "Programming & Web Development",
    shortTitle: "Programming & Web",
    shortTitle: "Programming",
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
    id: "data-science",
    icon: "📊",
    title: "Databases & Data Analytics",
    shortTitle: "Data & DB",
    title: "Data Science & Analytics",
    shortTitle: "Data",
    skills: [
      "SQL",
      "MySQL",
      "SQLite",
      "Relational Modeling",
      "Data Analytics"
      "Pandas & NumPy",
      "Scikit-Learn",
      "Matplotlib & Seaborn",
      "OriginPro",
      "Statistical Modeling",
      "Feature Engineering"
    ]
  },
  {
    id: "dev-tools",
    icon: "🛠️",
    title: "Development Tools & CS Core",
    shortTitle: "Tools & Core",
    id: "cyber-tools",
    icon: "⚒️",
    title: "Cyber Security & Tools",
    shortTitle: "Cyber",
    skills: [
      "Cyber Security Basics",
      "Ethical Hacking Trainee",
      "Web Vulnerability Assessment",
      "Git / GitHub",
      "VS Code & Linux",
      "Data Structures",
      "Algorithms",
      "Problem Solving"
      "LaTeX",
      "VS Code",
      "Jupyter Notebook"
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

export const currentlyResearching = [
  "Vision Transformers",
  "LLM Fine-tuning",
  "Multimodal Diagnostics",
  "XAI Interpretability",
  "Edge AI Optimization"
  "Multimodal AI"
];
