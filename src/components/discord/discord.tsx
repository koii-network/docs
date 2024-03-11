import React, { ReactNode } from "react";
import { Button } from "../buttons";

export const Discord = () => {
  return (
    <div className="py-10 lg:pt-20 lg:pb-20 px-4 lg:px-8 flex gap-7 w-full lg:max-w-[1400px] mx-auto">
      <img
        src="/img/cell-one.svg"
        alt="Discord logo"
        className="w-full hidden lg:flex max-w-[336px]"
      />
      <div className="w-full flex flex-col items-center gap-9">
        <p className="text-2xl text-koii-purple-2 text-center -tracking-tight mb-0 font-semibold">
          Any questions? Join our Discord.
        </p>
        <a
          href="https://discord.com/invite/koii-network"
          className="w-full max-w-[240px] hover:opacity-90"
          target="_blank"
        >
          <Button>Koii Discord</Button>
        </a>
      </div>
      <img
        src="/img/cell-two.svg"
        alt="Discord logo"
        className="w-full hidden lg:flex max-w-[336px]"
      />
    </div>
  );
};
