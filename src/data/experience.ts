export type ExperienceRole = {
  title: string;
  start: string;
  end: string;
  duration?: string;
  description?: string;
};

export type ExperienceItem = {
  company: string;
  location?: string;
  /** Tabler icon name OR simple-icons name for the company logo. */
  icon?: string;
  url?: string;
  totalDuration?: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceItem[] = [
  {
    company: "Lattice Semiconductor",
    location: "Penang, Malaysia",
    icon: "tabler:cpu",
    url: "https://www.latticesemi.com/",
    totalDuration: "8 months",
    roles: [
      {
        title: "Application Engineer Intern",
        start: "May 2025",
        end: "December 2025",
        duration: "8 months",
        description:
          "Worked with global silicon, software, and solutions teams to deliver technical training for Field Application Engineers and channel partners. Supported both live and on-demand enablement delivery. Executed across FPGA workflows, digital system design, Verilog RTL, edge-AI integration, embedded and robotics prototyping, Linux and Python tooling, performance optimization, and cross-functional engineering communication.",
      },
    ],
  },
  {
    company: "Google Developer Student Clubs (GDSC) UTP",
    location: "Universiti Teknologi PETRONAS",
    icon: "tabler:code",
    totalDuration: "1 year 4 months",
    roles: [
      {
        title: "Vice Lead, Technical Development",
        start: "November 2025",
        end: "Present",
        duration: "6 months",
        description:
          "Lead the Technical Development department — driving hackathons, workshops, industrial tours, and student technical projects across campus.",
      },
      {
        title: "Member, Technical Development",
        start: "January 2025",
        end: "November 2025",
        duration: "11 months",
        description:
          "Supported technical initiatives by collaborating on hackathons, industrial tours, events, projects, and workshops within the Technical Development Department.",
      },
    ],
  },
  {
    company: "Association of International Students UTP",
    location: "Universiti Teknologi PETRONAS",
    icon: "tabler:camera",
    roles: [
      {
        title: "Head of Media",
        start: "January 2023",
        end: "April 2023",
        duration: "4 months",
        description:
          "Led a team to capture key moments and manage social media coverage. Coordinated with other departments to effectively promote events and engage the community — required strong leadership and attention to detail to showcase each event's success.",
      },
    ],
  },
];
