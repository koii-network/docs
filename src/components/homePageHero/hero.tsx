import React from "react";
import Media from "./media";
import WelcomeComponent from "./welcome";

export const Hero = () => {
  return (
    <div className="w-full max-w-[1150px] px-8 justify-between flex flex-col lg:flex-row gap-5 lg:gap-10 items-center my-16 lg:my-24">
      <WelcomeComponent />
      <Media />
    </div>
  );
};
