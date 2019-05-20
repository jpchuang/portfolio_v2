import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Mainpage from "./components/mainpage/Mainpage";
import Portfolio from "./components/portfolio/Portfolio";
import About from "./components/about/About";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </Switch>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
