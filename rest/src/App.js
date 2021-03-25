import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import { navigation } from "./constant/route";
import "./App.css";
import Counter from "./Components/Counter/Counter";
import TodoList from "./Components/TodoList/TodoList";
import Header from "./Components/Header/Header";

const App = () => {
  const token = useSelector((state) => state.token);
  const history = useHistory();
  useEffect(() => {
    if (token) {
      history.push(navigation.home);
    } else {
      history.push(navigation.login);
    }
  }, [token]);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={navigation.home} component={Home} />
        <Route path={navigation.login} component={Login} />
        <Route path={navigation.registration} component={Registration} />
      </Switch>
      {/* <TodoList /> */}
      {/* <Counter /> */}
    </div>
  );
};

export default App;
