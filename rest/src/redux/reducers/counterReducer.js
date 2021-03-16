import { RESET, INCREMENT, DECREMENT } from "../constants/counterConstants";
const initialState = 0;

const count = (state = initialState, action) => {
  switch (action.type) {
    case RESET:
      return 0;
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default count;
