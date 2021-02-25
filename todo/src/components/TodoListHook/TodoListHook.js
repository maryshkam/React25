import React, { useState } from "react";
import HookForm from "../HookForm/HookForm";
import Todo from "../Todo/Todo";
import "../TodoList/TodoList.css";

const TodoListHook = () => {
  const [list, setList] = useState([]);
  const [type, setType] = useState("all");

  const addToList = (todo) => {
    setList((prev) => [...prev, todo]);
  };

  const removeFromList = (id) => {
    setList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editStatusTask = (id) => {
    setList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const changeFilter = ({ target }) => {
    const type = target.dataset.filter;
    setType(type);
  };

  const filterTask = () => {
    switch (type) {
      case "all":
        return list;
      case "completed":
        return list.filter((todo) => todo.status === true);
      case "uncompleted":
        return list.filter((todo) => todo.status === false);
      default:
        return list;
    }
  };

  return (
    <div className="TodoList">
      <h1 className="TodoList__title">Todo List</h1>
      <HookForm addToList={addToList} />
      {/* <Form addToList={this.addToList} /> */}
      <ul className="TodoList__todos">
        {filterTask().map((todo) => (
          <li key={todo.id}>
            <Todo
              {...todo}
              removeFromList={removeFromList}
              editStatusTask={editStatusTask}
            />
          </li>
        ))}
      </ul>
      <div className="filters">
        <button
          onClick={changeFilter}
          className="NewTodoForm__submit"
          data-filter="all"
        >
          All
        </button>
        <button
          onClick={changeFilter}
          className="NewTodoForm__submit"
          data-filter="completed"
        >
          Completed
        </button>
        <button
          onClick={changeFilter}
          className="NewTodoForm__submit"
          data-filter="uncompleted"
        >
          Uncompleted
        </button>
      </div>
    </div>
  );
};

export default TodoListHook;
