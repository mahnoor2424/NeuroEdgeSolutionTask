import React from "react";
import { motion } from "framer-motion"; // <-- Import Framer Motion
import "../App.css";

const consultData = [
  {
    id: 1,
    duration: "2 Hours Session",
    title: "Foundation Strategy",
    price: "$80",
    description:
      "Clarify your goals and choose the right tools to launch your venture.",
    outcome: "New validation",
    delay: 0,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    duration: "3 Hours Session",
    title: "Strategy + Tech Dive",
    price: "$100",
    description:
      "Dissect your operational model and technical requirements deeply.",
    outcome: "Early-stage startups",
    delay: 0.15,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    duration: "5 Hours Session",
    title: "Complete Business",
    price: "$150",
    description:
      "Ultimate roadmap covering strategy, technology, and scaling.",
    outcome: "Growing businesses",
    delay: 0.3,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9"
        />
      </svg>
    ),
  },
];

export default function ConsultPackage() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="sp-section">
      <div className="sp-container">
        <div className="sp-header">
          <h2>Consultation Packages</h2>
          <p>Direct Strategic Access</p>
        </div>

        <motion.div
          className="sp-grid container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {consultData.map((item) => (
            <motion.div
              key={item.id}
              className="sp-card"
              variants={cardVariants}
            >
              <div className="sp-glow"></div>

              <div className="sp-icon">{item.icon}</div>

              <span className="sp-duration">{item.duration}</span>

              <h3 className="sp-title">{item.title}</h3>

              <div className="sp-price">
                <span className="sp-amount">{item.price}</span>
                <span className="sp-fee">flat fee</span>
              </div>

              <p className="sp-desc">{item.description}</p>

              <div className="sp-outcome">
                <p className="sp-label">Ideal Outcome</p>
                <p className="sp-value">{item.outcome}</p>
              </div>

              <a href="book-consultation" className="sp-btn">
                Book Session
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
