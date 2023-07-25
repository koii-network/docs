import React, { useState } from "react";
import "./tooltip.css";
import tooltips from "./tooltips.json";

type tooltipType = {
  text: string;
};

function Tooltip({ text }: tooltipType) {
  const [isHovered, setIsHovered] = useState(false);
  const tooltipText = tooltips[text][0] || "Default tooltip";
  const tooltipLink = tooltips[text][1];

  const handleClick = () => {
    window.open(tooltipLink, "_blank");
  };

  return (
    <>
      <div className="tooltip-container">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleClick}
          className="tooltip-text"
        >
          {text}
        </div>
        {isHovered && tooltipText && (
          <div className="tooltip-hover-container">
            <p className="tooltip-hover-text">{tooltipText + "."}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Tooltip;
