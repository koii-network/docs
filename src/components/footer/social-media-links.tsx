// import TwitterLightBlue from "@/public/images/twitter-lightblue.svg";
// import DiscordLightBlue from "@/public/images/discord-lightblue.svg";
// import TelegramLightBlue from "@/public/images/telegram-lightblue.svg";
// import YoutubeLightBlue from "@/public/images/youtube-lightblue.svg";
// import GithubLightBlue from "@/public/images/github-lightblue.svg";
// import LinkedinLightBlue from "@/public/images/linkedin-lightblue.svg";
import React from "react";

export const SocialMediaLinks = () => {
  return (
    <div className="flex flex-row items-center self-center justify-between gap-8 px-6 pb-6 align-bottom">
      <a href="https://twitter.com/KoiiNetwork">
        <Image
          src={TwitterLightBlue}
          alt="Twitter logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://discord.gg/koii">
        <Image
          src={DiscordLightBlue}
          alt="Discord logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://t.me/koiinetwork">
        <Image
          src={TelegramLightBlue}
          alt="Telegram logo"
          width={32}
          height={32}
        />
      </a>
      <a href="https://github.com/koii-network/">
        <Image src={GithubLightBlue} alt="Github logo" width={32} height={32} />
      </a>
      <a href="https://www.linkedin.com/company/open-koi/">
        <Image src={LinkedinLightBlue} alt="linkedin" width={32} height={32} />
      </a>
      <a href="https://www.youtube.com/c/KoiiNetwork">
        <Image src={YoutubeLightBlue} alt="linkedin" width={32} height={32} />
      </a>
    </div>
  );
};
