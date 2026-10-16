export interface DatasetStage {
  name: string;
  count: number;
  percentage: number;
  description: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  status: "Completed" | "In Progress" | "Planned" | "Exploratory";
  description: string;
}

export interface ResearchCaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  status: string;
  role: string;
  supervisor: {
    name: string;
    designation: string;
    department: string;
    institution: string;
    location: string;
  };
  overview: string;
  motivation: {
    context: string;
    challenges: string[];
    intendedBenefits: string[];
  };
  objectives: string[];
  dataset: {
    totalImages: number;
    distribution: DatasetStage[];
    collectionMethod: string;
    annotationTool: string;
    annotationStatus: string;
    notes: string;
  };
  workflow: WorkflowStep[];
  efficiencyAndDeployment: {
    efficiencyFocus: string;
    targetHardware: string;
    potentialDeployment: string;
    disclaimer: string;
  };
  progress: {
    completed: string[];
    ongoing: string[];
    future: string[];
  };
  keywords: string[];
}

export const riceResearchCaseStudy: ResearchCaseStudy = {
  id: "rice-detection",
  slug: "rice-panicle-detection",
  title: "Rice Panicle Detection and Growth-Stage Recognition",
  subtitle: "Agricultural Computer Vision & Lightweight Deep Learning for Resource-Constrained Environments",
  status: "Ongoing Undergraduate Research",
  role: "Undergraduate Researcher",
  supervisor: {
    name: "Assistant Professor Umme Fawzia Rahim",
    designation: "Assistant Professor",
    department: "Department of Computer Science & Engineering (CSE)",
    institution: "Dhaka University of Engineering & Technology (DUET)",
    location: "Gazipur-1700, Bangladesh"
  },
  overview: "An ongoing academic research initiative focused on detecting rice panicles and classifying rice growth stages under natural field conditions. The project investigates computer vision and deep learning techniques with a particular emphasis on exploring lightweight, efficient models suitable for resource-constrained hardware.",
  motivation: {
    context: "Rice is a primary staple crop globally and the foundational agricultural product in Bangladesh. Accurate identification of rice growth stages and panicle emergence is essential for timely agricultural interventions, such as fertilizer scheduling, water management, disease monitoring, and yield estimation.",
    challenges: [
      "Manual in-field visual inspection is labor-intensive, subjective, and difficult to scale across broad acreage.",
      "Dense plant canopies, overlapping panicles, variable natural illumination, and visual clutter create complex detection conditions in field environments.",
      "Standard state-of-the-art vision models often require heavy computational resources that are impractical for field-level computing devices."
    ],
    intendedBenefits: [
      "Automated growth-stage tracking to support data-informed crop management decisions.",
      "Objective visual assessments to help reduce observation discrepancies.",
      "Investigation into practical edge intelligence that can eventually function in rural environments with limited computing infrastructure."
    ]
  },
  objectives: [
    "Collect and curate a structured aerial-view photographic dataset spanning three physiological growth stages of rice.",
    "Perform precise region/bounding-box annotation of rice panicles utilizing the Computer Vision Annotation Tool (CVAT).",
    "Explore machine learning, deep learning, and computer vision methods for robust panicle detection and growth-stage recognition.",
    "Investigate lightweight vision architectures capable of efficient inference on resource-constrained devices.",
    "Explore the feasibility of future workflow integration into an accessible Android mobile application."
  ],
  dataset: {
    totalImages: 4500,
    distribution: [
      {
        name: "Booting",
        count: 1500,
        percentage: 33.33,
        description: "Early reproductive stage where panicle development occurs enclosed within the flag leaf sheath."
      },
      {
        name: "Heading",
        count: 1500,
        percentage: 33.33,
        description: "Panicle emergence stage as floral structures emerge from the leaf sheath into the open canopy."
      },
      {
        name: "Maturity",
        count: 1500,
        percentage: 33.33,
        description: "Ripening and grain filling stage characterized by color changes and mature grain development."
      }
    ],
    collectionMethod: "Images were collected directly in rural agricultural fields using a smartphone camera captured from a drone-style aerial perspective to simulate top-down observation.",
    annotationTool: "Computer Vision Annotation Tool (CVAT)",
    annotationStatus: "In Progress",
    notes: "The dataset comprises exactly 4,500 field images evenly balanced with 1,500 images per growth stage. Manual annotation and quality inspection are actively underway."
  },
  workflow: [
    {
      step: 1,
      title: "Field Image Collection",
      status: "Completed",
      description: "Acquisition of 4,500 field photographs from an aerial viewpoint across local rice paddies."
    },
    {
      step: 2,
      title: "Dataset Organization & Curation",
      status: "Completed",
      description: "Categorization and verification of images into three distinct physiological stages: Booting, Heading, and Maturity (1,500 each)."
    },
    {
      step: 3,
      title: "CVAT Annotation",
      status: "In Progress",
      description: "Detailed bounding-box labeling of panicles and growth-stage labeling using CVAT."
    },
    {
      step: 4,
      title: "Efficient Model Exploration",
      status: "Planned",
      description: "Investigating lightweight object detection architectures suitable for constrained compute budgets."
    },
    {
      step: 5,
      title: "Empirical Evaluation",
      status: "Planned",
      description: "Evaluating detection fidelity, speed, model size, and generalization across varied lighting and canopy densities."
    },
    {
      step: 6,
      title: "Potential Android Integration",
      status: "Planned",
      description: "Exploring mobile integration to examine on-device edge inferencing for practical field usage."
    }
  ],
  efficiencyAndDeployment: {
    efficiencyFocus: "High-end multi-GPU workstations are unavailable in typical agricultural field settings. This research emphasizes model efficiency—investigating compact model footprints, low memory bandwidth, and reduced parameter counts so that detection algorithms can operate reliably on edge devices.",
    targetHardware: "Resource-constrained embedded systems, edge AI boards, and modern mobile processors.",
    potentialDeployment: "A planned direction is prototyping an Android application that could eventually bring computer vision capabilities directly to agricultural workers and researchers in the field.",
    disclaimer: "Note: Android application integration and edge optimization are project goals and research directions, not claims of completed deployment or benchmarked performance."
  },
  progress: {
    completed: [
      "Field photography campaign collecting 4,500 aerial-view rice images.",
      "Dataset structuring and distribution balancing into Booting, Heading, and Maturity stages (1,500 images each).",
      "Setup and configuration of CVAT annotation workspace and labeling taxonomy."
    ],
    ongoing: [
      "Image-by-image bounding box annotation of panicles using CVAT.",
      "Data quality verification and consistency auditing across stage groupings.",
      "Preliminary literature exploration of lightweight vision backbones."
    ],
    future: [
      "Training baseline and lightweight object detection models once annotation is complete.",
      "Rigorous comparative evaluation across stage recognition accuracy and latency.",
      "Exploratory prototype development for Android-based edge execution."
    ]
  },
  keywords: [
    "Computer Vision",
    "Object Detection",
    "Deep Learning",
    "Efficient AI",
    "Edge Computing",
    "Agricultural AI",
    "Rice Growth Stages",
    "CVAT Annotation"
  ]
};

