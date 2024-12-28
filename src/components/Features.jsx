import React from "react";
import "./Features.css";

function Features() {
  return (
    <div className="skillset-section">
      {/* Header */}
      <div className="skillset-header">
        <h1>
          We Offer a <span>Comprehensive</span> Skill Set
        </h1>
        <p>
          Supercharge your career with our expert-led programs, meticulously
          designed to equip you with the most sought-after skills for today’s
          competitive job market.
        </p>
        <button className="enroll-button">
          Enroll Now <span>→</span>
        </button>
      </div>

      {/* Features */}
      <div className="skillset-features">
        <div className="feature-card">
          <h3>Exclusive Access to Our</h3>
          <h2>Global Alumni Network</h2>
          <p>
            Connect with an expansive network of successful professionals across
            the globe. Our alumni are placed in top organizations, and as a
            Hubnex Skillup member, you gain access to this valuable community.
          </p>
        </div>
        <div className="feature-card">
          <h3>Hands-On Learning with</h3>
          <h2>Real-time Project</h2>
          <p>
            Enhancing your CV with real-world projects that challenge you to
            apply your learning immediately.
          </p>
        </div>
        <div className="feature-card">
          <h3>Cutting-Edge</h3>
          <h2>Tech Skills</h2>
          <p>
            Stay ahead of the curve with workshops in AI, Machine Learning, Data
            Science, and Cloud Computing. Learn the latest technologies that are
            shaping the future of industries worldwide.
          </p>
        </div>
        <div className="feature-card">
          <h3>Develop</h3>
          <h2>Creative & Design Skills</h2>
          <p>
            Unlock your creative potential with our design workshops. From
            Graphic Design to UI/UX Design, learn the tools and techniques
            needed to create stunning visuals and user experiences.
          </p>
        </div>
        <div className="feature-card">
          <h3>100%</h3>
          <h2>Job Placement / Assistant</h2>
          <p>
            Our unwavering commitment to excellence ensures that you receive
            top-notch education and support.
          </p>
        </div>
        <div className="feature-card">
          <h3>100%</h3>
          <h2>Satisfaction or Your Money Back</h2>
          <p>
            Our unwavering commitment to excellence ensures that you receive
            top-notch education and support. If you’re not fully satisfied with
            the results, we offer a money-back guarantee.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
