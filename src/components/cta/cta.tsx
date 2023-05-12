import React, { ReactNode } from "react";

export const Cta = () => {
  return (
    <div className='w-full px-4 md:px-8 max-w-[1350px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-24'>
      <div className='w-full flex flex-col md:flex-row gap-6'>
        <a
          href='/concepts/introduction/welcome'
          className='w-full lg:max-w-[50%] bg-white no-underline shadow-lg hover:drop-shadow-lg transition-all duration-300 cursor-pointer'
          style={{
            textDecoration: "no-underline",
          }}
        >
          <img
            src={"/img/What_is_the_Koii_SDK_.svg"}
            className='w-full'
            role='img'
          />
          <button className='p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-lg text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer'>
            <p className='no-underline hover:no-underline w-full flex items-start font-semibold'>
              Build an app using Koii
            </p>
            <p>
              Get a sync of all your data between different nodes, to have the
              latest updated data
            </p>
          </button>
        </a>
        <a
          href='/concepts/introduction/welcome'
          className='w-full lg:max-w-[50%] bg-white no-underline shadow-lg hover:drop-shadow-lg transition-all duration-300 cursor-pointer'
          style={{
            textDecoration: "no-underline",
          }}
        >
          <img
            src={"/img/Running_a_K2_Node.svg"}
            className='w-full'
            role='img'
          />
          <button className='p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-lg text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer'>
            <p className='no-underline hover:no-underline w-full flex items-start font-semibold mb-2.5'>
              Run a Node
            </p>
            <p>Break your DB into pieces and store across multiple devices</p>
          </button>
        </a>
      </div>
    </div>
  );
};
