import React, { Component } from "react";
import { withCreadentials, request } from "../../../helpers/request";

import "./Form.css";

class Form extends Component {
  state = {
    search: "",
    type: "repositories",
  };

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };

  selectHandler = ({ target }) => {
    const { value } = target;
    this.setState({
      type: value,
    });
  };

  submitHeandler = async (e) => {
    const { search, type } = this.state;
    e.preventDefault();

    const url = withCreadentials(
      `https://api.github.com/search/${type}?q=${search}&per_page=5&page=2&`
    );

    try {
      this.props.toogleLoader();
      const result = await request("get", url);
      console.log(result);
      await this.props.getSearch(result.items);
    } catch (error) {
      this.props.toogleError();
    } finally {
      this.props.toogleLoader();
      this.setState({
        search: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.submitHeandler} className="search-form">
        <input
          onChange={this.handleInput}
          name="search"
          type="text"
          value={this.state.search}
        />
        <select onChange={this.selectHandler} name="type">
          <option value="repositories">repositories</option>
          <option value="users">users</option>
        </select>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Form;
