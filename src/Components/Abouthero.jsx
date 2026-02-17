import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const Abouthero = () => {
  return (
    <section id="about-main">
      {/* Tagline */}
      <motion.div
        className="tagline"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        The Architecture of Innovation
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About <span className="highlight">NeuroEdge Solutions</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="description"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Empowering startups and businesses with modern technology, strategic
        leadership, and sustainable digital growth through our expert neural
        network.
      </motion.p>
    </section>
  );
};

export default Abouthero;
