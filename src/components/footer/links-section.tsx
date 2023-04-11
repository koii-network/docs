import tailwindConfig from "@site/tailwind.config";
import React from "react";
import { FooterLink } from "./footer-link";

type LinksSectionProps = {
  title: string;
  links?: Array<{ label: string; url: string, target?: string }>;
};

export const LinksSection = ({ title, links= [] }: LinksSectionProps) => {
  return (
    <div className="mb-[32px]">
      <h3 className="mb-2 text-base font-semibold uppercase md:text-left text-[#9BE7C4] ">
        {title}
      </h3>
      <div className="mt-6 text-[16px] grid grid-rows-3 md:grid-flow-col gap-y-4 gap-x-20">
        {links.map(({ label, url, target }) => {
          return <FooterLink title={label} url={url} target={target} key={label} />;
        })}
      </div>
    </div>
  );
};
