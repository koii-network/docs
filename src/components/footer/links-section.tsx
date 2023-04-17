import React from "react";
import { FooterLink } from "./footer-link";

type LinksSectionProps = {
  title: string;
  links?: Array<{ label: string; url: string; target?: string }>;
};

export const LinksSection = ({ title, links = [] }: LinksSectionProps) => {
  return (
    <div className="laptop-sm:mt-[1rem] text-[16px] grid grid-rows-3 grid-flow-col gap-y-2 md:gap-y-4 gap-x-6 xl:gap-x-20 ">
      <h3 className="mb-0 text-base font-semibold  uppercase md:text-left text-[#9BE7C4] ">
        {title}
      </h3>
      {links.map(({ label, url, target }) => {
        return (
          <FooterLink title={label} url={url} target={target} key={label} />
        );
      })}
    </div>
  );
};
