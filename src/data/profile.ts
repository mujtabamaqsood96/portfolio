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
  origin: "Born and raised in Qatar",
  university: "Universiti Teknologi PETRONAS",
  /** One line under the hero photo and in the About terminal (`~/now`). */
  currentRoleLine: "Vice Lead, Technical Development · GDSC-UTP",
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
    "I completed an Application Engineer Internship at Lattice Semiconductor (May 2025 to December 2025), where I collaborated with global silicon, software, and solutions engineers to deliver technical training for Field Application Engineers and channel partners. I reviewed lab materials and hands-on tutorials for technical accuracy and contributed to both live and on-demand training content. I am completing a Bachelor of Engineering in Computer Engineering at Universiti Teknologi PETRONAS and now focus on expanding practical expertise across cloud systems, AI, robotics, IT, networking, and industrial automation.",
  /** Short summary for the About section header / OG description. */
  shortSummary:
    "Final-year Computer Engineering student open to graduate roles across cloud systems, AI, robotics, IT, networking, and industrial automation.",
  /** SEO + social card metadata. */
  meta: {
    siteTitle: "Mujtaba Khan — Intelligent Robotics · FPGA · Edge AI",
    siteDescription:
      "Portfolio of Mujtaba Khan — final-year Computer Engineering student at Universiti Teknologi PETRONAS, open to graduate roles across cloud systems, AI, robotics, IT, networking, and industrial automation.",
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
