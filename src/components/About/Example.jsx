import React from "react";
import styles from "./css/About.module.css";

const Example = ({ photo, captionText, altText }) => {
  return (
    <figure className={styles.example}>
      <img src={photo} alt={altText} />
      <figcaption>{captionText}</figcaption>
    </figure>
  );
};

export default Example;
