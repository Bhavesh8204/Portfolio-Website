import Image, { StaticImageData } from "next/image";
import React from "react";

interface WorkItemProps {
  item: {
    id: number;
    image: StaticImageData;
    title: string;
    category: string;
    link: string;
  };
}

const WorksItems: React.FC<WorkItemProps> = ({ item }) => {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="work_card"
      key={item.id}
    >
      <Image src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
    </a>
  );
};

export default WorksItems;
