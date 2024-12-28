import React from "react";
import "./Experience.css";
import rate from "../assets/73.png";
import mentor from "../assets/Mentor.png";
import learn from "../assets/lerners.png";
import "./Experience.css";
import cer from "../assets/certificate.png";

const Experience = () => {
  return (
    <section className="steps">
      <h2>
        Experience The <span>Statical</span> Power of Skillup
      </h2>
      <p>
        Our workshops are designed to deliver tangible results, helping you
        boost your carrer prospects and achive your goals.Here's what our
        graduates are saying:
      </p>
      <div className="steps-grid">
        <div className="step-card">
          <h3></h3>
          <img src={learn} alt="" />
        </div>
        <div className="step-card">
          <h3></h3>
          <p>
            <img src={mentor} alt="" />
          </p>
        </div>
        <div className="step-card">
          <h3></h3>
          <p>
            <img src={rate} alt="" />
          </p>
        </div>
      </div>

      <div className="pra">
        <h2>
          Get <span>Certified</span> With Every Completion
        </h2>
        <p>
          Earn industry-recognized certificates with each workshop you complete,
          showcasing your expertise and commitment to professional
          excellence.Earn industry-recognized certificates with each workshop
          you complete, showcasing your expertise and commitment to
          professional excellence.
        </p>
        <div className="actions">
          <button className="enroll-button">Enroll Now</button>
          <button className="counseling-button">
            Get Free Career Counselling
          </button>
        </div>
        <div className="hero-image">
          <img src={cer} alt="Hero Section" className="hero-img" />
        </div>
      </div>
    </section>
  );
};
export default Experience;
