import React from "react";
import { FooterLink } from "./footer-link";

export const Policy = () => {
  return (
    <div className="mb-3 md:mb-0">
      <div className="flex flex-wrap gap-4 md:gap-10">
        <FooterLink
          title={"Terms of Service"}
          url={"https://www.koii.network/Koii_TOU_Oct_24_2023.pdf"}
          target={"_blank"}
        />
        <FooterLink
          title={"Privacy Policy"}
          url={"https://www.koii.network/Privacy_Policy.pdf"}
          target={"_blank"}
        />
        <FooterLink
          title={"© Koii Foundation 2024, All Rights Reserved."}
          url={"https://www.koii.network/"}
          target={"_blank"}
        />
      </div>
    </div>
  );
};
