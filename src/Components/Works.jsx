import React, { useEffect, useRef } from "react";
import "../App.css";

const steps = [
  {
    id: "01",
    title: "Book a Consultation",
    description: "Choose your package and schedule a session that fits your timeline",
  },
  {
    id: "02",
    title: "Define Your Goals",
    description: "We analyze your needs and create a custom technology and growth strategy",
  },
  {
    id: "03",
    title: "Get Results",
    description: "Receive actionable plans and full implementation support for measurable success",
  },
];

export default function Works() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll(".fade-up-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            // Remove class when leaving viewport (so it re-animates)
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="works-section" ref={sectionRef}>
      <div className="works-container">
        
        <div className="works-header fade-up-scroll">
          <h2 className="works-title">How It Works</h2>
          <div className="works-underline"></div>
        </div>

        <div className="works-grid container">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="works-card fade-up-scroll"
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="works-number">{step.id}</div>
              <h3 className="works-step-title">{step.title}</h3>
              <p className="works-step-desc">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
