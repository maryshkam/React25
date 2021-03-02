import React, { Component } from "react";
import axios from "axios";
import List from "./Components/Form/List/List";

import Form from "./Components/Form/Form/Form";
import "./App.css";

const App = () => {
  return (
    <div className="wrapper">
      <List />
    </div>
  );
};

export default App;

// import "./App.css";

// function App() {
//   console.log(process.env);
//   console.log(process.env.REACT_APP_CLIENT_ID);
//   console.log(process.env.REACT_APP_CLIENT_SECRET);
//   return <div className="App"></div>;
// }

// export default App;
