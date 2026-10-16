export interface SkillCategory {
  id: string;
  icon: string;
  title: string;
  shortTitle: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ai-dl",
    icon: "🧠",
    title: "AI & Deep Learning",
    shortTitle: "AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Explainable AI (XAI)",
      "Computer Vision",
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
    id: "embedded-edge",
    icon: "📡",
    title: "Embedded & Edge Systems",
    shortTitle: "Embedded",
    skills: [
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
    id: "programming-web",
    icon: "💻",
    title: "Programming & Web Development",
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
    id: "data-science",
    icon: "📊",
    title: "Data Science & Analytics",
    shortTitle: "Data",
    skills: [
      "Pandas & NumPy",
      "Scikit-Learn",
      "Matplotlib & Seaborn",
      "OriginPro",
      "Statistical Modeling",
      "Feature Engineering"
    ]
  },
  {
    id: "cyber-tools",
    icon: "⚒️",
    title: "Cyber Security & Tools",
    shortTitle: "Cyber",
    skills: [
      "Cyber Security Basics",
      "Ethical Hacking Trainee",
      "Web Vulnerability Assessment",
      "Git / GitHub",
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
  "XAI Interpretability",
  "Multimodal AI"
];
