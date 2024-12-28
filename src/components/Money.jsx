import React from "react";
import "./Money.css";
import img_right from "../assets/world.png";
import app from "../assets/App.png";
import mock from "../assets/mock.png";
import ref from "../assets/ref.png";
import hand from "../assets/hand.png";

const Money = () => {
  return (
    <div className="landing-page">
      {/* Top Banner */}
      <div className="top-banner">
        <p>
          Not Satisfied? Get <strong>100% Money Back Guarantee!</strong>
        </p>
        <button className="enroll-button">Enroll Now</button>
      </div>

      {/* Header Section */}

      <div className="head-left">
        <h1>
          There's a whole world out there.why not get{""}
          <span>hands-on-experience</span> from top?
        </h1>
        <p>
          Earn industry-recognized certificates with each workshop you complete,
          showcasing your expertise and commitment to professional excellence.
        </p>

        <div className="stats">
          <span>4532+ Learners</span> took their first step to succeed in their
          career.
        </div>
        <div className="actions">
          <button className="enroll-button">Enroll Now</button>
          <button className="counseling-button">
            Get Free Career Counselling
          </button>
        </div>
        <div className="img_right">
          <img src={img_right} alt="" className="img" />
        </div>
      </div>

      {/* Steps Section */}
      <section className="steps">
        <h2>
          Kickstart Your Career in <span>4 Steps</span>
        </h2>
        <div className="steps-grid">
          <div className="step-card">
            <h3>Application</h3>
            <img src={app} alt="" />
          </div>
          <div className="step-card">
            <h3>Hands-on-Experience</h3>
            <p>
              <img src={hand} alt="" />
            </p>
          </div>
          <div className="step-card">
            <h3>Mock Interview</h3>
            <p>
              <img src={mock} alt="" />
            </p>
          </div>
          <div className="step-card">
            <h3>Get Referrals</h3>
            <p>
              <img src={ref} alt="" />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Money;
