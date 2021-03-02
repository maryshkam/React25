import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { withCreadentials, request } from "../../../helpers/request";
import ListItem from "../ListItem/ListItem";
import Form from "../Form/Form";
import "./List.css";

class List extends Component {
  state = {
    repos: [],
    loader: false,
    error: false,
    text: "",
  };

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
    const { error, loader, repos } = this.state;
    return (
      <>
        <Form
          getSearch={this.getSearch}
          toogleLoader={this.toogleLoader}
          toogleError={this.toogleError}
        />
        <ul className="list">
          {error && <h1>Something went wrong</h1>}
          {loader ? (
            <Loader
              type="ThreeDots"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={5000} //3 secs
            />
          ) : (
            repos.map((repo) => <ListItem key={repo.id} {...repo} />)
          )}
        </ul>
      </>
    );
  }
}

export default List;
