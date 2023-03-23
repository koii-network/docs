import React, {ReactNode} from "react";

export const WhatToDo = () => {
  return (
   <div className="w-full px-4 lg:px-8 max-w-[1096px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-24">
    <p className="text-koii-purple-3 font-semibold text-[40px] leading-[48px]">What do you want to do now?</p>
    <div className="w-full flex flex-col lg:flex-row gap-6">
      <a href="/concepts/koii-summary/welcome" className="w-full lg:max-w-[50%] lg:h-44">
        <img
          src="/img/new-web.svg"
          alt="Discord logo"
          className="w-full"
        />
      </a>
       <a href="/develop/settlement-layer/k2-tick-tock-fast-blocks" className="w-full lg:max-w-[50%] lg:h-44">
        <img
          src="/img/build-impossible.svg"
          alt="Discord logo"
          className="w-full"
        />
      </a>
    </div>
   </div>
  );
};
