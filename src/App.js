import React from "react";
import "./App.css";
import NavBar from "./Components/layout/NavBar";
import DashBoard from "./Components/layout/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
