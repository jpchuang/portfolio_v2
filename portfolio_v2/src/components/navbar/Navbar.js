import React from "react";

import "./style.css";

// images
import ironman from "../../images/ironman_logo.png";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg mb-0 py-0">
      <div className="container">
        <div className="col-lg-4">
          <a href="/" className="navbar-brand">
            <img src={ironman} width="70" height="70" alt="" />
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
            <li id="social" className="nav-item mx-auto">
              <div className="mail">
                <a href="#">
                  <i className="fa fa-envelope-o fa-2x" />
                </a>
              </div>
              <div className="instagram">
                <a href="#">
                  <i className="fa fa-instagram fa-2x" />
                </a>
              </div>
              <div className="github">
                <a href="#">
                  <i className="fa fa-github fa-2x" />
                </a>
              </div>
              <div className="linkedin">
                <a href="#">
                  <i className="fa fa-linkedin-square fa-2x	" />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
