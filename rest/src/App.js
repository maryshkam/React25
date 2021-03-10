import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Header from "./Components/Header/Header";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
const Home = lazy(() => import("./Pages/Home/Home"));
const Users = lazy(()=>import("./Pages/Users/Users"));
const Repos = lazy(()=>import("./Pages/Repos/Repos"));
const SingleUser = lazy(()=>import("./Components/SingleUser/SingleUser"));


// import Home from "./Pages/Home/Home";
// import Users from "./Pages/Users/Users";
// import Repos from "./Pages/Repos/Repos";
// import SingleUser from "./Components/SingleUser/SingleUser";

const App = () => {
  console.log(window);
  return (
    <>
      <Header />
      <Suspense fallback={<p>Loading</p>}>
      <Switch>
        {/* <Route exact path="/" component={Home }/> */}
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} title="Something interesting" />}
        />
        <Route exact path="/users" component={Users} />
        <PrivateRoute path="/repos" component={Repos}/>
        {/* <Route path="/repos" component={Repos} /> */}
        <Route path="/users/:login" component={SingleUser} />
        <Redirect to="/" />
      </Switch>
      </Suspense>
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
