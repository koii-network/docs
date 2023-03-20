import React from "react";

// import {
//   companyLinks,
//   getInTouchLinks,
//   getInvolvedLinks,
// } from "config/links-config";
import { LinksSection } from "./links-section";
import { SocialMediaLinks } from "./social-media-links";
// import { Subscribe } from "@/components/subscribe/subscribe";
import FinnieLogo from "@/public/images/finnie-koii-logo-white.svg";
import { Policy } from "./policy";

export const Footer = () => {
  return (
    <footer className="relative bg-koiipurpledark app-footer pb-[100px] md:pb-[54px] text-white">
      <div className="container mx-auto md:pt-12">
        <div className="max-w-[1060px] mx-auto">
          <div className="flex justify-center md:justify-start md:flex-start align-self items-center	font-semibold text-[30px] pb-6">
            <img src="/static/img/KoiiNetwork-logo_128.png" alt="Koii logo" />

            <h2>Don&apos;t Miss Out.</h2>
          </div>
          <div className="flex flex-col items-center md:justify-between xl:items-start xl:flex-row">
            <div className="md:gap-14 md:flex md:flex-row">
              {/* <LinksSection title="COMPANY" links={companyLinks} />
              <LinksSection title="GET INVOLVED" links={getInvolvedLinks} />
              <LinksSection title="GET IN TOUCH" links={getInTouchLinks} /> */}
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
