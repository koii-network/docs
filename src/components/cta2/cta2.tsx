import React, { ReactNode } from "react";
import styles from "./cta2.module.css";

export const Cta2 = () => {
  const handleClick = () => {
    window.gtag("event", "click_run_node");
  };
  return (
    <div className="w-full px-4 md:px-8 max-w-[1300px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-8">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <div
          className={
            "w-full lg:max-w-[50%] bg-white no-underline cursor-pointer rounded-b-[10px]" +
            " " +
            styles.card
          }
        >
          <a
            href="https://koii.network/node"
            style={{
              textDecoration: "no-underline",
            }}
            onClick={handleClick}
          >
            <img
              src={"/img/Developer Guide.svg"}
              className={"w-full rounded-t-[10px]"}
              role="img"
            />
            <button
              className={
                "p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer" +
                " " +
                styles.cardButton
              }
            >
              <p className="no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0 ">
                Get the quick-start developer guide.
              </p>
            </button>
          </a>
        </div>
        <div
          className={
            "w-full lg:max-w-[50%] bg-white no-underline cursor-pointer rounded-b-[10px]" +
            " " +
            styles.card
          }
        >
          <a
            href="https://koii.network/node"
            style={{
              textDecoration: "no-underline",
            }}
            onClick={handleClick}
          >
            <img
              src={"/img/Node tutorial no bkg.svg"}
              className="w-full rounded-t-[10px]"
              role="img"
            />
            <button
              className={
                "p-4 bg-transparent w-full flex-col text-koii-purple-2 items-start text-start tracking-wider justify-start hover:no-underline border-none no-underline cursor-pointer" +
                " " +
                styles.cardButton
              }
            >
              <p className="no-underline hover:no-underline w-full flex items-start font-semibold text-2xl m-0 ">
                This node tutorial makes it easy to join.
              </p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
