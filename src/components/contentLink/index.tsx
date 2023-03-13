import React from 'react';
import styles from './content.module.css';
import {contentImages} from './contentImages';

type ContentLink = {
  title?: string; 
  link?: string; 
  iconType?: string;
  imageLink?: string;
  description?:string;
};

function ContentLinks({link, title, iconType, imageLink, description} : ContentLink) {
  let Svg;
  if (iconType) {
      Svg = contentImages[iconType];
  }
  const target = link.includes('https') ? '_blank' : ''
  return (
    <a href={link} className={styles.cardContainer} target={target}>
        {
          Svg && (
            <Svg />
          )
        }
        {
          imageLink && (
            <img src={imageLink} alt="logo" className={styles.imageLink} />
          )
        }
       <div className={styles.textContainer}>
         <p className={styles.text}>{title}</p>
        {
          description && (
            <div className={styles.descriptionContainer}>
             {description}
            </div>
          )
        }
       </div>
    </a>
  );
}

export default ContentLinks;
