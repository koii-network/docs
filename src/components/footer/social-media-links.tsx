import React from "react";

export const SocialMediaLinks = () => {
  return (
    <div className="flex justify-evenly md:justify-between gap-2 md:mt-[0.5rem] laptop-sm:mt-0 laptop-sm:gap-4 laptop-sm:pt-[1rem] md:mb-0 my-6">
      <a href="https://twitter.com/KoiiNetwork">
        <img
          src="/img/media/twitter.svg"
          alt="Twitter logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://discord.gg/koii-network">
        <img
          src="/img/media/discord.svg"
          alt="Discord logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://t.me/koiinetwork">
        <img
          src="/img/media/telegram.svg"
          alt="Telegram logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://github.com/koii-network/">
        <img src="/img/media/github.svg" alt="Github logo" width={32} height={32} />
      </a>
      <a href="https://www.linkedin.com/company/open-koi/">
        <img src="/img/media/linkedin.svg" alt="linkedin" width={32} height={32} />
      </a>
      <a href="https://www.youtube.com/c/KoiiNetwork">
        <img src="/img/media/youtube.svg" alt="linkedin" width={32} height={32} />
      </a>
    </div>
  );
};
