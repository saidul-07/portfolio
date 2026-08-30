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
  featured?: boolean;
}

export const educationList: EducationEntry[] = [
  {
    id: "duet",
    institution: "Dhaka University of Engineering & Technology (DUET)",
    degree: "B.Sc. in Computer Science & Engineering",
    fieldOfStudy: "Computer Science & Engineering",
    period: "2023 – Present (Expected 2027)",
    grade: "3.68 / 4.00",
    location: "Gazipur, Bangladesh",
    status: "Currently studying",
    currentDetails: "3rd Year &bull; 2nd Semester",
    featured: true
  },
  {
    id: "dpi",
    institution: "Dhaka Polytechnic Institute",
    degree: "Diploma in Engineering",
    fieldOfStudy: "Computer Technology",
    period: "2018 – 2022",
    grade: "3.82 / 4.00",
    featured: false
  },
  {
    id: "nagerpara",
    institution: "Nagerpara High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2017",
    grade: "5.00 / 5.00",
    featured: false
  }
];
