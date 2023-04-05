import React from "react";
import { exploreTopics } from "./exploreTopicsList";

export const ExploreTopics = () => {
  return (
    <section>
      <div className=" xl:max-w-[1300px] lg:max-w-[1024px] px-[2rem] lg:px-[2rem] mx-auto">
        <p className="text-center text-koii-purple-2 m-0 font-semibold text-[40px] mb-[4rem]">
          {" "}
          Explore by Topic{" "}
        </p>{" "}
        <div className="grid md:justify-items-center laptop-sm:grid-cols-4 sm:grid-cols-2 gap-10 lg:gap-6 my-[2rem] lg:my-[30px]">
          {exploreTopics.map((element) => (
            <div key={element.title}>
              <p className="laptop-sm:hidden xl:block text-center text-koii-purple-2 font-semibold text-[24px] m-0 mb-[40px] leading-[32px]">
                {element.title}
              </p>
              <p className="hidden laptop-sm:block xl:hidden text-center  text-koii-purple-2 font-semibold laptop-sm:text-[20px] text-[24px] lg:text-[24px] m-0 mb-[30px] leading-[32px]">
                {element.title === "Understanding Koii" ? (
                  <>
                    Understanding <br /> Koii
                  </>
                ) : element.title === "Koii Products" ? (
                  <>
                    Koii <br /> Products
                  </>
                ) : element.title === "Developer Toolkit" ? (
                  <>
                    Developer <br /> Toolkit
                  </>
                ) : element.title === "Community & Support" ? (
                  <>
                    Community & <br /> Support
                  </>
                ) : (
                  ""
                )}
              </p>
              {element.items.map((item) => (
                <div className="flex items-center my-[20px] mx-auto">
                  <a
                    target={
                      item.link.substring(0, 8) === "https://" && "_blank"
                    }
                    href={item.link}
                  >
                    {" "}
                    <img
                      // width={50}
                      height={50}
                      className="laptop-sm:w-[40px] lg:w-[50px] w-[50px] max-w-none"
                      src={item.icon}
                      alt={item.title}
                    />
                  </a>
                  <a
                    className="font-[700] text-koii-purple-2 pl-[20px] lg:text-[16px] laptop-sm:text-[14px]"
                    target={
                      item.link.substring(0, 8) === "https://" && "_blank"
                    }
                    href={item.link}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
