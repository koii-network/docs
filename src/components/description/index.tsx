import React from 'react';
import styles from './description.module.css';

type descriptionType = {
  text: string;
};

function Description ({text}:descriptionType) {
  return (
   <p className={styles.description}>{text}</p>
  );
}

export default Description;
