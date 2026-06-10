import { PortfolioData } from '../types/portfolio';

export const INITIAL_PORTFOLIO_DATA: PortfolioData = {
  name: "Rui Sun",
  // Providing an extremely stable, high-resolution, professional academic headshot URL directly from Unsplash 
  // as the primary default so it never breaks on any web host. You can easily switch this to "/images/sample-profile.jpg"
  photoUrl: "/images/Ray.jpg",
  bio: "I am a Grade 11 student with a strong interest in biology and chemistry. I enjoy exploring advanced scientific topics, especially synthetic biology, plant physiology, and enzyme evolution. My academic goal is to study Natural Sciences with a focus on biology, and I hope to use scientific research to better understand living systems and solve real-world environmental problems.",
  gradeLevel: "High School Senior • Class of 2026",
  school: "Mapleleaf Shenzhen Academy",
  gpa: "3.7UW",
  major: "Natural Science",
  heroButtons: {
    resumeText: "Download Resume",
    contactText: "Contact"
  },

  gpaDetails: "Consistently maintained a 4.00 Unweighted GPA across the most rigorous STEM-focused curriculum available, including advanced collegiate mathematics and core computational logic.",
  
  courses: [
    { id: "c1", name: "AP Computer Science A", category: "AP", grade: "predicted 5" },
    { id: "c2", name: "AP Calculus BC", category: "AP", grade: "predicted 5" },
    { id: "c3", name: "AP Chemistry", category: "AP", grade: "5" },
    { id: "c4", name: "AP Statistics", category: "AP", grade: "5" },
    { id: "c5", name: "AP Macroeconomics", category: "AP", grade: "5" },
    { id: "c6", name: "AP Mircroeconomics", category: "AP", grade: "5" },
    { id: "c7", name: "AP Statistics", category: "AP", grade: "predicted 5" }
  ],

 
  distinctions: [

    {

      id: "d1",

      title: "Academic excellent award in school",

      year: "2026",

      description: "Recognized by the school for strong academic performance, consistent effort, and outstanding achievement across courses.
"

    },

    {
id: "d2",
title: "British Biology Olympiad Gold Award",
year: "2025",
description: "Earned a Gold Award in the British Biology Olympiad, demonstrating strong knowledge of biological concepts and advanced problem-solving ability."
},
{
id: "d3",
title: "UK Chemistry Olympiad Gold Award",
year: "2025",
description: "Achieved a Gold Award in the UK Chemistry Olympiad, reflecting strong analytical ability and understanding of advanced chemistry concepts."
}

  ],
 
  recognitions: [
{ id: "r1", title: "21st Century Cup English Speaking Competition Third Prize", date: "2022" },

{ id: "r2", title: "ASDAN Business Simulation Bronze Award", date: "2023" },

{ id: "r3", title: "China Academy of Art Certificate", date: "2023" }
],
 certifications: [
{
id: "cert1",
name: "IELTS Overall Band 7.5",
issuer: "British Council / IDP / Cambridge English",
year: "2024",
link: ""
},
{
id: "cert2",
name: "China Academy of Art Certificate",
issuer: "China Academy of Art",
year: "2023",
link: ""
},
{
id: "cert3",
name: "Drum Set Level 7 Certificate",
issuer: "Music Grading Examination Organization",
year: "2023",
link: ""
}
],
 
  researchProjects: [
{
id: "res1",
title: "Evolutionary Constraints on Rubisco Optimization",
role: "Student Researcher",
advisor: "Independent Research Project",
description: "Investigated why natural selection has not directly optimized Rubisco despite its low catalytic speed and oxygenase activity. The project explored enzyme kinetics, historical constraints, and the evolution of carbon-concentrating mechanisms such as C4 photosynthesis as indirect solutions to Rubisco inefficiency."
},
{
id: "res2",
title: "Benefits and Risks of Vaccination",
role: "Student Researcher",
advisor: "School Research Project",
description: "Researched how vaccines train the immune system and evaluated their public health benefits alongside possible side effects. The project emphasized balanced scientific reasoning by comparing vaccine effectiveness, safety concerns, and the importance of evidence-based health decisions."
}
],
 
 competitions: [
{
id: "comp1",
name: "British Biology Olympiad",
year: "2025",
placement: "Gold Award",
description: "Earned a Gold Award by demonstrating strong understanding of biological concepts, data interpretation, and advanced problem-solving in biology."
},
{
id: "comp2",
name: "UK Chemistry Olympiad",
year: "2025",
placement: "Gold Award",
description: "Achieved a Gold Award through strong performance in analytical chemistry, chemical reasoning, and advanced problem-solving."
},
{
id: "comp3",
name: "21st Century Cup English Speaking Competition",
year: "2022",
placement: "Third Prize",
description: "Received recognition in an English speaking competition, demonstrating communication ability, confidence, and structured public presentation skills."
},
{
id: "comp4",
name: "ASDAN Business Simulation",
year: "2023",
placement: "Bronze Award",
description: "Participated in a business simulation challenge that involved teamwork, strategic decision-making, and practical problem-solving."
}
],

leadership: [
{
id: "lead1",
organization: "Middle School Basketball Team",
role: "Team Captain",
period: "Middle School",
responsibilities: [
"Led teammates during practices and competitions, helping maintain teamwork, discipline, and motivation.",
"Communicated with team members to support cooperation and improve group performance."
],
accomplishments: [
"Developed leadership, responsibility, and resilience through competitive team sports.",
"Strengthened communication and collaboration skills in a team-based environment."
]
},
{
id: "lead2",
organization: "Biology Research and Academic Projects",
role: "Student Researcher",
period: "2025 - 2026",
responsibilities: [
"Independently selected research topics related to biology, chemistry, and environmental biochemistry.",
"Read scientific papers, organized notes, and developed research arguments based on evidence."
],
accomplishments: [
"Completed research on Rubisco evolution and the constraints behind enzyme optimization.",
"Improved scientific writing, citation management, and research presentation skills."
]
}
],

volunteer: [
{
id: "vol1",
organization: "Autism Volunteer Service",
role: "Student Volunteer",
hours: null,
impact: "Supported volunteer activities related to autism awareness and community service, developing patience, empathy, and a stronger sense of social responsibility."
},
{
id: "vol2",
organization: "Donation and Community Support Activities",
role: "Student Participant",
hours: null,
impact: "Participated in donation-related service activities, contributing to community support while developing a stronger awareness of public responsibility."
}
],

awards: [
{
id: "aw1",
title: "Academic Excellence Award",
category: "Academic",
date: "2025",
description: "Recognized by the school for strong academic performance, consistent effort, and outstanding achievement across coursework."
},
{
id: "aw2",
title: "China Academy of Art Certificate",
category: "Arts",
date: "2023",
description: "Received an art certificate from the China Academy of Art, reflecting long-term training and achievement in visual arts."
},
{
id: "aw3",
title: "Drum Set Level 7 Certificate",
category: "Music",
date: "2023",
description: "Earned a Level 7 certificate in drum set performance, demonstrating commitment, practice, and musical skill."
}
],

projects: [
{
id: "proj1",
title: "Evolutionary Constraints on Rubisco Optimization",
category: "Biology Research",
description: "A research project examining why natural selection has not directly optimized Rubisco despite its slow catalytic rate and oxygenase activity. The project explores enzyme kinetics, historical constraints, and indirect evolutionary solutions such as C4 photosynthesis and carbon-concentrating mechanisms.",
link: "",
tags: ["Rubisco", "Evolution", "Enzyme Kinetics", "C4 Photosynthesis"]
},
{
id: "proj2",
title: "Benefits and Risks of Vaccination",
category: "Biology Research",
description: "A school research project analyzing how vaccines train the immune system while also considering possible side effects and public health concerns. The project emphasizes balanced scientific reasoning and evidence-based health decisions.",
link: "",
tags: ["Immunology", "Vaccination", "Public Health", "Scientific Writing"]
}
],

languages: [
{ id: "lang1", name: "Mandarin", proficiency: "Native" },
{ id: "lang2", name: "English", proficiency: "Advanced / IELTS 7.5" }
],

skills: [
{ id: "sk1", name: "Biology Research and Scientific Reading", category: "Academic" },
{ id: "sk2", name: "Organic Chemistry Foundations", category: "Academic" },
{ id: "sk3", name: "Environmental Biochemistry", category: "Academic Interest" },
{ id: "sk4", name: "Synthetic Biology", category: "Academic Interest" },
{ id: "sk5", name: "LaTeX and Overleaf", category: "Academic Writing" },
{ id: "sk6", name: "Scientific Citation and Literature Review", category: "Research" },
{ id: "sk7", name: "Public Speaking", category: "Communication" },
{ id: "sk8", name: "Visual Design and Poster Creation", category: "Creative" }
],

creativeWork: [
{
id: "cw1",
title: "Simplistic Scientific Poster Design",
type: "Visual Communication",
description: "Designed visually clear, minimalist posters for academic and presentation projects, focusing on clean structure, readable layout, and effective communication of key ideas.",
link: ""
}
],

publications: [],

testScores: [
{
id: "ts1",
testName: "IELTS",
score: "7.5 Overall",
date: "2024",
details: "Reading 9.0 • Listening 8.5 • Writing 6.5 • Speaking 6.0"
}
],

careerGoals: "My career goal is to study biology and chemistry at a deeper level, especially environmental biochemistry and synthetic biology. In the future, I hope to use scientific research to understand biological systems and develop solutions to real-world environmental and health-related problems."

    { id: "nav-hero", label: "Home", href: "#hero", visible: true },

    { id: "nav-acad", label: "Academics", href: "#academics", visible: true },

    { id: "nav-comp", label: "Competitions", href: "#competitions", visible: true },

    { id: "nav-lead", label: "Leadership", href: "#leadership", visible: true },

    { id: "nav-vol", label: "Service", href: "#volunteer", visible: true },

    { id: "nav-awards", label: "Awards", href: "#awards", visible: true },

    { id: "nav-high", label: "Highlights", href: "#highlights", visible: true },

    { id: "nav-contact", label: "Contact", href: "#contact", visible: true }

  ],
 
  contact: {

    email: "1593598@qq.com",

    phone: "+1 (555) 482-9104",

    qq: "1593598",

    github: "https://github.com/session",

    wechat: 12321321421",

    linkedin: "https://ray-sun-portfolio.netlify.app/"

  },
 
  theme: {

    preset: "ivy-crimson",

    bgColor: "#ffffff",

    bgSecondary: "#f8fafc",

    textColor: "#0f172a",

    textSecondary: "#475569",

    accentColor: "#881337",

    accentLight: "#ffe4e6",

    fontFamily: "'Inter', sans-serif"

  }

};
 
