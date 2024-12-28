import React from "react";
import "./Hero.css";
import hero_img from "../assets/girl.png";
import com from "../assets/com.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            The <span className="highlight">Ultimate Launchpad</span> For Your
            Career!
          </h1>
          <p>
            Where your future begins. Unlock guaranteed career success with the
            best guidance.
          </p>
          <div className="actions">
            <button className="enroll-button">Enroll Now</button>
            <button className="counseling-button">
              Get Free Career Counselling
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={hero_img} alt="Hero Section" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
