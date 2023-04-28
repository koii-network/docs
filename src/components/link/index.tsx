import React from "react";
import styles from "./link.module.css";

type linkType = {
  text: string;
  link: string;
};

function Link({ text, link }: linkType) {
  return <a href={link} target="_blank" className={styles.link}>{text} <img src='/img/link.png' className={styles.img} /></a>;
}

export default Link;
