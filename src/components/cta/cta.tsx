import React, { ReactNode } from "react";
import styles from "./cta.module.css";


import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export const Cta = () => {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig.customFields;
  const handleClick = () => {
    window.gtag("event", "click_run_node");
  };
  return (
    <div className="w-full px-4 md:px-8 max-w-[1300px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-8">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <a
          href={`${baseUrl}/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk`}
          className={
            "w-full lg:max-w-[50%] bg-white no-underline cursor-pointer border-x-[1px] border-b-[1px] border-solid border-t-0 border-inherit rounded-b-[10px]" +
            " " +
            styles.card
          }
          style={{
            textDecoration: "none",
          }}
        >
          <img
            src={`${baseUrl}/img/COLOR-%20Built%20the%20impossible.svg`}
            alt="Built the impossible: computer and laptop with a crane and windmill"
            className="w-full rounded-t-[10px]"
          />
          <button className="p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline no-underline cursor-pointer border-none">
            <p className="no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0">
            Become a Web3 Developer
            </p>
            <p className="m-0 text-base">
            Check our Koii SDK usage
            </p>
          </button>
        </a>

        <a
          href="https://github.com/koii-network/ezsandbox"
          className={
            "w-full lg:max-w-[50%] bg-white no-underline cursor-pointer border-x-[1px] border-b-[1px] border-solid border-t-0 border-inherit rounded-b-[10px]" +
            " " +
            styles.card
          }
          style={{
            textDecoration: "none",
          }}
          onClick={handleClick}
        >
          <img
          src={`${baseUrl}/img/COLOR-%20Run%20a%20Task%20Node.svg`}
            className="w-full rounded-t-[10px]"
          />
          <button className="p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer">
            <p className="no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0 ">
            Write a Task Now
            </p>
            <p className="m-0 text-base ">
            Deploy an application on Koii Node
            </p>
          </button>
        </a>
        {/*         <a
          className={
            "lg:max-w-[50%] bg-white no-underline cursor-pointer border-x-[1px] border-b-[1px] border-solid border-t-0 border-inherit rounded-b-[10px]" +
            " " +
            styles.card
          }
          style={{
            textDecoration: "none",
          }}
          onClick={handleClick}
        >
          <ReactPlayer
            url="https://www.youtube.com/watch?v=p4m4qThshfg&ab_channel=KoiiNetwork"
            width="330px"
            height="330px"
            config={{
              youtube: {
                playerVars: {
                  controls: 0, // hide the video controls
                  showinfo: 0, // hide information like the video title
                  rel: 0, // disable related videos at the end
                  iv_load_policy: 3, // hide annotations
                  modestbranding: 1, // hide Youtube logo
                },
              },
            }}
          />
        </a> */}
      </div>
    </div>
  );
};
