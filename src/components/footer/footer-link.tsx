import React from "react";

type FooterLinkProps = {
  title: string;
  url: string;
  target: string;
};

export const FooterLink = ({ title, url, target }: FooterLinkProps) => (
  <li className="text-center md:text-sm text-normal md:text-left">
      <a className="text-white" href={url} target={target}>{title}</a>
  </li>
);
