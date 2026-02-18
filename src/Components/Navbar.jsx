import React, { useState, useEffect } from "react";
import "../App.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbarr ${scrolled ? "scrolled" : ""}`}>


        <div className="nav-container">

          {/* Logo */}
          <a href="#" className="logo">
            <div className="logo-icon">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="35" stroke="#00d4ff" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <span className="logo-text">
              <span className="white">NeuroEdge</span>
              <span className="blue"> Solutions</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="nav-links">
            <a href="/" className="active">HOME</a>
            <a href="about">ABOUT</a>
            <a href="services">SERVICES</a>
            <a href="pricing">PRICING</a>
            <a href="career">CAREERS</a>
            <a href="contact">CONTACT</a>
          </div>

          {/* Desktop Buttons */}
          <div className="nav-buttons">
            <a href="login" className="login">LOGIN</a>
            <a href="book-consultation" className="bookk-btn">BOOK NOW</a>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(true)}>
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>

        <a href="#" onClick={() => setMenuOpen(false)}>HOME</a>
        <a href="about" onClick={() => setMenuOpen(false)}>ABOUT</a>
        <a href="services" onClick={() => setMenuOpen(false)}>SERVICES</a>
        <a href="pricing" onClick={() => setMenuOpen(false)}>PRICING</a>
        <a href="career" onClick={() => setMenuOpen(false)}>CAREERS</a>
        <a href="contact" onClick={() => setMenuOpen(false)}>CONTACT</a>

        <div className="mobile-buttons">
          <a href="login" className="mobile-login">LOGIN</a>
          <a href="book-consultation" className="mobile-book">BOOK NOW</a>
        </div>
      </div>
    </>
  );
}
