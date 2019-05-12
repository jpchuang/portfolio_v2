import React from "react";

import "./style.css";

// images
import ironman from "../../images/ironman_logo.png";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg mb-3 py-0">
      <div className="container">
        <div className="col-lg-4">
          <a href="/" className="navbar-brand">
            <img src={ironman} width="80" height="80" alt="" />
          </a>
        </div>
        <div className="col-lg-8">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mx-auto">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a href="#" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
