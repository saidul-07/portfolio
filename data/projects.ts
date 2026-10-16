export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  type: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "myduet",
    title: "MyDUET",
    subtitle: "Integrated Mobile Application for DUET Services",
    description: "Integrated Mobile Application for DUET Services, designed to streamline student utility and academic support features.",
    type: "Academic Project",
    technologies: ["Java", "SQLite", "Android"],
    githubUrl: "https://github.com/saidul-07/MyDUET-Android-App",
    featured: true,
    status: "Completed"
  },
  {
    id: "traffic-control",
    title: "Traffic Control System",
    subtitle: "Vehicle detection, camera-based image capture, and number-plate analysis",
    description: "Vehicle detection, camera-based image capture, and number-plate analysis.",
    type: "Academic Project",
    technologies: [],
    featured: true,
    status: "Completed"
  }
];
