export interface Project {
  id: string;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "myduet",
    title: "MyDUET",
    description: "Integrated Mobile Application for DUET Services, designed to streamline student utility and academic support features.",
    type: "Academic Project",
    technologies: ["Java", "SQLite", "Android"],
    githubUrl: "https://github.com/saidul-07/MyDUET-Android-App",
    featured: true,
    status: "Completed"
  }
];
