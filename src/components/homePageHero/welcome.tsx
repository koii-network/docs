import React from "react";

const WelcomeComponent = () => {
  return (
    <div className="mt-16 mb-5 mx-auto xl:max-w-[1300px] lg:max-w-[1024px] w-100 px-[2rem]">
      <h1 className="text-koii-purple-2 font-semibold text-[40px] leading-[48px]">
        Welcome to Koii Docs
      </h1>
      <h2 className="text-graphite text-lg leading-[34px] font-normal">
        We built Koii to make the internet better for everyone. How will you
        push the web forward?
      </h2>
      {/* <p className="text-graphite laptop-sm:text-[14px] mb-[10px] lg:text-[16px] text-[16px]">
        Our mission at Koii is to provide the infrastructure to produce better
        decentralized applications and make it easier for developers and
        community members to participate at any level.
      </p>
      <p className="text-graphite laptop-sm:text-[14px] m-0 lg:text-[16px] text-[16px]">
        We want tools like Ethereum, Filecoin, and so many other important
        innovations to be easily accessible—used by anyone around the world
        through simplified templates and tools—while still being transparent,
        trustworthy, and rewarding contributors.
      </p> */}
    </div>
  );
};

export default WelcomeComponent;
