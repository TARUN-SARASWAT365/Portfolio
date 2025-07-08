import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <p className="intro-text">
        Hello, I'm <strong>Tarun Saraswat</strong> passionate about building smart and scalable
        web & mobile applications. I've completed a full-stack development course
        and constantly explore new technologies to refine my skills.
        Focused on continuous learning.
      </p>

      <div className="about-buttons">
        <a href="/TARUN SARASWAT.pdf" download className="btn solid-btn">📄 Download CV</a>
        <a href="#portfolio"  className="btn outline-btn">⧉ View Projects</a>
      </div>

      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-icon">❮❯</div>
          <div className="stat-info">
            <h3>4</h3>
            <p>TOTAL PROJECTS</p>
            <small>Innovative web & mobile solutions crafted</small>
          </div>
        </div>

        

      
      </div>
    </section>
  );
};

export default About;
