import React, { ReactNode } from "react";
import styles from "./cta2.module.css";

export const Cta2 = () => {
  const handleClick = () => {
    window.gtag("event", "click_run_node");
  };
  return (
    <div className="w-full px-4 md:px-8 max-w-[1300px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-8 mt-5">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <a
          className={
            "w-full lg:max-w-[50%] bg-[transparent] no-underline hover:no-underline cursor-pointer flex justify-around h-[120px] items-center" +
            " " +
            styles.card1
          }
          href="/tutorials/koii-apps/introduction"
          style={{
            textDecoration: "no-underline",
          }}
          onClick={handleClick}
        >
          <div className={"md:pl-5 pl-3" + " " + styles.img}>
            <img src={"img/Group 6.svg"} className={"w-full"} role="img" />
          </div>
          <div className="md:pr-5 pr-3">
            <h2
              className={
                "no-underline hover:no-underline text-[#171753] m-0" +
                " " +
                styles.ctaText1
              }
            >
              Koii Apps
            </h2>
            <p
              className={
                "no-underline hover:no-underline w-full flex items-start font-semibold m-0" +
                " " +
                styles.ctaText2
              }
            >
              Start with a ready-to-deploy template.
            </p>
          </div>
        </a>
        <a
          className={
            "w-full lg:max-w-[50%] bg-white no-underline hover:no-underline cursor-pointer mt-8 md:mt-0 flex justify-around h-[120px] items-center" +
            " " +
            styles.card2
          }
          href="/concepts/introduction/welcome"
          style={{
            textDecoration: "no-underline",
          }}
          onClick={handleClick}
        >
          <div className="md:pl-5 pl-3">
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
            <img src={"img/Group 32.svg"} className={"w-full"} role="img" />
          </div>
        </a>
      </div>
    </div>
  );
};
