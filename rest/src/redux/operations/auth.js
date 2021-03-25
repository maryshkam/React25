import axios from "axios";
import { loaderOn, loaderOff } from "../actions/loaderActions";
import { setError, resetError } from "../actions/errorActions";
import { setToken, resetToken } from "../actions/tokenActions";

// const options = {
//   header: {
//     headers:{'content-type':'application.json',
//           }
//   },
// };

// axios({
//   url: '',
//   method: 'post',
//   headers: {
//     'content-type': "application/json",
//     Authorization: `Bearer ${token}`
//   },
//   data: answer
// })

export const registerOperation = (userData) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      "https://goit-phonebook-api.herokuapp.com/users/signup",
      userData
    );
    dispatch(setToken(result.data.token));
  } catch (error) {
    dispatch(setError("Bad server"));
  } finally {
    dispatch(loaderOff());
  }
};

export const loginOperation = (userData) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.post(
      "https://goit-phonebook-api.herokuapp.com/users/login",
      userData
    );
    dispatch(setToken(result.data.token));
  } catch (error) {
    dispatch(setError("Bad server"));
  } finally {
    dispatch(loaderOff());
  }
};

export const logOut = (token) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios({
      url: "https://goit-phonebook-api.herokuapp.com/users/logout",
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("logout", result);
    dispatch(resetToken());
  } catch (error) {
    dispatch(setError("Bad server"));
  } finally {
    dispatch(loaderOff());
  }
};
