import "../App.css";
import { motion } from "framer-motion"; // <-- import motion

export default function Startup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }, // stagger cards
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="growth-service" className="growth-service">
      <div className="container">
        <div className="section-headerr">
          <h2>Startup Management</h2>
          <p>
            Full-cycle growth strategies focusing on scalability,
            client acquisition, and operational excellence.
          </p>
        </div>

        {/* Motion wrapper for stagger animation */}
        <motion.div
          className="pricing-grid container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Starter */}
          <motion.div className="pricing-card" variants={cardVariants}>
            <h3>Starter Plan</h3>
            <div className="price">
              <span className="amountt">$300</span>
              <span className="durationn">/ month</span>
            </div>

            <ul>
              <li>Client matching in your niche</li>
              <li>Weekly growth strategy sessions</li>
              <li>Project management setup</li>
              <li>Monthly performance report</li>
            </ul>

            <a href="contact" className="plan-btn">Deploy Starter</a>
          </motion.div>

          {/* Growth (Featured) */}
          <motion.div className="pricing-card featured" variants={cardVariants}>
            <div className="badge">Most Popular Solution</div>

            <h3>Growth Plan</h3>
            <div className="price">
              <span className="amountt">$500</span>
              <span className="durationn">/ month</span>
            </div>

            <ul>
              <li>All Starter features</li>
              <li>Active client acquisition</li>
              <li>Marketing & outreach</li>
              <li>Custom marketing plan</li>
              <li>Dedicated performance calls</li>
            </ul>

            <a href="contact" className="plan-btn primary">
              Deploy Growth
            </a>
          </motion.div>

          {/* Scale */}
          <motion.div className="pricing-card" variants={cardVariants}>
            <h3>Scale Plan</h3>
            <div className="price">
              <span className="amountt">$800</span>
              <span className="durationn">/ month</span>
            </div>

            <ul>
              <li>All Growth features</li>
              <li>Full-service client management</li>
              <li>Account-based marketing</li>
              <li>Monthly revenue scaling reports</li>
              <li>Ongoing growth consulting</li>
            </ul>

            <a href="contact" className="plan-btn">Deploy Scale</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
