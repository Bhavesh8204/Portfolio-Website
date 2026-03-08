import Image1 from "../../assets/images/testimonial1.png";
import Image2 from "../../assets/images/testimonial2.png";
import Image3 from "../../assets/images/testimonial3.png";
import { StaticImageData } from "next/image";

interface TestimonialData {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
}

export const Data: TestimonialData[] = [
  {
    id: 1,
    image: Image1,
    title: "Jhon Doe",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: 2,
    image: Image2,
    title: "Harry Clinton",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
  {
    id: 3,
    image: Image3,
    title: "Sara Cill",
    description:
      "A really good job, all aspects of the project were followed step by step and with good results.",
  },
];
