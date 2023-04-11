import React from "react";

type FooterLinkProps = {
  title: string;
  url: string;
  target: string;
};

export const FooterLink = ({ title, url, target }: FooterLinkProps) => (
  <div className="text-[12px] md:text-[14px]">
      <a className="text-white" href={url} target={target}>{title}</a>
  </div>
);
