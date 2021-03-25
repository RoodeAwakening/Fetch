import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LogoutButton from "../auth/LogoutButton";
import ProfileButton from "./ProfileButton"

const NavBar = () => {
  return (
    <div className="NavBar">
      <nav>
        <div>
          <NavLink to="/feed" exact={true} activeClassName="active">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </div>
        {/* <div>
          <LogoutButton />
        </div> */}
        <div>
          <ProfileButton/>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
