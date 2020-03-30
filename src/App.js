import React from "react";
import "./App.css";
import NavBar from "./Components/layout/NavBar";
import DashBoard from "./Components/layout/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from "./Components/pokemon/Pokemon";
import TypeList from "./Components/type/TypeList";
import Catched from "./Components/pokemon/Catched";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={DashBoard} />
            <Route path="/pokemon/:pokemonIndex" component={Pokemon} />
            <Route path="/type" component={TypeList} />
            <Route path="/catched" component={Catched} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
