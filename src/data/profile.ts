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
  role: "Computer Engineer",
  tagline: "FPGA · Edge AI · Embedded Systems · Cloud",
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
  qatarWhatsapp: "+974 55460177",
  /** All contact links rendered in Contact + Footer + Navbar. */
  socials: {
    linkedin: "https://www.linkedin.com/in/mujtabamaqsood96",
    github: "https://github.com/mujtabamaqsood96",
    email: "mailto:mujtabamaqsood96@gmail.com",
    phone: "tel:+60149367421",
    whatsappQatar: "https://wa.me/97455460177",
  },
  /** Full summary as written on the CV. */
  summary:
    "I am a final-year Computer Engineering student at Universiti Teknologi PETRONAS. Open to roles across cloud, AI, robotics, IT, networking, and industrial automation-focused applications. My project work spans FPGA-based control and edge-AI systems, AI-driven interactive platforms, and AWS-based digital twin and analytics solutions. I completed an 8-month Application Engineer internship at Lattice Semiconductor (May to December 2025), and I am now pursuing graduate opportunities where I can contribute as a systems-oriented engineer.",
  /** Short summary for the About section header / OG description. */
  shortSummary:
    "Final-year Computer Engineering student open to graduate roles across cloud systems, AI, robotics, IT, networking, and industrial automation.",
  /** SEO + social card metadata. */
  meta: {
    siteTitle: "Mujtaba Khan — Computer Engineer · FPGA · Edge AI",
    siteDescription:
      "Portfolio of Mujtaba Khan — final-year Computer Engineering student at Universiti Teknologi PETRONAS, open to graduate roles across cloud systems, AI, robotics, IT, networking, and industrial automation.",
    keywords: [
      "Mujtaba Khan",
      "FPGA",
      "Edge AI",
      "Embedded Systems",
      "Computer Engineering",
      "Computer Engineering",
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
