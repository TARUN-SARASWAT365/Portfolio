import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

// ✅ Initialize EmailJS with your public key
emailjs.init("xq3Ejav17S-jlyT9A");

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1s6bbzb",      // ✅ Your EmailJS service ID
        "template_cwvcegc",     // ✅ Your EmailJS template ID
        form.current,
        "xq3Ejav17S-jlyT9A"     // ✅ Your EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("❌ Email sending error:", error);
          alert("❌ Failed to send message. Please try again later.");
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
          href="https://www.linkedin.com/in/sharma-tarun-80a833344/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
          <div className="contact-info">
            <strong>LinkedIn</strong>
            <span>sharma-tarun</span>
          </div>
        </a>

        <a
          className="contact-link"
          href="https://www.instagram.com/tarun._.saraswat/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
          <div className="contact-info">
            <strong>Instagram</strong>
            <span>@tarun._.saraswat</span>
          </div>
        </a>

        <a
          className="contact-link"
          href="https://github.com/AbhishekGanvir"
          target="_blank"
          rel="noopener noreferrer"
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
