import { useCallback } from "react";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

export const taskSelector = (state) => state.tasks;

// export const taskCountSelector = (state) => taskSelector(state).length;

export const taskCountSelector = createSelector(
  taskSelector,
  (arr) => arr.length
);

// export const uncompletedTaskSelector = (state) =>
//   taskSelector(state).filter((task) => !task.status);

export const uncompletedTaskSelector = createSelector(taskSelector, (arr) =>
  arr.filter((el) => !el.status)
);

// export const countUncompletedTask = (state) =>
//   uncompletedTaskSelector(state).length;
export const countUncompletedTask = createSelector(
  uncompletedTaskSelector,
  (arr) => arr.length
);

// export const completedTaskSelector = (state) =>
//   taskSelector(state).filter((task) => task.status);
export const completedTaskSelector = createSelector(taskSelector, (arr) =>
  arr.filter((el) => el.status)
);

// export const countCompletedTask = (state) =>
//   completedTaskSelector(state).length;
export const countCompletedTask = createSelector(
  completedTaskSelector,
  (arr) => arr.length
);
