import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

// images
import ironman from "../../images/ironman_logo.png";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg mb-0 p-0">
      <div className="col-lg-12">
        <div className="row">
          <div className="col-lg-4">
            <Link to="/" className="navbar-brand mx-auto">
              <img src={ironman} width="70" height="70" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon">
                <i className="fa fa-navicon fa-lg" />
              </span>
              />
            </button>
          </div>
          <div
            className="col-lg-8 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent.show"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className="nav-link"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent.show"
                >
                  Projects
                </Link>
              </li>
              <li id="social" className="nav-item">
                <div className="row py-2 px-0">
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
                    <a href="https://www.linkedin.com/in/huangjpc/">
                      <i className="fa fa-linkedin-square fa-2x	" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
