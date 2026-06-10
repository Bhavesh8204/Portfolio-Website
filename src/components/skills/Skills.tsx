"use client";

import React from "react";
import "./skills.css";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "UI Libraries & Styling",
    skills: ["Tailwind CSS", "Material UI (MUI)", "Bootstrap"],
  },
  {
    title: "State Management",
    skills: ["Redux Toolkit", "Zustand", "React Context API"],
  },
  {
    title: "API & Integration",
    skills: ["RESTful APIs", "Axios", "PayPal Gateway", "Stripe"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Vercel", "Figma"],
  },
  {
    title: "AI & Developer Tools",
    skills: [
      "Cursor AI",
      "GitHub Copilot",
      "ChatGPT",
      "Claude AI",
      "Antigravity AI",
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>

      <div className="skills_container container grid">
        {skillCategories.map((category, idx) => (
          <div className="skills_content" key={idx}>
            <h3 className="skills_title">{category.title}</h3>

            <div className="skills_box">
              <div className="skills_group">
                {category.skills.map((skill, sIdx) => (
                  <div className="skills_data" key={sIdx}>
                    <i className="bx bx-badge-check"></i>
                    <div>
                      <h3 className="skills_name">{skill}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
