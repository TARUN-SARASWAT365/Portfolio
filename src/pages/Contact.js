// Contact.jsx
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css"; // Make sure to link this

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_1s6bbzb',    // Replace this
        'template_cwvcegc',   // Replace this
        form.current,
        'xq3Ejav17S-jlyT9A'     // Replace this
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Contact</h2>

      {/* Social Links */}
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

      {/* Email Form */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="footer">© 2025 - All Rights Reserved.</div>
    </div>
  );
};

export default Contact;
