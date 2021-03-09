import React, { Component } from "react";
import queryString from "query-string";
import { withCreadentials, request } from "../../helpers/request";
import Form from "../../Components/Form/Form";

import List from "../../Components/List/List";

class Users extends Component {
  state = {
    users: [],
    loader: false,
    error: false,
    text: "",
    search: "",
    type: "users",
    per_page: 10,
    page: 1,
    totalItemCount: "",
  };

  getUsers = async (search = "react") => {
    const url = withCreadentials(
      `https://api.github.com/search/users?q=${search}&`
    );

    try {
      const result = await request("get", url);
      this.toogleLoader();
      this.setState({
        users: [...result.items],
      });
    } catch (error) {
      this.toogleError();
      this.setState({
        text: error.message,
      });
    } finally {
      this.toogleLoader();
    }
  };

  async componentDidMount() {
    const { location } = this.props;
    const params = queryString.parse(location.search);
    if (Object.keys(params).length) {
      this.getUsers(params.userName);
    } else {
      this.getUsers();
    }
    // const url = withCreadentials(
    //   "https://api.github.com/search/users?q=react&"
    // );

    // try {
    //   this.toogleLoader();
    //   const result = await request("get", url);
    //   this.setState({
    //     users: [...result.items],
    //   });
    // } catch (error) {
    //   this.toogleError();
    //   this.setState({
    //     text: error.message,
    //   });
    // } finally {
    //   this.toogleLoader();
    // }
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   const { page, per_page, type, search } = this.state;
  //   const url = withCreadentials(
  //     `https://api.github.com/search/${type}?q=${search}&per_page=${per_page}&page=${page}&`
  //   );
  //   if (page !== prevState.page) {
  //     try {
  //       this.toogleLoader();
  //       const result = await request("get", url);
  //       console.log(result);
  //       this.setState({
  //         repos: [...result.items],
  //       });
  //     } catch (error) {
  //       this.toogleError();
  //       this.setState({
  //         text: error.message,
  //       });
  //     } finally {
  //       this.toogleLoader();
  //     }
  //   }
  // }

  getSearchWord = (search) => {
    this.setState({
      search: search,
    });
  };

  getSearch = (data) => {
    this.setState({
      users: [...data.items],
      totalItemCount: data.total_count,
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

  handleChange = (event, value) => {
    this.setState({
      page: value,
    });
  };

  render() {
    const { type, per_page, error, loader, users } = this.state;
    return (
      <div>
        <Form
          type={type}
          toogleLoader={this.toogleLoader}
          toogleError={this.toogleError}
          getSearch={this.getSearch}
          getSearchWord={this.getSearchWord}
          per_page={per_page}
          // history={history}
        />
        {error && <h1>Something went wrong</h1>}
        <List loader={loader} users={users} />
      </div>
    );
  }
}

export default Users;
