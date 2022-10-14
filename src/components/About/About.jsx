import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact";
import Photo from "./Photo";
import loginshot from "../images/loginsmall.png";
import Hobbies from "./Hobbies";
import History from "./History";
import { useState, useEffect } from "react";
import Example from "./Example";
import styles from "./css/About.module.css";

const About = ({ name, town }) => {
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

  function currentMonth() {
    let date = new Date();
    var month = date.getMonth() + 1;
    if (month < 10) {
      let month_pad = `0${month}`;
      return month_pad;
    } else {
      let month_pad = `${month}`;
      return month_pad;
    }
  }

  function currentYear() {
    let date = new Date();
    var year = date.getFullYear();
    return year;
  }

  const currentAge = () => {
    const birthYear = 1991;
    let age = currentYear() - birthYear;
    return currentMonth() < 10 ? age - 1 : age;
  };

  return (
    <>
      <div className={styles.aboutPage}>
        <article>
          <h2>About Me</h2>
          <h3>Introduction</h3>
          <p>
            Hello{name === undefined || name === "" ? "." : `, ${name}.`} My
            name is Alex Ridgeley, and this is my portfolio. Or, at least, an
            early version of it. I'm currently a student at Keyin College with a
            lot to learn about Software & Web Development. Treat this page as an
            example of the things I've learned so far. It will also serve as a
            nice reminder of how far I've come when we look back at this later!
          </p>
          <p>
            At this moment in time, I am <strong>{currentAge()}</strong> years
            old. That number right there was generated all on its own, using a
            very, <em>very</em> complex and creative function. It will continue
            to track my age until the end of time (or until I delete it). It's
            just one of many fine examples of my work that you will find on your
            journey here today.
          </p>
        </article>
        <hr />
        <div>
          <Photo />
        </div>
        <hr />
        <div>
          <History />
        </div>
        <hr />
        <div>
          <Example photo={loginshot} />
        </div>
        <hr />
        <div>
          <Hobbies />
        </div>
        <hr />
        <div>
          <Contact />
        </div>
        <hr />
        <div>
          <h3>The End</h3>
          <p>
            Well, congrats
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
            <a href="https://github.com/Tarsolan/portfolio">here.</a>
          </p>
        </div>
        {showButton && (
          <button onClick={scrollToTop} className={styles.backToTop}>
            &#8679;
          </button>
        )}
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
