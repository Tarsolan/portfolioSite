import React from "react";
import styles from "./css/ExampleImage.module.css";
import ModalImage from "react-modal-image";

const Example = ({ photo, captionText, altText }) => {
  return (
    <figure className={styles.example}>
      <ModalImage
        small={photo}
        medium={photo}
        large={photo}
        alt={altText}
        hideDownload
      />
      {/* <img src={photoSmall} alt={altText} /> */}
      <figcaption>{captionText}</figcaption>
    </figure>
  );
};

export default Example;
