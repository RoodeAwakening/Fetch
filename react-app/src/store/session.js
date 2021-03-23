// This file will contain all the actions specific to the session user's information and the session user's Redux reducer.

import * as actions from "../store/actionTypes";



const setUser = (user) => {
  return {
    type: actions.SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: actions.REMOVE_USER,
  };
};


export const restoreUser = () => async (dispatch) => {
  const response = await fetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const {profilePhoto, userName, email, password } = user;
  const response = await fetch("/api/users/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      userName,
      email,
      password,
      profilePhoto,
    }),
  });
  const data = await response.json();
  console.log('-----------', data);
  dispatch(setUser(data.user));
  return response;
};

export const loginThunk = (user) => async (dispatch) => {
  const { email, password } = user;
  const response = await fetch("/api/session/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return data;
};

export const logoutThunk = () => async (dispatch) => {
  const response = await fetch('/api/session/', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};

// session reducer that will hold the current session user's information.
export default function sessionReducer(state = { user: null }, action) {
  let newState;
  switch (action.type) {
    case actions.SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case actions.REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
}
