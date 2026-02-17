import React, { useEffect, useRef } from "react";
import "../App.css";

const servicesData = [
  {
    title: "Consultation Packages",
    desc: "One-on-one strategy sessions to align your business model, tech stack, and market approach.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    )
  },
  {
    title: "Hire Expert Developers",
    desc: "Access pre-vetted developers, designers, and marketers for any technology stack.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    )
  },
  {
    title: "Startup Management",
    desc: "Let our team handle your operations, client acquisition, and project management.",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
        d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    )
  }
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".fade-up-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 } // 30% visible triggers animation
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services container fade-up-scroll">
        <div className="hero-badge services-badge">Services GROWTH</div>

        <div className="services-header fade-up-scroll">
          <h2 className="services-title">Our Services</h2>
          <p className="services-subtitle">
            Everything you need to build, grow, and scale your IT business
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, i) => (
            <div
              key={i}
              className="service-card fade-up-scroll"
              style={{ transitionDelay: `${i * 0.2}s` }} // stagger effect
            >
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  {service.icon}
                </svg>
              </div>

              <h3 className="service-tittle">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>

              <a href="services" className="service-link">
                LEARN MORE <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
