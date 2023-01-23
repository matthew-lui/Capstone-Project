import React from "react";
import { useNavigate } from "react-router-dom";
function LogoutPage({ user, setUser }) {
  let navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }

  console.log(user);
  return (
    <div className="logout-form-container">
    <div className="log-out-form">
    <div className="logout-form">
      <h1>Are you sure you want to log out?</h1>
      <button className="btn btn-primary" onClick={handleLogoutClick}>
        Log Out
      </button>
    </div>
    </div>
    </div>
  );
}

export default LogoutPage;
