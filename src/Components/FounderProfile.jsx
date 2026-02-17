import React from "react";
import { motion } from "framer-motion";
import "../App.css";

export default function FounderProfile() {
  return (
    <section className="founder-section">
      <div className="founder-container">

        {/* LEFT IMAGE SIDE */}
        <motion.div
          className="founder-image-wrapper"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glow-bg"></div>

          <div className="founder-card">
            <img
              src="https://i.pinimg.com/1200x/f8/a0/38/f8a038b7492b8732089f69299ce046c8.jpg"
              alt="Founder"
              className="founder-image"
            />

            <div className="gradient-overlay"></div>

            <div className="verified-box">
              <p className="verified-title">Verified Architect</p>
              <p className="verified-id">ID: NE-2026-CEO</p>
            </div>

            <div className="badgee">Founder & CEO</div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT SIDE */}
        <motion.div
          className="founder-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="tag"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            Architect & Visionary
          </motion.div>

          <motion.h2
            className="founder-name"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Muhammad <span>Umais</span> Sohail
          </motion.h2>

          <motion.p
            className="founder-desc"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A strategic visionary dedicated to building robust digital ecosystems.
            With 10+ years of cross-functional experience, I lead NeuroEdge with
            a focus on merging business logic with technical excellence.
          </motion.p>

          <motion.div
            className="specialization"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h4>Specialized Nodes:</h4>
            <div className="tags">
              <span>Business Strategy</span>
              <span>Full-Stack Architecture</span>
              <span>Team Leadership</span>
              <span>Cloud Engineering</span>
              <span>AI Integration</span>
            </div>
          </motion.div>

          <motion.a
            href="contact"
            className="consult-btn"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Secure Consultation →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
