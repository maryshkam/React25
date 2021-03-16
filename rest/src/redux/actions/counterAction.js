import { RESET, INCREMENT, DECREMENT } from "../constants/counterConstants";

export const reset = () => ({
  type: RESET,
});

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
})
