import React from 'react';
import { motion } from 'framer-motion';
import '../App.css';

const ServiceHero = () => {
  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger between child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="about-main"
      className="service-hero"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="tagline" variants={itemVariants}>
        The Full Spectrum of IT Solutions
      </motion.div>
      <motion.h1 className="heading" variants={itemVariants}>
        Our Services <span className="highlight"></span>
      </motion.h1>
      <motion.p className="description" variants={itemVariants}>
        Comprehensive infrastructure designed to help your business build, grow,
        and scale with absolute technical confidence.
      </motion.p>
    </motion.section>
  );
};

export default ServiceHero;
