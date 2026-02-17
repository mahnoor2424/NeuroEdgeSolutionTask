import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const CTA = () => {
  return (
    <div className="cta-container">
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 60 }}          // start slightly below and invisible
        whileInView={{ opacity: 1, y: 0 }}      // animate to visible and original position
        viewport={{ once: true, amount: 0.3 }}  // trigger when 30% of div is visible
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid-pattern"></div>
        <div className="cta-content">
          <h2 id="cta-title">Ready to Start Your IT Journey?</h2>
          <p>
            Book your consultation today and transform your tech vision into a
            thriving business.
          </p>
          <a href="book-consultation" className="cta-button">
            Book Your Consultation Now <span className="arrow">→</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
