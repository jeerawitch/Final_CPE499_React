import React from "react";
import "./About.css";
import Babel from "../assets/Babel.png";
import rReact from "../assets/React.png";
import NPM from "../assets/NPM.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main">
        <div className="babel">
          <div className="babel-container">
            <h2 className="babel-title">Babel</h2>
            <img className="babel-img" src={Babel} alt="Babel.png" />
            <p className="babel-text">
              Babel ถูกใช้เพื่อแปลงรหัส JSX ไปเป็นรหัส JavaScript
              มาตรฐานที่เบราว์เซอร์สามารถทำความเข้าใจได้
            </p>
          </div>
        </div>
        <div className="create">
          <div className="create-container">
            <h2 className="create-title">Create React</h2>
            <img className="create-img" src={rReact} alt="react.png" />
            <p className="create-text">npx create-react-app myapp</p>
          </div>
        </div>
        <div className="npm">
          <div className="npm-container">
            <h2 className="npm-title">Open React Webpage</h2>
            <img className="npm-img" src={NPM} alt="NPM.png" />
            <p className="npm-text">npm start</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
