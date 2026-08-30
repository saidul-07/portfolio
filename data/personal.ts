export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  university: string;
  department: string;
  currentStatus: string;
  expectedGraduation: string;
  cgpa: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  tagline: string;
  skills: {
    programming: string[];
    database: string[];
    developmentTools: string[];
    aiMl: string[];
  };
  leadership: {
    role: string;
    organization: string;
    period: string;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Md Sayedul Islam",
  title: "CSE Student & Tech Explorer",
  location: "Gazipur, Bangladesh",
  university: "Dhaka University of Engineering & Technology (DUET)",
  department: "Computer Science & Engineering",
  currentStatus: "3rd Year, 2nd Semester",
  expectedGraduation: "2027",
  cgpa: "3.68/4.00",
  email: "mdsayedul764@gmail.com",
  phone: "01727183143",
  linkedin: "https://www.linkedin.com/in/saidul07/",
  github: "https://github.com/saidul-07",
  tagline: "CSE Student | AI/ML & Computer Vision | Learning • Building • Exploring",
  skills: {
    programming: ["C++", "Python", "Java", "JavaScript"],
    database: ["SQL", "MySQL", "SQLite"],
    developmentTools: ["Android Development", "Git", "GitHub"],
    aiMl: ["Machine Learning", "Deep Learning", "Computer Vision", "Object Detection"]
  },
  leadership: [
    {
      role: "Joint Secretary",
      organization: "DUET Math Club",
      period: "2026–Present"
    }
  ]
};

