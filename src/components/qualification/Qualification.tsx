"use client";

import React, { useState } from "react";
import "./qualification.css";

const Qualification: React.FC = () => {
  const [toggle, setToggle] = useState<number>(1);

  const toggleTab = (index: number) => {
    setToggle(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggle === 1
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
            Education
          </div>

          <div
            className={
              toggle === 2
                ? "qualification_button qualification_active button-flex"
                : "qualification_button button-flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggle === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data ">
              <div className="margin-left">
                <h3 className="qualification_title">Frontend Development</h3>
                <span className="qualification_subtitle">
                  Tops Technologies
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>March-2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Bachelor of Commerce</h3>
                <span className="qualification_subtitle">
                  The Maharaja Sayajirao University of Baroda
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2019 - 2022
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div className="margin-left">
                <h3 className="qualification_title">
                  12 <sup>th</sup>
                </h3>
                <span className="qualification_subtitle">
                  Gujarat Secondary and Higher Secondary Education Board
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>2018 - 2019
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div className="margin-left">
                <h3 className="qualification_title">
                  Frontend Development Trainee
                </h3>
                <span className="qualification_subtitle">
                  Tops Technologies
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>March-2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">React.Js Trainee</h3>
                <span className="qualification_subtitle">
                  Tops Technologies
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>March-2023 - Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div className="margin-left">
                <h3 className="qualification_title">Web Designer Trainee</h3>
                <span className="qualification_subtitle">
                  Tops Technologies
                </span>
                <div className="qualification_calendar">
                  <i className="uil uil-calendar-alt"></i>March-2023 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
