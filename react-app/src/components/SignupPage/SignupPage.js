import React from "react";
import { useSelector } from "react-redux";
import SignUpForm from "../auth/SignUpForm";
import DemoUser from "../auth/DemoUser";
import "./SignupPage.css";

export default function SignupPage() {
  return (
    <div className="Signup_Page-body">
      <div>

      
      <div className="Signup_Page-body-right">
        <div classNam="Signup_Page-body-container">
          <img
            alt="Fetch Title"
            id="splash_logo"
            src="../images/splash/splash_title.png"
          ></img>
          <div className="Signup_Page-demo-user">
            <div>
              <h4>Sign up to see photos and videos from your friends.</h4>
              <DemoUser />
            </div>
          </div>
          <div className="Splash_Page-or">
            <div id="Splash_Page-left-or"></div>
            <div id="Splash_Page-middle-or">
              <h3>OR</h3>
            </div>
            <div id="Splash_Page-right-or"></div>
          </div>
          <div className="Signup_Page-loginForm">
            <SignUpForm />
          </div>
          </div>
          <div className="Splash_Page-body-right-middle">
            <h1 id="splash-signup">
              dont have an account? - <a href="/signup">Sign up</a>
            </h1>
          </div>
          <div className="Splash_Page-body-right-bottom">
            <h1>Get the app.</h1>
            <div>
              <img
                alt="Available on the App Store"
                id="apple"
                src="../images/splash/splash_appStore_icon.png"
              ></img>
              <img
                alt="Available on the PlayStore"
                id="android"
                src="../images/splash/splash_playStore_icon.png"
              ></img>
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
    </div>
  );
}
