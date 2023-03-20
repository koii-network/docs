import { FooterLink } from "./footer-link";

export const Policy = () => {
  return (
    <div className="mb-3 md:mb-0">
      <ul className="flex flex-wrap justify-center gap-2 md:gap-6">
        <FooterLink title={"Privacy Policy"} url={"/Privacy_Policy.pdf"} />
        <FooterLink title={"Terms of Service"} url={"/TOU_June_22_2021.pdf"} />
      </ul>
    </div>
  );
};
