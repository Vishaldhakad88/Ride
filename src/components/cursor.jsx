// src/components/Cursor.jsx
import React, { useEffect } from "react";
import "./cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.left = x + "px";
      cursor.style.top = y + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="custom-cursor" />;
};

export default Cursor;