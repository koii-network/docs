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
            "w-full lg:max-w-[50%] bg-[transparent] no-underline hover:no-underline cursor-pointer h-full" +
            " " +
            styles.card
          }
          href="https://koii.network/node"
          style={{
            textDecoration: "no-underline",
          }}
          onClick={handleClick}
        >
          <div className={styles.img}>
            {" "}
            <img
              src={"img/Group 3.svg"}
              className={"w-full rounded-t-[10px]"}
              role="img"
            />
            <img src={"img/Group 6.svg"} className={styles.img2} role="img" />
            <h2
              className={
                "no-underline hover:no-underline text-[#171753] lg:text-3xl text-lg" +
                " " +
                styles.ctaText1
              }
            >
              Distributed Computing
            </h2>
          </div>
          <button
            className={
              "p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer" +
              " " +
              styles.cardButton
            }
          >
            <p
              className={
                "no-underline hover:no-underline w-full flex items-start font-semibold m-0 lg:text-2xl text-lg pt-5 pb-3" +
                " " +
                styles.cardText
              }
            >
              Get the quick-start developer guide.
            </p>
          </button>
        </a>
        <a
          className={
            "w-full lg:max-w-[50%] bg-white no-underline cursor-pointer h-full mt-8 md:mt-8 md:mt-0" +
            " " +
            styles.card
          }
          href="https://koii.network/node"
          style={{
            textDecoration: "no-underline",
          }}
          onClick={handleClick}
        >
          <div className={styles.img}>
            {" "}
            <img
              src={"img/Group 5.svg"}
              className={"w-full rounded-t-[10px]"}
              role="img"
            />
            <img src={"img/Group 7.svg"} className={styles.img3} role="img" />
            <h2
              className={
                "no-underline hover:no-underline text-[#171753]" +
                " " +
                styles.ctaText2
              }
            >
              What are Koii Nodes?
            </h2>
          </div>
          <button
            className={
              "p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer" +
              " " +
              styles.cardButton
            }
          >
            <p
              className={
                "no-underline hover:no-underline w-full flex items-start font-semibold m-0 lg:text-2xl md:text-base text-lg pt-5 pb-3" +
                " " +
                styles.cardText
              }
            >
              This node tutorial makes it easy to join.
            </p>
          </button>
        </a>
      </div>
    </div>
  );
};
