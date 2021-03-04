import React from "react";
import {NavLink, useHistory} from "react-router-dom";
import "./ListItem.css";

const ListItem = ({ avatar_url, login, full_name, owner, type,id }) => {
  const history= useHistory();
  // console.log(history);

  const goTo =()=> {
    history.push(`/users/${id}`)
  }
  return (

    <li className="card" onClick={goTo}>
     
      <img
        className="card-img"
        src={owner ? owner.avatar_url : avatar_url}
        alt=""
      ></img>
      <h2 className="card-title">{full_name ? full_name : login}</h2>
      <p className="card-text">{login ? login : owner.login}</p>
      <p className="card-text">{type ? type : owner.type}</p>
     
    </li>
  );
};

export default ListItem;
