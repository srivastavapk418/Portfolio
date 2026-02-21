export const personal = {
  name: "Prateek Kumar Srivastava",
  initials: "PKS",
  firstName: "Prateek",
  title: "Software Engineer",
  subtitle: "MERN Stack Developer",
  tagline:
    "I build fast, clean, and scalable web applications — from idea to production.",
  about:
    "I'm a final-year Computer Science student who took the less obvious path: I started in Mechanical Engineering before realising code was my thing. That pivot taught me how to think systematically — how to engineer solutions, not just write them. Today I build full-stack web apps with React, Node.js, and the whole MERN stack. I care about how things work under the hood, which is why I spend time on DSA, system design, and cloud architecture.",
  about2:
    "Outside of building, I'm studying distributed systems, contributing to open source, and staying sharp with algorithm problems. I believe the best engineers are curious about everything.",
  email: "srivastavapk418@gmail.com",
  phone: "+91 9260953699",
  linkedin: "https://linkedin.com/in/pks2002",
  github: "https://github.com/srivastavapk418",
  githubUsername: "srivastavapk418",
  location: "Lucknow, India",
  available: true,
  degree: "B.Tech CSE (Lateral Entry)",
  university: "AKTU, Lucknow",
  cgpa: "8.19",
  graduation: "May 2026",
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    items: [
      "React.js",
      "TypeScript",
      "JavaScript ES6+",
      "Tailwind CSS",
      "Vite",
      "HTML5/CSS3",
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "Middleware",
      "MVC Architecture",
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    items: ["MongoDB", "Mongoose", "MySQL", "Supabase", "Redis (learning)"],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    items: [
      "Oracle Cloud OCI",
      "Microsoft Azure",
      "Git/GitHub",
      "Vercel",
      "Netlify",
      "Postman",
    ],
  },
  {
    category: "Core CS",
    icon: "🧠",
    items: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "DBMS",
      "OS",
      "Computer Networks",
      "SOLID Principles",
    ],
  },
  {
    category: "Languages",
    icon: "💻",
    items: ["Java", "JavaScript", "TypeScript", "Python", "C++"],
  },
];

export const experience = [
  {
    role: "Project Intern",
    company: "IIT Ropar",
    type: "NPTEL Winter Internship",
    location: "Virtual",
    period: "Dec 2025 – Jan 2026",
    color: "#4f46e5",
    description:
      "Immersive MERN stack internship under IIT Ropar. Studied real production systems and built 40+ case studies from scratch.",
    highlights: [
      "Completed 42+ MERN stack case studies: React, Express, MongoDB",
      "Architected scalable REST APIs with controllers, routes & middleware",
      "Reverse-engineered 4 production systems — an AI chatbot, an EdTech platform, an analytics dashboard, and an e-commerce backend",
    ],
  },
  {
    role: "Junior Engineer Trainee",
    company: "Larsen & Toubro",
    type: "Engineering",
    location: "Chennai, India",
    period: "Sep 2022 – Aug 2023",
    color: "#0891b2",
    description:
      "Worked on naval vessel engineering projects at one of India's largest engineering conglomerates. Brought engineering precision to project management.",
    highlights: [
      "Coordinated project schedules for naval vessels using Agile planning",
      "Drafted Statements of Technical Requirements (SOTRs) with 100% compliance",
      "Cross-functional collaboration across engineering, procurement & client teams",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "The Wild Oasis",
    subtitle: "Hotel Management System",
    description:
      "A comprehensive full-stack platform for boutique hotel operations — from guest check-ins to booking analytics. Reduced manual workflow by 40% and achieved sub-second API response times.",
    tech: ["React.js", "Node.js", "Supabase", "React Query", "Tailwind CSS"],
    github: "https://github.com/srivastavapk418/Hotel-Management-System",
    live: null,
    highlights: [
      "40% workflow efficiency gain",
      "<1s API latency",
      "Role-based access control",
    ],
    color: "#059669",
    featured: true,
  },
  {
    id: 2,
    title: "MuscleMeter",
    subtitle: "Gym Management Web App",
    description:
      "A full MERN application with a dual-role system for gym owners and members. Handles memberships, payments, and scheduling with a clean dashboard for each role.",
    tech: ["MongoDB", "Express", "React.js", "Node.js", "JWT"],
    github: "https://github.com/srivastavapk418/MuscleMeter",
    live: null,
    highlights: [
      "Dual-role auth system",
      "JWT-secured routes",
      "100% API tested",
    ],
    color: "#dc2626",
    featured: true,
  },
  {
    id: 3,
    title: "Zentry",
    subtitle: "Animated Gaming Website",
    description:
      "An interactive gaming landing page pushing the boundaries of web animation — scroll-triggered effects, sound design integration, and video-driven storytelling, all handled via React state.",
    tech: ["React", "Vite", "Tailwind CSS", "GSAP"],
    github: "https://github.com/srivastavapk418/Animation-Gaming-Website",
    live: null,
    highlights: [
      "Complex scroll animations",
      "Sound effect integration",
      "Media-driven state logic",
    ],
    color: "#7c3aed",
    featured: false,
  },
];

export const achievements = [
  {
    icon: "🏆",
    title: "NPTEL Java Topper",
    label: "Top 1% Nationwide",
    detail:
      "Elite + Gold + Topper — highest distinction in Programming in Java among all participants across India.",
    color: "#f59e0b",
  },
  {
    icon: "☁️",
    title: "Oracle Cloud Certified",
    label: "Developer Professional",
    detail:
      "Specialist-level validation of cloud-native development expertise on Oracle Cloud Infrastructure.",
    color: "#ef4444",
  },
  {
    icon: "🔷",
    title: "Azure AZ-900",
    label: "Microsoft Certified",
    detail:
      "Foundational certification validating cloud architecture knowledge in the Azure ecosystem.",
    color: "#3b82f6",
  },
  {
    icon: "⚡",
    title: "250+ DSA Problems",
    label: "LeetCode",
    detail:
      "Consistent problem solver focusing on complex algorithmic patterns — trees, graphs, dynamic programming, and more.",
    color: "#10b981",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];
