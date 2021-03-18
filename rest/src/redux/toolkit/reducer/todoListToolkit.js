import { createReducer } from "@reduxjs/toolkit";
import { addTask, deleteTask, editTask } from "../actions/todoListToolkit";

const tasks= createReducer([], {
  // [addTask]: (state, action) => [...state, action.payload],
  [addTask]: (state, { payload }) => [...state, payload],
  // [addTask]: (state, { payload }) => {
  //    state.push(payload);
  // },
  [deleteTask]: (state, action) =>
    state.filter((task) => task.id !== action.payload),
  [editTask]: (state, action) =>
    state.map((task) =>
      task.id === action.payload ? { ...task, status: true } : task
    ),
});

export default tasks;