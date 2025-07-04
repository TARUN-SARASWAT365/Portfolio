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
        <a href="/Abhishek_CV.pdf" download className="btn solid-btn">📄 Download CV</a>
        <a href="#projects" className="btn outline-btn">⧉ View Projects</a>
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

        <div className="stat-box">
          <div className="stat-icon">🎖</div>
          <div className="stat-info">
            <h3>3</h3>
            <p>CERTIFICATES</p>
            <small>Professional skills validated</small>
          </div>
        </div>

        <div className="stat-box">
          <div className="stat-icon">🌐</div>
          <div className="stat-info">
            <h3>2</h3>
            <p>YEARS OF EXPERIENCE</p>
            <small>Continuous learning journey</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
