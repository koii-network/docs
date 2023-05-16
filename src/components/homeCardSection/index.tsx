import React from "react";
import { cardDetails } from "./cardDetails";
import HomeCards from "./homeCard";

export default function Index() {
  return (
    <div   className={
      "mx-auto mt-5 mb-20 xl:max-w-[1300px] lg:max-w-[1024px] px-[2rem] w-100"
    }>
      {cardDetails.map((item, indx) => (
        <HomeCards
          title={item.title}
          description={item.description}
          items={item.items}
          key={indx}
        />
      ))}
    </div>
  );
}
