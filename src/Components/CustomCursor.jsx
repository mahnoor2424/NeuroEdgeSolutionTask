import React, { useEffect, useRef } from "react";
import "../App.css";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = cursorRef.current;
      if (!cursor) return;

      // Smooth movement using requestAnimationFrame
      const { clientX: x, clientY: y } = e;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
