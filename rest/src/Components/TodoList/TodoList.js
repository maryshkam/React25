import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import { inputHeandler, inputClear } from "../../redux/actions/formAction";
import { addTask } from "../../redux/ducks/task";
import "./TodoList.css";

const TodoList = () => {
  const input = useSelector((state) => state.input);
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();

  const formDataChange = (e) => {
    dispatch(inputHeandler(e));
  };

  const submitHeandler = (e) => {
    e.preventDefault();
    const task = { text: input, id: Date.now(), status: false };
    dispatch(addTask(task));
    dispatch(inputClear());
  };

  return (
    <div>
      <form onSubmit={submitHeandler}>
        <input type="text" value={input} onChange={formDataChange} />
        <button>Save</button>
      </form>
      <ul className="list">
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
