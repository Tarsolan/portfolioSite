import React from "react";

const UserData = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  return (
    <div className="user-tile">
      <h2>{login}</h2>
      <img src={avatar_url} alt="Avatar" className="user-img" />
      <div>
        <a href={html_url}>{html_url}</a>
      </div>
    </div>
  );
};

export default UserData;
