import React, { useState } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    qualification: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Add submission logic here
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <p className="badge">Limited Batch Size</p>
          <h1>
            Not everyone gets <span>hands-on-experience</span> by us, check if
            you’re the one!
          </h1>
          <p className="description">
            Earn industry-recognized certificates with each workshop you
            complete, showcasing your expertise and commitment to professional
            excellence.
          </p>
          <div className="stats">
            <p>
              <strong>4532+ Learners</strong> took their first step to succeed
              in their career.
            </p>
            <ul className="features">
              <li>Mock Interviews</li>
              <li>Monthly Progress Report</li>
              <li>Hands-on experience on real-time projects</li>
            </ul>
          </div>
          <button className="enroll-button">Enroll Now</button>
        </div>

        {/* Contact Form */}
        <div className="contact-form-container">
          <h2>Let’s connect</h2>
          <p>
            Let’s align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Qualification
              </option>
              <option value="High School">High School</option>
              <option value="Undergraduate">Undergraduate</option>
              <option value="Postgraduate">Postgraduate</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-button">
              Get Free Career Evaluation
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          Earn industry-recognized certificates with each workshop you complete,
          showcasing your expertise and commitment to professional excellence.
        </p>
        <div className="footer-links">
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Refund Policy</a>
          <a href="/">About Us</a>
        </div>
        <button className="footer-enroll-button">Enroll Now</button>
        <p>© Copyright 2024, All Rights Reserved by Hubnex Labs</p>
      </footer>
    </div>
  );
}

export default Testimonials;
