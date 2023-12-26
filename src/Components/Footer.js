import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <h5>&copy;{new Date().getFullYear()}</h5>
      <h5>Jeeno Jeerawitch</h5>
    </footer>
  );
};

export default Footer;
