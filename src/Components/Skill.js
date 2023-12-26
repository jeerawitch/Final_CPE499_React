import React from "react";
import "./Skill.css";
import HTML from "../assets/HTML.png";
import CSS from "../assets/CSS.png";
import JavaScript from "../assets/JavaScript.png";

const Skill = () => {
  return (
    <div className="skill">
      <h1>Skill</h1>
      <hr className="skill-line" />
      <div className="skill-container">
        <div className="skill-html">
          <img className="html-img" src={HTML} alt="HTML.png" />
          <div className="html-text">
            <h2>HTML</h2>
            <p>HyperText Markup Language </p>
          </div>
        </div>

        <div className="skill-css">
          <img className="css-img" src={CSS} alt="CSS.png" />
          <div className="css-text">
            <h2>CSS</h2>
            <p>Cascading Style Sheets</p>
          </div>
        </div>

        <div className="skill-javascript">
          <img
            className="javascript-img"
            src={JavaScript}
            alt="JavaScript.png"
          />
          <div className="javascript-text">
            <h2>JS</h2>
            <p>JavaScript</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skill;
