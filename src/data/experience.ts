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
    roles: [
      {
        title: "Application Engineer Intern",
        start: "May 2025",
        end: "December 2025",
        duration: "8 months",
        description:
          "Collaborate with global silicon, software, and solutions engineers to develop and deliver high-quality technical training for Field Application Engineers and channel partners. Review lab materials and hands-on tutorials to ensure technical accuracy, and contribute to the creation of both live and on-demand training content. Strengthening skills in FPGAs, digital design, training content development, web and API development, cloud services, user authentication, and technical communication.",
      },
    ],
  },
  {
    company: "GDSC-UTP",
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
