import React from "react";
import styles from "./card.module.css";
import { CardItem, Cards } from "./cardDetails";

const HomeCard = ({ title, link, image }: CardItem) => {
  return (
    <a href={link} className={styles.homeCardLink}>
      <img src={image} className={styles.image} />
    </a>
  );
};

const HomeCards = ({ title, description, items }: Cards) => {
  return (
    <div className="lg:mb-10">
      <p className="font-semibold text-[40px] text-koii-purple-2 m-0 mb-4">
        {title}
      </p>
      <p className="text-base mb-6">{description}</p>

      <div className={"grid grid-cols-2 lg:grid-cols-4 gap-6"}>
        {items.map((item, indx) => (
          <HomeCard
            title={item.title}
            link={item.link}
            image={item.image}
            key={indx}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCards;