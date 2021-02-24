import React, { useState, Component } from "react";
import Form from "../Form/Form";
import HookForm from "../HookForm/HookForm";
import Todo from "../Todo/Todo";
import "./TodoList.css";

class TodoList extends Component {
  state = {
    todoList: [],
    type: "all",
  };

  addToList = (todo) => {
    this.setState((prev) => ({
      todoList: [...prev.todoList, todo],
    }));
  };

  removeFromList = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((todo) => todo.id !== id),
    });
  };

  editStatusTask = (id) => {
    this.setState({
      todoList: this.state.todoList.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      ),
    });
  };
  changeFilter = ({ target }) => {
    const type = target.dataset.filter;
    console.log(type);
    this.setState({
      type,
    });
  };

  filterTask = () => {
    switch (this.state.type) {
      case "all":
        return this.state.todoList;
      case "completed":
        return this.state.todoList.filter((todo) => todo.status === true);
      case "uncompleted":
        return this.state.todoList.filter((todo) => todo.status === false);
      default:
        return this.state.todoList;
    }
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="TodoList">
        <h1 className="TodoList__title">Todo List</h1>
        <HookForm addToList={this.addToList} />
        {/* <Form addToList={this.addToList} /> */}
        <ul className="TodoList__todos">
          {this.filterTask().map((todo) => (
            <li key={todo.id}>
              <Todo
                {...todo}
                removeFromList={this.removeFromList}
                editStatusTask={this.editStatusTask}
              />
            </li>
          ))}
        </ul>
        <div className="filters">
          <button
            onClick={this.changeFilter}
            className="NewTodoForm__submit"
            data-filter="all"
          >
            All
          </button>
          <button
            onClick={this.changeFilter}
            className="NewTodoForm__submit"
            data-filter="completed"
          >
            Completed
          </button>
          <button
            onClick={this.changeFilter}
            className="NewTodoForm__submit"
            data-filter="uncompleted"
          >
            Uncompleted
          </button>
        </div>
      </div>
    );
  }
}

// const TodoList = () => {
// return (
// <div className="TodoList">
//   <h1 className="TodoList__title">Todo List</h1>
//   <Form />
//   {/* <HookForm /> */}
//   <ul className="TodoList__todos">
//     {[].map((todo, index) => (
//       <li key={todo.id}>
//         <Todo />
//       </li>
//     ))}
//   </ul>
//   <div className="filters">
//     <button className="NewTodoForm__submit" data-filter="all">
//       All
//     </button>
//     <button className="NewTodoForm__submit" data-filter="completed">
//       Completed
//     </button>
//     <button className="NewTodoForm__submit" data-filter="uncompleted">
//       Uncompleted
//     </button>
//   </div>
// </div>
// );
// };

export default TodoList;
