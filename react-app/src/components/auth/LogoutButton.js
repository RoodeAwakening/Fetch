import React from "react";
import { logout } from "../../services/auth";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";

const LogoutButton =  (e) => {
  const dispatch = useDispatch();
  
  const onLogout = async (e) => {
    dispatch(sessionActions.logoutThunk());
  }
  
  return <button onClick={onLogout}>Logout</button>;
};

// OLD CODE USED WITH SETAUTHENTICATED
// const LogoutButton = ({setAuthenticated}) => {
//   const onLogout = async (e) => {
//     await logout();
//     setAuthenticated(false);
//   };

//   return <button onClick={onLogout}>Logout</button>;
// };





export default LogoutButton;
