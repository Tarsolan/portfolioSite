import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const highLowGame = {
  buttonTitle: (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <IoLogoJavascript /> <FaReact />
      </div>
      <span>Card Game</span>
    </>
  ),
  title: "High or Low Card Game",
  displayPhoto: {
    src: "https://alex-guild-images.s3.amazonaws.com/sqooshed/portfolio/cardGame/HighLow.jpg",
    figCaption:
      "A personal project that I undertook for practice with HTML, CSS, & DOM elements. I later converted this into a React app as well.",
  },
  photos: [],
  topDescription: (
    <>
      <p>
        A high or low card game I created to function on a static page. I wanted
        to experiment with DOM and CSS. This was good practice for my school
        work, though it certainly highlighted areas for improvement!
      </p>
    </>
  ),
  botDescription: (
    <>
      <ul>
        <li>
          Saves the high score to local storage, so if you really want to keep
          trying for your personal best, you can!
        </li>
        <li>
          React Toastify gives your successes and fails a little extra style!
        </li>
      </ul>
    </>
  ),
  example: "/examples/game",
};

export default highLowGame;
