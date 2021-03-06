import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import drone from "../../images/drone-lingo.jpg";

class Portfolio extends Component {
  render() {
    return (
      <div id="content" className="content-portfolio">
        <div className="container mx-0 pt-5" id="first-portfolio">
          <div className="row" id="content-portfolio-1">
            <div className="col-lg-4" id="first-thumb">
              <Link to="/portfolio/project-drone">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={drone}
                      alt=""
                      className="img-fluid w-70 h-50 mb-3"
                      height="120px"
                      width="200px"
                    />
                    <h3>Control Theory on Aerial Robots</h3>
                    <p>Text-description</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4" id="second-thumb">
              <a href="#">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={drone}
                      alt=""
                      className="img-fluid w-70 h-50 mb-3"
                      height="120px"
                      width="200px"
                    />
                    <h3>Control Theory on Aerial Robots</h3>
                    <p>Text-description</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-4" id="third-thumb">
              <a href="#">
                <div className="card">
                  <div className="card-body">
                    <img
                      src={drone}
                      alt=""
                      className="img-fluid w-70 h-50 mb-3"
                      height="120px"
                      width="200px"
                    />
                    <h3>Control Theory on Aerial Robots</h3>
                    <p>Text-description</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
