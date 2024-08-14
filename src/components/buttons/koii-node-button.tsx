import React, { useState } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const DesktopNodeButton = () => {
	const [isHovered, setIsHovered] = useState(false);
	const { siteConfig } = useDocusaurusContext();
	const { baseUrl } = siteConfig.customFields as { baseUrl: string };

	return (
		<a
			href="https://www.koii.network/nodes"
			target="_blank"
			className="cursor-pointer"
		>
			<em>
				<img
					src={
						isHovered
							? `${baseUrl}/img/download-node-hover.svg`
							: `${baseUrl}/img/download-node.svg`
					}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
					className="hoverAnimation"
				/>
			</em>
		</a>
	);
};

export default DesktopNodeButton;
