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
      title: "Australia Chemistry Olympaid",
      year: "2025",
      description: "Distinction Award"
    },
    {
      id: "d2",
      title: "Australia Biology Olympaid",
      year: "2025",
      description: "Excellence Award"
    },
    {
      id: "d3",
      title: "CCO qualifier",
      year: "2025",
      description: "Invited to the CCO based on excellennt score in CCC"
    }
  ],

  recognitions: [
    { id: "r1", title: "IELTS overall score of 7.5", date: " 2026" },
    { id: "r2", title: "AP Scholar with Distinction", date: "2025" },
    { id: "r3", title: "Strong Academic Standing with Advanced AP Biology and AP Chemistry Coursework", date: " 2025" }
  ],

  certifications: [
    {
      id: "cert1",
      name: "Introductory Biology",
      issuer: "MIT open courseware",
      year: "2025",
      link: "https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/"
    },
    {
      id: "cert2",
      name: "Ecology and Evolution",
      issuer: "Coursera",
      year: "2025",
      link: "https://www.coursera.org/"
    }
  ],

  researchProjects: [
    {
      id: "res1",
      title: "Why Plants Evolved Carbon Concentrating Mechanisms Instead of Perfecting Rubisco",
      role: "Independent researcher",
      advisor: "none",
      description: "My research project investigates why Rubisco, despite being essential for photosynthesis, remains inefficient. I explore how kinetic trade-offs and historical constraints may have prevented natural selection from directly improving Rubisco, leading instead to indirect solutions such as C4 photosynthesis and other carbon-concentrating mechanisms."
    },
    {
      id: "res2",
      title: "Do the benefits of vaccination outweigh the risks",
      role: "Independent researcher",
      advisor: "none",
      description: "Explore the benefits and risks of vaccination."
    }
  ],

  competitions: [
    {
      id: "comp1",
      name: "Canadian Chemistry Olympaid (CCO)",
      year: "2025",
      placement: "National bronze award",
      description: "Mastered college level chemistry",
      link: "https://cco-occ.ca/"
    },
    {
      id: "comp2",
      name: "USA Biology Olympaid (USABO)",
      year: "2026",
      placement: "National bronze award",
      description: "master college level biology"
    },
    {
      id: "comp3",
      name: "British Biology Olympaid (BBO)",
      year: "2026",
      placement: "Gold metal",
      description: "master college level biology"
    }
  ],

  leadership: [
    {
      id: "lead1",
      organization: "Basketball Team",
      role: "captain",
      period: "2024 ",
      responsibilities:
        [ 
         "Supported activities designed to help autistic children engage in communication, play, and social interaction.",
      "Worked with other volunteers to create a patient and encouraging environment."
    ], 
      accomplishments:
        [
        "Improved empathy, communication, and understanding of individual differences.",
        "Contributed to a more supportive community for children with special needs."
      ]
    },
    {
      id: "lead2",
      organization: "Research Project on Rubisco Evolution",
      role: "Independent researcher",
      period: "2026",
      responsibilities: [
        "Designed an independent literature-based research project on Rubisco inefficiency, enzyme kinetics, and C4 photosynthesis.",
        "Collected and analyzed scientific papers to compare evolutionary constraints, kinetic trade-offs, and carbon-concentrating mechanisms."
      ],
      accomplishments: [
        "Developed a complete research paper explaining why natural selection improves photosynthesis through indirect mechanisms rather than directly optimizing Rubisco.",
        "Strengthened skills in academic writing, citation management, Overleaf formatting, and scientific argument construction."
      ]
    }
  ],

  volunteer: [
    {
      id: "vol1",
      organization: "Autism Volunteer Program",
      role: "Student Volunteer",
      hours: 180,
      impact: "Supported activities for autistic children by helping them participate in communication, play, and social interaction. Developed stronger empathy, patience, and awareness of individual differences through direct community service."
    },
    {
      id: "vol2",
      organization: "Community Donation and Support Activities",
      role: "Contributor",
      hours: 120,
      impact: "Participated in donation-based community support activities by contributing materials and helping organize resources for people in need. Strengthened my sense of social responsibility and commitment to helping others."
    }
  ],

  awards: [
    {
      id: "aw1",
      title: "Mapleleaf Scholarship",
      category: "Scholarship",
      date: "2026",
      description: "Selected for the ultimate financial award based on exemplary standardized academic perfection, service depth, and personal essays.",
      amount: "HALF Tuition Eligibility"
    },
    {
      id: "aw2",
      title: "Academic excellence award",
      category: "Academic",
      date: "2025",
      description: "Awarded to the excellent students",
      amount: "non-applicble"
    },
    {
      id: "aw3",
      title: "UKCHO gold metal",
      category: "competitions",
      date: "2025",
      description: "Learned college level chemistry and receive gold award"
    }
  ],

  projects: [
    {
      id: "proj1",
      title: "Why Evolution Does Not Directly Optimize Rubisco",
      category: "Biology desk research",
      description: "A literature-based research project examining why natural selection often solves Rubisco inefficiency through indirect mechanisms such as C4 photosynthesis and carbon-concentrating systems rather than directly improving Rubisco itself.",
      link: "file:///C:/Users/sRay/Desktop/Rubisco%20research%20project/ResearchPaper_v1.pdf",
      tags: ["Rubisco", "C4 Photosynthesis", "Enzyme Evolution", "Scientific Writing"]
    },
    {
      id: "proj2",
      title: "Benefits and Risks of Vaccination",
      category: "Research Writing Project",
      description: "A research paper analyzing how vaccines protect individuals and communities while also considering possible side effects, public concerns, and the importance of reliable scientific communication.",
      link: "non-applicable",
      tags: ["Immunology", "Vaccines", "Public Health", "Research Writing"]
    }
  ],

  languages: [
    { id: "lang1", name: "Mandarin", proficiency: "Native" },
    { id: "lang2", name: "English", proficiency: "Bilingual" },
    { id: "lang3", name: "Spanish", proficiency: "Beginner" }
  ],

  skills: [
    { id: "sk1", name: "Biology Literature Research", category: "Scientific research" },
    { id: "sk2", name: "Scientific Writing and Argument Development", category: "Academics" },
    { id: "sk3", name: "LaTeX / Overleaf Formatting", category: "Academics" },
    { id: "sk4", name: "AP Biology and AP Chemistry Knowledge", category: "Academics" },
    { id: "sk5", name: "English Public Speaking", category: "Communication" },
    { id: "sk6", name: "Basic Data Analysis and Statistics", category: "Academic" }
  ],

  
  creativeWork: [
    {
      id: "cw1",
      title: "Algorithmic Symphonies - Generative Audio",
      type: "Creative Audio Coding",
      description: "An experimental procedural soundscape generator built with custom Python audio scripts that map prime integer sequences to complex harmonic waveforms.",
      link: "https://github.com/terryyao-edu"
    }
  ],

  publications: [
    {
      id: "pub1",
      title: "Optimizing State-Space Explorations in Highly Constrained Search Trees",
      journal: "High School Journal of Computational Mathematics",
      date: "Fall 2025",
      link: "https://example.com/publication"
    }
  ],

  testScores: [
    { id: "ts1", testName: "SAT", score: "1500", date: "March 2026", details: "790 Math • 710 Evidence-Based Reading & Writing" },
    { id: "ts2", testName: "IELTS", score: "7.5", date: " 2025", details: "9 Listening • 8.5 Reading • 6 Speaking • 7 Writing" }
  ],

  careerGoals: "Aiming to pioneer highly optimized, scalable algorithmic frameworks and scalable systems architectures that bridge the gap between heavy theoretical computer science and highly functional real-world artificial intelligence. Ultimately aspiring to lead forward-thinking software engineering initiatives or academic laboratories, producing mission-critical applications that elevate human potential.",

  navLinks: [
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
    github: "https://github.com/terryyao-edu",
    wechat: "13243242143",
    linkedin: "hub.com/session"
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

 
