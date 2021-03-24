import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
import {
  inputHeandler,
  inputClear,
} from "../../redux/toolkit/actions/inputToolkit";
import { addTask } from "../../redux/toolkit/actions/todoListToolkit";
import { changeType } from "../../redux/toolkit/actions/filterType";
import {
  taskSelector,
  taskCountSelector,
  countCompletedTask,
  countUncompletedTask,
} from "../../redux/selectors/taskSelector";
import "./TodoList.css";

const TodoList = () => {
  const input = useSelector((state) => state.form);
  // const tasks = useSelector((state) => state.tasks);
  const tasks = useSelector((state) => taskSelector(state));
  const taskTotal = useSelector((state) => taskCountSelector(state));
  const countCompleted = useSelector((state) => countCompletedTask(state));
  const countUncompleted = useSelector((state) => countUncompletedTask(state));
  const type = useSelector((state) => state.type);
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

  const changeFilterType = (type) => {
    dispatch(changeType(type));
  };

  const filterTasks = () => {
    switch (type) {
      case "All":
        return tasks;
      case "Completed":
        return tasks.filter((task) => task.status);
      case "Uncompleted":
        return tasks.filter((task) => !task.status);
      default:
        return tasks;
    }
  };

  return (
    <div>
      <form onSubmit={submitHeandler}>
        <input type="text" value={input} onChange={formDataChange} />
        <button>Save</button>
      </form>
      <div className="filter">
        <button onClick={() => changeFilterType("All")}>All</button>
        <button onClick={() => changeFilterType("Completed")}>Completed</button>
        <button onClick={() => changeFilterType("Uncompleted")}>
          Uncompleted
        </button>
      </div>
      <p>Total tasks: {taskTotal}</p>
      <p>Completsd tasks: {countCompleted}</p>
      <p>Uncompletsd tasks: {countUncompleted}</p>
      <ul className="list">
        {filterTasks().map((el) => (
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
