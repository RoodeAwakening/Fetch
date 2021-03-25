import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import LogoutButton from "../auth/LogoutButton";
import { useParams } from "react-router-dom";




import "./ProfileButton.css";

function ProfileButton() {
  const user = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  
  const [showMenu, setShowmenu] = useState(false);
  const { userId }  = useParams();
  const openMenu = () => {
    if (showMenu) return;
    setShowmenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowmenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logoutThunk());
  };

  return (
    <div id="profile_button">
      <button onClick={openMenu}>
      <img className='user-profile-picture' src={user.profilePhoto}/>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
          <LogoutButton />
          </li>
        </ul>
      )}
    </div>
  );
}

export default ProfileButton;
