import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, { payload }) => [...state, payload],
    deleteTask: (state, action) =>
      state.filter((task) => task.id !== action.payload),
    editTask: (state, action) =>
      state.map((task) =>
        task.id === action.payload ? { ...task, status: true } : task
      ),
  },
});

// export const {actions,reducer} = todoSlice;
export const { addTask, deleteTask, editTask } = todoSlice.actions;
export default todoSlice.reducer