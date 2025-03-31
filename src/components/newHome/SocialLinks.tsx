import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import React from "react";

const SocialLinks = () => {
  	const { siteConfig } = useDocusaurusContext();
    const { baseUrl } = siteConfig.customFields as { baseUrl: string };
    
  return (
    <div className="flex items-center justify-center gap-3">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/KoiiFoundation"
      >
        <img
          src={`${baseUrl}/img/social-link-icons/twitter.svg`}
          alt="Twitter logo"
          width={24}
          height={24}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://discord.com/invite/koii-network"
      >
        <img
          src={`${baseUrl}/img/social-link-icons/discord.svg`}
          alt="Discord logo"
          width={24}
          height={24}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/koiinetwork"
      >
        <img
          src={`${baseUrl}/img/social-link-icons/telegram.svg`}
          alt="Telegram logo"
          width={24}
          height={24}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/koii-network/"
      >
        <img
          src={`${baseUrl}/img/social-link-icons/github.svg`}
          alt="Github logo"
          width={24}
          height={24}
        />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/company/open-koi/"
      >
        <img src={`${baseUrl}/img/social-link-icons/linkedin.svg`} alt="linkedin" width={24} height={24} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/c/KoiiNetwork"
      >
        <img src={`${baseUrl}/img/social-link-icons/youtube.svg`} alt="linkedin" width={24} height={24} />
      </a>
    </div>
  );
}
export default SocialLinks