// src/components/Cursor.jsx
import React, { useEffect } from "react";
import "./cursor.css";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");
    const cursorLine = document.querySelector(".cursor-line");

    let mouseX = 0, mouseY = 0;
    let lineX = 0, lineY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    };

    const animateLine = () => {
      lineX += (mouseX - lineX) * 0.1;
      lineY += (mouseY - lineY) * 0.1;

      cursorLine.style.left = lineX + "px";
      cursorLine.style.top = lineY + "px";

      requestAnimationFrame(animateLine);
    };

    window.addEventListener("mousemove", moveCursor);
    animateLine();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="custom-cursor"></div>
      <div className="cursor-line"></div>
    </>
  );
};

export default Cursor;
