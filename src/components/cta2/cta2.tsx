import React from "react";
import styles from "./cta2.module.css";

export const Cta2 = () => {
  return (
    <div className="w-full px-4 md:px-8 max-w-[1300px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-12">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <a
          className={"w-full lg:max-w-[50%] cursor-pointer" + " " + styles.card}
          href="/quickstart/hello-world/intro"
        >
          <img
            src={"/img/Group 3231.svg"}
            className="w-full"
            role="img"
          />
        </a>
        <a
          className={"w-full lg:max-w-[50%] cursor-pointer" + " " + styles.card}
          href="https://www.koii.network/node"
          target="_blank"
        >
          <img
            src={"/img/Group 3230.svg"}
            className="w-full"
            role="img"
          />
        </a>
      </div>
    </div>
  );
};
