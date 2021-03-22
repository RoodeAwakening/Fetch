import { useSelector } from "react-redux";
import React from "react";
import "./SplashPage.css";
import LoginForm from "../auth/LoginForm";


export default function SplashPage() {
  return (
    <div className="Splash_Page-body">
      <div className="Splash_Page-body-container">
        <div className="Splash_Page-body-left">
          <img src="../images/splash/spash_phone.png" />
        </div>
        <div className="Splash_Page-body-right">
          
          <div className="Splash_Page-body-right-top">
            
            <img alt="Fetch Title" id="splash_logo" src="../images/splash/splash_title.png"></img>
            <div>
              
              <LoginForm />
            </div>
          </div>
          <div className="Splash_Page-body-right-middle">
            

            <h1 id="splash-signup">dont have an account? - <a href="/signup">Sign up</a></h1> 
            
          </div>
          <div className="Splash_Page-body-right-bottom">
            <h1>get the app</h1>
            <div>

            <img alt="Available on the App Store" id="apple" src="../images/splash/splash_appStore_icon.png"></img>
            <img alt="Available on the PlayStore" id="android" src="../images/splash/splash_playStore_icon.png"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="Splash_Page-body-footer">
        <h2>footer - bla bla bla and stuff ... links and more</h2>
      </div>
    </div>
  );
}
