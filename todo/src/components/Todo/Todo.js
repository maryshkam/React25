import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  editItem = () => {
    this.props.editStatusTask(this.props.id);
  };

  removeItem = () => {
    this.props.removeFromList(this.props.id);
  };

  render() {
    const { title, author, priority, status } = this.props;
    return (
      <div className="Todo">
        <div onClick={this.editItem}>
          <p className={`Todo__name ${status && "done"}`}>{title}</p>
          <p className={`Todo__priority ${status && "done"}`}> {priority}</p>
          <p className={`Todo__author ${status && "done"}  `}>{author}</p>
        </div>
        <span onClick={this.removeItem} className="Todo__remove">
          X
        </span>
      </div>
    );
  }
}

export default Todo;

// ${status && "done"}
