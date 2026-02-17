import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import '../App.css'; // Custom CSS file

const Career = () => {
  return (
    <section id="about-main">
      {/* Tagline */}
      <motion.div
        className="tagline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Build the Future with Us
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Accelerate <span className="highlight">Your Career</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="description"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Join a global network of specialized talent. We're building the infrastructure for the next generation of startups.
      </motion.p>
    </section>
  );
};

export default Career;
