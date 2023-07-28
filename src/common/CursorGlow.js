import React, { useEffect, useState } from "react";

const CursorGlow = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div className="sun fixed" style={{ position: "absolute", left: cursorPosition.x - 150, top: cursorPosition.y - 150 }}></div>;
};

export default CursorGlow;
