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

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function CardSpecial({ title, description, link, linkText, svgName, cardPerRow = "3" }) {
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig.customFields;
  const SvgImage = cardImages[svgName];
  console.log(cardImages[svgName]);
  const target = link && link.includes('https') ? '_blank' : '';

  return (
    <a href={link} className={styles.card} style={{ width: `calc((100% / ${cardPerRow}) - 20px)` }} target={target} rel="noopener noreferrer">
      {
        SvgImage && (
          <SvgImage className={styles.cardSvg} alt={title} />
        )
      }
      <div className={styles.textContainer}>
        <div dangerouslySetInnerHTML={{ __html: title || '' }} />
        <div dangerouslySetInnerHTML={{ __html: description || '' }} />
        <a href={`${link.includes('https') ? '' : baseUrl}${link}`}>{linkText}</a>
      </div>
    </a>
  );
}

export function Card ({title, description, link, linkText, svgName, cardPerRow="3"}:CardItem) {
  const image = cardImages[svgName]
  const target = link.includes('https') ? '_blank' : ''
return (
  <a href={link} className={styles.card} style={{width: `calc((100% / ${cardPerRow}) - 20px)`}} target={target}>
       {
        image && (
          <img src={image} className={styles.cardSvg}  alt={title}/>
        )
       }
      <div className={styles.textContainer}>
          <div  dangerouslySetInnerHTML={{__html: title}}/>
         <div dangerouslySetInnerHTML={{__html: description}}/>
          <a href={`${link.includes('https') ? '' : baseUrl}${link}`}>{linkText}</a>
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
