import Image from "next/image";
import React from "react";
import { Project } from "./Data";

interface WorkItemProps {
  item: Project;
  onClick: () => void;
}

const WorksItems: React.FC<WorkItemProps> = ({ item, onClick }) => {
  return (
    <div className="work_card" onClick={onClick} key={item.id}>
      <div className="work_img-wrapper">
        <Image src={item.image} alt={item.title} className="work_img" />
      </div>
      <h3 className="work_title">{item.title}</h3>
      <span className="work_button">
        View Details <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </span>
    </div>
  );
};

export default WorksItems;
