"use client";

import React from "react";
import { projectsData } from "./Data";
import WorksItems from "./WorksItems";

const Works: React.FC = () => {
  return (
    <div>
      {/* <div className="work_filter">
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
      </div> */}

      <div className="work_container grid">
        {projectsData.map((proj) => {
          return <WorksItems item={proj} key={proj.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
