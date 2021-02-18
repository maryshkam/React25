import React from "react";
import CardCollection from "../CardCollection/CardCollection";
import FilterBlock from "../FilterBlock/FilterBlock";
import Section from "../Section/Section";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <FilterBlock>
        <Section />
        <Button variant="contained">Default</Button>
      <Button variant="contained" color="secondary">
        Primary
      </Button>
      </FilterBlock>
      
      <CardCollection />
    </main>
  );
};

export default Main;
