import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import game from "../../assets/images/game.png";
import c from "../../assets/images/c.svg";
import cp from "../../assets/images/c++.svg";



export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <ReactCardFlip
        isFlipped={this.state.isFlipped}
        flipSpeedBackToFront={0.1}
        flipSpeedFrontToBack={0.1}
        flipDirection='vertical'>
        <div style={this.props.styles.card} onClick={this.handleClick}>
          <img style={this.props.styles.image} src={game} alt="game"/>

          <h1>Game Development</h1>
          <h6>More Info</h6>
        </div>

        <div style={this.props.styles.card} onClick={this.handleClick}>
          <p>
            Building game is a tiring task especially if you are beginner. Our
            team will help you out build your game and put it out on internet so
            people can enjoy your awesome idea. Here are the technologies we use:
          </p>
          <img style={this.props.styles.image} src={c} alt="c"/>
          <img style={this.props.styles.image} src={cp} alt="c++"/>
        </div>
      </ReactCardFlip>
    );
  }
}
