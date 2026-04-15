"use client";

import React from "react";
import "./qualification.css";

const Qualification: React.FC = () => {
  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container">
        <div className="qualification_sections">
          <div className="qualification_content qualification_content-active">
            {/* Front End Developer - Creative Hustlers */}
            <div className="qualification_data">
              <div className="margin-left">
                <h3 className="qualification_title">Front End Developer</h3>
                <span className="qualification_subtitle">
                  Creative Hustlers
                </span>
                <div className="qualification_calendar">
                  <i
                    className="uil uil-calendar-alt"
                    style={{ marginRight: "6px !important" }}
                  ></i>
                  03/2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            {/* Frontend Development Trainee - Tops Technologies */}
            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Frontend Development Trainee
                </h3>
                <span className="qualification_subtitle">
                  Tops Technologies
                </span>
                <div className="qualification_calendar">
                  <i
                    className="uil uil-calendar-alt"
                    style={{ marginRight: "6px !important" }}
                  ></i>
                  01/2023 - 03/2024
                </div>
              </div>
            </div>

            {/* Bachelor of Commerce - MSU Baroda */}
            <div className="qualification_data">
              <div className="margin-left">
                <h3 className="qualification_title">Bachelor of Commerce</h3>
                <span className="qualification_subtitle">
                  The Maharaja Sayajirao University of Baroda
                </span>
                <div className="qualification_calendar">
                  <i
                    className="uil uil-calendar-alt"
                    style={{ marginRight: "6px !important" }}
                  ></i>
                  2022
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                {/* No line after the last item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
