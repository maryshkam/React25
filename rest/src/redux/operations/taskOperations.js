import axios from "axios";
import { db } from "../../config";
import { loaderOff, loaderOn } from "../actions/loaderActions";
import { setError, resetError } from "../actions/errorActions";
import { addTask, deleteTask, editTask, setTasks } from "../actions/taskAction";

const options = {
  header: {
    "Content-Type": "application/json",
  },
};

export const getTaskOperation = (dbName) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await db.collection(dbName).get();
    const formatResult = result.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(setTasks(formatResult));
  } catch (error) {
    dispatch(setError("Bad server"));
  } finally {
    dispatch(loaderOff());
  }
};

// export const getTaskOperation = () => async (dispatch) => {
//   try {
//     dispatch(loaderOn());
//     const result = await axios.get("http://localhost:5000/tasks");
//     console.log(result.data);
//     dispatch(setTasks(result.data));
//   } catch (error) {
//     dispatch(setError("something went wrong, try later"));
//   } finally {
//     dispatch(loaderOff());
//   }
// };

// export const postTaskOperation = (task) => async (dispatch) => {
//   try {
//     dispatch(loaderOn());
//     const result = await axios.post(
//       "http://localhost:5000/tasks",
//       task,
//       options
//     );
//     dispatch(addTask(result.data));
//   } catch (error) {
//     dispatch(setError("something went wrong, try later"));
//   } finally {
//     dispatch(loaderOff());
//   }
// };

export const postTaskOperation = (dbName, task) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await db.collection(dbName).add(task);
    console.log(result);
    const answer = { ...task, id: result.id };
    dispatch(addTask(answer));
  } catch (error) {
    dispatch(setError("something went wrong, try later"));
  } finally {
    dispatch(loaderOff());
  }
};
// export const deleteTaskOperation = (id) => async (dispatch) => {
//   try {
//     dispatch(loaderOn());
//     const result = await axios.delete(`http://localhost:5000/tasks/${id}`);
//   } catch (error) {
//     dispatch(setError("something went wrong, try later"));
//   } finally {
//     dispatch(loaderOff());
//   }
// };

export const deleteTaskOperation = (dbName,id) => async (dispatch) => {
    try {
      dispatch(loaderOn());
      await db.collection(dbName).doc(id).delete()

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
