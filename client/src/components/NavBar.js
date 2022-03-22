import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-block",
  width: "200px",
  padding: "15px",
  margin: "6px 20px 6px",
  borderRadius: "2%",
  textDecoration: "none",
  color: "black",
};

function NavBar({ user, setUser }) {
  function handleLogout() {
    fetch('/logout', {
      method: "DELETE"
    })
      .then(r => {
        if (r.ok) {
          setUser(null)
        }
      })
  }

  return (
    <div id="navbar">
      <NavLink 
        to="/dashboard" exact 
        style={linkStyles}
        activeStyle={{background: "antiquewhite",}}
      >
        <b>Dashboard</b>
      </NavLink>
      <NavLink 
        to="/record_new_lift" exact
        style={linkStyles}
        activeStyle={{background: "antiquewhite",}}
      >
        <b>Record New Lift</b>
      </NavLink>
      <NavLink 
        to="/profile" exact
        style={linkStyles}
        activeStyle={{background: "white",}}
      >
        <b>Profile</b>
      </NavLink>
      <NavLink
        style={linkStyles}
        onClick={handleLogout}
      >
        Logout
      </NavLink>
    </div>
  );
}
  
  export default NavBar;