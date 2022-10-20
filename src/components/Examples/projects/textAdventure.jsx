import adventureScreen from "../../images/ChallengeWk1Screen.png";
import { FaPython } from "react-icons/fa";

const textAdventure = {
  buttonTitle: (
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <FaPython />
      </div>
      <span>Text Adventure</span>
    </>
  ),
  title: "Text adventure!",
  displayPhoto: {
    src: adventureScreen,
    figCaption:
      "A screen from my Challenge Week Project - this text adventure included several small puzzles.",
  },
  photos: [],
  topDescription: (
    <>
      <p>
        Literally my first coding project (that wasn't as simple as a
        calculator). I created this in my first Semester for "Challenge Week" -
        an opportunity for students to show off their home projects. It is a
        simple text adventure! I look back on this and realize how far I've
        come.
      </p>
    </>
  ),
  botDescription: (
    <>
      <ul>
        <li>
          A login feature for users. No major authentication features, but users
          could create accounts and save information to a simulated back end.
        </li>
        <li>A "remember me" feature for logged in users.</li>
      </ul>
    </>
  ),
};

export default textAdventure;
