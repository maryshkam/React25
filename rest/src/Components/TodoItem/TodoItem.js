import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../redux/slice/todoSlice";

const TodoItem = ({ text, id, status }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTask(id));
  };

  const edit = () => {
    dispatch(editTask(id));
  };
  return (
    <li className={status ? "item item__complete" : "item"}>
      <p>{text}</p>
      <button onClick={edit}>Edit</button>
      <button onClick={deleteItem}>Delete</button>
    </li>
  );
};

export default TodoItem;
