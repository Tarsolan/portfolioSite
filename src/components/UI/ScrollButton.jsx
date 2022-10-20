import React, { useState, useEffect } from "react";
import styles from "./css/ScrollButton.module.css";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button onClick={scrollToTop} className={styles.backToTop}>
          &#8679;
        </button>
      )}
    </>
  );
};

export default ScrollButton;
