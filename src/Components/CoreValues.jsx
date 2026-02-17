import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const CoreValues = () => {
  // Variants for staggered card animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Variants for text inside card
  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section className="values-section">
      <div className="container">
        <div className="text-center section-header">
          <h2>Our Core Values</h2>
          <p>The protocols that drive our network</p>
        </div>

        <motion.div
          className="row g-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* CARD 1 */}
          <motion.div className="col-md-4" variants={cardVariants}>
            <div className="glow-card">
              <div className="glow-dot"></div>
              <div className="glow-ray"></div>

              <motion.div className="card-content" variants={containerVariants}>
                <motion.div className="icon-box" variants={textVariants}>
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="#00d4ff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </motion.div>

                <motion.h3 variants={textVariants}>Precision</motion.h3>
                <motion.p variants={textVariants}>
                  We believe in pixel-perfect execution and clean, scalable
                  code architecture that stands the test of time.
                </motion.p>
                <motion.p className="border-t" variants={textVariants}></motion.p>
                <motion.span className="protocol" variants={textVariants}>
                  Protocol Linked
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div className="col-md-4" variants={cardVariants}>
            <div className="glow-card">
              <div className="glow-dot"></div>
              <div className="glow-ray"></div>

              <motion.div className="card-content" variants={containerVariants}>
                <motion.div className="icon-box" variants={textVariants}>
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z"
                      stroke="#00d4ff"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="10"
                      cy="12"
                      r="3"
                      stroke="#00d4ff"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </motion.div>

                <motion.h3 variants={textVariants}>Transparency</motion.h3>
                <motion.p variants={textVariants}>
                  Honest communication and clear roadmaps. We treat our clients'
                  projects with the same integrity as our own.
                </motion.p>
                <motion.p className="border-t" variants={textVariants}></motion.p>
                <motion.span className="protocol" variants={textVariants}>
                  Protocol Linked
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div className="col-md-4" variants={cardVariants}>
            <div className="glow-card">
              <div className="glow-dot"></div>
              <div className="glow-ray"></div>

              <motion.div className="card-content" variants={containerVariants}>
                <motion.div className="icon-box" variants={textVariants}>
                  <svg viewBox="0 0 24 24">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#00d4ff"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </motion.div>

                <motion.h3 variants={textVariants}>Impact</motion.h3>
                <motion.p variants={textVariants}>
                  Our success is measured by the tangible growth and ROI of our
                  clients. We build to solve real-world problems.
                </motion.p>
                <motion.p className="border-t" variants={textVariants}></motion.p>
                <motion.span className="protocol" variants={textVariants}>
                  Protocol Linked
                </motion.span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
