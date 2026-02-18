import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion import
import '../App.css';

const Touch = () => {
  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between child animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="about-main"
      className="touch-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="tagline" variants={itemVariants}>
        Secure Communication Node
      </motion.div>

      <motion.h1 className="heading" variants={itemVariants}>
        Get In <span className="highlight">Touch</span>
      </motion.h1>

      <motion.p className="description" variants={itemVariants}>
        Ready to transform your business? Reach out to discuss your project, book a consultation, or hire expert developers.
      </motion.p>
    </motion.section>
  );
};

export default Touch;
