import React from "react";
import "../pages/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>

      <div className="contact-card-container">
        <h3 className="contact-subtitle">Connect With Me</h3>

        <a
          className="contact-link"
          href="https://www.linkedin.com/in/abhishekganvir"
          target="_blank"
          rel="noopener noreferrer"
          id="linkedin"
        >
          <i className="fab fa-linkedin"></i>
          <div className="contact-info">
            <strong>Let's Connect</strong>
            <span>on LinkedIn</span>
          </div>
        </a>

        <a
          className="contact-link"
          href="https://www.instagram.com/alright.abhi"
          target="_blank"
          rel="noopener noreferrer"
          id="instagram"
        >
          <i className="fab fa-instagram"></i>
          <div className="contact-info">
            <strong>Instagram</strong>
            <span>@alright.abhi</span>
          </div>
        </a>

        <a
          className="contact-link"
          href="https://github.com/AbhishekGanvir"
          target="_blank"
          rel="noopener noreferrer"
          id="github"
        >
          <i className="fab fa-github"></i>
          <div className="contact-info">
            <strong>GitHub</strong>
            <span>@AbhishekGanvir</span>
          </div>
        </a>
      </div>

      <div className="footer">© 2025 - All Rights Reserved.</div>
    </div>
  );
};

export default Contact;
