import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./TodoList.css";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState(false);

  const toogleModal = () => {
    setAlert((alert) => !alert);
  };

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
      <TransitionGroup component="ul" className="list">
          {tasks.map((el) => (
            <CSSTransition key={el.id} classNames="list__item" timeout={800}>
              <li className="item">{el.name}</li>
            </CSSTransition>
          ))}
      </TransitionGroup>

      <CSSTransition
        in={alert}
        classNames="modal"
        timeout={{ enter: 500, exit: 350 }}
        mountOnEnter
        unmountOnExit
      >
        <div className="modal">Alert</div>
      </CSSTransition>

      <button onClick={toogleModal}>Show modal</button>
    </div>
  );
};
export default TodoList;
