export type EducationItem = {
  institution: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  location?: string;
  icon?: string;
};

export type Certification = {
  name: string;
  issuer?: string;
  issued?: string;
  icon?: string;
};

export type Honor = {
  title: string;
  issuer?: string;
  date?: string;
  icon?: string;
  image?: {
    src: string;
    alt: string;
  };
};

export type AcademicStructure = {
  totalCredits: number;
  currentCgpa?: number;
  specialisation: string;
  industryContextCourse?: string;
  graduationBreakdown: {
    code: string;
    label: string;
    credits: number;
  }[];
  coreCoursework: string[];
  semesterPlan: {
    semester: string;
    courses: string[];
  }[];
};

export const education: EducationItem[] = [
  {
    institution: "Universiti Teknologi PETRONAS",
    degree: "Bachelor of Engineering — BE",
    field: "Computer Engineering",
    start: "January 2023",
    end: "December 2026",
    location: "Perak, Malaysia",
    icon: "tabler:school",
  },
];

export const certifications: Certification[] = [
  {
    name: "Timing Constraints Deep Dive with Radiant",
    issuer: "Lattice Semiconductor",
    issued: "Sep 2025",
    icon: "tabler:cpu",
  },
  {
    name: "Enabling Edge AI with Lattice Sensor Bridge & NVIDIA Holoscan",
    issuer: "Lattice Semiconductor",
    issued: "Aug 2025",
    icon: "tabler:cpu",
  },
  {
    name: "Hands-on Introduction to Linux Commands and Shell Scripting",
    issuer: "IBM",
    issued: "Aug 2025",
    icon: "simple-icons:ibm",
  },
  {
    name: "RISC-V Solutions with Lattice",
    issuer: "Lattice Semiconductor",
    issued: "Aug 2025",
    icon: "tabler:cpu",
  },
  {
    name: "Armv8-M Architecture Fundamentals",
    issuer: "Arm",
    issued: "Aug 2025",
    icon: "simple-icons:arm",
  },
  {
    name: "Using Altera SoC FPGAs: An Introduction",
    issuer: "Intel",
    issued: "Jul 2025",
    icon: "simple-icons:intel",
  },
  {
    name: "Timing Closure for Altera FPGAs Course Completion",
    issuer: "Intel",
    issued: "Jul 2025",
    icon: "simple-icons:intel",
  },
  {
    name: "Beginner Workshop for Altera FPGAs Course Completion",
    issuer: "Intel",
    issued: "Jul 2025",
    icon: "simple-icons:intel",
  },
  {
    name: "Platform Designer for Altera FPGAs Course Completion",
    issuer: "Intel",
    issued: "Jul 2025",
    icon: "simple-icons:intel",
  },
  {
    name: "Application of AI in FPGAs for Vision and Audio Applications",
    issuer: "Lattice Semiconductor",
    issued: "Jul 2025",
    icon: "tabler:cpu",
  },
  {
    name: "Design & Development with Lattice FPGA: Application",
    issuer: "Lattice Semiconductor",
    issued: "Jun 2025",
    icon: "tabler:cpu",
  },
  {
    name: "iCE40 UltraPlus Device Architecture",
    issuer: "Lattice Semiconductor",
    issued: "Jun 2025",
    icon: "tabler:cpu",
  },
  {
    name: "Design & Development with Lattice FPGA: Fundamentals",
    issuer: "Lattice Semiconductor",
    issued: "May 2025",
    icon: "tabler:cpu",
  },
  {
    name: "Developing with Propel: Fundamentals",
    issuer: "Lattice Semiconductor",
    issued: "May 2025",
    icon: "tabler:cpu",
  },
  {
    name: "Developing with Radiant: Fundamentals",
    issuer: "Lattice Semiconductor",
    issued: "May 2025",
    icon: "tabler:cpu",
  },
  {
    name: "AWS Academy Graduate — AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    issued: "Apr 2025",
    icon: "simple-icons:amazonaws",
  },
  {
    name: "Foundations of Software Testing and Validation",
    issuer: "University of Leeds",
    issued: "Mar 2025",
    icon: "tabler:school",
  },
  {
    name: "AI Infrastructure and Operations Fundamentals",
    issuer: "NVIDIA",
    issued: "Mar 2025",
    icon: "simple-icons:nvidia",
  },
  {
    name: "AI for All",
    issuer: "Microsoft",
    issued: "Feb 2025",
    icon: "simple-icons:microsoft",
  },
  {
    name: "Arm Cortex-M Processors Overview",
    issuer: "Arm",
    issued: "Feb 2025",
    icon: "simple-icons:arm",
  },
  {
    name: "100 Days of Code: The Complete Python Pro Bootcamp",
    issuer: "London App Brewery",
    issued: "Nov 2024",
    icon: "simple-icons:python",
  },
  {
    name: "Introduction to Networking",
    issuer: "NVIDIA",
    icon: "simple-icons:nvidia",
  },
  {
    name: "AI/ML Workshop: Optical Character Recognition with Tensorflow",
    issuer: "UTP SYNTECH Organization",
    icon: "tabler:brain",
  },
];

