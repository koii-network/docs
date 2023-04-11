import React from "react";

type FooterLinkProps = {
  title: string;
  url: string;
  target: string;
};

export const FooterLink = ({ title, url, target }: FooterLinkProps) => (
  <div className="md:text-sm text-normal md:text-left">
      <a className="text-white" href={url} target={target}>{title}</a>
  </div>
);
