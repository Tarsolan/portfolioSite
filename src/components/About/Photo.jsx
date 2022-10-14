import React, { useState } from "react";
import Headshot from "./Aridgeley-headshot.png";
import styles from "./css/About.module.css";

const Photo = () => {
  const [showPic, setShowPic] = useState(true);

  const toggleFace = () => {
    setShowPic(!showPic);
  };

  return (
    <figure className={styles.headshot}>
      <>
        <img
          src={Headshot}
          alt="My great big face"
          className={`${styles.image} ${
            showPic ? `${styles.show}` : `${styles.hide}`
          }`}
        />
        <figcaption>
          <span className="caption-friendly">
            {showPic
              ? "Yep. That's me, right after doing some amazing work with a robot. What a guy."
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

export default Photo;