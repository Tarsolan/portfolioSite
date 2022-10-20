import React from "react";
import styles from "./css/Skills.module.css";

import { FaPython, FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiPostgresql, SiNodedotjs } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GoMarkGithub } from "react-icons/go";

const Skills = () => {
  return (
    <div className={styles.skillContainer}>
      <div className={styles.techSkills}>
        <h4 className={styles.skillHeader}>Technical Skills</h4>
        <ul>
          <li>Front-end React Application Development</li>
          <li>Back-end Development with Node.js, Express, and Mongoose</li>
          <li>AWS Cloud Development</li>
          <li>
            GitHub <GoMarkGithub />
          </li>
          <li>
            MongoDB <DiMongodb />
          </li>
          <li>
            PostgreSQL <SiPostgresql />
          </li>
          <li>EJS</li>
        </ul>
      </div>
      <div className={styles.langSkills}>
        <h4 className={styles.skillHeader}>Programming Languages</h4>
        <ul>
          <li>
            Python <FaPython />
          </li>
          <li>
            Javascript <IoLogoJavascript />
          </li>
          <li>Java</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
      <div className={styles.otherSkills}>
        <h4 className={styles.skillHeader}>Other Notable Things</h4>
        <ul>
          <li>Good learner</li>
          <li>5+ years of Retail Management Experience</li>
          <li>Bookkeeping skills</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
