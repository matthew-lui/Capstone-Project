import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// import { useState } from 'react';

function NavBar({ user }) {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   // check if user is logged in
  //   const checkLoggedIn = async () => {
  //     const response = await fetch('/api/check-login');
  //     const data = await response.json();
  //     setIsLoggedIn(data.isLoggedIn);
  //   };
  //   checkLoggedIn();
  // }, []);

  return (
    <>
      <div>
        {user ? (
          <div className="profile_container">
            <img
              className="profile_pic"
              src={user.profile_pic}
              alt={user.username}
            />
            <h4 className="profile_greeting">{user.username}</h4>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      {/* <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/profile">Profile</NavLink>} */}
      <nav className="navMenu">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        <NavLink className="navlink" to="/myfavorites">
          My Favorites
        </NavLink>
        <></>
        <>
          <NavLink className="navlink" to="/create-restaurant">
            Create Restaurant
          </NavLink>
          <NavLink className="navlink" to="/userlogin">
            Login
          </NavLink>
          <NavLink className="navlink" to="/signup">
            Sign Up
          </NavLink>
          <NavLink className="navlink" to="/logout">
            Logout
          </NavLink>
        </>
      </nav>
    </>
  );
}

export default NavBar;
