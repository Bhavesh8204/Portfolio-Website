"use client";

import React, { useState } from "react";
import "./qualification.css";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  date: string;
  achievements: string[];
}

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  date: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Front-End Developer",
    company: "Creative Hustlers",
    location: "Ahmedabad, India",
    date: "Mar 2024 – Present",
    achievements: [
      "Engineered and delivered 5+ production web applications using React.js, Next.js, and TypeScript, meeting all project milestones on time.",
      "Reduced page load times by ~35% through code splitting, lazy loading, and Next.js SSR/SSG optimizations.",
      "Built a reusable component library of 30+ UI components, cutting feature development time by 25% across projects.",
      "Converted 10+ Figma mockups into pixel-perfect, cross-browser-compatible interfaces with 100% design fidelity.",
      "Improved application scalability by architecting modular, maintainable front-end codebases following best practices.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "TOPS Infosolutions Pvt Ltd",
    location: "Ahmedabad, India",
    date: "Jan 2023 – Mar 2024",
    achievements: [
      "Built 3+ front-end web applications with React.js, gaining hands-on production experience during an intensive internship.",
      "Integrated RESTful APIs enabling seamless frontend-backend data communication, reducing fetch errors by 20%.",
      "Built fully responsive, mobile-first UI components compatible across all major browsers and screen sizes.",
      "Deployed projects on Vercel and resolved 50+ bugs, improving overall performance and usability by 30%.",
    ],
  },
];

const education: EducationItem[] = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    institution: "The Maharaja Sayajirao University of Baroda",
    location: "Vadodara, India",
    date: "2022",
    description: "",
  },
];

const Qualification: React.FC = () => {
  const [toggleState, setToggleState] = useState<number>(2); // Default to Experience tab

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          {/* EDUCATION CONTENT */}
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_timeline">
              {education.map((item, index) => (
                <div className="qualification_item" key={index}>
                  <div className="qualification_marker">
                    <span className="qualification_dot"></span>
                    {index !== education.length - 1 && (
                      <span className="qualification_line"></span>
                    )}
                  </div>
                  <div className="qualification_card">
                    <span className="qualification_date">{item.date}</span>
                    <h3 className="qualification_card-title">{item.degree}</h3>
                    <h4 className="qualification_card-company">
                      {item.institution}{" "}
                      <span className="qualification_location">
                        • {item.location}
                      </span>
                    </h4>
                    <p className="qualification_card-desc">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE CONTENT */}
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_timeline">
              {experiences.map((item, index) => (
                <div className="qualification_item" key={index}>
                  <div className="qualification_marker">
                    <span className="qualification_dot"></span>
                    {index !== experiences.length - 1 && (
                      <span className="qualification_line"></span>
                    )}
                  </div>
                  <div className="qualification_card">
                    <span className="qualification_date">{item.date}</span>
                    <h3 className="qualification_card-title">{item.role}</h3>
                    <h4 className="qualification_card-company">
                      {item.company}{" "}
                      <span className="qualification_location">
                        • {item.location}
                      </span>
                    </h4>
                    <ul className="qualification_card-bullets">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
