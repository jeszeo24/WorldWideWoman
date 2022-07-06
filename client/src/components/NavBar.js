import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <NavLink to="/">Reviews</NavLink>
        </li>
        <li>
          <NavLink to="add-reviews">Add Reviews</NavLink>
        </li>
        {/* <li><NavLink to="about">About</NavLink></li>
                <li><NavLink to="users">Users</NavLink></li>
                <li><NavLink to="/add-user">Add User</NavLink></li>
                <li><NavLink to="plans">Plans</NavLink></li>
                <li><NavLink to="bad-route">Bad!</NavLink></li> */}
      </ul>
    </nav>
  );
}

export default NavBar;
