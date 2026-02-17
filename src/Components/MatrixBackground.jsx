// MatrixBackground.jsx
import React, { useEffect, useRef, useState } from "react";

const MatrixBackground = ({ width = "100%", height = "100%" }) => {
  const gridRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  useEffect(() => {
    if (!isClient || !gridRef.current) return;

    const grid = gridRef.current;
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>/?;:\"[]{}\\|!@#$%^&*()_+-=";

    let columns = 0;
    let rows = 0;

    const createTile = (index) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.textContent = chars[Math.floor(Math.random() * chars.length)];
      return tile;
    };

    const createTiles = (quantity) => {
      for (let i = 0; i < quantity; i++) {
        grid.appendChild(createTile(i));
      }
    };

    const createGrid = () => {
      grid.innerHTML = "";
      const size = 25; // smaller tiles for denser grid
      columns = Math.floor(grid.clientWidth / size);
      rows = Math.floor(grid.clientHeight / size);
      grid.style.setProperty("--columns", columns);
      grid.style.setProperty("--rows", rows);
      createTiles(columns * rows);
    };

    createGrid();
    window.addEventListener("resize", createGrid);

    return () => window.removeEventListener("resize", createGrid);
  }, [isClient]);

  return (
    <div
      ref={gridRef}
      className="matrix-background"
      style={{ position: "absolute", top: 0, left: 0, width, height, overflow: "hidden", zIndex: 0 }}
    >
      <style>{`
        .matrix-background {
          display: grid;
          grid-template-columns: repeat(var(--columns), 1fr);
          grid-template-rows: repeat(var(--rows), 1fr);
        }
        .matrix-background .tile {
          font-family: 'Courier New', monospace;
          font-size: 0.8rem;
          color: hsl(120, 100%, 30%);
          opacity: 0.2;
        }
      `}</style>
    </div>
  );
};

export default MatrixBackground;
