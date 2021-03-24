import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";
import { signup } from "../../store/session";


const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [errors, setErrors] = useState([]);
  const [image, setImage] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  
  let history = useHistory()
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await dispatch(
        signup({userName, email, password, profilePhoto})
      );
      if (user.errors) {
        setErrors(user.errors);
      }else{

        history.push("/feed")
      }
      return user;
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateProfilePhoto = (e) => {
    setProfilePhoto(e.target.files[0]);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  const emailAndPassword = ()=>{
    if (email.length >= 3 && password.length >= 3 && userName.length >=3 && repeatPassword.length >= 3) {
      return true
    }
      return false
  }

  return (
    
    <form onSubmit={onSignUp} >
      <div>
        <label></label>
        <input
        placeholder="User Name"
          type="text"
          name="userName"
          onChange={updateUsername}
          value={userName}
        ></input>
      </div>
      <div>
        <label></label>
        <input
        placeholder="Email"
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label></label>
        <input
        placeholder="Password"
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label></label>
        <input
        placeholder="Repeat Password"
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div id='profileUpload'>
        <label>Profile Picture</label>
        <input 
          
          type="file"
          name="profile_photo"
          onChange={updateProfilePhoto}
          // value={profilePhoto}
          required={true}
        ></input>
      </div>
      <button id='SignupButton' id={emailAndPassword()? 'SignupButtonTrue':'SignupButtonFalse'} type="submit">Sign Up</button>
      {/* <button type="submit">Sign Up</button> */}
    </form>
    
  );
};

export default SignUpForm;
