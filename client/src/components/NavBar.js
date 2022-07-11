import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-light">
      {/* "navbar navbar-expand-md bg-light col-sm-11" */}
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          WWW
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/">Reviews</NavLink>
            <NavLink to="add-reviews">Add Reviews</NavLink>
            <NavLink to="users">Login</NavLink>
            <NavLink to="advisory">Travel Advisory</NavLink>
            <NavLink to="bad-route">Bad!</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
