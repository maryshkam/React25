import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const inputHeandler = ({ target }) => {
    const value = target.value;
    setInput(value);
  };

  const submitHeandler = (e) => {
    e.preventDefault();
    const task = {
      id: Date.now(),
      name: input,
    };
    const newState = [...tasks, task];
    setTasks(newState);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={submitHeandler}>
        <input onChange={inputHeandler} type="text" name="name" value={input} />
        <button>Save</button>
      </form>
      <ul>
        {tasks.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
