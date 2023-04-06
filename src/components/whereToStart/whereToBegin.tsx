import React, { ReactNode } from "react";
import { Button } from "../buttons";

export const WhereToBegin = () => {
  const sections = [
    {
      name: "What is Koii?",
      image: "/img/what-is-koii.svg",
      link: "/concepts/koii-summary/welcome",
    },
    {
      name: "Earn with Koii",
      image: "/img/earn-with-koii.svg",
      link: "/concepts/earning-koii/network-economics",
    },
    // {
    //   name: "Use cases of Koii",
    //   image: "/img/koii-use-case.svg",
    //   link: "/develop/microservices-and-tasks/what-are-tasks/",
    // },
    {
      name: "Developer Toolkit",
      image: "/img/developer-toolkit.svg",
      link: "/develop/koii-software-toolkit-sdk/what-is-the-koii-sdk",
    },
    {
      name: "Koii-X for dApps",
      image: "/img/koii-dapp.svg",
      link: "/develop/build-dapps-with-koii/welcome-to-koii-x/",
    },
  ];

  return (
    <div className="w-full px-4 laptop-sm:px-8 max-w-[1350px] mx-auto flex flex-col items-center text-koii-purple-2 font-semibold">
      <p className="text-3xl leading-10 mb-0">Not sure where to begin?</p>
      <p className="text-2xl mb-8 lg:mb-16"> Start here.</p>
      <div className="w-full flex flex-col gap-10 md:grid laptop-sm:grid-cols-4 md:grid-cols-2 laptop-sm:gap-6">
        {sections.map((section) => {
          return (
            <a
              href={section.link}
              className="w-full flex flex-col gap-6 max-w-[320px] mx-auto lg:max-w-auto"
            >
              <Button>{section.name}</Button>
              <img src={section.image} alt="Discord logo" className="w-full" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
