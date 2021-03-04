import React, { Component } from "react";
import {Switch, Route,Redirect} from "react-router-dom";
import axios from "axios";
import List from "./Components/List/List";
import Header from "./Components/Header/Header"
import Form from "./Components/Form/Form/Form";
import "./App.css";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Repos from "./Pages/Repos/Repos";

const App = () => {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/users" component={Users}/>
      <Route exact path="/repos" component={Repos}/>
      <Redirect to="/" />
    </Switch>

    </>
    // <div className="wrapper">
    //   <List />
    // </div>
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
