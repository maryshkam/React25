import React from "react";
import "./ListItem.css";

const ListItem = ({ full_name, owner }) => {
  const { avatar_url, login, type } = owner;
  return (
    <li className="card">
      <img className="card-img" src={avatar_url} alt=""></img>
      <h2 className="card-title">{full_name}</h2>
      <p className="card-text">{login}</p>
      <p className="card-text">{type}</p>
    </li>
  );
};

export default ListItem;
