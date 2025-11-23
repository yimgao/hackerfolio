import type { Project, Experience } from "./types";

export interface PortfolioLink {
  name: string;
  url: string;
  description?: string;
  technologies?: string[];
}


export const portfolioData: {
  hero: { title: string; subtitle: string; typing: string[] };
  aboutMe: string;
  experience: Experience[];
  projects: Project[];
  portfolio: PortfolioLink[];
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    ai: string[];
    softSkills: string[];
  };
  social: { linkedin?: string; github?: string; email?: string; website?: string };
} = {
  hero: {
    title: "Hi, I'm Yiming",
    subtitle: "Software Engineer & AI Developer",
    typing: [
      "Backend development & AI integration",
      "Building scalable, extensible applications",
      "Python, Java, and SQL expertise",
      "Agile workflows & optimization",
      "Full-stack development",
    ],
  },
  aboutMe:
    "CS major with hands-on experience in backend development, AI integration, and data analytics. Skilled in Python, Java, and SQL, passionate about building scalable, modular applications.\n\nWhen I'm not coding, you'll find me hiking trails, experimenting in the kitchen, traveling to new places, or exploring the latest tech innovations. I believe great code and great adventures both require curiosity and persistence.",
  experience: [
    {
      title: "Data Analyst Intern",
      company: "LinkedIn Corporation - LMS (LinkedIn Marketing Solution)",
      date: "Feb 2025 - Aug 2025",
      location: "New York",
      description:
        "Worked on the NEON team within LinkedIn Marketing Solution. Coordinated NEON Council feedback from 1K+ global sales reps, developed features and fixed bugs based on requirements. Analyzed and implemented tool improvements boosting 15% revenue increase. Engineered feature requests and debugged reports using Python/SQL, reducing errors by 10%. Led weekly Agile sync meetings.",
      technologies: ["Python", "SQL", "Data Analytics", "Agile"],
    },
    {
      title: "Nanoscience Research Assistant",
      company: "CUNY Advanced Science Research Center",
      date: "Jun 2024 - Sep 2024",
      location: "New York",
      description:
        "Developed automated pipeline for peptide molecular dynamics simulations in Python with GROMACS. Improved efficiency by 75% while maintaining 95% accuracy. Built data storage and visualization tools using HDF5, NumPy, and Matplotlib.",
      technologies: ["Python", "GROMACS", "HDF5", "NumPy", "Matplotlib"],
    },
    {
      title: "Backend Developer Intern",
      company: "Place IT Service LLC",
      date: "Jul 2024 - Aug 2024",
      location: "New York",
      description:
        "Integrated multiple AI models with educational platform using OOP Python, enabling auto-grading that saved teachers 60-70% time. Improved reliability by ~80% through modular workflows and model redundancy.",
      technologies: ["Python", "OOP", "AI APIs"],
    },
    {
      title: "CS Tutor",
      company: "Research Foundation of CUNY",
      date: "Feb 2024 - Dec 2025",
      location: "New York",
      description:
        "Tutored 25+ students in Python, Java, OOP, and Data Structures & Algorithms. Achieved 30% average grade improvement through hands-on exercises and personalized debugging sessions.",
      technologies: ["Python", "Java", "OOP", "Data Structures"],
    },
    {
      title: "Bachelor of Computer Science",
      company: "City Tech - Computer System Technology",
      date: "In Progress",
      location: "New York",
      description:
        "Relevant coursework: Data Structures, Algorithms, Object-Oriented Programming, Project Management. Dean's List 2022-2025.",
      technologies: ["Data Structures", "Algorithms", "OOP", "Project Management"],
    },
  ],
  projects: [
    {
      id: "us-civics-study-hub",
      name: "U.S. Civics Study Hub",
      description:
        "Multi-lingual naturalization practice app with Quiz and Flashcards, i18n routes, Zustand state, local persistence, and SEO (sitemap/robots).",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "next-intl",
        "Zustand",
        "i18n",
        "SEO",
      ],
      url: "https://us-citizenship-qa.vercel.app/en",
    },
    {
      id: "connectsphere",
      name: "ConnectSphere (Campus Connect)",
      description:
        "A full-stack study partner matching app for university students built on a serverless stack. Features a complete authentication system with NextAuth.js v5, including .edu email registration, password reset, and a token-based email verification flow with Resend. Uses Prisma with Neon (PostgreSQL) for the database and Upstash (Redis) for session management.",
      tags: [
        "Next.js (App Router)",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "NextAuth.js",
        "Server Actions",
        "Prisma",
        "PostgreSQL (Neon)",
        "Redis (Upstash)",
        "Resend",
        "Zod",
      ],
      url: "https://connectsphere-eight.vercel.app/",
    },
    {
      id: "portfolio-ai-chatbot",
      name: "Personal Portfolio with AI Chatbot",
      description:
        "Full-stack portfolio website with AI chatbot supporting multiple models (Groq, Gemini, GPT) with intelligent routing. Built with Next.js, React, TypeScript, and OOP backend service manager.",
      tags: ["Next.js", "React", "TypeScript", "AI", "OOP"],
      url: "https://www.askyiming.engineer/",
    },
    {
      id: "dadi360-monitor",
      name: "Dadi360 Rental & Job Monitor",
      description:
        "Python web scraping app that monitors multiple sites for rentals, jobs, and listings, sending email notifications. Modular design with state persistence to prevent duplicates.",
      tags: ["Python", "Web Scraping", "Automation"],
      url: "https://github.com/yimgao/Dadi360-Rental-Job-Monitor",
    },
    {
      id: "echo-bottle",
      name: "EchoBottle",
      description:
        "Anonymous message-in-a-bottle app featuring real-time Firestore sync, Firebase Authentication (Guest/Google/Email), atomic server-side limit enforcement, and a responsive glassmorphism UI.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Firestore",
        "Authentication",
      ],
      url: "https://echo-bottle.vercel.app",
    },
  ],
  portfolio: [
    {
      name: "U.S. Civics Study Hub",
      url: "https://us-citizenship-qa.vercel.app/en",
      description:
        "Practice for the U.S. civics test with quizzes and flashcards. English, Spanish, Chinese.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "next-intl",
        "Zustand",
      ],
    },
  ],
  skills: {
    languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "C#", "Bash"],
    frameworks: ["Spring Boot", "Flask", "Next.js", "React", "NumPy", "Pandas", "Matplotlib", "HDF5"],
    tools: ["Git", "GitHub", "Agile Methodology", "Virtual Environments", "API Integration", "Parallel/GPU Computing"],
    ai: ["OpenAI API", "LangChain", "AutoGen"],
    softSkills: [
      "Problem-solving & Analytical Thinking",
      "Teamwork & Cross-functional Collaboration",
      "Adaptability & Quick Learning",
      "Leadership & Meeting Facilitation",
      "Technical Communication & Documentation",
    ],
  },
  social: {
    linkedin: "https://www.linkedin.com/in/yimgao/",
    github: "https://github.com/yimgao",
    email: "mailto:yimgao00@gmail.com",
    website: "https://www.askyiming.engineer/",
  },
};


