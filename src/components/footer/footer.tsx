import React from "react";
import { LinksSection } from "./links-section";
import { SocialMediaLinks } from "./social-media-links";
import { Policy } from "./policy";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const KoiiFooter = () => {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig.customFields as { baseUrl: string };

  const getInvolvedLinks = [
    {
      label: "Run a Node",
      url: `${baseUrl}/run-a-node/task-nodes/how-to-run-a-koii-node`,
    },
    {
      label: "Get Finnie",
      url: "https://chrome.google.com/webstore/detail/finnie/cjmkndjhnagcfbpiemnkdpomccnjblmj",
      target: "_blank",
    },
    {
      label: "Founders Program",
      url: `${baseUrl}/koii/ways-to-get-koii/grants-program`,
    },
    {
      label: "Download Koii Node",
      url: "https://www.koii.network/nodes",
      target: "_blank",
    },
    {
      label: "Apply for a Grant",
      url: "https://share.hsforms.com/16Xmwya9wQcClwavDXdtlJQc20dg",
    },
    {
      label: "Whitepaper",
      url: "https://www.koii.network/whitepaper.pdf",
      target: "_blank",
    },
  ];

  return (
    <footer className="bg-[#353570] py-[2rem] text-white">
      <div className=" mx-[1.5rem] xl:mx-[6rem] bg-[rd] laptop-sm:pt-[0.5rem]">
        <div className="md:flex justify-between">
          <div className="laptop-sm:flex justify-between gap-6 xl:gap-20">
            <div className="flex font-semibold mb-[1rem] laptop-sm:mb-0 ">
              <img
                src={`${baseUrl}/img/finnie-koii-logo-white.svg`}
                alt="Koii logo"
                width={50}
                height={50}
              />

              <p className="text-[24px] flex items-center laptop-sm:block mb-0 laptop-sm:mt-[0.5rem]">
                Don&apos;t Miss Out!
              </p>
            </div>

            <div className=" md:flex md:flex-row">
              {" "}
              <LinksSection title="GET INVOLVED" links={getInvolvedLinks} />
            </div>
          </div>
          <SocialMediaLinks />
        </div>

        <div className=" border border-solid border-[#8989C7] my-[1rem]" />

        <Policy />
      </div>
    </footer>
  );
};
