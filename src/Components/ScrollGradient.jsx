import React, { useEffect, useState } from "react";
import "../App.css";

const ScrollGradient = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gradientPosition = scroll % 1000; // adjust speed

  return (
    <div
      className="scroll-gradient"
      style={{
        background: `linear-gradient(135deg, #00d4ff, #ff00d4 ${gradientPosition}px)`,
      }}
    >
      <div style={{ height: "2000px", padding: "50px", color: "#fff" }}>
        <h1>Scroll to see the gradient change!</h1>
        <p>Scrollbar is hidden, but scroll works!</p>
      </div>
    </div>
  );
};

export default ScrollGradient;
