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
      { name: "Lattice Nexus FPGAs", icon: "tabler:circuit-cell" },
      { name: "Digital Logic Design", icon: "tabler:binary" },
      { name: "ARM Cortex-M", icon: "simple-icons:arm" },
      { name: "STM32 Nucleo", icon: "tabler:cpu" },
      { name: "ESP32", icon: "tabler:wifi" },
      { name: "Raspberry Pi", icon: "simple-icons:raspberrypi" },
      { name: "NVIDIA Jetson", icon: "tabler:device-desktop" },
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
      { name: "MATLAB", icon: "tabler:calculator" },
      { name: "Linux & Shell", icon: "simple-icons:linux" },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: "tabler:cloud",
    skills: [
      { name: "Networking & IT Fundamentals", icon: "tabler:network" },
      { name: "AWS Cloud Foundations", icon: "simple-icons:amazonaws" },
      { name: "Lattice Radiant", icon: "tabler:tools" },
      { name: "Wireshark", icon: "simple-icons:wireshark" },
      { name: "VirtualBox", icon: "simple-icons:virtualbox" },
      { name: "Git & GitHub", icon: "simple-icons:github" },
      { name: "VS Code, Cursor, Antigravity", icon: "simple-icons:visualstudiocode" },
      { name: "Technical Writing", icon: "tabler:notebook" },
    ],
  },
  {
    title: "Languages",
    icon: "tabler:world",
    skills: [
      { name: "English — Bilingual", icon: "tabler:flag" },
      { name: "Urdu — Native", icon: "tabler:flag" },
      { name: "Hindi — Bilingual", icon: "tabler:flag" },
      { name: "Arabic — Elementary", icon: "tabler:flag" },
      { name: "German — Elementary", icon: "tabler:flag" },
    ],
  },
];
