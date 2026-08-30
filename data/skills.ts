export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: ["C++", "Python", "Java", "JavaScript"]
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Object Detection"]
  },
  {
    id: "databases",
    title: "Databases",
    skills: ["SQL", "MySQL", "SQLite"]
  },
  {
    id: "dev-tools",
    title: "Development & Tools",
    skills: ["Android Development", "Git", "GitHub"]
  }
];

