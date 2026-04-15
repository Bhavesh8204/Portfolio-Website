"use client";

import React, { useState } from "react";
import "./services.css";

const Services: React.FC = () => {
  const [toggle, setToggle] = useState<number>(0);

  const toggleTab = (index: number) => {
    setToggle(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i offer</span>

      <div className="services_container grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
              Web <br /> Designing
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => {
              toggleTab(1);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggle === 1 ? "services_modal active-modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => {
                  toggleTab(0);
                }}
                className="uil uil-times services_modal-close"
              ></i>

              <h3 className="services_modal-title">Web Designing</h3>
              <p className="services_modal-description">
                A web designer provides professional services to create visually
                appealing and user-friendly websites. They specialize in
                designing layouts, selecting color schemes, and incorporating
                graphics that align with the client's brand. Web designers focus
                on optimizing the user experience and ensuring the website is
                responsive across devices. They may also possess coding skills
                to implement their designs using HTML, CSS, and JavaScript.
              </p>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
              Frontend <br /> Development
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => {
              toggleTab(2);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggle === 2 ? "services_modal active-modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => {
                  toggleTab(0);
                }}
                className="uil uil-times services_modal-close"
              ></i>

              <h3 className="services_modal-title">Frontend Development</h3>
              <p className="services_modal-description">
                A frontend developer provides services focused on the
                client-side development of websites and web applications. They
                specialize in coding and implementing the visual and interactive
                elements of a website. Frontend developers work with HTML, CSS,
                and JavaScript to create responsive and user-friendly
                interfaces. They collaborate with web designers to bring their
                designs to life and ensure a seamless user experience..
              </p>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
              Backend <br /> Development
            </h3>
          </div>

          <span
            className="services_button"
            onClick={() => {
              toggleTab(3);
            }}
          >
            View More
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>

          <div
            className={
              toggle === 3 ? "services_modal active-modal" : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => {
                  toggleTab(0);
                }}
                className="uil uil-times services_modal-close"
              ></i>

              <h3 className="services_modal-title">Backend Development</h3>
              <p className="services_modal-description">
                A backend developer provides services focused on server-side
                development and functionality of websites and web applications.
                They specialize in programming languages such as Python, Java,
                or PHP to handle data storage, processing, and server-side
                operations. Backend developers work with databases, APIs, and
                server frameworks to ensure efficient data handling and
                communication between the server and the frontend. They
                collaborate with frontend developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
