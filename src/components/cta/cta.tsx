import React, { ReactNode } from "react";

export const Cta = () => {
  return (
    <div className='w-full px-4 md:px-8 max-w-[1300px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-12'>
      <div className='w-full flex flex-col md:flex-row gap-6'>
        <a
          href='/concepts/introduction/welcome'
          className='w-full lg:max-w-[50%] bg-white no-underline shadow-lg hover:drop-shadow-lg transition-all duration-300 cursor-pointer'
          style={{
            textDecoration: "no-underline",
          }}
        >
          <img
            src={"/img/build-the-impossible.svg"}
            className='w-full'
            role='img'
          />
          <button className='p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer'>
            <p className='no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0'>
              Build on Koii Nodes
            </p>
            <p className="m-0 text-base">Build a DApp using Koii Tasks</p>
          </button>
        </a>
        <a
          href='/concepts/introduction/welcome'
          className='w-full lg:max-w-[50%] bg-white no-underline shadow-lg hover:drop-shadow-lg transition-all duration-300 cursor-pointer'
          style={{
            textDecoration: "no-underline",
          }}
        >
          <img src={"/img/run-a-task-node.svg"} className='w-full' role='img' />
          <button className='p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer'>
            <p className='no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0 '>
              Run a Node
            </p>
            <p className="m-0 text-base ">Rent your device to earn $KOII</p>
          </button>
        </a>
      </div>
    </div>
  );
};
