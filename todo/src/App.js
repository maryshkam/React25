import React from "react";
import TodoList from "./components/TodoList/TodoList"
import "./App.css";
import TodoListHook from "./components/TodoListHook/TodoListHook";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <TodoListHook />
        {/* <TodoList /> */}
      </div>
    );
  }
}

export default App;
