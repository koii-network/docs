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
        src={isHovered ? "/img/download-node-hover.svg" : "/img/download-node.svg"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hoverAnimation"
      />
    </a>
  );
};

export default DesktopNodeButton;
