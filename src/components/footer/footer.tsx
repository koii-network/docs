import React from "react";

import {
  getInvolvedLinks,
} from "@site/src/config/links-config";
import { LinksSection } from "./links-section";
import { SocialMediaLinks } from "./social-media-links";
// import { Subscribe } from "@/components/subscribe/subscribe";
import { Policy } from "./policy";

export const KoiiFooter = () => {
  return (
    <footer className="relative bg-[#353570] app-footer pb-[100px] md:pb-[54px] text-white mt-[2rem]">
      <div className="container mx-auto md:pt-12">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex justify-center md:justify-start md:flex-start align-self items-center	font-semibold text-[30px] pb-6">
            <img src="/img/finnie-koii-logo-white.svg" alt="Koii logo" />

            <p className="text-[24px] mb-0">Don&apos;t Miss Out.</p>
          </div>
          <div className="flex flex-col md:justify-between md:items-start xl:flex-row">
            <div className="md:gap-14 md:flex md:flex-row">
              <LinksSection title="GET INVOLVED" links={getInvolvedLinks} />
              {/* <LinksSection title=" a" links={getInvolvedLinks} /> */}
            </div>

            <div className="md:hidden">
              <SocialMediaLinks />
            </div>

            {/* <Subscribe /> */}
          </div>

          <div className="mt-4 mb-3 border border-solid border-white md:mb-7" />

          <div className="flex flex-row justify-center md:last:justify-between">
            <Policy />

            <div className="hidden md:block">
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
