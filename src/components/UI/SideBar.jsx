import React from "react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import styles from "./css/Sidebar.module.css";

const SideBar = ({ themePackage }) => {
  const { setName, onToggle, name } = themePackage;
  const [username, setUsername] = useState("");

  const updateUsername = (e) => {
    setUsername(e.target.value);
    console.log(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    setName(username);

    setUsername("");
  };

  return (
    <div className={styles.userForm}>
      <ThemeToggle onToggle={onToggle} />
      {name === "" && (
        <form onSubmit={submitData}>
          <hr />
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
          <button type="submit" className="btn btn-primary">
            Confirm Name
          </button>
        </form>
      )}
    </div>
  );
};

export default SideBar;
