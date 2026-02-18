import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from "./Navbar";


export default function Hero() {
  // Ref to detect if counters are visible
  const countersRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Counter state
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    satisfaction: 0,
    solutions: 0,
  });

  const targetValues = {
    experience: 10,
    projects: 856,
    satisfaction: 98,
    solutions: 100,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!countersRef.current) return;
      const top = countersRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Trigger animation when counters are in viewport
      if (top < windowHeight && !hasAnimated) {
        setHasAnimated(true);
        animateCounters();
      }
    };

    const animateCounters = () => {
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setCounters({
          experience: Math.floor(progress * targetValues.experience),
          projects: Math.floor(progress * targetValues.projects),
          satisfaction: Math.floor(progress * targetValues.satisfaction),
          solutions: Math.floor(progress * targetValues.solutions),
        });

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure final values
          setCounters(targetValues);
        }
      };

      requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // in case it's already in view

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated]);

  return (
    <div className="hero-container d-flex align-items-center justify-content-center w-100">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
       <source src="/assets/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="hero-inner container d-flex flex-column flex-lg-row align-items-center justify-content-between">
        {/* LEFT: Hero Content */}
        <div className="hero-content text-center text-lg-start mb-5 mb-lg-0">
          <div className="hero-badge fade-up">ACCELERATE YOUR BUSINESS GROWTH</div>

          <h1 className="hero-heading  v fade-up fade-up-delay-1">
            Turn Your Tech Idea into a <span className="highlight">Profitable</span> IT Business
          </h1>

          <p className="hero-subtext fade-up fade-up-delay-2">
            From startup strategy to full-stack development, we help you build, grow, and scale with expert consultation and professional teams.
          </p>

          <div className="hero-buttons fade-up fade-up-delay-3">
            <a href="#book-consultation" className=" book-btn ">
              Book Consultation →
            </a>
            <a href="services" className="btn btn-outline-primary">
              View Our Services
            </a>
          </div>
        </div>

        {/* RIGHT: Counters */}
        <div className="hero-right-counters" ref={countersRef}>
          <div className="counter-card">
            <div className="counter-number">{counters.experience}+</div>
            <div className="counter-label">YEARS EXPERIENCE</div>
          </div>
          <div className="counter-card">
            <div className="counter-number">{counters.projects}+</div>
            <div className="counter-label">PROJECTS DELIVERED</div>
          </div>
          <div className="counter-card">
            <div className="counter-number">{counters.satisfaction}%</div>
            <div className="counter-label">CLIENT SATISFACTION</div>
          </div>
          <div className="counter-card">
            <div className="counter-number">{counters.solutions}%</div>
            <div className="counter-label">CUSTOM BUILT SOLUTIONS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
