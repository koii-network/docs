import TwitterLightBlue from "@site/static/img/twitter-lightblue.svg";
import DiscordLightBlue from "@site/static/img/discord-lightblue.svg";
import TelegramLightBlue from "@site/static/img/telegram-lightblue.svg";
import YoutubeLightBlue from "@site/static/img/youtube-lightblue.svg";
import GithubLightBlue from "@site/static/img/github-lightblue.svg";
import LinkedinLightBlue from "@site/static/img/linkedin-lightblue.svg";
import React from "react";

export const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row items-center self-center justify-between gap-8 px-6 pb-6 align-bottom">
      <a href="https://twitter.com/KoiiNetwork">
        <img
          src={TwitterLightBlue}
          alt="Twitter logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://discord.gg/koii">
        <img
          src={DiscordLightBlue}
          alt="Discord logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://t.me/koiinetwork">
        <img
          src={TelegramLightBlue}
          alt="Telegram logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://github.com/koii-network/">
        <img src={GithubLightBlue} alt="Github logo" width={32} height={32} />
      </a>
      <a href="https://www.linkedin.com/company/open-koi/">
        <img src={LinkedinLightBlue} alt="linkedin" width={32} height={32} />
      </a>
      <a href="https://www.youtube.com/c/KoiiNetwork">
        <img src={YoutubeLightBlue} alt="linkedin" width={32} height={32} />
      </a>
    </div>
  );
};