export const THEME_PRESETS = [

  {

    id: "ivy-crimson",

    name: "Classic Ivy Crimson",

    bgColor: "#ffffff",

    bgSecondary: "#f8fafc",

    textColor: "#0f172a",

    textSecondary: "#475569",

    accentColor: "#881337",

    accentLight: "#ffe4e6",

  },

  {

    id: "stanford-cardinal",

    name: "Stanford Cardinal",

    bgColor: "#ffffff",

    bgSecondary: "#fefefe",

    textColor: "#1c1917",

    textSecondary: "#57534e",

    accentColor: "#8c1515",

    accentLight: "#fee2e2",

  },

  {

    id: "berkeley-blue",

    name: "Berkeley Blue & Gold",

    bgColor: "#ffffff",

    bgSecondary: "#f1f5f9",

    textColor: "#0f172a",

    textSecondary: "#334155",

    accentColor: "#003262",

    accentLight: "#e0f2fe",

  },

  {

    id: "mit-silver",

    name: "MIT Tech Slate",

    bgColor: "#0b0f19",

    bgSecondary: "#111827",

    textColor: "#f3f4f6",

    textSecondary: "#9ca3af",

    accentColor: "#3b82f6",

    accentLight: "#1e3a8a",

  },

  {

    id: "oxford-emerald",

    name: "Oxford Prestige Emerald",

    bgColor: "#ffffff",

    bgSecondary: "#f4fbf7",

    textColor: "#064e3b",

    textSecondary: "#047857",

    accentColor: "#065f46",

    accentLight: "#d1fae5",

  },

  {

    id: "elegant-minimalist",

    name: "Pure Minimalist Slate",

    bgColor: "#fafafa",

    bgSecondary: "#ffffff",

    textColor: "#18181b",

    textSecondary: "#52525b",

    accentColor: "#27272a",

    accentLight: "#f4f4f5",

  }

];

 
