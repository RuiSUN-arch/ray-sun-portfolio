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
      title: "National Merit Finalist",
      year: "2025",
      description: "Scored in the top 0.5% of test-takers nationwide on the PSAT/NMSQT, demonstrating exceptional quantitative and critical reading readiness."
    },
    {
      id: "d2",
      title: "USA Computing Olympiad (USACO) Platinum Division",
      year: "2025",
      description: "Achieved elite status in competitive informatics through advanced mastery of dynamic programming, graph theory, and highly optimized data structures."
    },
    {
      id: "d3",
      title: "AIME Qualifier",
      year: "2024 - 2025",
      description: "Invited to the American Invitational Mathematics Examination based on outstanding scores in the top 2.5% of the AMC 12."
    }
  ],

  recognitions: [
    { id: "r1", title: "Principal's List (All Semesters)", date: "2023 - 2026" },
    { id: "r2", title: "AP Scholar with Distinction", date: "July 2025" },
    { id: "r3", title: "National Honor Society High Honor Recognition", date: "Spring 2025" }
  ],

  certifications: [
    {
      id: "cert1",
      name: "Introductory Biology",
      issuer: "MIT open courseware",
      year: "2026",
      link:"https://ocw.mit.edu/courses/7-016-introductory-biology-fall-2018/"
    },
    {
      id: "cert2",
      name: "Ecology",
      issuer: " Coursera",
      year: "2025",
      link: "https://www.coursera.org/"
    }
  ],

  researchProjects: [
    {
      id: "res1",
      title: "Why Plants Evolved Carbon Concentrating Mechanisms Instead of Perfecting Rubisco",
      role: "Independent researcher",
      description: "My research project investigates why Rubisco, despite being essential for photosynthesis, remains inefficient. I explore how kinetic trade-offs and historical constraints may have prevented natural selection from directly improving Rubisco, leading instead to indirect solutions such as C4 photosynthesis and other carbon-concentrating mechanisms."
    },
   
  ],

  competitions: [
    {
      id: "comp1",
      name: "USA Biology Olympiad (USABO)",
      year: "2026",
      placement: "National Bronze Metal",
      description: "Mastered college level biology knowledge, develop exam skills under pressure",
      
    },
    {
      id: "comp2",
      name: "Canadian Chemistry Olympaid (CCO)",
      year: "2025",
      placement: "National Bronze Metal",
      description: "Master college level chemistry knowledge"
    },
    
  ],

  


  awards: [
    {
      id: "aw1",
      title: "Mapleleaf scholarship",
      category: "Scholarship",
      date: "Spring 2026",
      description: "selected as the half scholarship due to high English proficiency and proficient science skill.",
      amount: "half scholarship"
    },
   
  ],



  languages: [
    { id: "lang1", name: "Mandarin", proficiency: "Native" },
    { id: "lang2", name: "English", proficiency: " Bilingual" },
  
  ],

  skills: [
    { id: "sk1", name: "C++ & Advanced Algorithms", category: "Core Technical" },
    { id: "sk2", name: "Python / PyTorch", category: "Core Technical" },
    { id: "sk3", name: "React & TypeScript", category: "Core Technical" },
    { id: "sk4", name: "Go & Systems Programming", category: "Core Technical" },
    { id: "sk5", name: "Git, Docker & AWS", category: "Infrastructure" },
    { id: "sk6", name: "LaTeX & Mathematical Typesetting", category: "Academic" }
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
    
  ],

  careerGoals: "I hope to use scientific research to understand biological systems and develop solutions to real-world environmental and health-related problems.",

 

  contact: {
    email: "1593598@qq.com",
  
    qq: "1593598",
   
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
