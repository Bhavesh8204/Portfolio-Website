import { StaticImageData } from "next/image";
import Work1 from "../../assets/work1.png";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/work4.png";

interface Project {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
}

interface NavItem {
  name: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    image: Work1,
    title: "Women Business Club",
    category: "next.js",
  },
  {
    id: 2,
    image: Work2,
    title: "PROP971",
    category: "next.js",
  },
  {
    id: 3,
    image: Work3,
    title: "SmartBallot",
    category: "next.js",
  },

  {
    id: 4,
    image: Work4,
    title: "AI Business Coach",
    category: "next.js",
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
