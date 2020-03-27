import React from "react";
import "./App.css";
import NavBar from "./Components/layout/NavBar";
import DashBoard from "./Components/layout/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from "./Components/pokemon/Pokemon";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
