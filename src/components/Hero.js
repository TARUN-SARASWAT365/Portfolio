import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="Home">
      <div className="hero-text">
        <h1><span>Full Stack</span> <br /><strong>Developer</strong></h1>
        <p>Tech Enthusiast | Problem Solver | UI Lover</p>
        <p>Enhancing digital experiences that are smooth, scalable, and made to impress.</p>
      </div>
      <div className="hero-image">
        <img src="/developer-illustration.png" alt="developer" />
      </div>
    </section>
  );
};

export default Hero;
