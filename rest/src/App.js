import React, { Component } from "react";
import {Switch, Route,Redirect} from "react-router-dom";
import axios from "axios";
import Header from "./Components/Header/Header"
import "./App.css";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Users/Users";
import Repos from "./Pages/Repos/Repos";
import SingleUser from "./Components/SingleUser/SingleUser";

const App = () => {
  console.log(window);
  return (
    <>
    <Header />
    <Switch>
      {/* <Route exact path="/" component={Home }/> */}
      <Route exact path="/" render={(props)=><Home {...props} title="Something interesting"/>}/>
      <Route exact path="/users" component={Users}/>
      <Route path="/repos" component={Repos}/>
      <Route path="/users/:login" component={SingleUser}/>
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
