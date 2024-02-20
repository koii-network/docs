import React from "react";
import { FooterLink } from "./footer-link";

export const Policy = () => {
  return (
    <div className="mb-3 md:mb-0">
      <div className="flex flex-wrap gap-4 md:gap-10">
        <FooterLink title={"Terms of Service"} url={"https://www.koii.network/terms"} target={"_blank"} />
        <FooterLink title={"Privacy Policy"} url={"https://www.koii.network/privacy"} target={"_blank"}  />
        <FooterLink
          title={"© Koii Foundation 2023, All Rights Reserved."}
          url={"https://www.koii.network/"}
          target={"_blank"} 
        />
      </div>
    </div>
  );
};
