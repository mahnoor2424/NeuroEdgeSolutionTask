import React from "react";
import { motion } from "framer-motion"; // <-- Framer Motion import
import "../App.css";

const ScaleSection = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="ss-section">
      <motion.div
        className="ss-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        <motion.div className="ss-heading-wrapper" variants={itemVariants}>
          <div className="ss-glow"></div>
          <h2 className="ss-heading">
            Scale Without <span>Limits</span>
          </h2>
        </motion.div>

        <motion.p className="ss-subtext" variants={itemVariants}>
          Choose the node that aligns with your vision and begin the integration today.
        </motion.p>

        <motion.div className="ss-buttons" variants={itemVariants}>
          <a href="book-consultation" className="ss-btn-primary">
            Book Architecture Call
          </a>

          <a href="contact" className="ss-btn-outline">
            Submit Tech Specs
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ScaleSection;
