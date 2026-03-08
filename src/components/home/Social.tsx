import React from "react";

const Social: React.FC = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com/bhavesh_ahir_8204"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/bhavesh8204"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/Bhavesh8204"
        className="home_social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
