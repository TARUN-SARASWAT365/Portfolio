import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">Tarun Saraswat</div>

        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          <li onClick={closeMenu}><a href="#home">Home</a></li>
          <li onClick={closeMenu}><a href="#about">About</a></li>
          <li onClick={closeMenu}><a href="#portfolio">Portfolio</a></li>
          <li onClick={closeMenu}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
