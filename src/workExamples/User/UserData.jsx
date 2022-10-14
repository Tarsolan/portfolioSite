import React from "react";
import styles from "./css/Users.module.css";

const UserData = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  return (
    <div className={styles.userTile}>
      <h2>{login}</h2>
      <img src={avatar_url} alt="Avatar" className={styles.userImg} />
      <div>
        <a href={html_url}>{html_url}</a>
      </div>
    </div>
  );
};

export default UserData;
