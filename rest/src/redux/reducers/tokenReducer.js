import { SET_TOKEN, RESET_TOKEN } from "../constants/formConstants";
const initialState = null;

const token = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;
    case RESET_TOKEN:
      return null;
    default:
      return state;
  }
};

export default token;
