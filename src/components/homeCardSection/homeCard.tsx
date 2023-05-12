import React from "react";
import styles from "./card.module.css";
import { CardItem, Cards } from "./cardDetails";

const HomeCard = ({ title, link }: CardItem) => {
  return (
    <div
      className={
        styles.homeCard +
        " " +
        "flex items-center justify-center p-[1rem] sm:p-[2rem] lg:p-[3rem]"
      }
    >
      <a href={link} className={styles.homeCardLink}>
        <p className="text-sm  sm:text-xl font-medium m-0 text-center">
          {title}
        </p>
        {/* <p className='text-base my-3 text-graphite'>{description}</p> */}
      </a>
    </div>
  );
};

const HomeCards = ({ title, description, items }: Cards) => {
  return (
    <div className="lg:mb-10">
      <p className="font-semibold text-[40px] text-koii-purple-2 m-0 mb-4">{title}</p>
      <p className="text-base mb-6">{description}</p>

      <div className={"grid grid-cols-2 lg:grid-cols-4 gap-6"}>
        {items.map((item, indx) => (
          <HomeCard title={item.title} link={item.link} key={indx} />
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
