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
    title: "Rice Panicle Detection and Growth-Stage Recognition",
    role: "Undergraduate Researcher",
    supervisor: "Assistant Professor Umme Fawzia Rahim, Department of CSE, DUET",
    description: "Ongoing research investigating agricultural computer vision for rice panicle detection and growth-stage recognition across booting, heading, and maturity stages. Developing a custom dataset of 4,500 images (1,500 images per stage), with image annotation currently in progress using CVAT. Geared toward practical object detection and deep learning deployment on resource-constrained devices using efficient AI models.",
    status: "Ongoing",
    topics: ["Computer Vision", "Object Detection", "Deep Learning", "Efficient AI", "Resource-Constrained Devices"]
  }
];
