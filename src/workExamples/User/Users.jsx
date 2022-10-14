import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import UserData from "./UserData";
import styles from "./css/Users.module.css";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const [showUsers, setShowUsers] = useState(false);

  const loadApi = async () => {
    const res = await axios.get("https://api.github.com/users");
    const data = await res.data;

    return data;
  };

  useEffect(() => {
    const userList = async () => {
      const usersFromApi = await loadApi();
      setUserData(usersFromApi);
    };
    userList();
  }, []);

  return (
    <div className={styles.userPage}>
      <h2 style={{ textDecoration: "underline", textAlign: "center" }}>
        Users from an API
      </h2>
      <p className={styles.userPara}>
        This was a simple example of work from very early in my time as a
        student. It shows that I am able to fetch data in JSON format and
        manipulate it do whatever I need it to do.
      </p>
      <button onClick={() => setShowUsers(!showUsers)}>
        {showUsers ? "Hide the Users!" : "Show the Users!"}
      </button>
      <hr />
      <div
        className={`${styles.userWrap} ${
          showUsers ? styles.show : styles.hide
        }`}
      >
        {userData.map((user) => (
          <UserData key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
