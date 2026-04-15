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
  link: string;
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
    link: "https://www.womensbusiness.club/",
  },
  {
    id: 2,
    image: Work2,
    title: "PROP971",
    category: "next.js",
    link: "https://www.prop971.com/",
  },
  {
    id: 3,
    image: Work3,
    title: "SmartBallot",
    category: "next.js",
    link: "https://app-admin.smartballotapp.com",
  },

  {
    id: 4,
    image: Work4,
    title: "AEM Billing",
    category: "next.js",
    link: "https://aemdb.co.uk",
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
