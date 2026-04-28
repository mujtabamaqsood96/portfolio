/**
 * Project catalog rendered in the portfolio grid and on /projects/[slug] pages.
 * Each project has a unique slug, summary, optional highlights, and optional detail body.
 */

export type ProjectStatus = "Concept" | "In Progress" | "Shipped" | "Award";

export type ProjectLink = {
  label: string;
  href: string;
  /** tabler / simple-icons / lucide icon name */
  icon?: string;
};

export type Project = {
  /** URL segment for /projects/{slug} */
  slug: string;
  title: string;
  year: string;
  status?: ProjectStatus;
  /** tabler / simple-icons / lucide icon name for card header */
  icon: string;
  /** Up to 3 scannable value lines; shown on cards and detail lead */
  highlights?: [string, string, string?];
  summary: string;
  /** Optional longer narrative paragraphs for the detail page only */
  body?: string[];
  tech: string[];
  image?: {
    src: string;
    alt: string;
    /** Intrinsic dimensions to reduce layout shift; defaults to 16:10 card ratio in the UI */
    width?: number;
    height?: number;
  };
  links?: ProjectLink[];
  /** Mark featured to render a subtle highlight border. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "lattice-amazing-hand",
    title: "Lattice AmazingHand",
    year: "2026",
    status: "Shipped",
    icon: "tabler:cpu",
    highlights: [
      "MobileNet V1 object counting on CrossLink-NX and CertusPro-NX FPGAs",
      "Portable Verilog RTL with low vision-to-action latency vs MCU baselines",
      "Python GUI and controller support for a 16-servo dual-hand setup",
    ],
    summary:
      "AI-powered robotic hand control system on Lattice Nexus FPGAs (CrossLink-NX, CertusPro-NX) with integrated MobileNet V1 object counting. Built portable Verilog RTL supporting three FPGA platforms and a Python GUI with controller support for a 16-servo dual-hand setup, achieving lower vision-to-action latency than MCU-based alternatives.",
    body: [
      "The system fuses on-device vision with deterministic servo control, prioritizing end-to-end latency for real-time hand gestures that react to what the camera classifies in frame.",
      "To stay deployment-flexible, the RTL was kept portable across three Nexus-class boards, using consistent interfaces so hardware bring-up and demos could be repeated without a parallel codebase.",
    ],
    image: {
      src: "/projects/lattice-amazing-hand.jpg",
      alt: "Lattice AmazingHand overview showing robotic hand system capabilities and delivered value.",
      width: 1200,
      height: 750,
    },
    tech: ["Edge AI", "Robotics", "Verilog RTL", "Lattice Nexus", "MobileNet V1", "Python GUI"],
    featured: true,
  },
  {
    slug: "educational-fpga-academic-outreach",
    title: "Educational FPGA Reference Designs for Global Academic Outreach",
    year: "2025",
    status: "Shipped",
    icon: "tabler:school",
    highlights: [
      "Three Nexus-ready designs: Full Adder, DHT11 sensing, and dual-motor control",
      "Testbenches, Python GUIs, and QuestaSim-backed verification",
      "Lattice Insights video series; deployed at USM and UTP training sessions",
    ],
    summary:
      "Designed three educational Lattice Nexus FPGA reference designs (Full Adder, DHT11 Temperature and Humidity Sensor, and Dual Motor Control) with fully documented RTL, testbenches, Python GUIs, and a complete Lattice Insights tutorial series. Deployed for hands-on training with professors at USM and students at UTP.",
    body: [
      "Each reference was scoped to teach one clear skill jump—from combinational building blocks, to a practical sensor interface, to a small robotics motor pair—so cohorts can progress in a single course arc.",
      "The outcomes-focused collateral (RTL, testbenches, and GUI harnesses) was written for instructors to reuse in labs with minimal reworking.",
    ],
    image: {
      src: "/projects/academic-outreach-overview.jpg",
      alt: "Educational FPGA reference designs overview for global academic outreach.",
      width: 1200,
      height: 750,
    },
    tech: [
      "Verilog",
      "Lattice Nexus",
      "FPGA Development",
      "Testbenches",
      "Python GUI",
      "QuestaSim",
    ],
    featured: true,
  },
  {
    slug: "lattice-remotelab",
    title: "Lattice RemoteLab",
    year: "2025",
    status: "Shipped",
    icon: "tabler:device-desktop-analytics",
    highlights: [
      "End-to-end booking and access for FPGA lab machines with real-time availability",
      "Recurring reservations, board assignment, and multi-role access control",
      "Calendar sync, DWService remote desktop, and multilingual support",
    ],
    summary:
      "Built a full-featured Remote Lab Management System for booking and remotely accessing FPGA lab PCs with DWService integration. Includes real-time availability tracking, smart conflict-safe reservations with recurring schedules, board assignment, role-based access, analytics dashboard, calendar sync, and multilingual support.",
    body: [
      "The system was designed so engineers can self-serve lab time without e-mail triage, while admins retain analytics on usage and board allocation across sites.",
    ],
    image: {
      src: "/projects/lattice-remotelab-overview.jpg",
      alt: "Lattice RemoteLab centralized booking platform overview and benefits.",
      width: 1200,
      height: 750,
    },
    tech: [
      "Lattice Nexus",
      "Remote Lab",
      "DWService",
      "Scheduling",
      "Admin Dashboard",
      "Analytics",
    ],
    featured: true,
  },
  {
    slug: "data-challenge-5-connected-but-unequal",
    title: "Data Challenge 5.0: Connected but Unequal",
    year: "2025",
    status: "Shipped",
    icon: "tabler:chart-dots-3",
    highlights: [
      "Led a team to analyze regional digital-access disparities across Malaysian states",
      "Built an interactive Tableau dashboard linking internet access and median income",
      "Converted findings into actionable short-, medium-, and long-term policy recommendations",
    ],
    summary:
      "Led the CodeCatalysts team project for Data Challenge 5.0, focused on regional disparities in digital access and opportunity in Malaysia. Built a narrative-driven analytics dashboard and presentation set that showed both connectivity gaps and socioeconomic impact patterns across states.",
    body: [
      "The project framed digital inequality as a compound issue that extends beyond access alone, highlighting affordability, usability, and real-world outcomes.",
      "Our dashboard compared household internet penetration by state, visualized internet-access versus median-income relationships, and surfaced regional trends to support clearer public-sector and policy discussion.",
      "The final deliverable combined insight storytelling with an interactive Tableau experience so judges and viewers could explore the analysis directly.",
    ],
    image: {
      src: "/projects/data-challenge-5-dashboard.png",
      alt: "CodeCatalysts Data Challenge 5.0 Tableau dashboard on digital access disparities in Malaysia.",
      width: 1920,
      height: 1080,
    },
    tech: ["Tableau", "Data Storytelling", "Data Analysis", "Dashboard Design", "Public Policy Insights"],
    links: [
      {
        label: "Open Live Tableau Dashboard",
        href: "https://public.tableau.com/app/profile/cc.solutions/viz/ConnectedbutUnequal-TechnologicalDisparities/01Overview",
        icon: "tabler:link",
      },
    ],
  },
  {
    slug: "ev-digital-twin-aws",
    title: "EV Digital Twin Prediction Model using AWS",
    year: "2024",
    status: "Shipped",
    icon: "tabler:car",
    highlights: [
      "Range estimation with SiteWise, IoT Core, TwinMaker, and Grafana",
      "Random Forest training pipeline in SageMaker on historical and live data",
      "~93% accuracy reported on the project evaluation set",
    ],
    summary:
      "Developed a digital-twin EV range prediction system using AWS SiteWise, IoT Core, SageMaker, TwinMaker, and Grafana. A Random Forest model trained in SageMaker achieved 93% accuracy on historical and real-time telemetry, improving range estimation and supporting smarter energy management.",
    body: [
      "The stack connects vehicle telemetry, models it in a digital-twin context, and surfaces range predictions in operator-friendly dashboards to support day-to-day energy decisions.",
    ],
    tech: ["AWS", "IoT Core", "SageMaker", "TwinMaker", "Grafana", "Python"],
  },
  {
    slug: "methaware",
    title: "MethAWARE",
    year: "2024",
    status: "Shipped",
    icon: "tabler:alert-triangle",
    highlights: [
      "Low-cost ESP8266-based leakage monitoring with gas sensing and OLED readout",
      "Designed to stay affordable versus industry price spread estimates",
      "Firmware-focused implementation with practical deployment considerations",
    ],
    summary:
      "Designed an affordable methane leakage monitoring solution using an ESP8266-based IoT system with MQ4 sensing and OLED status display. The system delivers rapid detection while remaining cost-effective and regulatory-aware, with estimated pricing significantly below common market alternatives.",
    body: [
      "The work emphasized BOM discipline and a straight-line signal path (sense → process → show/alert) so the prototype could be explained and iterated quickly.",
    ],
    image: {
      src: "/projects/methaware-poster.jpg",
      alt: "MethAWARE project poster describing objectives, methodology, and cost analysis.",
      width: 1200,
      height: 750,
    },
    tech: ["ESP8266", "C++", "IoT", "Gas Sensing", "Embedded Systems"],
  },
  {
    slug: "xlerobot-open-source-fyp",
    title: "XLeRobot Open-Source FYP",
    year: "2026",
    status: "In Progress",
    icon: "tabler:robot-face",
    highlights: [
      "Final Year Project funded by Lattice Semiconductor",
      "Open-source robotics development on XLeRobot with local AI inference",
      "Hardware/software stack combining Lattice FPGAs and NVIDIA Jetson",
    ],
    summary:
      "Currently developing my FYP around the open-source XLeRobot platform, focusing on practical embodied-AI workflows and deployable robotics architecture. The work is funded by Lattice Semiconductor and emphasizes reproducible integration between FPGA acceleration and edge AI compute.",
    body: [
      "This project explores real-world embodied AI development by combining robot hardware, perception, and control pipelines in an open-source ecosystem.",
      "A core focus is building reliable, production-minded integration patterns between Lattice FPGA components and NVIDIA Jetson for low-latency, on-device execution.",
    ],
    image: {
      src: "/projects/xlerobot-fyp.jpg",
      alt: "XLeRobot FYP hardware platform setup in lab environment.",
      width: 768,
      height: 1024,
    },
    tech: [
      "Open Source Robotics",
      "XLeRobot",
      "Lattice FPGA",
      "NVIDIA Jetson",
      "Edge AI",
      "Embedded Systems",
      "Computer Vision",
    ],
    links: [
      {
        label: "View XLeRobot on GitHub",
        href: "https://github.com/Vector-Wangel/XLeRobot",
        icon: "simple-icons:github",
      },
    ],
    featured: true,
  },
  {
    slug: "nexusbot-emotion-aware-greeting-system",
    title: "NexusBot: Emotion-Aware Interactive Greeting System",
    year: "2026",
    status: "Shipped",
    icon: "tabler:robot",
    highlights: [
      "Emotion-aware greetings for kindergarten using real-time face and emotion analysis",
      "Hybrid edge stack: FPGA wake/human detection plus local AI greeting generation on NVIDIA Jetson Orin AGX",
      "Attendance logging, identity matching, and avatar + TTS response flow",
    ],
    summary:
      "Built an emotion-aware AI companion system for kindergarten greetings, combining FPGA-based wake/human detection with local vision and language pipelines. The system personalizes responses using identity, emotion, and context signals while logging attendance and keeping processing privacy-conscious.",
    body: [
      "NexusBot was designed to replace static greeting systems with adaptive, real-time interactions for children in classroom environments.",
      "The pipeline includes frame capture and wake logic on FPGA, emotion/identity analysis, LLM-driven context-aware response generation, and avatar + text-to-speech output.",
      "For practical local deployment, models were run on NVIDIA Jetson Orin AGX to balance performance, privacy, and real-world usability.",
      "A key engineering focus was balancing responsiveness and deployability across hardware options while preserving local processing for privacy.",
    ],
    tech: [
      "FPGA",
      "Lattice CrossLink-NX",
      "NVIDIA Jetson Orin AGX",
      "TensorFlow",
      "DeepFace",
      "YOLOv8",
      "Llama 3.2 Vision",
      "edge_tts",
      "Computer Vision",
    ],
    links: [
    ],
  },
  {
    slug: "library-management-system",
    title: "Library Management System",
    year: "2023",
    status: "Shipped",
    icon: "tabler:books",
    highlights: [
      "Java and JavaFX desktop solution with OOP-structured core services",
      "Search, rent, and order flows for both students and staff",
      "Emphasis on clarity and speed over feature sprawl",
    ],
    summary:
      "Designed and implemented a Java-based Library Management System using OOP and JavaFX. Supports searching, renting, and ordering workflows for students and staff with a clean and intuitive interface focused on usability and day-to-day library operations.",
    body: [
      "The project prioritized predictable CRUD operations and a readable UI layer so the domain model could evolve without a rewrite.",
    ],
    tech: ["Java", "JavaFX", "OOP", "Desktop UI"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
