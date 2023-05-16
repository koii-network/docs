import React, { ReactNode } from "react";
import { Button } from "../buttons";

export const Discord = () => {
  return (
    <div className='py-10 lg:pt-40 lg:pb-64 px-4 lg:px-8 flex gap-7 w-full lg:max-w-[1400px] mx-auto'>
      <img
        src='/img/cell-one.svg'
        alt='Discord logo'
        className='w-full hidden lg:flex max-w-[336px]'
      />
      <div className='w-full flex flex-col items-center gap-9'>
        <p className='text-2xl text-koii-purple-2 text-center -tracking-tight mb-0 font-semibold'>
          Still have questions? Reach out in our Discord.
        </p>
        <a
          href='https://www.discord.gg/koii'
          className='w-full max-w-[240px] hover:opacity-90'
          target='_blank'
        >
          <Button>Join the Discord</Button>
        </a>
      </div>
      <img
        src='/img/cell-two.svg'
        alt='Discord logo'
        className='w-full hidden lg:flex max-w-[336px]'
      />
    </div>
  );
};
