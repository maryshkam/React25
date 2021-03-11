import React from "react";
import "./App.css";
import Card from "./Components/Header/Card/Card";
import Header from "./Components/Header/Header";

const App = () => {
  return <div className="App">
    <Header title="title for header"/>
    <Card />
  </div>;
};

export default App;
