import React, { useState } from "react";
import styles from "./css/HeadShot.module.css";
import ModalImage from "react-modal-image";

const HeadShot = () => {
  const [showPic, setShowPic] = useState(true);
  const newShot =
    "https://alex-guild-images.s3.amazonaws.com/sqooshed/portfolio/general/headshot-Oct2022.jpg";

  const toggleFace = () => {
    setShowPic(!showPic);
  };

  return (
    <figure className={styles.headshot}>
      <>
        <ModalImage
          small={newShot}
          large={newShot}
          alt="My great big face"
          hideDownload
          hideZoom
          className={`${styles.image} ${
            showPic ? `${styles.show}` : `${styles.hide}`
          }`}
        />
        <figcaption>
          <span className="caption-friendly">
            {showPic
              ? "Yep. That's me, attending a TechNL conference. What a guy."
              : "Wow, okay. Seems a bit rude, but you do you."}
            <br />
          </span>
          <button onClick={toggleFace}>
            {showPic
              ? "I don't want to look at this giant face."
              : "Alright, show me the face again."}
          </button>
        </figcaption>
      </>
    </figure>
  );
};

export default HeadShot;
