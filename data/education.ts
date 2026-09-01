export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  period: string;
  grade: string;
  location?: string;
  status?: string;
  currentDetails?: string;
  expectedGraduation?: string;
  coursework?: string[];
  featured?: boolean;
}

export const educationList: EducationEntry[] = [
  {
    id: "duet",
    institution: "Dhaka University of Engineering & Technology (DUET)",
    degree: "B.Sc. in Computer Science & Engineering",
    fieldOfStudy: "Computer Science & Engineering",
    period: "2023 – Present",
    expectedGraduation: "Expected 2027",
    grade: "3.68 / 4.00",
    location: "Gazipur, Bangladesh",
    status: "Currently Studying",
    currentDetails: "3rd Year • 2nd Semester",
    coursework: ["Data Structures", "Algorithms", "Database Systems", "Operating Systems", "Software Engineering", "AI & ML"],
    featured: true
  },
  {
    id: "dpi",
    institution: "Dhaka Polytechnic Institute",
    degree: "Diploma in Engineering",
    fieldOfStudy: "Computer Technology",
    period: "2018 – 2022",
    grade: "3.82 / 4.00",
    location: "Dhaka, Bangladesh",
    status: "Completed",
    coursework: ["Object-Oriented Programming", "Database Management", "Computer Networks", "Web Development", "Microprocessors"],
    featured: false
  },
  {
    id: "nagerpara",
    institution: "Nagerpara High School",
    degree: "Secondary School Certificate (SSC)",
    fieldOfStudy: "Science",
    period: "2017",
    grade: "5.00 / 5.00 (Perfect GPA)",
    location: "Shariatpur, Bangladesh",
    status: "Completed",
    featured: false
  }
];
