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
  
      <div className="profile">
    <div className="nav">
      <div>
        {user ? (
          <div className="profile-divider">
          <div className="profile_containers">
            <img
              className="profile_pic"
              src={user.profile_pic}
              alt={user.username}
            />
            <h4 className="profile_greeting">{user.username}</h4>
            </div>
            <div>
      <NavLink className="nav-link" to="/create-restaurant">
        Create Restaurant
      </NavLink>
      <NavLink className="nav-link" to="/myfavorites">
        My Favorites
      </NavLink>
      </div>
     </div>
        ) : (
          <div></div>
        )}
      </div>
       <div>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <></>
        <>
          <NavLink className="nav-link" to="/userlogin">
            Login
          </NavLink>
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink>
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink>
        </>
      </div>
    </div>
    </div>
    
  );
}

export default NavBar;
