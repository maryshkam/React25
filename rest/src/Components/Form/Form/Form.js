import React, { Component } from "react";
import { withCreadentials, request } from "../../../helpers/request";

import "./Form.css";

class Form extends Component {
  state = {
    search: "",
  };

  handleInput = ({ target }) => {
    const { value } = target;
    this.setState({
      search: value,
    });
  };

  submitHeandler = async (e) => {
    e.preventDefault();

    const url = withCreadentials(
      `https://api.github.com/search/repositories?q=${this.state.search}&`
    );

    try {
      this.props.toogleLoader();
      const result = await request("get", url);
      await this.props.getSearch(result.items);
    } catch (error) {
      this.props.toogleError()
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
          type="text"
          value={this.state.search}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default Form;
