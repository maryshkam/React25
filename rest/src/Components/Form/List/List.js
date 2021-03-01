import React from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = ({ repos }) => {
  return (
    <ul className="list">
      {repos.length > 0 ? (
        repos.map((repo) => <ListItem key={repo.id} {...repo} />)
      ) : (
        <h1>Empty Page and loading data</h1>
      )}
    </ul>
  );
};

export default List;
