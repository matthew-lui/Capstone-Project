import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MattBook from "./MattBook.png";
// import { useState } from 'react';

function NavBar({ user, loggedIn }) {
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
        {loggedIn && user ? (
          <div className="profile-divider">
            <img
              className="profile_pic"
              src={user.profile_pic}
              alt={user.username}
            />
          <div className="profile_containers">
            <h4 className="profile_greeting">Hi {user.username}!  </h4>
            </div>
            <div>
      <NavLink className="nav-link" to="/create-restaurant">
        Create Restaurant
      </NavLink>
      <NavLink className="nav-link" to="/myfavorites">
        My Favorites
      </NavLink>
      {/* <NavLink className="nav-link" to="/profile">
        Profile
      </NavLink> */}
      </div>
      <div className="mattbooklogo">
      </div>
     </div>
        ) : (
          <div><>
          </></div>
        )}
      </div>
        <img className="matt-book" src={MattBook}/>
       <div className="navalink">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <></>
        <>
          {loggedIn && user ?
          <NavLink className="nav-link" to="/logout">
            Logout
          </NavLink> : <> 
           
          <NavLink className="nav-link" to="/userlogin"> 
            Login
          </NavLink>
      
          <NavLink className="nav-link" to="/signup">
            Sign Up
          </NavLink> </>}
      
        </>
            
      </div>
    </div> 
    </div>
    
  );
}

export default NavBar;
