import React from "react";
import ScrollButton from "../UI/ScrollButton";
import styles from "./css/ExampleSplash.module.css";

import WorkExample from "./WorkExample";
import flowerShop from "./projects/flowerShop";
import textAdventure from "./projects/textAdventure";

const ExampleSplash = () => {
  return (
    <>
      <ScrollButton />
      <div className={styles.splashPage}>
        <h2>Work Examples</h2>
        <p>Here you can see some examples of my work.</p>
        <hr />
        <WorkExample details={flowerShop} />
        <hr />
        <WorkExample details={textAdventure} />
      </div>
    </>
  );
};

export default ExampleSplash;
