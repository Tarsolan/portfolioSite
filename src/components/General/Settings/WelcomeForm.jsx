import React from "react";
import { useState } from "react";
import ThemeToggle from "../../UI/ThemeToggle";
import styles from "./css/Form.module.css";

const WelcomeForm = ({ themePackage }) => {
  const { setName, setCheck, onToggle } = themePackage;
  const [username, setUsername] = useState("");
  const [check, toggleCheck] = useState(false);

  const updateUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const checkToggle = () => {
    toggleCheck(!check);
  };

  const submitData = (e) => {
    e.preventDefault();
    setName(username);
    setCheck(check);

    setUsername("");
  };

  return (
    <form className={styles.userForm} onSubmit={submitData}>
      <h3>Personalize things</h3>
      <ThemeToggle onToggle={onToggle} />
      <div className="mb-3">
        <label htmlFor="userInput1" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          className="form-control"
          id="userInput1"
          aria-describedby="emailHelp"
          value={username}
          onChange={updateUsername}
        />
        <div id="emailHelp" className="form-text">
          Your name will be used throughout this portfolio, to make it speak to
          you!
        </div>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          onChange={checkToggle}
        />
        <label htmlFor="exampleCheck1" className="form-check-label">
          Checking this box makes you cool.
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Confirm Name
      </button>
    </form>
  );
};

export default WelcomeForm;
