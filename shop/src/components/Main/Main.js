import React from "react";
import CardCollection from "../CardCollection/CardCollection";
import FilterBlock from "../FilterBlock/FilterBlock";
import Section from "../Section/Section";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <FilterBlock />
      <CardCollection />
    </main>
  );
};

export default Main;
