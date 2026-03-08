import React from "react";
import { StaticImageData } from "next/image";

interface WorkItemProps {
  item: {
    id: number;
    image: StaticImageData;
    title: string;
  };
}

const WorksItems: React.FC<WorkItemProps> = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image.src} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <a
        href={`Project${item.id}/index.html`}
        target="_blank"
        rel="noreferrer"
        className="work_button"
      >
        Demo <i className="bx bx-right-arrow-alt work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
