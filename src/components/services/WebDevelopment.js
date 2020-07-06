import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import computer from "../../assets/images/computer.svg";
import php from "../../assets/images/php.svg";
import laravel from "../../assets/images/laravel.svg";
import js from "../../assets/images/js.svg";
import react from "../../assets/images/react.svg";



export default class WebDevelopment extends Component {
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
          <img style={this.props.styles.image} src={computer} alt='computer' />

          <h1>Web Development</h1>
          <h6>More Info</h6>
        </div>

        <div style={this.props.styles.card} onClick={this.handleClick}>
          <p>
            We build website that can help build your business. Give your
            customers great experience with a great website.We create responsive
            and mobile friendly design.Our experienced team will create an
            eye-catching website and desgin. Here are the Technologies we use:
          </p>
          <img style={this.props.styles.image} src={php} alt="php"/>
          <img style={this.props.styles.image} src={laravel} alt="laravel"/>
          <img style={this.props.styles.image} src={js} alt="js"/>
          <img style={this.props.styles.image} src={react} alt="react"/>
        </div>
      </ReactCardFlip>
    );
  }
}
