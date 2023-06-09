import React, { ReactNode } from "react";
import styles from "./cta.module.css";

export const Cta = () => {
  const handleClick = () => {
    window.gtag('event', 'click_run_node')
  }
  return (
    <div className='w-full px-4 md:px-8 max-w-[1300px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-8'>
      <div className='w-full flex flex-col md:flex-row gap-6'>
        <a
          href='/quickstart/hello-world/intro'
          className={'w-full lg:max-w-[50%] bg-white no-underline cursor-pointer border-x-[1px] border-b-[1px] border-solid border-t-0 border-inherit rounded-b-[10px]' + " " + styles.card}
          style={{
            textDecoration: "no-underline",
          }}
        >
          <img
            src={"/img/COLOR- Built the impossible.svg"}
            className='w-full rounded-t-[10px]'
            role='img'
          />
          <button className='p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline no-underline cursor-pointer border-none'>
            <p className='no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0'>
              Build on Koii Nodes
            </p>
            <p className="m-0 text-base">Deploy a hello-world app to our Community Cloud</p>
          </button>
        </a>
        <a
          href='https://koii.network/node'
          className={'w-full lg:max-w-[50%] bg-white no-underline cursor-pointer border-x-[1px] border-b-[1px] border-solid border-t-0 border-inherit rounded-b-[10px]' + " " + styles.card}
          style={{
            textDecoration: "no-underline",
          }}
          onClick={handleClick}
        >
          <img src={"/img/COLOR- Run a Task Node.svg"} className='w-full rounded-t-[10px]' role='img' />
          <button className='p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer'>
            <p className='no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0 '>
              Join the Digital Gig Economy
            </p>
            <p className="m-0 text-base ">Run automated jobs on your computer for passive income</p>
          </button>
        </a>
      </div>
    </div>
  );
};
