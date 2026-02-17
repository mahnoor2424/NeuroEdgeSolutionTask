import React from "react";
import { motion } from "framer-motion"; // <-- Import Framer Motion
import "../App.css";

const PaymentTerms = () => {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="pt-section">
      <div className="pt-container">

        <motion.div
          className="pt-grid container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >

          {/* LEFT SIDE */}
          <motion.div className="pt-left" variants={itemVariants}>
            <h4 className="pt-heading">
              <span className="pt-line"></span>
              Secure Payments
            </h4>

            <div className="pt-payments">
              {/* ITEM 1 */}
              <motion.div className="pt-item" variants={itemVariants}>
                <div className="pt-icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <span>Global Debit/Credit (Stripe)</span>
              </motion.div>

              {/* ITEM 2 */}
              <motion.div className="pt-item" variants={itemVariants}>
                <div className="pt-icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
                    <path d="M16 3v4" />
                    <circle cx="16" cy="12" r="2" />
                  </svg>
                </div>
                <span>PayPal Integration</span>
              </motion.div>

              {/* ITEM 3 */}
              <motion.div className="pt-item" variants={itemVariants}>
                <div className="pt-icon">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 10l9-6 9 6" />
                    <path d="M4 10h16v10H4z" />
                    <path d="M9 14h6" />
                  </svg>
                </div>
                <span>Direct Bank Transfers (SWIFT)</span>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div className="pt-right" variants={itemVariants}>
            <h4 className="pt-heading">
              <span className="pt-line"></span>
              Working Terms
            </h4>

            <ul className="pt-terms">
              <motion.li variants={itemVariants}>
                <small>• Consultation</small>
                <span>100% upfront booking</span>
              </motion.li>

              <motion.li variants={itemVariants}>
                <small>• Development</small>
                <span>50% deposit, 50% on milestone</span>
              </motion.li>

              <motion.li variants={itemVariants}>
                <small>• Retainer</small>
                <span>Pre-paid monthly cycles</span>
              </motion.li>

              <motion.li variants={itemVariants}>
                <small>• Currency</small>
                <span>All transactions in USD</span>
              </motion.li>
            </ul>
          </motion.div>

        </motion.div>

        <motion.div className="pt-note" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
          <p>
            Note: All prices are indicative of standard technical requirements.
            Formal contracts will contain precise scopes of work and definitive timelines.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PaymentTerms;
