import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import HeadShot from "../UI/HeadShot";
import Hobbies from "./Hobbies";
import History from "./History";
import styles from "./css/About.module.css";
import ScrollButton from "../UI/ScrollButton";
import Skills from "./Skills";
import Experience from "./Experience";
import AWS from "./AWS";

const About = ({ name }) => {
  const currentAge = () => {
    let date = new Date();
    const birthYear = 1991;
    let age = date.getFullYear() - birthYear;
    return date.getMonth() + 1 >= 10 && date.getDate() >= 10 ? age : age - 1;
  };

  return (
    <>
      <ScrollButton />
      <div className={styles.aboutPage}>
        <article>
          <div className={styles.introContainer}>
            <div className={styles.about}>
              <h3>Introduction</h3>
              <p>
                Hello{name === undefined || name === "" ? "." : `, ${name}.`} My
                name is Alex Ridgeley, and this is my portfolio. I'm currently a
                student at Keyin College with a lot of skill in Software & Web
                Development. This page is a place for me to show off those
                skills.
              </p>
              <p>
                At this moment in time, I am <strong>{currentAge()}</strong>{" "}
                years old. That number right there was generated all on its own,
                using a very, <em>very</em> complex and creative function. It
                will continue to track my age until the end of time (or until I
                delete it). It's just one of many fine examples of my work that
                you will find on your journey here today.
              </p>
              <div>
                <AWS />
              </div>
              <div className={styles.contact}>
                <Contact />
              </div>
              <div>
                <Skills />
              </div>
            </div>
            <div className={styles.photo}>
              <HeadShot />
            </div>
          </div>
        </article>

        <hr />

        <div>
          <Experience />
        </div>

        <hr />

        <div>
          <History />
        </div>

        <hr />

        <div>
          <Hobbies />
        </div>

        <hr />
        <div>
          <h3>The End</h3>
          <p>
            Well... congrats
            {name === undefined || name === "" ? "." : `, ${name}.`} You made it
            to the bottom of the page - you now know my entire life story.
            Little nerd man plays games, hits people with swords, creates
            software. That's me.
          </p>
          <p>
            If you'd like to see a couple examples of what I can do, check out
            the "Work Examples" button on the Navigation bar up top. I'd love to
            show you a few examples of what I've done during my time as a
            student.
          </p>
          <p>
            You can also find a link to my GitHub profile on that same bar, or
            you can just click{" "}
            <a
              href="https://github.com/Tarsolan"
              target="_blank"
              rel="noopener noreferrer"
            >
              here.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default About;

About.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  town: PropTypes.string,
};
