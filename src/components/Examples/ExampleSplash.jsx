import React from "react";
import ScrollButton from "../UI/ScrollButton";
import styles from "./css/ExampleSplash.module.css";

import WorkExample from "./WorkExample";
import flowerShop from "./projects/flowerShop";
import textAdventure from "./projects/textAdventure";
import highLowGame from "./projects/highLow";
import usePagination from "../../Hooks/usePagination";
import guildPage from "./projects/guildPage";
import movieSite from "./projects/movies";
import { useEffect, useState } from "react";

const ExampleSplash = ({ setShowSidebar }) => {
  const [examples, setExamples] = useState([]);
  const [currentExample, setCurrentExample] = useState(examples[0]);
  const paginate = usePagination(examples, 1);

  useEffect(() => {
    setExamples([guildPage, textAdventure, movieSite, highLowGame, flowerShop]);
  }, []);

  return (
    <>
      <ScrollButton />
      <div className={styles.splashPage}>
        <h2 style={{ textDecoration: "underline" }}>Work Examples</h2>
        <br />
        <div className={styles.btnContainer}>
          {[...Array(paginate.maxPage)].map((e, page) => {
            return (
              <button
                key={page}
                onClick={(e) => {
                  setCurrentExample(examples[page]);
                }}
                value={page + 1}
                className={styles.exampleBtn}
              >
                {examples[page].buttonTitle}
              </button>
            );
          })}
        </div>

        <hr />

        <WorkExample
          currentExample={currentExample}
          setShowSidebar={setShowSidebar}
        />
      </div>
    </>
  );
};

export default ExampleSplash;
