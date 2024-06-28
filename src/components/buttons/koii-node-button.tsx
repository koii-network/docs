import React, { useState } from "react";

const DesktopNodeButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="https://www.koii.network/nodes"
      target="_blank"
      className="cursor-pointer"
    >
      <em><img
        src={isHovered ? "/img/download-node-hover.svg" : "/img/download-node.svg"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="hoverAnimation"
      /></em>
    </a>
  );
};

export default DesktopNodeButton;
