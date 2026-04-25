export type Skill = {
  name: string;
  /** astro-icon name: e.g. "simple-icons:python", "tabler:cpu" */
  icon?: string;
};

export type SkillGroup = {
  title: string;
  /** Section icon for the group header. */
  icon: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Hardware & Silicon",
    icon: "tabler:cpu",
    skills: [
      { name: "FPGA Development", icon: "tabler:cpu" },
      { name: "iCE40 UltraPlus", icon: "tabler:circuit-cell" },
      { name: "Digital Logic Design", icon: "tabler:binary" },
      { name: "ARM Cortex-M", icon: "simple-icons:arm" },
      { name: "Embedded Systems", icon: "tabler:device-imac" },
      { name: "Embedded and IoT Systems", icon: "tabler:broadcast" },
    ],
  },
  {
    title: "Software & AI",
    icon: "tabler:code",
    skills: [
      { name: "Edge AI", icon: "tabler:brain" },
      { name: "Verilog / VHDL", icon: "tabler:terminal-2" },
      { name: "C / C++", icon: "simple-icons:cplusplus" },
      { name: "Python", icon: "simple-icons:python" },
      { name: "Linux & Shell", icon: "simple-icons:linux" },
      { name: "Data Structures & Algorithms", icon: "tabler:binary-tree-2" },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: "tabler:cloud",
    skills: [
      { name: "AWS Cloud Foundations", icon: "simple-icons:amazonaws" },
      { name: "Lattice Radiant", icon: "tabler:tools" },
      { name: "Git & GitHub", icon: "simple-icons:github" },
      { name: "VS Code", icon: "simple-icons:visualstudiocode" },
      { name: "Technical Writing", icon: "tabler:notebook" },
      { name: "Authentication Systems", icon: "tabler:lock" },
    ],
  },
  {
    title: "Languages",
    icon: "tabler:world",
    skills: [
      { name: "English — Professional", icon: "tabler:flag" },
      { name: "Urdu — Native", icon: "tabler:flag" },
      { name: "Hindi — Native", icon: "tabler:flag" },
      { name: "Malay — Elementary", icon: "tabler:flag" },
      { name: "German — Elementary", icon: "tabler:flag" },
    ],
  },
];
