import Work1 from "../../assets/images/work1.jpg";
import Work2 from "../../assets/images/work2.jpg";
import Work3 from "../../assets/images/work3.jpg";
import Work4 from "../../assets/images/work4.jpg";
import Work5 from "../../assets/images/work5.jpg";
import { StaticImageData } from "next/image";

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
    title: "Logis - Delivery Partner",
    category: "web",
  },
  {
    id: 2,
    image: Work2,
    title: "Usability Hub",
    category: "web",
  },
  {
    id: 3,
    image: Work3,
    title: "Brand design",
    category: "react",
  },
  {
    id: 4,
    image: Work4,
    title: "App movil",
    category: "react",
  },
  {
    id: 5,
    image: Work5,
    title: "Web design",
    category: "react",
  },
  {
    id: 6,
    image: Work5,
    title: "Web design",
    category: "react",
  },
];

export const projectsNav: NavItem[] = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "react",
  },
];
