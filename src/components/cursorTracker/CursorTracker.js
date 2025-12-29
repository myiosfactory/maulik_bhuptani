import React, {useEffect, useState} from "react";
import "./CursorTracker.scss";

function CursorTracker() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = event => {
      setMousePosition({x: event.clientX, y: event.clientY});
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`cursor-tracker ${isVisible ? "visible" : ""}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`
      }}
    >
      <div className="cursor-dot"></div>
      <div className="cursor-ring"></div>
    </div>
  );
}

export default CursorTracker;
