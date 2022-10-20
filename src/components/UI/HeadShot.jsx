import React, { useState } from "react";
import oldshot from "../images/Aridgeley-headshot.png";
import newShot from "../images/headshot-Oct2022.jpg";
import styles from "./css/HeadShot.module.css";

const HeadShot = () => {
  const [showPic, setShowPic] = useState(true);

  const toggleFace = () => {
    setShowPic(!showPic);
  };

  return (
    <figure className={styles.headshot}>
      <>
        <img
          src={newShot}
          alt="My great big face"
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
