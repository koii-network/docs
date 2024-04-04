import React from 'react';
import styles from './card.module.css';
import { cardImages } from './cardImages';

type CardItem = {
  title?: string;
  description?: string; 
  link?: string; 
  linkText?: string; 
  svgName?: string; 
  cardPerRow?: string;
};

function CardSpecial ({title, description, link, linkText, svgName, cardPerRow="3"}:CardItem) {
    const image = cardImages[svgName]
    const target = link.includes('https') ? '_blank' : ''
  return (
    <a href={link} className={styles.card} style={{width: `calc((100% / ${cardPerRow}) - 20px)`}} target={target}>
         {
          image && (
            <img src={image} className={styles.cardSvg}/>
          )
         }
        <div className={styles.textContainer}>
            <div  dangerouslySetInnerHTML={{__html: title}}/>
           <div dangerouslySetInnerHTML={{__html: description}}/>
            <a href={link}>{linkText}</a>
        </div>
    </a>
  );
}


export function CardsSpecial({children}): JSX.Element {
  return (
    <section>
      <div>
        <div className={styles.cardContainer}>
            {children}
        </div>
      </div>
    </section>
  );
}

export default CardSpecial;
