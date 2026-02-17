import React from "react";
import { motion } from "framer-motion";
import "../App.css";

const contactCards = [
  {
    title: "Neural Link (Email)",
    info: "solutionsneuroedge@gmail.com",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="contact-svg-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#00d4ff"
        strokeWidth={2}
        width={18}
        height={18}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Comm Frequency (Phone)",
    info: "+92 311 1764098",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="contact-svg-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#00d4ff"
        strokeWidth={2}
        width={18}
        height={18}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    title: "Operations Node (Location)",
    info: "Karachi, Pakistan",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="contact-svg-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#00d4ff"
        strokeWidth={2}
        width={18}
        height={18}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

export default function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.15, ease: "easeOut", duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      className="mainn"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <section className="custom-contact-section container">
        <motion.div className="custom-contact-left" variants={itemVariants}>
          <header className="custom-contact-header">
            <h2>
              Send a <span className="custom-highlight">Message</span>
            </h2>
            <div className="custom-underline"></div>
            <p>Use our encrypted terminal to transmit your project requirements.</p>
          </header>

          <form className="custom-contact-form" noValidate>
            <div className="custom-form-row">
              <div className="custom-form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="e.g. John" required />
              </div>
              <div className="custom-form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="e.g. Doe" required />
              </div>
            </div>

            <div className="custom-form-group">
              <label htmlFor="email">Email Node</label>
              <input type="email" id="email" placeholder="john@future-corp.com" required />
            </div>

            <div className="custom-form-group">
              <label htmlFor="service">Selected Node</label>
              <select id="service">
                <option value="consultation">Strategic Consultation</option>
                <option value="dev">Talent Acquisition</option>
                <option value="growth">Startup Scaling Plan</option>
                <option value="other">Other Integration</option>
              </select>
            </div>

            <div className="custom-form-group">
              <label htmlFor="message">Technical Brief</label>
              <textarea id="message" rows="5" placeholder="Detail your requirements..." required></textarea>
            </div>

            <button type="submit" className="custom-submit-btn">
              Initialize Transmission
            </button>
          </form>
        </motion.div>

        <motion.div className="custom-contact-right" variants={itemVariants}>
          {contactCards.map((card, index) => (
            <motion.div className="custom-info-card" key={index} variants={itemVariants}>
              <div className="custom-icon">{card.icon}</div>
              <div className="custom-info-text">
                <p className="custom-card-title">{card.title}</p>
                <p className="custom-card-info">{card.info}</p>
              </div>
            </motion.div>
          ))}

          <motion.div className="custom-strategy-card" variants={itemVariants}>
            <h3>Strategic Node Access</h3>
            <p>
              Schedule a one-on-one session with our lead architects to discuss business logic and technical execution.
            </p>
            <a href="#/services" className="custom-strategy-btn">Analyze Packages</a>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
