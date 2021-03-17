const ADD_ITEM = "@task/add";
const DELETE_ITEM = "@task/delete";
const EDIT_ITEM = "@task/edit";

//actions
export const addTask = (task) => ({
  type: ADD_ITEM,
  payload: task,
});


export const deleteTask =(id)=>({
  type: DELETE_ITEM,
  payload: id
})

export const editTask = (id) =>({
  type: EDIT_ITEM,
  payload: id
})

//reducers

const initialState = [];

const task = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter((task) => task.id !== action.payload);
    case EDIT_ITEM:
      return state.map((task) =>
        task.id === action.payload ? { ...task, status: true } : task
      );
    default:
      return state;
  }
};
export default task;