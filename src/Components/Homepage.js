import React from "react";
import "./Homepage.css";
import react1 from "../assets/react-1.jpg";
import react2 from "../assets/react-2.jpg";
import Skill from "./Skill";
import Modal from "./Modal";

const Homepage = () => {
  return (
    <>
      <div className="homepage-container">
        <div className="homepage-main">
          <section className="mainpage section-center">
            <article className="intro">
              <h1>
                Jeerawitch Treesukoun <br /> (Jeeno)
              </h1>
              <p className="information">
                นาย จีระวิชทย์ ตรีสุคนธ์ รหัสนักศึกษา 6301993 <br />
                คณะ วิศวกกรมศาตร์ สาขา วิศกรรมคอมพิวเตอร์ <br />
              </p>
              <Modal />
            </article>

            <article className="img-container">
              <img src={react1} alt="picture.jpeg" className="main-img" />
              <img src={react2} alt="picture2.jpeg" className="accent-img" />
            </article>
          </section>
          <Skill />
        </div>
      </div>
    </>
  );
};

export default Homepage;
