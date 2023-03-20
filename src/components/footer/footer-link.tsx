import React from "react";

type FooterLinkProps = {
  title: string;
  url: string;
};

export const FooterLink = ({ title, url }: FooterLinkProps) => (
  <li className="text-center md:text-sm text-normal md:text-left hover:underline">
      <a href={url} target="_blank">{title}</a>
  </li>
);
