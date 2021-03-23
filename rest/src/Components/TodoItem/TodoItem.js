import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../../redux/actions/taskAction";
import {
  deleteTaskOperation,
  editTaskOperation,
} from "../../redux/operations/taskOperations";

const TodoItem = ({ text, id, status }) => {
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(deleteTaskOperation(id));
    dispatch(deleteTask(id));
  };

  const edit = () => {
    const task = { text: text, id: id, status: !status };
    dispatch(editTaskOperation(id, task));
    
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
