import React from 'react'
import { useDispatch } from 'react-redux'
import * as sessionActions from '../../store/session'
import { useHistory } from 'react-router'

const LogoutButton =  (e) => {
  let history = useHistory()
  const dispatch = useDispatch();
  
  const onLogout = async (e) => {
    dispatch(sessionActions.logoutThunk());
    history.push("/")
  }
  
  return <button id='nav-logout' onClick={onLogout}>Logout</button>;
};

// OLD CODE USED WITH SETAUTHENTICATED
// const LogoutButton = ({setAuthenticated}) => {
//   const onLogout = async (e) => {
//     await logout();
//     setAuthenticated(false);
//   };

//   return <button onClick={onLogout}>Logout</button>;
// };

export default LogoutButton
