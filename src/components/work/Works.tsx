"use client";

import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorksItems from "./WorksItems";
import { StaticImageData } from "next/image";

interface Project {
  id: number;
  image: StaticImageData;
  title: string;
  category: string;
}

const Works: React.FC = () => {
  const [item, setItem] = useState<{ name: string }>({ name: "all" });
  const [projects, setProjects] = useState<Project[]>([]);
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e: React.MouseEvent<HTMLSpanElement>, index: number) => {
    const target = e.target as HTMLSpanElement;
    setItem({ name: target.textContent?.toLowerCase() || "all" });
    setActive(index);
  };

  return (
    <div>
      <div className="work_filter">
        {projectsNav.map((items, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work_item`}
              key={index}
            >
              {items.name}
            </span>
          );
        })}
      </div>

      <div className="work_container container grid">
        {projects.map((proj) => {
          return <WorksItems item={proj} key={proj.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
