import { useState } from "react";
import { motion } from "framer-motion"; // <-- Framer Motion import
import "../App.css";

const developers = [
  {
    id: 1,
    title: "Frontend Developers",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    description: "Perfect for responsive, interactive web experiences.",
    techStack: ["React", "Vue.js", "Angular", "CSS3", "TypeScript", "HTML5", "Tailwind", "Bootstrap"],
  },
  {
    id: 2,
    title: "Backend Developers",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    description: "For fast, secure, scalable backend solutions.",
    techStack: ["Django", "Flask", "Node.js", "Express", ".NET", "Ruby on Rails", "Spring Boot"],
  },
  {
    id: 3,
    title: "Mobile App Developers",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    description: "Build hybrid or native apps with flawless performance.",
    techStack: ["Android (Kotlin/Java)", "iOS (Swift)", "Flutter", "React Native", "Ionic"],
  },
  {
    id: 4,
    title: "Full-Stack Developers",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    description: "Complete end-to-end web and app solutions.",
    techStack: ["MERN", "MEAN", "LAMP", "Django + React/Vue"],
  },
  {
    id: 5,
    title: "CMS & E-Commerce",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    description: "Perfect for content-driven or e-commerce startups.",
    techStack: ["WordPress", "Shopify", "Magento", "Strapi", "Headless CMS", "Custom PHP"],
  },
  {
    id: 6,
    title: "Cloud & DevOps",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    description: "Ensure deployment reliability, speed, and scalability.",
    techStack: ["Docker", "Kubernetes", "AWS", "GCP", "Azure", "CI/CD"],
  },
  {
    id: 7,
    title: "AI & ML Developers",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m8-8H4" />
      </svg>
    ),
    description: "Design intelligent systems and predictive models.",
    techStack: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
  },
  {
    id: 8,
    title: "Data Engineers",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h18v18H3V3z" />
      </svg>
    ),
    description: "Manage data pipelines and architecture efficiently.",
    techStack: ["SQL", "NoSQL", "Spark", "Hadoop", "ETL"],
  },
  {
    id: 9,
    title: "Cybersecurity Experts",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l9 4v6c0 6-9 10-9 10S3 12 3 8V2l9-0z" />
      </svg>
    ),
    description: "Protect systems against cyber threats and vulnerabilities.",
    techStack: ["Penetration Testing", "Firewalls", "Network Security", "Encryption"],
  },
  {
    id: 10,
    title: "Blockchain Developers",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 3h12v18H6V3z" />
      </svg>
    ),
    description: "Build decentralized applications and smart contracts.",
    techStack: ["Ethereum", "Solidity", "Hyperledger", "Web3.js"],
  },
  {
    id: 11,
    title: "UI/UX Designers",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4h16v16H4V4z" />
      </svg>
    ),
    description: "Create intuitive and engaging user experiences.",
    techStack: ["Figma", "Sketch", "Adobe XD", "Photoshop", "Illustrator"],
  },
  {
    id: 12,
    title: "QA & Test Engineers",
    icon: (
      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
      </svg>
    ),
    description: "Ensure software quality and bug-free releases.",
    techStack: ["Selenium", "Jest", "Cypress", "TestRail"],
  },
];

export default function ServiceCards() {
  const [activeCard, setActiveCard] = useState(null);

  // Motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="hire-developers">
      <div className="container">
        <div className="header">
          <div className="badge">Vetted Talent Pool</div>
          <h2>Hire Expert Developers</h2>
          <p>Direct access to the top 1% of technical and creative talent across specialized nodes.</p>
        </div>

        {/* Motion wrapper for staggered animation */}
        
        <motion.div
  className="grid"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.2 }} // <- once:false helps mobile animations trigger
>

          {developers.map((dev, idx) => {
            const isActive = activeCard === dev.id;
            return (
              <motion.article
                key={dev.id}
                className={`cardd ${isActive ? "active" : ""}`}
                variants={cardVariants}
              >
                <div className="icon-wrapper">{dev.icon}</div>
                <h3>{dev.title}</h3>
                <p>{dev.description}</p>

                <div className="tech-section">
                  <p className="tech-label">Tech Stack</p>
                  <div className="tech-tags">
                    {dev.techStack.map((tech) => (
                      <span
                        key={tech}
                        onClick={() => setActiveCard(dev.id)}
                        className="tech-badge"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <div className="cta-wrapper">
          <a href="contact" className="ctta-button">
            Request Specialized Talent
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
