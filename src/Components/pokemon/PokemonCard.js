import React, { Component } from "react";
import styled from "styled-components";

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

export default class PokemonCard extends Component {
  state = {
    name: "",
    imageUrl: "",
    pokemondIndex: ""
  };

  componentDidMount() {
    const name = this.props.name;
    const url = this.props.url;
    const pokemondIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeApi/sprites/blob/master/sprites/pokemon/${pokemondIndex}.png?raw=true`;
    this.setState({
      name,
      imageUrl,
      pokemondIndex
    });
  }

  render() {
    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <div className="card">
          <h5 className="card-header">{this.state.pokemondIndex}</h5>
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            src={this.state.imageUrl}
          ></Sprite>
          <div className="card-body mx-auto">
            <h6 className="card-title">{this.state.name}</h6>
          </div>
        </div>
      </div>
    );
  }
}