export const honors: Honor[] = [
  {
    title: "Finalist — Data Challenge 5.0",
    issuer: "Data Challenge 5.0",
    date: "2026",
    icon: "tabler:rosette-discount-check",
  },
  {
    title: "Top 10 — SEDEX (Science and Engineering Design Exhibition)",
    issuer: "SEDEX",
    date: "2025",
    icon: "tabler:medal",
  },
  {
    title: "Hive Five Award",
    issuer: "Lattice Semiconductor",
    date: "2025",
    icon: "tabler:star",
    image: {
      src: "/awards/high-five-award-certificate.jpg",
      alt: "Hive Five Award certificate from Lattice Semiconductor.",
    },
  },
  {
    title: "4th Place — Invent for the Planet 2025 (UTP Edition)",
    issuer: "Texas A&M University · UTP",
    date: "2025",
    icon: "tabler:trophy",
    image: {
      src: "/awards/iftp-winning-photo.jpg",
      alt: "Mujtaba's team accepting 4th place at Invent for the Planet 2025 (UTP Edition).",
    },
  },
  {
    title: "Dean's List — January 2025 Semester",
    issuer: "Universiti Teknologi PETRONAS",
    date: "2025",
    icon: "tabler:award",
  },
  {
    title: "Dean's List — September 2024 Semester",
    issuer: "Universiti Teknologi PETRONAS",
    date: "2024",
    icon: "tabler:award",
    image: {
      src: "/awards/deans-list-september-2024.jpg",
      alt: "Mujtaba receiving Dean's List recognition for September 2024 semester.",
    },
  },
  {
    title: "Dean's List — May 2024 Semester",
    issuer: "Universiti Teknologi PETRONAS",
    date: "2024",
    icon: "tabler:award",
  },
];

export const academicStructure: AcademicStructure = {
  totalCredits: 144,
  currentCgpa: 3.41,
  specialisation: "Intelligent Robotics",
  industryContextCourse: "Introduction to Oil & Gas Industry and Sustainable Development",
  graduationBreakdown: [
    { code: "NR", label: "National Requirement", credits: 10 },
    { code: "UR", label: "University Requirement", credits: 15 },
    { code: "CC", label: "Core Common", credits: 21 },
    { code: "CD", label: "Core Discipline", credits: 75 },
    { code: "CI", label: "Core Industrial Internship", credits: 14 },
    { code: "CSp", label: "Core Specialisation", credits: 9 },
  ],
  coreCoursework: [
    "Circuit Theory",
    "Structured Programming and Interfacing",
    "Engineering Mathematics I",
    "Digital Electronics",
    "Engineering Mathematics II",
    "Object Oriented Programming",
    "Software Engineering",
    "Discrete Mathematics",
    "Signals and Systems",
    "Operating Systems",
    "Algorithm and Data Structure",
    "Communication Systems",
    "Embedded and IoT Systems",
    "Digital System Design",
    "Microprocessor and Computer Architecture",
    "Data and Computer Network",
    "Cloud System Technologies",
    "Data Analytics",
    "Linear Algebra and Matrix Methods",
    "Digital Twin",
    "Instrumentation and Control",
    "Probability and Random Process",
    "Image Processing and Machine Vision",
    "Computer Security",
    "Artificial Intelligence and Applications",
    "Autonomous Robot Systems",
    "Distributed and Parallel Processing",
    "Robotics and Automations",
  ],
  semesterPlan: [
    {
      semester: "Semester 1",
      courses: [
        "Circuit Theory",
        "Structured Programing and Interfacing",
        "Engineering Mathematics I",
        "Bahasa Melayu Komunikasi 2",
        "Introduction to Oil & Gas Industry and Sustainable Development",
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        "Health, Safety and Environment",
        "Digital Electronics",
        "Engineering Mathematics II",
        "Ethics and Integrity",
        "Object Oriented Programming",
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        "Scientific Inquiry",
        "Academic Writing",
        "Falsafah dan Isu Semasa (FIS)",
        "Software Engineering",
        "Discrete Mathematics",
      ],
    },
    {
      semester: "Semester 4",
      courses: [
        "Signals & Systems",
        "Business Venture",
        "Digital-Preneur",
        "Integrity and Anti-Corruption",
        "Operating Systems",
        "Algorithm and Data Structure",
      ],
    },
    {
      semester: "Semester 5",
      courses: [
        "Communication Systems",
        "Microprocessor & Computer Architecture",
        "Data Analytics",
        "Entrepreneurship",
        "Engineering Team Project I",
        "Linear Algebra and Matrix Methods",
      ],
    },
    {
      semester: "Semester 6",
      courses: [
        "Community Engagement Project",
        "Professional Communication Skills",
        "Drone Piloting",
        "Engineering Team Project II",
        "Digital Twin",
        "Instrumentation and Control",
      ],
    },
    {
      semester: "Semester 7",
      courses: [
        "Embedded and IoT Systems",
        "Digital System Design",
        "Data and Computer Network",
        "Cloud System Technologies",
      ],
    },
    {
      semester: "Internship Block (8 months)",
      courses: ["Student Industrial Training", "Student Industrial Project"],
    },
    {
      semester: "Semester 8",
      courses: [
        "Project Management",
        "Probability and Random Process",
        "System Integrated Design Project",
        "Image Processing and Machine Vision",
        "Computer Security",
      ],
    },
    {
      semester: "Semester 9",
      courses: [
        "Engineering Economics",
        "Artificial Intelligence and Applications",
        "Final Year Project I",
        "Autonomous Robot Systems",
      ],
    },
    {
      semester: "Semester 10",
      courses: [
        "Engineers in Society",
        "Final Year Project II",
        "Distributed and Parallel Processing",
        "Robotics and Automations",
      ],
    },
  ],
};
