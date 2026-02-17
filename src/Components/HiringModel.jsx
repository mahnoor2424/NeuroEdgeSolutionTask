import React from "react";
import { motion } from "framer-motion"; // <-- Import Framer Motion
import "../App.css";

const HiringModel = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="ch-section">
      <div className="ch-container">
        <div className="ch-heading">
          <h2>Talent Acquisition</h2>
          <p>Node Integration Models</p>
        </div>

        <motion.div
          className="ch-grid container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* CARD 1 */}
          <motion.div className="ch-card" variants={cardVariants}>
            <div className="ch-icon">✓</div>

            <h3>Project-Based</h3>
            <span className="ch-sub">Custom quote after tech-scoping</span>

            <div className="ch-prices">
              <div className="ch-row">
                <span>Small Project</span>
                <span className="ch-no">$500 - $2,000</span>
              </div>
              <div className="ch-row">
                <span>Medium Project</span>
                <span className="ch-no">$2,000 - $10,000</span>
              </div>
              <div className="ch-row">
                <span>Large Project</span>
                <span className="ch-no">$10,000+</span>
              </div>
              <div className="ch-row">
                <span>Enterprise</span>
                <span className="ch-no">Custom</span>
              </div>
            </div>

           <a href="/contact" className="ch-btn-outline">
  Request Proposal
</a>

          </motion.div>

          {/* CARD 2 */}
          <motion.div className="ch-card ch-active" variants={cardVariants}>
            <div className="ch-badge">Recommended Tier</div>

            <div className="ch-icon ch-icon-active">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>

            <h3>Monthly Retainer</h3>
            <span className="ch-sub ch-sub-active">Fixed billing by seniority</span>

            <div className="ch-prices">
              <div className="ch-row">
                <span>Junior Developer</span>
                <span className="ch-no">$1,000 - $1,500</span>
              </div>
              <div className="ch-row">
                <span>Mid-Level Developer</span>
                <span className="ch-no">$2,000 - $3,500</span>
              </div>
              <div className="ch-row">
                <span>Senior Developer</span>
                <span className="ch-no">$3,000 - $4,500</span>
              </div>
              <div className="ch-row">
                <span>Technical Lead</span>
                <span className="ch-no">$5,000+</span>
              </div>
            </div>

<a href="/contact" className="ch-btn-filled">
  Lock-In Talent
</a>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HiringModel;
