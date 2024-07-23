import React, { ReactNode } from "react";
import styles from "./cta2.module.css";

export const Cta2 = () => {
  const handleClick = () => {
    window.gtag("event", "click_run_node");
  };
  return (
    <div className="w-full px-4 md:px-8 max-w-[1300px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-8 mt-5">
      <div className="flex flex-col w-full gap-6 md:flex-row">
        <a
          className={
            "w-full lg:max-w-[50%] bg-[transparent] no-underline hover:no-underline cursor-pointer flex justify-around h-[120px] items-center" +
            " " +
            styles.card1
          }
          href="/run-a-node/task-nodes/how-to-run-a-koii-node"
          style={{
            textDecoration: "none",
          }}
          onClick={handleClick}
        >
          <div className={"md:pl-5 pl-3" + " " + styles.img}>
            <img src={"/docs/img/Group%206.svg"} alt={"window browser with checkmark"} className={"w-full"}/>
          </div>
          <div className="pr-3 md:pr-5">
            <h2
              className={
                "no-underline hover:no-underline text-[#171753] m-0" +
                " " +
                styles.ctaText1
              }
            >
            How to get tokens
            </h2>
            <p
              className={
                "no-underline hover:no-underline w-full flex items-start font-semibold m-0" +
                " " +
                styles.ctaText2
              }
            >
              Learn how to get tokens with the desktop node
            </p>
          </div>
        </a>
        <a
          className={
            "w-full lg:max-w-[50%] bg-white no-underline hover:no-underline cursor-pointer mt-8 md:mt-0 flex justify-around h-[120px] items-center" +
            " " +
            styles.card2
          }
          href="/docs/concepts/introduction/welcome"
          style={{
            textDecoration: "none",
          }}
          onClick={handleClick}
        >
          <div className="pl-3 md:pl-5">
            <h2
              className={
                "no-underline hover:no-underline text-[#171753] m-0" +
                " " +
                styles.ctaText1
              }
            >
              Introduction to Koii
            </h2>
            <p
              className={
                "no-underline hover:no-underline w-full flex items-start font-semibold m-0" +
                " " +
                styles.ctaText2
              }
            >
              Welcome to the New Internet.
            </p>
          </div>
          <div className={"md:pr-5 pr-3" + " " + styles.img}>
            <img src={"/docs/img/Group%2032.svg"} alt={"browser window"} className={"w-full"} />
          </div>
        </a>
      </div>
    </div>
  );
};
