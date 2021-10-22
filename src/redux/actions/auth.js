import * as types from "../types";

export function loginSuccess(payload) {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: payload,
    });
  };
}
export function verifyTokenSuccess(payload) {
  return (dispatch) => {
    dispatch({
      type: types.VERIFY_TOKEN_SUCCESS,
      payload: payload,
    });
  };
}
export function logoutSuccess() {
  return (dispatch) => {
    dispatch({
      type: types.LOGOUT_SUCCESS,
    });
  };
}

export function fetchUser(user) {
  return (dispatch) => {
    dispatch({
      type: types.FETCH_USER,
      payload: user,
    });
  };
}
