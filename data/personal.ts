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
  title: "Undergraduate Researcher & CSE Student",
  location: "Gazipur, Bangladesh",
  university: "Dhaka University of Engineering & Technology (DUET)",
  department: "Computer Science & Engineering",
  currentStatus: "3rd Year, 2nd Semester",
  expectedGraduation: "2027",
  cgpa: "3.62 / 4.00",
  email: "mdsayedul764@gmail.com",
  phone: "01727183143",
  linkedin: "https://www.linkedin.com/in/saidul07/",
  github: "https://github.com/saidul-07",
  tagline: "Undergraduate Researcher @ DUET | Computer Vision & Efficient AI | Practical Edge AI",
  skills: {
    programming: ["C++", "Python", "Java", "JavaScript"],
    database: ["SQL", "MySQL", "SQLite"],
    developmentTools: ["Android Development", "Git", "GitHub"],
    aiMl: ["Machine Learning", "Deep Learning", "Computer Vision", "Object Detection"]
  },
  leadership: [
    {
      role: "Executive Member",
      organization: "DUET Computer Society",
      period: "2024 – Present"
    },
    {
      role: "Joint Secretary",
      organization: "DUET Math Club",
      period: "2024 – Present"
    }
  ]
};

