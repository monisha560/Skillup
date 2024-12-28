import React from "react";
import "./Plans.css";
import career from "../assets/career.png";
import starter from "../assets/starter.png";
import ultimate from "../assets/ultimate.png";
import pro from "../assets/pro.png";
import google from "../assets/google.png";

const Plans = () => {
  return (
    <div>
      <section className="steps">
        <h2>
          Choose The <span> Perfect Plan</span> For You
        </h2>
        <div className="steps-grid">
          <div className="step-card">
            <h3></h3>
            <img src={starter} alt="" />
          </div>
          <div className="step-card">
            <h3></h3>
            <p>
              <img src={pro} alt="" />
            </p>
          </div>
          <div className="step-card">
            <h3></h3>
            <p>
              <img src={career} alt="" />
            </p>
          </div>
          <div className="step-card">
            <h3></h3>
            <p>
              <img src={ultimate} alt="" />
            </p>
          </div>
        </div>
      </section>
      <div className="google">
        <h2>
          Hear From Our <span>Achivers</span>
        </h2>
        <p>
          <img src={google} alt="" />
        </p>
      </div>
    </div>
  );
};

export default Plans;
