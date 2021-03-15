import React from "react";
import "./App.css";
import Card from "./Components/Header/Card/Card";
import Header from "./Components/Header/Header";
import TodoList from "./Components/Header/TodoList/TodoList";
import SimpleContextExample from "./SimpleContextExample/SimpleContextExample";
import SimpleProvider from "./context/Provider/SimpleProvider";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TodoList />
      {/* <SimpleProvider>
        <SimpleContextExample />
      </SimpleProvider> */}
    </div>
  );
};

export default App;
