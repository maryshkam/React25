import React, { Component } from "react";
import axios from "axios";
import List from "./Components/Form/List/List";
import { withCreadentials, request } from "./helpers/request";
import Form from "./Components/Form/Form/Form";
import "./App.css";

class App extends Component {
  state = {
    repos: [],
    users: [],
    loader: false,
    error: false,
    text: "",
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

  async componentDidMount() {
    // const url =
    //   "https://api.github.com/search/repositories?q=react&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}";
    const url = withCreadentials(
      "https://api.github.com/search/repositories?q=react&"
    );

    try {
      this.toogleLoader();
      const result = await request("get", url);
      this.setState({
        repos: [...result.items],
      });
    } catch (error) {
      this.toogleError();
      this.setState({
        text: error.message,
      });
    } finally {
      this.toogleLoader();
    }
    //   request("get", url)
    //     .then((data) => {
    //       this.toogleLoader();
    //       this.setState({
    //         repos: [...data.items],
    //       });
    //     })
    //     .catch((error) => {
    //       this.toogleLoader();
    //       this.toogleError();
    //       this.setState({
    //         text: error.message,
    //       });
    //     });
    // }

    // componentDidUpdate(){
    //   const {search}= this.state;
    //   const url = withCreadentials(
    //     `https://api.github.com/search/repositories?q=${search}&`
    //   );
    //   request("get", url)
    //     .then((data) => {
    //       this.setState({
    //         repos: [...data.items],
    //         loader: false,
    //       });
    //     })
    //     .catch((error) => {
    //       this.setState({
    //         error: true,
    //         loader: false,
    //         text: error.message,
    //       });
    //     });
  }

  getSearch = (data) => {
    this.setState({
      repos: [...data],
    });
  };

  toogleLoader = () => {
    this.setState({
      loader: !this.state.loader,
    });
  };
  toogleError = () => {
    this.setState({
      error: !this.state.error,
    });
  };

  render() {
    const { repos, loader, error } = this.state;
    return (
      <div className="wrapper">
        <Form
          getSearch={this.getSearch}
          toogleLoader={this.toogleLoader}
          toogleError={this.toogleError}
        />
        <List repos={repos} loader={loader} error={error} />
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
