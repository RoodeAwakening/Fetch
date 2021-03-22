import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import { useHistory } from "react-router-dom";
import './auth.css'


const LoginForm = () => {
  let history = useHistory();
  const [errors, setErrors] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);



  const setDemoLogin = async (e) => {
    e.preventDefault();
    const email = "demo@aa.io";
    const password = "password";
    const user = await login(email, password);
    setAuthenticated(true);
    console.log('auth',setAuthenticated);
    history.push('/feed')
  
  };
  
  

  
  
  
 

  return (
    <form onSubmit={setDemoLogin}>
      
    <button type="submit" id="loginButtonTrue">
      Demo Login
    </button>
   
  </form>

    
  );
};

export default LoginForm;
