import React from "react";
import { motion } from "framer-motion";

export default function Government() {
  const sections = [
    {
      title: "Data Transmission Protocols",
      desc: "At NeuroEdge Solutions, we treat your data as a critical business asset. All transmissions within our network are secured using AES-256 encryption. We collect only the essential information required to facilitate our high-tech consulting and talent delivery services.",
    },
    {
      title: "Information Gathering",
      desc: "We may collect personal identity data (name, email, professional links) and technical metadata when you interact with our terminal. This allows us to optimize your experience and ensure high-fidelity communication between our nodes.",
    },
    {
      title: "Neural Network Security",
      desc: "Our security architecture is designed to prevent unauthorized access to your strategic roadmaps and business intelligence. We employ multi-layered authentication and continuous monitoring to maintain the integrity of our digital ecosystem.",
    },
    {
      title: "Third-Party Uplinks",
      desc: "NeuroEdge Solutions does not sell or trade your personal data. We only share information with verified infrastructure partners (such as Stripe for payments or Google for calendar syncing) strictly for operational purposes under high-security protocols.",
    },
    {
      title: "Cookie Policy",
      desc: "We use persistent and session cookies to remember your workspace settings and preferences. This ensures a seamless transition across our platform's different service nodes without repeated authentication.",
    },
  ];

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="max-w-4xl mx-auto px-6 transition-all duration-1000 opacity-100 translate-y-0">
      <motion.div
        className="space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {sections.map((item, idx) => (
          <motion.div
            key={idx}
            className="p-8 md:p-12 rounded-[40px] bg-[#0d1128] border border-white/5 hover:border-[#00d4ff]/30 transition-all duration-500 group relative overflow-hidden"
            variants={cardVariants}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d4ff]/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-[#00d4ff]/10 transition-colors"></div>
            <h2 className="text-xl md:text-2xl font-black heading-font text-white uppercase tracking-tight mb-6 group-hover:text-[#00d4ff] transition-colors flex items-center">
              <span className="w-8 h-px bg-[#00d4ff]/40 mr-4 group-hover:w-12 transition-all"></span>
              {item.title}
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-20 pt-10 border-t border-white/5 text-center">
        <p className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em] mb-8">
          Last Updated: February 23, 2026
        </p>
        <a
          className="inline-flex items-center px-10 py-4 bg-[#00d4ff] text-[#0a0e27] font-black rounded-full text-[10px] tracking-widest uppercase hover:scale-105 transition-all shadow-xl shadow-[#00d4ff]/30"
          href="#/contact"
          data-discover="true"
        >
          Inquire About Security <span className="ml-3">→</span>
        </a>
      </div>
    </section>
  );
}
