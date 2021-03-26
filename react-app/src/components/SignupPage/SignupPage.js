import React from "react";
import { useSelector } from "react-redux";
import SignUpForm from "../auth/SignUpForm";
import DemoUser from "../auth/DemoUser";
import logo from '../../images/splash/splash_title.png'
import apple from '../../images/splash/splash_appStore_icon.png'
import android from '../../images/splash/splash_playStore_icon.png'
import "./SignupPage.css";

export default function SignupPage() {
  return (
    <div className="Signup_Page-body">
      <div className="Signup_Page-body-container">
        <div className="Signup_Page-body-right">
          <div className="Signup_Page-body-right-top">
            <img
              alt="Fetch Title"
              id="Signup_logo"
              src={logo}
            ></img>
            <div className="Signup_Page-demo-user">
              <div >
                <h4>Sign up to see photos and videos from your friends.</h4>
                <DemoUser />
              </div>
            </div>
            <div className="Signup_Page-or">
              <div id="Signup_Page-left-or"></div>
              <div id="Signup_Page-middle-or">
                <h3>OR</h3>
              </div>
              <div id="Signup_Page-right-or"></div>
            </div>
            <div className="Splash_Page-loginForm">
              <SignUpForm />
            </div>

            <div className="signupDetails">
              <h3>
                By signing up, you agree to our
                <a href=""> Terms </a>,<a href=""> Data Policy </a>
                and
                <a href=""> Cookies Policy </a>.
              </h3>
            </div>
          </div>
          <div className="Signup_Page-body-right-middle">
            <h1 id="splash-signup">
              Have an account? - <a href="/">Log in</a>
            </h1>
          </div>
          <div className="Signup_Page-body-right-bottom">
            <h1>Get the app.</h1>
            <div>
              <img
                alt="Available on the App Store"
                id="apple"
                src={apple}
              ></img>
              <img
                alt="Available on the PlayStore"
                id="android"
                src={android}
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className="Signup_Page-body-footer">
        <div>
          <a href="/">About</a>
          <a href="/">Blog</a>
          <a href="/">Jobs</a>
          <a href="/">Help</a>
          <a href="/">API</a>
          <a href="/">Privacy</a>
          <a href="/">Terms</a>
          <a href="/">Top Accounts</a>
          <a href="/"> Hashtags</a>
          <a href="/">Locations</a>
        </div>

        <div>
          <h6>© 2021 Fetch from DJB</h6>
        </div>
      </div>
    </div>
  );
}
