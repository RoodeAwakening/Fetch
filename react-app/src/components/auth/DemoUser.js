import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import './auth.css'


const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const setDemoLogin = async (e) => {
    e.preventDefault();
    const email = "demo@aa.io";
    const password = "password";
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };


  



  if (authenticated) {
    return <Redirect to="/feed" />;
  }

  return (
    <form onSubmit={setDemoLogin}>
    <button type="submit" id="loginButtonTrue">
      Demo Login
    </button>
  </form>

    
  );
};

export default LoginForm;
