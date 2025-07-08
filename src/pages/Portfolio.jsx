// Inside Portfolio.js
import React, { useState } from "react";
import "./Portfolio.css";
import projectImg from "../assets/Screenshot (79).png";

const techStack = [
  { name: "HTML", icon: "fa-html5", color: "#e34c26" },
  { name: "CSS", icon: "fa-css3-alt", color: "#264de4" },
  { name: "JavaScript", icon: "fa-js", color: "#f0db4f" },
  { name: "Tailwind CSS", icon: "fa-css3", color: "#38bdf8" },
  { name: "Express JS", icon: "fa-node", color: "#888" },
  { name: "Node JS", icon: "fa-node-js", color: "#3C873A" },
  { name: "React + Native", icon: "fa-react", color: "#61dbfb" },
  { name: "MongoDB", icon: "fa-leaf", color: "#4DB33D" },
  { name: "JWT", icon: "fa-key", color: "#e53e3e" },
  { name: "PostgreSQL", icon: "fa-database", color: "#336791" },
  { name: "TypeScript", icon: "fa-code", color: "#3178c6" },
  { name: "Docker", icon: "fa-docker", color: "#0db7ed" },
];

const projects = [
  {
    title: "MY PORTFOLIO",
    description: "Its my portfolio website where you can find about me and my projects.",
    image: projectImg,
    liveLink: "https://portfolio-teal-chi-88.vercel.app",
    detailsLink: "https://github.com/TARUN-SARASWAT365/Portfolio",
  },
  {
    title: "Chat App",
    description: "A chat app made for easy, personal entertainment and everything you love to binge.",
    image: projectImg,
    liveLink: "https://chatappfrontend-beryl.vercel.app",
    detailsLink: "https://github.com/TARUN-SARASWAT365/chatappfrontend",
  },
  
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="portfolio-page">
      <h2 className="portfolio-title">Portfolio Showcase</h2>
      <p className="portfolio-subtitle">
        Explore my journey through projects, education, and technical expertise.
        Each section represents a milestone in my continuous learning path.
      </p>

      <div className="portfolio-tabs">
        <button
          className={activeTab === "projects" ? "active" : ""}
          onClick={() => setActiveTab("projects")}
        >
          Projects
        </button>
        <button
          className={activeTab === "education" ? "active" : ""}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={activeTab === "tech" ? "active" : ""}
          onClick={() => setActiveTab("tech")}
        >
          Tech Stack
        </button>
      </div>

      <div className="portfolio-content">
        {activeTab === "tech" && (
          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <div key={index} className="tech-card">
                <i className={`fab ${tech.icon}`} style={{ color: tech.color }}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === "education" && (
          <div className="education-grid">
            <div className="edu-card">
              <h3>Bachelor of Computer science (BCA)</h3>
              <p>Bachelor of computer application</p>
              <p>MGSU University  Bikaner| 2023 - 2025</p>
            </div>
            <div className="edu-card">
              <h3>Senior Secondary</h3>
              <p>CBSE Board | Non-Medical</p>
              <p>SSS SCHOOL | 2022 - 2023</p>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo <span>↗</span>
                  </a>
                  <a
                    href={project.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="details-btn"
                  >
                    Details →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      
    </div>
  );
};

export default Portfolio;
