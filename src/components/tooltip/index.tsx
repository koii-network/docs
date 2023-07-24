import React, { useState } from "react";
import "./tooltip.css";
import tooltips from "./tooltips.json";

type tooltipType = {
  text: string;
};

function Tooltip({ text }: tooltipType) {
  const [isHovered, setIsHovered] = useState(false);
  const tooltipText = tooltips[text] || "Default tooltip";
  return (
    <>
      <div className="tooltip-container">
        <span
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="tooltip-text"
        >
          {text}
        </span>
        {isHovered && tooltipText && (
          <p className="tooltip-hover-text">{tooltipText + "."}</p>
        )}
      </div>
    </>
  );
}

export default Tooltip;
