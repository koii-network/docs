import React from "react";
import ReactPlayer from "react-player";
import { Button } from "../buttons";

export const GrantArea = () => {
  const url =
    "https://www.youtube.com/watch?v=p4m4qThshfg&ab_channel=KoiiNetwork";

  return (
    <>
      <div>
        <div className="mb-10 mx-auto xl:max-w-[1300px] lg:max-w-[1024px] w-100 px-[2rem]">
          <p className="text-koii-purple-2 font-semibold text-[40px] leading-[48px] text-center mt-16 mb-5">
          Funding Your Journey on Koii
          </p>
          <p className="text-graphite text-lg leading-[34px] text-center mb-5">
          Apply now for a <strong>$50,000</strong> grant to cover your compute costs for up to a year.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="player-wrapper w-1/3 min-w-[300px]">
          <ReactPlayer className="react-player" url={url} width="100%" />
        </div>
        <a
          href="https://www.koii.network/grants"
          className="w-full max-w-[240px] hover:opacity-90 mt-5"
          target="_blank"
        >
          <button className="py-3.5 px-5 w-full rounded-md border-none no-underline hover:no-underline text-koii-purple-2 font-semibold drop-shadow-lg font-base tracking-wider bg-koii-white cursor-pointer">
            Learn More
          </button>
        </a>
      </div>
    </>
  );
};
