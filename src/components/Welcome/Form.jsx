import React from "react";
import { useState } from "react";
import ThemeToggle from "../UI/ThemeToggle";
import styles from "./css/Form.module.css";

const Form = ({ setName, setCheck, onToggle }) => {
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
    console.log(username);
    setUsername("");
  };

  return (
    <div>
      <div className={styles.formHeader}>
        <h3>Customization Page</h3>
        <p>
          Here, you can customize certain aspects of the page. The name you
          enter here will be displayed in several of the components of the site,
          and there are a few color options to choose from as well.
        </p>
        <ThemeToggle onToggle={onToggle} />
      </div>

      <form className={styles.userForm} onSubmit={submitData}>
        <h4>Personalize things</h4>
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
            Your name will be used throughout this portfolio, to make it speak
            to you!
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
    </div>
  );
};

export default Form;
