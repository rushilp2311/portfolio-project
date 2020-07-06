import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import digital from "../../assets/images/digital.svg";

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
          <img style={this.props.styles.image} src={digital} alt = "digital"/>

          <h1>Digital Marketing</h1>
          <h6>More Info</h6>
        </div>

        <div style={this.props.styles.card} onClick={this.handleClick}>
          <p>
            Digital Marketing is the essential part of a formula for growing a
            business. Without marketing its hard to reach out to potential
            customers and show your product to them. Its hard to target your
            potential customers without proper guidance. But our team will help
            you out to reach out to your customers
          </p>
        </div>
      </ReactCardFlip>
    );
  }
}
