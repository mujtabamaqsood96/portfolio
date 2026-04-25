/**
 * Personal profile — single source of truth.
 * Edit this file to update name, contact info, summary, and social links
 * everywhere on the site.
 */

export const profile = {
  name: "Mujtaba Khan",
  firstName: "Mujtaba",
  lastName: "Khan",
  monogram: "MK",
  role: "Computer Engineer (Intelligent Robotics)",
  tagline: "Intelligent Robotics · FPGA · Edge AI · Embedded Systems",
  /** Short rotating subtitles for the hero terminal-style line. */
  taglineRotators: [
    "Designing for silicon.",
    "Bringing intelligence to the edge.",
    "FPGAs · ARM · IoT · Cloud.",
    "Hardware ↔ Software, end to end.",
  ],
  location: "Perak, Malaysia",
  university: "Universiti Teknologi PETRONAS",
  /** Public profile photo shown in hero. Located in /public/portrait/. */
  photo: "/portrait/profile.jpg",
  /** Primary email — personal, permanent. Shown as the main contact. */
  email: "mujtabamaqsood96@gmail.com",
  /** University email — shown as a secondary contact below the primary. */
  universityEmail: "mujtaba_22008474@utp.edu.my",
  phone: "+60 149367421",
  /** All contact links rendered in Contact + Footer + Navbar. */
  socials: {
    linkedin: "https://www.linkedin.com/in/mujtabamaqsood96",
    github: "https://github.com/mujtabamaqsood96",
    email: "mailto:mujtabamaqsood96@gmail.com",
    phone: "tel:+60149367421",
  },
  /** Full summary as written on the CV. */
  summary:
    "As an Application Engineer Intern at Lattice Semiconductor, I collaborate with global engineering teams to design and deliver technical training for Field Application Engineers and channel partners. My responsibilities include reviewing lab materials, ensuring technical accuracy, and creating both live and on-demand training content. These experiences have allowed me to refine my skills in FPGA development, digital design, and technical communication. Currently pursuing a Bachelor of Engineering in Computer Engineering at Universiti Teknologi PETRONAS, I am motivated to advance my expertise in embedded systems, digital logic design, and FPGA/ASIC development. My academic journey, coupled with my professional experiences, drives me to contribute to cutting-edge innovations in semiconductor technologies and enhance my proficiency in hardware-software integration.",
  /** Short summary for the About section header / OG description. */
  shortSummary:
    "Final-year Computer Engineering student specializing in Intelligent Robotics, currently interning as an Application Engineer at Lattice Semiconductor — building and teaching FPGA, embedded, and edge-AI systems.",
  /** SEO + social card metadata. */
  meta: {
    siteTitle: "Mujtaba Khan — Intelligent Robotics · FPGA · Edge AI",
    siteDescription:
      "Portfolio of Mujtaba Khan — Final-year Computer Engineering student specializing in Intelligent Robotics at Universiti Teknologi PETRONAS, Application Engineer Intern at Lattice Semiconductor. FPGA, Edge AI, Embedded Systems.",
    keywords: [
      "Mujtaba Khan",
      "FPGA",
      "Edge AI",
      "Embedded Systems",
      "Computer Engineering",
      "Intelligent Robotics",
      "Lattice Semiconductor",
      "UTP",
      "Portfolio",
    ],
  },
  /**
   * CV link. Use a local /resume.pdf when available, otherwise a stable public profile.
   */
  resumeHref: "https://www.linkedin.com/in/mujtabamaqsood96",
} as const;

export type Profile = typeof profile;
