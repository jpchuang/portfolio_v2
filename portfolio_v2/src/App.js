import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar branding="Herrow" />
    </div>
  );
}

export default App;
