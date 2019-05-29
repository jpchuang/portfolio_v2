import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import jet from "../../images/jetfighter2.png";
import drone from "../../images/drone-lingo.jpg";

class Mainpage extends Component {
  render() {
    return (
      <div id="content" className="content">
        <div className="container mx-0" id="first">
          <div className="row" id="inner-first">
            <h1>
              Hello,
              <strong className="bold-text"> I'm Joey</strong>
            </h1>
          </div>
          <div className="row" id="inner-second">
            <h1>
              I'm an aspiring{" "}
              <font color="#4B8AB8">Aerospace GNC Engineer</font> from Amsterdam
            </h1>
          </div>
          <div className="row" id="inner-third">
            <h3>Sharing his imagination with the world</h3>
          </div>
          <div className="row" id="inner-fourth">
            <Link to="/portfolio" className="button">
              See my projects
            </Link>
          </div>
          {/* <img className="background mx-auto" src={jet} /> */}
        </div>
        <div className="container mx-0" id="second">
          <div className="row" id="content-header">
            <div className="col-lg-12">
              {/* Show 3 random portfolio posts */}
              <h3>My latest projects</h3>
              <div className="header-center" />
            </div>
          </div>
          <div className="row" id="content-detail">
            <div className="col-lg-4" id="first-thumb">
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

        <div className="container mx-0" id="third">
          <footer className="footer">
            <div className="row">
              <div className="col-lg-12">
                <div className="left">
                  <h8>© 2019 Joey Huang</h8>
                </div>
              </div>
            </div>
            <div className="gradient-white">
              <a href="#top" />
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Mainpage;
