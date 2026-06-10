import { StaticImageData } from "next/image";
import AICoach from "../../assets/ai_coach.png";
import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/work4.png";

export interface Project {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
  link: string;
  subtitle: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface NavItem {
  name: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    image: Work1,
    title: "Women Business Club",
    category: "next.js",
    link: "https://www.womensbusiness.club/",
    subtitle: "Event Management Platform",
    description:
      "Led complete front-end development of a high-traffic responsive event management platform that improved administrative efficiency by 40%.",
    achievements: [
      "Built key modules including event creation, ticket booking, group management, and role-based access control (RBAC).",
      "Integrated PayPal payment gateway for secure transactions and Zustand for global state management.",
      "Reduced state-related frontend bugs by 30% through strict state normalization and selector optimization.",
      "Collaborated with backend developers via Axios-powered RESTful APIs to ensure smooth data synchronization.",
    ],
    techStack: [
      "Next.js",
      "React.js",
      "Zustand",
      "TypeScript",
      "PayPal SDK",
      "Axios",
      "CSS Modules",
    ],
  },
  {
    id: 2,
    image: Work2,
    title: "PROP971",
    category: "next.js",
    link: "https://www.prop971.com/",
    subtitle: "Real Estate Property Platform",
    description:
      "Developed the full front-end of a real estate property platform, focusing on high-fidelity responsive layout conversions and listing discovery.",
    achievements: [
      "Implemented advanced multi-criteria property filtering (by city, district, type, status, and amenities).",
      "Reduced user property search time by 50% through client-side query optimizations and state caching.",
      "Converted 20+ complex Figma layout designs into pixel-perfect, cross-browser responsive interfaces.",
      "Integrated dynamic APIs to display live project updates and live property listings, replacing 80% of static mockups.",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React Hooks",
      "Figma-to-Code",
      "RESTful APIs",
    ],
  },
  {
    id: 3,
    image: Work3,
    title: "SmartBallot",
    category: "next.js",
    link: "#",
    subtitle: "Election Management Platform",
    description:
      "Co-developed an election management platform for universities and schools, yielding a 98% positive usability score from administrators.",
    achievements: [
      "Built the Admin and Vendor portal modules from scratch covering UI, validation, and workflow routing.",
      "Reduced administrative setup and ballot-counting overhead by 35% through streamlined UX patterns.",
      "Implemented Redux Toolkit for predictable state transitions, resolving data synchronization and state errors by 40%.",
      "Optimized production bundle sizes and implemented SSR strategies on Vercel, reducing initial loading speed by 30%.",
    ],
    techStack: [
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Material UI (MUI)",
      "TypeScript",
      "Vercel",
    ],
  },
  {
    id: 4,
    image: Work4,
    title: "JLS Accounting",
    category: "react",
    link: "#",
    subtitle: "Tax Filing & Accounting Platform",
    description:
      "Built the frontend UI for a TaxCalc-style accounting platform designed for limited companies, partnerships, and sole traders.",
    achievements: [
      "Designed an intuitive interactive financial dashboard for seamless tax submission and corporate record logs.",
      "Integrated RESTful APIs via Axios for secure financial calculation runs, reducing manual data entry errors by 60%.",
      "Improved general workflow efficiency by 45% based on feedback logs from user experience tests.",
      "Built responsive grids using Bootstrap to ensure full support on portable office laptops and tablets.",
    ],
    techStack: [
      "React.js",
      "Bootstrap",
      "Axios",
      "RESTful APIs",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: 5,
    image: AICoach,
    title: "AI Business Coach",
    category: "next.js",
    link: "#",
    subtitle: "AI-Powered Business Analysis Platform",
    description:
      "Developed the complete interface for a responsive AI platform that analyzes business ideas and auto-generates strategic reports.",
    achievements: [
      "Built a dynamic multi-step business questionnaire featuring robust custom validation and real-time feedback.",
      "Achieved a 95% form completion rate by engineering modular wizard UI components.",
      "Integrated AI-powered analysis to auto-generate customized business plan drafts and reports, saving users 70% of setup time.",
      "Architected clean, scalable CSS variables and layout structures using Material UI and Tailwind CSS.",
    ],
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "Material UI (MUI)",
      "TypeScript",
      "Axios",
      "AI API Integration",
    ],
  },
];

export const projectsNav: NavItem[] = [
  {
    name: "all",
  },
  {
    name: "react",
  },
  {
    name: "next.js",
  },
];
