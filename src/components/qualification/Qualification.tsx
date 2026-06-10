"use client";

import React, { useState } from "react";
import "./qualification.css";

const Qualification: React.FC = () => {
  const [toggleState, setToggleState] = useState<number>(2); // Default to Experience tab

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
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
            {/* Bachelor of Commerce - MSU Baroda */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Bachelor of Commerce (B.Com)
                </h3>
                <span className="qualification_subtitle">
                  The Maharaja Sayajirao University of Baroda, Vadodara
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> 2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
              </div>
              <div></div>
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
            {/* Front End Developer - Creative Hustlers */}
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Front-End Developer</h3>
                <span className="qualification_subtitle">
                  Creative Hustlers - Ahmedabad
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> Mar 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div></div>
            </div>

            {/* Front-End Developer Intern - TOPS Infosolutions */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Front-End Developer Intern
                </h3>
                <span className="qualification_subtitle">
                  TOPS Infosolutions Pvt Ltd - Ahmedabad
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2023 - Mar 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
