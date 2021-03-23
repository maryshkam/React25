import React, { useState, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { inputHeandler, inputClear } from "../../redux/actions/formAction";
import { addTask } from "../../redux/ducks/task";
import {
  getTaskOperation,
  postTaskOperation,
} from "../../redux/operations/taskOperations";
import "./TodoList.css";

const TodoList = () => {
  const input = useSelector((state) => state.input);
  const tasks = useSelector((state) => state.task);
  const loader = useSelector((state) => state.loader);
  const dispatch = useDispatch();

  const formDataChange = (e) => {
    dispatch(inputHeandler(e));
  };

  const submitHeandler = (e) => {
    e.preventDefault();
    const task = { text: input, status: false };
    dispatch(postTaskOperation(task));
    dispatch(inputClear());
  };

  useEffect(() => {
    console.log("some");
    dispatch(getTaskOperation());
  }, []);

  return (
    <div>
      <form onSubmit={submitHeandler}>
        <input type="text" value={input} onChange={formDataChange} />
        <button>Save</button>
      </form>
      <ul className="list">
        {loader && <h1>Some fetch going</h1>}
        {tasks.map((el) => (
          <TodoItem key={el.id} {...el} />
        ))}
      </ul>
    </div>
  );
};

// const mapStateToProps = (state) => ({
//   value: state.input,
// });

export default TodoList;
// export default connect(mapStateToProps)(TodoList);
