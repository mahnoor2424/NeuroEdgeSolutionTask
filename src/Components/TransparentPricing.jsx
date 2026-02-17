import React from 'react';
import '../App.css'; // Custom CSS file

const Abouthero = () => {
  return (
    <section id="about-main" className="about-hero">
      <div className="tagline">Clear Tiers. No Surprises.</div>
      <h1 className="heading">
        Transparent <span className="highlight">Pricing</span>
      </h1>
      <p className="description">
        Flexible plans for consultations, developer hires, and managed startup services. 
        No hidden fees—just honest pricing for real results.
      </p>
    </section>
  );
};

export default Abouthero;
