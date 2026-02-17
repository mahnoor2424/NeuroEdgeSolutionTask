import React from "react";
import { motion } from "framer-motion";
import "../App.css";

// --- Data ---
const testimonials = [
  {
    text: "This ERP revolutionized our operations, streamlining finance and inventory. The cloud-based platform keeps us productive, even remotely.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Operations Manager",
  },
  {
    text: "Implementing this ERP was smooth and quick. The customizable, user-friendly interface made team training effortless.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "IT Manager",
  },
  {
    text: "The support team is exceptional, guiding us through setup and providing ongoing assistance, ensuring our satisfaction.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Customer Support Lead",
  },
  {
    text: "This ERP's seamless integration enhanced our business operations and efficiency. Highly recommend for its intuitive interface.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO",
  },
  {
    text: "Its robust features and quick support have transformed our workflow, making us significantly more efficient.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Project Manager",
  },
  {
    text: "The smooth implementation exceeded expectations. It streamlined processes, improving overall business performance.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Business Analyst",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Marketing Director",
  },
  {
    text: "They delivered a solution that exceeded expectations, understanding our needs and enhancing our operations.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Sales Manager",
  },
  {
    text: "Using this ERP, our online presence and conversions significantly improved, boosting business performance.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "E-commerce Manager",
  },
];

// Split into 3 columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// --- Column Component ---
const TestimonialsColumn = ({ testimonials, duration, className }) => {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{ duration: duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        className="testimonial-list"
      >
        {[...Array(2)].map((_, idx) =>
          testimonials.map((testimonial, i) => (
            <motion.li
              key={`${idx}-${i}`}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
              className="testimonial-card"
            >
              <blockquote>
                <p>{testimonial.text}</p>
                <footer>
                  <img src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <cite>{testimonial.name}</cite>
                    <p>{testimonial.role}</p>
                  </div>
                </footer>
              </blockquote>
            </motion.li>
          ))
        )}
      </motion.ul>
    </div>
  );
};

// --- Main Section ---
export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
  <div className="container">
    <motion.div
      className="sectioon-header"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible, only once
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="services-badge">Testimonials GROWTH</div>
      <h2>What our users say</h2>
      <p className="services-subtitle">
        Discover how thousands of teams streamline their operations with our platform.
      </p>
    </motion.div>

    <div className="columns-wrapper">
      <TestimonialsColumn testimonials={firstColumn} duration={15} />
      <TestimonialsColumn testimonials={secondColumn} duration={19} />
      <TestimonialsColumn testimonials={thirdColumn} duration={17} />
    </div>
  </div>
</section>

  );
}
