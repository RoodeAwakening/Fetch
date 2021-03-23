import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import './auth.css'

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  
  const  onLogin = async (e) => {
    e.preventDefault();
    setErrors([]);
    const  user =  await dispatch(sessionActions.loginThunk({ email, password }))
    console.log('user--------',user);
    if (user.errors) {
      setErrors(user.errors)
    }
    return user
  };



// THIS IS OLD CODE THAT USES THE SETAUTHENTICATE
  // const onLogin = async (e) => {
  //   e.preventDefault();
  //   const user = await login(email, password);
  //   console.log('user--------',user);
  //   if (!user.errors) {
  //     // setAuthenticated(true);

  //   } else {
  //     setErrors(user.errors);
  //   }
  // };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

 const emailAndPassword = ()=>{
   if (email.length >= 3 && password.length >= 3) {
     return true
   }
     return false
 }

  if (authenticated) {
    return <Redirect to="/feed" />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div className="login_form-email">
        <label htmlFor="email"></label>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className="login_form-password">
        <label htmlFor="password"></label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
      </div>
        <button id='loginButton' id={emailAndPassword()? 'loginButtonTrue':'loginButtonFalse'} type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;
