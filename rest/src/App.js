import React from "react";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import TodoList from "./Components/TodoList/TodoList";

const App = () => {
  return (
    <div className="App">
      <TodoList />
      {/* <Counter /> */}
    </div>
  );
};

export default App;
