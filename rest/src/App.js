import React from "react";
import "./App.css";
import Card from "./Components/Header/Card/Card";
import Header from "./Components/Header/Header";
import TodoList from "./Components/Header/TodoList/TodoList";
import SimpleContextExample from "./SimpleContextExample/SimpleContextExample";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
      <SimpleContextExample />
    </div>
  );
};

export default App;
