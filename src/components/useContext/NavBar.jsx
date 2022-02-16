import { NavLink } from "react-router-dom";
import React from "react";

const NavBar = () => {
  return (
    // <nav>
    //     <ul>
    //         <li><NavLink to="/">Home</NavLink></li>
    //         <li><NavLink to="/about">About</NavLink></li>
    //         <li><NavLink to="/login">Login</NavLink></li>
    //     </ul>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          HooksApp
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink activeclassname="active" className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeclassname="active" className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeclassname="active" className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
          </ul>
         
          <span className="navbar-text">useContext and Router</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
