import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css";

const plans = [
  {
    title: "Foundation Strategy",
    price: "$80",
    duration: "/ 2 Hours",
    description:
      "Get clarity on your business goals, and discover the best tools and platforms to launch your IT venture.",
    features: [
      "Evaluating your startup idea & market fit",
      "Choosing the right tech stack & tools",
      "Early-stage budgeting & MVP planning",
    ],
  },
  {
    title: "Strategy + Technical Deep Dive",
    price: "$100",
    duration: "/ 3 Hours",
    description:
      "Perfect for founders ready to go beyond ideas. We'll dissect your operational model, technical requirements, and marketing funnel plan.",
    features: [
      "Business creation & feature prioritization",
      "Development roadmap & timeline",
      "Marketing funnel and online growth strategy",
    ],
  },
  {
    title: "Complete Business & Growth",
    price: "$150",
    duration: "/ 5 Hours",
    description:
      "The ultimate consultation covering strategy, technology, marketing, and scaling tailored for you.",
    features: [
      "In-depth business planning & tech execution",
      "Client acquisition strategies",
      "Scaling operations & revenue management",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger each card
    },
  },
};

const Consultation = () => {
  return (
    <section className="consultations-section">
      <div className="container">
        <div className="section-header">
          <h2 className="services-title">Strategic Consultations</h2>
          <p className="services-subtitle">
            Validate your roadmap with expert oversight
          </p>
        </div>

        <motion.div
          className="cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div className="consult-card" key={index} variants={cardVariants}>
              <div className="glow-ray"></div>
              <div className="glow-dot"></div>
              <h3>{plan.title}</h3>

              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="duration">{plan.duration}</span>
              </div>

              <p className="description">{plan.description}</p>

              <ul className="feature-list">
                {plan.features.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <Link to="book-consultation" className="book-btn">
                Book Session
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Consultation;
