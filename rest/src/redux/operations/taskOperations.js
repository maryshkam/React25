import axios from "axios";
import { loaderOff, loaderOn } from "../actions/loaderActions";
import { setError, resetError } from "../actions/errorActions";
import { addTask, deleteTask, editTask, setTasks } from "../actions/taskAction";

const options = {
  header: {
    "Content-Type": "application/json",
  },
};

export const getTaskOperation = () => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.get("http://localhost:5000/tasks");
    console.log(result.data);
    dispatch(setTasks(result.data));
  } catch (error) {
    dispatch(setError("something went wrong, try later"));
  } finally {
    dispatch(loaderOff());
  }
};

export const postTaskOperation = (task) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      "http://localhost:5000/tasks",
      task,
      options
    );
    dispatch(addTask(result.data));
  } catch (error) {
    dispatch(setError("something went wrong, try later"));
  } finally {
    dispatch(loaderOff());
  }
};

export const deleteTaskOperation = (id) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.delete(`http://localhost:5000/tasks/${id}`);
  } catch (error) {
    dispatch(setError("something went wrong, try later"));
  } finally {
    dispatch(loaderOff());
  }
};

export const editTaskOperation = (id, task) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.put(
      `http://localhost:5000/tasks/${id}`,
      task,
      options
    );
    dispatch(editTask(id));
  } catch (error) {
    dispatch(setError("something went wrong, try later"));
  } finally {
    dispatch(loaderOff());
  }
};
