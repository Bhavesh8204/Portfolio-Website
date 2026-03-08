import React from "react";

const Frontend: React.FC = () => {
  return (
    <div className="skills_content">
      {/* <h3 className="skills_title">Frontend developer</h3> */}

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">HTML</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">CSS</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">JavaScript</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">TypeScript</h3>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">React.Js</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Next.Js</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Tailwind</h3>
            </div>
          </div>

          <div className="skills_data">
            <i className="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Bootstrap</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
