import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LogoutButton from "../auth/LogoutButton";
import ProfileButton from "./ProfileButton";

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        <div className="navbar-left">
          <div id="navbar-logo">
            <img src="/images/splash/splash_title.png" />
          </div>
        </div>
        <div className="navbar-middle">
          <h1>SEARCH BAR</h1>
        </div>

        <div className="navbar-right">
          <div>
            <NavLink to="/feed" exact={true} activeClassName="active">
              <i class="fas fa-home"></i>
            </NavLink>
          </div>
          <div>
            <NavLink to="/comingsoon" exact={true} activeClassName="active">
              <i class="fal fa-paper-plane"></i>
            </NavLink>
          </div>
          <div>
            <NavLink to="/comingsoon" exact={true} activeClassName="active">
              <i class="far fa-compass"></i>
            </NavLink>
          </div>
          <div>
            <NavLink to="/comingsoon" exact={true} activeClassName="active">
              <i class="far fa-heart"></i>
            </NavLink>
          </div>
          <div>
              <ProfileButton />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
