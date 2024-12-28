import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="logo">SkillUp </div>

      <nav>
        <ul className="nav-links">
          <li>
            <a href="#features">Home</a>
          </li>
          <li>
            <a href="#plans">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Features</a>
          </li>
          <li>
            <a href="#contact">About us</a>
          </li>
        </ul>
      </nav>
      <a href="#enroll" className="btn btn-enroll">
        Enroll Now
      </a>
    </div>
  );
};

export default Header;
