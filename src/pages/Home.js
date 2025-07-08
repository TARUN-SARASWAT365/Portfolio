import React from "react";
import "./Home.css";
import TypingEffect from "./TypingEffect"; // Make sure you create this file
import pic from "../assets/undraw_finance-guy-avatar_vhop.svg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">
        <div className="hero-left">
          <button className="tagline">🚀 Ready to Innovate</button>

          <h1>
            Full Stack <br />
            <span className="highlight">Developer</span>
          </h1>

          <p className="typing-line">
            <TypingEffect />
          </p>

          <p className="subtext">
            Enhancing digital experiences that are smooth, scalable, and made to impress.
          </p>

          <div className="skills">
            <span>HTML</span>
            <span>CSS</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>Node.js</span>
           
          </div>

          <div className="buttons">
            <a href="/portfolio" className="btn">Projects ↗</a>
            <a href="/contact" className="btn">Contact ✉</a>
          </div>

          <div className="social-icons">
            <a href="#"><i className="fab fa-github"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="hero-right">
       <img src={pic} alt="Hero" className="hero-img" />

        </div>
      </div>
    </section>
  );
};

export default Home;
