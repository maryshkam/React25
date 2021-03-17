import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

const TodoList = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <button>Save</button>
      </form>
      <ul className="list">
        {[].map((el) => (
          <TodoItem key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
