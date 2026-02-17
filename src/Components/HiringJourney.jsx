import React from "react";
import { motion } from "framer-motion"; // <-- Import Framer Motion
import "../App.css";

const steps = [
  {
    number: "01",
    title: "Apply",
    desc: "Submit your profile and portfolio through our terminal.",
  },
  {
    number: "02",
    title: "Screening",
    desc: "A brief sync with our recruiting leads to discuss goals.",
  },
  {
    number: "03",
    title: "Assessment",
    desc: "Showcase your skills through a real-world task.",
  },
  {
    number: "04",
    title: "Final Node",
    desc: "Technical deep dive and culture alignment session.",
  },
];

export default function HiringJourney() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="journey-section" aria-labelledby="journey-title">
      <motion.div
        className="journey-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="journey-header" variants={cardVariants}>
          <h2 id="journey-title">The Hiring Journey</h2>
          <p>How we find our next leaders</p>
        </motion.div>

        <div className="journey-grid">
          {steps.map((step, index) => (
            <motion.article
              className="journey-card"
              key={index}
              variants={cardVariants}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
