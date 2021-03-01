import React from "react";
import Loader from "react-loader-spinner";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = ({ repos, loader, error }) => {
  return (
    <ul className="list">
      {error && <h1>Something went wrong</h1>}
      {loader ? (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      ) : (
        repos.map((repo) => <ListItem key={repo.id} {...repo} />)
      )}
      {/* {repos.length > 0 ? (
        repos.map((repo) => <ListItem key={repo.id} {...repo} />)
      ) : (
        <Loader
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={5000} //3 secs
        />
      )} */}
    </ul>
  );
};

export default List;
