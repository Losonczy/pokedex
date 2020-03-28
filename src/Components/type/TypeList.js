import React, { Component } from "react";
import axios from "axios";
import Type from "./Type";
export default class Types extends Component {
  state = {
    url: `https://pokeapi.co/api/v2/type/`,
    type: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ type: res.data["results"] });
  }
  render() {
    return (
      <div>
        {this.state.type ? (
          <div className="row">
            <div className="col">
              {this.state.type.map(type => (
                <Type key={type.name} name={type.name} />
              ))}
            </div>
          </div>
        ) : (
          <h1>Loading Types</h1>
        )}
      </div>
    );
  }
}
