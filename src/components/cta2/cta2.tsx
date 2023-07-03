import React from "react";
import styles from "./cta2.module.css";

export const Cta2 = () => {
  return (
    <div className="w-full px-4 md:px-8 max-w-[1300px] mx-auto flex flex-col gap-5 lg:gap-10 items-center mb-12">
      <div className="w-full flex flex-col md:flex-row gap-6">
        <a
          className={"w-full lg:max-w-[50%] cursor-pointer" + " " + styles.card}
          href="/develop/koii-task-101/what-are-tasks/"
        >
          <img
            src={"/img/Dev guide (1).svg"}
            className="w-full"
            role="img"
          />
        </a>
        <a
          className={"w-full lg:max-w-[50%] cursor-pointer" + " " + styles.card}
          href="/run-a-node/task-nodes/how-to-run-a-desktop-node"
        >
          <img
            src={"/img/Node Tutorial.svg"}
            className="w-full"
            role="img"
          />
        </a>
      </div>
    </div>
  );
};
