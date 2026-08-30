export interface LearningArea {
  id: string;
  title: string;
  description: string;
}

export interface LearningEntry {
  id: string;
  title: string;
  role?: string;
  supervisor?: string;
  description: string;
  status: string;
  topics: string[];
}

export const learningAreas: LearningArea[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    description: "Learning fundamental concepts and exploring practical applications."
  },
  {
    id: "ml",
    title: "Machine Learning",
    description: "Studying machine-learning concepts and experimenting with models and datasets."
  },
  {
    id: "cv",
    title: "Computer Vision",
    description: "Exploring image-based problems, object detection, and visual recognition."
  },
  {
    id: "dl",
    title: "Deep Learning",
    description: "Learning neural-network concepts and understanding modern deep-learning approaches."
  },
  {
    id: "software-dev",
    title: "Software Development",
    description: "Strengthening programming and application-development skills through practical projects."
  }
];

export const learningList: LearningEntry[] = [
  {
    id: "rice-detection",
    title: "Rice Panicle Detection & Rice Growth-Stage Recognition",
    role: "Researcher",
    supervisor: "Umme Fawzia",
    description: "An ongoing learning and research activity investigating agricultural computer vision, focusing on object detection and classification in real-world scenarios.",
    status: "Ongoing",
    topics: ["Computer Vision", "Object Detection", "Deep Learning", "Lightweight AI", "Mobile AI"]
  }
];
