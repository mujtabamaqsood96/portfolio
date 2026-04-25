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
    year: "2025",
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
    links: [
      {
        label: "Request technical brief",
        href: "mailto:mujtabamaqsood96@gmail.com?subject=Lattice%20AmazingHand%20Technical%20Brief",
        icon: "tabler:mail",
      },
    ],
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
    links: [
      {
        label: "Request training pack",
        href: "mailto:mujtabamaqsood96@gmail.com?subject=Educational%20FPGA%20Reference%20Designs%20Training%20Pack",
        icon: "tabler:mail",
      },
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
    links: [
      {
        label: "Request platform demo",
        href: "mailto:mujtabamaqsood96@gmail.com?subject=Lattice%20RemoteLab%20Platform%20Demo",
        icon: "tabler:mail",
      },
    ],
    featured: true,
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
    links: [
      {
        label: "Request architecture summary",
        href: "mailto:mujtabamaqsood96@gmail.com?subject=EV%20Digital%20Twin%20Architecture%20Summary",
        icon: "tabler:mail",
      },
    ],
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
    links: [
      {
        label: "Request project brief",
        href: "mailto:mujtabamaqsood96@gmail.com?subject=MethAWARE%20Project%20Brief",
        icon: "tabler:mail",
      },
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
    links: [
      {
        label: "Request feature walkthrough",
        href: "mailto:mujtabamaqsood96@gmail.com?subject=Library%20Management%20System%20Walkthrough",
        icon: "tabler:mail",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
