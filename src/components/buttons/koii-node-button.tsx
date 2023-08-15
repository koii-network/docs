import React, { useState } from "react";

const DesktopNodeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://www.koii.network/node"
      target="_blank"
      className="cursor-pointer"
    >
      <img
        src={isHovered ? "/img/buttonhover.svg" : "/img/buttondefault.svg"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hoverAnimation"
      />
    </a>
  );
};

export default DesktopNodeButton;
