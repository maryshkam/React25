import React from "react";
import ListItem from "../ListItem/ListItem";
import "./List.css"


const List = ({ repos }) => {
  return (
    <ul className='list'>
      {repos.map((repo) => (
        <ListItem key={repo.id} {...repo} />
      ))}
    </ul>
  );
};

export default List;
