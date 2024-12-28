import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© 2024 Hubnex SkillUp. All Rights Reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="#terms">Terms & Conditions</a>
          </li>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
