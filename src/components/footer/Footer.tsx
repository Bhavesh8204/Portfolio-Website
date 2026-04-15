import React from "react";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <h1 className="footer_title">Bhavesh Jalandhara</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer_social">
          <a
            href="https://www.linkedin.com/in/bhavesh8204"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/Bhavesh8204"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.upwork.com/freelancers/bhavesh8204"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-upwork"></i>
          </a>

          <a
            href="https://www.instagram.com/bhavesh_ahir_8204"
            className="footer_social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <span className="footer_copy">
          Copyright © 2026 by Bhavesh Jalandhara | All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
