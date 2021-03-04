import React, { Component } from "react";
import Form from "../../Components/Form/Form";
import List from "../../Components/List/List"

class Users extends Component {
  state = {
    users: [],
    loader: false,
    error: false,
    text: "",
    search: "",
    type: "",
    per_page: 10,
    page: 1,
    totalItemCount: "",
  };
  render() {
    return (
      <div>
        <Form />
        <List />
      </div>
    );
  }
}

export default Users;
