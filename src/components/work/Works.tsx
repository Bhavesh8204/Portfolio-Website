"use client";

import React, { useState } from "react";
import { Project, projectsData } from "./Data";
import WorksItems from "./WorksItems";

const Works: React.FC = () => {
  // const [item, setItem] = useState<{ name: string }>({ name: "all" });
  // const [projects, setProjects] = useState<Project[]>([]);
  // const [active, setActive] = useState<number>(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // useEffect(() => {
  //   if (item.name === "all") {
  //     setProjects(projectsData);
  //   } else {
  //     const newProjects = projectsData.filter((project) => {
  //       return project.category.toLowerCase() === item.name.toLowerCase();
  //     });
  //     setProjects(newProjects);
  //   }
  // }, [item]);

  // const handleClick = (e: React.MouseEvent, index: number) => {
  //   const target = e.target as HTMLElement;
  //   setItem({ name: target.textContent?.toLowerCase() || "all" });
  //   setActive(index);
  // };

  return (
    <div>
      {/* <div className="work_filter">
        {projectsNav.map((navItem, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              className={`${active === index ? "active-work" : ""} work_item`}
              key={index}
            >
              {navItem.name}
            </span>
          );
        })}
      </div> */}

      <div className="work_container grid">
        {projectsData.map((proj) => {
          return (
            <WorksItems
              item={proj}
              key={proj.id}
              onClick={() => setActiveProject(proj)}
            />
          );
        })}
      </div>

      {activeProject && (
        <div className="work_modal active-modal">
          <div className="work_modal-content">
            <i
              onClick={() => setActiveProject(null)}
              className="uil uil-times work_modal-close"
            ></i>

            <h3 className="work_modal-title">{activeProject.title}</h3>
            <p className="work_modal-subtitle">{activeProject.subtitle}</p>
            <p className="work_modal-description">
              {activeProject.description}
            </p>

            <ul className="work_modal-list grid">
              {activeProject.achievements.map((ach, idx) => (
                <li className="work_modal-item" key={idx}>
                  <i className="bx bx-check-circle work_modal-icon"></i>
                  <p className="work_modal-text">{ach}</p>
                </li>
              ))}
            </ul>

            <div className="work_modal-tech">
              {activeProject.techStack.map((tech, idx) => (
                <span className="work_modal-badge" key={idx}>
                  {tech}
                </span>
              ))}
            </div>

            {activeProject.link !== "#" && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className="button button-flex work_modal-button"
              >
                Visit Site
                <i className="uil uil-arrow-right button__icon"></i>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Works;
