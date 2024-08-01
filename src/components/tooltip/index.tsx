import React, { useState } from "react";
import "./tooltip.css";
import tooltips from "./tooltips.json";


import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type tooltipType = {
  text: string;
};

function Tooltip({ text }: tooltipType) {
  const [isHovered, setIsHovered] = useState(false);
  const tooltipText = tooltips[text.toLowerCase()][0] || "Default tooltip";
  const tooltipLink = tooltips[text.toLowerCase()][1] || "Default tooltip";
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig.customFields;

  const handleClick = () => {
    window.open(`${baseUrl}${tooltipLink}`, "_blank");
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
