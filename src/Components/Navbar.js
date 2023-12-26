import "./Navbar.css";
import logo from "../assets/hacker.png";
import { FaGithubSquare } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Content from "./Content";
import About from "./About";
import User from "./User";

const Navbar = () => {
  return (
    <Router>
      <div className="nav-container">
        <div className="nav-center">
          <img className="logo-img" src={logo} alt="logo.png" />

          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/content">Content</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Link to="/user">
            <button className="btn-info">User info</button>
          </Link>

          <Link
            className="link_github"
            to="https://github.com/jeerawitch/Final_CPE499_React"
          >
            <FaGithubSquare className="github" />
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/content" element={<Content />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
