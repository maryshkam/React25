import React, { Component } from "react";
import axios from "axios";
import List from "./Components/Form/List/List";
import { withCreadentials, request } from "./helpers/request";

class App extends Component {
  state = {
    repos: [],
    users: [],
  };

  // componentDidMount() {
  //   axios
  //     .get(
  //       withCreadentials("https://api.github.com/search/repositories?q=react&")
  //     )
  //     .then((res) => {
  //       const result = res.data.items;
  //       this.setState({
  //         repos: [...result],
  //       });
  //     });
  // }

  // async componentDidMount() {
  //   const result = await axios.get(
  //     withCreadentials("https://api.github.com/search/repositories?q=react&")
  //   );
  //   this.setState({
  //     repos: [...result.data.items],
  //   });
  // }

  componentDidMount() {
    // const url =
    //   "https://api.github.com/search/repositories?q=react&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}";
    const url = withCreadentials(
      "https://api.github.com/search/repositories?q=react&"
    );
    request("get", url).then((data) => {
      this.setState({
        repos: [...data.items],
      });
    });
  }

  render() {
    const { repos } = this.state;
    return (
      <div>
        <List repos={repos} />
      </div>
    );
  }
}

export default App;

// import "./App.css";

// function App() {
//   console.log(process.env);
//   console.log(process.env.REACT_APP_CLIENT_ID);
//   console.log(process.env.REACT_APP_CLIENT_SECRET);
//   return <div className="App"></div>;
// }

// export default App;
