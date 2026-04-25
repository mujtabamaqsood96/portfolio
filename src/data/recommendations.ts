export type Recommendation = {
  recommenderName: string;
  recommenderTitle: string;
  relationship: string;
  quote: string;
  linkedinUrl?: string;
  linkLabel?: string;
  dateLabel?: string;
};

/** LinkedIn recommendations sourced from your profile. */
export const recommendations: Recommendation[] = [
  {
    recommenderName: "Keng Lai Yap",
    recommenderTitle: "Applications Engineer and Training Specialist at Lattice Semiconductor",
    relationship: "Managed Mujtaba directly",
    quote:
      "Innovative, open-minded and willing to learn. These are the obvious strength I could see in Mujtaba. I am grateful for having him in my team throughout his internship. Other than completing the project I gave him, he also successfully created multiple FPGA reference designs and trainings for universities. He truly exceeded my expectations for an intern and I sincerely hope to see him again in Lattice some day.",
    linkedinUrl: "https://www.linkedin.com/in/mujtabamaqsood96",
    linkLabel: "View recommendation source on LinkedIn profile",
    dateLabel: "December 2025",
  },
  {
    recommenderName: "Loo Tung Lun",
    recommenderTitle: "Senior Manager at Lattice Semiconductor",
    relationship: "Mujtaba's mentor",
    quote:
      "I had the pleasure of working with Mujtaba during his internship at Lattice. Throughout his tenure, he consistently demonstrated strong technical acumen, independence, and resourcefulness in transforming ideas into practical solutions. His dedication and contributions were instrumental in successfully delivering a robotics project within a remarkably short timeframe. Mujtaba's professionalism and problem-solving skills make him an outstanding engineer, and I am confident he would be a valuable asset to any organization.",
    linkedinUrl: "https://www.linkedin.com/in/mujtabamaqsood96",
    linkLabel: "View recommendation source on LinkedIn profile",
    dateLabel: "December 2025",
  },
  {
    recommenderName: "Mourad ZAKHAMA (EE, M.Sc., MBA)",
    recommenderTitle: "Technical and Business Advisor at Lattice Semiconductor",
    relationship: "Worked with Mujtaba on the same team",
    quote:
      "It was a pleasure working with Mujtaba during his internship. He integrated quickly into the team and demonstrated the ability to contribute to real, technically challenging projects. Mujtaba showed strong analytical skills, solid problem-solving capabilities, and a willingness to dive deep into new concepts. I particularly appreciated his enthusiasm, creativity, and proactive attitude when facing technical challenges. He learned rapidly, asked relevant and technically insightful questions, and consistently delivered high-quality work with minimal supervision. I'm confident that Mujtaba will continue to grow and excel in future engineering roles. I fully recommend him.",
    linkedinUrl: "https://www.linkedin.com/in/mujtabamaqsood96",
    linkLabel: "View recommendation source on LinkedIn profile",
    dateLabel: "December 2025",
  },
  {
    recommenderName: "Ts. Dr Noureen Talpur",
    recommenderTitle:
      "Lecturer, Computer & Information Sciences Department, Universiti Teknologi PETRONAS",
    relationship: "Issued formal internship recommendation letter (pre-internship)",
    quote:
      "I am pleased to recommend Mujtaba Maqsood Rustam Khan for an internship at your esteemed company. Throughout his academic journey, Mujtaba has demonstrated strong academic ability and technical expertise, reflecting his dedication to his studies and commitment to continuous learning. Given his technical knowledge, project experience, and motivation for innovation, I am confident that he will make valuable contributions during his internship. His commitment to excellence and eagerness to apply his skills in a professional environment make him an outstanding candidate for this opportunity.",
    dateLabel: "Recommendation Letter",
  },
];
