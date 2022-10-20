import React from "react";
import styles from "./css/ThemeToggle.module.css";

const ThemeToggle = ({ onToggle, location }) => {
  return (
    <>
      {location === "nav" ? null : (
        <h4 className={styles.themeHead}>Theme Selection</h4>
      )}
      <div className={styles.themeBtn}>
        <button onClick={() => onToggle("blue")} className={styles.blue}>
          Blue
        </button>
        <button onClick={() => onToggle("red")} className={styles.red}>
          Red
        </button>
        <button onClick={() => onToggle("green")} className={styles.green}>
          Green
        </button>
        <button onClick={() => onToggle("dark")} className={styles.dark}>
          Dark
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
