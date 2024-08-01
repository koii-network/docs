import React from "react";

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const SocialMediaLinks = () => {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig.customFields;
  return (
    <div className="flex justify-evenly md:justify-between gap-2 md:mt-[0.5rem] laptop-sm:mt-0 laptop-sm:gap-4 laptop-sm:pt-[1rem] md:mb-0 my-6">
      <a href="https://x.com/KoiiFoundation">
        <img
          src={`${baseUrl}/img/media/twitter.svg`}
          alt="Twitter logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://discord.com/invite/koii-network">
        <img
          src={`${baseUrl}/img/media/discord.svg`}
          alt="Discord logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://t.me/koiinetwork">
        <img
          src={`${baseUrl}/img/media/telegram.svg`}
          alt="Telegram logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://github.com/koii-network/">
        <img src={`${baseUrl}/img/media/github.svg`} alt="Github logo" width={32} height={32} />
      </a>
      <a href="https://www.linkedin.com/company/koii-network/">
        <img src={`${baseUrl}/img/media/linkedin.svg`} alt="linkedin" width={32} height={32} />
      </a>
      <a href="https://www.youtube.com/c/KoiiNetwork">
        <img src={`${baseUrl}/img/media/youtube.svg`} alt="linkedin" width={32} height={32} />
      </a>
    </div>
  );
};
