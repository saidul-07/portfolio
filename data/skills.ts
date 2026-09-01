export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript"]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Object Detection", "Model Training"]
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["SQL", "MySQL", "SQLite", "Relational Modeling"]
  },
  {
    id: "software-dev",
    title: "Software & Mobile Dev",
    skills: ["Android Dev (Java)", "REST APIs", "UI/UX Basics", "Mobile Apps"]
  },
  {
    id: "dev-tools",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Linux Basics", "Jupyter Notebooks"]
  },
  {
    id: "cs-core",
    title: "CS Core & Fundamentals",
    skills: ["Data Structures", "Algorithms", "OOP", "Problem Solving"]
  }
];
